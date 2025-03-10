
export interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface FeedbackItem {
  id: number;
  user: User;
  rating: number;
  category: string;
  comment: string;
  date: string;
}

export interface CategoryScore {
  name: string;
  score: number;
}

// Mock data for 10 users with first names only
export const users: User[] = [
  { id: 1, name: 'Alex', avatar: 'AT' },
  { id: 2, name: 'Mira', avatar: 'MC' },
  { id: 3, name: 'Jordan', avatar: 'JL' },
  { id: 4, name: 'Taylor', avatar: 'TK' },
  { id: 5, name: 'Sam', avatar: 'SR' },
  { id: 6, name: 'Jamie', avatar: 'JG' },
  { id: 7, name: 'Morgan', avatar: 'MW' },
  { id: 8, name: 'Casey', avatar: 'CJ' },
  { id: 9, name: 'Riley', avatar: 'RP' },
  { id: 10, name: 'Avery', avatar: 'AW' },
];

// Mock feedback data
export const feedbackData: FeedbackItem[] = [
  {
    id: 1,
    user: users[0],
    rating: 4,
    category: 'Usability',
    comment: "The quiz was intuitive and the progress bar showing how many questions were left was helpful.",
    date: "2023-10-15"
  },
  {
    id: 2,
    user: users[1],
    rating: 5,
    category: 'Result Accuracy',
    comment: "I'm impressed with how accurate the product recommendations were. They matched my preferences perfectly.",
    date: "2023-10-16"
  },
  {
    id: 3,
    user: users[2],
    rating: 4.5,
    category: 'Visual Design',
    comment: "The design was modern and engaging. I especially liked the color scheme and visual transitions.",
    date: "2023-10-17"
  },
  {
    id: 4,
    user: users[3],
    rating: 5,
    category: 'Usability',
    comment: "Loved how easy it was to navigate between questions and change my answers if needed.",
    date: "2023-10-18"
  },
  {
    id: 5,
    user: users[4],
    rating: 4,
    category: 'Result Accuracy',
    comment: "Most recommendations were spot on, though one or two seemed a bit off based on my selections.",
    date: "2023-10-19"
  },
  {
    id: 6,
    user: users[5],
    rating: 4,
    category: 'Visual Design',
    comment: "The design was pretty good. I liked the icons and illustrations throughout the experience.",
    date: "2023-10-20"
  },
  {
    id: 7,
    user: users[6],
    rating: 5,
    category: 'Usability',
    comment: "The quiz flowed naturally from one question to the next. Very smooth experience overall.",
    date: "2023-10-21"
  },
  {
    id: 8,
    user: users[7],
    rating: 4,
    category: 'Result Accuracy',
    comment: "I was skeptical at first, but the recommendations were surprisingly relevant to my needs.",
    date: "2023-10-22"
  },
  {
    id: 9,
    user: users[8],
    rating: 4,
    category: 'Visual Design',
    comment: "Design had good personality. I appreciated the attention to detail in the animations.",
    date: "2023-10-23"
  },
  {
    id: 10,
    user: users[9],
    rating: 4,
    category: 'Usability',
    comment: "Very user-friendly. I particularly liked how the questions adapted based on my previous answers.",
    date: "2023-10-24"
  },
];

// Calculate category scores (average rating per category)
export const getCategoryScores = (): CategoryScore[] => {
  const categories = [...new Set(feedbackData.map(item => item.category))];
  
  return categories.map(category => {
    const categoryItems = feedbackData.filter(item => item.category === category);
    const totalScore = categoryItems.reduce((sum, item) => sum + item.rating, 0);
    const averageScore = totalScore / categoryItems.length;
    
    return {
      name: category,
      score: parseFloat(averageScore.toFixed(1))
    };
  });
};

// Calculate overall satisfaction score (average of all ratings)
export const getOverallSatisfactionScore = (): number => {
  const totalScore = feedbackData.reduce((sum, item) => sum + item.rating, 0);
  const averageScore = totalScore / feedbackData.length;
  return parseFloat(averageScore.toFixed(1));
};

// Get distribution of ratings (count of each rating)
export const getRatingDistribution = (): { rating: number; count: number }[] => {
  const distribution = [1, 2, 3, 4, 5].map(rating => {
    return {
      rating,
      count: feedbackData.filter(item => item.rating === rating).length
    };
  });
  
  return distribution;
};
