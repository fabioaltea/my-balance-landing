export const en = {
  // Navigation
  nav: {
    myBalance: 'MyBalance',
    howItWorks: 'How it Works',
    techStack: 'Tech Stack',
  },

  // Hero
  hero: {
    tagline: 'Your Finance, Your Data',
    description: 'A modern personal finance tracker that stores all your data in your own Google Sheet. Privacy-first, open source, and beautifully simple.',
    downloadAndroid: 'Download for Android',
    downloadIOS: 'Download for iOS',
    comingSoon: 'Coming Soon',
    viewSource: 'View Source Code',
  },

  // Features
  features: {
    multiAccount: {
      title: 'Multi-Account Tracking',
      description: 'Manage your savings, checking, and investment accounts in one unified interface without clutter.',
    },
    privacy: {
      title: 'Privacy First',
      description: 'Your data never touches our servers. It connects directly from your device to your personal Google Sheet.',
    },
    automation: {
      title: 'Smart Automation',
      description: 'Use Shortcuts to automate entries. Tap once to log your morning coffee or monthly subscriptions.',
    },
  },

  // Home sections
  home: {
    trackSection: {
      title: 'Track Everything at a Glance',
      description: 'See your total balance, monthly savings, income vs expenses - all in one beautiful dashboard. Filter by account, switch between periods, and stay on top of your finances effortlessly.',
      features: {
        realtime: 'Real-time balance updates',
        breakdown: 'Income vs Expense breakdown',
        recurring: 'Recurring transaction tracking',
      },
    },
    chartsSection: {
      title: 'Visualize Your Spending',
      description: 'Beautiful, interactive charts show where your money goes. Track monthly trends, compare income vs expenses, and see category breakdowns over time.',
      features: {
        trends: 'Monthly spending trends',
        categories: 'Category-based insights',
        forecasting: 'Predictive balance forecasting',
      },
    },
    transactionsSection: {
      title: 'Split Transactions Made Easy',
      description: 'Pay for dinner with friends? Split a single transaction across multiple accounts or categories effortlessly. Track complex expenses without the headache.',
      features: {
        multiAccount: 'Multi-account movements',
        categories: 'Flexible categorization',
        location: 'Optional location tagging',
      },
    },
  },

  // How It Works
  howItWorks: {
    title: 'How MyBalance Works',
    subtitle: 'Your personal finance tracker that stores everything in your own Google Sheet. Full data ownership, zero compromises.',
    steps: {
      1: {
        title: 'Sign in with Google',
        description: 'Authenticate with your Google account. MyBalance automatically creates a dedicated Google Sheet in your Drive to store all your financial data. You own it completely.',
      },
      2: {
        title: 'Set Up Your Accounts',
        description: 'Add your bank accounts, cash, credit cards, and investment accounts. Customize each with a name and color. Track balances across all your accounts in one place.',
      },
      3: {
        title: 'Track Your Transactions',
        description: 'Add income and expenses with a single tap. Categorize transactions, split them across accounts, and optionally add location. Everything syncs instantly to your Google Sheet.',
      },
      4: {
        title: 'Set Up Recurring Transactions',
        description: 'Define recurring expenses like rent, subscriptions, or salary. MyBalance tracks expected vs actual occurrences and notifies you of missing entries with status badges.',
      },
      5: {
        title: 'Visualize Your Finances',
        description: 'View income vs expense charts, category breakdowns, and monthly trends. See your financial summary at a glance with the dashboard\'s interactive cards.',
      },
      6: {
        title: 'Forecast Your Balance',
        description: 'MyBalance analyzes your spending patterns and recurring transactions to predict your end-of-month balance. Stay ahead of your finances with intelligent forecasting.',
      },
    },
    stepLabel: 'Step',
    finalCard: {
      title: 'Your Data, Your Control',
      description: 'All your financial data lives in a Google Sheet on your personal Drive. Access it anytime, edit it manually, export it however you want. No vendor lock-in, no hidden databases. MyBalance is just a beautiful interface for your own spreadsheet.',
    },
  },

  // Tech Stack
  techStack: {
    title: 'Under the Hood',
    subtitle: 'Built with modern technologies for speed, security, and complete data ownership.',
    sections: {
      mobileApp: {
        title: 'Mobile App',
        items: {
          reactNative: 'React Native + Expo: Native iOS and Android from a single codebase.',
          typescript: 'TypeScript: Type-safe code for reliability.',
          reanimated: 'Reanimated: Smooth 60fps animations and gestures.',
          context: 'Context + Hooks: Lightweight state management.',
        },
      },
      backend: {
        title: 'Backend API',
        items: {
          node: 'Node.js + Express: Fast, lightweight REST API.',
          typescript: 'TypeScript: End-to-end type safety.',
          vercel: 'Vercel: Serverless deployment, zero downtime.',
          postgresql: 'PostgreSQL: Metadata and auth storage only.',
        },
      },
      dataStorage: {
        title: 'Data Storage',
        items: {
          googleSheets: 'Google Sheets API: Your financial data stays in your Drive.',
          oauth: 'OAuth 2.0: Secure, token-based authentication.',
          noCloud: 'No Cloud Storage: We never see or store your transactions.',
          export: 'Export Anytime: Your spreadsheet is always accessible.',
        },
      },
      security: {
        title: 'Security & Auth',
        items: {
          webauthn: 'WebAuthn: Passwordless biometric login.',
          passkey: 'Passkey Support: Face ID, Touch ID, or device PIN.',
          tokenRefresh: 'Token Refresh: Seamless reauthentication.',
          encrypted: 'Encrypted Tokens: OAuth tokens encrypted at rest.',
        },
      },
      automation: {
        title: 'Automation',
        items: {
          shortcuts: 'iOS Shortcuts: One-tap transaction logging.',
          webhooks: 'API Webhooks: Integrate with other services.',
          recurring: 'Recurring Transactions: Automatic entry reminders.',
          notifications: 'Push Notifications: Never miss a payment.',
        },
      },
      openSource: {
        title: 'Open Source',
        items: {
          github: 'GitHub: Full source code available.',
          mit: 'MIT License: Free to use, modify, and contribute.',
          community: 'Community-Driven: Built for users, by users.',
          transparent: 'Transparent: No hidden code or tracking.',
        },
      },
    },
    cta: {
      title: 'Ready to Take Control?',
      description: 'Start tracking your finances the privacy-first way. Your data belongs to you, not to us.',
      button: 'Get Started',
    },
  },

  // Footer
  footer: {
    copyright: 'MyBalance. Open Source Finance.',
  },
};

export type Translations = typeof en;
