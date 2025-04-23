export interface Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: "low" | "medium" | "high";
    dueDate: string;
    category: string;
    tags: string[];
  }
  
  export const todos: Todo[] = [
    {
      id: 1,
      title: "Répondre aux emails urgents",
      description: "Traiter les emails prioritaires de la journée",
      completed: false,
      priority: "high",
      dueDate: "2025-04-23",
      category: "travail",
      tags: ["email", "urgent", "communication"]
    },
    {
      id: 2,
      title: "Préparer la présentation client",
      description: "Finaliser les slides pour la réunion de demain",
      completed: false,
      priority: "high",
      dueDate: "2025-04-24",
      category: "travail",
      tags: ["présentation", "client", "réunion"]
    },
    {
      id: 3,
      title: "Faire les courses",
      description: "Acheter des légumes, fruits et lait",
      completed: true,
      priority: "medium",
      dueDate: "2025-04-22",
      category: "personnel",
      tags: ["courses", "supermarché", "nourriture"]
    },
    {
      id: 4,
      title: "Appeler le plombier",
      description: "Fuite d’eau dans la cuisine à régler",
      completed: false,
      priority: "high",
      dueDate: "2025-04-23",
      category: "domicile",
      tags: ["urgence", "plomberie"]
    },
    {
      id: 5,
      title: "Réviser l’examen de maths",
      description: "Faire les exercices du chapitre 3",
      completed: false,
      priority: "high",
      dueDate: "2025-04-25",
      category: "études",
      tags: ["révision", "maths", "examen"]
    },
    {
      id: 6,
      title: "Envoyer le rapport mensuel",
      description: "Rapport d’activité à transmettre au manager",
      completed: true,
      priority: "medium",
      dueDate: "2025-04-20",
      category: "travail",
      tags: ["rapport", "bilan"]
    },
    {
      id: 7,
      title: "Ranger le garage",
      description: "Trier les vieux outils et les boîtes",
      completed: false,
      priority: "low",
      dueDate: "2025-04-30",
      category: "domicile",
      tags: ["rangement", "organisation"]
    },
    {
      id: 8,
      title: "Lire un chapitre du roman",
      description: "Avancer dans le livre commencé",
      completed: false,
      priority: "low",
      dueDate: "2025-04-22",
      category: "loisir",
      tags: ["lecture", "roman"]
    },
    {
      id: 9,
      title: "Faire du sport",
      description: "30 minutes de cardio",
      completed: true,
      priority: "medium",
      dueDate: "2025-04-22",
      category: "santé",
      tags: ["sport", "cardio", "forme"]
    },
    {
      id: 10,
      title: "Réserver les billets de train",
      description: "Week-end à Paris",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-24",
      category: "voyage",
      tags: ["réservation", "train", "week-end"]
    },
    {
      id: 11,
      title: "Nettoyer l’aquarium",
      description: "Changer l’eau et nettoyer les vitres",
      completed: false,
      priority: "low",
      dueDate: "2025-04-26",
      category: "domicile",
      tags: ["aquarium", "entretien"]
    },
    {
      id: 12,
      title: "Organiser une sortie entre amis",
      description: "Proposer une date et un lieu",
      completed: false,
      priority: "low",
      dueDate: "2025-04-27",
      category: "social",
      tags: ["amis", "sortie", "planning"]
    },
    {
      id: 13,
      title: "Finir le puzzle 1000 pièces",
      description: "Objectif détente du week-end",
      completed: false,
      priority: "low",
      dueDate: "2025-04-28",
      category: "loisir",
      tags: ["puzzle", "détente"]
    },
    {
      id: 14,
      title: "Mise à jour du CV",
      description: "Ajouter les dernières expériences",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-25",
      category: "carrière",
      tags: ["cv", "emploi", "profil"]
    },
    {
      id: 15,
      title: "Passer l’aspirateur",
      description: "Nettoyage des sols de l’appartement",
      completed: false,
      priority: "low",
      dueDate: "2025-04-22",
      category: "domicile",
      tags: ["ménage", "aspirateur"]
    },
    {
      id: 16,
      title: "Envoyer une carte d’anniversaire",
      description: "Pour l’anniversaire de Marie",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-23",
      category: "social",
      tags: ["anniversaire", "famille", "carte"]
    },
    {
      id: 17,
      title: "Faire une sauvegarde du PC",
      description: "Copier les fichiers importants",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-22",
      category: "informatique",
      tags: ["sauvegarde", "fichiers", "sécurité"]
    },
    {
      id: 18,
      title: "Créer un compte LinkedIn",
      description: "Commencer à construire un réseau pro",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-26",
      category: "carrière",
      tags: ["réseau", "emploi", "linkedin"]
    },
    {
      id: 19,
      title: "Arroser les plantes",
      description: "Les plantes du balcon et du salon",
      completed: true,
      priority: "low",
      dueDate: "2025-04-22",
      category: "domicile",
      tags: ["jardinage", "plantes"]
    },
    {
      id: 20,
      title: "Réparer la porte du placard",
      description: "Charnière desserrée à revisser",
      completed: false,
      priority: "low",
      dueDate: "2025-04-30",
      category: "domicile",
      tags: ["bricolage", "réparation"]
    },
    {
      id: 21,
      title: "Revoir les bases de React",
      description: "Relire la doc officielle et faire un mini projet",
      completed: false,
      priority: "high",
      dueDate: "2025-04-28",
      category: "apprentissage",
      tags: ["react", "javascript", "projet"]
    },
    {
      id: 22,
      title: "Planifier les vacances d’été",
      description: "Choisir une destination et établir un budget",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-01",
      category: "voyage",
      tags: ["vacances", "été", "budget"]
    },

  
    {
      id: 23,
      title: "Envoyer les invitations",
      description: "Invitations pour la fête d'anniversaire",
      completed: true,
      priority: "high",
      dueDate: "2025-04-18",
      category: "social",
      tags: ["invitation", "fête", "organisation"]
    },
    {
      id: 24,
      title: "Trier les photos de vacances",
      description: "Organiser les albums et supprimer les doublons",
      completed: false,
      priority: "low",
      dueDate: "2025-05-20",
      category: "personnel",
      tags: ["photos", "organisation", "souvenirs"]
    },
    {
      id: 25,
      title: "Vérifier le budget mensuel",
      description: "Analyser les dépenses et ajuster le budget",
      completed: false,
      priority: "high",
      dueDate: "2025-04-30",
      category: "finances",
      tags: ["budget", "finances", "planning"]
    },
    {
      id: 26,
      title: "Résoudre le bug d'authentification",
      description: "Corriger l'erreur 404 lors de la connexion",
      completed: false,
      priority: "high",
      dueDate: "2025-04-23",
      category: "travail",
      tags: ["bug", "développement", "correction"]
    },
    {
      id: 27,
      title: "Renouveler l'abonnement gym",
      description: "Payer l'abonnement pour le prochain trimestre",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-01",
      category: "santé",
      tags: ["gym", "abonnement", "sport"]
    },
    {
      id: 28,
      title: "Organiser l'espace de travail",
      description: "Ranger le bureau et archiver les dossiers",
      completed: false,
      priority: "low",
      dueDate: "2025-04-28",
      category: "organisation",
      tags: ["bureau", "rangement", "productivité"]
    },
    {
      id: 29,
      title: "Participer à la réunion hebdomadaire",
      description: "Réunion d'équipe avec présentation des avancées",
      completed: true,
      priority: "high",
      dueDate: "2025-04-22",
      category: "travail",
      tags: ["réunion", "équipe", "hebdomadaire"]
    },
    {
      id: 30,
      title: "Déclarer les impôts",
      description: "Remplir la déclaration de revenus annuelle",
      completed: false,
      priority: "high",
      dueDate: "2025-05-20",
      category: "finances",
      tags: ["impôts", "déclaration", "finances"]
    },
    {
      id: 31,
      title: "Acheter un nouveau smartphone",
      description: "Comparer les modèles et les offres",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-15",
      category: "technologie",
      tags: ["smartphone", "achat", "technologie"]
    },
    {
      id: 32,
      title: "Regarder le nouveau film Marvel",
      description: "Sortie cinéma avec des amis",
      completed: false,
      priority: "low",
      dueDate: "2025-04-26",
      category: "loisirs",
      tags: ["cinéma", "film", "sortie"]
    },
    {
      id: 33,
      title: "Préparer le rapport de stage",
      description: "Rédiger l'introduction et la conclusion",
      completed: false,
      priority: "high",
      dueDate: "2025-05-10",
      category: "éducation",
      tags: ["rapport", "stage", "rédaction"]
    },
    {
      id: 34,
      title: "Faire une sauvegarde du disque dur",
      description: "Sauvegarder tous les documents importants",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-25",
      category: "technique",
      tags: ["sauvegarde", "données", "sécurité"]
    },
    {
      id: 35,
      title: "Appeler le plombier",
      description: "Prise de rendez-vous pour inspection de la chaudière",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-24",
      category: "maison",
      tags: ["plombier", "chaudière", "entretien"]
    },
    {
      id: 36,
      title: "Acheter de nouvelles chaussures de sport",
      description: "Trouver des chaussures pour le running",
      completed: false,
      priority: "low",
      dueDate: "2025-05-05",
      category: "shopping",
      tags: ["chaussures", "sport", "achat"]
    },
    {
      id: 37,
      title: "Écrire l'article de blog",
      description: "Rédiger l'article sur les tendances React 2025",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-29",
      category: "travail",
      tags: ["blog", "rédaction", "react"]
    },
    {
      id: 38,
      title: "Préparer le dossier pour la banque",
      description: "Rassembler les documents pour le prêt immobilier",
      completed: false,
      priority: "high",
      dueDate: "2025-05-02",
      category: "finances",
      tags: ["prêt", "banque", "immobilier"]
    },
    {
      id: 39,
      title: "Renouveler le passeport",
      description: "Faire la demande de renouvellement en ligne",
      completed: false,
      priority: "medium",
      dueDate: "2025-06-15",
      category: "administratif",
      tags: ["passeport", "voyage", "document"]
    },
    {
      id: 40,
      title: "Planifier la réunion d'équipe",
      description: "Organiser l'agenda et réserver la salle",
      completed: true,
      priority: "high",
      dueDate: "2025-04-19",
      category: "travail",
      tags: ["réunion", "planning", "équipe"]
    },
    {
      id: 41,
      title: "Changer l'ampoule du salon",
      description: "Remplacer par une ampoule LED",
      completed: false,
      priority: "low",
      dueDate: "2025-04-24",
      category: "maison",
      tags: ["bricolage", "éclairage", "maintenance"]
    },
    {
      id: 42,
      title: "Finir le livre en cours",
      description: "Terminer les 100 dernières pages",
      completed: false,
      priority: "low",
      dueDate: "2025-04-30",
      category: "loisirs",
      tags: ["lecture", "livre", "détente"]
    },
    {
      id: 43,
      title: "Mettre à jour le portfolio",
      description: "Ajouter les derniers projets réalisés",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-15",
      category: "carrière",
      tags: ["portfolio", "projets", "professionnel"]
    },
    {
      id: 44,
      title: "Faire réviser la voiture",
      description: "Entretien annuel et changement des pneus",
      completed: false,
      priority: "high",
      dueDate: "2025-05-05",
      category: "véhicule",
      tags: ["voiture", "entretien", "révision"]
    },
    {
      id: 45,
      title: "Méditer 20 minutes",
      description: "Session de méditation matinale",
      completed: true,
      priority: "low",
      dueDate: "2025-04-22",
      category: "bien-être",
      tags: ["méditation", "détente", "routine"]
    },
    {
      id: 46,
      title: "Installer la mise à jour Windows",
      description: "Effectuer la mise à jour de sécurité",
      completed: false,
      priority: "medium",
      dueDate: "2025-04-23",
      category: "technique",
      tags: ["windows", "mise à jour", "sécurité"]
    },
    {
      id: 47,
      title: "Réserver les billets d'avion",
      description: "Acheter les billets pour le voyage d'août",
      completed: false,
      priority: "high",
      dueDate: "2025-05-10",
      category: "voyage",
      tags: ["billets", "avion", "réservation"]
    },
    {
      id: 48,
      title: "Créer une playlist pour la fête",
      description: "Sélectionner les morceaux pour samedi",
      completed: false,
      priority: "low",
      dueDate: "2025-04-26",
      category: "loisirs",
      tags: ["musique", "playlist", "fête"]
    },
    {
      id: 49,
      title: "Apprendre la nouvelle fonctionnalité React",
      description: "Suivre le tutoriel sur les hooks avancés",
      completed: false,
      priority: "medium",
      dueDate: "2025-05-01",
      category: "formation",
      tags: ["react", "développement", "apprentissage"]
    },
    {
      id: 50,
      title: "Terminer le projet client",
      description: "Livrer la version finale de l'application",
      completed: false,
      priority: "high",
      dueDate: "2025-04-30",
      category: "travail",
      tags: ["projet", "client", "deadline"]
    }
  ];
  
  export default todos;