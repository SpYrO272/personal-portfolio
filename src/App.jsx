

import AboutMeMain from './components/aboutmesection/AboutMeMain'
import ContactMeMain from './components/contact section/ContactMeMain'
import ExperienceMain from './components/Experience/ExperienceMain'
import FooterMain from './components/footer/FooterMain'
import HelperSection from './components/HelperSection'
import HeroGradient from './components/Herosection/HeroGradient'
import { HeroMain } from './components/Herosection/HeroMain'
import SubHeroSection from './components/Herosection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectsMain from './components/projest section/ProjectsMain'
import SkillsMain from './components/Skills/SkillsMain'
import SubSkills from './components/Skills/SubSkills'

function App() {


  return (
    <main className='font-body'>
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <ExperienceMain/>
      <ProjectsMain/>
      <ContactMeMain/>
      <FooterMain/>
      {/* <HelperSection/> */}
      
    </main>
  )
}

export default App
