export const ExperienceContent = [
  {
    company: 'D.E. Shaw India',
    link: 'https://www.deshawindia.com/',
    role: 'Member Technical',
    brief: [
      'Redesigned and overhauled a server maintenance visualization tool, rebuilding it in React and .NET, reducing latency from 8s to 125ms and enabling operators to identify and resolve failures quickly',
      'Orchestrated a seamless migration to GitHub Actions, automating UI deployments on Windows Kubernetes nodes that slashed deployment times by 80% and eliminated all manual script errors',
      'Spearheaded the design and development of advanced visualization features, including task sequence timelines, failure severity indicators, and health check drilldowns, using reusable React components, streamlining operator workflows and reducing log analysis effort by over 60%',
      'Orchestrated a role-based approval system for alert rule creation within the observability platform, cutting alert adoption downtime over 50% and enabling over 50 engineers to create rules',
      'Implemented frontend performance optimizations, including optimistic privilege prefetching and rule metadata caching, streamlining complex observability workflows and reducing page load times from 2s to 90ms',
      'Owner & maintainer of frontend codebase in-house observability tool - responsible for feature development, bug triage, on-call troubleshooting, code reviews, and documentation to accelerate onboarding of new engineers',
      'Fixed and automated database migrations, enabling programmatic schema updates and eliminating manual errors. Established .NET security policies (CORS, CIRF) and embedded them into internal scaffolding templates, ensuring firm-wide security consistency',
      'Modernised data delivery by developing .NET RESTful APIs for Windows 11 rollout dashboards, eliminating GraphQL bottlenecks and increasing refresh speed by 24x allowing for near realtime data availability',
      'Architected high-performance RESTful APIs in .NET to replace regex-based validation logic, enabling real-time software diffing and improving response times by 500ms'
    ]
  },
  {
    company: 'Mercari, Inc.',
    link: 'https://www.mercari.com/',
    role: 'Frontend Intern',
    brief: [
      'Implemented item, buyer and seller coupons on the Mercari website affecting over 5 million transactions in one month',
      'Buyer and seller coupons allow buyers to see and sellers to add coupons on items',
      'Item coupons add coupons on difficult to sell items thus allowing them to be sold quickly',
      'Refactored existing code to optimise item rendering and implemented DRY policy to implement coupons thus keeping the codebase minimally affected',
      'Implemented on the fly switchable PR environments and API PR endpoints allowing for a smoother development experience',
      'Worked extensively using NextJS and Context API'
    ]
  },
  {
    company: 'AI4Bharat, IIT Madras',
    link: 'https://ai4bharat.org',
    role: 'Front-End Developer',
    brief: [
      'Worked as a Frontend Developer, at AI4Bharat, IIT Madras',
      'AI4Bhārat is a non-profit, open-source community of engineers, domain experts, policy makers, and academicians collaborating to build AI solutions to solve India’s problems',
      'Refactored an existing project (Subplayer.js), to support various new features like direct translation from English typing to Hindi, and a new feature to support multiple vernacular languages',
      'Built using React, Redux, and Ant Design',
      'Worked on an in-house project Shoonya, that has functionalities to undertake a project, for collecting or annotating data',
      'Created a workflow to create Annotation Projects with dynamic forms wherein progressive inputs change according to the previous selections',
      'Worked on displaying the Projects page, and add new members to the project as well',
      'Used extensively for captioning purposes in NPTEL videos, which is the largest provider of MOOC courses in India'
    ],
    youtubeLink: 'https://www.youtube.com/watch?v=Jq3CcEb9pxQ'
  },
  {
    company: 'Horizon Technologies',
    link: 'https://spinup.host',
    role: 'Front-End Developer and Maintainer',
    brief: [
      'Worked as a Frontend Stack Developer, at Spinup, Horizon Technologies',
      'Spinup is an Open Source AWS RDS alternative',
      'Users can register on GitHub, select a type of database, and use it according to their needs',
      'Built using React, Redux, and Ant Design',
      'Used Axios for API Calls to create, delete and update databases',
      'A Profile page for customising each cluster is also implemented'
    ]
  },
  {
    company: 'FOSSEE, IIT Bombay',
    link: 'https://github.com/frg-fossee/eSim-Cloud',
    role: 'Full Stack Developer',
    brief: [
      'Worked as a Full Stack Developer, at FOSSEE, IIT Bombay',
      'Developed a Version Control System, for users to save multiple versions of a circuit, and to revert back to previous versions, giving users the freedom to explore various options without the fear of losing progress',
      'Branching is also supported and the user can create multiple branches according to his needs',
      'Integrated versioning with workflow to publish various circuits, with the ability to publish various versions of the circuit',
      'Worked on adding a Popup bar for setting component properties, which allows users to set the parameters of a component right next it.',
      'This is especially useful as it allows direct integration of the Schematic Editor in various places without the need to add the entire page.'
    ],
    report: 'https://drive.google.com/file/d/14oGikIo7GG-gcybT_ee_McOl1pjUvAGO/view?usp=sharing'
  },
  {
    company: 'iMocha',
    link: 'https://imocha.com',
    role: 'MVP & POC Intern',
    brief: [
      'Worked at iMocha as a Full Stack Development intern',
      'Worked on extending the current functionality of the skill assessment platform of iMocha',
      'Used a browser based IDE, Eclipse Theia, to create a development skill assessment POC project',
      'Users can login, with a particular test link, the details of the test, which are set by the admin are then loaded in.',
      'A Docker container is created for the user to attempt his assessment in. A folder structure is displayed, the user can create as many files and folders as he needs.',
      'Buttons for running and stopping the service without touching the terminal is also implemented, although the user can use the terminal is he wants to',
      'On submission, the server will zip the submission, and push it to a persistent storage like Amazon S3 or Microsoft Azure. The admin who created the test can then view submissions and download them according to his liking',
      'The Theia workspace comes with a browser preview extension built into it, the user can run the project on any port he likes and view the project freely'
    ]
  },
  {
    company: 'PrepiiT',
    link: 'https://testprepiit.ml',
    role: 'Backend Developer',
    brief: [
      'Developed the backend of the PrepiiT Quizzing Platform',
      'Developed a RESTful API in NodeJS, and the framework used was ExpressJS',
      'Used PostgreSQL as Database of choice',
      'Everytime a user wants to give a test, questions are randomly picked from the Database according to the paper pattern set by the admin',
      'Admin can add, remove, edit all questions and tests, bulk questions can be uploaded in CSV format',
      'All users get their test analysis which is all handled in the backend',
      'Live Testing feature is also available (Test will be available only for certain amount of time)'
    ]
  }
];
