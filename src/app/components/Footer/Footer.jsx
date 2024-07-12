import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import BtnRedSocial from '../Buttons/BtnRedSocial'
import './Footer.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer>
        <h3>Redes sociales</h3>
        <section className='redes'>
            <BtnRedSocial
            logo = {<FontAwesomeIcon icon={faLinkedinIn} />}
            href='https://www.linkedin.com/in/agustin-fizzano'
            />
            <BtnRedSocial
            logo = {<FontAwesomeIcon icon={faGithub} />}
            href='https://github.com/TutozGhub/'
            />
            <BtnRedSocial
            logo ={<FontAwesomeIcon icon={faEnvelope} />}
            href='mailto:agustin_fizzano@hotmail.com'
            />
        </section>
    </footer>
  )
}
