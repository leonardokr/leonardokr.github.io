module.exports = {
  siteTitle: 'Leonardo Klein',
  siteDescription: 'Leonardo Klein is a Developer, based in Brasil, who loves create new things.',
  siteKeywords:
    'Leonardo Klein, Leonardo, Klein, leonardokr, software engineer, developer, python, java, php, aws',
  siteUrl: 'https://leonardokr.github.io/',
  siteLanguage: 'en_US',
  googleVerification: '',
  email: 'leo@ziondev.us',
  github: 'https://github.com/leonardokr',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/leonardokr',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/leonardokr/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
