import { MenuIcon, PanelsTopLeft } from "lucide-react";

import { Button } from "@/Components/ui/button";

import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/Components/ui/sheet";
import { Menu } from "./menu";
import { Link } from "@inertiajs/react";



export function SheetMenu() {

  const appName = "App"

  return (
    <Sheet>
  
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
        <SheetTitle className="sr-only">Sidebar</SheetTitle>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link href={route('bo.dashboard')} className="flex items-center gap-2">
              <PanelsTopLeft className="w-6 h-6 mr-1" />
              <h1 className="font-bold text-lg">{appName}</h1>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
}