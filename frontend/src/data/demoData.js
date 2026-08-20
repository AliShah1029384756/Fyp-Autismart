/** Frontend-only demo data for public tour (no backend). */

export const DEMO_CHILD = {
  id: 'demo-child-1',
  _id: 'demo-child-1',
  name: 'Ahmed Ali',
  fullName: 'Ahmed Ali',
  age: 6,
  gender: 'Male',
  dateOfBirth: '2019-05-12',
  diagnosis: 'Autism Spectrum Disorder (Level 2)',
  notes: 'Demo profile for frontend tour only. Data is not saved.',
};

export const DEMO_ASSESSMENTS = [
  {
    id: 'demo-asm-1',
    title: 'Social Communication Screen',
    date: '2026-03-15',
    score: 72,
    level: 'Moderate support',
    summary: 'Shows interest in peers with structured prompts. Eye contact improving in short sessions.',
  },
  {
    id: 'demo-asm-2',
    title: 'Sensory Preferences Checklist',
    date: '2026-04-02',
    score: 65,
    level: 'Sensory-seeking (auditory)',
    summary: 'Prefers predictable routines. Benefits from visual schedules and quiet transition cues.',
  },
  {
    id: 'demo-asm-3',
    title: 'Play & Attention Snapshot',
    date: '2026-05-10',
    score: 78,
    level: 'On track with support',
    summary: 'Sustains attention 8–12 minutes on preferred games. Color and emotion games recommended.',
  },
];

export const DEMO_CHAT = [
  {
    id: 1,
    role: 'user',
    text: 'Ahmed gets overwhelmed in noisy rooms. What can we try at home?',
    time: '10:12 AM',
  },
  {
    id: 2,
    role: 'assistant',
    text: 'Try a quiet corner with headphones and a simple visual schedule. Short practice sessions (5–10 min) before busier places often help.',
    time: '10:13 AM',
  },
  {
    id: 3,
    role: 'user',
    text: 'Which therapy games fit his current assessment?',
    time: '10:15 AM',
  },
  {
    id: 4,
    role: 'assistant',
    text: 'Based on the demo profile: Emotion Explorer and Color Matching are good starting points. Keep sessions short and celebrate small wins.',
    time: '10:16 AM',
  },
];

export const demoUserForRole = (role) => {
  const base = {
    id: `demo-${role}`,
    isDemo: true,
    email: `demo.${role}@autismart.local`,
  };
  if (role === 'caregiver') {
    return { ...base, name: 'Demo Caregiver', fullName: 'Demo Caregiver', role: 'caregiver' };
  }
  if (role === 'expert') {
    return { ...base, name: 'Demo Expert', fullName: 'Demo Expert', role: 'expert' };
  }
  return { ...base, name: 'Demo Guest', fullName: 'Demo Guest', role: 'guest' };
};
