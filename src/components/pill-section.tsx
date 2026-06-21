"use client";

import { useTranslations } from "./I18nProvider";
import Icon, { IconName } from "./Icon";
import Pill from "./Pill";



export default function PillSection() {
  const t = useTranslations();

  const pillItems = [
    { icon: "code" as IconName, label: t("roles.developer") },
    { icon: "pencil-line" as IconName, label: t("roles.frontend") },
    { icon: "arrow-up" as IconName, label: t("roles.location") },
  ];
  return (
    <div className="roles">
      {pillItems.map((item, index) => (
        <Pill key={index}>
          <Icon icon={item.icon} size="1.33em" /> {item.label}
        </Pill>
      ))}
    </div>
  );
}
