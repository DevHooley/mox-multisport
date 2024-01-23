const products = [
  {
    id: 1, // Swapped id from 1 to 2
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
    url: '/cervelo/2/S5Dura-ace-Di2',
    // Updated URL with product ID
  },
  {
    id: 2, // Swapped id from 2 to 1
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
  {
    id: 6,
    version: 'P5',
    name: 'P5 Dura-ace Di2',
    model: 'Dura-ace di2',
    color: 'Black ',
    description: 'LESS DRAG, MORE SPEED',
    about:
      'Aerodynamics are critical to engineering a fast bike: aero drag accounts for as much as 90% of the overall resistance affecting a rider. The P5’s frame design and customized tube shapes improve its aerodynamics while enhancing its stiffness, weight, and usability - all in a UCI-legal package.',
    price: (13000.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58'],
    availablesizes: ['53'],
    image: '/cervelo-triathlon/p5-gray-dura-ace.webp',
    url: '/triathlon//p5/p5-dura-ace',

    // Updated URL with product ID
  },
  {
    id: 7,
    version: 'P5',
    name: 'P5 Ultegra Di2',
    model: 'Ultegra di2',
    color: 'Black ',
    description: 'LESS DRAG, MORE SPEED',
    about:
      'Aerodynamics are critical to engineering a fast bike: aero drag accounts for as much as 90% of the overall resistance affecting a rider. The P5’s frame design and customized tube shapes improve its aerodynamics while enhancing its stiffness, weight, and usability - all in a UCI-legal package.',
    price: (9000.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58'],
    availablesizes: ['53'],
    image: '/cervelo-triathlon/p5-gray-ultegra-di2.webp',
    url: '/triathlon/p5/p5-ultegra-di2',

    // Updated URL with product ID
  },
  {
    id: 8,
    version: 'P5',
    name: 'Frameset',
    model: 'Frameset',
    color: 'Black ',
    description: 'LESS DRAG, MORE SPEED',
    about:
      'Aerodynamics are critical to engineering a fast bike: aero drag accounts for as much as 90% of the overall resistance affecting a rider. The P5’s frame design and customized tube shapes improve its aerodynamics while enhancing its stiffness, weight, and usability - all in a UCI-legal package.',
    price: (6000.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58'],
    availablesizes: ['53'],
    image: '/cervelo-triathlon/p5-framset.webp',
    url: '/triathlon/p5/frameset',

    // Updated URL with product ID
  },
  {
    id: 9,
    version: 'P-Series',
    name: 'P-Series Ultegra Di2',
    model: 'Ultegra Di2',
    color: ' ',
    description: 'LESS DRAG, MORE SPEED',
    about:
      'Aerodynamics are critical to engineering a fast bike: aero drag accounts for as much as 90% of the overall resistance affecting a rider. The P5’s frame design and customized tube shapes improve its aerodynamics while enhancing its stiffness, weight, and usability - all in a UCI-legal package.',
    price: (6800.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58', '61'],
    availablesizes: ['53'],
    image: '/cervelo-triathlon/p-series-blue-ultegra-di2.webp',
    url: '/triathlon/p-series/p-series-ultegra-di2',

    // Updated URL with product ID
  },
  {
    id: 10,
    version: 'P-Series',
    name: 'P-Series Ultegra',
    model: 'Ultegra',
    color: ' ',
    description: 'LESS DRAG, MORE SPEED',
    about:
      'Aerodynamics are critical to engineering a fast bike: aero drag accounts for as much as 90% of the overall resistance affecting a rider. The P5’s frame design and customized tube shapes improve its aerodynamics while enhancing its stiffness, weight, and usability - all in a UCI-legal package.',
    price: (4400.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58', '61'],
    availablesizes: ['53'],
    image: '/cervelo-triathlon/p-series-gray-ultegra.webp',
    url: '/triathlon/p-series/p-series-ultegra',

    // Updated URL with product ID
  },
  {
    id: 11,
    version: 'P-Series Race',
    name: 'P-Series Race 105',
    model: '105',
    color: ' ',
    description: 'LESS DRAG, MORE SPEED',
    about:
      'Aerodynamics are critical to engineering a fast bike: aero drag accounts for as much as 90% of the overall resistance affecting a rider. The P5’s frame design and customized tube shapes improve its aerodynamics while enhancing its stiffness, weight, and usability - all in a UCI-legal package.',
    price: (4200.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58', '61'],
    availablesizes: ['53'],
    image: '/cervelo-triathlon/p-series-red-105-race.webp',
    url: '/triathlon/p-series/p-series-105-race',

    // Updated URL with product ID
  },
  {
    id: 12,
    version: 'P-Series',
    name: 'P-Series 105 di2',
    model: '105 di2',
    color: ' ',
    description: 'LESS DRAG, MORE SPEED',
    about:
      'Aerodynamics are critical to engineering a fast bike: aero drag accounts for as much as 90% of the overall resistance affecting a rider. The P5’s frame design and customized tube shapes improve its aerodynamics while enhancing its stiffness, weight, and usability - all in a UCI-legal package.',
    price: (5200.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58', '61'],
    availablesizes: ['53'],
    image: '/cervelo-triathlon/p-series-red-105-di2.webp',
    url: '/triathlon/p-series/p-series-105-di2',

    // Updated URL with product ID
  },
  {
    id: 13,
    version: 'P-Series',
    name: 'Frameset',
    model: 'Frameset',
    color: 'Black ',
    description: 'LESS DRAG, MORE SPEED',
    about:
      'Aerodynamics are critical to engineering a fast bike: aero drag accounts for as much as 90% of the overall resistance affecting a rider. The P5’s frame design and customized tube shapes improve its aerodynamics while enhancing its stiffness, weight, and usability - all in a UCI-legal package.',
    price: (2700.0).toLocaleString(),
    sizes: ['48', '51', '54', '56', '58'],
    availablesizes: ['53'],
    image: '/cervelo-triathlon/p-series-framset.webp',
    url: '/triathlon/p-series/p-series-framset',

    // Updated URL with product ID
  },
  {
    id: 14,
    version: 'Dogma F',
    name: 'Dogma F Dura-ace Di2',
    model: 'Dura-ace di2',
    color: 'Speedsteer Black on Black ',
    description: 'THE ARE OF BALANCE',
    about:
      'Seven of the last 11 Tours de France have been conquered on a DOGMA, and the latest generation is now ready to continue that legacy of success. This is the culmination of all of our skill and experience, a masterpiece of engineering that offers advancements in handling, comfort, and aerodynamics all wrapped in a package that can climb, descend, and sprint with equal flair. Whatever the road throws at you, the DOGMA F is always the right bike.',
    price: (14500.0).toLocaleString(),
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
    image: '/pinarello/road/dogma-f0-black-dura-ace.png',
    url: '/pinarello/bikes/road/dogma-f/dogma-f0/',

    // Updated URL with product ID
  },
  {
    id: 15,
    version: 'Pinarello F9',
    name: 'Pinarello F9 Dura-ace di2',
    model: ' Dura-ace di2',
    color: 'Fastest Green',
    description: 'BORN TO RACE, NO DISCUSSION',
    about:
      'Our history is one of extraordinary victories, iconic bicycles, passion, and expertise. The new Pinarello F was born with this unique DNA, created to offer extremely high performance and guide you straight to victory. All true riders know that what goes up, must go down. For this reason, the Pinarello F is designed to excel on all terrain and is as adept at climbing as it is comfortable on a high-speed descent. This is what we mean by ALL-ROUND PERFORMANCE.',
    price: (11800.0).toLocaleString(),
    sizes: ['43', '46.5', '50', '51.5', '53', '54.5', '56', '57.5', '59.5'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-f9-black:green:dura-ace.png',
    url: '/pinarello/bikes/road/dogma-f/pinarello-f9',
    // Updated URL with product ID
  },
  {
    id: 16,
    version: 'Pinarello F7',
    name: 'Pinarello F7 Ultegra di2',
    model: ' Ultegra di2',
    color: 'Furious Blue',
    description: 'BORN TO RACE, NO DISCUSSION',
    about:
      'Our history is one of extraordinary victories, iconic bicycles, passion, and expertise. The new Pinarello F was born with this unique DNA, created to offer extremely high performance and guide you straight to victory. All true riders know that what goes up, must go down. For this reason, the Pinarello F is designed to excel on all terrain and is as adept at climbing as it is comfortable on a high-speed descent. This is what we mean by ALL-ROUND PERFORMANCE.',
    price: (8800.0).toLocaleString(),
    sizes: ['43', '46.5', '50', '51.5', '53', '54.5', '56', '57.5', '59.5'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-f7-black-ultregra.png',
    url: '/pinarello/bikes/road/dogma-f/pinarello-f7',
    // Updated URL with product ID
  },
  {
    id: 17,
    version: 'Pinarello F5',
    name: 'Pinarello F5 105 di2',
    model: ' 105 di2',
    color: 'Furious white',
    description: 'BORN TO RACE, NO DISCUSSION',
    about:
      'Our history is one of extraordinary victories, iconic bicycles, passion, and expertise. The new Pinarello F was born with this unique DNA, created to offer extremely high performance and guide you straight to victory. All true riders know that what goes up, must go down. For this reason, the Pinarello F is designed to excel on all terrain and is as adept at climbing as it is comfortable on a high-speed descent. This is what we mean by ALL-ROUND PERFORMANCE.',
    price: (6000.0).toLocaleString(),
    sizes: ['43', '46.5', '50', '51.5', '53', '54.5', '56', '57.5', '59.5'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-f5-white-105png.png',
    url: '/pinarello/bikes/road/dogma-f/pinarello-f5',
    // Updated URL with product ID
  },
  {
    id: 18,
    version: 'Dogma X',
    name: 'Dogma X Dura-ace di2',
    model: ' Dura-ace di2',
    color: 'Furious black',
    description: 'PURE CYCLING MULTIPLIED BY X',
    about:
      'Inspired by riders who enjoy long days in the saddle, the DOGMA X is about more than just performance; the bike has been engineered from the ground up to heighten the emotional experience of cycling and reshape how we think about endurance and speed. It will redefine how we think about performance, offering real-world comfort.',
    price: (15500.0).toLocaleString(),
    sizes: ['43', '46.5', '50', '51.5', '53', '54.5', '56', '57.5', '59.5'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/dogma-x0-black-dura-ace.png',
    url: '/pinarello/bikes/road/dogma-x/dogma-x0',
    // Updated URL with product ID
  },
  {
    id: 19,
    version: 'Pinarello X9',
    name: 'Pinarello X9 Dura-ace di2',
    model: ' Dura-ace di2',
    color: 'Xpeed Gold',
    description: 'X MARKS THE SPOT WHERE CYCLING MEETS EMOTION',
    about:
      'These bikes have been specifically designed to maximise rider comfort and vibration absorption, thanks to the innovative use of carbon fiber layup and a redesigned rear triangle.',
    price: (11800.0).toLocaleString(),
    sizes: ['43', '46', '49', '51.5', '53', '54.5', '56', '58 ', '60'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-x9-black:green-dura-ace.png',
    url: '/pinarello/bikes/road/dogma-x/pinarello-x9',
    // Updated URL with product ID
  },
  {
    id: 20,
    version: 'Pinarello X7',
    name: 'Pinarello X7 Ultegra di2',
    model: ' Ultegra di2',
    color: 'XPEED BLUE',
    description: 'X MARKS THE SPOT WHERE CYCLING MEETS EMOTION',
    about:
      'These bikes have been specifically designed to maximise rider comfort and vibration absorption, thanks to the innovative use of carbon fiber layup and a redesigned rear triangle.',
    price: (8800.0).toLocaleString(),
    sizes: ['43', '46', '49', '51.5', '53', '54.5', '56', '58 ', '60'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-x7-black:blue-ultegra.png',
    url: '/pinarello/bikes/road/dogma-x/pinarello-x7',
    // Updated URL with product ID
  },
  {
    id: 21,
    version: 'Pinarello X5',
    name: 'Pinarello X5 105 di2',
    model: ' 105 di2',
    color: 'Xolo White',
    description: 'X MARKS THE SPOT WHERE CYCLING MEETS EMOTION',
    about:
      'These bikes have been specifically designed to maximise rider comfort and vibration absorption, thanks to the innovative use of carbon fiber layup and a redesigned rear triangle.',
    price: (6000.0).toLocaleString(),
    sizes: ['43', '46', '49', '51.5', '53', '54.5', '56', '58 ', '60'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-x5-white:black-105.png',
    url: '/pinarello/bikes/road/dogma-x/pinarello-x5',
    // Updated URL with product ID
  },
  {
    id: 22,
    version: 'Pinarello X1',
    name: 'Pinarello X1 105',
    model: ' 105',
    color: 'Pearl White',
    description: 'TRUE CYCLING EXPERIENCE',
    about:
      'Not every cyclist wants to push their body to the extreme, trying to fit on a bike that was designed for the pro peloton, so we went back to the drawing board for the Pinarello X and designed a new geometry that offers all-day comfort without renouncing our legendary performance DNA. Thanks to a combination of specifically-selected materials, unique geometry, and a truly innovative rear-end, the Pinarello X strikes the perfect balance between reactivity, performance and comfort.',
    price: (3700.0).toLocaleString(),
    sizes: ['43', '46', '49', '51.5', '53', '54.5', '56', '58 ', '60'],
    availablesizes: ['53', '54'],
    image: '/pinarello/road/pinarello-x1-white-105.png',
    url: '/pinarello/bikes/road/dogma-x/pinarello-x1',
    // Updated URL with product ID
  },
  {
    id: 23,
    version: 'SuperSix EVO LAB71',
    name: 'SuperSix EVO LAB71 Dura-Ace Di2',
    model: 'Dura-ace di2',
    color: 'Marble Oxblood',
    description: 'Sculpted by Speed',
    about:
      'What happens when you design a complete bike, not just a frameset? An elegant design emerges alongside integrated aerodynamics. The frame, fork, bars, wheelsets, and seatpost are engineered as an entire system, achieving aerodynamic efficiency that blows away a piecemeal approach. It’s elevated design driven by elevated performance. Details you’ll notice. Speed you’ll feel.',
    price: (15000.0).toLocaleString(),
    sizes: ['44', '48', '51', '54', '56', '58', '61'],
    availablesizes: ['53'],
    image: '/cannondale/roadbikes/cannondale-supersix-evo-lab71-MOX1.webp',
    url: '/cannondale/road/supersixlab71',
    // Add other properties for the second product
    frame:
      'SuperSix EVO LAB71 Carbon, integrated cable routing w/ Switchplate, 12x142 Syntace thru-axle, BSA 68mm threaded BB, flat mount disc, integrated seat binder, SmartSense compatible',
    fork: 'SuperSix EVO LAB71 Carbon, integrated crown race, 12x100mm Syntace thru-axle, flat mount disc, internal routing, 1-1/8" to 1-1/4" Delta steerer, 55mm offset (44-54cm), 45mm offset (56-61cm)',
    rims: 'NEW Vision Metron60 SL Carbon, 60mm high, Tubeless-ready',
    hubs: '(F) Vision PRS, 12x100mm / (R) Vision PRS, 12x142mm',
    spokes: 'NEW Vision Metron2:1 aero bladed',
    tires: 'NEW Vittoria Corsa Pro, Tubeless, 700x28c',
    pedals: 'Not Included',
    crank: 'NEW FSA K-Force TEAM Edition Powerbox, 52/36T, w/ Powermeter',
    bottomBracket: 'NEW FSA Ceramic Bearing BSA',
    chain: 'Shimano Dura-Ace, 12-speed',
    rearCogs: 'Shimano Dura-Ace R9200, 11-30, 12-speed',
    frontDerailleur: 'Shimano Dura-Ace Di2 R9250',
    rearDerailleur: 'Shimano Dura-Ace Di2 R9250',
    shifters: 'Shimano Dura-Ace Di2 R9270, wireless, 2x12',
    handlebar: 'Cannondale System Bar R-One - low drag, full carbon integrated',
    grips: 'Prologo One Touch',
    brakes: 'Shimano Dura-Ace R9270, 160/140mm MT900 rotors',
    saddle: 'Prologo Dimension NACK NDR carbon',
    // (You can continue adding more properties if needed)
  },
  {
    id: 24,
    version: 'SuperSix EVO Hi-MOD',
    name: 'SuperSix EVO Hi-MOD Sram Red eTap AXS',
    model: 'SRAM Force AXS 12-speed',
    color: 'Marble Oxblood',
    description: 'Sculpted by Speed',
    about:
      'What happens when you design a complete bike, not just a frameset? An elegant design emerges alongside integrated aerodynamics. The frame, fork, bars, wheelsets, and seatpost are engineered as an entire system, achieving aerodynamic efficiency that blows away a piecemeal approach. It’s elevated design driven by elevated performance. Details you’ll notice. Speed you’ll feel.',
    price: (13500.0).toLocaleString(),
    sizes: ['44', '48', '51', '54', '56', '58', '61'],
    availablesizes: ['53'],
    image:
      '/cannondale/roadbikes/cannondale-supersix-evo-hi-mod-1-strictly-bicycles-1.webp',
    url: '/cannondale/road/supersixevohimod1',
    // Add other properties for the third product
    frame:
      'SuperSix EVO Hi-MOD Carbon, integrated cable routing w/ Switchplate, 12x142 Syntace thru-axle, BSA 68mm threaded BB, flat mount disc, integrated seat binder, SmartSense compatible',
    fork: 'SuperSix EVO Hi-MOD Carbon, integrated crown race, 12x100mm Syntace thru-axle, flat mount disc, internal routing, 1-1/8" to 1-1/4" Delta steerer, 55mm offset (44-54cm), 45mm offset (56-61cm)',
    rearShock: 'Null',
    rims: 'HollowGram 50 R-SL, Carbon, 20h front, 24h rear, 50mm deep, 21mm IW, tubeless ready',
    hubs: '(F) HollowGram, sealed bearing 12x100mm centerlock / (R) HollowGram, 12x142mm centerlock w/ DT Swiss 240 internals',
    spokes: 'DT Swiss Aerolite, straight-pull',
    tires: 'Continental Grand Prix 5000, 700 x 25c',
    pedals: 'Not included',
    crank: 'SRAM RED AXS Carbon, 48/35',
    bottomBracket: 'SRAM DUB BSA',
    chain: 'SRAM RED, 12-speed',
    rearCogs: 'SRAM XG-1290, 10-28, 12-speed',
    frontDerailleur: 'SRAM RED AXS',
    rearDerailleur: 'SRAM RED AXS',
    shifters: 'SRAM RED eTap AXS HRD, 2x12',
    handlebar:
      'Cannondale SystemBar R-One - low drag, full carbon integrated bar/stem, internal routing',
    grips: 'Fizik Tempo Bondcush Soft, 3mm',
    stem: 'Cannondale SystemBar R-One - low drag, full carbon integrated bar/stem, internal routing',
    headset: 'Integrated, 1-1/8" - 1-1/4"',
    eBikeCharger: 'Null',
    brakes: 'SRAM RED eTap AXS HRD, 160/160mm Centerline-X rotors',
    saddle: 'Prologo Dimension NACK NDR, Carbon Rails',
    seatpost:
      'Cannondale C1 Aero 40 Carbon, 0mm offset (44-48cm), 20mm offset (51-61cm)',
    extras:
      'Cannondale Gripper Aero Bottles & ReGrip Aero Cages, SRAM AXS charger',
    // (You can continue adding more properties if needed)
  },
  {
    id: 25,
    version: 'SystemSix Hi-MOD ',
    name: 'SystemSix Hi-MOD Dura-Ace Di2',
    model: 'Dura-ace di2',
    color: 'Mercury',
    description: 'Faster Everywhere',
    about:
      'SystemSix outstrips opponents, and not just where you’d expect. It sprints, descends and even climbs most hills faster, conserving watts off the front, in the draft, and in the laughing group.',
    price: (13050.0).toLocaleString(),
    sizes: ['47', '51', '54', '56', '58'],
    availablesizes: ['53'],
    image:
      '/cannondale/roadbikes/cannondale-systemsix-hi-mod-dura-ace-di2-strictly-bicycles-1_93f72e40-d44c-4c17-a650-f33c1ea071c0 (1).webpSystemSix-Hi-MOD-Dura-Ace-Di2.png',
    url: '/cannondale/road/systemsix/',
    // Add other properties for the second product
    frame:
      'Hi-MOD Carbon, integrated cable routing w/ Switchplate, SAVE, PF30a, flat mount disc, 12x142 Speed Release thru-axle',
    fork: 'Hi-MOD Carbon, 1-1/8" - 1-1/4" steerer, 12x100mm Speed Release thru-axle, flat mount disc, 55mm offset (47-51cm) 45mm offset (54-62cm)',
    rims: 'HollowGram 64 SL KNØT, Carbon, 20h front, 24h rear, 64mm deep, 21mm IW, tubeless ready',
    hubs: '(F) HollowGram KNØT, sealed bearing 12x100mm centerlock / (R) HollowGram KNØT, 12x142mm centerlock w/ DT Swiss 240 internals',
    spokes: 'DT Swiss Aerolite, straight-pull',
    tires: 'Vittoria Rubino Pro Speed, 700 x 25c',
    pedals: 'Not included',
    crank: 'Shimano Dura-Ace R9200, 52/36 for 12-speed',
    bottomBracket: 'Cannondale Alloy PressFit30',
    chain: 'Shimano CN-M9100, 12-speed',
    rearCogs: 'Shimano Dura-Ace R9200, 11-30, 12-speed',
    frontDerailleur: 'Shimano Dura-Ace Di2 R9250, braze-on',
    rearDerailleur: 'Shimano Dura-Ace Di2 R9250',
    shifters: 'Shimano Dura-Ace Di2 R9270, 12-speed',
    handlebar: 'HollowGram KNØT SystemBar, Carbon, 8 deg. pitch adjust',
    grips: 'Cannondale Bar Tape, 3.5mm',
    stem: 'HollowGram KNØT, Alloy w/ cable cover, -17°',
    headset: 'Integrated, 1-1/8" - 1-1/4',
    brakes: 'Shimano Dura Ace Di2 R9270 hydraulic disc, 160/140mm MT900 rotors',
    saddle: 'Fizik Tempo Argo R3, 150mm width, K:ium rails',
    seatpost: 'HollowGram 60 KNØT Carbon, 330mm',
  },
  {
    id: 26,
    version: 'SuperSix EVO Hi-MOD 2',
    name: 'SystemSix Hi-MOD Ultegra Di2',
    model: 'Ultegra di2',
    color: 'Matte Black',
    description: 'Faster Everywhere',
    about:
      'SystemSix outstrips opponents, and not just where you’d expect. It sprints, descends and even climbs most hills faster, conserving watts off the front, in the draft, and in the laughing group.',
    price: (8300.0).toLocaleString(),
    sizes: ['44', '48', '51', '54', '56', '58', '61'],
    availablesizes: ['53'],
    image: '/cannondale/roadbikes/cannondale-supersix-evo-hi-mod-2-MOX.webp',
    url: '/cannondale/road/supersixevohimod2',
    // Add other properties for the fourth product
    frame:
      'SuperSix EVO Hi-MOD Carbon, integrated cable routing w/ Switchplate, 12x142 Syntace thru-axle, BSA 68mm threaded BB, flat mount disc, integrated seat binder, SmartSense compatible',
    fork: 'SuperSix EVO Hi-MOD Carbon, integrated crown race, 12x100mm Syntace thru-axle, flat mount disc, internal routing, 1-1/8" to 1-1/4" Delta steerer, 55mm offset (44-54cm), 45mm offset (56-61cm)',
    rims: 'HollowGram R-SL 50, Carbon, 20h front, 24h rear, 50mm deep, 21mm inner width, tubeless ready',
    hubs: '(F) HollowGram, sealed bearing 12x100mm centerlock / (R) HollowGram, 12x142mm centerlock w/ DT Swiss 240 internals',
    spokes: 'DT Swiss Aerolite, straight-pull',
    tires: 'Continental Grand Prix 5000, 700x25c',
    pedals: 'Not included',
    crank: 'Shimano Ultegra R8100, 52/36',
    bottomBracket: 'Shimano BSA 68',
    chain: 'Shimano Ultegra, 12-speed',
    rearCogs: 'Shimano Ultegra R8100, 11-30, 12-speed',
    frontDerailleur: 'Shimano Ultegra Di2 R8150',
    rearDerailleur: 'Shimano Ultegra Di2 R8150',
    shifters: 'Shimano Ultegra Di2 R8170, wireless, 2x12',
    handlebar: 'Vision Trimax Carbon Aero, 31.8mm',
    grips: 'Fizik Tempo Bondcush Soft, 3mm',
    stem: 'Cannondale C1 Conceal, Alloy, 31.8, -6°',
    headset: 'Integrated, 1-1/8" - 1-1/4"',
    brakes: 'Shimano Ultegra R8170, 160/140mm MT800 rotors',
    saddle: 'Prologo Dimension TiRox NDR, Titanium Rails',
    seatpost:
      'Cannondale C1 Aero 40 Carbon, 0mm offset (44-48cm), 20mm offset (51-61cm)',

    extras:
      'Cannondale Gripper Aero Bottles & ReGrip Aero Cages, Shimano EC300 charging connector',
    // (You can continue adding more properties if needed)
  },
  {
    id: 27,
    version: 'SuperSix EVO 1',
    name: 'SystemSix Hi-MOD SRAM Force eTap AXS',
    model: 'SRAM Force AXS 12-speed',
    color: 'Mystique Gray',
    description: 'Faster Everywhere',
    about:
      'SystemSix outstrips opponents, and not just where you’d expect. It sprints, descends and even climbs most hills faster, conserving watts off the front, in the draft, and in the laughing group.',
    price: (7000.0).toLocaleString(),
    sizes: ['44', '48', '51', '54', '56', '58', '61'],
    availablesizes: ['53'],
    image: '/cannondale/roadbikes/cannondale-supersix-evo-1-MOX.webp',
    url: '/cannondale/road/supersixevo1',
    // Add other properties for the fifth product
    frame:
      'SuperSix EVO Carbon, integrated cable routing w/ Switchplate, 12x142 Syntace thru-axle, BSA 68mm threaded BB, flat mount disc, integrated seat binder, SmartSense compatible',
    fork: 'SuperSix EVO Carbon, integrated crown race, 12x100mm Syntace thru-axle, flat mount disc, internal routing, 1-1/8" to 1-1/4" Delta steerer, 55mm offset (44-54cm), 45mm offset (56-61cm)',
    rims: 'HollowGram 50 R-S, Carbon, 20h front, 24h rear, 50mm deep, 21mm IW, tubeless ready',
    hubs: '(F) HollowGram, sealed bearing 12x100mm centerlock / (R) HollowGram, 12x142mm centerlock w/ DT Swiss 350 internals',
    spokes: 'Formula Grand Forza, Double Butted, straight-pull',
    tires: 'Vittoria Rubino Pro Bright Black, 700 x 25c, reflective strip',
    pedals: 'Not included',
    crank: 'SRAM Force, DUB, 48/35',
    bottomBracket: 'SRAM DUB BSA',
    chain: 'SRAM Force, 12-speed',
    rearCogs: 'SRAM XG-1270, 10-33, 12-speed',
    frontDerailleur: 'SRAM Force AXS, braze-on',
    rearDerailleur: 'SRAM Force AXS',
    shifters: 'SRAM Force AXS, 12-speed',
    handlebar: 'Vision Trimax Carbon Aero, 31.8mm',
    grips: 'Cannondale Bar Tape, 3.5mm',
    stem: 'Cannondale C1 Conceal, Alloy, 31.8, -6°',
    headset: 'Integrated, 1-1/8" - 1-1/4"',
    brakes: 'SRAM Force AXS Hydraulic Disc, 160/160mm PaceLine Rotors',
    saddle: 'Prologo Dimension TiRox NDR, Titanium Rails',
    seatpost:
      'Cannondale C1 Aero 40 Carbon, 0mm offset (44-48cm), 20mm offset (51-61cm)',
    extras: 'SRAM AXS charger',
    // (You can continue adding more properties if needed)
  },
  {
    id: 28,
    version: 'SuperSix EVO 2',
    name: 'SuperSix EVO 2 Ultegra Di2',
    model: 'Ultegra di2',
    color: 'Raw Carbon',
    description: 'Faster Everywhere',
    about:
      'SystemSix outstrips opponents, and not just where you’d expect. It sprints, descends and even climbs most hills faster, conserving watts off the front, in the draft, and in the laughing group.',
    price: (5500.0).toLocaleString(),
    sizes: ['44', '48', '51', '54', '56', '58', '61'],
    availablesizes: ['53'],
    image: '/cannondale/roadbikes/C23_C11453U_SuperSix_EVO_Crb_2_RAW_MOX.webp',
    url: '/cannondale/road/supersixevo2',
    // Add other properties for the sixth product
    frame:
      'SuperSix EVO Carbon, integrated cable routing w/ Switchplate, 12x142 Syntace thru-axle, BSA 68mm threaded BB, flat mount disc, integrated seat binder, SmartSense compatible',
    fork: 'SuperSix EVO Carbon, integrated crown race, 12x100mm Syntace thru-axle, flat mount disc, internal routing, 1-1/8" to 1-1/4" Delta steerer, 55mm offset (44-54cm), 45mm offset (56-61cm)',
    rims: 'HollowGram 45 R, Carbon, 20h front, 24h rear, 50mm deep, 21mm IW, tubeless ready',
    hubs: '(F) HollowGram, sealed bearing 12x100mm centerlock / (R) HollowGram 3-pawl, sealed bearing, 12x142mm centerlock',
    spokes: 'Formula Grand Forza, Double Butted, straight-pull',
    tires: 'Vittoria Rubino Pro Bright Black, 700 x 25c, reflective strip',
    pedals: 'Not included',
    crank: 'Shimano Ultegra R8100, 52/36',
    bottomBracket: 'Shimano BBRS500, BSA',
    chain: 'Shimano Ultegra, 12-speed',
    rearCogs: 'Shimano Ultegra R8100, 11-30, 12-speed',
    frontDerailleur: 'Shimano Ultegra Di2 R8150',
    rearDerailleur: 'Shimano Ultegra Di2 R8150',
    shifters: 'Shimano Ultegra Di2 R8170, wireless, 2x12-speed',
    handlebar: 'Vision Trimax Carbon Aero, 31.8mm',
    grips: 'Cannondale Bar Tape, 3.5mm',
    stem: 'Cannondale C1 Conceal, Alloy, 31.8, -6°',
    headset: 'Integrated, 1-1/8" - 1-1/4"',
    brakes: 'Shimano Ultegra R8170, 160/140mm MT800 rotors',
    saddle: 'Prologo Dimension STN NDR, Stainless Steel Rails',
    seatpost:
      'Cannondale C1 Aero 40 Carbon, 0mm offset (44-48cm), 20mm offset (51-61cm)',

    extras: 'Shimano EC300 charging connector',
    // (You can continue adding more properties if needed)
  },
  {
    id: 29,
    version: 'SuperSix EVO',
    name: 'SuperSix EVO Rival eTap AXS',
    model: 'SRAM Rival AXS 12-speed',
    color: 'Mantis',
    description: 'Faster Everywhere',
    about:
      'SystemSix outstrips opponents, and not just where you’d expect. It sprints, descends and even climbs most hills faster, conserving watts off the front, in the draft, and in the laughing group.',
    price: (4650.0).toLocaleString(),
    sizes: ['44', '48', '51', '54', '56', '58', '60', '62'],
    availablesizes: ['53'],
    image: '/cannondale/roadbikes/cannondale-supersix-evo-se-MOX.webp',
    url: '/cannondale/road/supersixevo3',
    // Add other properties for the eighth product
    frame:
      'BallisTec Carbon, integrated cable routing w/ Switchplate, 12x142 Speed Release thru-axle, SAVE, PF30a, flat mount disc, integrated seat binder',
    fork: 'BallisTec Carbon, SAVE, integrated crown race, 12x100mm Speed Release thru-axle, flat mount disc, internal routing, 1-1/8" to 1-1/4" steerer and 55mm offset (44-54cm), 1-1/8" to 1-3/8 steerer and 45mm offset (56-62cm)',
    rims: 'DT Swiss R470 db, 28h',
    hubs: '(F) Formula CL-712, 12x100mm centerlock / (R) Formula RXC-400, 12x142mm centerlock',
    spokes: 'Stainless Steel, 14g',
    tires: 'Vittoria Rubino Pro Bright Black, 700 x 25c',
    pedals: 'Not included',
    crank: 'SRAM Rival DUB X-Range, 46/33',
    bottomBracket: 'SRAM DUB PF30A Road 73mm',
    chain: 'SRAM Rival 12-speed',
    rearCogs: 'SRAM Rival XG-1250, 12-speed 10-36',
    frontDerailleur: 'SRAM Rival eTap AXS, braze-on',
    rearDerailleur: 'SRAM Rival eTap AXS',
    shifters: 'SRAM Rival eTap AXS HRD',
    handlebar: 'HollowGram SAVE SystemBar, Carbon, 8 deg. pitch adjust',
    grips: 'Cannondale Bar Tape, 3.5mm',
    stem: 'HollowGram KNØT, Alloy w/ cable cover, -6°',
    headset: 'Integrated, 1-1/8" - 1-1/4" (44-54cm), 1-1/8" - 1-3/8" (56-62cm)',
    brakes: 'SRAM Rival hydraulic disc, 160/160mm Paceline rotors',
    saddle: 'Fizik Aliante Delta, S-alloy rails',
    seatpost:
      'HollowGram 27 SL KNØT, Carbon, 2 bolt clamp, 330mm, 0mm offset (44-48cm), 15mm offset (51-62cm)',

    extras: 'Removable fender bridge',
    // (You can continue adding more properties if needed)
  },
  {
    id: 30,
    version: 'SuperSix EVO 3',
    name: 'SuperSix EVO 3 105 Di2',
    model: '105 di2',
    color: 'Chalk',
    description: 'Faster Everywhere',
    about:
      'SystemSix outstrips opponents, and not just where you’d expect. It sprints, descends and even climbs most hills faster, conserving watts off the front, in the draft, and in the laughing group.',
    price: (4500.0).toLocaleString(),
    sizes: ['44', '48', '51', '54', '56', '58', '61'],
    availablesizes: ['53'],
    image: '/cannondale/roadbikes/cannondale-supersix-evo-3-MOX.webp',

    url: '/cannondale/road/supersixevo4',
    // Add other properties for the seventh product
    frame:
      'SuperSix EVO Carbon, integrated cable routing w/ Switchplate, 12x142 Syntace thru-axle, BSA 68mm threaded BB, flat mount disc, integrated seat binder, SmartSense compatible',
    fork: 'SuperSix EVO Carbon, integrated crown race, 12x100mm Syntace thru-axle, flat mount disc, internal routing, 1-1/8" to 1-1/4" Delta steerer, 55mm offset (44-54cm), 45mm offset (56-61cm)',
    rims: 'DT Swiss R470 db, 28h',
    hubs: '(F) Formula CL-712, 12x100mm centerlock / (R) Formula RXC-400, 12x142mm centerlock',
    spokes: 'Stainless Steel, 14g',
    tires: 'Vittoria Rubino Pro Bright Black, 700 x 25c, reflective strip',
    pedals: 'Not included',
    crank: 'Shimano 105 R7100, 50/34',
    bottomBracket: 'Shimano BB-RS500, BSA',
    chain: 'Shimano 105, 12-speed',
    rearCogs: 'Shimano 105 R7100, 11-34, 12-speed',
    frontDerailleur: 'Shimano 105 Di2 R7170',
    rearDerailleur: 'Shimano 105 Di2 R7150',
    shifters: 'Shimano 105 Di2 R7170, wireless, 2x12-speed',
    handlebar: 'Vision Trimax Aero, 31.8mm',
    grips: 'Cannondale Bar Tape, 3.5mm',
    stem: 'Cannondale C1 Conceal, Alloy, 31.8, -6°',
    headset: 'Integrated, 1-1/8" - 1-1/4"',
    brakes: 'Shimano 105 R7170 hydraulic disc, 160/160mm RT70 rotors',
    saddle: 'Prologo Nago RS STN, Stainless Steel Rails',
    seatpost:
      'Cannondale C1 Aero 40 Carbon, 0mm offset (44-48cm), 20mm offset (51-61cm)',

    extras: 'Shimano EC300 charging connector',
    // (You can continue adding more properties if needed)
  },

  // Add more products as needed
];

export default products;