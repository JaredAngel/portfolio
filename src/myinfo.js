/* eslint-disable import/no-anonymous-default-export */
// Images
import ProfilePic from "./images/ProfilePic.jpg"
import Spanish from "./images/Spanish.png"
import Voyager from "./images/Voyager.jpg"
import Petful from "./images/Petful.png"
import Cartly from './images/Cartly-screenshot.jpg'
// Skills Icons
import htmlIcon from "./images/htmlIcon.png"
import cssIcon from "./images/cssIcon.png"
import reactIcon from "./images/reactIcon.png"
import jsIcon from "./images/jsIcon.png"
import codeIcon from "./images/code.png"
import chaiIcon from "./images/chaiIcon.png"
import herokuIcon from "./images/herokuIcon.png"
import jqIcon from "./images/jqIcon.png"
import mochaIcon from "./images/mochaIcon.png"
import nodeIcon from "./images/nodeIcon.png"
import pgIcon from "./images/pgIcon.png"
import designIcon from "./images/designIcon.png"

// Social Icon
import linkedInIcon from "./images/linkedInIcon.png"
import githubIcon from "./images/github.png"
import codepenIcon from "./images/codepen.png"


export default {

  //   Header Details ---------------------
  name: "Jared Angel Escobedo",
  headerTagline: [
    //Line 1 For Header
    "Creating innovative",
    //Line 2 For Header
    "products, designs,",
    //Line 3 For Header
    "and user experiences",
  ],

  headerParagraph:
    "Full-Stack Software Developer from Austin, Texas.",

 
  contactEmail: "jared.aescobedo@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, 
      title: "Cartly",
      para:
        "Cartly allows you to log your favorite recipes in your own private journal. Making it easier to keep a list of all required ingredients handy for grocery shopping!",
      imageSrc:
        Cartly,
      url: "https://cart-client.vercel.app/",
      github: "https://github.com/JaredAngel/cartly-client",
      tech: ["React, HTML, CSS, JavaScript, NodeJS, Express, Mocha, Chai, AJAX, Heroku, Vercel"]
    },
    {
      id: 2, 
      title: "Spanish Repetition Service",
      para:
        "This app lets a registered user learn Spanish using spaced repetition. The user can track and see their progress on a personalized dashboard. I created this application to experience more of my own culture.",
      imageSrc: Spanish,
      url: "https://spaced-repetition-client-delta.vercel.app/",
      github: "https://github.com/JaredAngel/spaced-repetition-client",
      tech: ["HTML, CSS, JavaScript, NodeJS, React, Express, Mocha, Chai, AJAX, Heroku, Vercel, Cypress, Algorithms, Data Structures"]
    },
    {
      id: 3,
      title: "Voyager",
      para:
        "Voyager acts as a centralized travel journal for places that you have been, plan to go, and love sharing with your family and friends. Create high-level travel trips and outfit them with every activity you can think of. From every Voyage down to each of their Activities you'll have the option to categorize, organize, and digitize.",
      imageSrc: Voyager,
      url: "https://voyager-iota.vercel.app/",
      github: "https://github.com/JaredAngel/voyager-app",
      tech: ["HTML, CSS, JavaScript, NodeJS, React, Express, Mocha, Chai, AJAX, Heroku, Vercel"]
    },
    {
      id: 4, 
      title: "Petful", 
      para:
        "This is pet adoption app that matches a user to a pet on a first in first out basis. Users can see other adopters do the same.",
      imageSrc:
        Petful,
      url: "https://petful-client-cyan-six.vercel.app/",
      github: "https://github.com/JaredAngel/petful-client",
      tech: ["HTML, CSS, JavaScript, NodeJS, React, Express, Mocha, Vercel, Algorithms, Data Structures"]
    },

    /*
    To Add More Projects (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: '',
        github: '',
        tech: []
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hello and thank you for visiting my portfolio! My name is Jared Angel. I am a Fullstack Software Developer from Austin, Texas, and a graduate of the Fullstack Web Development Program at Thinkful.",
  aboutParaTwo:
    "I am interested in knowing the 'why' behind logical decision making and not afraid to admit mistakes or don't know something. Instead, I welcome it and view it as an opportunity to learn and grow.",
  aboutParaThree:
    "I am transitioning from the lead generation and analytics industry, where I was a Marketing Data Analyst for Modernize Home Improvement (Austin, TX). These industries and past roles promote and require constant learning, a desire to work in collaborative team environments, and innovation. I strive to maintain the same caliber of commitment and dedication as I continue my journey as a Software Developer.",
  aboutParaFour:
    "Life also happens outside a screen! Outside of work, I enjoy rock climbing, hiking, playing video games, and riding motorcycles across the country.",
    aboutImage: ProfilePic,
  
  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon
    },
    {
      id: 2,
      img: jsIcon
    },
    {
      id: 3,
      img: cssIcon
    },
    {
      id: 4,
      img: reactIcon
    },
    {
      id: 5,
      img: codeIcon
    },
    {
      id: 6,
      img: nodeIcon
    },
    {
      id: 7,
      img: jqIcon
    },
    {
      id: 8,
      img: herokuIcon
    },
    {
      id: 9,
      img: pgIcon
    },
    {
      id: 10,
      img: mochaIcon
    },
    {
      id: 11,
      img: designIcon
    },
    {
      id: 12,
      img: chaiIcon
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    
    { img: githubIcon, url: "https://github.com/JaredAngel" },
    {
      img: linkedInIcon,
      url: "https://www.linkedin.com/in/jaredangelescobedo/",
    },
    {
      img: codepenIcon,
      url: "https://codepen.io/jaredangel",
    },
  ],

  // End Contact Section ---------------
}