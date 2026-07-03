"use client";

import { useTranslations } from "./I18nProvider";
import Icon, { IconName } from "./Icon";
import Pill from "./Pill";

export default function PillSection() {
  const t = useTranslations();

  const pillItems = [
    {
      id: "developer",
      icon: "code" as IconName,
      label: t("roles.developer"),
    },
    {
      id: "frontend",
      icon: "pencil-line" as IconName,
      label: t("roles.frontend"),
    },
    {
      id: "location",
      icon: "arrow-up" as IconName,
      label: t("roles.location"),
    },
  ];
  return (
    <div className="roles">
      {pillItems.map((item) => (
        <Pill key={item.id}>
          <Icon icon={item.icon} size="1.33em" /> {item.label}
        </Pill>
      ))}
    </div>
  );
}
