
export const content = {
  nav: {
    items: [
      { 
        label: 'Home', 
        href: '#',
      },
      { 
        label: 'About', 
        href: '#about',
        dropdown: [
          { label: 'Who We Are', href: '#who-we-are' },
          { label: 'Leadership', href: '#leadership' }
        ]
      },
      { 
        label: 'Capabilities', 
        href: '#capabilities',
        dropdown: [
          { label: 'Greenfield Development', href: '#greenfield' },
          { label: 'Production Optimization', href: '#optimization' },
          { label: 'Recovery Enhancement', href: '#recovery' }
        ]
      },
      { 
        label: 'How We Work', 
        href: '#how-we-work',
        dropdown: [
          { label: 'Execution & Delivery', href: '#execution' },
          { label: 'Sustainability & HSE', href: '#hse' },
          { label: 'Win Win Model', href: '#win-win' }
        ]
      },
      { 
        label: 'Who We Work With', 
        href: '#partnerships',
        dropdown: [
          { label: 'Operators', href: '#operators' },
          { label: 'Governments', href: '#governments' },
          { label: 'Strategic Partners', href: '#strategic-partners' }
        ]
      },
      { 
        label: 'Insights', 
        href: '#insights'
      }
    ],
    languages: [
      { code: 'EN', label: 'English', active: true },
      { code: 'AR', label: 'Arabic', active: false },
      { code: 'ES', label: 'Spanish', active: false }
    ],
    cta: 'Contact'
  },
  hero: {
    eyebrow: 'FREEDOM FIRST',
    title: 'American Engineering Brought to the Toughest Basins.',
    subhead: 'Freedom First delivers decades of execution discipline directly to the asset, turning demanding environments into reliable, high-performing operations.',
    ctaPrimary: 'Our Capabilities',
    ctaSecondary: 'Talk to Our Team',
    bgImage: 'https://lh3.googleusercontent.com/d/1UB76CW3tFtlerlap900ji6Xa-W1i_usR'
  },
  capabilities: {
    header: 'We Drive Production Growth Across the Life of the Asset',
    items: [
      {
        title: 'Greenfield Development',
        description: 'Accelerate projects to first oil with American-grade engineering',
        image: 'https://lh3.googleusercontent.com/d/1_GyXnu2HEka9vngDoMENqUPlhI6FAzPG',
        link: 'https://freedomfirstcorp.com/capabilities/#greenfield'
      },
      {
        title: 'Production Optimization',
        description: 'Increase asset output through field-tested U.S. methodologies.',
        image: 'https://lh3.googleusercontent.com/d/157mQwSpVUBtsUDE_R3b70yL_HNz19Ahq',
        link: 'https://freedomfirstcorp.com/capabilities/#production'
      },
      {
        title: 'Recovery Enhancement',
        description: 'Deploy specialized technology and engineering to reactivate aged assets',
        image: 'https://lh3.googleusercontent.com/d/1pQYi9RVfQ27ydNyea2cfV_DqqoAIZaZ_',
        link: 'https://freedomfirstcorp.com/capabilities/#recovery'
      }
    ]
  },
  whereWeDoIt: {
    header: 'In the Places Where Proven Execution Matters Most',
    message: 'When projects stall, output underperforms, or standard approaches fall short, Freedom First brings U.S. expertise to unlock energy potential.',
    cta: 'Who We Work With',
    ctaLink: '#partnerships',
    countries: [
      {
        id: 'libya',
        name: 'Libya',
        brief: 'Technical partnership and production enhancement in the Sirte and Murzuq basins, bringing stability and execution discipline to critical assets.',
        coordinates: [17.2283, 26.3351] // Longitude, Latitude
      },
      {
        id: 'venezuela',
        name: 'Venezuela',
        brief: 'Strategic advisory and technical support for mature field reactivation, focusing on heavy oil recovery and infrastructure modernization.',
        coordinates: [-66.5897, 6.4238]
      },
      {
        id: 'somalia',
        name: 'Somalia',
        brief: 'Greenfield exploration support and regulatory advisory, helping establish world-class standards for a developing energy sector.',
        coordinates: [46.1996, 5.1521]
      }
    ]
  },
  advantages: {
    header: 'Built on Technical Depth and Field Agility',
    message: 'Freedom First delivers the project leadership and specialist expertise on the ground to execute with the speed, flexibility, and local readiness needed to keep work moving in difficult environments.',
    items: [
      {
        title: 'American-Tested Expertise',
        description: 'We apply field-tested methods and technical strategies that reduce guesswork, improve performance and deliver on production targets.',
        image: 'https://lh3.googleusercontent.com/d/10uFoO7RFeVJcq1D9KylbceRWE6cCFnwA'
      },
      {
        title: 'Network of Specialists',
        description: 'We tap deep industry networks to bring in proven engineers, and technical specialists from across the U.S. hydrocarbon sector.',
        image: 'https://lh3.googleusercontent.com/d/14HzCHycjhtlnUEFumy4p2jSou_c4FPy1'
      },
      {
        title: 'Agile, Independent Execution',
        description: 'We move without the drag of big-company bureaucracy—able to adjust across technical logistical and commercial realities to deliver results.',
        image: 'https://lh3.googleusercontent.com/d/11x_IkHysI0D49PFbEleZ3KLtwsFSGFrD'
      },
      {
        title: 'Direct Supply Chain Advantage',
        description: 'By working closer to the source, we help reduce value leakage, control cost, and improve project economics across the chain.',
        image: 'https://lh3.googleusercontent.com/d/1W372T5N-DxNgmxaeasULLBN0NBX8g_L6'
      }
    ],
    ctaPrimary: 'Discuss Your Project',
    ctaPrimaryLink: '#contact',
    ctaSecondary: 'Meet Our Team of Experts',
    ctaSecondaryLink: '#leadership'
  },
  partnerships: {
    section1: {
      header: 'We equip emerging markets with the tools to achieve self reliance.',
      message: "The world's most resource-rich markets are too often held back by a lack of investment and technical barriers.\n\nAt Freedom First, we believe these nations should have the tools to develop their own assets, move beyond external aid, and build true economic self-sufficiency."
    },
    section2: {
      header: 'Our approach is rooted in direct collaboration, not just extraction.',
      message: "Through strategic investment and comprehensive training, we return resource value to the people.\n\nWe work side-by-side with local communities to responsibly develop their energy potential—ensuring that today’s production growth builds a self-reliant workforce for the future."
    },
    ctaPrimary: 'Our Approach',
    ctaPrimaryLink: '#how-we-work',
    ctaSecondary: 'See Our Latest News',
    ctaSecondaryLink: '#insights'
  },
  footer: {
    navigate: {
      title: 'Navigate',
      links: [
        { label: 'Company', href: '#about' },
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Approach', href: '#how-we-work' },
        { label: 'Stakeholders', href: '#partnerships' },
        { label: 'Insights', href: '#insights' },
        { label: 'Privacy Policy', href: '#privacy' }
      ]
    },
    contactForm: {
      title: 'Contact Us',
      fields: [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'email', label: 'Email Address', type: 'email' },
        { name: 'company', label: 'Company', type: 'text' },
        { name: 'message', label: 'Message', type: 'textarea' }
      ],
      cta: 'Send Message'
    },
    company: {
      name: 'Freedom First Corp.',
      offices: [
        {
          city: 'The Woodlands, TX',
          address: '2700 Research Forest Dr.\nSuite 105\nThe Woodlands, TX 77381'
        },
        {
          city: 'Edmond, OK',
          address: '2575 Kelley Pointe Pkwy\nSuite 100\nEdmond, OK 73013'
        },
        {
          city: 'Odessa, TX',
          address: '6010 E. Highway 191\nSuite 140\nOdessa, Texas 79762'
        }
      ],
      social: {
        email: 'info@freedomfirstcorp.com',
        linkedin: 'https://www.linkedin.com/company/freedom-first-corp'
      }
    }
  }
};
