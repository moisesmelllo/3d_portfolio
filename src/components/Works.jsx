import {Tilt} from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github, deploy } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({index, name, description, tags, image, source_code_link, deploy_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2x1 sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2x1"
          />
        </div>

        <div className="absolute inset-0 flex justify-end m-6 card-img_hover">
          <div
            onClick={() => window.open(deploy_link, '_blank')}
            className="black-gradient w-10 h-10 mr-1
            rounded-full flex justify-center
            items-center cursor-pointer"
          >
            <img 
              src={deploy} 
              alt="deploy"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          
          <div
            onClick={() => window.open(source_code_link, '_blank')}
            className="black-gradient w-10 h-10
            rounded-full flex justify-center
            items-center cursor-pointer"
          >
            <img 
              src={github} 
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Meus trabalhos
        </p>
        <h2 className={styles.sectionHeadText}>
          Projetos
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px]
          max-w-3x1 leading-[30px]"
        >
           Meu portfólio é uma coleção diversificada de projetos, que inclui desde sites dinâmicos e aplicativos inovadores até sistemas complexos. Cada projeto é uma história de desafios superados e metas alcançadas, contendo uma breve descrição, além de um link para seu repositório e deploy.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works');