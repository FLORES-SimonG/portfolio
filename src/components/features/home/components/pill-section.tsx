import Icon, { IconName } from "@/components/Icon";
import { getTranslations } from "next-intl/server";
import PillComponent from "../../common/pill-component";




export default async function PillSection() {
  const t = await getTranslations();

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
        <PillComponent key={item.id}>
          <Icon icon={item.icon} size="1.33em" /> {item.label}
        </PillComponent>
      ))}
    </div>
  );
}
