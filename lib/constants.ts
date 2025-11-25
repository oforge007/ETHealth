export const SUBSCRIPTION_PLANS = [
  {
    id: 'basic',
    name: 'Basic' as const,
    price: 0,
    currency: 'cUSD' as const,
    consultations: 0,
    features: ['Free AI chatbot', 'Symptom checker', 'Health tips'],
    billingCycle: 'monthly' as const,
  },
  {
    id: 'standard',
    name: 'Standard' as const,
    price: 800,
    currency: 'cUSD' as const,
    consultations: 4,
    features: ['Everything in Basic', '4 consultations/month', 'Prescription delivery', 'Email support'],
    billingCycle: 'monthly' as const,
  },
  {
    id: 'premium',
    name: 'Premium' as const,
    price: 2000,
    currency: 'cUSD' as const,
    consultations: Infinity,
    features: [
      'Everything in Standard',
      'Unlimited consultations',
      'Medication delivery partnership',
      'Priority support',
      'Health records export',
    ],
    billingCycle: 'monthly' as const,
  },
]

export const PARTNERS = [
  {
    id: 'byon8',
    name: 'BYON8 Health',
    description: 'Premium telemedicine from BYON8 doctors',
    image: '🏥',
    consultationPrice: 500,
    currency: 'cUSD',
    url: process.env.NEXT_PUBLIC_BYON8_URL || 'https://byon8health.com',
    features: ['Expert doctors', 'E-prescription', 'Follow-up care'],
  },
  {
    id: 'zuri_health',
    name: 'Zuri Health',
    description: 'Specialist consultations and wellness',
    image: '⚕️',
    consultationPrice: 400,
    currency: 'cUSD',
    url: process.env.NEXT_PUBLIC_ZURI_HEALTH_URL || 'https://zurihealth.com',
    features: ['Specialists', 'Wellness programs', 'Preventive care'],
  },
]

export const SYMPTOM_DATABASE: Record<string, string[]> = {
  'Fever': ['Paracetamol', 'Get rest', 'Drink water', 'Consult doctor if > 39°C'],
  'Cough': ['Honey water', 'Cough syrup', 'Rest voice', 'See doctor if persistent'],
  'Headache': ['Rest', 'Paracetamol', 'Dark room', 'Hydrate'],
  'Sore Throat': ['Warm salt water', 'Lozenges', 'Rest', 'Tea with honey'],
  'Fatigue': ['Rest', 'Good nutrition', 'Hydration', 'Sleep'],
  'Nausea': ['Ginger tea', 'Rest', 'Light food', 'Hydration'],
  'Diarrhea': ['Electrolytes', 'Plain food', 'Hydration', 'Rest'],
  'Vomiting': ['Rest stomach', 'Electrolytes', 'Gradual eating', 'Hydration'],
}

export const HEALTH_TIPS = [
  'Drink at least 8 glasses of water daily',
  'Get 7-8 hours of sleep every night',
  'Exercise for at least 30 minutes daily',
  'Eat more vegetables and fruits',
  'Reduce sugar intake',
  'Manage stress through meditation',
  'Wash hands regularly',
  'Get vaccinated on schedule',
  'Limit alcohol consumption',
  'Avoid smoking',
]

export const REFERRAL_CREDIT = 100 // cUSD
export const REFERRAL_MESSAGE = 'Join me on ETHealth - healthcare at your fingertips! Get 100 cUSD credit when you sign up: '
