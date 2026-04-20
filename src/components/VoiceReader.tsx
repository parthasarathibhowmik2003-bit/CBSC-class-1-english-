import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const VoiceReader = ({ text }: { text: string }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    setSynth(window.speechSynthesis);
    return () => window.speechSynthesis.cancel();
  }, []);

  const speak = () => {
    if (!synth) return;
    if (isSpeaking) {
      synth.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    utterance.rate = 0.9; // Slightly slower for kids
    
    setIsSpeaking(true);
    synth.speak(utterance);
  };

  return (
    <button
      onClick={speak}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all",
        isSpeaking 
          ? "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400"
          : "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400 hover:bg-sky-200 dark:hover:bg-sky-900/50"
      )}
    >
      {isSpeaking ? <VolumeX size={18} /> : <Volume2 size={18} />}
      {isSpeaking ? 'Stop Reading' : 'Listen Now'}
    </button>
  );
};
