// Central player information and configuration

const basePath = import.meta.env.BASE_URL.endsWith('/') 
  ? import.meta.env.BASE_URL 
  : `${import.meta.env.BASE_URL}/`;

export const playerData = {
  fullName: "Amodu Abubakar Ogwu",
  displayName: "AMODU ABUBAKAR OGWU",
  shortName: "Amodu Ogwu",
  age: 20,
  nationality: "Nigerian",
  nationalityWithFlag: "Nigeria 🇳🇬",
  height: "1.71 m",
  weight: "65 kg",
  preferredFoot: "Both Feet",
  primaryPosition: "Central Midfielder",
  secondaryPositions: "Attacking Midfielder • Winger",
  allPositionsDisplay: "CENTRAL MIDFIELDER • ATTACKING MIDFIELDER • WINGER",
  currentClub: "Delight FA",
  joinedClub: "2022",
  joinedClubDisplay: "2022 to Present",
  availability: "Available for Trials",
  
  heroTagline: "NIGERIAN FOOTBALLER",
  heroBio: "A versatile, two-footed Nigerian midfielder bringing pace, composure, creativity, and technical quality to the game.",

  profileHeading: "THE PLAYER",
  profilePillars: "COMPOSURE • CREATIVITY • VERSATILITY",
  profileBioParagraphs: [
    "Amodu Abubakar Ogwu is a young Nigerian footballer with the versatility to operate across the midfield line and on the wing.",
    "A confident two-footed player, Amodu combines pace and acceleration with composure in possession. His ability to control the ball with either foot allows him to move comfortably through midfield, connect with teammates, and contribute creatively in attacking areas.",
    "He also offers quality from set pieces and can create scoring opportunities through intelligent passing and positive movement. Since joining Delight FA in 2022, Amodu has contributed an impressive 25 goals and 36 assists.",
    "Focused and determined, he is committed to developing his technical ability, tactical understanding, fitness, and overall performance. His ambition is to earn opportunities to train and compete at a higher level while continuing his journey towards professional football."
  ],

  // 4 confirmed statistics (NO appearances, NO joined date in stats)
  stats: [
    { id: "goals", label: "Goals", value: 25, suffix: "" },
    { id: "assists", label: "Assists", value: 36, suffix: "" },
    { id: "contributions", label: "Goal Contributions", value: 61, suffix: "" },
    { id: "awards", label: "Awards Won", value: 2, suffix: "" }
  ],
  statsSummary: "A productive and creative midfielder with 61 recorded goal contributions for Delight FA since joining the club in 2022.",

  // 6 Strengths
  strengths: [
    {
      num: "01",
      title: "Two-Footed Ability",
      description: "Comfortable receiving, controlling, passing, and striking the ball with either foot.",
      icon: "Footprints"
    },
    {
      num: "02",
      title: "Pace and Acceleration",
      description: "Uses his speed to carry the ball forward, move into attacking spaces, and support transitions.",
      icon: "Zap"
    },
    {
      num: "03",
      title: "Midfield Composure",
      description: "Remains calm in possession and helps his team maintain control through the midfield.",
      icon: "ShieldCheck"
    },
    {
      num: "04",
      title: "Creativity",
      description: "Creates scoring opportunities through passing, movement, vision, and intelligent decision-making.",
      icon: "Sparkles"
    },
    {
      num: "05",
      title: "Set-Piece Ability",
      description: "Provides attacking quality and delivery from free kicks, corners, and other dead-ball situations.",
      icon: "Target"
    },
    {
      num: "06",
      title: "Versatility",
      description: "Can operate in central midfield, attacking midfield, or from wide positions.",
      icon: "Layers"
    }
  ],
  strengthStatement: "CALM IN POSSESSION. CREATIVE IN ATTACK. DANGEROUS WITH BOTH FEET.",

  // Career
  career: [
    {
      club: "DELIGHT FA",
      period: "2022 to Present",
      role: "Midfielder • Winger",
      description: "Developing as a versatile midfielder and winger while contributing goals, assists, creativity, and energy to the team."
    }
  ],

  // Achievements
  achievements: [
    {
      title: "Tournament Winner",
      icon: "Trophy",
      tag: "Champions"
    },
    {
      title: "Goal-scoring Contributions in Competition",
      icon: "Goal",
      tag: "Top Contributor"
    },
    {
      title: "Outstanding / Dominant Tournament Performance",
      icon: "Star",
      tag: "Key Player"
    }
  ],

  // Gallery
  gallery: [
    {
      id: "hero",
      src: `${basePath}assets/amodu-hero.jpg`,
      alt: "Amodu Abubakar Ogwu wearing a red football kit at a stadium",
      title: "Matchday Focus",
      subtitle: "Stadium Pre-Match",
      category: "Matchday"
    },
    {
      id: "profile",
      src: `${basePath}assets/amodu-profile.jpg`,
      alt: "Portrait of Amodu Abubakar Ogwu",
      title: "Official Portrait",
      subtitle: "Player Headshot",
      category: "Portrait"
    },
    {
      id: "action-1",
      src: `${basePath}assets/amodu-action-01.jpg`,
      alt: "Amodu Abubakar Ogwu running during a football match",
      title: "In Motion (#17)",
      subtitle: "Competitive Match Action",
      category: "Match Action"
    },
    {
      id: "training-1",
      src: `${basePath}assets/amodu-training-01.jpg`,
      alt: "Amodu Abubakar Ogwu training on a football field",
      title: "Pitch Training",
      subtitle: "Conditioning & Ball Work",
      category: "Training"
    }
  ],

  // Highlights
  highlights: [
    {
      id: "dxMFEoaVXhw",
      title: "Match Highlights & Creative Play Reel",
      description: "Showcasing technical ball retention, two-footed passing, pace on transition, and key attacking phases.",
      url: "https://youtu.be/dxMFEoaVXhw",
      embedUrl: "https://www.youtube-nocookie.com/embed/dxMFEoaVXhw"
    },
    {
      id: "Rd3xQMPZAxs",
      title: "Skills, Goals & Set-Piece Contributions",
      description: "Highlighting vision, scoring instinct, dead-ball execution, and midfield leadership for Delight FA.",
      url: "https://youtu.be/Rd3xQMPZAxs",
      embedUrl: "https://www.youtube-nocookie.com/embed/Rd3xQMPZAxs"
    }
  ],

  // Career Dream
  dream: {
    heading: "“TO DEVELOP, COMPETE AT A HIGHER LEVEL, AND PLAY AT THE HIGHEST LEVEL.”",
    paragraphs: [
      "My ambition is to continue developing as a footballer and gain opportunities to train and compete at a higher level.",
      "I am committed to improving every part of my game and making the most of every opportunity that comes my way. I understand that progressing in football requires discipline, patience, hard work, and a willingness to keep learning.",
      "My dream is to take my football career as far as possible, make my family proud, and one day compete at the highest level."
    ]
  },

  // Player Direct Contact
  playerContact: {
    whatsappNumberDisplay: "+234 806 450 3457",
    phoneDisplay: "+234 806 450 3457",
    phoneLink: "tel:+2348064503457",
    whatsappLink: "https://wa.me/2348064503457?text=Hello%20Amodu%2C%20I%20am%20contacting%20you%20regarding%20a%20football%20opportunity.",
    email: "abumadridamodu@gmail.com",
    emailLink: "mailto:abumadridamodu@gmail.com",
    cvFile: `${basePath}assets/Amodu_Abubakar_Ogwu_Football_CV.pdf`,
    cvFilename: "Amodu_Abubakar_Ogwu_Football_CV.pdf"
  },

  // Manager / Coach Representative
  representative: {
    name: "Partrick Clinton Erutere",
    role: "Manager / Coach",
    region: "United Kingdom / International",
    phoneDisplay: "+44 7440 733165",
    phoneLink: "tel:+447440733165",
    whatsappLink: "https://wa.me/447440733165?text=Hello%20Mr.%20Erutere%2C%20I%20am%20contacting%20you%20regarding%20a%20football%20opportunity%20for%20Amodu%20Abubakar%20Ogwu.",
    email: "Clintonpartrick32@gmail.com",
    emailLink: "mailto:Clintonpartrick32@gmail.com"
  },

  attribution: {
    creator: "OtisCloud",
    url: "https://github.com/Engr-Otinomo"
  }
};
