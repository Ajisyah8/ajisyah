//////////////////////////////////////// ** HEADER / HERO SECTION **///////////////////////////////////////////

// your_info.jsx

const backgroundImage = './src/assets/images/me.jpg';


// Enter here your first and last name
const name = {
  firstname: 'Permana Aji',
  lastname: 'Syahputra',
  url: 'https://drive.google.com/file/d/1t_od6Im4wigF7k0y00hQsGD26s2faR94/view?usp=sharing',
};

// Display your job title or skills or whatever you want in the typewriter
const typeWriterText = [
  'FullStack Developer...',
  'Front-end & Backend...',
  'Humble Person...'  
];

// Social media profiles buttons
const socialProfiles = [
  {
    name: 'LinkedIn',
    icon: 'lni lni-linkedin',
    url: 'https://www.linkedin.com/in/permana-aji-syahputra-698257274/',
  },
  {
    name: 'GitHub',
    icon: 'lni lni-github',
    url: 'https://github.com/Ajisyah8',
  },
  {
    name: 'Instagram',
    icon: 'lni lni-instagram',
    url: 'https://www.instagram.com/_ajisyah?igsh=NWVmenVhOTV4YXkw&utm_source=qr',
  }

];

//////////////////////////////////////// ** CONTENT SECTION **//////////////////////////////////////////////////


const categories = [
  {
    name: 'Front-end',
    icon: 'lni lni-code',
    title: 'Frot-end',
    description:
      "Pengalaman saya di frontend meliputi desain UI/UX, pengkodean HTML, CSS, dan JavaScript, serta menggunakan React dengan Vite dan PHP",
    skills: [
      {
        icon: 'lni lni-html5',
        title: 'HTML5',
      },
      {
        icon: 'lni lni-react',
        title: 'React',
      },
      {
        icon: 'lni lni-php',
        title: 'PHP',
      },
      {
        icon: 'lni lni-css3',
        title: 'CSS3 and TailwidCSS',
      }
    ],
  },
  {
    name: 'Back-end',
    icon: 'lni lni-code',
    title: 'Back-end',
    description:
    "Pengalaman saya di backend mencakup Node.js dan Express.js untuk API RESTful, fokus pada MySQL, keamanan, dan performa pada website.",
    skills: [
      {
        icon: 'lni lni-database',
        title: 'MySQL',
      },
      {
        icon: 'lni lni-nodejs',
        title: 'Nodejs',
      },
      {
        icon: 'lni lni-website',
        title: 'Domain'
      },
      {
        icon: 'lni lni-javascript',
        title: 'Javascript',
      }
     
      
    ],
  },
  {
    name: 'Software',
    icon: 'lni lni-code',
    title: 'Software',
    description:
    "Saya menggunakan Visual Studio Code untuk kode, Figma untuk desain UI/UX, GitHub untuk kode sumber, dan MySQL Workbench untuk basis data MySQL.",
    skills: [
      {
        icon: 'lni lni-code-alt',
        title: 'Visual Studio Code',
      },
      {
        icon: 'lni lni-figma',
        title: 'Figma',
      },
      {
        icon: 'lni lni-archive',
        title: 'Mysql Workbench',
      },
      {
        icon: 'lni lni-github',
        title: 'Github',
      }
      
    ],
  },
  
];


// If you already have some projects, fill the url 
const projectData = [
  {
    title: 'WorkMatch',
    description: 'WorkMatch for People to Work',
    demo: './src/assets/images/atas.png',
    githubUrl: 'https://github.com/Ajisyah8/Workmatch',
    gitUrl: 'https://workmatch-ten.vercel.app/' 
  },
  {
    title: 'KickGenius',
    description: 'KickGenius is here',
    demo: './src/assets/images/kickgenius.png',
    githubUrl: 'https://github.com/Ajisyah8/KickGenius',
    gitUrl: 'https://kick-genius.vercel.app/'
  },
  {
    title: 'Vehichle Detector',
    description: 'Just Vehichle Detector',
    demo: './src/assets/images/VehichleDetector.png',
    githubUrl: 'https://github.com/Ajisyah8/Vehichle-Detector',
    gitUrl: 'https://github.com/Ajisyah8/Vehichle-Detector' 
  },
];


//////////////////////////////////////// ** FOOTER SECTION **//////////////////////////////////////////////////



// You can tell something about yourself in the infotext.
const aboutMeText = {
  infotext: `I am majoring in Informatics Engineering at the Faculty of Engineering, specializing in Web Development. I have strong experience in communication and teamwork. In terms of development, I am highly skilled in using React JS and have a basic understanding of using TailwindCSS. Additionally, I also have expertise in backend development using Node.js and Express.js.
    `,
  power_slogan: `Air bersih tanda sehat`,
};


const emailConfig = {
  serviceID: 'service_XXXXXXX',
  templateID: 'template_XXXXXXXX',
  userID: 'XXXXXXXXXXXX',
};

export {
  backgroundImage,
  name,
  typeWriterText,
  socialProfiles,
  categories,
  projectData,
  aboutMeText,
  emailConfig,
};
