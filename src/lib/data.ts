/** Pexels image helper — keeps every photo on a consistent, art-directed crop. */
export const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const school = {
  name: "AIS International School",
  short: "AIS",
  city: "Kuala Lumpur",
  tagline: "Cambridge certified. Green by design. Nursery to IGCSE.",
  established: 2008,
  phone: "+60 3-4143 1220",
  whatsapp: "+60 12-345 6789",
  email: "admissions@ais-kl.edu.my",
  address: "Jalan Bukit Jaya, 54200 Setapak, Kuala Lumpur, Malaysia",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=international+school+setapak+kuala+lumpur",
};

export const ticker = [
  "Admissions open for 2026/27 — limited seats in Year 1 & Year 7",
  "Open Morning · Saturday 24 January · 9.00am",
  "IGCSE 2025 cohort: 92% graded A*–B",
  "New Maker Studio & robotics lab now open",
  "Free trial week for Early Years families",
];

export const heroFacts = [
  { k: "Ages", v: "3 – 16" },
  { k: "Nationalities", v: "40+" },
  { k: "Max class", v: "20" },
];

export type Programme = {
  id: string;
  index: string;
  name: string;
  ages: string;
  years: string;
  blurb: string;
  points: string[];
  chips: string[];
  image: string;
  accent: string;
};

export const programmes: Programme[] = [
  {
    id: "early-years",
    index: "01",
    name: "Early Years",
    ages: "3 – 5 years",
    years: "Nursery · Reception",
    blurb:
      "Play is the curriculum. Our Early Years campus is built around forest-school mornings, messy play, phonics and a mini zoo that teaches kindness before it teaches anything else.",
    points: [
      "EYFS-inspired learning through structured and free play",
      "Phonics, early numeracy and daily story time",
      "Outdoor mud kitchen, garden beds and animal care routines",
      "Two educators plus a bilingual aide in every class",
    ],
    chips: ["Phonics", "Forest school", "Sensory play", "Arabic & English"],
    image: px(8540376, 1100, 1300),
    accent: "#f0a92b",
  },
  {
    id: "primary",
    index: "02",
    name: "Primary",
    ages: "5 – 11 years",
    years: "Year 1 – Year 6",
    blurb:
      "The Cambridge Primary pathway with an Intensive English Programme woven through it. Children learn to read closely, argue clearly and build things that occasionally explode — respectfully.",
    points: [
      "Cambridge Primary English, Mathematics & Science",
      "Intensive English Programme with streamed small groups",
      "Weekly ICT, coding and library research lessons",
      "Swimming, football academies and performing arts clubs",
    ],
    chips: ["Cambridge Primary", "Intensive English", "Coding", "Swimming"],
    image: px(8618066, 1100, 1300),
    accent: "#93c93f",
  },
  {
    id: "lower-secondary",
    index: "03",
    name: "Lower Secondary",
    ages: "11 – 14 years",
    years: "Year 7 – Year 9",
    blurb:
      "British-style subject specialists, real laboratories and a checkpoint assessment in Year 9. This is where students discover what they are actually good at, and start choosing.",
    points: [
      "Cambridge Lower Secondary Checkpoint in English, Maths & Science",
      "Dedicated physics, chemistry and biology labs from Year 7",
      "Business, design technology, Malay and Arabic electives",
      "House system, student council and Duke-of-Edinburgh style expeditions",
    ],
    chips: ["Checkpoint", "Specialist labs", "Electives", "Student council"],
    image: px(5427680, 1100, 1300),
    accent: "#2b609f",
  },
  {
    id: "igcse",
    index: "04",
    name: "IGCSE",
    ages: "14 – 16 years",
    years: "Year 10 – Year 11",
    blurb:
      "Two focused years of exam craft, past-paper clinics and university guidance. Our 2025 cohort achieved 92% A*–B, with placements across Malaysia, the UK, Australia and the Middle East.",
    points: [
      "Up to 9 Cambridge IGCSE subjects, timetabled for maximum combinations",
      "Weekly one-to-one intervention and mock exam debriefs",
      "University & scholarship counselling from Year 10",
      "Leadership roles: prefects, peer mentors, eco-committee chairs",
    ],
    chips: ["A*–B 92%", "Past-paper clinics", "Uni counselling", "Prefects"],
    image: px(30562665, 1100, 1300),
    accent: "#c4562f",
  },
];

export const pillars = [
  {
    title: "Cambridge certified",
    body: "A registered Cambridge International School from Nursery through IGCSE O Levels, externally moderated every year.",
    icon: "seal" as const,
    span: "lg:col-span-3 lg:row-span-2",
    image: px(8923042, 1000, 1200),
    tone: "ink",
    stat: { value: "MY", label: "Cambridge centre" },
  },
  {
    title: "Green concept campus",
    body: "Six acres of rain trees, kitchen gardens, solar panels and two FIFA-standard pitches in the heart of KL.",
    icon: "leaf" as const,
    span: "lg:col-span-3",
    tone: "leaf",
  },
  {
    title: "Small by intention",
    body: "Capped at 20 students per class so no child can hide — and no teacher has to guess.",
    icon: "people" as const,
    span: "lg:col-span-2",
    tone: "bone",
    stat: { value: "20", label: "Max per class" },
  },
  {
    title: "Intensive English",
    body: "Streamed immersion groups for new arrivals, with EAL support until they are fluent and confident.",
    icon: "speech" as const,
    span: "lg:col-span-2",
    tone: "marigold",
  },
  {
    title: "After-school care",
    body: "Homework clubs, academies and supervised care until 6.00pm, every weekday.",
    icon: "clock" as const,
    span: "lg:col-span-2",
    tone: "bone",
  },
  {
    title: "Character & values",
    body: "Weekly assemblies, community service hours and an anti-bullying policy that is actually enforced.",
    icon: "heart" as const,
    span: "lg:col-span-3",
    tone: "clay",
  },
  {
    title: "University pathways",
    body: "One-to-one counselling from Year 10, portfolio reviews and offers tracked to UCAS deadlines.",
    icon: "cap" as const,
    span: "lg:col-span-3",
    tone: "cobalt",
    stat: { value: "38", label: "Offers in 2025" },
  },
  {
    title: "Door-to-door transport",
    body: "GPS-tracked buses with hostesses covering 14 routes across the Klang Valley.",
    icon: "bus" as const,
    span: "lg:col-span-3",
    tone: "bone",
  },
];

export const facilities = [
  {
    name: "ICT & Robotics Labs",
    body: "Two fully networked labs, a 3D printer, Arduino and LEGO Spike kits — timetabled weekly for every year group.",
    image: px(33920046, 900, 1100),
    meta: "2 labs · 60 devices",
  },
  {
    name: "FIFA Standard Fields",
    body: "Two full-size football pitches, a covered basketball court and a 25m swimming pool with certified coaches.",
    image: px(34516565, 900, 1100),
    meta: "2 pitches · 25m pool",
  },
  {
    name: "The Mini Zoo",
    body: "Home to rabbits, ducks, tortoises and a very opinionated goat. Students run the feeding rota themselves.",
    image: px(5126995, 900, 1100),
    meta: "Daily care rota",
  },
  {
    name: "Open Library",
    body: "11,000 titles in English, Arabic and Malay, plus a silent study deck that stays open until 6pm.",
    image: px(8926886, 900, 1100),
    meta: "11,000 titles",
  },
  {
    name: "Science Laboratories",
    body: "Separate physics, chemistry and biology labs with fume hoods for IGCSE practicals.",
    image: px(5427666, 900, 1100),
    meta: "3 specialist labs",
  },
  {
    name: "Maker Studio",
    body: "Woodshop, sewing machines, laser cutter and a green screen studio for film and design technology.",
    image: px(7868828, 900, 1100),
    meta: "Opened 2025",
  },
  {
    name: "Gardens & Nursery Beds",
    body: "Every class tends a planting bed. Harvest goes to the cafeteria or to the neighbourhood food bank.",
    image: px(19324232, 900, 1100),
    meta: "6 acres of green",
  },
];

export const dayAt = [
  { time: "07:15", title: "Gates open", body: "Buses arrive from 14 routes. Breakfast club in the cafeteria for early birds." },
  { time: "07:45", title: "Registration & assembly", body: "Tutor time, house points and a short assembly — student-led on Fridays." },
  { time: "08:15", title: "Period 1 – 3", body: "Core academic blocks: English, Mathematics, Science, Arabic or Malay." },
  { time: "10:15", title: "Recess in the gardens", body: "Thirty minutes outside, always. Feeding rota for Early Years at the mini zoo." },
  { time: "10:45", title: "Period 4 – 5", body: "Specialist lessons in labs, ICT, maker studio, music, art or the pool." },
  { time: "12:45", title: "Lunch & prayer", body: "Halal-certified kitchen, quiet rooms, library and club meetings." },
  { time: "13:30", title: "Period 6 – 7", body: "IGCSE option blocks, intervention clinics and reading workshops." },
  { time: "14:45", title: "Co-curricular hour", body: "Football, swimming, robotics, debate, quranic studies, choir, chess." },
  { time: "15:45", title: "Buses depart", body: "After-school programme continues with homework club until 18:00." },
];

export const stats = [
  { value: 17, suffix: "", label: "Years in Kuala Lumpur", sub: "Established 2008" },
  { value: 780, suffix: "", label: "Students on roll", sub: "Nursery to Year 11" },
  { value: 40, suffix: "+", label: "Nationalities", sub: "One shared campus" },
  { value: 92, suffix: "%", label: "IGCSE A*–B", sub: "Class of 2025" },
  { value: 6, suffix: " acres", label: "Green concept campus", sub: "In the city" },
];

export const voices = [
  {
    quote:
      "AIS is a place where everyone is treated as one, where teachers are kind and bullying is simply not accepted. It is a second home to me, and I will cherish it for as long as I can.",
    name: "Sabrina Samer Anabtawi",
    role: "Student · Year 10",
    image: px(39714941, 400, 400),
  },
  {
    quote:
      "My school has taught me everything I know. The best teachers and wonderful friends made every day enjoyable — they taught in ways that were funny and engaging, so every lesson was productive at the same time.",
    name: "Veda Purnitha Alaparthi",
    role: "Student · IGCSE cohort",
    image: px(30649803, 400, 400),
  },
  {
    quote:
      "As a parent of three children here, I am astonished by the work of the school and its staff. Even through difficult periods the teachers gave their utmost, with patience and passion, and proved the high standard of their education.",
    name: "Noon Waleed Hassan",
    role: "Parent · three children at AIS",
    image: px(13538613, 400, 400),
  },
  {
    quote:
      "Thank you for the best teaching methods, especially the way lessons engage the kids and get them excited about learning. Our children come home talking about school — that tells you everything.",
    name: "Amro Mhd Samer",
    role: "Parent · Early Years & Primary",
    image: px(33782593, 400, 400),
  },
];

type NewsItem = {
  tag: string;
  date: string;
  title: string;
  body: string;
  image: string;
  featured?: boolean;
  full?: string;
};

export const news: NewsItem[] = [
  {
    tag: "Ceremony",
    date: "14 Dec",
    title: "16th Annual Graduation Ceremony",
    body: "Our Year 11 cohort walked, threw their caps and collected 38 offers from universities across four continents.",
    image: px(32001518, 1200, 800),
    featured: true,
    full: "Nine hundred families filled the main field on a Friday evening that refused to rain. Valedictorian Veda Purnitha Alaparthi spoke about the eight years she has spent on this campus — “long enough to remember when the library was a corridor” — before the whole cohort turned to face their parents and, in a tradition now in its sixth year, thanked them in three languages. Offers for 2026 include medicine in Manchester, engineering in Melbourne, architecture in Delft and law in Kuala Lumpur.",
  },
  {
    tag: "Campus life",
    date: "02 Dec",
    title: "No Bag Day returns",
    body: "Books balanced on heads, snacks carried in hats — creativity with zero backpacks.",
    image: px(8466716, 800, 600),
  },
  {
    tag: "Sport",
    date: "18 Nov",
    title: "U-14s lift the Klang Valley Cup",
    body: "A penalty shootout win over SRI to close an unbeaten season on our own pitch.",
    image: px(10347891, 800, 600),
  },
  {
    tag: "STEM",
    date: "05 Nov",
    title: "Robotics team qualifies for nationals",
    body: "Year 9's line-follower bot finished second out of 41 schools at regionals.",
    image: px(7869084, 800, 600),
  },
];

export const events = [
  { day: "24", month: "Jan", title: "Open Morning & campus tour", time: "09:00 – 12:00", place: "Main Hall" },
  { day: "07", month: "Feb", title: "Early Years stay-and-play session", time: "10:00 – 11:30", place: "Nursery Wing" },
  { day: "21", month: "Feb", title: "IGCSE options evening for Year 9 parents", time: "18:30 – 20:00", place: "Auditorium" },
  { day: "09", month: "Mar", title: "Inter-house sports day", time: "08:00 – 15:00", place: "FIFA Fields" },
];

export const admissionSteps = [
  { n: "01", title: "Enquire", body: "Send the form or WhatsApp admissions. We reply within one working day." },
  { n: "02", title: "Tour the campus", body: "Walk the gardens, labs and pitches with a member of the leadership team." },
  { n: "03", title: "Assessment & meeting", body: "A short, friendly assessment in English and Maths plus a family conversation." },
  { n: "04", title: "Offer within 5 days", body: "A written offer with fee schedule, uniform list and transport routes." },
  { n: "05", title: "Enrol & settle in", body: "Deposit secures the seat. Your child gets a buddy and a two-week induction." },
];

export const faqs = [
  {
    q: "Is AIS a Cambridge certified international school?",
    a: "Yes. AIS is a registered Cambridge International School offering the Cambridge Primary, Lower Secondary and IGCSE pathways, with external moderation and examinations held on campus.",
  },
  {
    q: "What are the school hours and term dates?",
    a: "The school day runs 07:45 to 14:45, with co-curricular activities until 15:45 and supervised after-school care until 18:00. We operate three terms across an August–June academic year, with an optional summer school in July.",
  },
  {
    q: "Do you support students new to English?",
    a: "Our Intensive English Programme streams new arrivals into small immersion groups alongside their mainstream timetable, with progress reviewed every half term until they no longer need EAL support.",
  },
  {
    q: "What does it cost, and are there scholarships?",
    a: "Fees are published per year group and include activities, ICT and library access. Sibling, staff and academic scholarships are available — request the full fee schedule through the admissions form.",
  },
  {
    q: "Is transport and lunch provided?",
    a: "GPS-tracked buses with hostesses cover 14 routes across the Klang Valley, and our halal-certified kitchen serves breakfast, lunch and afternoon snacks on campus.",
  },
  {
    q: "Can we visit before applying?",
    a: "Absolutely. Open mornings run monthly and private tours can be booked any weekday. Children are welcome to join a free trial week in Early Years and Primary.",
  },
];

export const navLinks = [
  { label: "Why AIS", href: "#why" },
  { label: "Our People", href: "#team" },
  { label: "Programmes", href: "#programmes" },
  { label: "Campus", href: "#campus" },
  { label: "A Day Here", href: "#day" },
  { label: "News", href: "#news" },
  { label: "Admissions", href: "#admissions" },
];

export const marqueeWords = [
  "Curiosity",
  "Cambridge",
  "Kindness",
  "Green Campus",
  "Rigour",
  "Nursery → IGCSE",
  "Character",
  "Kuala Lumpur",
];

export const gallery = [
  { src: px(8613057, 800, 1000), label: "Reception story time", tall: true },
  { src: px(5539293, 900, 700), label: "ICT lab, Year 8" },
  { src: px(8612901, 900, 700), label: "Dress-up day" },
  { src: px(24778331, 800, 1000), label: "Our green corner of KL", tall: true },
  { src: px(8363573, 900, 700), label: "Collaborative play" },
  { src: px(8613054, 900, 700), label: "Watercolour studio" },
  { src: px(38107333, 800, 1000), label: "Football academy", tall: true },
  { src: px(5427827, 900, 700), label: "Reading corner" },
];

export const valuesWords = ["Kindness", "Curiosity", "Courage", "Service", "Rigour", "Joy"];

export const team = [
  {
    name: "Mr. Daniel Okafor",
    role: "Head of Secondary",
    subject: "Physics · IGCSE",
    line: "Fifteen years of Cambridge exam boards, and still the first person in the lab every morning.",
    image: px(6325958, 700, 900),
  },
  {
    name: "Ms. Priya Raman",
    role: "Head of Early Years",
    subject: "EYFS · Phonics",
    line: "Believes a muddy knee is evidence of a working curriculum.",
    image: px(5905753, 700, 900),
  },
  {
    name: "Ms. Nadia Farouk",
    role: "Head of Mathematics",
    subject: "Primary → IGCSE",
    line: "Runs the maths olympiad club and the most feared (best loved) mental-maths Friday quiz.",
    image: px(5212321, 700, 900),
  },
  {
    name: "Ms. Claire Bennett",
    role: "Head of English",
    subject: "Intensive English Programme",
    line: "Designs our immersion streams so new arrivals are arguing Shakespeare within two terms.",
    image: px(8423069, 700, 900),
  },
  {
    name: "Ms. Aishah Yusof",
    role: "Director of Sport & CCAs",
    subject: "Football · Swimming · Arts",
    line: "Twenty-one clubs a week, four house shields and one unbeaten U-14 side.",
    image: px(27505595, 700, 900),
  },
];
