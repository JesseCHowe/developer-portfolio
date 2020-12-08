const projectData = {
  fallvibes: {
    title: "H&M Fall Vibes",
    desc:
      "Fall Vibes is a site for a fictional commission by H&M to make a microsite for their fall collection of clothing. This was also my featured project while participating in nucamp coding bootcamp. I wanted to experiment with text design, especially on each individual landing page for the clothing collections.",
    tools: [
      "React",
      "Redux",
      "Netlify",
      "Lambda Functions",
      "Styled Components",
      "Stripe API",
    ],
    images: [
      { src: "fallvibes-home.jpg", boxShadow: true },
      { src: "home-selection.jpg", boxShadow: true },
      { src: "single-item.jpg", boxShadow: true },
      { src: "fallvibes-mobile.jpg", boxShadow: false },
    ],
    site: "https://jovial-nobel-404c94.netlify.app/",
  },
  tripletriad: {
    title: "Triple Triad",
    desc:
      "This project was meant to practice state management without the assistance of redux. I wanted to track the state of the game on my own and trigger animations accordingly. This is also my first attempt at game design in javascript. This game is based off of the bare bones triple triad rules from Final Fantasy 8. I am very proud of getting the computer to determine moves and respond to the player.",
    tools: [
      "Vanilla Javascript",
      "Webpack",
      "D3.js",
      "GreenSock Animation Platform",
    ],
    images: [
      { src: "triad-selection.jpg", boxShadow: true },
      { src: "triad-game.jpg", boxShadow: true },
      { src: "triad-mobile.jpg", boxShadow: false },
    ],
    site: "https://loving-goldwasser-db6b6c.netlify.app/",
  },
  myjslibrary: {
    title: "My JS Library",
    desc:
      "This is my first React app. It uses class based components opposed to the functional components of modern React apps. This is also where I plan to showcase the books I have read to learn Javascript, although any user can create an account and choose their own color scheme.",
    tools: ["React", "Redux", "Firebase", "D3.js", "axios"],
    images: [
      { src: "myjs.gif", boxShadow: true },
      { src: "myjs-detail.png", boxShadow: true },
      { src: "myjs-mobile.jpg", boxShadow: false },
    ],
    site: "https://priceless-goodall-c1ed0b.netlify.app/",
  },
  elbowchocolates: {
    title: "Elbow Chocolates",
    desc:
      "This was my first project using React Hooks and the Paypal API, I wanted to learn how to securely handle payments and learn more about eCommerce development. This project also features a lot of custom css design. Both the bonbon box and chocolate bars are css generated rather than photos. This project also adds a feature not included on the real Christopher Elbow site, the ability to build your own bonbon box set.",
    tools: ["React", "Redux", "Firebase", "PayPal API", "Styled Components"],
    images: [
      { src: "bonbon-explore.jpg", boxShadow: true },
      { src: "chocolate-selection.jpg", boxShadow: true },
      { src: "bonbon-selection.jpg", boxShadow: true },
      { src: "elbow-mobile.jpg", boxShadow: false },
    ],
    site: "https://hopeful-pasteur-a03046.netlify.app/",
  },
  weathercomparison: {
    title: "Weather Comparison App",
    desc:
      "This was a project to practice programming with another person. I collaborated with a friend to build an app that allows you to compare different weather variables that you might care about when moving to a new city. I worked on the styling and data viz components of this project.",
    tools: ["React", "Redux", "D3.js"],
    images: [
      { src: "weather-compare-main.jpg", boxShadow: true },
      { src: "weather-compare-mobile.jpg", boxShadow: false },
    ],
    site: "https://zealous-panini-ea5fa5.netlify.app/",
  },
  topdisneymovies: {
    title: "Top Grossing Disney Movies",
    desc:
      "This visualization charts the success of Disney movies over the years. My main goal during this project was to improve my data sorting skills and creating a highly accessible visualization via color palette and contrast. ",
    tools: ["D3.js"],
    images: [
      { src: "disney-movies.jpg", boxShadow: false },
      { src: "disney-mobile.jpg", boxShadow: false },
    ],
    site: "https://jessechowe.github.io/Top-Grossing-Disney-Movies/",
  },
  senatorideology: {
    title: "Senator Ideology Index",
    desc:
      "This project charts where Senators fall on the ideological spectrum based on voteview’s metrics. Voteview allows users to view every congressional roll call vote in American history on a map of the United States and on a liberal-conservative ideological map including information about the ideological positions of voting Senators and Representatives. I worked on all aspects from design to coding.",
    tools: ["Vanilla Javascript", "D3.js"],
    images: [
      { src: "senator-index.jpg", boxShadow: false },
      { src: "senator-index-filter.jpg", boxShadow: false },
      { src: "senator-index-mobile.jpg", boxShadow: false },
    ],
    site: "https://jessechowe.github.io/senator-ideology-index/",
  },
  ayearatrisk: {
    title: "A Year At Risk",
    desc:
      "I’ve always really liked the grid chart design of the United States and sat on this chart for quite a while, keeping an eye out for data that would be a perfect fit, unfortunately it wouldn’t be until COVID-19 that I would find a use for this map, visualizing Harvard Global Health Institute’s data.",
    tools: ["Vanilla Javascript", "D3.js"],
    images: [
      { src: "covid-map-1.jpg", boxShadow: false },
      { src: "covid-map-2.jpg", boxShadow: false },
      { src: "covid-map-3.jpg", boxShadow: false },
    ],
    site: "https://jessechowe.github.io/a-year-at-risk/",
  },
  moosemakesthegrade: {
    title: "Moose Makes The Grade",
    desc:
      "This was originally a project I created for Kansas City PBS in 2017 as the city anticipated Mike Moustakas to break the Kansas City Royals team record for most homeruns in a season. When I originally built this project I didn’t have a strong grasp of D3.js at the time. I have since revisited this project and cleaned it up drastically, from code organization to mouseover effects.",
    tools: ["Vanilla Javascript", "D3.js"],
    images: [{ src: "moose.jpg", boxShadow: false }],
    site: "https://jessechowe.github.io/moose-makes-the-grade/",
  },
  peakingprogress: {
    title: "Peaking Progress",
    desc:
      "This was originally a job interview take home project for WRI, creating an interactive version of one of their blog posts. I was really proud of this 24 hour coding challenge and decided to pour more time into it afterward. This is my first ‘scrollytelling’ visualization and I’m excited to take on more of these scroll based animations in the future.",
    tools: [
      "Vanilla Javascript",
      "D3.js",
      "Scrollama",
      "Intersection Observer",
    ],
    images: [
      { src: "peaking-progress-1.jpg", boxShadow: false },
      { src: "peaking-progress-2.jpg", boxShadow: false },
      { src: "peaking-progress-3.jpg", boxShadow: false },
      { src: "peaking-progress-mobile.jpg", boxShadow: false },
    ],
    site: "https://jessechowe.github.io/peaking-progress/",
  },
  womeninstatelegislature: {
    title: "Women In State Legislature",
    desc:
      "This chart orders states by how many women have served on average since 1975. Though New Hampshire has had more women serve in legislature on average, women made up 42 percent of the legislature in Colorado during 2015. This chart challenged me to really take into account mobile versions. I worked on all aspects from design to coding.",
    tools: ["Vanilla Javascript", "D3.js"],
    images: [
      { src: "women-legislature.jpg", boxShadow: false },
      { src: "women-legislature-mobile.jpg", boxShadow: false },
    ],
    site: "https://jessechowe.github.io/women-in-state-legislature/",
  },
};

export default projectData;
