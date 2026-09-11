const getAssetUrl = (path) => {
  return `${import.meta.env.BASE_URL}${path}`;
};

export const profile = {
  name: "RJ",
  githubHandle: "RJ-06",
  itchHandle: "lanzalot",
  github: "https://github.com/RJ-06",
  itch: "https://lanzalot.itch.io/",
  goodreads: "https://www.goodreads.com/user/show/188364003-rahul-j",
  linkedin: "https://www.linkedin.com/in/rahul-jogadhenu-3037b2203/",
  avatar: getAssetUrl("assets/lanzalot_logo.png"),
};

export const pinnedRepos = [
  {
    name: "Fiat-Ludum-2026",
    owner: "RJ-06",
    url: "https://github.com/RJ-06/Fiat-Ludum-2026",
    language: "C#",
    blurb:
      "Unity project made for UCLA Fiat Ludum 2026 where it won Best Gameplay — To the Ends of the Earth.",
  },
  {
    name: "ai-tour-guide-cs35l-project",
    owner: "JCVillanova",
    url: "https://github.com/JCVillanova/ai-tour-guide-cs35l-project",
    language: "TypeScript",
    blurb: "CS35L project",
  },
  {
    name: "CouchPotatoes",
    owner: "RJ-06",
    url: "https://github.com/RJ-06/CouchPotatoes",
    language: "C#",
    blurb:
      "Student Run Studios local multiplayer — coleads Josh and Rahul.",
  },
  {
    name: "VerilogBreakout",
    owner: "Heborine",
    url: "https://github.com/Heborine/VerilogBreakout",
    language: "Verilog",
    blurb: "FPGA Breakout implemented in Verilog.",
  },
];

export const softwareProjects = [
  {
    title: "Cross Movement Disorders Lab",
    tags: ["Unity", "Unreal Engine", "VR", "C#"],
    repo: "private repository",
    description:
      " Unity and Unreal Engine based VR simulations used for clinical studies on freezingof gait in Parkinson’s disease patients, controlled testing and data collection."
  },
  {
    title: "Amblr — CS35L",
    tags: ["TypeScript", "React Native", "Expo", "Gemini", "Google Maps"],
    repo: "https://github.com/JCVillanova/ai-tour-guide-cs35l-project",
    extraLinks: [
      {
        label: "Presentation / demo",
        href: "https://docs.google.com/presentation/d/1l7gn0csWJ4jAGzpuT3A7S7yaNt5S-Y4JP0AOrlOCV8Y/edit?usp=sharing",
      },
    ],
    description:
      "UCLA CS35L group project. Amblr is a mobile tour-guide app that pairs Gemini with the Google Maps API: search a destination, generate a walking route, and hear descriptions of places along the way. Explore mode talks about nearby spots from your current location, and lets you plan a trip around nearby areas. Our account system allows users to view their favorite locations and routes, and keep them saved to look at later.",
  },
  {
    title: "Verilog Breakout",
    tags: ["Verilog", "FPGA"],
    repo: "https://github.com/Heborine/VerilogBreakout",
    extraLinks: [
      {
        label: "Video demo",
        href: "https://drive.google.com/file/d/1VDZtaPM24wZ9t85p9xrQ-Y1U0E3wx9Ud/view?usp=sharing",
      },
    ],
    description:
      "Hardware implementation of Breakout in Verilog, targeting a Basys 3 FPGA board (VGA output and seven-segment display). All game logic, including rendering, physics, and clock synchronization was made by us.",
  },
];

export const itchGames = [
    {
    title: "To the Ends of the Earth",
    embedId: "4474699",
    url: "https://vlad-the-inhaler.itch.io/to-the-ends-of-the-earth",
    extraLinks: [
      {
        label: "GitHub repo",
        href: "https://github.com/RJ-06/Fiat-Ludum-2026"
      },
    ],
    role: "Programming",
    description:
      "Made for Fiat Ludum 2026, where it won Best Gameplay!. Recruit, raid, and sail in this overcooked inspired 3d pirate ship game to prove the earth is flat.",
  },
  
  {
    title: "SSH: a game about securing shells",
    embedId: "4881940",
    url: "https://candidaries.itch.io/ssh-a-game-about-securing-shells",
    extraLinks: [
      {
        label: "GitHub repo",
        href: "https://github.com/Destroh33/ClubClubJamJam"
      },
    ],
    role: "Programming",
    description:
      "Made for the Club Club Jam Jam, SSH is a coding-based Sokoban puzzle about housing hermit crabs. Write code to give the different crabs different instructions, and upload different code to different crabs!.",
  },
  {
    title: "Couch Potatoes",
    embedId: "4553410",
    url: "https://justanothermusician7.itch.io/couch-potatoes",
    extraLinks: [
      {
        label: "GitHub repo",
        href: "https://github.com/RJ-06/CouchPotatoes"
      },
    ],
    role: "Co-lead",
    description:
      "Made for ACM Studio Student Run Studios 2024-2025. Local multiplayer couch vs. game of hot potato. Play across multiple stages and use multiple powerups to be the last one standing!",
  },
  {
    title: "Cloudy Critters",
    embedId: "",
    image: getAssetUrl("assets/Cloudy_Critters_Logo_Pink.png"),
    url: "",
    extraLinks: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/uclaacmstudioblack/"
      },
    ],
    role: "Game Director, Programming",
    description:
      "Made by ACM Studios: Studio Black Belts, Releasing on Steam on Dec. 31, 2026. Cloudy Critters is a roguelike deckbuilder zoobuilder, where you build a zoo filled with different animal exhibits that synergize together to score points. Build an incredible zoo in this balatro inspired citybuilder!",
  },
];

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/resume", label: "Resume" },
  { to: "/games", label: "Game Dev" },
  { to: "/software", label: "Software" },
  // { to: "/other", label: "Other" },
];
