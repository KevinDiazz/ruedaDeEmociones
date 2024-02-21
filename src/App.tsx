import Acordeon from './components/accordeon.jsx'
import Nav from './components/nav.jsx'
import IntroPage from './components/intoPage.jsx'
import './App.css'
import rueda from './components/ruedaD3.js'
import { useEffect,useRef} from 'react'
function App() {
  const svgRef = useRef();
  useEffect(()=>{
    if(svgRef.current) {
      rueda(svgRef.current); // Pasar la referencia del SVG a la función
  }
  },[])
  return (
    <>
    <Nav></Nav>
    <IntroPage></IntroPage>
    <Acordeon></Acordeon>
    <svg className='font-bold text-[8pt]' ref={svgRef} width="600" height="600"></svg>
    </>
  )
}

export default App
