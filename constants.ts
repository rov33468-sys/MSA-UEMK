import { Event, TeamMember, Stat } from './types';
import { Users, Calendar, Trophy, Zap } from 'lucide-react';
import { IMAGES } from './assets';

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Microsoft ChainSphere',
    date: 'January 24, 2026',
    time: '10:00 AM - 3:00 PM',
    location: 'UEM Kolkata',
    description: 'Unlocking the power of Blockchain. Join us for deep dives into Web3, smart contracts, and the future of decentralized tech.',
    image: IMAGES.events.chainSphere,
    category: 'Workshop',
    isUpcoming: true,
  },
  {
    id: '0',
    title: 'MSA Launch Event 2025',
    date: 'December 10, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'UEM Kolkata, Auditorium',
    description: 'The beginning of a new era. We introduced the core team, our vision for the future, and the roadmap for the upcoming year.',
    image: IMAGES.events.launchEvent,
    category: 'Social',
    isUpcoming: false,
  }
];

export const TEAM: TeamMember[] = [
  // Faculty (2)
  {
    id: 'f1',
    name: 'Dr. Sarah Connor',
    role: 'Faculty Advisor',
    image: IMAGES.team.placeholder(10),
    type: 'faculty'
  },
  {
    id: 'f2',
    name: 'Prof. Alan Grant',
    role: 'Faculty Mentor',
    image: IMAGES.team.placeholder(11),
    type: 'faculty'
  },
  // Core (2)
  {
    id: 'c1',
    name: 'Snehasis Das',
    role: 'President',
    // Using IMAGES.team.president triggers the "Has Custom Image" logic in Team.tsx
    image: IMAGES.team.president,
    instagram: 'https://www.instagram.com/_snehasish.das_?igsh=cG9iOWoxNzI0NWdz',
    type: 'core',
    imageAspect: 'aspect-[3/4]' // Optimized for portrait photo
  },
  {
    id: 'c2',
    name: 'Dipanjali Dutta',
    role: 'Vice President',
    image: IMAGES.team.placeholder(13),
    type: 'core'
  },
  // Leads (10) - Real Team Members
  { id: 'l1', name: 'Praneet Singh', role: 'Secretary', image: IMAGES.team.placeholder(20), type: 'lead' },
  { id: 'l2', name: 'Priyanshu Mitra', role: 'Joint Secretary', image: IMAGES.team.placeholder(21), type: 'lead' },
  { id: 'l3', name: 'Soumalika Chakraborty', role: 'HR & Operations Manager', image: IMAGES.team.placeholder(22), type: 'lead' },
  { id: 'l4', name: 'Ujan Sarkar', role: 'Logistics Lead', image: IMAGES.team.placeholder(23), type: 'lead' },
  { id: 'l5', name: 'Anamika Mallick', role: 'Student Operations Lead', image: IMAGES.team.placeholder(24), type: 'lead' },
  { id: 'l6', name: 'Srijit Ghosal', role: 'Photography Lead', image: IMAGES.team.placeholder(25), type: 'lead' },
  { id: 'l7', name: 'Pratistha Acharya', role: 'Social Media Lead', image: IMAGES.team.placeholder(26), type: 'lead' },
  { id: 'l8', name: 'Salmoli Kangsabanik', role: 'Content Writer', image: IMAGES.team.placeholder(27), type: 'lead' },
  { id: 'l9', name: 'Devi Prasad Chakraborty', role: 'Web Master', image: IMAGES.team.placeholder(28), type: 'lead' },
  { id: 'l10', name: 'Subhamita Adhikari', role: 'Graphics Lead', image: IMAGES.team.placeholder(29), type: 'lead' },
  
  // Alumni
  {
    id: 'a1',
    name: 'Alice Wong',
    role: 'Ex-President (Google)',
    image: IMAGES.team.placeholder(14),
    type: 'alumni'
  },
   {
    id: 'a2',
    name: 'Bob Martin',
    role: 'Ex-Tech Lead (Amazon)',
    image: IMAGES.team.placeholder(15),
    type: 'alumni'
  }
];

export const STATS: Stat[] = [
  { label: 'Active Members', value: '500+', icon: Users },
  { label: 'Events Hosted', value: '45+', icon: Calendar },
  { label: 'Hackathons Won', value: '12', icon: Trophy },
  { label: 'Projects Built', value: '80+', icon: Zap },
];