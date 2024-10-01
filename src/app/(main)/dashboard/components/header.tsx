import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useCallback } from "react";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const UserMenu = React.memo(() => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        size="icon"
        variant="ghost"
        className="-m-1.5 flex items-center p-1.5"
      >
        <span className="sr-only">Open user menu</span>
        <Avatar className="h-8 w-8 rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      className="w-32 mt-2.5 origin-top-right rounded-md py-2 shadow-lg ring-1 ring-foreground/25 transition focus:outline-none data-[state=closed]:scale-95 data-[state=closed]:transform data-[state=closed]:opacity-0 data-[state=open]:duration-100 data-[state=closed]:duration-75 data-[state=open]:ease-out data-[state=closed]:ease-in"
    >
      {userNavigation.map((item) => (
        <DropdownMenuItem key={item.name}>
          <a
            href={item.href}
            className="block px-3 py-1 text-sm leading-6 text-foreground data-[state=open]:bg-foreground/25"
          >
            {item.name}
          </a>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
));

export const Header = ({
  setSidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void;
}) => {
  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      <Button
        size="icon"
        variant="outline"
        className="-m-2.5 p-2.5 lg:hidden"
        onClick={handleSidebarToggle}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </Button>
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex items-center gap-x-4 lg:gap-x-6 ml-auto">
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};
