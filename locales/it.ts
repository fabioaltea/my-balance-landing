import { Translations } from './en';

export const it: Translations = {
  // Navigation
  nav: {
    myBalance: 'MyBalance',
    howItWorks: 'Come Funziona',
    techStack: 'Tecnologie',
  },

  // Hero
  hero: {
    tagline: 'Le Tue Finanze, I Tuoi Dati',
    description: 'Un moderno tracker finanziario personale che memorizza tutti i tuoi dati nel tuo Google Sheet. Privacy-first, open source e meravigliosamente semplice.',
    downloadAndroid: 'Scarica per Android',
    downloadIOS: 'Scarica per iOS',
    comingSoon: 'Prossimamente',
    viewSource: 'Visualizza Codice Sorgente',
    getStarted: 'Inizia',
  },

  // Features
  features: {
    multiAccount: {
      title: 'Tracciamento Multi-Account',
      description: 'Gestisci i tuoi conti di risparmio, correnti e di investimento in un\'unica interfaccia unificata senza confusione.',
    },
    privacy: {
      title: 'Privacy Prima di Tutto',
      description: 'I tuoi dati non toccano mai i nostri server. Si collegano direttamente dal tuo dispositivo al tuo Google Sheet personale.',
    },
    automation: {
      title: 'Automazione Intelligente',
      description: 'Usa le Scorciatoie per automatizzare le voci. Un tocco per registrare il tuo caffè mattutino o gli abbonamenti mensili.',
    },
  },

  // Home sections
  home: {
    trackSection: {
      title: 'Monitora Tutto a Colpo d\'Occhio',
      description: 'Visualizza il saldo totale, i risparmi mensili, entrate vs uscite - tutto in un\'unica dashboard elegante. Filtra per conto, cambia periodo e resta al passo con le tue finanze senza sforzo.',
      features: {
        realtime: 'Aggiornamenti del saldo in tempo reale',
        breakdown: 'Suddivisione entrate vs uscite',
        recurring: 'Tracciamento transazioni ricorrenti',
      },
    },
    chartsSection: {
      title: 'Visualizza le Tue Spese',
      description: 'Grafici eleganti e interattivi mostrano dove vanno i tuoi soldi. Traccia le tendenze mensili, confronta entrate vs uscite e visualizza la suddivisione per categoria nel tempo.',
      features: {
        trends: 'Tendenze di spesa mensili',
        categories: 'Analisi basate su categorie',
        forecasting: 'Previsione del saldo predittiva',
      },
    },
    transactionsSection: {
      title: 'Transazioni Divise Facili',
      description: 'Paghi la cena con gli amici? Dividi una singola transazione tra più conti o categorie senza sforzo. Traccia spese complesse senza grattacapi.',
      features: {
        multiAccount: 'Movimenti multi-account',
        categories: 'Categorizzazione flessibile',
        location: 'Tag di posizione opzionale',
      },
    },
    comingSoonSection: {
      title: 'Prossimamente',
      subtitle: 'Stiamo dando gli ultimi ritocchi a MyBalance. Sii tra i primi a prendere il controllo delle tue finanze.',
      description: 'L\'app è quasi pronta. Iscriviti per essere avvisato al lancio.',
      buttons: {
        ios: 'Scarica per iOS',
        android: 'Scarica per Android',
        web: 'Accedi Online',
      },
      form: {
        placeholder: 'Inserisci la tua email',
        submit: 'Avvisami',
        success: 'Sei nella lista! Ti avviseremo al lancio.',
        error: 'Qualcosa è andato storto. Riprova.',
        invalid: 'Inserisci un indirizzo email valido.',
      },
    },
  },

  // How It Works
  howItWorks: {
    title: 'Come Funziona MyBalance',
    subtitle: 'Il tuo tracker finanziario personale che memorizza tutto nel tuo Google Sheet. Piena proprietà dei dati, zero compromessi.',
    steps: {
      1: {
        title: 'Accedi con Google',
        description: 'Autentica con il tuo account Google. MyBalance crea automaticamente un Google Sheet dedicato nel tuo Drive per memorizzare tutti i tuoi dati finanziari. Ne sei completamente proprietario.',
      },
      2: {
        title: 'Configura i Tuoi Conti',
        description: 'Aggiungi i tuoi conti bancari, contanti, carte di credito e conti di investimento. Personalizza ciascuno con un nome e un colore. Traccia i saldi di tutti i tuoi conti in un unico posto.',
      },
      3: {
        title: 'Traccia le Tue Transazioni',
        description: 'Aggiungi entrate e uscite con un singolo tocco. Categorizza le transazioni, dividile tra conti e aggiungi opzionalmente la posizione. Tutto si sincronizza istantaneamente con il tuo Google Sheet.',
      },
      4: {
        title: 'Configura Transazioni Ricorrenti',
        description: 'Definisci spese ricorrenti come affitto, abbonamenti o stipendio. MyBalance traccia le occorrenze previste vs effettive e ti notifica le voci mancanti con badge di stato.',
      },
      5: {
        title: 'Visualizza le Tue Finanze',
        description: 'Visualizza grafici entrate vs uscite, suddivisioni per categoria e tendenze mensili. Vedi il riepilogo finanziario a colpo d\'occhio con le card interattive della dashboard.',
      },
      6: {
        title: 'Prevedi il Tuo Saldo',
        description: 'MyBalance analizza i tuoi modelli di spesa e le transazioni ricorrenti per prevedere il saldo di fine mese. Resta al passo con le tue finanze con previsioni intelligenti.',
      },
    },
    stepLabel: 'Passo',
    finalCard: {
      title: 'I Tuoi Dati, Il Tuo Controllo',
      description: 'Tutti i tuoi dati finanziari vivono in un Google Sheet sul tuo Drive personale. Accedici in qualsiasi momento, modificalo manualmente, esportalo come vuoi. Nessun vendor lock-in, nessun database nascosto. MyBalance è solo un\'interfaccia elegante per il tuo foglio di calcolo.',
    },
  },

  // Tech Stack
  techStack: {
    title: 'Sotto il Cofano',
    subtitle: 'Costruito con tecnologie moderne per velocità, sicurezza e completa proprietà dei dati.',
    sections: {
      mobileApp: {
        title: 'App Mobile',
        items: {
          reactNative: 'React Native + Expo: iOS e Android nativi da un\'unica codebase.',
          typescript: 'TypeScript: Codice type-safe per affidabilità.',
          reanimated: 'Reanimated: Animazioni e gesture fluide a 60fps.',
          context: 'Context + Hooks: Gestione dello stato leggera.',
        },
      },
      backend: {
        title: 'API Backend',
        items: {
          node: 'Node.js + Express: API REST veloce e leggera.',
          typescript: 'TypeScript: Type safety end-to-end.',
          vercel: 'Vercel: Deploy serverless, zero downtime.',
          postgresql: 'PostgreSQL: Solo storage di metadati e auth.',
        },
      },
      dataStorage: {
        title: 'Archiviazione Dati',
        items: {
          googleSheets: 'Google Sheets API: I tuoi dati finanziari restano nel tuo Drive.',
          oauth: 'OAuth 2.0: Autenticazione sicura basata su token.',
          noCloud: 'Nessun Cloud Storage: Non vediamo né memorizziamo le tue transazioni.',
          export: 'Esporta Sempre: Il tuo foglio di calcolo è sempre accessibile.',
        },
      },
      security: {
        title: 'Sicurezza e Auth',
        items: {
          webauthn: 'WebAuthn: Login biometrico senza password.',
          passkey: 'Supporto Passkey: Face ID, Touch ID o PIN del dispositivo.',
          tokenRefresh: 'Aggiornamento Token: Riautenticazione senza interruzioni.',
          encrypted: 'Token Crittografati: Token OAuth crittografati a riposo.',
        },
      },
      automation: {
        title: 'Automazione',
        items: {
          shortcuts: 'Scorciatoie iOS: Registrazione transazioni con un tocco.',
          webhooks: 'API Webhooks: Integrazione con altri servizi.',
          recurring: 'Transazioni Ricorrenti: Promemoria automatici.',
          notifications: 'Notifiche Push: Non perdere mai un pagamento.',
        },
      },
      openSource: {
        title: 'Open Source',
        items: {
          github: 'GitHub: Codice sorgente completo disponibile.',
          mit: 'Licenza MIT: Libero di usare, modificare e contribuire.',
          community: 'Community-Driven: Costruito per gli utenti, dagli utenti.',
          transparent: 'Trasparente: Nessun codice nascosto o tracking.',
        },
      },
    },
    cta: {
      title: 'Pronto a Prendere il Controllo?',
      description: 'Inizia a tracciare le tue finanze nel modo privacy-first. I tuoi dati appartengono a te, non a noi.',
      button: 'Inizia Ora',
    },
  },

  // Footer
  footer: {
    copyright: 'MyBalance. Finanza Open Source.',
  },
};
