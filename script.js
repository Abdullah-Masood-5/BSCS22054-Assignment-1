const portfolioData = {
    name: "Syed Muhammad Abdullah Masood",
    introduction: {
        greeting: "Hello, I'm Syed Muhammad Abdullah Masood",
        description: "I am a passionate web developer currently studying at ITU, specializing in building high-quality web solutions. I’m driven to learn and develop efficient, scalable, and modern digital experiences.",
        photo: "Pic-1.png",
        linkedin: "https://www.linkedin.com/in/abdullah-masood-921458221/",
        github: "https://github.com/Abdullah-Masood-5",
        instagram: "https://www.instagram.com/yourusername",
        twitter: "https://x.com/mabd051104"
    },
    about: {
        description: "I’m an aspiring developer with a strong foundation in both technical and interpersonal skills, making me a versatile team member and an efficient problem solver.",
        softSkills: [
            "Effective Communication (verbal & written)",
            "Critical Thinking",
            "Multitasking",
            "Leadership",
            "Organization"
        ],
        hardSkills: [
            "Programming: C++, Python, Web Scraping with Python, Data Analysis",
            "Databases: MySQL, MongoDB, Firebase",
            "Web Development: HTML, CSS, JavaScript, ReactJS",
            "MS Office Suite: Word (Certified), Excel, PowerPoint (Intermediate)"
        ]
    },
    services: [
        {
            title: "Web Development",
            description: "Building responsive, scalable, and user-friendly websites and applications tailored to your business needs."
        },
        {
            title: "Consulting",
            description: "Providing expert insights and strategies to help you optimize your digital presence and business processes."
        },
        {
            title: "Design & Branding",
            description: "Creating innovative, visually appealing designs that ensure your brand stands out and resonates with your audience."
        }
    ],
    projects: [
        {
            title: "Web Portal for Charity",
            description: "Developed an end-to-end web portal that streamlined operations and improved efficiency for a global charity company."
        },
        {
            title: "Snake Game",
            description: "Created Snake game in raw C++ without any graphic libraries."
        },
        {
            title: "Data Analytics Dashboard",
            description: "Designed and developed a real-time analytics platform for a financial firm to provide insightful data visualization and reporting."
        }
    ],
    contact: {
        email: "mabd051104@gmail.com",
        phone: "+1 (234) 567-890",
        address: "123 Main Street, ABC City, XYZ Country"
    },
    video: {
        src: "My_Portfolio.mp4",
        poster: "thumbnail.png"
    }
};
document.getElementById("intro-text").innerHTML = `
    <h2>${portfolioData.introduction.greeting}</h2>
    <p>${portfolioData.introduction.description}</p>
    <a href="${portfolioData.introduction.linkedin}" class="btn">Visit LinkedIn</a>
    <a href="${portfolioData.introduction.github}" class="btn">Visit GitHub</a>
    <div>
        <a href="${portfolioData.introduction.instagram}" class="social-icon" target="_blank">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="${portfolioData.introduction.twitter}" class="social-icon" target="_blank">
            <i class="fab fa-twitter"></i>
        </a>
    </div>
`;

document.getElementById("intro-image").src = portfolioData.introduction.photo;

// *Populating About section
document.getElementById("about-description").textContent = portfolioData.about.description;

// *Populating Soft skills
portfolioData.about.softSkills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    document.getElementById("soft-skills").appendChild(li);
});

// *Populating Hard skills
portfolioData.about.hardSkills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    document.getElementById("hard-skills").appendChild(li);
});

// *Populating Services
portfolioData.services.forEach(service => {
    const serviceBox = document.createElement("div");
    serviceBox.classList.add("service-box");
    serviceBox.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
    `;
    document.getElementById("services-list").appendChild(serviceBox);
});

// *Populating Projects
portfolioData.projects.forEach(project => {
    const projectBox = document.createElement("div");
    projectBox.classList.add("project-box");
    projectBox.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    document.getElementById("projects-list").appendChild(projectBox);
});

// *Populating Contact Details
document.getElementById("contact-details").innerHTML = `
    <p><strong>Email:</strong> ${portfolioData.contact.email}</p>
    <p><strong>Phone:</strong> ${portfolioData.contact.phone}</p>
    <p><strong>Address:</strong> ${portfolioData.contact.address}</p>
`;

// *Populating Video
document.getElementById("video-source").src = portfolioData.video.src;
document.getElementById("portfolio-video").poster = portfolioData.video.poster;
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

// *Toggle menu visibility on click of the menu icon (for mobile)
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// *Close the menu when a navigation link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Close the menu
    });
});