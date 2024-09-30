import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { TypingEffect } from "@/components/typing-effect";

export function MainView() {
  const t = useTranslations("HomePage.MainView");
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg text-foreground/75">
              {t("description")}
            </p>
            <div className="mt-6 text-lg text-foreground/50">
              <TypingEffect />
            </div>
            <div className="not-prose mb-16 mt-6 flex gap-3">
              <Button size="sm" className="rounded-2xl">{t("quickStart")}</Button>
              <Button variant="secondary" size="sm" className="rounded-2xl">{t("contactUs")}</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
