export type TeamMember = {
  name: string;
  slug: string;
  title: string;
  image: string;
  group: string;
  photoPosition?: string;
  photoScale?: number;
  fullBio: string;
};

export const teamMembers: TeamMember[] = [
  // ================= FOUNDERS =================
  {
    name: "Dan Goretskie",
    slug: "dan-goretskie-consulting",
    title: "Founder & CEO",
    group: "Founders",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Dan%20Goretskie%20-%20Fuzion%20Website%20Image.jpg",
    photoPosition: "40% -5%",
    photoScale: 1.1,
    fullBio: `Dan Goretskie is the Founder and CEO of Fuzion Consulting Group, where he sets the firm’s strategic direction and leads its growth across business, technology, and operational consulting.

With deep experience in enterprise SaaS, digital transformation, and regulated industries, Dan has built Fuzion into a trusted partner for organizations modernizing complex systems and processes. His leadership is grounded in a client-first mindset, scalable innovation, and a long-term vision focused on building companies that create lasting value for clients, partners, and communities.`,
  },
  {
    name: "Donna Webb",
    slug: "donna-webb-consulting",
    title: "Co-Founder & COO",
    group: "Founders",
    image: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Donna%20Webb%20-%20Fuzion%20Image%20-%20Consulting.png",
    fullBio: `Donna Webb is the Co-Founder and Chief Operating Officer of Fuzion Consulting Group, where she leads enterprise operations, PMO execution, and large-scale program delivery across utility, infrastructure, and public-sector environments.

With extensive experience managing complex, large-scale EPC and operational programs, Donna brings a disciplined leadership approach focused on safety, governance, cost, schedule, risk, and quality outcomes. Her leadership reflects a commitment to operational excellence and inclusive partnerships that deliver sustained value for clients and communities.`,
  },

  // ================= LEADERSHIP =================
  {
    name: "Andy Much",
    slug: "andy-much",
    title: "Principal Solutions Leader",
    group: "Leadership Team",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Andy%20Much%20-%20Bio%20Image.jpg",
    fullBio: `Andy Much is the Principal Solutions Leader at Fuzion Consulting Group, where he leads the firm’s enterprise application development and digital solutions teams, with deep expertise in Microsoft 365 and Power Platform.

With more than two decades of experience spanning custom application development, mobile solutions, and enterprise collaboration platforms, Andy brings a pragmatic, execution-focused approach to complex digital transformation initiatives. His leadership strengthens solution architecture, client engagement, and scalable delivery across utility, EPC, and PMO-driven environments.`,
  },
  {
    name: "Prag Padilla",
    slug: "prag-padilla",
    title: "Principal Solutions Leader",
    group: "Leadership Team",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Prag%20Padilla%20-%20Pending%20Approval%20-%20Bio%20Image%20(1).jpg",
    fullBio: `Prag Padilla is a Principal Solutions Leader at Fuzion Consulting Group, where he leads solution architecture and technology delivery across financial services, logistics, real estate, and cloud-based platforms.

With more than two decades of experience spanning enterprise system engineering, infrastructure modernization, and Microsoft Power Platform development, Prag brings a strong execution-focused approach to complex client environments. At Fuzion, he oversees scalable solution delivery and the development of next-generation logistics platforms supporting nonprofit, public, and private-sector organizations.`,
  },
  {
    name: "Dennis DelGrosso",
    slug: "dennis-delgrosso",
    title: "Principal Engineering Leader",
    group: "Leadership Team",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Dennis%20DelGrosso%20-%20Approved%20Bio%20Image.jpg",
    fullBio: `Dennis DelGrosso is the Principal Engineering Leader at Fuzion Consulting Group, providing senior technical leadership across utility, infrastructure, and capital improvement programs.

With over three decades of experience in mechanical engineering and utility operations, Dennis has led large-scale, multi-disciplinary retrofit and betterment projects from early design through execution across complex generating environments. His leadership strengthens engineering governance, design standards, and project execution—supporting safe, reliable, and cost-effective delivery for regulated and mission-critical systems.`,
  },
  {
    name: "Charles Eder",
    slug: "charles-eder",
    title: "Principal Technology Program Manager",
    group: "Leadership Team",
    image: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Charles%20Eder.jpg",
    fullBio: `Charles Eder serves as Principal Technology Program Manager for Fuzion Chickasaw Group, supporting technology strategy and delivery for utility, public-sector, and infrastructure engagements. With deep experience leading complex enterprise programs— including billing systems, advanced metering infrastructure, cybersecurity, and grid modernization, Charles provides structured oversight and execution leadership. His work reflects a commitment to operational reliability, regulatory alignment, and delivering sustainable outcomes for clients and communities.`,
  },
  {
    name: "Shirley Patterson",
    slug: "shirley-patterson",
    title: "Sr. Director of Accounting & Human Resources (HR)",
    group: "Leadership Team",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Shirley%20Patterson%20-%20Approved%20Bio%20Image.jpg",
    fullBio: `Shirley Patterson serves as Senior Director of Accounting and Human Resources for Fuzion Consulting Group, overseeing financial operations, compliance, and organizational governance.

With more than three decades of experience across finance, accounting, senior controller roles, and commercial real estate management, Shirley brings disciplined stewardship to complex, multi-entity organizations. Her leadership supports financial transparency, operational integrity, and scalable growth—ensuring Fuzion’s clients, partners, and stakeholders are supported by strong fiscal and people-focused foundations.`,
  },

  // ================= SUPPORT =================
  {
    name: "Monica Mariscal",
    slug: "monica-mariscal",
    title: "Sr. Document Controls Analyst",
    group: "Consulting & Support",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Monica%20Mariscal%20-%20Approved%20Bio%20Image.png",
    fullBio: `Monica Mariscal serves as Senior Document Controls Analyst at Fuzion Consulting Group, supporting document governance, compliance, and operational consistency across regulated client environments.

With more than 25 years of experience spanning healthcare, utilities, and enterprise administration, Monica brings a disciplined, detail-driven approach to managing critical documentation and financial processes. Her expertise strengthens compliance readiness, operational reliability, and client confidence across complex consulting engagements.`,
  },
  {
    name: "Lisa Holliday",
    slug: "lisa-holliday",
    title: "Sr. Document Controls Analyst",
    group: "Consulting & Support",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Lisa%2016x9.png",
    fullBio: `Lisa Holliday serves as Senior Document Controls Analyst at Fuzion Consulting Group, supporting document governance, quality standards, and operational consistency across regulated client environments.

With more than three decades of experience in education and professional services, Lisa brings a detail-driven, people-centered approach to managing complex documentation and processes. Her background in mentoring, compliance review, and structured program oversight strengthens clarity, accuracy, and confidence across Fuzion’s enterprise consulting engagements.`,
  },

  // ================= ADVISORS =================
  {
    name: "Amy Houston",
    slug: "amy-houston",
    title:
      "Principal Advisor – Agriculture, Ranching & Rural Communities",
    group: "Principal Advisors",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Amy%20Houston%20-%20Principal%20Advisor%20-%20Approved%20Image.jpg",
    fullBio: `Amy Houston Gaddis serves as a Principal Advisor to Fuzion Consulting Group, providing strategic perspective across agriculture, ranching operations, and community-focused initiatives.

As a fourth-generation Texas rancher, Amy brings deep practical understanding of land stewardship, livestock management, and the economic realities facing rural communities. Her advisory role supports Fuzion’s work with agriculture-adjacent clients, nonprofits, and programs focused on sustainable operations and community resilience.`,
  },
  {
    name: "Morgan Broome",
    slug: "morgan-broome",
    title:
      "Principal Advisor – Nonprofits, Disaster Response & Operations",
    group: "Principal Advisors",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Morgan%20Broome%20-%20Principal%20Advisor%20Pending%20Approval%20-%20Image.jpg",
    fullBio: `Morgan Broome serves as a Principal Advisor to Fuzion Consulting Group, providing strategic insight across nonprofit operations, disaster response, and logistics-driven initiatives.

With a background in operations analytics, finance, and digital platforms, Morgan brings a data-driven perspective to complex coordination and resource management challenges. As a co-founder of a national disaster-relief nonprofit serving agricultural communities, her advisory role supports Fuzion’s work at the intersection of technology, operations, and community impact.`,
  },
  {
    name: "Sean Goretskie",
    slug: "sean-goretskie",
    title:
      "Principal Advisor – Life Sciences, Agriculture & Consumer Markets",
    group: "Principal Advisors",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Sean%20Goretskie%20-%20Principal%20Advisor%20-%20Approved%20Image.jpg",
    fullBio: `Sean Goretskie serves as a Principal Advisor to Fuzion Consulting Group, providing strategic insight across life sciences, agriculture, and consumer-focused markets.

With more than 20 years of experience spanning agronomy, agribusiness leadership, and customer-driven sales organizations, Sean brings a grounded understanding of agricultural systems, market dynamics, and sustainable production practices. His advisory role supports market strategy, client perspective, and solution relevance across agriculture-adjacent and sustainability-focused engagements.`,
  },
  {
    name: "Robert S. Olson",
    slug: "robert-s-olson",
    title:
      "Principal Advisor – State & Local Government, Utilities",
    group: "Principal Advisors",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Senator%20Robert%20Olson%20-%20Principal%20Advisor%20-%20Approved%20Image.webp",
    fullBio: `Robert S. Olson serves as a Principal Advisor to Fuzion Consulting Group, providing strategic guidance on state and local government policy, regulatory environments, and utility-sector engagement.

With decades of public service experience and legislative leadership at the state level, Robert brings deep insight into infrastructure policy, financial oversight, and government decision-making processes. His advisory role supports Fuzion’s understanding of public-sector priorities and helps align client solutions with evolving regulatory and governance considerations.`,
  },

  // ================= DIGITAL =================
  {
    name: "Treston Slater",
    slug: "treston-slater",
    title: "Digital Design Partner – Slater Media Company",
    group: "Digital Design Partner",
    image:
      "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/TrestonSlater_Profile.png",
    fullBio: `Fuzion Consulting Group partners with Slater Media Company, led by Founder and CEO Treston Slater, to deliver modern digital design, development, and media solutions that support enterprise branding and growth.

Blending cinematic storytelling with scalable digital engineering, Slater Media Company brings expertise in website development, application interfaces, video production, and digital engagement platforms. This partnership supports Fuzion’s commitment to building future-ready digital experiences that align strategy, performance, and professional presence across client-facing platforms.`,
  },
];