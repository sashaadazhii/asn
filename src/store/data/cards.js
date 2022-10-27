import {cardsList as cards} from './cardTemplates'

function getRandom(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

// const approvalStatuses = ['No Status', 'Approved By Customer', 'Approved By SA', 'Temporary Declined', 'Permanently Declined', 'Approved For Next Visit']
const approvalStatuses = ['No Status']

const cardsList = cards.data
  .filter(c => c.cardRelationType === 'global')
  .map(card => {
    let additional = null
    let archive = null
    if (card.name.toLowerCase().includes('brakes')) {
      additional = [
        {
          title: 'Left - Brakepad Width',
          list: ['5mm', '5.5mm', '6mm', '6.5mm', '7mm', '7.5mm'],
          value: ''
        },
        {
          title: 'Right - Brakepad Width',
          list: ['5mm', '5.5mm', '6mm', '6.5mm', '7mm', '7.5mm'],
          value: ''
        }
      ]
      archive = [
        {
          date: '12 October 2021',
          fields: ['Left - Brakepad Width — 5.5mm', 'Right - Brakepad Width — 5mm']
        },
        {
          date: '12 August 2021',
          fields: ['Left - Brakepad Width — 6mm', 'Right - Brakepad Width — 7mm']
        }
      ]
    }
    return {
      ...card,
      id: card.templateID,
      select: false,
      status: 'No Status',
      service: getRandom(0, 101),
      approvalStatus: approvalStatuses[getRandom(0, 1)],
      advisorApprove: false,
      techs: [
        {
          id: 23483,
          firstName: 'Enzo',
          lastName: 'Ferrari'
        }
      ],
      time: '00:00:24',
      description: 'The cabin air filter in a vehicle helps remove harmful pollutants, including pollen and dust, from the air you breathe within the car.',
      additional,
      archive
    }
  })

// const cardsList = [
//   {
//     uid: '33d68e8e-34cf-42d8-837a-fa7914acd8ce',
//     status: 'No Status',
//     name: 'Cabin Filter',
//     approvalStatus: 'Approved By Service Advisor',
//     service: '48,000 KM / 24 Month',
//     progress: 50,
//     select: false
//   },
//   {
//     uid: '3a069904-033f-46ba-b7b8-95950d7655b3',
//     status: 'No Status',
//     name: 'Cooling System Service',
//     approvalStatus: 'Approved By Customer',
//     service: '48,000 KM / 24 Month',
//     progress: 50,
//     select: false
//   },
//   {
//     uid: '1bca8f37-1057-4972-9e28-481ea4ffaff8',
//     status: 'Good',
//     name: 'Transmission Service',
//     approvalStatus: 'Approved By Service Advisor',
//     service: '48,000 KM / 24 Month',
//     progress: 40,
//     select: false
//   },
//   {
//     uid: 'cef6751c-5b73-462f-8347-3dff591fb4c8',
//     status: 'Recommended',
//     name: 'Power Steering System Service',
//     approvalStatus: 'Temporary Declined',
//     service: '48,000 KM / 24 Month',
//     progress: 50,
//     select: false
//   },
//   {
//     uid: '3b0e5a07-1714-40ee-bcb5-11bdd627f080',
//     status: 'Component Unsafe',
//     name: 'Engine Tuneup/Spark Plugs',
//     approvalStatus: 'Permanently Declined',
//     service: '48,000 KM / 24 Month',
//     progress: 50,
//     select: false
//   },
//   {
//     uid: 'b6c2bfde-63bc-485f-adf9-4e2ce70d5145',
//     status: 'No Status',
//     name: 'Engine Timing Belt',
//     approvalStatus: 'Approved For Next Visit',
//     service: '48,000 KM / 24 Month',
//     progress: 50,
//     select: false
//   },
//   {
//     uid: '46436359-2119-4879-bdc8-3836890ed17a',
//     status: 'No Status',
//     name: 'Direct Injection System Service',
//     approvalStatus: 'No Status',
//     service: '48,000 KM / 24 Month',
//     progress: 50,
//     select: false
//   },
//   {
//     uid: 'f13e6a2e-97e0-4955-b299-a7d2320dacf5',
//     status: 'No Status',
//     name: 'Brake Fluid System Service',
//     approvalStatus: 'No Status',
//     service: '48,000 KM / 24 Month',
//     progress: 50,
//     select: false
//   }
// ]

export {cardsList}
