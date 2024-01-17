const products = [
  {
    id: 1,
    version: 'S5',
    name: 'S5 Dura-Ace Di2 ',
    model: 'Cervelo S5',
    description: 'V IS FOR VELOCITY',
    about:
      "In pursuit of speed, everyone wants to try different positions to find their most aggressive fit. The S5's iconic V-stem not only inspires confident handling at high speeds, it's now also remarkably simple to dial in your perfect set-up. All the necessary spacers come with the bike, and there’s now only one bolt length, reducing complexity and making the system 53g lighter in the process.",
    price: (13000.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58'],
    availablesizes: ['51', '54'],
    image:
      '/RoadBikes/S5-DuraAce-Di2-FiveBlk_c0b8d903-a1fb-4d30-bf9b-2cbe8e6e8d05.jpg',
    url: '/cervelo/2/S5Dura-ace-Di2', // Updated URL with product ID
  },
  {
    id: 2,
    version: 'R5',
    name: 'R5 Dura-Ace Di2',
    model: 'Cervelo R5',
    description: 'FASTER IN EVERY DIRECTION',
    about:
      'The new R5 frame is 130g lighter than the previous model—a 16% reduction from an already-light frame.  And while aerodynamics weren’t a focus with this frame the way they would be on an S5 or P5, bringing the cables inside reduced drag by 25g.',
    price: (13000.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58', '61'],
    availablesizes: ['51', '54'],
    image: '/RoadBikes/R5-DuraAce-Di2-FiveBlack.jpg',
    url: '/cervelo/1/R5Dura-Ace-Di2',
    // Updated URL with product ID
  },
  {
    id: 3,
    version: 'Soloist',
    name: 'Soloist Ultegra Di2',
    model: 'Cervelo Soloist',
    description: 'FAST LIKE S5, LIGHT LIKE R5',
    about:
      'Soloist sits right between S5 and R5 on the performance scale, while having a price tag that’s less World Tour, more Road Trip. It’s about 250g heavier than R5, and 250g lighter than S5. It’s 190g slower than S5, but 126g faster than R5. You get the idea. It’s the ‘just-right’ answer for the rider trying to find a smart, intentional compromise.',
    price: (6800.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58', '61'],
    availablesizes: ['51', '54'],
    image: '/RoadBikes/Soloist-Ult-di2-embers.jpg',
    url: '/cervelo/3/SoloistUltegra-Di2',
    // Updated URL with product ID
  },
  {
    id: 4,
    version: 'Caledonia-5',
    name: 'Caledonia-5 Ultegra Di2',
    model: 'Cervelo Caledonia 5',
    description: 'AERO CABLE MANAGEMENT',
    about:
      'The Cervélo frame, fork, handlebars, and associated components are designed to hide brake and shift control lines (mechanical, electrical, and hydraulic) from the wind for improved aerodynamics, without sacrificing usability or performance.',
    price: (8500.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58', '61'],
    availablesizes: ['51', '54'],
    image: '/RoadBikes/Caledonia-5-Ult-Di2-FiveBlack.jpg',
    url: '/cervelo/4/Caledonia5', // Updated URL with product ID
  },
  {
    id: 5,
    version: 'Caledonia',
    name: 'Caledonia 105 Di2',
    model: 'Cervelo Caledonia',
    description: 'A BIKE FOR THE WAY RIDERS RIDE',
    about:
      'Caledonia doesn’t fit in a box nicely, and we like it that way. It was conceived on our Thursday night rides—routes that often play fast and loose with ‘road ride.’ Modern road riders are looking for bikes to handle long-distance, high pace, no limits, and offer maximum fun—the Caledonia delivers performance, comfort, and speed. Oh, and you can fit a 34mm tire in there. Or 31mm with fenders.',
    price: (4700.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58', '61'],
    availablesizes: ['51', '54'],
    image: '/RoadBikes/Caledonia105.avif',
    url: '/cervelo/5/Caledonia', // Updated URL with product ID
  },
  // Add more products as needed
];

export default products;
