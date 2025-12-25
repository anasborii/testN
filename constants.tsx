
import React from 'react';
import { PricingPlan } from './types';

const GREATLY_AWAKENED_FEATURES = [
  { text: 'Access to all livestreams, courses and classes, connecting directly with Jimmy, expert instructors, and visionaries' },
  { text: '24/7 access to all archived videos' },
  { text: 'Private digital journals' },
  { text: 'The Greatly Awakened community forum' },
  { text: 'Weekly curated newsletters' },
  { text: 'Discounts on merchandise store' },
  { text: 'Access to MAX: Your Virtual Oracle Gateway™ - 10 questions per day' },
  { text: 'Standard speed and astrology engine' },
  { text: 'Up to 6 months forecasting' },
  { text: 'Personalized preference learning and memory' },
];

export const PLANS: PricingPlan[] = [
  {
    id: 'foundation',
    badge: 'YOUR SPIRITUAL FOUNDATION',
    title: 'Greatly Awakened',
    description: 'Complete spiritual transformation and co-creation',
    monthly: {
      price: '$19',
      note: '/MONTH',
      buttonText: '$19/Month'
    },
    annual: {
      price: '$189',
      note: '/YEAR',
      buttonText: '$189/YEAR'
    },
    features: {
      monthly: GREATLY_AWAKENED_FEATURES,
      annual: GREATLY_AWAKENED_FEATURES
    },
    colors: {
      accent: '#10b981', // Emerald Green
      border: 'rgba(16, 185, 129, 0.4)',
      bg: '#05110d',
      badge: 'rgba(16, 185, 129, 0.15)',
      button: '#059669'
    },
    borderStyle: 'solid'
  },
  {
    id: 'expansion',
    badge: 'EXPANSION LAYER',
    title: 'MAX: Your Virtual Oracle Gateway™',
    description: 'Advanced spiritual guidance and infinite knowledge',
    monthly: {
      price: '$11',
      note: '/MONTH',
      previousPrice: '$19',
      buttonText: '$11/Month'
    },
    annual: {
      price: '$120',
      note: '/YEAR',
      previousPrice: '$200',
      buttonText: '$120/year'
    },
    features: {
      monthly: [
        { text: 'Unlimited Access to MAX: Your Virtual Oracle Gateway™', isPremium: true },
        { text: 'Supports Whole Sign & Placidus' },
        { text: 'Longer responses with richer context' },
        { text: 'Enhanced, faster astrology engine' },
        { text: 'Up to 2 years forecasting' },
      ],
      annual: [
        { text: 'Unlimited Access to MAX: Your Virtual Oracle Gateway™', isPremium: true },
        { text: 'Personalized, 365-Day Transit Calendar - Custom Built ($149 value)' },
        { text: 'Supports Whole Sign & Placidus' },
        { text: 'Longer responses with richer context' },
        { text: 'Enhanced, faster astrology engine' },
        { text: 'Up to 2 years forecasting' },
      ]
    },
    colors: {
      accent: '#a855f7', // Purple
      border: 'rgba(168, 85, 247, 0.5)',
      bg: '#0f061a',
      badge: 'rgba(168, 85, 247, 0.2)',
      button: '#7c3aed'
    },
    borderStyle: 'glow'
  },
  {
    id: 'standalone',
    badge: 'STANDALONE PRODUCT',
    title: '365-Day Transit Calendar',
    isStandalone: true,
    description: 'Your entire year mapped, decoded & personalized. INCLUDED FOR FREE With Annual MAX: Your Virtual Oracle Gateway™.',
    monthly: {
      price: '$149',
      note: '/ONE-TIME',
      buttonText: '$149/one-time'
    },
    annual: {
      price: '$149',
      note: '/ONE-TIME',
      buttonText: '$149/one-time'
    },
    features: {
      monthly: [{ text: 'Your entire year mapped, decoded & personalized' }],
      annual: [{ text: 'Your entire year mapped, decoded & personalized' }]
    },
    colors: {
      accent: '#f97316', // Pleasant Orange
      border: 'rgba(249, 115, 22, 0.4)',
      bg: '#160b05',
      badge: 'rgba(249, 115, 22, 0.15)',
      button: '#ea580c'
    },
    borderStyle: 'dashed'
  }
];

export const CheckIcon = ({ color }: { color?: string }) => (
  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${color || 'rgba(147, 51, 234, 0.4)'}` }}>
    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

export const StarIcon = ({ color }: { color?: string }) => (
  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${color || 'rgba(168, 85, 247, 0.4)'}` }}>
    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6.4-4.8-6.4 4.8 2.4-7.2-6-4.8h7.6z" />
    </svg>
  </div>
);

export const CrownIcon = () => (
  <div className="w-5 h-5 rounded-full bg-orange-900/40 flex items-center justify-center shrink-0">
    <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  </div>
);
