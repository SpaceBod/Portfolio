const logotext = "My Portfolio";
const meta = {
    title: "Portfolio",
    description: "I’m Gian-Luca Fenocchi, current 3rd year student at Imperial College London, studying Electronic and Information Engineering (MEng).",
};

const introdata = {
    title: "I’m Gian-Luca Fenocchi",
    animated: {
        first: "> Passionate coder",
        second: "> Electronics enthusiast",
        third: "> Photographer",
    },
    description: "Current 3rd year student at Imperial College London, studying Electronic and Information Engineering (MEng).",
    your_img_url: "https://raw.githubusercontent.com/SpaceBod/Portfolio/main/src/img/home.jpg",
};

const dataabout = {
    title: "Background",
    aboutme: "As an Electronic & Information Engineer based in London, I have a passion for developing elegant, efficient solutions to complex problems. With experience in programming languages such as Python, JavaScript, and C++, and a familiarity with frameworks like React and Node.js, I bring a diverse range of technical skills to my work. I thrive on collaborating with others to bring projects to life, and I am always looking for new challenges that push me to learn and grow. In addition to my technical skills, I am also an experienced photographer. I specialise in event, sport and portrait photography, and I am always looking for opportunities to use my creative eye to capture stunning images.",
};
const worktimeline = [{
    jobtitle: "MEng Student (2024)",
    where: "Imperial College London",
    date: "2020-2024",
},
{
    jobtitle: "Secondary Education",
    where: "Wimbledon College",
    date: "2013-2020",
},
];

const skills = [{
    name: "Python",
    value: 90,
},
{
    name: "C++",
    value: 75,
},
{
    name: "Javascript",
    value: 70,
},
{
    name: "Java",
    value: 70,
},
{
    name: "MatLab",
    value: 80,
},
{
    name: "R",
    value: 80,
},
{
    name: "React / NodeJS (Web Dev)",
    value: 70,
},
];

const services = [{
    title: "Software Development",
    description: "With experience in programming languages such as Python, JavaScript, and C++, I can work on various software projects, including custom software solutions, maintenance, and testing.",
},
{
    title: "Machine Learning and Computer Vision",
    description: "In my past projects, I have gained experience in machine learning and computer vision, which allows me to build custom models tailored to specific needs, such as predictive modeling, natural language processing, and computer vision. I have worked on various computer vision techniques, such as image classification, object detection, and image segmentation, and can help develop and implement computer vision models. With these skills, I am capable of leveraging the power of AI to solve complex problems and drive business growth."
},
{
    title: "Full-Stack Web Development",
    description: "With experience in front-end and back-end web development, I have skills in programming languages such as Python, JavaScript, and C++. I can create web applications using frameworks such as React, Node.js, and Flask, as well as use WebFlow to build custom websites. I have worked on front-end and back-end development, as well as database integration, to ensure that a website or web application is functional and user-friendly.",
},
{
    title: "CAD Design",
    description: "With experience in computer-aided design (CAD) software such as AutoCAD, SolidWorks, and Fusion 360, I am capable of creating CAD designs that help you bring ideas to life. I have created 2D and 3D models, technical drawings, and simulations that meet specific design requirements.",
},
{
    title: "Data Manipulation",
    description: "With experience in programming languages such as R and Python, I am able to manipulate and analyse data. I can clean and transform data, perform statistical analysis, and create visualisations to present data in a clear and concise manner.",
},
];

// Replace the placeholders with your own GitHub username
const repoUrl = "https://api.github.com/users/spacebod/repos";
let dataportfolio = [];
// Fetch the repository data from GitHub's API
fetch(repoUrl)
    .then(response => response.json())
    .then(data => {
        // Use a forEach loop to create an object for each repository and add it to the dataportfolio array
        data.forEach(repo => {
            if (repo.name !== "Portfolio" && repo.name !== "SpaceBod" & repo.name !== "ES-synth-starter" & repo.name !== "EZParking") {
                const item = {
                    img: "https://raw.githubusercontent.com/SpaceBod/" + repo.name + "/main/img/title.jpg",
                    description: repo.name,
                    link: repo.html_url
                };
                dataportfolio.push(item);
            }
            if (repo.name === "EZParking") {
                const item = {
                    img: "https://raw.githubusercontent.com/SpaceBod/" + repo.name + "/main/img/title.jpg",
                    description: "EZParking Website",
                    link: "https://spacebod.github.io/EZParking/"
                };
                dataportfolio.push(item);
            }
        });
    })
    .catch(error => {
        console.error("Error fetching repository data:", error);
    });

const contactConfig = {
    YOUR_EMAIL: "gianluca@fenocchi.net",
    YOUR_FONE: "(+44) 777 00 54312",
    description: "Please feel free to get in touch.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_portfolio",
    YOUR_TEMPLATE_ID: "template_y1zqdgk",
    YOUR_USER_ID: "XzoRwYygcXU1fNGbB",
};

const socialprofils = {
    github: "https://github.com/SpaceBod",
    linkedin: "https://www.linkedin.com/in/gfenocchi/",
    instagram: "https://www.instagram.com/g_fenocchi/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};