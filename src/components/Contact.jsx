import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import { keys } from "../Keys"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm ] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      keys.service, 
      keys.template,
      {
        from_name: form.name,
        to_name: 'Moises',
        from_email: form.email,
        to_email: keys.email,
        message: form.message
      },
      keys.id
      ).then(() => {
        setLoading(false);
        alert('Obrigado. Eu lhe retorno o mais breve possivel!');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)

        console.log(error);

        alert('Algo deu errado, por gentileza tente novamente mais tarde!')
      }
      
      )
      
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2x1"  
      >
        <p className={styles.sectionSubText}>Fale comigo</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Seu nome
            </span>
            <input 
              type="text" 
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Qual é o seu nome?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium"
            
            />
          </label>
                    <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Seu Email
            </span>
            <input 
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Qual é o seu email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
                    <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Mensagem
            </span>
            <textarea
              rows='7' 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Digite sua mensagem"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')