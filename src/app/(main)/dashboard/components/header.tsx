import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
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
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
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
