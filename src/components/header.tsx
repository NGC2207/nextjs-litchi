import Link from "next/link";
import { Locale } from "@/i18n/config";
import { Logo } from "@/components/logo";
import { getUserLocale } from "@/services/locale";
import { Container } from "@/components/container";
import { IntlToggle } from "@/components/intl-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

export async function Header() {
  const userLocale = await getUserLocale();

  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto flex items-center" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <IntlToggle userLocale={userLocale as Locale} />
            <ThemeToggle />
          </div>
        </Container>
      </nav>
    </header>
  );
}
