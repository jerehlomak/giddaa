import {  
  handshake,
  money,
  scam,
  card,
  world,
  binocular,
  computer,
  home,
  pointer,
  partner1, partner2, partner3, partner4
} from '../assets/'

export const formatPrice = (price) => {
  const nairaAmount = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
  }).format((price / 1))
  return nairaAmount
}

export const options = [
    {
      title: 'Mortgages',
      subTitle: 'the slow turtle',
      description: 'Imagine you want to buy a house, but you don’t have all the money upfront. A mortgage is like a loan from a bank or a lender that helps you buy the house now, and you pay back the loan over time, usually with interest. It’s a way to spread out',
      features: [
        'For budget conscious people without the money to make large payments.',
        'Mostly offered by banks & financial institutions',
        'Typically attracts payment of interest',
        'Payment periods are usually long term (Typically between 10 - 30 years)',
        'Monthly Payments are fixed, meaning it remains the same throughout the payment period. For example, you pay N150,000 in Month 1, you’ll pay N150,000 in Month 70. The payment remains the same over time.'
      ]
    },
    {
      title: 'Payment plans',
      subTitle: 'the gallowing horse',
      description: 'Imagine you’re looking to buy your dream house, but you don’t have all the money saved up. A payment plan is a structured arrangement where you agree to pay for your home over a period of time instead of all at once. It allows you to split the cost into smaller, manageable payments spread out over months, or years until the full amount is paid off. This makes the purchase of your dream home more affordable and accessible by breaking down the total cost into more managable payments, usually monthly.',
      features: [
        'For budget conscious people without the money to make large payments.',
        'Mostly offered by banks & financial institutions',
        'Typically attracts payment of interest',
        'Payment periods are usually long term (Typically between 10 - 30 years)',
        'Monthly Payments are fixed, meaning it remains the same throughout the payment period. For example, you pay N150,000 in Month 1, you’ll pay N150,000 in Month 70. The payment remains the same over time.'
      ]
    },
    {
      title: 'ouright purchase',
      subTitle: 'the swift rabbit',
      description: 'The outright purchase of a house refers to buying a home directly without the need for financing through a mortgage or creation of flexible payment plans by developers. In this scenario, you pay the entire purchase price upfront using your own funds or savings, without relying on a loan from a bank or flexible payment options from developers. This means that once the transaction is complete, the you own the property outright, without any debt or ongoing payments to a lender or property developer.',
      features: [
        'For budget conscious people without the money to.',
        'Mostly offered by banks & financial institutions',
        'Typically attracts payment of interest',
        'Payment periods are usually long term',
        'Monthly Payments are fixed, meaning it remains.'
      ]
    },
  ]

export const reasons = [
  {
    icon: scam,
    title: 'Stay Scam Free!',
    description: 'We partner directly with trusted banks and developers. Your applications are sent straight to them, eliminating the need for agents, close relatives or friends. We connect you directly to the source.'
  },
  {
    icon: home,
    title: 'Streamline Your Search',
    description: 'We simplify your property search by presenting comprehensive information in a visual and easily understandable format, making decision making easier and quicker for you along your journey.'
  },
  {
    icon: pointer,
    title: 'Multiple Purchase Options',
    description: 'We provide you with a diverse range of housing options and flexible financing plans, ensuring you have a wide selection of choices to suit your preferences and current financial situation.'
  },
  {
    icon: card,
    title: 'Pay Online & Track All Payments',
    description: 'Pay online and track every single payment you make. We make your transactions clear as day between you and the partner you purchase from ,be it a property developer or bank.'
  },
  {
    icon: money,
    title: 'Find What You Can Afford',
    description: 'We use affordability tags to visually display properties and financing plans you can afford based on age and income, which could help you simplify your decision-making.'
  },
  {
    icon: computer,
    title: 'Apply Online — in 5 Mins, and Track Your Application.',
    description: 'On Giddaa, we don’t tell you to fill a form and we will get back to you. You can apply for your home 100% online and track your application as it is being processed by the developer or bank.'
  },
  {
    icon: binocular,
    title: 'See It For Yourself — Virtual Viewings',
    description: 'Living abroad? We offer a service that allows you to view the property through a video call. We also send a report of the condition of the property after the viewing. We’re not quite at the VR level yet. 😁'
  },
  {
    icon: world,
    title: 'Manage Terms and Documentation',
    description: 'All terms between you and the developer or bank are managed online. You can view the terms you’ve offered, send revisions, if need be all online. You can also view and manage important documents like offer letters online.'
  },
]

export const works = [
  {
    id: 1,
    title: 'Find Your Dream Home.',
    description: 'Choose from the variety of properties available on the platform. You have various options to select from. From completed properties, off-plan properties, and properties in-construction',
  },
  {
    id: 2,
    title: 'Select A Plan.',
    description: 'Choose the best way YOU want to buy your dream home. We do most of the hardwork by automatically calculating which properties you are able to afford, as long as you put in your correct age and income.',
  },
  {
    id: 3,
    title: 'Book A Viewing',
    description: 'We give you several options to book a viewing for the property. You can view it yourself, with our agent (for a small fee), or use someone you trust, maybe a family member or close friend. Choose a date and time and book your viewing.',
  },
  {
    id: 4,
    title: 'Apply!',
    description: 'After you have booked a viewing and you are satisfied with the viewing, you acknowledge having viewed the property and then proceed to submit the document required by the organzation you are applying to.',
  },
  {
    id: 5,
    title: 'Wait For Application Processing',
    description: 'The partner (Developer or Bank) you applied to will process your application and the submitted documents. You will be notified if your application is accepted or not.',
  },
  {
    id: 6,
    title: 'Accept Terms & Make Payment',
    description: 'If the partner accepts your application, they will submit the terms of your application and an offer letter or a term sheet for you to review. If you accept the terms, you can then proceed to make payment and create a mandate for repayment, if it is a mortgage or payment plan.',
  },
]

export const ourPartners = [
  {
    img: partner1,
    name: 'lanre edun',
    position: 'HEAD OF MARKETING AT BRAINS & HAMMERS',
  },
  {
    img: partner2,
    name: 'lanre edun',
    position: 'HEAD OF MARKETING AT BRAINS & HAMMERS',
  },
  {
    img: partner3,
    name: 'lanre edun',
    position: 'HEAD OF MARKETING AT BRAINS & HAMMERS',
  },
  {
    img: partner4,
    name: 'lanre edun',
    position: 'HEAD OF MARKETING AT BRAINS & HAMMERS',
  },
]

export const partners = {
  item1 : {
    img: partner1,
    name: 'lanre edun',
    position: 'HEAD OF MARKETING AT BRAINS & HAMMERS',
  },
  item2 : {
    img: partner2,
    name: 'lanre edun',
    position: 'HEAD OF MARKETING AT BRAINS & HAMMERS',
  },
  item3 : {
    img: partner3,
    name: 'lanre edun',
    position: 'HEAD OF MARKETING AT BRAINS & HAMMERS',
  },
  // {
  //   img: partner4,
  //   name: 'lanre edun',
  //   position: 'HEAD OF MARKETING AT BRAINS & HAMMERS',
  // },
}

