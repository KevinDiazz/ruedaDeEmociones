import Nav from "./nav"
import logo from '../assets/pngegg (17).png'
function Header(){
    return(
    <header className="flex flex-col md:flex-row gap-5 mb-3">
        <div className="flex justify-center md:justify-start">
        <h1 className="text-4xl md:text-6xl font-tokyo">Mi Camino</h1>
        <img className="w-12" src={logo}></img></div>
        <div className="flex justify-center ">
<Nav></Nav></div>
    </header>)
}
export default Header;