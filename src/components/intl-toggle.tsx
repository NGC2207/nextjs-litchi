"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Locale, locales } from "@/i18n/config";

interface IntlToggleProps {
  userLocale: Locale;
}

export function IntlToggle({ userLocale }: IntlToggleProps) {
  const t = useTranslations("IntlToggle");
  const [selectedOption, setSelectedOption] = useState<Locale>(userLocale);

  const localeOptions = useMemo(() => {
    return locales.map((locale) => ({
      value: locale,
      label: `${t(`${locale}.flag`)} ${t(`${locale}.name`)}`
    }));
  }, [t]);

  return (
    <Select
      value={selectedOption}
      onValueChange={(value: Locale) => setSelectedOption(value)}
    >
      <SelectTrigger className="w-[205px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-[205px]">
        {localeOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}