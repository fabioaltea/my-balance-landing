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
    description:
      'Un moderno tracker finanziario personale che memorizza tutti i tuoi dati nel tuo Google Sheet. Privacy-first, open source e meravigliosamente semplice.',
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
      description:
        "Gestisci i tuoi conti di risparmio, correnti e di investimento in un'unica interfaccia unificata senza confusione.",
    },
    privacy: {
      title: 'Privacy Prima di Tutto',
      description:
        'I tuoi dati non toccano mai i nostri server. Si collegano direttamente dal tuo dispositivo al tuo Google Sheet personale.',
    },
    automation: {
      title: 'Automazione Intelligente',
      description:
        'Usa le Scorciatoie per automatizzare le voci. Un tocco per registrare il tuo caffè mattutino o gli abbonamenti mensili.',
    },
  },

  // Home sections
  home: {
    whySection: {
      title: 'Fatto per Chi Ama i Dati',
      intro: {
        title: 'MyBalance è per chi vuole davvero capire dove vanno i propri soldi.',
        description:
          "Se oggi tracci le spese su un foglio di calcolo, MyBalance nasce esattamente per te.\nÈ la potenza di uno spreadsheet unita alla semplicità di un'app mobile: nessuna magia nera, nessun dato nascosto, solo controllo reale sulle tue finanze.",
      },
      forWho: {
        title: 'Per chi è pensato',
        subtitle: 'MyBalance è perfetto per te se:',
        items: {
          dataLovers: 'Vuoi vedere ogni numero, senza filtri né limitazioni',
          spreadsheetUsers: "Usi (o ami) i fogli di calcolo ma vuoi un'interfaccia più comoda",
          privacyConscious: 'Dai valore alla privacy e alla proprietà dei tuoi dati',
          controlFreaks: 'Vuoi controllo totale, non grafici "carini" ma inutili',
        },
        conclusion:
          'In breve: se vuoi decidere tu come leggere i tuoi soldi, MyBalance è casa tua.',
      },
      origin: {
        title: 'Da dove nasce MyBalance',
        intro: 'Tutto è partito da una frustrazione. Eravamo stanchi di app finanziarie che:',
        items: {
          proprietary: 'Rinchiudono i tuoi dati in formati proprietari',
          superficial: 'Mostrano solo insight superficiali',
          subscriptions: 'Fanno pagare abbonamenti per funzioni basilari',
        },
        conclusion:
          'Così abbiamo fatto una scelta radicale: i dati restano tuoi. Con MyBalance tutto vive nel tuo Google Sheet — sempre accessibile, esportabile, modificabile. Senza lock-in, senza sorprese.',
      },
    },
    trackSection: {
      title: "Monitora Tutto a Colpo d'Occhio",
      description:
        "Visualizza il saldo totale, i risparmi mensili, entrate vs uscite - tutto in un'unica dashboard elegante. Filtra per conto, cambia periodo e resta al passo con le tue finanze senza sforzo.",
      features: {
        realtime: 'Aggiornamenti del saldo in tempo reale',
        breakdown: 'Suddivisione entrate vs uscite',
        recurring: 'Tracciamento transazioni ricorrenti',
      },
    },
    chartsSection: {
      title: 'Visualizza le Tue Spese',
      description:
        'Grafici eleganti e interattivi mostrano dove vanno i tuoi soldi. Traccia le tendenze mensili, confronta entrate vs uscite e visualizza la suddivisione per categoria nel tempo.',
      features: {
        trends: 'Tendenze di spesa mensili',
        categories: 'Analisi basate su categorie',
        forecasting: 'Previsione del saldo predittiva',
      },
    },
    transactionsSection: {
      title: 'Transazioni Divise Facili',
      description:
        'Paghi la cena con gli amici? Dividi una singola transazione tra più conti o categorie senza sforzo. Traccia spese complesse senza grattacapi.',
      features: {
        multiAccount: 'Movimenti multi-account',
        categories: 'Categorizzazione flessibile',
        location: 'Tag di posizione opzionale',
      },
      example: {
        title: 'Esempio: Serata pizza con amici',
        description:
          'Paghi €48 in contanti per tutti alla pizzeria. I tuoi amici ti rimborsano: €25 tramite bonifico su Intesa San Paolo, €10 su Trade Republic. Spesa totale per te? Solo €13. Un unico movimento cattura tutto.',
        cash: 'Contanti: -€48,00 (hai pagato il conto)',
        intesa: 'Intesa San Paolo: +€25,00 (rimborso amico 1)',
        trade: 'Trade Republic: +€10,00 (rimborso amico 2)',
        net: 'Spesa netta: -€13,00 (la tua parte)',
      },
    },
    ctaSection: {
      tagline: 'Le tue finanze. Finalmente tue.',
      description:
        'Nessun abbonamento. Nessun database nascosto. Nessun lock-in. Solo tu, i tuoi dati e un foglio di calcolo che possiedi davvero.',
      openApp: "Apri l'App",
      howItWorks: 'Come funziona',
      badges: {
        free: 'Gratis per sempre',
        openSource: 'Open source',
        privacyFirst: 'Privacy first',
      },
    },
    recurringSection: {
      title: 'Non perdere mai un pagamento ricorrente',
      description:
        'Definisci le tue spese ricorrenti — affitto, abbonamenti, stipendio — e MyBalance tiene traccia di quelle registrate. I badge di stato mostrano immediatamente cosa è in ordine e cosa manca.',
      features: {
        schedule: 'Pianifica entrate e uscite con frequenza personalizzata',
        status: 'Badge di stato visivi: confermato, in attesa o mancante',
        notifications: "Ricevi una notifica quando un'uscita attesa non è stata registrata",
      },
    },
    mapSection: {
      title: 'Vedi dove spendi',
      description:
        'Associa opzionalmente una posizione a ogni movimento. La mappa integrata ti dà una panoramica visiva di dove va il tuo denaro — dal bar preferito alla spesa occasionale in viaggio.',
      features: {
        pinpoint: 'Aggiungi la posizione esatta a ogni movimento',
        clusters: 'Vista raggruppata per individuare le zone di spesa',
        optional: 'La posizione è sempre opzionale e non viene mai condivisa',
      },
    },
    comingSoonSection: {
      title: 'Prossimamente',
      subtitle:
        'Stiamo dando gli ultimi ritocchi a MyBalance. Sii tra i primi a prendere il controllo delle tue finanze.',
      description: "L'app è quasi pronta. Iscriviti per essere avvisato al lancio.",
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
        disclaimer: 'Cliccando Avvisami accetti la',
        privacyPolicy: 'Privacy Policy',
      },
    },
  },

  // How It Works
  howItWorks: {
    title: 'Come Funziona MyBalance',
    subtitle:
      'Il tuo tracker finanziario personale che memorizza tutto nel tuo Google Sheet. Piena proprietà dei dati, zero compromessi.',
    steps: {
      1: {
        title: 'Accedi con Google',
        description:
          'Autentica con il tuo account Google. MyBalance crea automaticamente un Google Sheet dedicato nel tuo Drive per memorizzare tutti i tuoi dati finanziari. Ne sei completamente proprietario.',
      },
      2: {
        title: 'Configura i Tuoi Conti',
        description:
          'Aggiungi i tuoi conti bancari, contanti, carte di credito e conti di investimento. Personalizza ciascuno con un nome e un colore. Traccia i saldi di tutti i tuoi conti in un unico posto.',
      },
      3: {
        title: 'Traccia le Tue Transazioni',
        description:
          'Aggiungi entrate e uscite con un singolo tocco. Categorizza le transazioni, dividile tra conti e aggiungi opzionalmente la posizione. Tutto si sincronizza istantaneamente con il tuo Google Sheet.',
      },
      4: {
        title: 'Configura Transazioni Ricorrenti',
        description:
          'Definisci spese ricorrenti come affitto, abbonamenti o stipendio. MyBalance traccia le occorrenze previste vs effettive e ti notifica le voci mancanti con badge di stato.',
      },
      5: {
        title: 'Visualizza le Tue Finanze',
        description:
          "Visualizza grafici entrate vs uscite, suddivisioni per categoria e tendenze mensili. Vedi il riepilogo finanziario a colpo d'occhio con le card interattive della dashboard.",
      },
      6: {
        title: 'Prevedi il Tuo Saldo',
        description:
          'MyBalance analizza i tuoi modelli di spesa e le transazioni ricorrenti per prevedere il saldo di fine mese. Resta al passo con le tue finanze con previsioni intelligenti.',
      },
    },
    stepLabel: 'Passo',
    finalCard: {
      title: 'I Tuoi Dati, Il Tuo Controllo',
      description:
        "Tutti i tuoi dati finanziari vivono in un Google Sheet sul tuo Drive personale. Accedici in qualsiasi momento, modificalo manualmente, esportalo come vuoi. Nessun vendor lock-in, nessun database nascosto. MyBalance è solo un'interfaccia elegante per il tuo foglio di calcolo.",
    },
  },

  // Tech Stack
  techStack: {
    title: 'Sotto il Cofano',
    subtitle:
      'Costruito con tecnologie moderne per velocità, sicurezza e completa proprietà dei dati.',
    sections: {
      mobileApp: {
        title: 'App Mobile',
        items: {
          reactNative: "React Native + Expo: iOS e Android nativi da un'unica codebase.",
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
      description:
        'Inizia a tracciare le tue finanze nel modo privacy-first. I tuoi dati appartengono a te, non a noi.',
      button: "Dai un'occhiata al codice sorgente",
    },
    architecture: {
      title: 'Come Funziona',
      mobileApp: 'App Mobile',
      reactNative: 'React Native',
      backendApi: 'Backend API',
      expressVercel: 'Express + Vercel',
      yourData: 'I Tuoi Dati',
      googleSheets: 'Google Sheets',
      description:
        "L'app comunica con il nostro backend, che accede in modo sicuro al tuo Google Sheet usando token criptati. I tuoi dati finanziari non toccano mai i nostri server - vanno direttamente sul tuo Google Drive personale.",
    },
    whatWeStore: {
      title: 'Cosa Memorizziamo Noi (PostgreSQL)',
      items: {
        email: 'La tua email e info profilo',
        spreadsheetId: "Riferimento all'ID del tuo spreadsheet",
        tokens: 'Token Google criptati',
        session: 'Dati sessione per multi-dispositivo',
        pushTokens: 'Token per notifiche push',
      },
    },
    whatYouOwn: {
      title: 'Cosa Possiedi Tu (Google Sheets)',
      items: {
        transactions: 'Tutte le tue transazioni',
        accounts: 'Tutti i tuoi conti',
        categories: 'Tutte le tue categorie',
        history: 'Storico finanziario completo',
        export: 'Esportazione completa sempre',
      },
    },
  },

  // Footer
  footer: {
    copyright: 'MyBalance. Made with <3 by Fabio Altea.',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    termsOfService: 'Termini di Servizio',
  },

  // Legal
  legal: {
    privacyPolicy: {
      title: 'Privacy Policy',
      sections: {
        dataController: {
          title: 'Titolare del Trattamento dei Dati',
          email: 'Indirizzo email del Titolare:',
        },
        dataTypes: {
          title: 'Tipo di Dati che raccogliamo',
          intro:
            'Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono:',
          items: ['Dati di utilizzo', 'Strumenti di Tracciamento'],
          details:
            'Dettagli completi su ciascuna tipologia di Dati Personali raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei Dati stessi.',
          provided:
            "I Dati Personali possono essere liberamente forniti dall'Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l'uso di questa Applicazione.",
          required:
            "Se non diversamente specificato, tutti i Dati richiesti da questa Applicazione sono obbligatori.\nSe l'Utente rifiuta di comunicarli, potrebbe essere impossibile per questa Applicazione fornire il Servizio.\nNei casi in cui questa Applicazione indichi alcuni Dati come facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza sulla disponibilità del Servizio o sulla sua operatività.",
          doubts:
            'Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori sono incoraggiati a contattare il Titolare.',
          cookies:
            "L'eventuale utilizzo di Cookie - o di altri strumenti di tracciamento - da parte di questa Applicazione o dei titolari dei servizi terzi utilizzati da questa Applicazione ha la finalità di fornire il Servizio richiesto dall'Utente, oltre alle ulteriori finalità descritte nel presente documento e nella",
          cookiePolicy: 'Cookie Policy',
          responsibility:
            "L'Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questa Applicazione.",
        },
        processing: {
          title: 'Modalità e luogo del trattamento dei Dati raccolti',
          methods: {
            title: 'Modalità di trattamento',
            security:
              "Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.",
            details:
              "Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.\nOltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati altri soggetti coinvolti nell'organizzazione di questa Applicazione (personale amministrativo, commerciale, marketing, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche, agenzie di comunicazione) nominati anche, se necessario, Responsabili del Trattamento da parte del Titolare.\nL'elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.",
          },
          location: {
            title: 'Luogo',
            text: 'I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate.\nPer ulteriori informazioni, contatta il Titolare.',
            transfer:
              "I Dati Personali dell'Utente potrebbero essere trasferiti in un paese diverso da quello in cui l'Utente si trova.\nPer ottenere ulteriori informazioni sul luogo del trattamento l'Utente può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.",
          },
          retention: {
            title: 'Periodo di conservazione',
            text: 'Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti.',
          },
        },
        purposes: {
          title: 'Finalità del Trattamento dei Dati raccolti',
          intro:
            "I Dati dell'Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi (o quelli di Utenti o di terze parti), individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità:",
          items: [
            'Hosting ed infrastruttura backend',
            'Visualizzazione di contenuti da piattaforme esterne',
            'Analisi del comportamento degli utenti (Microsoft Clarity)',
          ],
        },
        processingDetails: {
          title: 'Dettagli sul trattamento dei Dati Personali',
          hosting: {
            title: 'Hosting ed infrastruttura backend',
            description:
              "Questo tipo di servizio ha lo scopo di ospitare Dati e file che consentono a questa Applicazione di funzionare e di essere distribuito o di fornire un'infrastruttura pronta all'uso per eseguire funzionalità specifiche o parti di questa Applicazione.",
            distributed:
              "Alcuni servizi tra quelli elencati di seguito, se presenti, possono funzionare su server geograficamente distribuiti, rendendo difficile determinare l'effettiva ubicazione in cui sono conservati i Dati Personali.",
            vercel: {
              name: 'Vercel Inc.',
              company: 'Azienda: Vercel Inc.',
              location: 'Luogo del trattamento: Stati Uniti',
              data: 'Dati Personali trattati: Dati di utilizzo',
            },
          },
          externalContent: {
            title: 'Visualizzazione di contenuti da piattaforme esterne',
            description:
              "Questo tipo di servizi permette di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e di interagire con essi.\nTali servizi sono spesso definiti widget, ovvero piccoli elementi inseriti in un sito web o in un'applicazione.\nForniscono informazioni specifiche o svolgono una funzione particolare e spesso consentono l'interazione con l'utente.",
            traffic:
              'Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico web relativo alle pagine dove il servizio è installato, anche quando gli utenti non lo utilizzano.',
            googleFonts: {
              name: 'Google Fonts',
              company: 'Azienda: Google LLC',
              location: 'Luogo del trattamento: Stati Uniti',
              data: 'Dati Personali trattati: Dati di utilizzo',
            },
          },
          clarity: {
            title: 'Analisi del comportamento degli utenti — Microsoft Clarity',
            description:
              "Questa Applicazione utilizza Microsoft Clarity, un servizio di analisi del comportamento degli utenti fornito da Microsoft Corporation. Clarity consente di comprendere come gli utenti interagiscono con la landing page tramite la registrazione di sessioni, la generazione di heatmap e l'analisi di movimenti del mouse, click e scorrimento della pagina.",
            collected: 'I dati raccolti da Microsoft Clarity includono:',
            collectedItems: [
              'Movimenti del mouse, click e comportamento di scorrimento',
              'Registrazioni delle sessioni di interazione con la pagina',
              'Dati heatmap (pattern aggregati di click e scorrimento)',
              'Dati di utilizzo (indirizzo IP, tipo di browser, dispositivo, sistema operativo)',
              'Un identificatore utente univoco assegnato da Clarity',
            ],
            storage:
              "I dati vengono archiviati da Microsoft nell'infrastruttura cloud Microsoft Azure. Per gli utenti nell'UE, il titolare del trattamento è Microsoft Ireland Operations Limited (MIOL); sono in vigore Clausole Contrattuali Standard (SCC) per qualsiasi trasferimento transfrontaliero di dati.",
            retention:
              'I dati raccolti vengono conservati da Microsoft per un massimo di 30 giorni.',
            purpose:
              "Lo scopo di questo trattamento è esclusivamente quello di analizzare come gli utenti interagiscono con questa Applicazione al fine di migliorarne l'usabilità e i contenuti. Nessun dato relativo a transazioni finanziarie o informazioni personali dell'account viene mai condiviso con Microsoft Clarity.",
            legalBasis:
              "La base giuridica di questo trattamento è il consenso dell'Utente (Art. 6(1)(a) GDPR). Per gli utenti nello Spazio Economico Europeo (SEE), nel Regno Unito e in Svizzera, è necessario il consenso esplicito prima che i cookie di Clarity vengano installati sul dispositivo.",
            optOut:
              'Gli utenti possono rinunciare alla telemetria di Clarity in qualsiasi momento visitando la pagina di opt-out della Digital Advertising Alliance e selezionando Microsoft, oppure abilitando il Global Privacy Control (GPC) nel proprio browser.',
            microsoft: {
              name: 'Microsoft Clarity',
              company: 'Azienda: Microsoft Corporation / Microsoft Ireland Operations Limited (UE)',
              location: 'Luogo del trattamento: Microsoft Azure (Stati Uniti / UE)',
              data: 'Dati Personali trattati: Dati di utilizzo, identificatore utente univoco, registrazioni di sessione, dati di interazione',
              privacy: 'Informativa sulla privacy Microsoft:',
              privacyUrl: 'https://privacy.microsoft.com/en-us/privacystatement',
              terms: 'Termini di utilizzo di Clarity:',
              termsUrl: 'https://clarity.microsoft.com/terms',
            },
          },
        },
        cookiePolicySection: {
          title: 'Cookie Policy',
          text: 'Questa Applicazione fa utilizzo di Strumenti di Tracciamento.\nPer saperne di più, gli Utenti possono consultare la',
        },
        euInfo: {
          title: "Ulteriori informazioni per gli utenti nell'Unione Europea",
          legalBasis: {
            title: 'Base giuridica del trattamento',
            intro:
              "Il Titolare tratta Dati Personali relativi all'Utente in caso sussista una delle seguenti condizioni:",
            items: [
              "l'Utente ha prestato il consenso per una o più finalità specifiche.",
              "il trattamento è necessario all'esecuzione di un contratto con l'Utente e/o all'esecuzione di misure precontrattuali;",
              'il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;',
              "il trattamento è necessario per l'esecuzione di un compito di interesse pubblico o per l'esercizio di pubblici poteri di cui è investito il Titolare;",
              'il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.',
            ],
            clarification:
              'È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica di ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla legge, previsto da un contratto o necessario per concludere un contratto.',
          },
          retention: {
            title: 'Ulteriori informazioni sul tempo di conservazione',
            intro:
              'Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti.',
            therefore: 'Pertanto:',
            items: [
              "I Dati Personali raccolti per scopi collegati all'esecuzione di un contratto tra il Titolare e l'Utente saranno trattenuti sino a quando sia completata l'esecuzione di tale contratto.",
              "I Dati Personali raccolti per finalità riconducibili all'interesse legittimo del Titolare saranno trattenuti sino al soddisfacimento di tale interesse.\nL'Utente può ottenere ulteriori informazioni in merito all'interesse legittimo perseguito dal Titolare nelle relative sezioni di questo documento o contattando il Titolare.",
              "Quando il trattamento è basato sul consenso dell'Utente, il Titolare può conservare i Dati Personali più a lungo sino a quando detto consenso non venga revocato.\nInoltre, il Titolare potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo per adempiere ad un obbligo di legge o per ordine di un'autorità.",
            ],
            expiration:
              'Al termine del periodo di conservazione i Dati Personali saranno cancellati.\nPertanto, allo spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla portabilità dei Dati non potranno più essere esercitati.',
          },
        },
        gdprRights: {
          title:
            "Diritti dell'Utente sulla base del Regolamento Generale sulla Protezione dei Dati (GDPR)",
          intro:
            'Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.',
          inParticular:
            "In particolare, nei limiti previsti dalla legge, l'Utente ha il diritto di:",
          rights: [
            {
              strong: 'revocare il consenso in ogni momento.',
              text: "L'Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso.",
            },
            {
              strong: 'opporsi al trattamento dei propri Dati.',
              text: "L'Utente può opporsi al trattamento dei propri Dati quando esso avviene in virtù di una base giuridica diversa dal consenso.",
            },
            {
              strong: 'accedere ai propri Dati.',
              text: "L'Utente ha diritto ad ottenere informazioni sui Dati trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia dei Dati trattati.",
            },
            {
              strong: 'verificare e chiedere la rettificazione.',
              text: "L'Utente può verificare la correttezza dei propri Dati e richiederne l'aggiornamento o la correzione.",
            },
            {
              strong: 'ottenere la limitazione del trattamento.',
              text: "L'Utente può richiedere la limitazione del trattamento dei propri Dati.\nIn tal caso il Titolare non tratterà i Dati per alcun altro scopo se non la loro conservazione.",
            },
            {
              strong: 'ottenere la cancellazione o rimozione dei propri Dati Personali.',
              text: "L'Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.",
            },
            {
              strong: 'ricevere i propri Dati o farli trasferire ad altro titolare.',
              text: "L'Utente ha diritto di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo automatico e, ove tecnicamente fattibile, di ottenerne il trasferimento senza ostacoli ad un altro titolare.",
            },
            {
              strong: 'proporre reclamo.',
              text: "L'Utente può proporre un reclamo all'autorità di controllo della protezione dei dati personali competente o agire in sede giudiziale.",
            },
          ],
          transferInfo:
            "Gli Utenti hanno diritto di ottenere informazioni in merito alla base giuridica per il trasferimento di Dati all'estero incluso verso qualsiasi organizzazione internazionale regolata dal diritto internazionale o costituita da due o più paesi, come ad esempio l'ONU, nonché in merito alle misure di sicurezza adottate dal Titolare per proteggere i loro Dati.",
          opposition: {
            title: 'Dettagli sul diritto di opposizione',
            public:
              "Quando i Dati Personali sono trattati nell'interesse pubblico, nell'esercizio di pubblici poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare, gli Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione particolare.",
            marketing:
              'Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto, possono opporsi al trattamento in qualsiasi momento, gratuitamente e senza fornire alcuna motivazione.\nQualora gli Utenti si oppongano al trattamento per finalità di marketing diretto, i Dati Personali non sono più oggetto di trattamento per tali finalità.\nPer scoprire se il Titolare tratti Dati con finalità di marketing diretto gli Utenti possono fare riferimento alle rispettive sezioni di questo documento.',
          },
          howTo: {
            title: 'Come esercitare i diritti',
            text: "Eventuali richieste di esercizio dei diritti dell'Utente possono essere indirizzate al Titolare attraverso i recapiti forniti in questo documento.\nLa richiesta è gratuita e il Titolare risponderà nel più breve tempo possibile, in ogni caso entro un mese, fornendo all'Utente tutte le informazioni previste dalla legge.\nEventuali rettifiche, cancellazioni o limitazioni del trattamento saranno comunicate dal Titolare a ciascuno dei destinatari, se esistenti, a cui sono stati trasmessi i Dati Personali, salvo che ciò si riveli impossibile o implichi uno sforzo sproporzionato.\nIl Titolare comunica all'Utente tali destinatari qualora egli lo richieda.",
          },
        },
        additionalInfo: {
          title: 'Ulteriori informazioni sul trattamento',
          defense: {
            title: 'Difesa in giudizio',
            text1:
              "I Dati Personali dell'Utente possono essere utilizzati da parte del Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell'utilizzo di questa Applicazione o dei Servizi connessi da parte dell'Utente.",
            text2:
              "L'Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati per ordine delle autorità pubbliche.",
          },
          specificNotices: {
            title: 'Informative specifiche',
            text: "Su richiesta dell'Utente, in aggiunta alle informazioni contenute in questa privacy policy, questa Applicazione potrebbe fornire all'Utente delle informative aggiuntive e contestuali riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.",
          },
          systemLogs: {
            title: 'Log di sistema e manutenzione',
            text: "Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l'indirizzo IP Utente.",
          },
          notIncluded: {
            title: 'Informazioni non contenute in questa policy',
            text: 'Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.',
          },
          changes: {
            title: 'Modifiche a questa privacy policy',
            text1:
              'Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso.\nSi prega dunque di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.',
            text2:
              "Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell'Utente, se necessario.",
          },
        },
        googleApi: {
          title: 'Servizi API Google — Politica sui Dati Utente',
          intro:
            "L'utilizzo e il trasferimento delle informazioni ricevute dalle API Google da parte di MyBalance aderisce alla Politica sui dati utente dei servizi API Google, compresi i requisiti di utilizzo limitato. Questa sezione descrive con precisione come accediamo, utilizziamo, archiviamo e proteggiamo i dati ottenuti tramite Google OAuth.",
          dataAccessed: {
            title: 'Dati Google a cui Accediamo',
            intro: 'Quando accedi con Google, MyBalance richiede le seguenti autorizzazioni OAuth:',
            items: [
              {
                scope: 'openid / profile / email',
                purpose:
                  "Utilizzati esclusivamente per identificarti, creare o recuperare il tuo account e visualizzare il tuo nome e la tua foto profilo all'interno dell'app. Non utilizziamo queste informazioni per nessun altro scopo.",
              },
              {
                scope: 'https://www.googleapis.com/auth/spreadsheets',
                purpose:
                  'Utilizzato esclusivamente per creare, leggere e aggiornare un singolo Google Spreadsheet dedicato nel tuo Google Drive, dove vengono memorizzati tutti i tuoi dati finanziari personali. MyBalance non accede mai ad altri fogli di calcolo o file nel tuo Drive al di là di quello che crea per te.',
              },
            ],
          },
          limitedUse: {
            title: 'Utilizzo Limitato dei Dati Utente Google',
            intro:
              'I dati ottenuti dalle API Google sono utilizzati in modo stretto ed esclusivo per i seguenti scopi:',
            items: [
              "Autenticare la tua identità per fornire accesso sicuro all'applicazione.",
              'Creare e gestire un foglio di calcolo dedicato nel tuo Google Drive per memorizzare i tuoi dati finanziari personali (transazioni, conti, categorie).',
              'Leggere e scrivere i tuoi dati finanziari da e verso quel foglio di calcolo per tuo conto.',
              "Visualizzare il tuo nome e la tua foto profilo nell'interfaccia dell'applicazione.",
            ],
            prohibitions: {
              title: 'Non utilizziamo i tuoi dati per:',
              items: [
                'Condividere, vendere, affittare o trasferire i tuoi dati utente Google a terzi.',
                'Utilizzare i tuoi dati Google Sheets per scopi pubblicitari, di profilazione o di marketing.',
                'Consentire a persone fisiche di leggere i tuoi dati Google Sheets, eccetto ove strettamente necessario per rispondere a incidenti di sicurezza o per conformità legale.',
                'Accedere a Google Sheets, file Drive o dati diversi dal singolo foglio di calcolo dedicato di MyBalance.',
                'Utilizzare i dati utente Google per qualsiasi scopo non descritto in questa Privacy Policy.',
              ],
            },
          },
          dataStorage: {
            title: 'Archiviazione delle Credenziali Google',
            text: "Per consentire un accesso fluido al tuo Google Sheets senza richiedere la riautenticazione ad ogni sessione, MyBalance archivia in modo sicuro il tuo token di aggiornamento OAuth di Google in formato crittografato AES nel nostro database PostgreSQL ospitato su Vercel (Stati Uniti). Il token di aggiornamento viene utilizzato esclusivamente per ottenere token di accesso di breve durata per interagire con il tuo foglio di calcolo per tuo conto. Non viene mai trasmesso a terzi e viene eliminato alla cancellazione dell'account.",
          },
          revocation: {
            title: "Revoca dell'Accesso Google",
            text: "Puoi revocare l'accesso di MyBalance al tuo account Google in qualsiasi momento visitando la pagina delle autorizzazioni del tuo account Google su https://myaccount.google.com/permissions e rimuovendo MyBalance. In seguito alla revoca, l'app non sarà più in grado di accedere al tuo foglio di calcolo. Puoi anche contattarci all'indirizzo fabio.f2001@gmail.com per richiedere l'eliminazione immediata di tutti i token archiviati e dei dati dell'account dai nostri sistemi.",
          },
          compliance: {
            title: 'Dichiarazione di Conformità',
            text: "L'utilizzo da parte di MyBalance delle informazioni ricevute dalle API Google è conforme alla Politica sui dati utente dei servizi API Google, compresi i requisiti di utilizzo limitato. Per ulteriori informazioni su questa politica, consulta: https://developers.google.com/terms/api-services-user-data-policy",
          },
        },
        definitions: {
          title: 'Definizioni e riferimenti legali',
          items: {
            personalData: {
              title: 'Dati Personali (o Dati)',
              text: 'Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.',
            },
            usageData: {
              title: 'Dati di Utilizzo',
              text: "Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall'Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l'orario della richiesta, il metodo utilizzato nell'inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all'itinerario seguito all'interno dell'Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all'ambiente informatico dell'Utente.",
            },
            user: {
              title: 'Utente',
              text: "L'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l'Interessato.",
            },
            dataSubject: {
              title: 'Interessato',
              text: 'La persona fisica cui si riferiscono i Dati Personali.',
            },
            dataProcessor: {
              title: 'Responsabile del Trattamento (o Responsabile)',
              text: 'La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.',
            },
            dataController: {
              title: 'Titolare del Trattamento (o Titolare)',
              text: "La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione.\nIl Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione.",
            },
            application: {
              title: 'Questa Applicazione',
              text: 'Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.',
            },
            service: {
              title: 'Servizio',
              text: 'Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su questo sito/applicazione.',
            },
            eu: {
              title: 'Unione Europea (o UE)',
              text: "Salvo ove diversamente specificato, ogni riferimento all'Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell'Unione Europea e dello Spazio Economico Europeo.",
            },
            cookie: {
              title: 'Cookie',
              text: "I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all'interno del browser dell'Utente.",
            },
            trackingTool: {
              title: 'Strumento di Tracciamento',
              text: "Per Strumento di Tracciamento s'intende qualsiasi tecnologia - es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting - che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell'Utente.",
            },
            legalReferences: {
              title: 'Riferimenti legali',
              text: 'Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questa Applicazione.',
            },
          },
        },
      },
    },
    cookiePolicy: {
      title: 'Cookie Policy',
    },
    termsOfService: {
      title: 'Termini di Servizio',
      lastUpdated: 'Ultimo aggiornamento: 21 marzo 2026',
      sections: {
        acceptance: {
          title: '1. Accettazione dei Termini',
          text: 'Scaricando, installando o utilizzando l\'applicazione mobile MyBalance (\"App\") o il servizio web MyBalance (\"Servizio\"), accetti di essere vincolato dai presenti Termini di Servizio (\"Termini\"). Se non accetti questi Termini, non utilizzare il Servizio. I presenti Termini costituiscono un accordo legalmente vincolante tra te e lo sviluppatore di MyBalance (\"noi\", \"ci\" o \"nostro\").',
        },
        description: {
          title: '2. Descrizione del Servizio',
          text: "MyBalance è un'applicazione per il tracciamento delle finanze personali che utilizza Google Sheets come archivio dati principale. L'App si connette al tuo account Google personale, crea un foglio di calcolo dedicato nel tuo Google Drive e fornisce un'interfaccia per registrare e visualizzare le tue transazioni finanziarie. Non memorizziamo i tuoi dati finanziari sui nostri server — tutti i dati sulle transazioni risiedono esclusivamente nel tuo Google Drive.",
        },
        googleAccount: {
          title: '3. Account Google e Permessi',
          text: "Per utilizzare MyBalance, devi avere un account Google valido. Utilizzando il Servizio, autorizzi MyBalance a:\n\n• Accedere alle informazioni del tuo profilo Google (nome, email, foto profilo) per identificare il tuo account.\n• Creare e gestire un singolo Google Spreadsheet dedicato nel tuo Google Drive per archiviare i tuoi dati finanziari.\n• Leggere e scrivere dati su quel foglio di calcolo per tuo conto.\n\nPuoi revocare questi permessi in qualsiasi momento dalle impostazioni del tuo account Google su https://myaccount.google.com/permissions. La revoca dei permessi impedirà il funzionamento dell'App.",
        },
        userObligations: {
          title: "4. Obblighi dell'Utente",
          intro: 'Accetti di:',
          items: [
            'Utilizzare il Servizio esclusivamente per scopi legali di tracciamento delle finanze personali.',
            "Non tentare di fare reverse engineering, decompilare o manomettere l'applicazione.",
            'Non utilizzare il Servizio per archiviare o elaborare dati di terzi senza il loro consenso.',
            'Mantenere sicure le credenziali del tuo account Google.',
            "Notificarci tempestivamente all'indirizzo fabio.f2001@gmail.com in caso di sospetto accesso non autorizzato al tuo account.",
          ],
        },
        dataOwnership: {
          title: '5. Proprietà dei Dati',
          text: "I tuoi dati finanziari ti appartengono interamente. Sono archiviati in un Google Spreadsheet nel tuo account Google Drive. Non rivendichiamo alcuna proprietà sui tuoi dati finanziari personali. Puoi accedere, esportare o eliminare i tuoi dati direttamente da Google Drive in qualsiasi momento, indipendentemente dall'App.",
        },
        dataWeStore: {
          title: '6. Dati che Archiviamo sui Nostri Server',
          text: 'I nostri server (PostgreSQL su Vercel) archiviano solo i dati minimi necessari per far funzionare il Servizio:',
          items: [
            "Il tuo indirizzo email e nome visualizzato dell'account Google.",
            "Un riferimento all'ID del tuo foglio di calcolo dedicato.",
            'Una copia cifrata con AES del tuo token di aggiornamento OAuth di Google, utilizzata esclusivamente per accedere al tuo foglio di calcolo per tuo conto.',
            "Metadati di sessione (identificatori di dispositivo, token di sessione) per supportare l'accesso multi-dispositivo.",
            'Token per notifiche push (se abiliti le notifiche).',
          ],
          deletion:
            "Tutti i dati archiviati sui nostri server vengono eliminati definitivamente alla cancellazione dell'account. Per richiedere la cancellazione, contattaci all'indirizzo fabio.f2001@gmail.com.",
        },
        intellectualProperty: {
          title: '7. Proprietà Intellettuale',
          text: "L'applicazione MyBalance, il suo codice sorgente, design e branding sono proprietà intellettuale dello sviluppatore. Il codice sorgente è reso disponibile sotto licenza MIT su GitHub. Sei libero di utilizzare, modificare e distribuire il codice sorgente in conformità con i termini della licenza MIT. Il nome e il logo MyBalance non possono essere utilizzati senza previa autorizzazione scritta.",
        },
        disclaimer: {
          title: '8. Esclusione di Garanzie',
          text: 'IL SERVIZIO È FORNITO \"COSÌ COM\'È\" E \"COME DISPONIBILE\" SENZA GARANZIE DI ALCUN TIPO, ESPLICITE O IMPLICITE, INCLUSE MA NON LIMITATE ALLE GARANZIE DI COMMERCIABILITÀ, IDONEITÀ A UNO SCOPO PARTICOLARE O NON VIOLAZIONE. NON GARANTIAMO CHE IL SERVIZIO SARÀ ININTERROTTO, PRIVO DI ERRORI O CHE I DIFETTI SARANNO CORRETTORE. L\'UTILIZZO DEL SERVIZIO AVVIENE A TUO ESCLUSIVO RISCHIO.',
        },
        limitation: {
          title: '9. Limitazione di Responsabilità',
          text: "NELLA MISURA MASSIMA CONSENTITA DALLA LEGGE APPLICABILE, NON SAREMO RESPONSABILI PER DANNI INDIRETTI, INCIDENTALI, SPECIALI, CONSEQUENZIALI O PUNITIVI, NÉ PER PERDITA DI PROFITTI O DATI, DERIVANTI DA O IN CONNESSIONE CON L'UTILIZZO DEL SERVIZIO, ANCHE SE SIAMO STATI AVVISATI DELLA POSSIBILITÀ DI TALI DANNI. LA NOSTRA RESPONSABILITÀ TOTALE NEI TUOI CONFRONTI PER TUTTI I RECLAMI DERIVANTI DA O RELATIVI AL SERVIZIO NON SUPERERÀ L'IMPORTO CHE CI HAI PAGATO NEI DODICI MESI PRECEDENTI IL RECLAMO, O CINQUANTA EURO (€50), A SECONDA DI QUALE SIA MAGGIORE.",
        },
        termination: {
          title: '10. Risoluzione',
          text: "Ci riserviamo il diritto di sospendere o terminare il tuo accesso al Servizio in qualsiasi momento, con o senza preavviso, per comportamenti che riteniamo violino i presenti Termini o siano dannosi per altri utenti, per noi, per terzi o per l'integrità del Servizio. Puoi smettere di utilizzare il Servizio in qualsiasi momento. Alla risoluzione, i tuoi dati sui nostri server verranno eliminati entro 30 giorni, ma i dati nel tuo Google Sheets rimangono nel tuo Google Drive e non sono interessati.",
        },
        changes: {
          title: '11. Modifiche ai Termini',
          text: 'Ci riserviamo il diritto di modificare i presenti Termini in qualsiasi momento. Informeremo gli utenti delle modifiche sostanziali aggiornando la data \"Ultimo aggiornamento\" in cima a questa pagina e, ove possibile, tramite una notifica nell\'App. Il tuo continuato utilizzo del Servizio dopo che le modifiche diventano effettive costituisce accettazione dei Termini rivisti.',
        },
        governingLaw: {
          title: '12. Legge Applicabile',
          text: 'I presenti Termini sono disciplinati e interpretati in conformità con le leggi della Repubblica Italiana, senza riguardo alle sue disposizioni sul conflitto di leggi. Qualsiasi controversia derivante dai presenti Termini sarà soggetta alla giurisdizione esclusiva dei tribunali italiani.',
        },
        contact: {
          title: '13. Contatti',
          text: "Per qualsiasi domanda relativa ai presenti Termini di Servizio, contattaci all'indirizzo:",
          email: 'fabio.f2001@gmail.com',
        },
      },
    },
  },
};
