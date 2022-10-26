/* eslint-disable */

const workOrders = {
  unscheduled: [
    // {
    //   uid: '93ac6c6c-fd68-412f-981c-2788560c3b07',
    //   logicalStatus: 'Not Scheduled'
    // },
    // {
    //   uid: 'ad70154e-ee27-44f7-aeb2-a7014b921021',
    //   logicalStatus: 'Not Scheduled',
    //   customer: {
    //     uid: '2f61a152-9c3f-42e9-823c-e412f348ec10',
    //     name: 'Marcus Howard'
    //   },
    //   vehicle: {
    //     uid: '3d2c4314-da40-4548-9829-8f93dfe8e35c',
    //     make: 'Toyota',
    //     model: 'Tacoma',
    //     year: 2003,
    //     currentOdometer: 145984
    //   }
    // },
    // {
    //   uid: '3b975e7f-c833-47f3-bde7-7aea3cf8a601',
    //   logicalStatus: 'Not Scheduled',
    //   customer: {
    //     uid: '2f61a152-9c3f-42e9-823c-e412f348ec10',
    //     name: 'Marcus Howard'
    //   },
    //   vehicle: {
    //     uid: '3d2c4314-da40-4548-9829-8f93dfe8e35c',
    //     make: 'Toyota',
    //     model: 'Tacoma',
    //     year: 2003,
    //     currentOdometer: 145984
    //   },
    //   vehicleInShop: true,
    //   talkSA: true,
    //   partsOrdered: true
    // }
  ],
  todo: [
    {
      uid: 'fd3f3338-8a8e-4789-acdc-f079bc69ed8f',
      customer: {
        uid: 'ad7608eb-dfd4-40a9-876f-16972a08465f',
        name: 'Scott Sutton'
      },
      vehicle: {
        uid: '24f682c1e-c87d-444d-8ac5-1ffe1a816ae7',
        make: 'Ford',
        model: 'Explorer',
        year: 1992,
        currentOdometer: 260961
      },
      serviceAdvisor: {
        id: 23405,
        name: 'Lewis Boom',
        alias: 'LB'
      },
      technician: {
        id: 23465,
        name: 'Dominic Martin',
        alias: 'DM'
      },
      vehicleInShop: true,
      talkSA: true,
      customerRequests: [
        {
          notes:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
          time: 2
        },
        {
          notes:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
          time: 3
        }
      ],
      scheduling: {
        allTime: '7 h'
      },
      timeComing: new Date('10 Jul 8:00 AM 2022'),
      timePromised: new Date('12 Jul 2:00 PM'),
      // startsAt: new Date('10 Jul 8:00 AM 2022'),
      // endsAt: new Date('12 Jul 2:00 PM'),
      logicalStatus: 'Not Started',
      quotes: {brakePadLeft: '5.2mm', brakePadRight: '6.3mm'},
      technicianNotes:
        'Technician is writing a bunch of notes right here. Technician is writing a bunch of notes right here.Technician is writing a bunch of notes right here.Technician is writing a bunch of notes right here.'
    }
    // {
    //   uid: '9511f190-ade4-4f07-9f1c-04773fb63947',
    //   customer: {
    //     uid: '2f61a152-9c3f-42e9-823c-e412f348ec10',
    //     name: 'Marcus Howard'
    //   },
    //   vehicle: {
    //     uid: '3f8ab673d-1997-497f-be5a-4e7fee3e7d84',
    //     make: 'Mercedes Benz',
    //     model: 'E230',
    //     year: 2013,
    //     currentOdometer: 98974
    //   },
    //   serviceAdvisor: {
    //     id: 23405,
    //     name: 'Lewis Boom',
    //     alias: 'LB'
    //   },
    //   technician: {
    //     id: 23465,
    //     name: 'Dominic Martin',
    //     alias: 'DM'
    //   },
    //   needRide: {
    //     date: '08 Jun 02:50 pm',
    //     notes: 'Lorem ipsum dolor sit amet, consectet'
    //   },
    //   startsAt: new Date('8 Jul 11:00 AM 2022'),
    //   endsAt: new Date('11 Jul 5:00 PM'),
    //   logicalStatus: 'Not Started'
    // },
    // {
    //   uid: '9e4f4875-8976-43c3-9250-7a59ea4ffa0c',
    //   customer: {
    //     uid: 'ad7608eb-dfd4-40a9-876f-16972a08465f',
    //     name: 'Scott Sutton'
    //   },
    //   vehicle: {
    //     uid: '24f682c1e-c87d-444d-8ac5-1ffe1a816ae7',
    //     make: 'Ford',
    //     model: 'Explorer',
    //     year: 1992,
    //     currentOdometer: 260961
    //   },
    //   serviceAdvisor: {
    //     id: 23405,
    //     name: 'Lewis Boom',
    //     alias: 'LB'
    //   },
    //   technician: {
    //     id: 23465,
    //     name: 'Dominic Martin',
    //     alias: 'DM'
    //   },
    //   talkSA: true,
    //   customerRequests: [
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 2
    //     },
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 3
    //     },
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 1
    //     }
    //   ],
    //   scheduling: {
    //     allTime: '12 h'
    //   },
    //   startsAt: new Date('14 Jul 11:00 AM 2022'),
    //   endsAt: new Date('16 Jul 5:00 PM'),
    //   logicalStatus: 'Not Started'
    // }
  ],
  inProgress: [
    // {
    //   uid: '640f2f0e-c431-4285-8498-d2a73aa3930d',
    //   customer: {
    //     uid: '2f61a152-9c3f-42e9-823c-e412f348ec18',
    //     name: 'Tony Stark'
    //   },
    //   vehicle: {
    //     uid: '30b68f26-f050-4b26-b390-bca6743f9a6e',
    //     make: 'Audi',
    //     model: 'e-tron GT',
    //     year: 2022,
    //     status: 'in-shop',
    //     currentOdometer: 2000
    //   },
    //   serviceAdvisor: {
    //     id: 23490,
    //     name: 'Emmanuel Macron',
    //     alias: 'EM'
    //   },
    //   technician: {
    //     id: 23483,
    //     name: 'Enzo Ferrari',
    //     alias: 'EF'
    //   },
    //   startsAt: new Date('8 Jul 11:00 AM 2022'),
    //   endsAt: new Date('11 Jul 5:00 PM'),
    //   logicalStatus: 'In Progress',
    //   customStatus: {
    //     uid: 'f7fbddbe-1be2-483d-a05c-9e23e34b33b0',
    //     name: 'Inspection Report',
    //     color: '#F9B507'
    //   },
    //   notes: [
    //     {
    //       author: 'Maynard Bauman',
    //       alias: 'MB',
    //       date: '14:53 23 Jun 2022',
    //       pin: false,
    //       text: "Call her on her cellphone but keep trying until she answers because she can't get messages."
    //     },
    //     {
    //       author: 'Maynard Bauman',
    //       alias: 'MB',
    //       date: '14:53 23 Jun 2022',
    //       pin: false,
    //       text: "Call her on her cellphone but keep trying until she answers because she can't get messages."
    //     }
    //   ],
    //   vehicleInShop: true,
    //   talkSA: true,
    //   partsOrdered: true,
    //   courtesyVehicle: {
    //     date: {start: new Date('8 Jul 11:00 AM 2022'), end: new Date('11 Jul 5:00 PM 2022')},
    //     notes: 'lorem ipsum dolor sit amet, consectetuer adipiscing ',
    //     vehicle: 'Cupra Formentor'
    //   },
    //   needRide: {
    //     date: new Date('8 Jul 5:00 PM'),
    //     notes: 'Lorem ipsum dolor sit amet, consectet'
    //   },
    //   customerRequests: [
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 2
    //     },
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 3
    //     },
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 2
    //     },
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 1
    //     }
    //   ],
    //   scheduling: {
    //     allTime: '5 h 27 min',
    //     spendedTime: '3 h 10 min',
    //     percent: 56
    //   }
    // },
    // {
    //   uid: '640f2f0e-c431-4285-8498-d2a73aa3930d',
    //   customer: {
    //     uid: 'ad7608eb-dfd4-40a9-876f-16972a08465f',
    //     name: 'Scott Sutton'
    //   },
    //   vehicle: {
    //     uid: '24f682c1e-c87d-444d-8ac5-1ffe1a816ae7',
    //     make: 'Ford',
    //     model: 'Explorer',
    //     year: 1992,
    //     currentOdometer: 260961
    //   },
    //   serviceAdvisor: {
    //     id: 23405,
    //     name: 'Lewis Boom',
    //     alias: 'LB'
    //   },
    //   technician: {
    //     id: 23465,
    //     name: 'Dominic Martin',
    //     alias: 'DM'
    //   },
    //   startsAt: new Date('8 Jul 11:00 AM 2022'),
    //   endsAt: new Date('11 Jul 5:00 PM'),
    //   logicalStatus: 'In Progress',
    //   customStatus: {
    //     uid: 'f7fbddbe-1be2-483d-a05c-9e23e34b33b0',
    //     name: 'Inspection Report',
    //     color: '#F9B507'
    //   },
    //   notes: [
    //     {
    //       author: 'Maynard Bauman',
    //       alias: 'MB',
    //       date: '14:53 23 Jun 2022',
    //       pin: false,
    //       text: "Call her on her cellphone but keep trying until she answers because she can't get messages."
    //     },
    //     {
    //       author: 'Maynard Bauman',
    //       alias: 'MB',
    //       date: '14:53 23 Jun 2022',
    //       pin: false,
    //       text: "Call her on her cellphone but keep trying until she answers because she can't get messages."
    //     }
    //   ],
    //   vehicleInShop: true,
    //   talkSA: true,
    //   partsOrdered: true,
    //   courtesyVehicle: {
    //     date: {start: '10 Jul 2022', end: '17 Jul 2022'},
    //     notes: 'lorem ipsum dolor sit amet, consectetuer adipiscing ',
    //     vehicle: 'Cupra Formentor'
    //   },
    //   needRide: {
    //     date: '08 Jun 02:50 pm 2022',
    //     notes: 'Lorem ipsum dolor sit amet, consectet'
    //   },
    //   customerRequests: [
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 2
    //     },
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 1
    //     }
    //   ],
    //   scheduling: {
    //     allTime: '5 h',
    //     spendedTime: '5 h 30 min',
    //     percent: 110
    //   }
    // }
  ],
  done: [
    // {
    //   uid: '82ecf812-ff45-4b49-9d9f-9cdf0a80805b',
    //   customer: {
    //     uid: '2f61a152-9c3f-42e9-823c-e412f348ec18',
    //     name: 'Tony Stark',
    //     firstName: 'Tony',
    //     lastName: 'Stark',
    //     cellPhones: ['1234567890']
    //   },
    //   vehicle: {
    //     uid: '30b68f26-f050-4b26-b390-bca6743f9a6e',
    //     make: 'Audi',
    //     model: 'e-tron GT',
    //     year: 2022,
    //     status: 'in-shop',
    //     currentOdometer: 2000
    //   },
    //   serviceAdvisor: {
    //     id: 23490,
    //     name: 'Emmanuel Macron',
    //     alias: 'EM'
    //   },
    //   technician: {
    //     id: 23483,
    //     name: 'Enzo Ferrari',
    //     alias: 'EF'
    //   },
    //   startsAt: new Date('8 Jul 11:00 AM 2022'),
    //   endsAt: new Date('11 Jul 5:00 PM'),
    //   logicalStatus: 'Done',
    //   notes: [
    //     {
    //       author: 'Maynard Bauman',
    //       alias: 'MB',
    //       date: '14:53 23 Jun 2022',
    //       pin: false,
    //       text: "Call her on her cellphone but keep trying until she answers because she can't get messages."
    //     },
    //     {
    //       author: 'Maynard Bauman',
    //       alias: 'MB',
    //       date: '14:53 23 Jun 2022',
    //       pin: false,
    //       text: "Call her on her cellphone but keep trying until she answers because she can't get messages."
    //     }
    //   ],
    //   vehicleInShop: true,
    //   talkSA: true,
    //   partsOrdered: true,
    //   courtesyVehicle: {
    //     date: {start: new Date('8 Jul 11:00 AM 2022'), end: new Date('11 Jul 5:00 PM 2022')},
    //     notes: 'lorem ipsum dolor sit amet, consectetuer adipiscing ',
    //     vehicle: 'Cupra Formentor'
    //   },
    //   needRide: {
    //     date: new Date('8 Jul 5:00 PM'),
    //     notes: 'Lorem ipsum dolor sit amet, consectet'
    //   },
    //   customerRequests: [
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 2
    //     },
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 3
    //     },
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 2
    //     },
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 1
    //     }
    //   ],
    //   scheduling: {
    //     allTime: '5 h 27 min',
    //     spendedTime: '3 h 10 min',
    //     percent: 56
    //   }
    // },
    // {
    //   uid: 'f955ee9b-9053-4ebd-bf87-c1354821e1ba',
    //   customer: {
    //     uid: 'ad7608eb-dfd4-40a9-876f-16972a08465f',
    //     name: 'Scott Sutton'
    //   },
    //   vehicle: {
    //     uid: '24f682c1e-c87d-444d-8ac5-1ffe1a816ae7',
    //     make: 'Ford',
    //     model: 'Explorer',
    //     year: 1992,
    //     currentOdometer: 260961
    //   },
    //   serviceAdvisor: {
    //     id: 23405,
    //     name: 'Lewis Boom',
    //     alias: 'LB'
    //   },
    //   technician: {
    //     id: 23465,
    //     name: 'Dominic Martin',
    //     alias: 'DM'
    //   },
    //   startsAt: new Date('8 Jul 11:00 AM 2022'),
    //   endsAt: new Date('11 Jul 5:00 PM'),
    //   logicalStatus: 'Done',
    //   notes: [
    //     {
    //       author: 'Maynard Bauman',
    //       alias: 'MB',
    //       date: '14:53 23 Jun 2022',
    //       pin: false,
    //       text: "Call her on her cellphone but keep trying until she answers because she can't get messages."
    //     },
    //     {
    //       author: 'Maynard Bauman',
    //       alias: 'MB',
    //       date: '14:53 23 Jun 2022',
    //       pin: false,
    //       text: "Call her on her cellphone but keep trying until she answers because she can't get messages."
    //     }
    //   ],
    //   vehicleInShop: true,
    //   talkSA: true,
    //   partsOrdered: true,
    //   customerRequests: [
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 2
    //     },
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 1
    //     }
    //   ],
    //   scheduling: {
    //     allTime: '5 h',
    //     spendedTime: '5 h 30 min',
    //     percent: 110
    //   }
    // },
    // {
    //   uid: 'f2c3e480-4239-4460-b25a-e0f35217ef6f',
    //   customer: {
    //     uid: 'ad7608eb-dfd4-40a9-876f-16972a08465f',
    //     name: 'Scott Sutton'
    //   },
    //   vehicle: {
    //     uid: '24f682c1e-c87d-444d-8ac5-1ffe1a816ae7',
    //     make: 'Ford',
    //     model: 'Explorer',
    //     year: 1992,
    //     currentOdometer: 260961
    //   },
    //   serviceAdvisor: {
    //     id: 23405,
    //     name: 'Lewis Boom',
    //     alias: 'LB'
    //   },
    //   technician: {
    //     id: 23465,
    //     name: 'Dominic Martin',
    //     alias: 'DM'
    //   },
    //   startsAt: new Date('8 Jul 11:00 AM 2022'),
    //   endsAt: new Date('11 Jul 5:00 PM'),
    //   logicalStatus: 'Done',
    //   notes: [
    //     {
    //       author: 'Maynard Bauman',
    //       alias: 'MB',
    //       date: '14:53 23 Jun 2022',
    //       pin: false,
    //       text: "Call her on her cellphone but keep trying until she answers because she can't get messages."
    //     },
    //     {
    //       author: 'Maynard Bauman',
    //       alias: 'MB',
    //       date: '14:53 23 Jun 2022',
    //       pin: false,
    //       text: "Call her on her cellphone but keep trying until she answers because she can't get messages."
    //     }
    //   ],
    //   vehicleInShop: true,
    //   talkSA: true,
    //   customerRequests: [
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 2
    //     },
    //     {
    //       notes:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a libero vestibulum, ornare urna nec, tincidunt sapien. Integer lobortis fringilla pretium. Curabitur quis risus tellus. Donec sit amet efficitur ipsum, at luctus justo. Nunc vestibulum semper elit. Suspendisse non ipsum nisl. Suspendisse sit amet vulputate erat. ',
    //       time: 1
    //     }
    //   ],
    //   scheduling: {
    //     allTime: '5 h',
    //     spendedTime: '5 h 30 min',
    //     percent: 110
    //   }
    // }
  ]
}
const requests = [
  {
    id: 1,
    // workOrderID: 1,
    status: 'Not Processed',
    techs: [
      {
        id: 23483,
        firstName: 'Enzo',
        lastName: 'Ferrari'
      }
    ],
    cards: [],
    notes:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed',
    estimatedTime: '2h',
    trackedTime: '1h 20min'
  },
  {
    id: 2,
    // workOrderID: 1,
    status: 'Not Processed',
    techs: [
      {
        id: 23483,
        firstName: 'Enzo',
        lastName: 'Ferrari'
      }
    ],
    cards: [],
    notes: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    estimatedTime: '3h',
    trackedTime: '2h'
  },
  {
    id: 3,
    // workOrderID: 1,
    status: 'Not Processed',
    techs: [
      {
        id: 23483,
        firstName: 'Enzo',
        lastName: 'Ferrari'
      }
    ],
    cards: [],
    notes: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    estimatedTime: '3h',
    trackedTime: '2h'
  }
]

export {workOrders, requests}
