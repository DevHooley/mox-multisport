const products = [
  {
    id: 1,
    version: 'Dogma F',
    name: 'Dogma F Dura-ace Di2',
    model: 'Dura-ace di2',
    color: 'Speedsteer Black on Black ',
    description: 'THE ARE OF BALANCE',
    about:
      'Seven of the last 11 Tours de France have been conquered on a DOGMA, and the latest generation is now ready to continue that legacy of success. This is the culmination of all of our skill and experience, a masterpiece of engineering that offers advancements in handling, comfort, and aerodynamics all wrapped in a package that can climb, descend, and sprint with equal flair. Whatever the road throws at you, the DOGMA F is always the right bike.',
    price: (13000.0).toLocaleString(),
    sizes: [
      '43',
      '46.5',
      '50',
      '51.5',
      '53',
      '54',
      '55',
      '56',
      '57.5',
      '59.5',
      '62',
    ],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/dogma-1f-white-dura-ace.png',
    url: '/pinarello/bikes/road/dogma-f/dogma-f0/',

    // Updated URL with product ID
  },
  {
    id: 2,
    version: 'Pinarello F9',
    name: 'Pinarello F9 Dura-ace di2',
    model: ' Dura-ace di2',
    color: 'Fastest Green',
    description: 'BORN TO RACE, NO DISCUSSION',
    about:
      'Our history is one of extraordinary victories, iconic bicycles, passion, and expertise. The new Pinarello F was born with this unique DNA, created to offer extremely high performance and guide you straight to victory. All true riders know that what goes up, must go down. For this reason, the Pinarello F is designed to excel on all terrain and is as adept at climbing as it is comfortable on a high-speed descent. This is what we mean by ALL-ROUND PERFORMANCE.',
    price: (13000.0).toLocaleString(),
    sizes: ['43', '46.5', '50', '51.5', '53', '54.5', '56', '57.5', '59.5'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-f9-black:green:dura-ace.png',
    url: '/pinarello/bikes/road/dogma-f/pinarello-f9',
    // Updated URL with product ID
  },
  {
    id: 3,
    version: 'Pinarello F7',
    name: 'Pinarello F7 Ultegra di2',
    model: ' Ultegra di2',
    color: 'Furious Blue',
    description: 'BORN TO RACE, NO DISCUSSION',
    about:
      'Our history is one of extraordinary victories, iconic bicycles, passion, and expertise. The new Pinarello F was born with this unique DNA, created to offer extremely high performance and guide you straight to victory. All true riders know that what goes up, must go down. For this reason, the Pinarello F is designed to excel on all terrain and is as adept at climbing as it is comfortable on a high-speed descent. This is what we mean by ALL-ROUND PERFORMANCE.',
    price: (13000.0).toLocaleString(),
    sizes: ['43', '46.5', '50', '51.5', '53', '54.5', '56', '57.5', '59.5'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-f7-black-ultregra.png',
    url: '/pinarello/bikes/road/dogma-f/pinarello-f7',
    // Updated URL with product ID
  },
  {
    id: 4,
    version: 'Pinarello F5',
    name: 'Pinarello F5 105 di2',
    model: ' 105 di2',
    color: 'Furious white',
    description: 'BORN TO RACE, NO DISCUSSION',
    about:
      'Our history is one of extraordinary victories, iconic bicycles, passion, and expertise. The new Pinarello F was born with this unique DNA, created to offer extremely high performance and guide you straight to victory. All true riders know that what goes up, must go down. For this reason, the Pinarello F is designed to excel on all terrain and is as adept at climbing as it is comfortable on a high-speed descent. This is what we mean by ALL-ROUND PERFORMANCE.',
    price: (13000.0).toLocaleString(),
    sizes: ['43', '46.5', '50', '51.5', '53', '54.5', '56', '57.5', '59.5'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-f5-white-105png.png',
    url: '/pinarello/bikes/road/dogma-f/pinarello-f5',
    // Updated URL with product ID
  },
  {
    id: 5,
    version: 'Dogma X',
    name: 'Dogma X Dura-ace di2',
    model: ' Dura-ace di2',
    color: 'Furious black',
    description: 'PURE CYCLING MULTIPLIED BY X',
    about:
      'Inspired by riders who enjoy long days in the saddle, the DOGMA X is about more than just performance; the bike has been engineered from the ground up to heighten the emotional experience of cycling and reshape how we think about endurance and speed. It will redefine how we think about performance, offering real-world comfort.',
    price: (13000.0).toLocaleString(),
    sizes: ['43', '46.5', '50', '51.5', '53', '54.5', '56', '57.5', '59.5'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/dogma-x0-black-dura-ace.png',
    url: '/pinarello/bikes/road/dogma-x/dogma-x0',
    // Updated URL with product ID
  },
  {
    id: 6,
    version: 'Pinarello X9',
    name: 'Pinarello X9 Dura-ace di2',
    model: ' Dura-ace di2',
    color: 'Xpeed Gold',
    description: 'X MARKS THE SPOT WHERE CYCLING MEETS EMOTION',
    about:
      'These bikes have been specifically designed to maximise rider comfort and vibration absorption, thanks to the innovative use of carbon fiber layup and a redesigned rear triangle.',
    price: (13000.0).toLocaleString(),
    sizes: ['43', '46', '49', '51.5', '53', '54.5', '56', '58 ', '60'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-x9-black:green-dura-ace.png',
    url: '/pinarello/bikes/road/dogma-x/pinarello-x9',
    // Updated URL with product ID
  },
  {
    id: 7,
    version: 'Pinarello X7',
    name: 'Pinarello X7 Ultegra di2',
    model: ' Ultegra di2',
    color: 'XPEED BLUE',
    description: 'X MARKS THE SPOT WHERE CYCLING MEETS EMOTION',
    about:
      'These bikes have been specifically designed to maximise rider comfort and vibration absorption, thanks to the innovative use of carbon fiber layup and a redesigned rear triangle.',
    price: (13000.0).toLocaleString(),
    sizes: ['43', '46', '49', '51.5', '53', '54.5', '56', '58 ', '60'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-x7-black:blue-ultegra.png',
    url: '/pinarello/bikes/road/dogma-x/pinarello-x7',
    // Updated URL with product ID
  },
  {
    id: 8,
    version: 'Pinarello X5',
    name: 'Pinarello X5 105 di2',
    model: ' 105 di2',
    color: 'Xolo White',
    description: 'X MARKS THE SPOT WHERE CYCLING MEETS EMOTION',
    about:
      'These bikes have been specifically designed to maximise rider comfort and vibration absorption, thanks to the innovative use of carbon fiber layup and a redesigned rear triangle.',
    price: (13000.0).toLocaleString(),
    sizes: ['43', '46', '49', '51.5', '53', '54.5', '56', '58 ', '60'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-x5-white:black-105.png',
    url: '/pinarello/bikes/road/dogma-x/pinarello-x5',
    // Updated URL with product ID
  },
  {
    id: 9,
    version: 'Pinarello X1',
    name: 'Pinarello X1 105',
    model: ' 105',
    color: 'Pearl White',
    description: 'TRUE CYCLING EXPERIENCE',
    about:
      'Not every cyclist wants to push their body to the extreme, trying to fit on a bike that was designed for the pro peloton, so we went back to the drawing board for the Pinarello X and designed a new geometry that offers all-day comfort without renouncing our legendary performance DNA. Thanks to a combination of specifically-selected materials, unique geometry, and a truly innovative rear-end, the Pinarello X strikes the perfect balance between reactivity, performance and comfort.',
    price: (13000.0).toLocaleString(),
    sizes: ['43', '46', '49', '51.5', '53', '54.5', '56', '58 ', '60'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-x1-white-105.png',
    url: '/pinarello/bikes/road/dogma-x/pinarello-x1',
    // Updated URL with product ID
  },

  // Add more products as needed
];

export default products;
