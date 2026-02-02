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
    whySection: {
      title: 'Fatto per Chi Ama i Dati',
      intro: {
        title: 'MyBalance è per chi vuole davvero capire dove vanno i propri soldi.',
        description: 'Se oggi tracci le spese su un foglio di calcolo, MyBalance nasce esattamente per te.\nÈ la potenza di uno spreadsheet unita alla semplicità di un\'app mobile: nessuna magia nera, nessun dato nascosto, solo controllo reale sulle tue finanze.',
      },
      forWho: {
        title: 'Per chi è pensato',
        subtitle: 'MyBalance è perfetto per te se:',
        items: {
          dataLovers: 'Vuoi vedere ogni numero, senza filtri né limitazioni',
          spreadsheetUsers: 'Usi (o ami) i fogli di calcolo ma vuoi un\'interfaccia più comoda',
          privacyConscious: 'Dai valore alla privacy e alla proprietà dei tuoi dati',
          controlFreaks: 'Vuoi controllo totale, non grafici "carini" ma inutili',
        },
        conclusion: 'In breve: se vuoi decidere tu come leggere i tuoi soldi, MyBalance è casa tua.',
      },
      origin: {
        title: 'Da dove nasce MyBalance',
        intro: 'Tutto è partito da una frustrazione.\nEravamo stanchi di app finanziarie che:',
        items: {
          proprietary: 'Rinchiudono i tuoi dati in formati proprietari',
          superficial: 'Mostrano solo insight superficiali',
          subscriptions: 'Fanno pagare abbonamenti per funzioni basilari',
        },
        conclusion: 'Così abbiamo fatto una scelta radicale: i dati restano tuoi.\nCon MyBalance tutto vive nel tuo Google Sheet: sempre accessibile, esportabile, modificabile.\nSenza lock-in, senza sorprese.',
      },
    },
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
      example: {
        title: 'Esempio: Serata pizza con amici',
        description: 'Paghi €48 in contanti per tutti alla pizzeria. I tuoi amici ti rimborsano: €25 tramite bonifico su Intesa San Paolo, €10 su Trade Republic. Spesa totale per te? Solo €13. Un unico movimento cattura tutto.',
        cash: 'Contanti: -€48,00 (hai pagato il conto)',
        intesa: 'Intesa San Paolo: +€25,00 (rimborso amico 1)',
        trade: 'Trade Republic: +€10,00 (rimborso amico 2)',
        net: 'Spesa netta: -€13,00 (la tua parte)',
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
        disclaimer: 'Cliccando Avvisami accetti la',
        privacyPolicy: 'Privacy Policy',
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
      button: 'Dai un\'occhiata al codice sorgente',
    },
    architecture: {
      title: 'Come Funziona',
      mobileApp: 'App Mobile',
      reactNative: 'React Native',
      backendApi: 'Backend API',
      expressVercel: 'Express + Vercel',
      yourData: 'I Tuoi Dati',
      googleSheets: 'Google Sheets',
      description: 'L\'app comunica con il nostro backend, che accede in modo sicuro al tuo Google Sheet usando token criptati. I tuoi dati finanziari non toccano mai i nostri server - vanno direttamente sul tuo Google Drive personale.',
    },
    whatWeStore: {
      title: 'Cosa Memorizziamo Noi (PostgreSQL)',
      items: {
        email: 'La tua email e info profilo',
        spreadsheetId: 'Riferimento all\'ID del tuo spreadsheet',
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
          intro: 'Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono:',
          items: ['Dati di utilizzo', 'Strumenti di Tracciamento'],
          details: 'Dettagli completi su ciascuna tipologia di Dati Personali raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei Dati stessi.',
          provided: 'I Dati Personali possono essere liberamente forniti dall\'Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l\'uso di questa Applicazione.',
          required: 'Se non diversamente specificato, tutti i Dati richiesti da questa Applicazione sono obbligatori.\nSe l\'Utente rifiuta di comunicarli, potrebbe essere impossibile per questa Applicazione fornire il Servizio.\nNei casi in cui questa Applicazione indichi alcuni Dati come facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza sulla disponibilità del Servizio o sulla sua operatività.',
          doubts: 'Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori sono incoraggiati a contattare il Titolare.',
          cookies: 'L\'eventuale utilizzo di Cookie - o di altri strumenti di tracciamento - da parte di questa Applicazione o dei titolari dei servizi terzi utilizzati da questa Applicazione ha la finalità di fornire il Servizio richiesto dall\'Utente, oltre alle ulteriori finalità descritte nel presente documento e nella',
          cookiePolicy: 'Cookie Policy',
          responsibility: 'L\'Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questa Applicazione.',
        },
        processing: {
          title: 'Modalità e luogo del trattamento dei Dati raccolti',
          methods: {
            title: 'Modalità di trattamento',
            security: 'Il Titolare adotta le opportune misure di sicurezza volte ad impedire l\'accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.',
            details: 'Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.\nOltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati altri soggetti coinvolti nell\'organizzazione di questa Applicazione (personale amministrativo, commerciale, marketing, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche, agenzie di comunicazione) nominati anche, se necessario, Responsabili del Trattamento da parte del Titolare.\nL\'elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.',
          },
          location: {
            title: 'Luogo',
            text: 'I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate.\nPer ulteriori informazioni, contatta il Titolare.',
            transfer: 'I Dati Personali dell\'Utente potrebbero essere trasferiti in un paese diverso da quello in cui l\'Utente si trova.\nPer ottenere ulteriori informazioni sul luogo del trattamento l\'Utente può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.',
          },
          retention: {
            title: 'Periodo di conservazione',
            text: 'Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti.',
          },
        },
        purposes: {
          title: 'Finalità del Trattamento dei Dati raccolti',
          intro: 'I Dati dell\'Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi (o quelli di Utenti o di terze parti), individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità:',
          items: ['Hosting ed infrastruttura backend', 'Visualizzazione di contenuti da piattaforme esterne'],
        },
        processingDetails: {
          title: 'Dettagli sul trattamento dei Dati Personali',
          hosting: {
            title: 'Hosting ed infrastruttura backend',
            description: 'Questo tipo di servizio ha lo scopo di ospitare Dati e file che consentono a questa Applicazione di funzionare e di essere distribuito o di fornire un\'infrastruttura pronta all\'uso per eseguire funzionalità specifiche o parti di questa Applicazione.',
            distributed: 'Alcuni servizi tra quelli elencati di seguito, se presenti, possono funzionare su server geograficamente distribuiti, rendendo difficile determinare l\'effettiva ubicazione in cui sono conservati i Dati Personali.',
            vercel: {
              name: 'Vercel Inc.',
              company: 'Azienda: Vercel Inc.',
              location: 'Luogo del trattamento: Stati Uniti',
              data: 'Dati Personali trattati: Dati di utilizzo',
            },
          },
          externalContent: {
            title: 'Visualizzazione di contenuti da piattaforme esterne',
            description: 'Questo tipo di servizi permette di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e di interagire con essi.\nTali servizi sono spesso definiti widget, ovvero piccoli elementi inseriti in un sito web o in un\'applicazione.\nForniscono informazioni specifiche o svolgono una funzione particolare e spesso consentono l\'interazione con l\'utente.',
            traffic: 'Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico web relativo alle pagine dove il servizio è installato, anche quando gli utenti non lo utilizzano.',
            googleFonts: {
              name: 'Google Fonts',
              company: 'Azienda: Google LLC',
              location: 'Luogo del trattamento: Stati Uniti',
              data: 'Dati Personali trattati: Dati di utilizzo',
            },
          },
        },
        cookiePolicySection: {
          title: 'Cookie Policy',
          text: 'Questa Applicazione fa utilizzo di Strumenti di Tracciamento.\nPer saperne di più, gli Utenti possono consultare la',
        },
        euInfo: {
          title: 'Ulteriori informazioni per gli utenti nell\'Unione Europea',
          legalBasis: {
            title: 'Base giuridica del trattamento',
            intro: 'Il Titolare tratta Dati Personali relativi all\'Utente in caso sussista una delle seguenti condizioni:',
            items: [
              'l\'Utente ha prestato il consenso per una o più finalità specifiche.',
              'il trattamento è necessario all\'esecuzione di un contratto con l\'Utente e/o all\'esecuzione di misure precontrattuali;',
              'il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;',
              'il trattamento è necessario per l\'esecuzione di un compito di interesse pubblico o per l\'esercizio di pubblici poteri di cui è investito il Titolare;',
              'il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.',
            ],
            clarification: 'È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica di ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla legge, previsto da un contratto o necessario per concludere un contratto.',
          },
          retention: {
            title: 'Ulteriori informazioni sul tempo di conservazione',
            intro: 'Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti.',
            therefore: 'Pertanto:',
            items: [
              'I Dati Personali raccolti per scopi collegati all\'esecuzione di un contratto tra il Titolare e l\'Utente saranno trattenuti sino a quando sia completata l\'esecuzione di tale contratto.',
              'I Dati Personali raccolti per finalità riconducibili all\'interesse legittimo del Titolare saranno trattenuti sino al soddisfacimento di tale interesse.\nL\'Utente può ottenere ulteriori informazioni in merito all\'interesse legittimo perseguito dal Titolare nelle relative sezioni di questo documento o contattando il Titolare.',
              'Quando il trattamento è basato sul consenso dell\'Utente, il Titolare può conservare i Dati Personali più a lungo sino a quando detto consenso non venga revocato.\nInoltre, il Titolare potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo per adempiere ad un obbligo di legge o per ordine di un\'autorità.',
            ],
            expiration: 'Al termine del periodo di conservazione i Dati Personali saranno cancellati.\nPertanto, allo spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla portabilità dei Dati non potranno più essere esercitati.',
          },
        },
        gdprRights: {
          title: 'Diritti dell\'Utente sulla base del Regolamento Generale sulla Protezione dei Dati (GDPR)',
          intro: 'Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.',
          inParticular: 'In particolare, nei limiti previsti dalla legge, l\'Utente ha il diritto di:',
          rights: [
            { strong: 'revocare il consenso in ogni momento.', text: 'L\'Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso.' },
            { strong: 'opporsi al trattamento dei propri Dati.', text: 'L\'Utente può opporsi al trattamento dei propri Dati quando esso avviene in virtù di una base giuridica diversa dal consenso.' },
            { strong: 'accedere ai propri Dati.', text: 'L\'Utente ha diritto ad ottenere informazioni sui Dati trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia dei Dati trattati.' },
            { strong: 'verificare e chiedere la rettificazione.', text: 'L\'Utente può verificare la correttezza dei propri Dati e richiederne l\'aggiornamento o la correzione.' },
            { strong: 'ottenere la limitazione del trattamento.', text: 'L\'Utente può richiedere la limitazione del trattamento dei propri Dati.\nIn tal caso il Titolare non tratterà i Dati per alcun altro scopo se non la loro conservazione.' },
            { strong: 'ottenere la cancellazione o rimozione dei propri Dati Personali.', text: 'L\'Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.' },
            { strong: 'ricevere i propri Dati o farli trasferire ad altro titolare.', text: 'L\'Utente ha diritto di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo automatico e, ove tecnicamente fattibile, di ottenerne il trasferimento senza ostacoli ad un altro titolare.' },
            { strong: 'proporre reclamo.', text: 'L\'Utente può proporre un reclamo all\'autorità di controllo della protezione dei dati personali competente o agire in sede giudiziale.' },
          ],
          transferInfo: 'Gli Utenti hanno diritto di ottenere informazioni in merito alla base giuridica per il trasferimento di Dati all\'estero incluso verso qualsiasi organizzazione internazionale regolata dal diritto internazionale o costituita da due o più paesi, come ad esempio l\'ONU, nonché in merito alle misure di sicurezza adottate dal Titolare per proteggere i loro Dati.',
          opposition: {
            title: 'Dettagli sul diritto di opposizione',
            public: 'Quando i Dati Personali sono trattati nell\'interesse pubblico, nell\'esercizio di pubblici poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare, gli Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione particolare.',
            marketing: 'Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto, possono opporsi al trattamento in qualsiasi momento, gratuitamente e senza fornire alcuna motivazione.\nQualora gli Utenti si oppongano al trattamento per finalità di marketing diretto, i Dati Personali non sono più oggetto di trattamento per tali finalità.\nPer scoprire se il Titolare tratti Dati con finalità di marketing diretto gli Utenti possono fare riferimento alle rispettive sezioni di questo documento.',
          },
          howTo: {
            title: 'Come esercitare i diritti',
            text: 'Eventuali richieste di esercizio dei diritti dell\'Utente possono essere indirizzate al Titolare attraverso i recapiti forniti in questo documento.\nLa richiesta è gratuita e il Titolare risponderà nel più breve tempo possibile, in ogni caso entro un mese, fornendo all\'Utente tutte le informazioni previste dalla legge.\nEventuali rettifiche, cancellazioni o limitazioni del trattamento saranno comunicate dal Titolare a ciascuno dei destinatari, se esistenti, a cui sono stati trasmessi i Dati Personali, salvo che ciò si riveli impossibile o implichi uno sforzo sproporzionato.\nIl Titolare comunica all\'Utente tali destinatari qualora egli lo richieda.',
          },
        },
        additionalInfo: {
          title: 'Ulteriori informazioni sul trattamento',
          defense: {
            title: 'Difesa in giudizio',
            text1: 'I Dati Personali dell\'Utente possono essere utilizzati da parte del Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell\'utilizzo di questa Applicazione o dei Servizi connessi da parte dell\'Utente.',
            text2: 'L\'Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati per ordine delle autorità pubbliche.',
          },
          specificNotices: {
            title: 'Informative specifiche',
            text: 'Su richiesta dell\'Utente, in aggiunta alle informazioni contenute in questa privacy policy, questa Applicazione potrebbe fornire all\'Utente delle informative aggiuntive e contestuali riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.',
          },
          systemLogs: {
            title: 'Log di sistema e manutenzione',
            text: 'Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l\'indirizzo IP Utente.',
          },
          notIncluded: {
            title: 'Informazioni non contenute in questa policy',
            text: 'Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.',
          },
          changes: {
            title: 'Modifiche a questa privacy policy',
            text1: 'Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso.\nSi prega dunque di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.',
            text2: 'Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell\'Utente, se necessario.',
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
              text: 'Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall\'Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l\'orario della richiesta, il metodo utilizzato nell\'inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all\'itinerario seguito all\'interno dell\'Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all\'ambiente informatico dell\'Utente.',
            },
            user: {
              title: 'Utente',
              text: 'L\'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l\'Interessato.',
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
              text: 'La persona fisica o giuridica, l\'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione.\nIl Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione.',
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
              text: 'Salvo ove diversamente specificato, ogni riferimento all\'Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell\'Unione Europea e dello Spazio Economico Europeo.',
            },
            cookie: {
              title: 'Cookie',
              text: 'I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all\'interno del browser dell\'Utente.',
            },
            trackingTool: {
              title: 'Strumento di Tracciamento',
              text: 'Per Strumento di Tracciamento s\'intende qualsiasi tecnologia - es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting - che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell\'Utente.',
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
  },
};
