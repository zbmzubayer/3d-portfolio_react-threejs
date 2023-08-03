/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants/constant";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py -5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] sm:max-w-4xl leading-[30px] text-justify"
      >
        I am skilled software engineer with 3+ years of experience in web and
        mobile application development. I have worked with various technologies
        including React, React Native, Node, Express, MongoDB, Firebase, MySQL,
        PostgreSQL, GraphQL, Apollo, Prisma, Next, Gatsby, TypeScript,
        JavaScript, HTML, CSS, SASS, Tailwind, Bootstrap, Material UI, Styled
        Components, Framer Motion, Three.js, Blender, Adobe XD, Figma, Git,
        GitHub, GitLab, Netlify, Vercel, Heroku, Digital Ocean, AWS, Google
        Cloud, and more.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
