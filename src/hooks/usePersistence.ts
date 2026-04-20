import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('bookmarks', []);

  const toggleBookmark = (chapterId: string) => {
    if (bookmarks.includes(chapterId)) {
      setBookmarks(bookmarks.filter(id => id !== chapterId));
    } else {
      setBookmarks([...bookmarks, chapterId]);
    }
  };

  const isBookmarked = (chapterId: string) => bookmarks.includes(chapterId);

  return { bookmarks, toggleBookmark, isBookmarked };
}

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<Record<string, boolean>>('chapter-progress', {});

  const markAsComplete = (chapterId: string) => {
    setProgress({ ...progress, [chapterId]: true });
  };

  const isCompleted = (chapterId: string) => !!progress[chapterId];

  const totalCompleted = Object.values(progress).filter(Boolean).length;

  return { progress, markAsComplete, isCompleted, totalCompleted };
}
