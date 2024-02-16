import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

  function Nav(){
    return(
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="w-52 text-base font-bold">
            ruleta de las emociones
            <p className="text-sm">Es una ruleta donde puedes ver</p>
        </div>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuTrigger>Item dos</NavigationMenuTrigger>
    <NavigationMenuContent>
        hola
    </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
    <NavigationMenuTrigger>Item dos</NavigationMenuTrigger>
    <NavigationMenuContent>
        hola
    </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
    )
  }
  export default Nav