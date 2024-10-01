import { cn } from "@/lib/utils";
import {
  Cog6ToothIcon,
  HomeIcon,
  CloudIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";
import { Logo } from "@/components/logo";
import { useTranslations } from "next-intl";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  current: boolean;
}

const SidebarContent = () => {
  const t = useTranslations("DashboardPage.NavBar");

  const navItems: NavItem[] = [
    { name: t("dashboard"), href: "/dashboard", icon: HomeIcon, current: true },
    {
      name: t("cloudServer"),
      href: "/cloudserver",
      icon: CloudIcon,
      current: false,
    },
    {
      name: t("webIDE"),
      href: "/webide",
      icon: CommandLineIcon,
      current: false,
    },
  ];

  const NavItem = ({ item }: { item: NavItem }) => (
    <li key={item.name}>
      <a
        href={item.href}
        className={cn(
          item.current
            ? "bg-foreground/5 text-primary"
            : "text-foreground/50 hover:bg-foreground/5 hover:text-primary",
          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
        )}
      >
        <item.icon
          aria-hidden="true"
          className={cn(
            item.current
              ? "text-primary"
              : "text-foreground/50 group-hover:text-primary",
            "h-6 w-6 shrink-0"
          )}
        />
        {item.name}
      </a>
    </li>
  );

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-background px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center pt-5">
        <Logo className="h-10 w-auto flex items-center" />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <a
              href="/settings"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-foreground/50 hover:bg-foreground/5 hover:text-primary"
            >
              <Cog6ToothIcon
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-foreground/50 group-hover:text-primary"
              />
              {t("settings")}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-foreground/50 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <SidebarContent />
          </DialogPanel>
        </div>
      </Dialog>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-r">
        <SidebarContent />
      </div>
    </>
  );
}
