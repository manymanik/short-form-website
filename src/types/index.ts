import { LucideIcon } from 'lucide-react';

export interface Review {
  text: string;
  author: string;
  role: string;
  image: string;
  longText?: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface OfferFeature {
  title: string;
  description: string;
}

export interface Problem {
  icon: LucideIcon;
  title: string;
  description: string;
}