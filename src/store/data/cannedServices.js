/* eslint-disable */
const serviceList = [
  {
    id: 1,
    templateID: 42,
    name: 'Replace oil Filter',
    hours: 1.5,
    createdAt: '2022-01-18T10:39:32.000Z',
    warrantyType: 'global',
    warranty: {
      time: 10,
      range: 30000
    },
    parts: [
      {
        id: 1,
        serviceID: 1,
        name: 'Filtron OP-595',
        price: 150,
        quantity: 2,
        description: 'per axle',
        core: 0,
        createdAt: '2022-01-18T10:39:32.000Z'
      },
      {
        id: 2,
        serviceID: 1,
        name: 'Filtron OP-575',
        price: 10,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 2,
        createdAt: '2022-01-18T10:39:32.000Z'
      }
    ]
  },
  {
    id: 2,
    templateID: 42,
    name: 'Replace oil Filter',
    hours: 1.5,
    createdAt: '2022-01-18T10:39:32.000Z',
    warrantyType: 'global',
    warranty: {
      time: 10,
      range: 30000
    },
    parts: [
      {
        id: 3,
        serviceID: 2,
        name: 'Filtron OP-595',
        price: 40,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 3,
        createdAt: '2022-01-18T10:39:32.000Z'
      },
      {
        id: 4,
        serviceID: 2,
        name: 'Filtron OP-575',
        price: 150,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        createdAt: '2022-01-18T10:39:32.000Z'
      }
    ]
  },
  {
    id: 3,
    templateID: 43,
    name: 'Replace oil Filter',
    hours: 1.5,
    createdAt: '2022-01-18T10:39:32.000Z',
    warrantyType: 'global',
    warranty: {
      time: 10,
      range: 30000
    },
    parts: [
      {
        id: 5,
        serviceID: 3,
        name: 'Filtron OP-595',
        price: 150,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 0,
        createdAt: '2022-01-18T10:39:32.000Z'
      },
      {
        id: 6,
        serviceID: 3,
        name: 'Filtron OP-575',
        price: 90,
        quantity: 3,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 2,
        createdAt: '2022-01-18T10:39:32.000Z'
      }
    ]
  },
  {
    id: 4,
    templateID: 43,
    name: 'Replace oil Filter',
    hours: 1.5,
    createdAt: '2022-01-18T10:39:32.000Z',
    warrantyType: 'global',
    warranty: {
      time: 10,
      range: 30000
    },
    parts: [
      {
        id: 7,
        serviceID: 4,
        name: 'Filtron OP-595',
        price: 10,
        quantity: 12,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 3,
        createdAt: '2022-01-18T10:39:32.000Z'
      },
      {
        id: 8,
        serviceID: 4,
        name: 'Filtron OP-575',
        price: 140,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 3,
        createdAt: '2022-01-18T10:39:32.000Z'
      }
    ]
  },
  //============= new ================
  {
    id: 5,
    templateID: 1,
    name: 'Replace air Filter',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 1.2,
    averageTime: 1.2,
    used: 4,
    warrantyType: 'global',
    warranty: {
      time: 10,
      range: 30000
    },
    select: false,
    parts: [
      {
        id: 12,
        serviceID: 5,
        name: 'Filter OP-595',
        price: 75,
        quantity: 1,
        description: 'Front brake rotors',
        core: 1,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 13,
        serviceID: 5,
        name: 'sealer AR-5938',
        price: 10,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        type: 'In-house',
        select: false
      },
      {
        id: 14,
        serviceID: 5,
        name: 'bolt 6x40',
        price: 2,
        quantity: 31,
        description: 'Front brake rotors',
        core: 11,
        type: 'Manufacturers',
        select: false
      }
    ]
  },
  {
    id: 6,
    templateID: 1,
    name: 'Replace air Filter',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 1.2,
    averageTime: 1.2,
    used: 4,
    warrantyType: 'custom',
    warranty: {
      time: 48,
      range: 140000
    },
    select: false,
    parts: [
      {
        id: 12,
        serviceID: 5,
        name: 'Filter OP-595',
        price: 20,
        quantity: 11,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 13,
        serviceID: 5,
        name: 'sealer AR-5938',
        price: 10,
        quantity: 4,
        description: 'Front brake rotors',
        core: 3,
        type: 'In-house',
        select: false
      },
      {
        id: 14,
        serviceID: 5,
        name: 'bolt 6x40',
        price: 22,
        quantity: 4,
        description: 'Front brake rotors',
        core: 1,
        type: 'Manufacturers',
        select: false
      }
    ]
  },
  {
    cardName: 'Air Filter',
    id: 7,
    templateID: 1,
    name: 'Remove and replace engine air filter',
    description: 'Remove and replace engine air filter. A dirty engine air filter will cause poor engine performance and potentially damage the engine',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 0.3,
    averageTime: 0.2,
    used: 4,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 12,
        serviceID: 7,
        name: 'Engine air filter',
        price: 28.5,
        quantity: 3,
        description: 'Front brake rotors',
        core: 2,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Cabin Filter',
    id: 8,
    templateID: 2,
    name: 'Remove and replace cabin air filter',
    description:
      'Remove and replace the cabin air filter. Recommended to filter out dust debris in passenger compartment heating and cooling system, control odours, and improve cabin airflow performance',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 0.5,
    averageTime: 0.3,
    used: 4,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 13,
        serviceID: 8,
        name: 'Cabin Air filter',
        price: 34.79,
        quantity: 2,
        description: 'Front brake rotors',
        core: 1,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Cooling System Service',
    id: 9,
    templateID: 3,
    name: 'Cooling System Service',
    description:
      'Cooling system service and coolant exchange. Recommended to improve cooling system performance and keep the engine running at proper temperatures. Also provides proper lubrication to cooling systems components for longer component life',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 1,
    averageTime: 0.7,
    used: 7,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 14,
        serviceID: 9,
        name: '5901 Universal Cooling System Kit',
        price: 43.95,
        quantity: 3,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 4,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 15,
        serviceID: 9,
        name: 'Antifreeze (Khameleon)',
        price: 6.8,
        quantity: 7,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 5,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 16,
        serviceID: 9,
        name: 'Environmental  Charge',
        price: 5.5,
        quantity: 2,
        description: 'Front brake rotors',
        core: 2,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Transmission Service',
    id: 10,
    templateID: 4,
    name: 'Transmission Service',
    description:
      'Transmission service and fluid exchange ( synthetic Fluid)  Recommended to remove any debris and metal filings from old fluid and to improve transmission shifting/performance and prolong the life of transmission components',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 1.2,
    averageTime: 1.1,
    used: 12,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 17,
        serviceID: 10,
        name: '516-000 Synthetic Automatic transmission fluid',
        price: 16.05,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 18,
        serviceID: 10,
        name: '6600 transmission service kit',
        price: 46.65,
        quantity: 2,
        description: 'per axle',
        core: 1,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 19,
        serviceID: 10,
        name: 'Environmental  Charge',
        price: 5.5,
        quantity: 3,
        description: 'Front brake rotors',
        core: 4,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Power Steering System Service',
    id: 11,
    templateID: 5,
    name: 'Power Steering System Service',
    description:
      'Power steering system service. Recommended to protect power steering components from premature failure/leakage as fluid can become contaminated with dirt/debris over time.',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 0.6,
    averageTime: 0.5,
    used: 5,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 20,
        serviceID: 11,
        name: '6700 Power steering flush Kit includes fluid',
        price: 82.86,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 10,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 21,
        serviceID: 11,
        name: 'Enviromental Charge',
        price: 5.5,
        quantity: 1,
        description: 'Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs',
        core: 10,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Engine Tuneup/Spark Plugs',
    id: 12,
    templateID: 6,
    name: 'Engine Tuneup/Spark Plugs',
    description: 'Complete engine tuneup. Recommended to improve fuel mileage, emissions, prevent misfires and improve overall engine performance.',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 2.5,
    averageTime: 2,
    used: 45,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 22,
        serviceID: 12,
        name: 'Spark plugs',
        price: 16.75,
        quantity: 3,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 4,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 23,
        serviceID: 12,
        name: 'Ignition coil boots',
        price: 22.5,
        quantity: 3,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 2,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 24,
        serviceID: 12,
        name: 'Injector cleaning kit',
        price: 76.89,
        quantity: 5,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 19,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 25,
        serviceID: 12,
        name: 'Engine tuneup service kit',
        price: 24,
        quantity: 5,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 15,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Egine Timing Belt',
    id: 13,
    templateID: 7,
    name: 'Replace timing belt and Water pump',
    description:
      'Remove and replace timeing belt and water pump assembly. Service cooling system. A loose or broken timing belt can will cause serious engine damage.',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 5,
    averageTime: 2,
    used: 45,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 26,
        serviceID: 13,
        name: 'Timing belt',
        price: 156.98,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 15,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 27,
        serviceID: 13,
        name: 'Belt Tensioner',
        price: 78.1,
        quantity: 5,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 6,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 28,
        serviceID: 13,
        name: 'Water pump',
        price: 134,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 10,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 29,
        serviceID: 13,
        name: 'Antifreeze',
        price: 6.3,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 5,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 30,
        serviceID: 13,
        name: 'Enviromental Charge',
        price: 5.5,
        quantity: 6,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 9,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Direct Injection System Service',
    id: 14,
    templateID: 8,
    name: 'GDI Service',
    description:
      'GDI fuel/air induction system and injector service.   Recommended to improve engine compression and operation by removing excessive carbon build up on components such as valves, injectors and combustion chambers and prevents premature component failures as well as increase engine longevity.',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 1.2,
    averageTime: 2,
    used: 45,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 31,
        serviceID: 14,
        name: '2991 Platinum Fuel Service Kit #2',
        price: 179.07,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 14,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 32,
        serviceID: 14,
        name: 'Enviromental charge',
        price: 5.5,
        quantity: 21,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 3,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Brake Fluid System Service',
    id: 15,
    templateID: 9,
    name: 'Brake Fluid System Service',
    description:
      'Brake fluid system flush and fluid exchange. Recommended to clean contaminated, moisture saturated brake fluid from the system and protect brake calipers,  brake lines, and other brake components from premature failure and leakage.',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 0.5,
    averageTime: 0.4,
    used: 65,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 33,
        serviceID: 15,
        name: '84032 Dot 4 Brake Fluid',
        price: 38.65,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 12,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 34,
        serviceID: 15,
        name: 'Enviromental charge',
        price: 5.5,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 14,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Front Brake System',
    id: 16,
    templateID: 10,
    name: 'Front Brake System',
    description:
      'Front brake service (Freeup, clean and lube sliders.  Clean rust from brake rotors. This is done to extend the life of the brakes and extend your brake warranty to 3 years/60000km)',
    hours: 1.5, // REMOVE / old value
    estimatedTime: 1.2,
    averageTime: 1.0,
    used: 25,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 35,
        serviceID: 16,
        name: 'Brake hardware & supplies service kit - per axle (Brake cleaner, hardware,lubricants,anti-squeal compound,roloc discs)',
        price: 19.04,
        quantity: 5,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 13,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Rear Brake System',
    id: 17,
    templateID: 11,
    name: 'Rear Brake System',
    description:
      'Rear brake service (Freeup, clean and lube sliders.  Clean rust from brake rotors. This is done to extend the life of the brakes and extend your brake warranty to 3 years/60000km)',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 1.2,
    averageTime: 1.0,
    used: 65,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 36,
        serviceID: 17,
        name: 'Brake hardware & supplies service kit - per axle (Brake cleaner, hardware,lubricants,anti-squeal compound,roloc discs) (#BHSK)',
        price: 19.04,
        quantity: 10,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 7,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Windshield Wipers',
    id: 18,
    templateID: 12,
    name: 'Windshield Wipers',
    description: 'Install new windshield wiper blades',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 0.1,
    averageTime: 0.1,
    used: 165,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 37,
        serviceID: 18,
        name: 'XC19 Wiper blade',
        price: 19.25,
        quantity: 3,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 31,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 38,
        serviceID: 18,
        name: 'XC21 Wiper blade',
        price: 24.78,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 19,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Exterior Lights',
    id: 19,
    templateID: 13,
    name: 'Left head light',
    description: 'Remove and replace left headlight bulb',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 0.5,
    averageTime: 0.4,
    used: 16,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 39,
        serviceID: 19,
        name: '9005 Bulb',
        price: 16.9,
        quantity: 10,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 4,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Battery',
    id: 20,
    templateID: 14,
    name: 'Replace Battery',
    description: 'Remove and replace battery',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 0.5,
    averageTime: 0.4,
    used: 16,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 40,
        serviceID: 20,
        name: '796MF battery',
        price: 156.98,
        quantity: 4,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 34,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Summer Tires',
    id: 21,
    templateID: 15,
    name: 'Install new tires',
    description:
      'Install and balance four new P205/65R16 Summer tires. Clean and lube wheel hub and rim surface. Torque wheel lug nuts. (Includes complimentary suspension and alignment inspection)',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 1.5,
    averageTime: 1.4,
    used: 62,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 41,
        serviceID: 21,
        name: 'P205/65R16 General RT40 Tires',
        price: 145.89,
        quantity: 34,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 13,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 42,
        serviceID: 21,
        name: 'Tire service kit -per wheel (includes wheel weights, valve stems, cleaners, rim cleaning disc)',
        price: 8.08,
        quantity: 32,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 7,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Winter Tires',
    id: 22,
    templateID: 16,
    name: 'Install new tires',
    description:
      'Install and balance four new P205/65R16 Winter tires. Clean and lube wheel hub and rim surface. Torque wheel lug nuts. (Includes complimentary suspension and alignment inspection)',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 1.5,
    averageTime: 1.4,
    used: 69,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 43,
        serviceID: 22,
        name: 'P205/65R16 Michelin X-ice Tires',
        price: 198,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 5,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 44,
        serviceID: 22,
        name: 'Tire service kit -per wheel (includes wheel weights, valve stems, cleaners, rim cleaning disc)',
        price: 8.08,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 9,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Accessories Belt',
    id: 23,
    templateID: 17,
    name: 'Replace Accessories Belt',
    description: 'Remove and replace accessories drive belt',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 0.5,
    averageTime: 0.3,
    used: 9,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 45,
        serviceID: 23,
        name: 'YH12367 Accessories drive belt',
        price: 65.89,
        quantity: 4,
        description: 'Front brake rotors',
        core: 90,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Fluid Leaks',
    id: 24,
    templateID: 18,
    name: 'Replace rear brake lines',
    description:
      'Remove old leaking brake lines. Frabricate and install new brake lines from brake master cylinder to rear axle. Bleed out air from brake system.  Road test and verify repair',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 4,
    averageTime: 3.2,
    used: 19,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 46,
        serviceID: 24,
        name: '20 ft 3/16 Brake line',
        price: 12.09,
        quantity: 8,
        description: 'Front brake rotors',
        core: 2,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 47,
        serviceID: 24,
        name: 'Brake fittings',
        price: 6.09,
        quantity: 14,
        description: 'Front brake rotors',
        core: 12,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 48,
        serviceID: 24,
        name: 'Brake line and fitting service kit. (fittings, brake lines, connectors, plastic ties, cleaners, undercoating)',
        price: 68,
        quantity: 3,
        description: 'Front brake rotors',
        core: 12,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Front Brakes',
    id: 25,
    templateID: 19,
    name: 'Replace front brake pads and rotors',
    description: 'Remove and replace front brake pads and rotors. Clean and lube front brake caliper sliders.',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 1.8,
    averageTime: 1.2,
    used: 119,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 49,
        serviceID: 25,
        name: 'XC 1897 Front brake pads',
        price: 123.98,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 50,
        serviceID: 25,
        name: 'YC 1246789 Front brake rotors',
        price: 67.98,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 13,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 51,
        serviceID: 25,
        name: 'Brake hardware & supplies service kit - per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        price: 19.09,
        quantity: 6,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 7,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Rear Brakes',
    id: 26,
    templateID: 20,
    name: 'Replace rear brake pads and rotors, service rear calipers.',
    description: 'Remove and replace rear brake pads and rotors. Clean and service rear brake calipers sliders.',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 1.8,
    averageTime: 1.2,
    used: 119,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 52,
        serviceID: 26,
        name: 'PXD1602H Rear brake pads',
        price: 109.5,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 53,
        serviceID: 26,
        name: 'YH421758P Rear brake rotors',
        price: 212.61,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 54,
        serviceID: 26,
        name: 'Brake hardware & supplies service kit - per axle (Brake cleaner, hardware,lubricants,anti-squeal compound,roloc discs) (#BHSK)',
        price: 19.09,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Shocks and struts',
    id: 27,
    templateID: 21,
    name: 'Replace shocks and struts, perform wheel alignment.',
    description: 'Remove front stabilzer links then replace front strut assemblies. Replace rear shocks then perform wheel alignment.',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 5,
    averageTime: 4.2,
    used: 90,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 55,
        serviceID: 27,
        name: '172889 Front strut',
        price: 379.82,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 56,
        serviceID: 27,
        name: '172888 Front strut',
        price: 379.82,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 57,
        serviceID: 27,
        name: '37302 Rear shock',
        price: 114.28,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 3,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 58,
        serviceID: 27,
        name: 'Chassis service kit (Shims, cotter pins, lubricants, nuts, bolts, penetrating oil, oxygen/acetylene, hardware) (#CSK) (In Stock)',
        price: 18,
        quantity: 12,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Ball Joints',
    id: 28,
    templateID: 22,
    name: 'Replace lower ball joints, perform alignment',
    description:
      'Separate lower ball joints from steering knuckle, then replace lower control arm/ball joint assemblys. Perform wheel alignment after all parts are reassembled',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 4,
    averageTime: 3.4,
    used: 20,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 59,
        serviceID: 28,
        name: 'RK620487',
        price: 246.51,
        quantity: 3,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 4,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 60,
        serviceID: 28,
        name: 'Chassis service kit (Shims, cotter pins, lubricants, nuts, bolts, penetrating oil, oxygen/acetylene, hardware) (#CSK) (In Stock)',
        price: 18,
        quantity: 2,
        description: 'per axle ',
        core: 4,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Tie-Rod Ends',
    id: 29,
    templateID: 23,
    name: 'Replace tierod ends, perform wheel alignment',
    description: 'Remove both outer tierod ends for access to remove and replace inner tierod ends, adjust wheel alignment to correct specification.',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 3.2,
    averageTime: 3,
    used: 20,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 61,
        serviceID: 29,
        name: '269-3916 front inner tie-rod',
        price: 115.94,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 62,
        serviceID: 29,
        name: 'Chassis service kit (Shims, cotter pins, lubricants, nuts, bolts, penetrating oil, oxygen/acetylene, hardware) (#CSK) (In Stock)',
        price: 18,
        quantity: 3,
        description: 'Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs',
        core: 4,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Wheel Hub & Bearings',
    id: 30,
    templateID: 24,
    name: 'Replace wheel bearing',
    description:
      'Remove spindle assembly from vehicle, press out centre hub then wheel bearing. Press in new wheel bearing and hub then reinstall spindle assembly into vehicle.',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 2.6,
    averageTime: 2.2,
    used: 24,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 63,
        serviceID: 30,
        name: '510063 Front wheel bearing',
        price: 120.46,
        quantity: 3,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 4,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 64,
        serviceID: 30,
        name: 'Chassis service kit (Shims, cotter pins, lubricants, nuts, bolts, penetrating oil, oxygen/acetylene, hardware) (#CSK) (In Stock)',
        price: 18,
        quantity: 7,
        description: 'Brake cleaner, hardware, lubricants',
        core: 4,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Exterior Lights',
    id: 31,
    templateID: 13,
    name: 'Right Tail light',
    description: 'Remove and replace right tail light bulb',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 0.3,
    averageTime: 0.4,
    used: 16,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 65,
        serviceID: 31,
        name: '194 Bulb',
        price: 9.89,
        quantity: 10,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 4,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Fluid Leaks',
    id: 32,
    templateID: 18,
    name: 'Replace leaking power steering pressure line',
    description:
      'Remove power steering pump to can access to power steering pressure line.  Remove and replace line.  Reinstall power steering pump and install new fluid.   Road test and verify repair',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 2.5,
    averageTime: 3.2,
    used: 19,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 66,
        serviceID: 32,
        name: 'Part: 20 ft 3/16 Brake line',
        price: 12.09,
        type: 'Warranty Claim',
        quantity: 20,
        select: false
      },
      {
        id: 67,
        serviceID: 32,
        name: 'Part: 20 ft 3/16 Brake line',
        price: 6.09,
        quantity: 4,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 7,
        type: 'Warranty Claim',
        quantity: 6,
        select: false
      },
      {
        id: 68,
        serviceID: 32,
        name: 'Part: Brake line and fitting service kit. (fittings, brake lines, connectors, plastic ties, cleaners, undercoating)',
        price: 68,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 7,
        type: 'Warranty Claim',
        quantity: 1,
        select: false
      }
    ]
  },
  {
    cardName: 'Front Brakes',
    id: 33,
    templateID: 19,
    name: 'Replace front brake pads, rotors and Brake calipers',
    description: 'Remove and replace front brake pads, rotors, and brake calipers.  Bleed air from brake hydraulic system.',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 2,
    averageTime: 1.2,
    used: 119,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 69,
        serviceID: 33,
        name: 'XC 1897 Front brake pads',
        price: 123.98,
        quantity: 1,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 30.55,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 70,
        serviceID: 33,
        name: 'YC 1246789 Front brake rotors',
        price: 67.98,
        quantity: 2,
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 30.55,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 71,
        serviceID: 33,
        name: 'XL6578 Right Front brake caliper',
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 40.25,
        price: 123.45,
        quantity: 1,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 72,
        serviceID: 33,
        name: 'XL6577 Left Front brake caliper',
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 40.25,
        price: 123.45,
        quantity: 1,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 73,
        serviceID: 33,
        name: 'Brake hardware & supplies service kit - per axle (Brake cleaner, hardware,lubricants,anti-squeal compound,roloc discs)',
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 0,
        price: 19.09,
        quantity: 1,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Exhaust System',
    id: 34,
    templateID: 25,
    name: 'Replace exhaust pipes and muffler',
    description:
      'The muffler is rotten causing tail pipe to be loose. The front exhaust pipe has a crack right after the Y-pipe - Remove and replace the exhaust from the Y-pipe back',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 2,
    averageTime: 2.2,
    used: 24,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 74,
        serviceID: 34,
        name: 'Exhaust service kit (oxygen/acetylene, clamps, gaskets, welding wire, nuts, bolts, exhaust hanger rod) (#EXSK)',
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 2,
        quantity: 1,
        price: 52,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 75,
        serviceID: 34,
        name: 'Exhaust extension pipe from y pipe to intermediate pipe',
        description: 'per axle (Brake cleaner, hardware, lubricants, anti-squeal compound, roloc discs)',
        core: 1,
        quantity: 1,
        price: 43.63,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 76,
        serviceID: 34,
        name: 'Intermediate pipe',
        description: 'Brake cleaner, hardware, lubricants',
        core: 1,
        quantity: 2,
        price: 41.4,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 77,
        serviceID: 34,
        name: 'Tail pipe',
        description: 'per axle',
        core: 2,
        quantity: 3,
        price: 131.67,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 78,
        serviceID: 34,
        name: '21539- Muffler',
        description: 'hardware, lubricants, anti-squeal compound, roloc discs',
        core: 3,
        quantity: 3,
        price: 34.38,
        type: 'Warranty Claim',
        select: false
      }
    ]
  },
  {
    cardName: 'Inspection & Additional Time',
    id: 35,
    templateID: 27,
    name: 'Inspect entire vehicle condition',
    description:
      'Overall vehicle condition inspection.   We do this inspection so we are able to give you an exact cost of all repairs needed to get your vehicle in like new condition.   We will also prioritize and give you a time frame on when each of the repairs need to be done.',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 1.5,
    averageTime: 2.2,
    used: 24,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: []
  },
  {
    cardName: 'Oil Change',
    id: 36,
    templateID: 28,
    name: 'Replace engine oil and filter, inspect vehicle',
    description: 'Maintenance service/Change engine oil and filter.  Reset oil life indicator if equipped - car/minivan/SUV',
    hours: 1.2, // REMOVE / old value
    estimatedTime: 0.7,
    averageTime: 2.2,
    used: 24,
    warrantyType: 'off',
    warranty: {
      time: 0,
      range: 0
    },
    select: false,
    parts: [
      {
        id: 79,
        serviceID: 36,
        name: 'R84047 Oil filter',
        description: 'anti-squeal compound, roloc discs',
        core: 0,
        quantity: 1,
        price: 12.35,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 80,
        serviceID: 36,
        name: '0w20 Full Synthetic oil',
        description: 'Front brake rotors',
        core: 0,
        quantity: 4.5,
        price: 15.95,
        type: 'Warranty Claim',
        select: false
      },
      {
        id: 81,
        serviceID: 36,
        name: 'Environmental Charge (waste, oils, fluids and filter disposal, oil separator maintenance) (#ENV)',
        description: 'per axle',
        core: 0,
        quantity: 1,
        price: 4.5,
        type: 'Warranty Claim',
        select: false
      }
    ]
  }
]
// const partsKitsList = [
//   [
//     {
//       id: 1,
//       serviceID: 1,
//       partsKitID: 1,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 108.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 2,
//       serviceID: 1,
//       partsKitID: 1,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 148,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 3,
//       serviceID: 1,
//       partsKitID: 2,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 12.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 4,
//       serviceID: 1,
//       partsKitID: 2,
//       quantity: 5,
//       name: 'Full Synthetic Oil',
//       price: 10,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 5,
//       serviceID: 1,
//       partsKitID: 2,
//       quantity: 15,
//       name: 'Full Synthetic Oil',
//       price: 2.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 6,
//       serviceID: 2,
//       partsKitID: 3,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 108.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 7,
//       serviceID: 2,
//       partsKitID: 3,
//       quantity: 2,
//       name: 'Full Synthetic Oil',
//       price: 148,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 8,
//       serviceID: 2,
//       partsKitID: 3,
//       quantity: 7,
//       name: 'Full Synthetic Oil',
//       price: 12.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 9,
//       serviceID: 2,
//       partsKitID: 3,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 12.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 10,
//       serviceID: 3,
//       partsKitID: 4,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 108.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 11,
//       serviceID: 3,
//       partsKitID: 4,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 148,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 12,
//       serviceID: 3,
//       partsKitID: 5,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 148,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 13,
//       serviceID: 3,
//       partsKitID: 5,
//       quantity: 4,
//       name: 'Full Synthetic Oil',
//       price: 73,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 14,
//       serviceID: 3,
//       partsKitID: 5,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 18,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 15,
//       serviceID: 7,
//       partsKitID: 6,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 108.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 16,
//       serviceID: 7,
//       partsKitID: 6,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 148,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 17,
//       serviceID: 7,
//       partsKitID: 6,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 12.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 18,
//       serviceID: 7,
//       partsKitID: 6,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 12.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 18,
//       serviceID: 7,
//       partsKitID: 6,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 8,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 20,
//       serviceID: 9,
//       partsKitID: 7,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 108.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 21,
//       serviceID: 9,
//       partsKitID: 7,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 148,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 22,
//       serviceID: 9,
//       partsKitID: 8,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 12.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 23,
//       serviceID: 9,
//       partsKitID: 8,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 11,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 24,
//       serviceID: 9,
//       partsKitID: 8,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 8,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],

//   [
//     {
//       id: 25,
//       serviceID: 10,
//       partsKitID: 9,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 10.3,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 26,
//       serviceID: 10,
//       partsKitID: 9,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 12.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 27,
//       serviceID: 10,
//       partsKitID: 9,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 13.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 28,
//       serviceID: 10,
//       partsKitID: 9,
//       quantity: 9,
//       name: 'Full Synthetic Oil',
//       price: 8,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 29,
//       serviceID: 12,
//       partsKitID: 10,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 108.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 30,
//       serviceID: 12,
//       partsKitID: 10,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 148,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 31,
//       serviceID: 12,
//       partsKitID: 10,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 12.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 32,
//       serviceID: 13,
//       partsKitID: 11,
//       quantity: 7,
//       name: 'Full Synthetic Oil',
//       price: 108.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 33,
//       serviceID: 13,
//       partsKitID: 11,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 148,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],

//   [
//     {
//       id: 34,
//       serviceID: 13,
//       partsKitID: 12,
//       quantity: 6,
//       name: 'Full Synthetic Oil',
//       price: 8,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 35,
//       serviceID: 13,
//       partsKitID: 12,
//       quantity: 1,
//       name: 'Full Synthetic Oil',
//       price: 90,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 36,
//       serviceID: 13,
//       partsKitID: 12,
//       quantity: 5,
//       name: 'Full Synthetic Oil',
//       price: 13,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 37,
//       serviceID: 14,
//       partsKitID: 13,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 108.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 38,
//       serviceID: 14,
//       partsKitID: 13,
//       quantity: 6,
//       name: 'Full Synthetic Oil',
//       price: 18,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 39,
//       serviceID: 14,
//       partsKitID: 13,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 12.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 40,
//       serviceID: 14,
//       partsKitID: 13,
//       quantity: 1,
//       name: 'Full Synthetic Oil',
//       price: 19.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 41,
//       serviceID: 15,
//       partsKitID: 14,
//       quantity: 1,
//       name: 'Full Synthetic Oil',
//       price: 64,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 42,
//       serviceID: 15,
//       partsKitID: 14,
//       quantity: 4,
//       name: 'Full Synthetic Oil',
//       price: 12,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 43,
//       serviceID: 15,
//       partsKitID: 15,
//       quantity: 4,
//       name: 'Full Synthetic Oil',
//       price: 23,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 44,
//       serviceID: 15,
//       partsKitID: 15,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 12.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 45,
//       serviceID: 15,
//       partsKitID: 15,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 3,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 46,
//       serviceID: 22,
//       partsKitID: 16,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 108.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 47,
//       serviceID: 22,
//       partsKitID: 16,
//       quantity: 2,
//       name: 'Full Synthetic Oil',
//       price: 34,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 48,
//       serviceID: 22,
//       partsKitID: 16,
//       quantity: 12,
//       name: 'Full Synthetic Oil',
//       price: 12.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 49,
//       serviceID: 23,
//       partsKitID: 17,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 76.5,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 50,
//       serviceID: 23,
//       partsKitID: 17,
//       quantity: 23,
//       name: 'Full Synthetic Oil',
//       price: 30,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ],
//   [
//     {
//       id: 51,
//       serviceID: 25,
//       partsKitID: 18,
//       quantity: 10,
//       name: 'Full Synthetic Oil',
//       price: 67.6,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 52,
//       serviceID: 25,
//       partsKitID: 18,
//       quantity: 9,
//       name: 'Full Synthetic Oil',
//       price: 3,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     },
//     {
//       id: 53,
//       serviceID: 25,
//       partsKitID: 18,
//       quantity: 2,
//       name: 'Full Synthetic Oil',
//       price: 34,
//       createdAt: '2022-01-18T10:39:32.000Z'
//     }
//   ]
// ]

const partsKitsList = [
  {
    serviceID: 5,
    id: 1,
    partsList: [
      {
        id: 6,
        serviceID: 5,
        partsKitID: 1,
        quantity: 10,
        name: 'Full Synthetic Oil',
        price: 108.5,
        createdAt: '2022-01-18T10:39:32.000Z'
      },
      {
        id: 7,
        serviceID: 5,
        partsKitID: 1,
        quantity: 2,
        name: 'Full Synthetic Oil',
        price: 148,
        createdAt: '2022-01-18T10:39:32.000Z'
      },
      {
        id: 8,
        serviceID: 5,
        partsKitID: 1,
        quantity: 7,
        name: 'Full Synthetic Oil',
        price: 12.5,
        createdAt: '2022-01-18T10:39:32.000Z'
      },
      {
        id: 9,
        serviceID: 5,
        partsKitID: 1,
        quantity: 12,
        name: 'Full Synthetic Oil',
        price: 12.5,
        createdAt: '2022-01-18T10:39:32.000Z'
      }
    ]
  }
]
const historyList = [
  {
    id: 1,
    templateID: 1,
    name: 'Air Filter Service',
    date: '28 Jun 2022',
    type: 'Warranty Service',
    description:
      'Freeup, clean and lube sliders. Clean rust from brake rotors. This is done to extend the life of the brakes and extend your brake warranty to 3 years/60000km)'
  },
  {
    id: 2,
    templateID: 1,
    name: 'Air Filter Service',
    date: '28 Jun 2022',
    type: 'Warranty Service',
    description:
      'Freeup, clean and lube sliders. Clean rust from brake rotors. This is done to extend the life of the brakes and extend your brake warranty to 3 years/60000km)'
  },
  {
    id: 3,
    templateID: 1,
    name: 'Air Filter Service',
    date: '28 Jun 2022',
    type: 'Warranty Service',
    description:
      'Freeup, clean and lube sliders. Clean rust from brake rotors. This is done to extend the life of the brakes and extend your brake warranty to 3 years/60000km)'
  }
]
export {serviceList, historyList, partsKitsList}

// id 36
// p: 81
