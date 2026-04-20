export interface GrammarTopic {
  id: string;
  title: string;
  description: string;
  examples: string[];
  rules: string[];
  exercises: { question: string; answer: string }[];
}

export const grammarTopics: GrammarTopic[] = [
  {
    id: 'nouns',
    title: 'Nouns (Naming Words)',
    description: 'Nouns are names of persons, places, animals, or things.',
    examples: ['Person: Ram, Girl', 'Place: Delhi, School', 'Animal: Lion, Dog', 'Thing: Pen, Table'],
    rules: ['Every person has a name.', 'Every place has a name.'],
    exercises: [
      { question: 'Identify the noun: The cat is on the mat.', answer: 'Cat, Mat' },
      { question: 'Circle the noun: Delhi is a big city.', answer: 'Delhi, City' }
    ]
  },
  {
    id: 'pronouns',
    title: 'Pronouns',
    description: 'Pronouns are words used in place of nouns.',
    examples: ['He (for boys)', 'She (for girls)', 'It (for things/animals)', 'They (for many)'],
    rules: ['Use "He" for a boy.', 'Use "She" for a girl.'],
    exercises: [
      { question: 'Change to pronoun: Rahul is playing.', answer: 'He is playing.' },
      { question: 'Change to pronoun: Sita is dancing.', answer: 'She is dancing.' }
    ]
  },
  {
    id: 'is-am-are',
    title: 'Use of Is, Am, Are',
    description: 'We use is, am, and are to describe something happening now.',
    examples: ['I am a student.', 'He is happy.', 'They are playing.'],
    rules: ['Am is used with I.', 'Is is used with He, She, It, or Singular Nouns.', 'Are is used with You, We, They, or Plural Nouns.'],
    exercises: [
      { question: 'Fill in: I ____ a boy.', answer: 'am' },
      { question: 'Fill in: The birds ____ flying.', answer: 'are' }
    ]
  }
];
