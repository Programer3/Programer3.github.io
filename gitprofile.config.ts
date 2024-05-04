// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Programer3', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'Programer3/Mountain_bike_HD',
          'Programer3/ERP_django',
          'Programer3/Bmi_finder',
          'Programer3/MyHud',
          'Programer3/CODSOFT',
          'Programer3/Shadertoy_shaders',
          'Programer3/web_scraper',
          'Programer3/todo',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Aman Gupta',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'agprogramer3',
    twitter: 'AmanGblue',
    mastodon: '',
    researchGate: '',
    kaggle: 'ammugg',
    facebook: '',
    instagram: 'amangpt666',
    reddit: 'notabotboi',
    threads: '',
    pinterest: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    freecodecamp: 'Ammug',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: 'https://stackoverflow.com/users/13946047/programer3', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://programer3.github.io/',
    phone: '',
    email: '4programmimg@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/Programer3/ag-resume/blob/a737c260210591119c2d7b80fc675219733a2d3e/Resume-Aman-Gupta-5.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'JavaScript',
    'Flutter',
    'gd-Script',
    'Supabase',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Python',
    'CSS',
    'Blender',
    'Adobe Creative Cloud',
    'Figma',
    'linux',
    'CLI',
    'Bash',
    'Dart',
    'React',
    'Node-js',
  ],
  experiences: [
    {
      company: 'CODSOFT Pvt. Ltd.',
      position: 'Data Science Intern',
      from: 'April 2024',
      to: 'Present',
      companyLink: 'https://codsoft.in/',
    },
    {
      company: 'Open Source',
      position: 'Indie Developer',
      from: 'July 2019',
      to: 'Present',
      companyLink: 'https://github.com',
    },
  ],
  certifications: [
    {
      name: 'Udemy Certification',
      body: '3D Animation with Autodesk Maya',
      year: 'October 2017',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-B9KBR5JL.jpg?v=1506929107000',
    },
  ],
  educations: [
    {
      institution: 'Management Education Research Institute (MERI), New Delhi',
      degree:
        'Bac helor of Technology (B.Tech) - Computer Science and Engineering',
      from: '2021',
      to: '2025',
    },
    {
      institution:
        'Harcourt Butler Senior Secondary School Mandir Marg New Delhi',
      degree: 'High School with PCMCS',
      from: '2018',
      to: '2020',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-G8KS9H7K45', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#219aaf',
      secondary: '#A600FF',
      accent: '#e8d03a',
      neutral: '#1E1E1E',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a class="text-primary" href="https://www.linkedin.com/in/agprogramer3/" target="_blank"
  rel="noreferrer" >Aman Gupta</a> using <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
