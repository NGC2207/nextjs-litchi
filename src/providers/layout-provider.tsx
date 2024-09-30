import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer/>
    </>
  );
}
