import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#F94892'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="Tarot Card Reading"
        projectDesc="A Tarot Card Reading website offers users a mystical and insightful experience to explore their future, gain clarity, and uncover hidden truths. With an elegant design and interactive features, users can draw cards and receive personalized readings on love, career, or life challenges."
        projectLink="https://github.com/DevanshSahni/Wiggles"
        deployedProjectLink="https://aamras.com/tarot-card-reading/"
        projectImg={require('./images/projecTarot.png')}
      />

      <ProjectCard
        projectTitle="Real-Time Quiz Application"
        projectDesc="Our real-time quiz application, built with Node.js, HTML, CSS, and JavaScript, offers an interactive and engaging platform for hosting and participating in live quizzes"
        projectLink="https://github.com/Amitkumar9027/realtime-quiz-app-mongoDb"
        deployedProjectLink="https://deepajha14.github.io/Touch-me-not-Card/"
        projectImg={require('./images/projecTarot.png')}
      />

      {/* <ProjectCard
        className = "odd"
        projectTitle="Rog-free: accessible anytime, anywhere"
        projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
        projectLink="https://github.com/Deepajha14/Rog-Free"
        deployedProjectLink="https://deepajha14.github.io/Rog-Free/"
        projectImg={require('./images/projecTarot.png')}
      /> */}
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
