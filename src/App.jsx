import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import myImage from "./assets/avatar.png";


const education = [
  {
    school: "Texas A & M University- Kingsville",
    degree: "Master of Science in Computer Science",
    date: "Anticipated Graduation SPRING 2025",
    description: "GPA 3.9",
  },
  {
    school: "Kakatiya University- India",
    degree: "Bachelors in Electrical & Electronics Engineering",
    date: "Graduated 2022",
    description:
      "GPA 3.7 | Major: Electrical and Electronics | Minor: Computer Science",
  },
];

const experience = [
  {
    company: "Texas A&M University- Kingsville",
    position: "Teaching Assistant",
    date: "May 2024 – Present",
    description:
      "Supported faculty for three semesters, assisting with DBMS, Data Mining, Massive Parallel Processing, and Computer Networks. Graded assignments, proctored exams, and provided study materials, ensuring effective learning.",
  },
  {
    company: "Texas A&M University- Kingsville",
    position: "Graduate Assistant",
    date: "March 2024 – Present",
    description:
      "Managed website updates, administrative tasks, and customer inquiries via email and phone. Contributed to a workflow automation project using Power Automate, enhancing efficiency.",
  },
  {
    company: "Infosys",
    position: "Systems Engineer Trainee",
    date: "July 2022 – January 2023",
    description:
      "Worked as a Full-Stack web developer. Worked on projects that were analogous to real world projects. Maintained the Networking Devices and its database.",
  },
  {
    company: "Verzeo",
    position: "Internship",
    date: "May 2021 – July 2021",
    description:
      "Completed 12 weeks of Internship on 'Machine Learning' with 'Python'.",
  },
];

const skills = {
  Languages: ["Python", "JAVA"],
  Frameworks: ["Matplotlib", "React.js"],
  Tools: ["Power Automate", "Microsoft Office", "MySQL"],
  Platforms: ["Visual Studio Code", "PyCharm", "Jupyter", "Eclipse"],
  WebTechnologies: ["HTML", "CSS", "JavaScript"],
  CloudTechnologies: ["AWS Cloud Practitioner"],
};

const projects = [
  {
    title: "ATM Processing System in C++",
    organization: "Kakatiya University",
    date: "April 2019",
    description:
      "Developed an ATM processing system in C++ using OOP principles, including secure card and PIN authentication, real-time database integration for user account updates, and transaction functionalities like withdrawals, deposits, and balance inquiries.",
  },
  {
    title: "Microcontroller-Based Home Automation with Security",
    organization: "Kakatiya University",
    date: "May 2020",
    description:
      "Researched on a home automation and security system using the ATMEL AT89S52 microcontroller, automating appliance control, integrating security features to restrict unauthorized access, and optimizing energy efficiency for enhanced convenience and safety.",
  },
  {
    title: "Performance Management System for Networking Devices",
    organization: "Infosys",
    date: "December 2023",
    description:
      "Developed a web-based performance management system using Spring Boot and React.js, focusing on efficient database design, responsive UI/UX with HTML, CSS, and Bootstrap, and seamless backend-frontend integration for optimal performance.",
  },
  {
    title: "Banking System Database using MySQL",
    organization: "Texas A & M University- Kingsville",
    date: "April 2024",
    description:
      "Built a comprehensive banking database focused on data centralization for efficient management, implemented high-level security protocols to maintain transaction integrity, and ensured scalability to support growth and increased user loads.",
  },
  {
    title: "Web Hosting & PHP Validation using AWS",
    organization: "Texas A & M University- Kingsville",
    date: "April 2024",
    description:
      "Deployed a secure and scalable webpage on AWS using an Ubuntu server with PHP validation, leveraging AWS Elastic Beanstalk for high availability, implementing server-side form validation for data integrity, and optimizing performance and reliability in the hosting environment.",
  },
  {
    title: "Parallel vs. Sequential Matrix Multiplication using MPI",
    organization: "Texas A & M University- Kingsville",
    date: "October 2024",
    description:
      "Designed and implemented parallel matrix multiplication using MPI with mpi4py, comparing its efficiency to sequential execution. Focused on load balancing, performance benchmarking for speedup analysis, and scalability assessment across multiple processors for optimized execution.",
  },
  {
    title: "Deadlock Detection using Resource Allocation Graph (RAG)",
    organization: "Texas A & M University- Kingsville",
    date: "November 2024",
    description:
      "Developed a deadlock detection mechanism in Python using a Resource Allocation Graph (RAG) to identify and resolve cyclic dependencies. Utilized cycle detection algorithms for deadlock prevention and optimized computational efficiency for real-time system monitoring.",
  },
];

function App() {
  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <motion.h1
              className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Bhavana Yenduri
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Computer Science Graduate Student
            </motion.p>
            <motion.div
              className="flex flex-col gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="tel:+13614667461"
                className="contact-link flex items-center gap-2"
              >
                <span className="text-indigo-400">📞</span>
                <span>+1(361) 466-7461</span>
              </a>
              <a
                href="mailto:ybhavana2023@gmail.com"
                className="contact-link flex items-center gap-2"
              >
                <span className="text-indigo-400">📧</span>
                <span>ybhavana2023@gmail.com</span>
              </a>
            </motion.div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="hero-card p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-400">
                  Full Stack Developer
                </h3>
                <p className="text-gray-300">
                  Passionate about creating efficient solutions
                </p>
              </div>
              <div className="hero-card p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-400">
                  Graduate Student
                </h3>
                <p className="text-gray-300">Pursuing MS in Computer Science</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex-shrink-0"
          >
            <img
              src={myImage}
              alt="Bhavana Yenduri"
              className="hero-image w-54 h-54 md:w-80 md:h-80"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="skill-card bg-white bg-opacity-5 p-4 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-indigo-400 mb-2">
                {category}
              </h3>
              <p className="text-gray-300">{skillList.join(", ")}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <VerticalTimeline>
          {experience.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              date={exp.date}
              iconStyle={{ background: "rgb(99, 102, 241)", color: "#fff" }}
            >
              <h3 className="text-xl font-bold">{exp.position}</h3>
              <h4 className="text-lg text-indigo-400">{exp.company}</h4>
              <p className="text-gray-300">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Education
        </h2>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              date={edu.date}
              iconStyle={{ background: "rgb(99, 102, 241)", color: "#fff" }}
            >
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <h4 className="text-lg text-indigo-400">{edu.school}</h4>
              <p className="text-gray-300">{edu.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="project-card bg-white bg-opacity-5 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="flex justify-between items-center mb-3">
                <span className="text-indigo-400">{project.organization}</span>
                <span className="text-gray-400">{project.date}</span>
              </div>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
