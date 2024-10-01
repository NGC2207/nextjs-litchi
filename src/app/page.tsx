import FAQs from "@/components/faqs";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MainView } from "@/components/main-view";

export default function Home() {
  return (
    <>
      <Header />
      <MainView />
      <FAQs />
      <Footer />
    </>
  );
}
