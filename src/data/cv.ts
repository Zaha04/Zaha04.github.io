// Toate datele CV-ului. Editează aici — site-ul se actualizează automat.

export type EntryType = "work" | "education" | "certification";

export interface TimelineEntry {
  type: EntryType;
  title: string;
  org: string;
  /** YYYY-MM, folosit pentru sortare și pentru anul afișat pe axă */
  start: string;
  period: string;
  summary: string;
  highlights?: string[];
  /** Tehnologii — trebuie să aibă aceleași nume ca în topSkills ca să fie legate */
  tags?: string[];
  /** Numele task-ului în „pipeline-ul carierei” (stil Airflow) */
  taskId?: string;
  /** Task-urile de care depinde (definesc forma grafului) */
  after?: string[];
  /** Eticheta scurtă (sub numele task-ului) */
  short?: string;
  /** Rând scurt sub titlu (ex. domeniul rolului) */
  subtitle?: string;
  /** Pentru „Start the journey”: sloganul afișat mare pe card */
  slogan?: string;
  /** Logo din /public (ex. "/logos/ifs.jpg"); fără logo se afișează monograma */
  logo?: string;
  logoAlt?: string;
  monogram?: string;
}

export const profile = {
  name: "Zahariea Cosmin",
  initials: "ZC",
  photo: "/profile.jpg",
  currentRole: "Data Analyst",
  currentCompany: "Distribuție Energie Electrica",
  title: "Data Engineer — Python, SQL, PySpark, Airflow, dbt",
  summary:
    "Data engineer with 5+ years of experience building ETL/ELT pipelines and system integrations. At Bitdefender I worked with Python, PySpark, Airflow, dbt, Kafka and Databricks on Google Cloud, after years of ERP integration work (Oracle, IFS, Boomi). Today I automate SAP reporting with Python and SQL, and I turned a personal script into a web app that saves my colleagues hours of manual work. Also hands-on with Snowflake on a Shopify commerce analytics project.",
  // Emailul e împărțit ca să nu apară întreg în HTML (îl asamblează JS în browser → mai puțin spam)
  emailUser: "cosminzahariea24",
  emailDomain: "gmail.com",
  location: "Focșani, Romania",
  linkedin: "https://www.linkedin.com/in/cosminzahariea",
  cv: "/Zahariea_Cosmin_CV.pdf",
  stats: [
    { value: "5+", label: "years experience" },
    { value: "4", label: "roles" },
    { value: "3", label: "certifications" },
    { value: "40+", label: "technologies" },
  ],
  // Rolurile pentru care sunt deschis (apar la final: Contact + finalul jocului)
  openTo: ["IFS ERP Consultant", "Business Analyst", "Data Engineer", "Data Integration"],
  languages: [
    { name: "Romanian", level: "Native" },
    { name: "English", level: "Fluent" },
  ],
};

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Timeline", href: "/#journey" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export const typeLabels: Record<EntryType, string> = {
  work: "Work",
  education: "Education",
  certification: "Certification",
};

export const timeline: TimelineEntry[] = [
  {
    type: "work",
    title: "Technology Analyst",
    taskId: "erp_technical_consulting",
    after: [],
    short: "ArcWide · Analyst",
    subtitle: "IFS ERP · Technical Consultant",
    org: "ArcWide Romania",
    start: "2021-10",
    period: "Oct 2021 – Apr 2024",
    summary: "Where I learned technical consulting: IFS ERP integrations, data migrations and reporting for real clients.",
    highlights: [
      "Built and maintained integrations between IFS ERP and third-party systems using REST/SOAP APIs and Dell Boomi.",
      "For a client with 2,000+ employees who wanted to speed up company processes, wrote Python scripts that ensure data quality and keep track of it.",
      "Designed and ran data migration jobs for ERP implementations, upgrades and process transitions.",
      "Wrote and optimized SQL/PL/SQL for customizations and reporting, and built IFS Lobbies, dashboards and reports (IFS Report Designer, Power BI).",
      "Resolved database, SQL and reporting tickets in Jira ServiceDesk, and managed users, permission sets and role-based access.",
      "Mentored and onboarded new colleagues, and managed deployments with Git and Azure DevOps in Agile teams.",
    ],
    tags: ["IFS Cloud", "Boomi", "REST/SOAP APIs", "Python", "SQL", "PL/SQL", "Power BI", "Data Quality", "ERP Implementation", "Jira", "Git", "Azure DevOps"],
    slogan: "Trying to grow the businesses across the world",
    logo: "/logos/ifs.jpg",
    logoAlt: "IFS",
  },
  {
    type: "certification",
    title: "Associate & Professional Developer Certifications",
    taskId: "certify_boomi",
    after: ["erp_technical_consulting"],
    short: "Boomi certs",
    org: "Boomi",
    start: "2023-06",
    period: "2023",
    summary: "Two Boomi certifications covering integration design, mappings and process orchestration.",
    tags: ["Boomi"],
    monogram: "B",
  },
  {
    type: "work",
    title: "Technology Consultant Lead",
    taskId: "lead_erp_delivery",
    after: ["certify_boomi", "certify_ifs_cloud"],
    short: "ArcWide · Lead",
    org: "ArcWide Romania",
    start: "2024-04",
    period: "Apr 2024 – Oct 2024",
    summary: "Led technical delivery for an ERP financial module covering e-Factura and SAF-T (D406) statutory reporting.",
    highlights: [
      "Led technical delivery and business analysis for an ERP financial module covering e-Factura and SAF-T (D406) statutory reporting, and took part in its solution architecture.",
      "Built integrations with Dell Boomi, Oracle, SQL, PL/SQL and REST/SOAP APIs, connecting the ERP to Salesforce, SAP, Oracle databases and external platforms.",
      "Designed cloud-to-cloud, on-premises and hybrid Boomi AtomSphere integrations, with mappings, transformations, monitoring and error handling.",
      "Wrote custom Oracle Reports, Oracle APIs and PL/SQL procedures, functions and triggers, and optimized slow SQL queries.",
      "Worked directly with clients on requirements and delivery, using Git, Azure DevOps and Agile practices.",
    ],
    tags: ["Boomi", "REST/SOAP APIs", "SQL", "PL/SQL", "SAP", "Business Analysis", "ERP Implementation", "Git", "Azure DevOps"],
    slogan: "Leading the way, one integration at a time", // TODO: sloganul tău
    monogram: "AW",
  },
  {
    type: "certification",
    title: "IFS Certified Practitioner — Technical Consultant (IFS Cloud)",
    taskId: "certify_ifs_cloud",
    after: ["erp_technical_consulting"],
    short: "IFS cert",
    org: "IFS",
    start: "2024-02", // obținută în 2024, înainte de rolul de Lead
    period: "2024",
    summary: "Official IFS certification for technical consulting on IFS Cloud.",
    tags: ["IFS Cloud"],
    logo: "/logos/ifs.jpg",
    logoAlt: "IFS",
  },
  {
    type: "work",
    title: "Data Integrations Engineer",
    taskId: "build_data_pipelines",
    after: ["lead_erp_delivery"],
    short: "Bitdefender",
    org: "Bitdefender",
    start: "2024-10",
    period: "Oct 2024 – Mar 2026",
    summary: "Moved into data engineering: ETL/ELT pipelines on Google Cloud and Databricks, big data processing and integrations.",
    highlights: [
      "Designed and orchestrated ETL/ELT pipelines on Google Cloud and Databricks with Airflow, PySpark, dbt and SQL, including data modeling, data quality tests and monitoring.",
      "Integrated ERP, Salesforce, relational SQL databases, external APIs and reporting systems, and built automations that saved the team a lot of time, with a focus on data quality and security.",
      "Built reports (including Power BI) that give the business company insights in seconds.",
      "Worked with Apache Kafka, Databricks and PySpark for big data processing, and helped shape pipeline and integration architecture together with architects.",
      "Wrote Python for automation, transformation and API communication, with error handling for JSON and XML payloads.",
      "Used Elasticsearch for indexing and log search, and delivered in Agile teams with Docker, Kubernetes, Git/Bitbucket, Linux and CI/CD deployment pipelines.",
    ],
    tags: ["Python", "PySpark", "Apache Airflow", "dbt", "SQL", "Databricks", "Google Cloud", "Apache Kafka", "ETL/ELT", "Data Modeling", "Data Quality", "Power BI", "Elasticsearch", "Docker", "CI/CD", "Git"],
    slogan: "Turning raw data into decisions", // TODO: sloganul tău
    monogram: "BD",
  },
  {
    type: "work",
    title: "Data Analyst",
    taskId: "automate_sap_reporting",
    after: ["build_data_pipelines"],
    short: "Electrica",
    org: "Distribuție Energie Electrica",
    start: "2026-04",
    period: "Apr 2026 – present",
    summary: "Data analysis and process automation on large SAP datasets — and an internal web app built from a personal script.",
    highlights: [
      "Built an internal reporting web app (Angular, Python FastAPI, SQL) from a personal script. Colleagues use it daily and it saves them hours of manual work. As product owner, I gather requirements directly from the users.",
      "Wrote Python scripts that speed up Excel-based processes, replacing manual Excel reporting with automated data processing (pandas, SQL) on large SAP operational, financial and logistics datasets.",
      "Run data analytics on those datasets: clustering, cleaning, and automating SAP processes and reporting to cut manual effort.",
      "Validate transactional data and track down discrepancies between systems, working with cross-functional teams.",
    ],
    tags: ["Python", "SQL", "FastAPI", "SAP", "Data Quality"],
    slogan: "Automating the boring, so people can focus on what matters", // TODO: sloganul tău
    monogram: "DEE",
  },
];

// Educația are secțiunea ei („Where I learned to fish”), în ordine cronologică
export const education = [
  {
    level: "Bachelor's",
    title: "Bachelor's Degree in Automation Engineering",
    org: "Transilvania University of Brașov",
    period: "2017 – 2021",
    summary: "Control systems, programming and an engineering way of thinking.",
    learned: ["Control systems", "Programming", "Engineering mindset"],
  },
  {
    level: "Master's",
    title: "Master's Degree in Integrated Business IT Systems",
    org: "Transilvania University of Brașov",
    period: "2022 – 2024",
    summary: "Business information systems, studied alongside full-time work on ERP projects.",
    learned: ["Business IT systems", "ERP processes", "Integration architecture"],
  },
];

export interface Skill {
  name: string;
  /** 1–5 */
  level: number;
  note: string;
}

// Cele mai importante 5 (numele trebuie să coincidă cu tag-urile din timeline ca să fie legate)
export const topSkills: Skill[] = [
  { name: "Python", level: 4, note: "Pipelines, automation, APIs, FastAPI apps" },
  { name: "SQL", level: 4, note: "Data modeling, PL/SQL, query tuning" },
  { name: "Boomi", level: 5, note: "ERP ↔ SAP / Salesforce integrations" },
  { name: "PySpark", level: 4, note: "Big data processing on Databricks" },
  { name: "Apache Airflow", level: 4, note: "Orchestrating ETL/ELT on Google Cloud" },
];

// „Map my profile to your role”: cerințele tipice pe rol.
// `tags` trebuie să fie tehnologii din timeline — o cerință e „acoperită” doar dacă apare în experiența reală.
export interface Requirement {
  label: string;
  tags: string[];
}
export const rolePresets: { key: string; label: string; reqs: Requirement[] }[] = [
  {
    key: "data",
    label: "Data Engineer",
    reqs: [
      { label: "Python", tags: ["Python"] },
      { label: "SQL & data modeling", tags: ["SQL", "Data Modeling", "PL/SQL"] },
      { label: "Pipeline orchestration", tags: ["Apache Airflow"] },
      { label: "Big data processing", tags: ["PySpark", "Databricks", "Apache Kafka"] },
      { label: "ELT & transformations", tags: ["dbt", "ETL/ELT"] },
      { label: "Cloud platform", tags: ["Google Cloud"] },
      { label: "Data quality & testing", tags: ["Data Quality"] },
      { label: "CI/CD & containers", tags: ["CI/CD", "Docker", "Git"] },
    ],
  },
  {
    key: "integration",
    label: "Integration Engineer",
    reqs: [
      { label: "iPaaS (Boomi)", tags: ["Boomi"] },
      { label: "REST / SOAP APIs", tags: ["REST/SOAP APIs", "FastAPI"] },
      { label: "ERP & SAP integrations", tags: ["IFS Cloud", "SAP", "ERP Implementation"] },
      { label: "Event streaming", tags: ["Apache Kafka"] },
      { label: "Scripting & automation", tags: ["Python"] },
      { label: "SQL & databases", tags: ["SQL", "PL/SQL"] },
      { label: "Monitoring & log search", tags: ["Elasticsearch"] },
      { label: "DevOps & delivery", tags: ["Git", "CI/CD", "Azure DevOps", "Docker"] },
    ],
  },
  {
    key: "erp",
    label: "ERP Technical Consultant",
    reqs: [
      { label: "IFS ERP", tags: ["IFS Cloud"] },
      { label: "ERP implementation & migration", tags: ["ERP Implementation"] },
      { label: "PL/SQL development", tags: ["PL/SQL"] },
      { label: "Integrations (Boomi, APIs)", tags: ["Boomi", "REST/SOAP APIs"] },
      { label: "Reporting (Power BI)", tags: ["Power BI"] },
      { label: "Business analysis", tags: ["Business Analysis"] },
      { label: "SAP data", tags: ["SAP"] },
      { label: "Ticketing & Agile delivery", tags: ["Jira", "Azure DevOps"] },
    ],
  },
];

