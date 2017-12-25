export default {
  seo: {
    canonicalUrl: 'https://kruu.com',
    description:
      'EINFACH PLANEN, ENTSPANNT FEIERN. KRUU Premium-Dienstleistungen. Für mehr Spaß an Veranstaltungen zum fairen Preis.',
    keywords: 'fotobox, dj, fotograf, coktail-bar, mieten',
    noFollow: false,
    noIndex: false,
    title: 'KRUU – Premium-Event-Dienstleistungen zum fairen Preis'
  },
  components: [
    {
      type: 'FullWidthImage',
      src:
        'https://www.kruu-fotobox.com/assets/images/fotobox/kruu-fotobox-hero-private.jpg',
      alt: 'People using photo booth'
    },
    {
      type: 'Headline',
      text: 'New features arrived!'
    },
    {
      type: 'List',
      items: [
        'Social Sharing',
        'LED Flash',
        'Canon Selphy Printer',
        'Squirrels inside',
        'and many more...'
      ]
    },
    {
        type: 'Button',
        label: 'Rent a booth',
        showText: 'Congratulations, you just clicked a button!'
      }
  ]
};
