import Acordeon from './components/accordeon.tsx'
import IntroPage from './components/intoPage.tsx'
import { Separator } from "@/components/ui/separator"
import './App.css'
// import Rueda from './components/ruedaD3.js'
import RuedaInfo from './components/ruedaInfo.tsx'
import Header from './components/header.tsx'
import { useEffect, useState } from 'react'
function App() {
  function resize() {
    setWindowWidth(window.innerWidth)
    console.log(`Nuevo tamaño de ventana: ${window.innerWidth} x ${window.innerHeight}`);
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showRueda, setShowRueda] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', resize);
    setTimeout(() => {
      setShowRueda(true)
    }, 1000);
    return () => {
      removeEventListener('resize', resize)
      setShowRueda(false)
    };
  }, [windowWidth])

  return (
    <>
      <Header></Header>
      <IntroPage></IntroPage>
      <Acordeon key="2"></Acordeon>
      {showRueda ? <RuedaInfo windowWidth={windowWidth}></RuedaInfo> : <div className='mt-5 flex justify-center'><div className="loader mt-5"></div></div>}
      <div className='flex flex-col items-center md:items-start mt-10'>
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Mi camino</h4>
          <p className="text-sm text-muted-foreground">
            Tu web de Desarrollo Personal
          </p>
        </div>
        <Separator className="my-4 h-[1px] bg-black" />
        <div className="flex h-2 self-center items-center space-x-3 text-sm">
          <div>X</div>
          <Separator className='h-4 w-[1px] bg-black' orientation="vertical" />
          <div>Instagram</div>
          <Separator className='h-4 w-[1px] bg-black' orientation="vertical" />
          <div>Facebook</div>
        </div>
      </div>
    </>
  )
}

export default App
