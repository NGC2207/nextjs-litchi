import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { Button } from "./ui/button";

export function Header() {
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
            <Button>Test</Button>
          </div>
        </Container>
      </nav>
    </header>
  );
}
