import { Video, LineChart, Target, BarChart } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    icon: Video,
    title: "Content Creation",
    description: "Professional short-form videos optimized for each platform"
  },
  {
    icon: LineChart, // Changed from Trending to LineChart
    title: "Trend Analysis",
    description: "Stay ahead of viral trends and content opportunities"
  },
  {
    icon: Target,
    title: "Audience Targeting",
    description: "Reach the right viewers with precision targeting"
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Detailed insights and ROI tracking for every campaign"
  }
];