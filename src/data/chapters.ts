export interface Chapter {
  id: string;
  title: string;
  description: string;
  summary: string;
  wordMeanings: { word: string; meaning: string }[];
  vocabulary: string[];
  questions: { question: string; answer: string; type: 'short' | 'long' }[];
  fillInTheBlanks: { sentence: string; answer: string }[];
  matchTheFollowing: { left: string; right: string }[];
  extraPractice: string[];
  importantNotes: string[];
  imageUrl: string;
}

export const chapters: Chapter[] = [
  {
    id: 'a-happy-child',
    title: 'A Happy Child',
    description: 'A little girl tells us about her red house and why she is happy.',
    summary: 'In this poem, a child describes her red house and her daily activities. She plays long and laughs all day. She has a green tree that gives her shade from the sun.',
    wordMeanings: [
      { word: 'House', meaning: 'A place where people live' },
      { word: 'Laugh', meaning: 'To make sounds and facial expressions of joy' },
      { word: 'Shade', meaning: 'Darker area where sunlight is blocked' },
      { word: 'Hardly', meaning: 'Almost never' }
    ],
    vocabulary: ['Red', 'Sun', 'Tree', 'Green', 'Little', 'Happy'],
    questions: [
      { question: 'What color is the child\'s house?', answer: 'The child\'s house is red in color.', type: 'short' },
      { question: 'What does the child do all day long?', answer: 'The child laughs and plays all day long.', type: 'short' },
      { question: 'Is the tree mentioned in the poem big or small?', answer: 'The poem mentions a green tree that provides shade, usually implying it is mature and big enough to provide shade.', type: 'long' }
    ],
    fillInTheBlanks: [
      { sentence: 'My house is ____ in color.', answer: 'red' },
      { sentence: 'I ____ and play all day long.', answer: 'laugh' }
    ],
    matchTheFollowing: [
      { left: 'Red', right: 'House' },
      { left: 'Green', right: 'Tree' },
      { left: 'Yellow', right: 'Sun' }
    ],
    extraPractice: [
      { description: 'Draw your own house and color it.' },
      { description: 'Write five sentences about your favorite tree.' }
    ] as any,
    importantNotes: ['The poem teaches us about colors.', 'It emphasizes the joy of childhood.'],
    imageUrl: 'https://picsum.photos/seed/happy-child/400/300'
  },
  {
    id: 'three-little-pigs',
    title: 'Three Little Pigs',
    description: 'The story of Sonu, Monu, and Gonu and the big bad wolf.',
    summary: 'Sonu lived in a straw house, Monu in a stick house, and Gonu in a brick house. A big bad wolf blew down straw and stick houses, but could not blow down the brick house.',
    wordMeanings: [
      { word: 'Straw', meaning: 'Dried stalks of grain' },
      { word: 'Stick', meaning: 'A thin piece of wood' },
      { word: 'Brick', meaning: 'Hard rectangular block used for building' },
      { word: 'Wolf', meaning: 'A wild meat-eating animal' },
      { word: 'Huff', meaning: 'To breathe out loudly' }
    ],
    vocabulary: ['One', 'Two', 'Three', 'Bad', 'Big', 'Strong'],
    questions: [
      { question: 'Who lived in the brick house?', answer: 'Gonu lived in the brick house.', type: 'short' },
      { question: 'Why could the wolf not blow down the brick house?', answer: 'The wolf could not blow down the brick house because it was very strong.', type: 'long' }
    ],
    fillInTheBlanks: [
      { sentence: 'Sonu lived in a house of ____.', answer: 'straw' },
      { sentence: 'The wolf was ____ and bad.', answer: 'big' }
    ],
    matchTheFollowing: [
      { left: 'Sonu', right: 'Straw' },
      { left: 'Monu', right: 'Sticks' },
      { left: 'Gonu', right: 'Bricks' }
    ],
    extraPractice: [
      { description: 'Act out the story with your friends.' },
      { description: 'List three things made of bricks.' }
    ] as any,
    importantNotes: ['Strength and planning are important.', 'Solid foundations last longer.'],
    imageUrl: 'https://picsum.photos/seed/pigs/400/300'
  },
  {
    id: 'after-a-bath',
    title: 'After a Bath',
    description: 'A child tries to dry himself after a bath.',
    summary: 'The child talks about his routine after taking a bath. He tries to wipe himself dry, focusing on his fingers, toes, legs, and nose.',
    wordMeanings: [
      { word: 'Wipe', meaning: 'To clean or dry by rubbing' },
      { word: 'Bath', meaning: 'The act of washing the body' },
      { word: 'Shiny', meaning: 'Reflecting light' }
    ],
    vocabulary: ['Hands', 'Fingers', 'Toes', 'Legs', 'Nose'],
    questions: [
      { question: 'What does the child try to do after a bath?', answer: 'The child tries to wipe himself dry.', type: 'short' },
      { question: 'How many wet legs does the child have?', answer: 'The child has two wet legs.', type: 'short' }
    ],
    fillInTheBlanks: [
      { sentence: 'I have ____ wet legs.', answer: 'two' },
      { sentence: 'I wipe my ____ and toes.', answer: 'fingers' }
    ],
    matchTheFollowing: [
      { left: 'Hand', right: 'Wipe' },
      { left: 'Nose', right: 'Shiny' },
      { left: 'Dog', right: 'Shake' }
    ],
    extraPractice: [
      { description: 'Name five parts of your body.' }
    ] as any,
    importantNotes: ['Personal hygiene is important.', 'The poem uses simple rhyming words.'],
    imageUrl: 'https://picsum.photos/seed/bath/400/300'
  },
  {
    id: 'the-bubble-the-straw-and-the-shoe',
    title: 'The Bubble, The Straw and The Shoe',
    description: 'A funny story about three friends trying to cross a river.',
    summary: 'A Bubble, a Straw, and a Shoe decide to cross a river. The Straw stretches itself, but when the Shoe jumps on it, it breaks. The Bubble shakes with laughter and bursts.',
    wordMeanings: [
      { word: 'River', meaning: 'Flowing water' },
      { word: 'Stretch', meaning: 'To make longer' },
      { word: 'Burst', meaning: 'To break open' }
    ],
    vocabulary: ['Bubble', 'Straw', 'Shoe', 'Splash', 'Laughter'],
    questions: [
      { question: 'Who were the three friends?', answer: 'The three friends were the Bubble, the Straw and the Shoe.', type: 'short' },
      { question: 'What did the Straw do to help?', answer: 'The Straw stretched itself from one bank to the other.', type: 'short' }
    ],
    fillInTheBlanks: [
      { sentence: 'The ____ broke into pieces.', answer: 'straw' },
      { sentence: 'The shoe ____ on the straw.', answer: 'jumped' }
    ],
    matchTheFollowing: [
      { left: 'Bubble', right: 'Burst' },
      { left: 'Straw', right: 'Stretch' },
      { left: 'Shoe', right: 'Float' }
    ],
    extraPractice: [
      { description: 'Draw a bubble and color it with rainbow colors.' }
    ] as any,
    importantNotes: ['Teamwork is good, but physics matters!', 'A playful take on causality.'],
    imageUrl: 'https://picsum.photos/seed/bubble/400/300'
  },
  {
    id: 'one-little-kitten',
    title: 'One Little Kitten',
    description: 'A counting poem with many different animals.',
    summary: 'This poem helps kids learn numbers from 1 to 15 while introducing various animals like kittens, butterflies, cats, rats, and more.',
    wordMeanings: [
      { word: 'Butterfly', meaning: 'An insect with colorful wings' },
      { word: 'Silly', meaning: 'Funny or foolish' },
      { word: 'Nervous', meaning: 'Feeling worried' }
    ],
    vocabulary: ['One', 'Two', 'Ten', 'Fifteen', 'Kitten', 'Elephant'],
    questions: [
      { question: 'How many kittens are there in the poem?', answer: 'There is one little kitten.', type: 'short' },
      { question: 'Name two animals from the poem.', answer: 'Butterflies and Elephants are two animals from the poem.', type: 'short' }
    ],
    fillInTheBlanks: [
      { sentence: 'One little ____.', answer: 'kitten' },
      { sentence: 'Two big ____.', answer: 'cats' }
    ],
    matchTheFollowing: [
      { left: 'One', right: 'Kitten' },
      { left: 'Two', right: 'Cats' },
      { left: 'Three', right: 'Butterflies' }
    ],
    extraPractice: [
      { description: 'Count animals in your garden and write them down.' }
    ] as any,
    importantNotes: ['Great for learning numbers.', 'Helps with animal names and spelling.'],
    imageUrl: 'https://picsum.photos/seed/kitten/400/300'
  },
  {
    id: 'lalu-and-peelu',
    title: 'Lalu and Peelu',
    description: 'The story of two chicks and a red chili.',
    summary: 'Lalu loved red things and Peelu loved yellow things. One day Lalu ate a red chili and his mouth started burning. Peelu brought a yellow laddu to help him.',
    wordMeanings: [
      { word: 'Chili', meaning: 'A hot spicy pepper' },
      { word: 'Burning', meaning: 'Feeling very hot and painful' },
      { word: 'Laddu', meaning: 'A sweet Indian ball-shaped treat' }
    ],
    vocabulary: ['Red', 'Yellow', 'Hot', 'Sweet', 'Chicks'],
    questions: [
      { question: 'What did Lalu eat one day?', answer: 'Lalu ate a red chili one day.', type: 'short' },
      { question: 'What did Peelu bring for Lalu?', answer: 'Peelu brought a yellow laddu for Lalu.', type: 'short' }
    ],
    fillInTheBlanks: [
      { sentence: 'Lalu ate a ____ chili.', answer: 'red' },
      { sentence: 'The chicken\'s mouth started ____.', answer: 'burning' }
    ],
    matchTheFollowing: [
      { left: 'Lalu', right: 'Red' },
      { left: 'Peelu', right: 'Yellow' }
    ],
    extraPractice: [
      { description: 'Draw a red chick and a yellow chick.' }
    ] as any,
    importantNotes: ['Teaches about colors.', 'A lesson in helping each other.'],
    imageUrl: 'https://picsum.photos/seed/chicken/400/300'
  },
  {
    id: 'once-i-saw-a-little-bird',
    title: 'Once I Saw a Little Bird',
    description: 'A poem about a child trying to talk to a bird.',
    summary: 'A child sees a little bird hopping on his window-sill. He tries to say "How do you do?", but the bird shakes its tail and flies away.',
    wordMeanings: [
      { word: 'Hop', meaning: 'To jump a short distance' },
      { word: 'Window-sill', meaning: 'The shelf at the bottom of a window' },
      { word: 'Tail', meaning: 'The back part of an animal\'s body' }
    ],
    vocabulary: ['Bird', 'Window', 'Hop', 'Tail', 'Fly'],
    questions: [
      { question: 'What was the bird doing?', answer: 'The bird was hopping on the window-sill.', type: 'short' },
      { question: 'What did the bird do when the boy said "How do you do?"', answer: 'The bird shook its tail and flew away.', type: 'short' }
    ],
    fillInTheBlanks: [
      { sentence: 'Once I saw a little ____.', answer: 'bird' },
      { sentence: 'The bird ____ its tail.', answer: 'shook' }
    ],
    matchTheFollowing: [
      { left: 'Bird', right: 'Hop' },
      { left: 'Boy', right: 'Say' }
    ],
    extraPractice: [
      { description: 'Draw a bird and color it.' }
    ] as any,
    importantNotes: ['Teaches about nature.', 'Good for practicing rhymes.'],
    imageUrl: 'https://picsum.photos/seed/bird/400/300'
  },
  {
    id: 'mittu-and-the-yellow-mango',
    title: 'Mittu and the Yellow Mango',
    description: 'A story about a parrot and a big yellow mango.',
    summary: 'Mittu is a green parrot with a red beak. He loves mangoes but a big black crow guards a mango tree. Mittu uses a red balloon to trick the crow and eat the mango.',
    wordMeanings: [
      { word: 'Beak', meaning: 'The hard part of a bird\'s mouth' },
      { word: 'Parrot', meaning: 'A bright colored bird that can mimic speech' },
      { word: 'Trick', meaning: 'A clever way to deceive someone' }
    ],
    vocabulary: ['Parrot', 'Mango', 'Balloon', 'Crow', 'Clever'],
    questions: [
      { question: 'What did Mittu see on the tree?', answer: 'Mittu saw a big yellow mango on the tree.', type: 'short' },
      { question: 'How did Mittu trick the crow?', answer: 'Mittu pecked a red balloon which went "POP!", scaring the crow away.', type: 'long' }
    ],
    fillInTheBlanks: [
      { sentence: 'Mittu was a ____.', answer: 'parrot' },
      { sentence: 'The crow was ____ and bad.', answer: 'big' }
    ],
    matchTheFollowing: [
      { left: 'Mittu', right: 'Parrot' },
      { left: 'Crow', right: 'Black' },
      { left: 'Mango', right: 'Yellow' }
    ],
    extraPractice: [
      { description: 'Draw a parrot eating a mango.' }
    ] as any,
    importantNotes: ['Intelligence wins over size.', 'Perseverance helps reach goals.'],
    imageUrl: 'https://picsum.photos/seed/parrot/400/300'
  }
];
