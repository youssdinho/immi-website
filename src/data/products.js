const transparentImages = [
  '/images/coffret-abs-transparent/img1.jpg',
  '/images/coffret-abs-transparent/img2.jpg',
  '/images/coffret-abs-transparent/img3.jpg',
]

const defaultImages = [
  '/images/coffret-abs-opaque/img1.jpg',
  '/images/coffret-abs-opaque/img2.jpg',
  '/images/coffret-abs-opaque/img3.jpg',
  '/images/coffret-abs-opaque/img4.jpg',
  '/images/coffret-abs-opaque/img5.jpg',
  '/images/coffret-abs-opaque/img6.jpg',
]

const defaultDesc =
  'Coffret en ABS avec Platine perforée en plastique. Etanche (IP65) et résistant aux chocs. Idéal pour les installations électriques industrielles et tertiaires.'

function coffretTransparent(dims) {
  const [w, h, d] = dims.split('x')
  const label = `${w} x ${h} x ${d} mm`
  return {
    id: `coffret-abs-transparent-${dims}`,
    name: `Coffret ABS Transparent ${dims}`,
    dimensions: label,
    description:
      'Coffret en ABS transparent avec Platine perforée en plastique. Etanche (IP65) et résistant aux chocs. Couvercle transparent permettant la visualisation du contenu sans ouverture.',
    thumbnail: transparentImages[0],
    images: transparentImages,
    specs: [
      { label: 'Marque', value: 'IMMI' },
      { label: 'Dimensions', value: label },
      { label: 'Couleur', value: 'Gris / Transparent' },
      { label: 'Matière', value: 'ABS' },
      { label: 'Indice de protection', value: 'IP65' },
      { label: 'Platine', value: 'Plastique perforée' },
    ],
  }
}

function coffret(dims) {
  const [w, h, d] = dims.split('x')
  const label = `${w} x ${h} x ${d} mm`
  return {
    id: `coffret-abs-opaque-${dims}`,
    name: `Coffret ABS Opaque ${dims}`,
    dimensions: label,
    description: defaultDesc,
    thumbnail: defaultImages[0],
    images: defaultImages,
    specs: [
      { label: 'Marque', value: 'IMMI' },
      { label: 'Dimensions', value: label },
      { label: 'Couleur', value: 'Gris' },
      { label: 'Matière', value: 'ABS' },
      { label: 'Indice de protection', value: 'IP65' },
      { label: 'Platine', value: 'Plastique perforée' },
    ],
  }
}

export const catalog = {
  'coffret-abs-opaque': {
    categoryName: 'Coffret ABS Opaque',
    items: [
      '300x200x130',
      '350x250x150',
      '400x300x170',
      '400x300x220',
      '500x400x180',
      '500x400x240',
      '500x350x190',
      '600x500x220',
      '700x500x250',
      '800x600x260',
    ].map(coffret),
  },
  'plinthe': {
    categoryName: 'Plinthe',
    items: [
      '20x10 Autocollant',
      '25x16 Autocollant',
      '40x16 Autocollant',
      '40x40 Autocollant',
      '60x40 Autocollant',
    ].map((dims) => ({
      id: `plinthe-${dims.replace(/\s+/g, '-').toLowerCase()}`,
      name: `Plinthe ${dims}`,
      dimensions: dims,
      description:
        'Plinthe en PVC avec bande autocollante pour une fixation rapide et sans perçage. Idéal pour le passage de câbles en apparent. Résistant et facile à installer.',
      thumbnail: '/images/plinthe/img1.jpg',
      images: ['/images/plinthe/img1.jpg'],
      specs: [
        { label: 'Marque', value: 'IMMI' },
        { label: 'Dimensions', value: dims },
        { label: 'Couleur', value: 'Blanc' },
        { label: 'Matière', value: 'PVC' },
        { label: 'Fixation', value: 'Autocollant' },
        { label: 'Longueur', value: '2 m' },
      ],
    })).concat(['80x40', '100x40'].map((dims) => ({
      id: `plinthe-${dims}`,
      name: `Plinthe ${dims}`,
      dimensions: dims,
      description:
        'Plinthe en PVC fixation par vis. Grande capacité de câblage, idéal pour les installations nécessitant un passage de câbles important. Résistant et facile à installer.',
      thumbnail: '/images/plinthe/img2.jpg',
      images: [
        '/images/plinthe/img2.jpg',
        '/images/plinthe/img3.jpg',
        '/images/plinthe/img4.jpg',
      ],
      specs: [
        { label: 'Marque', value: 'IMMI' },
        { label: 'Dimensions', value: dims },
        { label: 'Couleur', value: 'Blanc' },
        { label: 'Matière', value: 'PVC' },
        { label: 'Fixation', value: 'Par vis' },
        { label: 'Longueur', value: '2 m' },
      ],
    }))),
  },
  'goulotte': {
    categoryName: 'Goulotte',
    items: ['25x25', '25x40', '40x40', '40x60', '60x40', '60x60', '80x60', '80x80'].map((dims) => ({
      id: `goulotte-${dims}`,
      name: `Goulotte ${dims}`,
      dimensions: dims,
      description:
        'Goulotte de câblage en PVC avec couvercle clipsable. Idéale pour le rangement et la protection des câbles dans les armoires électriques et installations industrielles.',
      thumbnail: '/images/goulotte/img1.jpg',
      images: [
        '/images/goulotte/img1.jpg',
        '/images/goulotte/img2.jpg',
        '/images/goulotte/img3.jpg',
      ],
      specs: [
        { label: 'Marque', value: 'IMMI' },
        { label: 'Dimensions', value: dims + ' mm' },
        { label: 'Couleur', value: 'Gris' },
        { label: 'Matière', value: 'PVC' },
        { label: 'Longueur', value: '2 m' },
      ],
    })).concat(['40x40', '40x60'].map((dims) => ({
      id: `goulotte-${dims}-autocollant`,
      name: `Goulotte ${dims} Autocollant`,
      dimensions: dims,
      description:
        'Goulotte de câblage en PVC avec couvercle clipsable et bande autocollante intégrée. Fixation rapide sans perçage, idéale pour les installations sur surfaces lisses.',
      thumbnail: '/images/goulotte/img1.jpg',
      images: [
        '/images/goulotte/img1.jpg',
        '/images/goulotte/img2.jpg',
        '/images/goulotte/img3.jpg',
      ],
      specs: [
        { label: 'Marque', value: 'IMMI' },
        { label: 'Dimensions', value: dims + ' mm' },
        { label: 'Couleur', value: 'Gris' },
        { label: 'Matière', value: 'PVC' },
        { label: 'Fixation', value: 'Autocollant' },
        { label: 'Longueur', value: '2 m' },
      ],
    }))),
  },
  'coffret-abs-transparent': {
    categoryName: 'Coffret ABS Transparent',
    items: [
      '300x200x130',
      '250x350x150',
      '400x300x170',
      '500x400x240',
      '700x500x250',
    ].map(coffretTransparent),
  },
}
