// Central registry for all interactive tools.
// Add a new tool here, then create its page in src/pages/tools/
// and register the route in App.jsx — the hub page updates automatically.

import { Calculator, Gauge, ClipboardCheck } from 'lucide-react';

export const toolsConfig = [
  {
    slug: 'roi-calculator',
    name: 'AI Automation ROI Calculator',
    tagline: 'See how many hours and how much budget automation could save your team every year.',
    icon: Calculator,
    status: 'live'
  },
  {
    slug: 'speed-checker',
    name: 'Website Speed Checker',
    tagline: 'Quick performance snapshot of any website — load time, Core Web Vitals, and fixes.',
    icon: Gauge,
    status: 'coming-soon'
  },
  {
    slug: 'project-estimator',
    name: 'Software Project Cost Estimator',
    tagline: 'Select your features and get a rough budget and timeline range instantly.',
    icon: ClipboardCheck,
    status: 'coming-soon'
  }
];
