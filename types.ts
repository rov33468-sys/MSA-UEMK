import React from 'react';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'Workshop' | 'Hackathon' | 'Seminar' | 'Social';
  isUpcoming: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  type: 'faculty' | 'core' | 'lead' | 'alumni';
  imageAspect?: string; // Optional: Overrides default aspect-square (e.g., 'aspect-[3/4]')
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
}