import { Hammer, Frown, Heart } from 'lucide-react';
import { Problem } from '../types';

export const problems: Problem[] = [
  {
    icon: Hammer,
    title: "All that effort, and no return?",
    description: "You're driving visitors, but they're not taking action. All that effort, and no return."
  },
  {
    icon: Frown,
    title: "Your offer deserves better?",
    description: "You know your product is impactful, but it's not connecting. Sales aren't matching the value."
  },
  {
    icon: Heart,
    title: "Unsure what's broken?",
    description: "Headline, design, offer, copy—where's the weak link? It's hard to guess, and every guess wastes time and money."
  }
];