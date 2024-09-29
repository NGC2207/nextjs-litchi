import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locales } from "@/i18n/config";
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";

export async function IntlToggle() {
  const t = useTranslations("IntlToggle");
  const locale = await getLocale();
  return (
    <Select>
      <SelectTrigger>
        <SelectValue
          placeholder={`${t(`${locale}.flag`)} ${t(`${locale}.name`)}`}
        />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {t(`${locale}.flag`)} {t(`${locale}.name`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
