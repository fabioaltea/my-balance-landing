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
    getStarted: 'Get Started',
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
    whySection: {
      title: 'Built for Data Nerds',
      intro: {
        title: 'MyBalance is for those who truly want to understand where their money goes.',
        description: 'If you track your expenses in a spreadsheet today, MyBalance was built exactly for you.\nIt\'s the power of a spreadsheet combined with the simplicity of a mobile app: no black magic, no hidden data, just real control over your finances.',
      },
      forWho: {
        title: 'Who is it for',
        subtitle: 'MyBalance is perfect for you if:',
        items: {
          dataLovers: 'You want to see every number, without filters or limitations',
          spreadsheetUsers: 'You use (or love) spreadsheets but want a more convenient interface',
          privacyConscious: 'You value privacy and ownership of your data',
          controlFreaks: 'You want total control, not "pretty" but useless charts',
        },
        conclusion: 'In short: if you want to decide how to read your money, MyBalance is your home.',
      },
      origin: {
        title: 'Where MyBalance comes from',
        intro: 'It all started from a frustration.\nWe were tired of finance apps that:',
        items: {
          proprietary: 'Lock your data in proprietary formats',
          superficial: 'Show only superficial insights',
          subscriptions: 'Charge subscriptions for basic features',
        },
        conclusion: 'So we made a radical choice: your data stays yours.\nWith MyBalance everything lives in your Google Sheet: always accessible, exportable, editable.\nNo lock-in, no surprises.',
      },
    },
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
      example: {
        title: 'Example: Pizza night with friends',
        description: 'You pay €48 in cash for everyone at the pizzeria. Your friends pay you back: €25 via bank transfer to Intesa San Paolo, €10 to Trade Republic. Total expense for you? Just €13. One movement captures it all.',
        cash: 'Cash: -€48,00 (you paid the bill)',
        intesa: 'Intesa San Paolo: +€25,00 (friend 1 paid back)',
        trade: 'Trade Republic: +€10,00 (friend 2 paid back)',
        net: 'Net expense: -€13,00 (your share)',
      },
    },
    comingSoonSection: {
      title: 'Coming Soon',
      subtitle: 'We\'re putting the finishing touches on MyBalance. Be among the first to take control of your finances.',
      description: 'The app is almost ready. Sign up to be notified when we launch.',
      buttons: {
        ios: 'Download for iOS',
        android: 'Download for Android',
        web: 'Access Online',
      },
      form: {
        placeholder: 'Enter your email',
        submit: 'Notify Me',
        success: 'You\'re on the list! We\'ll notify you when we launch.',
        error: 'Something went wrong. Please try again.',
        invalid: 'Please enter a valid email address.',
        disclaimer: 'By clicking Notify Me you accept the',
        privacyPolicy: 'Privacy Policy',
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
      button: 'Take a Look at the Source Code',
    },
    architecture: {
      title: 'How It All Connects',
      mobileApp: 'Mobile App',
      reactNative: 'React Native',
      backendApi: 'Backend API',
      expressVercel: 'Express + Vercel',
      yourData: 'Your Data',
      googleSheets: 'Google Sheets',
      description: 'The app communicates with our backend, which securely accesses your Google Sheet using encrypted tokens. Your financial data never touches our servers - it goes directly to your personal Google Drive.',
    },
    whatWeStore: {
      title: 'What We Store (PostgreSQL)',
      items: {
        email: 'Your email and profile info',
        spreadsheetId: 'Reference to your spreadsheet ID',
        tokens: 'Encrypted Google access tokens',
        session: 'Session data for multi-device',
        pushTokens: 'Push notification tokens',
      },
    },
    whatYouOwn: {
      title: 'What You Own (Google Sheets)',
      items: {
        transactions: 'All your transactions',
        accounts: 'All your accounts',
        categories: 'All your categories',
        history: 'Complete financial history',
        export: 'Full export anytime',
      },
    },
  },

  // Footer
  footer: {
    copyright: 'MyBalance. Made with <3 by Fabio Altea.',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
  },

  // Legal
  legal: {
    privacyPolicy: {
      title: 'Privacy Policy',
      sections: {
        dataController: {
          title: 'Data Controller',
          email: 'Data Controller email address:',
        },
        dataTypes: {
          title: 'Types of Data We Collect',
          intro: 'Among the Personal Data collected by this Application, either directly or through third parties, are:',
          items: ['Usage Data', 'Tracking Tools'],
          details: 'Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or through specific informative texts displayed before data collection.',
          provided: 'Personal Data may be freely provided by the User or, in the case of Usage Data, collected automatically during the use of this Application.',
          required: 'Unless otherwise specified, all Data requested by this Application is mandatory. If the User refuses to provide it, this Application may be unable to provide the Service. In cases where this Application indicates some Data as optional, Users are free to refrain from providing such Data, without any consequences on the availability or operation of the Service.',
          doubts: 'Users who have doubts about which Data is mandatory are encouraged to contact the Data Controller.',
          cookies: 'Any use of Cookies - or other tracking tools - by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service requested by the User, in addition to the other purposes described in this document and in the',
          cookiePolicy: 'Cookie Policy',
          responsibility: 'The User assumes responsibility for Personal Data of third parties obtained, published, or shared through this Application.',
        },
        processing: {
          title: 'Methods and Location of Data Processing',
          methods: {
            title: 'Processing Methods',
            security: 'The Data Controller adopts appropriate security measures to prevent unauthorized access, disclosure, modification, or destruction of Personal Data.',
            details: 'Processing is carried out using computer and/or electronic tools, with organizational methods and logic strictly related to the indicated purposes. In addition to the Data Controller, in some cases, other parties involved in the organization of this Application (administrative, commercial, marketing, legal personnel, system administrators) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communication agencies) appointed, if necessary, as Data Processors by the Data Controller may have access to the Data. The updated list of Processors can always be requested from the Data Controller.',
          },
          location: {
            title: 'Location',
            text: 'Data is processed at the Data Controller\'s operating offices and in any other location where the parties involved in the processing are located. For more information, contact the Data Controller.',
            transfer: 'The User\'s Personal Data may be transferred to a country other than the one in which the User is located. To obtain more information about the location of processing, the User can refer to the section on details of Personal Data processing.',
          },
          retention: {
            title: 'Retention Period',
            text: 'Unless otherwise indicated in this document, Personal Data is processed and stored for the time required by the purpose for which it was collected and may be retained for a longer period due to any legal obligations or based on User consent.',
          },
        },
        purposes: {
          title: 'Purposes of Data Processing',
          intro: 'User Data is collected to allow the Data Controller to provide the Service, comply with legal obligations, respond to requests or enforcement actions, protect its rights and interests (or those of Users or third parties), identify any malicious or fraudulent activities, as well as for the following purposes:',
          items: ['Hosting and backend infrastructure', 'Display of content from external platforms'],
        },
        processingDetails: {
          title: 'Details on Personal Data Processing',
          hosting: {
            title: 'Hosting and backend infrastructure',
            description: 'This type of service has the purpose of hosting Data and files that allow this Application to function and be distributed or to provide a ready-to-use infrastructure for running specific features or parts of this Application.',
            distributed: 'Some of the services listed below, if any, may operate on geographically distributed servers, making it difficult to determine the actual location where Personal Data is stored.',
            vercel: {
              name: 'Vercel Inc.',
              company: 'Company: Vercel Inc.',
              location: 'Processing location: United States',
              data: 'Personal Data processed: Usage Data',
            },
          },
          externalContent: {
            title: 'Display of content from external platforms',
            description: 'This type of service allows you to view content hosted on external platforms directly from the pages of this Application and to interact with them. Such services are often called widgets, i.e., small elements inserted into a website or application. They provide specific information or perform a particular function and often allow user interaction.',
            traffic: 'This type of service may still collect data on web traffic relating to the pages where the service is installed, even when users do not use it.',
            googleFonts: {
              name: 'Google Fonts',
              company: 'Company: Google LLC',
              location: 'Processing location: United States',
              data: 'Personal Data processed: Usage Data',
            },
          },
        },
        cookiePolicySection: {
          title: 'Cookie Policy',
          text: 'This Application uses Tracking Tools. To learn more, Users can consult the',
        },
        euInfo: {
          title: 'Additional Information for Users in the European Union',
          legalBasis: {
            title: 'Legal Basis of Processing',
            intro: 'The Data Controller processes Personal Data relating to the User if one of the following conditions applies:',
            items: [
              'The User has given consent for one or more specific purposes.',
              'Processing is necessary for the performance of a contract with the User and/or for the execution of pre-contractual measures;',
              'Processing is necessary to comply with a legal obligation to which the Data Controller is subject;',
              'Processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the Data Controller;',
              'Processing is necessary for the purposes of the legitimate interests pursued by the Data Controller or by a third party.',
            ],
            clarification: 'It is always possible to request the Data Controller to clarify the specific legal basis of each processing and in particular to specify whether the processing is based on the law, provided for by a contract, or necessary to conclude a contract.',
          },
          retention: {
            title: 'Additional Information on Retention Period',
            intro: 'Unless otherwise indicated in this document, Personal Data is processed and stored for the time required by the purpose for which it was collected and may be retained for a longer period due to any legal obligations or based on User consent.',
            therefore: 'Therefore:',
            items: [
              'Personal Data collected for purposes related to the performance of a contract between the Data Controller and the User will be retained until the execution of such contract is completed.',
              'Personal Data collected for purposes attributable to the legitimate interest of the Data Controller will be retained until such interest is satisfied. The User can obtain more information regarding the legitimate interest pursued by the Data Controller in the relevant sections of this document or by contacting the Data Controller.',
              'When processing is based on User consent, the Data Controller may retain Personal Data longer until such consent is revoked. Furthermore, the Data Controller may be obliged to retain Personal Data for a longer period to comply with a legal obligation or by order of an authority.',
            ],
            expiration: 'At the end of the retention period, Personal Data will be deleted. Therefore, at the expiration of this period, the right of access, deletion, rectification, and the right to data portability can no longer be exercised.',
          },
        },
        gdprRights: {
          title: 'User Rights under the General Data Protection Regulation (GDPR)',
          intro: 'Users may exercise certain rights regarding the Data processed by the Data Controller.',
          inParticular: 'In particular, within the limits provided by law, the User has the right to:',
          rights: [
            { strong: 'Withdraw consent at any time.', text: 'The User can withdraw consent to the processing of their Personal Data previously given.' },
            { strong: 'Object to the processing of their Data.', text: 'The User can object to the processing of their Data when it occurs on a legal basis other than consent.' },
            { strong: 'Access their Data.', text: 'The User has the right to obtain information about the Data processed by the Data Controller, certain aspects of the processing, and to receive a copy of the Data processed.' },
            { strong: 'Verify and request rectification.', text: 'The User can verify the accuracy of their Data and request its update or correction.' },
            { strong: 'Obtain processing restriction.', text: 'The User can request the restriction of processing of their Data. In this case, the Data Controller will not process the Data for any other purpose than their storage.' },
            { strong: 'Obtain deletion or removal of their Personal Data.', text: 'The User can request the deletion of their Data by the Data Controller.' },
            { strong: 'Receive their Data or have it transferred to another controller.', text: 'The User has the right to receive their Data in a structured, commonly used, and machine-readable format and, where technically feasible, to have it transferred without obstacles to another controller.' },
            { strong: 'Lodge a complaint.', text: 'The User can lodge a complaint with the competent personal data protection authority or take legal action.' },
          ],
          transferInfo: 'Users have the right to obtain information about the legal basis for the transfer of Data abroad, including to any international organization governed by international law or established by two or more countries, such as the UN, as well as about the security measures adopted by the Data Controller to protect their Data.',
          opposition: {
            title: 'Details on the Right to Object',
            public: 'When Personal Data is processed in the public interest, in the exercise of official authority vested in the Data Controller, or to pursue a legitimate interest of the Data Controller, Users have the right to object to the processing for reasons related to their particular situation.',
            marketing: 'Users are informed that, if their Data is processed for direct marketing purposes, they can object to the processing at any time, free of charge and without providing any reason. If Users object to processing for direct marketing purposes, Personal Data will no longer be processed for such purposes. To find out if the Data Controller processes Data for direct marketing purposes, Users can refer to the respective sections of this document.',
          },
          howTo: {
            title: 'How to Exercise Rights',
            text: 'Any requests to exercise User rights can be addressed to the Data Controller through the contact details provided in this document. The request is free of charge and the Data Controller will respond as soon as possible, in any case within one month, providing the User with all information required by law. Any rectifications, deletions, or processing restrictions will be communicated by the Data Controller to each of the recipients, if any, to whom the Personal Data has been transmitted, unless this proves impossible or involves a disproportionate effort. The Data Controller will inform the User of such recipients if requested.',
          },
        },
        additionalInfo: {
          title: 'Additional Information on Processing',
          defense: {
            title: 'Legal Defense',
            text1: 'The User\'s Personal Data may be used by the Data Controller in court or in the preparatory stages for its possible establishment for defense against abuse in the use of this Application or related Services by the User.',
            text2: 'The User declares to be aware that the Data Controller may be required to disclose Data by order of public authorities.',
          },
          specificNotices: {
            title: 'Specific Notices',
            text: 'At the User\'s request, in addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual notices regarding specific Services, or the collection and processing of Personal Data.',
          },
          systemLogs: {
            title: 'System Logs and Maintenance',
            text: 'For operation and maintenance needs, this Application and any third-party services it uses may collect system logs, i.e., files that record interactions and may also contain Personal Data, such as the User\'s IP address.',
          },
          notIncluded: {
            title: 'Information Not Contained in This Policy',
            text: 'More details regarding the processing of Personal Data may be requested from the Data Controller at any time using the contact information provided.',
          },
          changes: {
            title: 'Changes to This Privacy Policy',
            text1: 'The Data Controller reserves the right to make changes to this privacy policy at any time by notifying Users on this page and, if possible, on this Application and, where technically and legally feasible, by sending a notification to Users through one of the contact details it has. Please consult this page frequently, referring to the date of last modification indicated at the bottom.',
            text2: 'If the changes affect processing whose legal basis is consent, the Data Controller will obtain the User\'s consent again, if necessary.',
          },
        },
        definitions: {
          title: 'Definitions and Legal References',
          items: {
            personalData: {
              title: 'Personal Data (or Data)',
              text: 'Personal data is any information that, directly or indirectly, including in connection with any other information, including a personal identification number, makes a natural person identified or identifiable.',
            },
            usageData: {
              title: 'Usage Data',
              text: 'Information collected automatically through this Application (including from third-party applications integrated into this Application), including: IP addresses or domain names of computers used by the User connecting to this Application, URI (Uniform Resource Identifier) addresses, time of request, method used to submit the request to the server, size of the file obtained in response, numeric code indicating the status of the server response (successful, error, etc.), country of origin, browser and operating system characteristics used by the visitor, various time connotations of the visit (e.g., time spent on each page) and details about the path followed within the Application, with particular reference to the sequence of pages visited, parameters relating to the operating system and the User\'s IT environment.',
            },
            user: {
              title: 'User',
              text: 'The individual using this Application who, unless otherwise specified, coincides with the Data Subject.',
            },
            dataSubject: {
              title: 'Data Subject',
              text: 'The natural person to whom the Personal Data refers.',
            },
            dataProcessor: {
              title: 'Data Processor (or Processor)',
              text: 'The natural or legal person, public administration, or any other body that processes personal data on behalf of the Data Controller, as set out in this privacy policy.',
            },
            dataController: {
              title: 'Data Controller (or Controller)',
              text: 'The natural or legal person, public authority, service, or other body which, alone or jointly with others, determines the purposes and means of processing personal data and the tools adopted, including security measures relating to the operation and use of this Application. The Data Controller, unless otherwise specified, is the owner of this Application.',
            },
            application: {
              title: 'This Application',
              text: 'The hardware or software tool through which the Users\' Personal Data is collected and processed.',
            },
            service: {
              title: 'Service',
              text: 'The Service provided by this Application as defined in the relevant terms (if available) on this site/application.',
            },
            eu: {
              title: 'European Union (or EU)',
              text: 'Unless otherwise specified, any reference to the European Union contained in this document is intended to extend to all current member states of the European Union and the European Economic Area.',
            },
            cookie: {
              title: 'Cookie',
              text: 'Cookies are Tracking Tools consisting of small portions of data stored within the User\'s browser.',
            },
            trackingTool: {
              title: 'Tracking Tool',
              text: 'A Tracking Tool means any technology - e.g., Cookies, unique identifiers, web beacons, embedded scripts, e-tags, and fingerprinting - that enables the tracking of Users, for example by collecting or saving information on the User\'s device.',
            },
            legalReferences: {
              title: 'Legal References',
              text: 'Unless otherwise specified, this privacy notice concerns exclusively this Application.',
            },
          },
        },
      },
    },
    cookiePolicy: {
      title: 'Cookie Policy',
    },
  },
};

export type Translations = typeof en;
