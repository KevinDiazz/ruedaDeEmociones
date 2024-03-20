import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

  function Nav(){
    return(
      <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <div className="w-48 bg-black">
                <ul className="flex flex-col gap-3 bg-white">
                  <li className="bg-[#e06c6c] mt-3">Emociones</li>
                  <li className="bg-[#95caad]">Terapia Personalizada</li>
                  <li className="bg-[#e2e272]">Ansiedad</li>
                  <li className="bg-[#a87ed6] mb-3">Depresión</li>
                </ul>
              </div>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    )
  }
  export default Nav