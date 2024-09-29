import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function IntlToggle() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="zh-CN">Chinese Simple</SelectItem>
        <SelectItem value="zh-TW">Chinses Traditional</SelectItem>
      </SelectContent>
    </Select>
  );
}
