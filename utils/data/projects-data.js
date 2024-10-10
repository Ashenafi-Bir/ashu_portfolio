import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Addis Bank Official Website',
        description: "An official website featuring a management portal for dynamic content updates. Developed using Express and TypeScript, it includes secure OTP authentication via AWS SES, Google, and Facebook. The site also integrates AI assistants for enhanced user experience and utilizes AWS Transcribe for voice-to-text capabilities. Data is managed efficiently through Google Sheets, generating PDF term sheets as needed.",
        tools: ['Express', 'MySQL', 'React', 'CSS', 'HTML', 'Sequelize', 'OpenAI API', 'AWS SES', 'AWS S3', 'Node Mailer'],
        role: 'Full stack developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Asset Management App for ADIB',
        description: 'I designed and developed a full-stack web app for ADIB using ASP.NET. The application features a user-friendly interface built with Next.js, TypeScript, MUI, and TailwindCSS, supporting multiple languages and currencies. I implemented the backend API with ASP.NET, MySQL, and TypeORM, and deployed the front-end to AWS Amplify while hosting the back-end on AWS EC2.',
        tools: ['ASP.NET', 'NextJS', 'Tailwind CSS', 'Google Maps', 'TypeScript', 'MySQL', 'AWS S3', 'MUI'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },  
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },