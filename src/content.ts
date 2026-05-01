
export const content = {
  nav: {
    items: [
      { 
        label: 'Home', 
        href: '/',
      },
      { 
        label: 'About', 
        href: '/about',
        dropdown: [
          { label: 'Who We Are', href: '/about' },
          { label: 'Leadership', href: '#leadership' }
        ]
      },
      { 
        label: 'Capabilities', 
        href: '/capabilities',
        dropdown: [
          { label: 'Overview', href: '/capabilities' },
          { label: 'Greenfield Development', href: '/capabilities#greenfield' },
          { label: 'Production Optimization', href: '/capabilities#optimization' },
          { label: 'Recovery Enhancement', href: '/capabilities#recovery' }
        ]
      },
      { 
        label: 'Approach', 
        href: '/approach',
        dropdown: [
          { label: 'Direct-to-Asset Execution', href: '/approach#direct-to-asset' },
          { label: 'HSE & Local Capability', href: '/approach#hse-capability' },
          { label: 'Commercial Alignment', href: '/approach#commercial-alignment' }
        ]
      },
      { 
        label: 'Stakeholders', 
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
  capabilitiesSection: {
    header: 'We Drive Production Growth Across the Life of the Asset',
    items: [
      {
        title: 'Greenfield Development',
        description: 'Accelerate projects to first oil with American-grade engineering',
        image: 'https://lh3.googleusercontent.com/d/1_GyXnu2HEka9vngDoMENqUPlhI6FAzPG',
        link: '/capabilities#greenfield'
      },
      {
        title: 'Production Optimization',
        description: 'Increase asset output through field-tested U.S. methodologies.',
        image: 'https://lh3.googleusercontent.com/d/157mQwSpVUBtsUDE_R3b70yL_HNz19Ahq',
        link: '/capabilities#optimization'
      },
      {
        title: 'Recovery Enhancement',
        description: 'Deploy specialized technology and engineering to reactivate aged assets',
        image: 'https://lh3.googleusercontent.com/d/1pQYi9RVfQ27ydNyea2cfV_DqqoAIZaZ_',
        link: '/capabilities#recovery'
      }
    ]
  },
  whereWeDoIt: {
    header: 'In the Places Where Proven Execution Matters Most',
    message: 'When projects stall, output underperforms, or standard approaches fall short, Freedom First brings U.S. expertise to unlock energy potential.',
    cta: 'Stakeholders',
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
    ctaPrimaryLink: '/approach',
    ctaSecondary: 'See Our Latest News',
    ctaSecondaryLink: '#insights'
  },
  footer: {
    navigate: {
      title: 'Navigate',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Approach', href: '/approach' },
        { label: 'Stakeholders', href: '/#partnerships' },
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
  },
  about: {
    hero: {
      title: 'A Technical Production Partner Built for the Field.',
      image: 'https://images.unsplash.com/photo-1581094120527-130f9a947523?q=80&w=2000&auto=format&fit=crop'
    },
    content: {
      title: 'Our Foundation',
      paragraphs: [
        "Freedom First was founded on a straightforward premise: the world’s most critical energy assets shouldn't underperform simply because the environment is difficult or traditional methods fall short.",
        "Our foundation was built during the U.S. unconventional energy revolution. Leveraging decades of hands-on experience in challenging regions like the Permian and Barnett shales, our leadership team helped pioneer the agile, high-efficiency methodologies that transformed American energy production.",
        "We recognize international markets faced with mature fields and complex operating conditions are often underserved by slow-moving industry giants. Freedom First was built to bridge that gap. We bring field-proven American engineering directly to the asset, planning around risk and removing operational guesswork to get stalled production moving again.",
        "We do not just extract value; we build lasting capability. Our mandate is to establish a true win-win model: working side-by-side with host nations to safely achieve their production goals while upskilling the local workforce to sustain that success for the long term."
      ]
    },
    principles: {
      header: 'Guided by a Mandate to Execute, Optimize, and Upskill',
      vision: {
        title: 'Our Vision',
        text: 'To see resource-rich nations achieve true economic self-sufficiency by having the technical capability and infrastructure to fully control, operate, and maximize their own energy potential.'
      },
      mission: {
        title: 'Our Mission',
        text: 'To deliver field-proven American engineering directly to the asset. We bypass hurdles to accelerate production, optimize existing fields, and build local workforce capacity for a resilient, independent energy sector.'
      },
      principles: {
        title: 'Our Principles',
        intro: 'We reject the cycle of external dependency by focusing strictly on technical delivery and capability building. Our work is guided by three core tenets:',
        items: [
          {
            label: 'Execute with Discipline',
            text: 'We remove operational guesswork by deploying tried and tested methodologies that ensure safe, reliable delivery in complex environments.'
          },
          {
            label: 'Optimize the Asset',
            text: 'We align our success directly with the host country’s priorities, maximizing output to achieve national production goals.'
          },
          {
            label: 'Upskill the Workforce',
            text: 'We do not just extract value; we ensure every project drives true knowledge transfer to empower the people who operate the assets.'
          }
        ]
      }
    },
    leadership: {
      header: 'Led by People Who Have Raised Production at Scale',
      message: 'Freedom First is led by operators, engineers, and project leaders who have built, scaled, optimized, and recovered hydrocarbon assets across major markets.',
      members: [
        {
          name: 'Ryan Manicom',
          role: 'President & CEO',
          summary: 'Global executive with business development and operational leadership experience across emerging energy markets.',
          bullets: [
            'Led business development and operations across Papua New Guinea, Myanmar, Iraq, and the U.S.',
            'Experience spanning major energy projects, market entry, and operational growth',
            'Brings a strong commercial vision for deploying U.S. private sector capability in complex markets'
          ],
          expandedBio: 'Ryan Manicom is President & CEO of Freedom First and brings broad international experience across business development, operations, and market expansion in the energy sector. He began his career in business development at Clockwork Solutions, helping expand asset performance management systems from defense into energy. Ryan later held leadership roles with Holloman Corporation and Holloman Energy, working across major projects and emerging markets including Papua New Guinea and Myanmar. He also served as Vice President of Orion Gas Processors, where he oversaw operations in Iraq and supported efforts to develop practical midstream solutions for flare mitigation and gas gathering. At Freedom First, Ryan brings the commercial insight, global operating perspective, and private sector-driven mindset needed to advance energy projects in challenging environments.'
        },
        {
          name: 'Bryce Harrell',
          role: 'Chief Operating Officer',
          summary: '30+ years leading energy projects and operations across the U.S. and international markets.',
          bullets: [
            'Rose from Job Superintendent to EVP & COO at Holloman Corporation',
            'Led operations and international energy ventures across multiple markets',
            'Deep experience in construction, infrastructure, and project execution'
          ],
          expandedBio: 'Bryce Harrell is a senior energy executive with more than three decades of experience across project execution, operations, and international energy development. He began his career at Holloman Corporation, rising from Job Superintendent to Executive Vice President & COO — a progression that reflects deep operational knowledge built through firsthand experience. Over the course of his career, Bryce has held leadership roles across construction, international operations, and energy infrastructure, including positions with Cisco Centerstream, C&H Laitepo PNG, Pilot Energy Solutions, C&H Global Construction and Equipment Leasing, and Orion Gas Processors. At Freedom First, he brings the leadership, field understanding, and execution focus required to deliver in demanding operating environments.'
        },
        {
          name: 'Phillip Campbell',
          role: 'Director of Energy Services',
          summary: 'Engineering and project delivery leader with experience across complex well programs, performance optimization, and integrated oil and gas operations.',
          bullets: [
            'Delivered 20 single and multilateral wells as principal engineer and 8 as lead engineer',
            'Oversaw 48 work-over wells in South Ghawar with strong KPI and AFE discipline',
            'Applied performance optimization and drill bit design across hundreds of wells in the U.S. and Middle East'
          ],
          expandedBio: 'Phillip Campbell is Director of Energy Services at Freedom First and brings broad experience across well engineering, project delivery, and operational performance in the oil and gas sector. He built his career through technical and project leadership roles, including progression at Halliburton from Associate Technical Professional to Project Manager. Over the course of his career, Phillip has delivered 20 single and multilateral wells as principal engineer and 8 additional wells as lead engineer, overseeing both program and operational execution. He also led performance optimization work on 48 work-over wells in South Ghawar, supporting strong adherence to AFE and KPI targets through disciplined delivery and after-action review. His experience also includes project management support for a major integrated offshore project in UAE waters and engineering optimization work across hundreds of wells in Texas, Oklahoma, and Arkansas. At Freedom First, he brings technical depth, execution discipline, and performance-focused thinking to complex operating environments.'
        },
        {
          name: 'Jim Govenlock',
          role: 'Director of Upstream Operations',
          summary: 'Upstream operations leader with 20+ years of experience across drilling, completions, hydraulic fracturing, and asset optimization.',
          bullets: [
            'Experience across 1,000+ wells, onshore and offshore',
            'Led major drilling and operations programs with budgets from $200M to $1B',
            'Improved performance by cutting cycle times from 100+ days to 20 and reducing well costs by up to 44%'
          ],
          expandedBio: 'Jim Govenlock is Director of Upstream Operations at Freedom First and brings more than 20 years of experience across drilling, completions, hydraulic fracturing, reservoir-related operations, and asset optimization. His career includes leadership roles across major U.S. producing regions, including the Marcellus, Barnett, and Permian, where he has helped deliver strong production outcomes through technical discipline and operational execution. Across more than 1,000 wells — onshore and offshore, vertical and horizontal, including HTHP and high CO₂/H₂S environments — Jim has led large-scale drilling and operations programs with budgets ranging from $200 million to $1 billion. His track record includes cutting cycle times from more than 100 days to 20, reducing well costs by up to 44%, and driving performance improvements through Kaizen, KPI management, process automation, and integrated team leadership. He also brings strong safety and regulatory credibility, having advised the EPA and state agencies on hydraulic fracturing and wellbore integrity. At Freedom First, Jim adds deep upstream operating experience, technical rigor, and execution leadership for complex hydrocarbon projects.'
        }
      ]
    },
    dataStrip: {
      header: 'Defined by a Track Record of Field Execution.',
      stats: [
        { label: 'Wells Managed', value: '1,000+', sublabel: '(Onshore & Offshore)' },
        { label: 'Peak Production Achieved', value: '1 BSCFD', sublabel: '(Barnett Shale)' },
        { label: 'Project Budgets Executed', value: '$1B+', sublabel: 'Successfully managed' }
      ]
    },
    advisors: {
      header: 'Backed by Experienced Strategic Advisors',
      members: [
        {
          name: 'Erik Prince',
          role: 'Chairman',
          summary: 'Erik brings extensive experience in logistics, risk management, and execution in the world’s most demanding environments. He leverages a deep background in frontier operations to help Freedom First safely navigate and manage supply chains in logistically challenging environments.',
          expandedBio: 'A former Navy SEAL, Erik later founded Blackwater USA and Presidential Airways—building organizations uniquely capable of sustaining complex logistical and aviation operations in austere and high-risk regions. Today, as the founder of Frontier Resource Group, he applies his expertise in capital allocation and infrastructure to structure, fund, and execute complex natural resource projects globally.'
        },
        {
          name: 'Ted Hogan',
          role: 'Vice Chairman',
          summary: 'Ted brings decades of operational and commercial growth experience within the oilfield services sector. He co-founded Light Tower Rentals (LTR) in 1994, scaling the equipment business into a national organization. Following strategic institutional partnerships and a merger, LTR became Gravity Oilfield Services, where Ted transitioned to Vice Chairman.',
          expandedBio: 'His expertise lies in scaling industrial equipment operations, structuring institutional investments, and maintaining rigorous service delivery across the energy sector.'
        },
        {
          name: 'Colby Fuser',
          role: 'Advisor',
          summary: 'Colby brings over 20 years of executive and operational leadership across the global oil and gas industry. During his tenure at Halliburton Energy Services, he managed large-scale operations as Regional Vice President for the Asia Pacific Region and held senior execution roles across North Africa and the Middle East.',
          expandedBio: 'He currently serves as President and CEO of E3 Company following its successful private equity acquisition. Colby provides Freedom First with deep expertise in international field operations, M&A integration, and disciplined safety standards.'
        },
        {
          name: 'Richard Anderson',
          role: 'Advisor',
          summary: 'Richard is an energy executive and certified public accountant with extensive experience in international exploration and financial governance. He recently served as CEO of Coastline Exploration, leading offshore oil and gas operations in Somalia.',
          expandedBio: 'His track record includes serving as Chief Financial Officer for Eurasia Drilling Company Limited and holding directorships at major global operators including Transocean Ltd. and Vanguard Natural Resources. Richard brings critical financial rigor, capital discipline, and public-market governance experience to Freedom First’s international operations.'
        }
      ]
    },
    ceoMessage: {
      header: 'CEO Message',
      subheader: 'From the Permian Basin to Emerging Markets.',
      quote: "“Freedom First has long been a vision to bridge the gaps in the development of emerging markets, with American ingenuity. With a focus on energy, we aim to harness the experience and lessons learned from the Permian Basin. The rapid growth and technical innovation of this part of Texas is unprecedented and embodies the moral values Freedom First aims to lead globally. Our team is the best of the best in every facet of energy development, all with a shared vision of investing directly into new markets, educating the local workforce and empowering the next generation of private sector leaders.”",
      author: 'Ryan Manicom',
      authorTitle: 'President/CEO'
    },
    finalCta: {
      items: [
        { label: 'Explore Our Capabilities', href: '/capabilities' },
        { label: 'Contact Our Team', href: '#contact' }
      ]
    }
  },
  capabilitiesPage: {
    hero: {
      title: 'Driving Production Across the Life of the Asset.',
        subtitle: 'From accelerating new developments to reactivating mature fields, Freedom First applies proven American engineering to maximize production at every stage of development.',
      },
      sections: [
        {
          id: 'greenfield',
          tag: 'Greenfield Development',
          header: 'Accelerating the Path to First Oil.',
          message: 'Getting a new asset online in a complex environment requires more than capital; it requires aggressive project management and execution discipline. We bypass the bureaucracy that typically slows down international mega-projects. By applying field-tested U.S. engineering methodologies from day one, we remove operational guesswork, control costs, and accelerate your timeline to first production.',
          deliverables: [
            {
              title: 'Hands-On Project Management',
              text: 'Delivering end-to-end planning that keeps surface and subsurface work moving simultaneously.'
            },
            {
              title: 'Direct-to-Asset Supply Chain',
              text: 'Leveraging our U.S. network to procure and deploy necessary personnel and infrastructure without middleman delays.'
            },
            {
              title: 'Risk-Mitigated Execution',
              text: 'Maintaining strict safety and operational standards to prevent costly stand-downs in demanding environments.'
            }
          ]
        },
        {
          id: 'optimization',
          tag: 'Production Optimization',
          header: 'Unlocking Bottlenecks to Maximize Output.',
          message: 'Underperforming assets are often the result of operational bottlenecks and technical limitations. We bring decades of execution discipline and the latest technology directly to the wellhead to get stalled production moving again. Our teams step in to assess the field, identify the friction points holding back your output, and apply hands-on interventions that deliver immediate, verifiable production growth.',
          deliverables: [
            {
              title: 'Targeted Field Interventions',
              text: 'Applying targeted technical solutions to clear wellbore constraints and optimize flow rates.'
            },
            {
              title: 'Facility Debottlenecking',
              text: 'Upgrading and optimizing surface facilities to handle increased production volumes safely.'
            },
            {
              title: 'Continuous Monitoring',
              text: 'Implementing the operational systems and technologies to ensure production gains are sustained over the long term.'
            }
          ]
        },
        {
          id: 'recovery',
          tag: 'Recovery Enhancement',
          header: 'Reactivating and Extending Mature Assets.',
          message: 'We do not walk away when a field matures. We turn demanding, aged environments into reliable, high-performing operations. By deploying specialized technologies and secondary recovery methods, we extend the economic life of your brownfield assets. We specialize in stepping into stalled fields where standard approaches have failed, engineering the right solution to restore output and maximize your reserves.',
          deliverables: [
            {
              title: 'Advanced Artificial Lift',
              text: 'Designing and installing the exact lift mechanisms required to pull remaining reserves from declining wells.'
            },
            {
              title: 'Wellbore Integrity & Reactivation',
              text: 'Repairing and securing aging infrastructure to bring shut-in wells back online safely.'
            },
            {
              title: 'Reservoir Management',
              text: 'Deploying proven secondary recovery techniques, such as waterflooding, to maintain reservoir pressure and sweep efficiency.'
            }
          ]
        }
      ],
      advantage: {
        header: 'The Mid-Market Execution Advantage',
        message: 'We execute at an elite level by serving as your direct gateway to the agile, highly specialized U.S. engineers and technical teams that drove the American unconventional revolution. You get tier-one engineering and field execution delivered directly to the asset without the drag of major-company bureaucracy.'
      },
      cta: {
        header: 'American Engineering, Delivered Direct to the Asset.',
        message: 'See how we bring the capabilities of the U.S. energy sector straight to your toughest fields around the world.',
        primary: { label: 'Explore Our Approach', href: '/approach' },
        secondary: { label: 'Contact Our Team', href: '/#contact' }
      }
    },
    approachPage: {
      hero: {
        title: "Delivering Output in Barrels, Capability for the People and Value for the Nation.",
        subtitle: "We step in as a true production partner. We execute in the most logistically demanding places and build technical systems your workforce can sustain, all backed by a performance-driven commercial model."
      }
    }
  };
