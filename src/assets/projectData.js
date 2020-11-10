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
      "This was a project to practice pair programming. I collaborated with a friend to build an app that allows you to compare different weather variables that you might care about when moving to a new city. I worked on the styling and data viz components of this project.",
    tools: ["React", "Redux", "D3.js"],
    images: [
      { src: "weather-compare-main.jpg", boxShadow: true },
      { src: "weather-compare-mobile.jpg", boxShadow: false },
    ],
    site: "https://zealous-panini-ea5fa5.netlify.app/",
  },
};

export default projectData;
