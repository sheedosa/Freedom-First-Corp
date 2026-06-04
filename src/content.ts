
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
          { label: 'Foundation', href: '/about#who-we-are' },
          { label: 'Leadership', href: '/about#leadership' },
          { label: 'CEO Message', href: '/about#ceomessage' }
        ]
      },
      {
        label: 'Capabilities',
        href: '/capabilities',
        dropdown: [
          { label: 'Upstream', href: '/capabilities#upstream' },
          { label: 'Midstream', href: '/capabilities#midstream' },
          { label: 'Downstream', href: '/capabilities#downstream' },
          { label: 'Asset Protection', href: '/capabilities#asset-protection' },
          { label: 'Energy Trading', href: '/capabilities#energy-trading' }
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
        label: 'Insights',
        href: '/insights'
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
    title: 'Private-Sector Solutions Built for Stability and Growth',
    subhead: 'By combining energy development, infrastructure investment and strategic asset protection, we help build stronger, self-reliant economies.',
    ctaPrimary: 'Our Capabilities',
    bgImage: '/images/hero-bg.jpg'
  },
  capabilitiesSection: {
    header: 'We Drive Production Growth Across the Life of the Asset',
    items: [
      {
        title: 'Upstream',
        description: 'Maximize output from the reservoir to the wellhead with elite U.S. field execution.',
        image: '/images/cap-upstream.jpg',
        link: '/capabilities#upstream'
      },
      {
        title: 'Midstream',
        description: 'Target bottlenecks and deploy high-capacity infrastructure to guarantee continuous hydrocarbon flow.',
        image: '/images/cap-midstream.jpg',
        link: '/capabilities#midstream'
      },
      {
        title: 'Downstream',
        description: 'Lock in absolute facility uptime and maximize refining yields through elite U.S. engineering.',
        image: '/images/cap-downstream.jpg',
        link: '/capabilities#downstream'
      },
      {
        title: 'Asset Protection',
        description: 'Create secure environments that reduce risk, attract investment, and protect critical assets.',
        image: '/images/cap-asset-protection.jpg',
        link: '/capabilities#asset-protection'
      },
      {
        title: 'Energy Trading',
        description: 'Connect physical production directly to high-demand markets and secure maximum commercial returns.',
        image: '/images/cap-trading.jpg',
        link: '/capabilities#energy-trading'
      }
    ]
  },
  whereWeDoIt: {
    header: 'In the Places Where Proven Execution Matters Most',
    message: 'When projects stall, output underperforms, or standard approaches fall short, Freedom First brings U.S. expertise to unlock energy potential.',
    cta: 'Who We Work With',
    ctaLink: '/approach#stakeholders',
    legendLabel: 'Our Operational Footprint',
    countries: [
      {
        id: 'libya',
        name: 'Libya',
        brief: 'Technical partnership and production enhancement, bringing stability and execution discipline to critical assets.',
        coordinates: [17.2283, 26.3351]
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
        brief: 'Greenfield exploration and regulatory advisory, helping establish world-class standards for a developing energy sector.',
        coordinates: [46.1996, 5.1521]
      }
    ]
  },
  advantages: {
    header: 'Built for the Realities of the Field',
    message: 'Freedom First delivers a by, with, and through approach to execute with the speed, flexibility, and local readiness needed to keep work moving in difficult environments.',
    items: [
      {
        title: 'Field-Proven *Field* Expertise',
        description: 'We apply field-tested methods and technical strategies that reduce guesswork, improve performance and deliver on production targets.',
        image: '/images/us-expertise.jpg'
      },
      {
        title: 'Network of Energy Specialists',
        description: 'We tap deep industry networks to bring in proven engineers, and technical specialists from across the U.S. and global hydrocarbon sector.',
        image: '/images/adv-network.jpg'
      },
      {
        title: 'Agile, Independent Execution',
        description: 'We move without the drag of big-company bureaucracy—able to adjust across technical logistical and commercial realities to deliver results.',
        image: '/images/adv-agile.jpg'
      },
      {
        title: 'Direct Supply Chain Advantage',
        description: 'By working closer to the source, we help reduce value leakage, control cost, and improve project economics across the chain.',
        image: '/images/adv-supply.jpg'
      }
    ],
    ctaPrimary: 'Our Capabilities',
    ctaPrimaryLink: '/capabilities',
    ctaSecondary: 'Meet Our Team of Experts',
    ctaSecondaryLink: '/about#leadership'
  },
  homeCta: {
    eyebrow: 'Ready to Move',
    header: 'Unlock the True Value of Your Assets',
    message: 'See how our team diagnoses your constraints, engineers the solutions and gets stalled production moving again.',
    ctaLabel: 'Explore Our Capabilities',
    ctaLink: '/capabilities'
  },
  partnerships: {
    section1: {
      header: 'We equip emerging markets with the tools to achieve self reliance',
      message: "The world's most resource-rich markets are too often held back by a lack of investment and technical barriers.\n\nAt Freedom First, we believe these nations should have the tools to develop their own assets, move beyond external aid, and build true economic self-sufficiency."
    },
    section2: {
      header: 'Our approach is rooted in direct collaboration, not just extraction',
      message: "Through strategic investment and comprehensive training, we return resource value to the people.\n\nWe work side-by-side with host countries to responsibly develop their energy potential—ensuring that today's production growth builds a self-reliant workforce for the future."
    },
    ctaPrimary: 'Our Approach',
    ctaPrimaryLink: '/approach',
    ctaSecondary: 'See Our Latest News',
    ctaSecondaryLink: '/insights'
  },
  footer: {
    navigate: {
      title: 'Navigate',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Approach', href: '/approach' },
        { label: 'Insights', href: '/insights' },
        { label: 'Contact', href: '/contact' },
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
      name: 'Freedom First Global',
      offices: [
        {
          city: 'The Woodlands, TX',
          address: '2700 Research Forest Dr.\nSuite 105\nThe Woodlands, TX 77381'
        },
        {
          city: 'Abu Dhabi, UAE',
          address: '811N, Floor 8, Tamouh Tower,\nTamouh, Al Reem Island, Abu Dhabi\nUnited Arab Emirates'
        }
      ],
      social: {
        email: 'info@freedomfirstglobal.com',
        linkedin: 'https://www.linkedin.com/company/freedom-first-corp',
        facebook: 'https://www.facebook.com/profile.php?id=61560491723699',
        x: '#'
      }
    }
  },
  about: {
    hero: {
      title: 'A Technical Production Partner Built for the Field',
      image: '/images/about-hero.jpg'
    },
    content: {
      title: 'Our Foundation',
      paragraphs: [
        "Freedom First was founded on a simple belief: energy development should strengthen nations, expand economic opportunity, and create lasting stability, not just for governments or investors, but for the people who call those nations home.",
        "Built in Texas, we bring the entrepreneurial spirit, engineering expertise, and execution-driven culture that transformed American energy production to emerging markets around the world. We believe the private sector performs best when guided by accountability, speed, and practical problem-solving, not bureaucracy. And we step in where others have stepped away.",
        "We partner directly with host nations and local operators to restore production, modernize infrastructure, and unlock the full value of critical energy assets. But our work goes beyond the field. We invest in local capability, strengthen energy independence, and build resilient systems designed for long-term growth, because true development means communities standing on their own.",
        "We do not just extract value and walk away. We build systems, develop talent, and create engines of opportunity that let people reclaim ownership of their future. The real shareholders of any resource-rich nation are its people, and that's exactly who we work for.",
        "Our mission is straightforward: help nations convert their natural assets into durable economic strength through trusted partnership, technical excellence, and results that last."
      ]
    },
    principles: {
      header: 'Guided by a Mandate to Execute, Optimize, and Localize Capabilities',
      vision: {
        title: 'Our Vision',
        text: 'To see resource-rich nations achieve true economic self-sufficiency by having the technical capability and infrastructure to fully control, operate, and maximize their own energy potential.'
      },
      mission: {
        title: 'Our Mission',
        text: 'To deliver field-proven capabilities directly to the asset. We bypass hurdles to accelerate production, optimize existing fields, and build local workforce capacity for a resilient, independent energy sector.'
      },
      principles: {
        title: 'Our Principles',
        intro: 'We reject the cycle of external dependency by focusing strictly on delivery and capacity building. Our work is guided by three core principles:',
        items: [
          {
            label: 'Execute with Discipline',
            text: 'We remove operational guesswork by deploying tried and tested methodologies that ensure safe, reliable delivery in complex environments.'
          },
          {
            label: 'Optimize the Asset',
            text: "We align our success directly with the host country's priorities, maximizing output to achieve national production goals."
          },
          {
            label: 'Localize the Workforce',
            text: 'We do not just extract value; we ensure every project drives true knowledge transfer to empower the people who operate the assets.'
          }
        ]
      }
    },
    leadership: {
      members: [
        {
          name: 'Ryan Manicom',
          role: 'Co-Founder, President & CEO',
          paragraphs: [
            'Ryan is the Co-Founder, President & CEO of Freedom First Global, where he leads a diverse portfolio of international business ventures. A graduate of Texas Tech University, he began his career in business development, helping expand advanced asset performance solutions from defense into the energy sector.',
            'He went on to hold leadership roles across global energy markets, including Papua New Guinea, Myanmar, and Iraq. His work has focused on large-scale project development, operational leadership, and innovative approaches to energy infrastructure—most notably pioneering solutions for gas flare mitigation in emerging markets.',
            "Based in Houston, Ryan is a strong advocate for private sector leadership in global development. He is particularly passionate about extending the success and innovation of Texas's energy industry, including the Permian Basin, into high-growth regions around the world.",
            'Through Freedom First Global, Ryan is committed to investing in, educating, and empowering communities—driven by a belief that ingenuity and opportunity exist in every market.'
          ]
        },
        {
          name: 'Erik Prince',
          role: 'Co-Founder',
          paragraphs: [
            "Erik is an American businessman, investor, author, and former U.S. Navy SEAL officer who founded Blackwater, one of the first global private military companies. Under Erik's leadership, Blackwater executed more than USD 2 billion in government security contracts, covering operations in countries globally, such as Iraq, Afghanistan, Bosnia, Israel, Azerbaijan, Japan, Pakistan, and Uzbekistan."
          ],
          bullets: [
            'He is the Co-founder of Freedom First, which invests in energy, agriculture, technology, and infrastructure projects in regions where security, logistics, and investment overlap.',
            'Previously, Erik founded Frontier Resource Group, a private equity firm, and was Chairman of Hong Kong-listed Frontier Service Group until 2021; Frontier focused on the extractive industries in Asia and Africa.',
            "Erik's current security-focused enterprise, Vectus, helps governments with national security issues and assists with funding the security solutions via increasing domestic revenues through the implementation of effective tax and tariff collection plans, inter alia."
          ]
        }
      ]
    },
    dataStrip: {
      header: 'Defined by a track record of execution',
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
          expandedBio: "His track record includes serving as Chief Financial Officer for Eurasia Drilling Company Limited and holding directorships at major global operators including Transocean Ltd. and Vanguard Natural Resources. Richard brings critical financial rigor, capital discipline, and public-market governance experience to Freedom First's international operations."
        }
      ]
    },
    ceoMessage: {
      header: 'CEO Message',
      subheader: 'From the Permian Basin to Emerging Markets',
      quote: "“Freedom First was founded on the belief that American leadership, free enterprise, and strong governance can drive lasting prosperity in emerging markets. Inspired by the strength, innovation, and energy independence of the Permian Basin, we seek to export the proven principles that transformed Texas into a global energy leader.\n\nOur team brings together top experts across every facet of energy development, united by a mission to invest in strategic markets, empower local workforces, and advance the next generation of private-sector leadership. Through strategic investment, operational excellence, and value-driven partnerships, Freedom First is committed to strengthening energy security, economic growth, and long-term stability worldwide.”",
      author: 'Ryan Manicom',
      authorTitle: 'President/CEO'
    },
    finalCta: {
      header: 'Move Stalled Production Forward',
      message: 'See how our team diagnoses your constraints, engineers the solutions and gets stalled production moving again.',
      ctaLabel: 'Explore Our Capabilities',
      ctaLink: '/capabilities'
    }
  },
  capabilitiesPage: {
    hero: {
      title: 'Driving Execution Across the Energy Value Chain',
      subtitle: 'From upstream operations to global market access, we maximize energy asset value at every stage of the lifecycle.'
    },
    subNav: [
      { label: 'Upstream', href: '#upstream' },
      { label: 'Midstream', href: '#midstream' },
      { label: 'Downstream', href: '#downstream' },
      { label: 'Asset Protection', href: '#asset-protection' },
      { label: 'Energy Trading & Logistics', href: '#energy-trading' }
    ],
    sections: [
      {
        id: 'upstream',
        tag: 'Upstream',
        header: 'Delivering Measurable Production Growth',
        message: 'We deliver tier-one U.S. expertise to drive verifiable production growth. From accelerating the path to first oil to reactivating stalled brownfield assets, our specialty is in engineering the solutions required to break operational deadlocks, deploy advanced extraction technologies, and keep the barrels flowing.',
        deliverables: [
          { title: 'Exploration & Subsurface Evaluation', text: 'Delivering detailed geological and seismic assessments to identify viable reserves and model the data required to drive development decisions.' },
          { title: 'Advanced Drilling Services', text: 'Deploying advanced technologies and elite field teams to execute drilling programs that optimize placement, reduce non-productive time, and secure reserves.' },
          { title: 'Workover & Well Optimization', text: 'Executing targeted well interventions ranging from routine maintenance to complex mechanical workovers to restore wellbore integrity and optimize flow performance.' },
          { title: 'Field Operations & Facility Support', text: 'Directing end-to-end field management from commissioning and preventative maintenance to rapid emergency response protocols to ensure asset reliability.' }
        ]
      },
      {
        id: 'midstream',
        tag: 'Midstream',
        header: 'Optimizing the Path from Production to Processing',
        message: 'We build, manage, and scale the critical midstream infrastructure required to move hydrocarbons safely from the wellhead to processing facilities. Through rigorous engineering and precise logistics management, we eliminate supply chain bottlenecks and maximize the flow of resources to processing facilities and end markets.',
        deliverables: [
          { title: 'Infrastructure Development & Support', text: 'Directing the planning, construction, and operational support of pipelines, terminals, and storage facilities to deliver scalable infrastructure built for continuous flow.' },
          { title: 'Transport & Logistics Coordination', text: 'Delivering end-to-end logistics and total operational oversight into and out of complex environments, integrating supply chain management directly with field execution.' },
          { title: 'Storage & Handling Solutions', text: 'Managing complex storage operations to guarantee the secure containment and transfer of energy products to help sustain an uninterrupted market supply.' }
        ]
      },
      {
        id: 'downstream',
        tag: 'Downstream',
        header: 'Maximizing Yield, Uptime, and Market Delivery',
        message: 'We apply tier-one U.S. execution directly to downstream assets to maximize processing yields and lock in reliability of the refinery. We work to turn hydrocarbons into high-value products and manage the final terminal operations to drive a stable flow into the market.',
        deliverables: [
          { title: 'Operational & Technical Support', text: 'Executing targeted technical and operational interventions to maximize refinery yields and increase facility throughput.' },
          { title: 'Asset Integrity & Turnaround Execution', text: 'Directing maintenance and turnaround programs to ensure technical integrity, mitigate operational risk, and eliminate unplanned downtime.' },
          { title: 'Terminal Operations & Final Distribution', text: 'Managing end-to-end terminal logistics and securing the distribution networks to guarantee a stable, uninterrupted flow of market-ready energy products.' }
        ]
      },
      {
        id: 'asset-protection',
        tag: 'Asset Protection',
        header: 'Protecting Critical Assets and Operational Continuity',
        message: 'Energy development and asset protection are fundamental to national growth. As nations expand production and invest in critical infrastructure, securing these assets is essential to protecting revenue, maintaining operational continuity, and attracting long-term investment.',
        deliverables: [
          { title: 'Critical infrastructure security assessments and protection planning' },
          { title: 'Oil, gas, power, and pipeline security programs' },
          { title: 'Protective force training and capability development' },
          { title: 'Security operations and command center advisory services' },
          { title: 'Risk assessment, threat analysis, and crisis response planning' },
          { title: 'Emergency preparedness and business continuity programs' },
          { title: 'Security doctrine, procedures, and workforce development' },
          { title: 'Strategic advisory support for governments and energy operators' }
        ]
      },
      {
        id: 'energy-trading',
        tag: 'Energy Trading & Logistics',
        header: 'Connecting Production to High-Demand Markets',
        message: 'Our energy trading division integrates tier-one logistics with global market access, executing physical trades across crude oil, refined products, LNG, and NGLs. We connect producers directly to industrial end-users, commanding the physical flow of resources to guarantee reliable supply and maximize commercial value across the energy value chain.',
        deliverables: [
          { title: 'Global Trading & Offtake', text: 'Executing physical trading across crude, refined products, and gas liquids. We secure direct offtake and structure supply agreements that connect production straight to high-demand markets.' },
          { title: 'End-to-End Logistics Execution', text: 'Managing the flow of hydrocarbons from the asset to the buyer — from shipping, storage, and delivery coordination — to guarantee reliable global delivery.' },
          { title: 'Commercial Structuring & Monetization', text: 'Managing the full commercial lifecycle, from spot transactions to long-term supply, with the market insight to optimize pricing and position assets for maximum return.' }
        ]
      }
    ],
    advantage: {
      header: 'The U.S. Mid-Market Execution Advantage',
      message: 'We execute at an elite level serving as your gateway to the agile, highly specialized commercial and technical teams that drove the American unconventional revolution.'
    },
    midMarket: [
      {
        title: 'Elite Pedigree',
        description: 'Access the specialized technical teams that drove U.S. hydrocarbon growth.',
        image: '/images/midmarket-1.jpg'
      },
      {
        title: 'Direct-to-Asset Execution',
        description: 'Secure tier-one engineering and field execution straight to the operation.',
        image: '/images/midmarket-2.jpg'
      },
      {
        title: 'Zero Bureaucratic Drag',
        description: 'Bypass the red tape of major companies to accelerate timelines and execute with agility.',
        image: '/images/midmarket-3.jpg'
      }
    ],
    cta: {
      header: 'Permian Basin Experience Delivered Direct to the Asset',
      message: 'See how we bring the capabilities of the Permian Basin straight to your toughest fields around the world.',
      primary: { label: 'Explore Our Approach', href: '/approach' },
      secondary: { label: 'Contact Our Team', href: '/contact' }
    }
  },
  approachPage: {
    hero: {
      title: 'Turning Resources into Economic Freedom and Stability',
      subtitle: 'We step in as a true production partner. We execute in the most logistically demanding places and build technical systems your workforce can sustain, all backed by a performance-driven commercial model.'
    },
    stakeholderTabs: {
      header: 'Partnerships Built to Move Energy Growth Forward',
      message: 'Freedom First works with operators, host nations, and strategic partners to move hydrocarbon projects forward in difficult environments through proven execution and partnership models built for long-term value.',
      tabs: {
        operators: {
          id: 'operators',
          title: 'Operators',
          subtitle: 'Asset Owners and Producers',
          text: 'We work with operators managing mature, legacy, or stalled assets where production is being held back by technical bottlenecks, execution challenges, or commercial constraints.',
          partnership: 'Freedom First brings the engineering, project leadership, and execution model needed to help move difficult projects forward. Where standard contractor models fall short, we step in to break deadlocks, improve field economics, and raise output.',
          points: [
            { title: 'Production-Driven Alignment', text: 'We structure our role around one objective: raising output and improving field economics.' },
            { title: 'Execution Where It Matters', text: 'We take on the operational, logistical, and subsurface challenges that keep production stuck.' },
            { title: 'Performance-Driven Model', text: 'We operate with a model designed to reward production progress, not just activity.' }
          ],
          ctaMsg: 'Bring Proven Execution to Your Toughest Fields',
          ctaText: 'Explore Our Capabilities',
          ctaHref: '/capabilities'
        },
        'host-nations': {
          id: 'host-nations',
          title: 'Host Nations',
          subtitle: 'Sovereigns and National Energy Planners',
          text: 'We work with governments and national energy institutions seeking to increase domestic production, strengthen local capability, and develop energy resources in line with national priorities.',
          partnership: 'Freedom First works side by side with host nations to raise output, build stronger operating capability, and leave behind systems the local workforce can sustain long term.',
          points: [
            { title: 'Aligned with National Priorities', text: 'We structure projects to support production growth, long-term asset value, and broader national goals.' },
            { title: 'Local Workforce Integration', text: 'We work with and develop local talent as part of execution, embedding local teams into the systems and standards established.' },
            { title: 'Strict Standards in the Field', text: 'We apply strong HSE and operational standards to protect people, infrastructure, and continuity of operations.' }
          ],
          ctaMsg: 'Deliver American Engineering Directly to Your Sovereign Assets',
          ctaText: 'Meet the Executive Team',
          ctaHref: '/about#leadership'
        },
        'strategic-partners': {
          id: 'strategic-partners',
          title: 'Strategic Partners',
          subtitle: 'In-Country Support Partners',
          text: 'We work with in-country service companies, supply-chain partners, and infrastructure providers who bring critical local access, operating knowledge, and last-mile execution capability.',
          partnership: 'We lead with specialized project management and direct capital investment that integrates with trusted local partners. We believe the strongest results come from combining technical depth with local capabilities, not working around it.',
          points: [
            { title: 'Field-Level Support', text: 'We work through local infrastructure, supply chains, and operating relationships to reduce delays and maintain momentum.' },
            { title: 'Shared Standards', text: 'We partner with local entities willing to operate under our compliance standards, helping to elevate operations to a tier-one level.' },
            { title: 'Long-Term Value', text: 'We build partnerships designed to create repeatable work, stronger execution, and sustained value for both sides.' }
          ],
          ctaMsg: 'See How Your Footprint Can Support Our Field Operations',
          ctaText: 'Explore Our Capabilities',
          ctaHref: '/capabilities'
        }
      }
    }
  }
};
