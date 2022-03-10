import emoji from "react-easy-emoji";

export const greetings = {
	name: "Cayden Cox",
	title: "Hi all, I'm Cayden",
	description:
		"A freshly graduated Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / some other cool libraries and frameworks.",
	resumeLink: "",
};

export const openSource = {
	githubUserName: "Forlaenu",
};

export const contact = {};

// TODO : FIND URLS FOR SOCIALS
export const socialLinks = {
	facebook: "https://www.facebook.com/Forlaenu",
	instagram: "https://www.instagram.com/forlaenu",
	twitter: "https://twitter.com/",
	github: "https://github.com/Forlaenu",
	linkedin: "https://www.linkedin.com/in/"
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"NEW FULL STACK DEVELOPER WHO WANTS TO EXPLORE AND LEARN EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop and deploy interactive, immersive, and responsive web apps using modern frameworks"
		),
		emoji(
			"⚡ Create API's and back end routes to incorporate 3rd party platforms and databases"
		),
		emoji(
			"⚡ Build stateful front ends, with creative algorithms to consume back end data"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "redux",
			fontAwesomeClassname: "logos:redux"
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		// {
		// 	skillName: "flutter",
		// 	fontAwesomeClassname: "logos:flutter",
		// },
		// {
		// 	skillName: "swift",
		// 	fontAwesomeClassname: "vscode-icons:file-type-swift",
		// },
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "postgresql",
			fontAwesomeClassname: "logos:postgresql",
		},
		{
			skillName: "postman",
			fontAwesomeClassname: "logos:postman-icon"	
		},
		// {
		// 	skillName: "mongoDB",
		// 	fontAwesomeClassname: "vscode-icons:file-type-mongo",
		// },
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		// {
		// 	skillName: "firebase",
		// 	fontAwesomeClassname: "logos:firebase",
		// },
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		// {
		// 	skillName: "docker",
		// 	fontAwesomeClassname: "logos:docker-icon",
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "90",
	},
];

export const educationInfo = [
	{
		schoolName: "DigitalCrafts",
		subHeader: "Full Stack Web Development",
		duration: "November 2021 - March 2022",
		desc: "An immersive, 16-week course covering all aspects web development",
		descBullets: [
			"Full-stack JavaScript, React, SQL, HTML, CSS, CLI, Git, and more",
			"Built many apps and websites using the various technologies, from the ground up",
		],
	}
];

export const experience = [
	// {
	// 	role: "Software Engineer",
	// 	company: "Google",
	// 	companylogo: "/img/icons/common/google.svg",
	// 	date: "June 2018 – Present",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// 	descBullets: [
	// 		"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	],
	// },
	// {
	// 	role: "Front-End Developer",
	// 	company: "Github",
	// 	companylogo: "/img/icons/common/github.svg",
	// 	date: "May 2017 – May 2018",
	// 	desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// },
	// {
	// 	role: "Software Engineer Intern",
	// 	company: "Airbnb",
	// 	companylogo: "/img/icons/common/airbnbLogo.png",
	// 	date: "Jan 2015 – Sep 2015",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// },
];

export const projects = [
	{
		name: "Kackle",
		desc: "A social media website that combines multiple social media portals into one, including built in chat/DM functionality",
		github: "https://github.com/Forlaenu/kackle",
		link: "https://kackleapp.herokuapp.com/"
	},
	{
		name: "(You)sedBooks",
		desc: "A play on used books, this was a project that incorporated Google Books, NYTimes, and Wikipedia API's, along with a PostgreSQL database to allow users to search for books, add them to a reading list, and post books for trade.",
		github: "https://github.com/Forlaenu/yousedbooks"
	},
	{
		name: "BrewFinder",
		desc: "A solo project to demonstrate Google Maps API and redux, allowing the search of Breweries based on Open Brewery DB. ",
		github: "https://github.com/Forlaenu/BrewFinder",
	}
	// {
	// 	name: "lorem ipsum",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	// 	link: "https://example.com",
	// },
	// {
	// 	name: "lorem ipsum",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	// 	github: "https://github.com/1hanzla100",
	// },
	// {
	// 	name: "lorem ipsum",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	// 	github: "https://github.com/1hanzla100",
	// 	link: "https://example.com",
	// },
];

export const feedbacks = [
	// {
	// 	name: "Hassan Mehmood",
	// 	feedback:
	// 		"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	// },
	// {
	// 	name: "Maheen Altaf",
	// 	feedback:
	// 		"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	// },
];
