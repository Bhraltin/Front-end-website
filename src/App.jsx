
import { useContext } from 'react'
import './App.css'
import About from './components/About'
import { DataProvider } from './components/context/DataContext'
import LanguageContextProvider from './components/context/LanguageContext'
import { ThemeContext, ThemeContextProvider } from './components/context/ThemeContext'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const { theme } = useContext( ThemeContext);

  return (
  
  <DataProvider>
    <LanguageContextProvider>
    <ThemeContextProvider>
    <div>


      <Header/>
      <About/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
      </div>
      </ThemeContextProvider>
      </LanguageContextProvider>
    </DataProvider>
  
  )
}

export default App
