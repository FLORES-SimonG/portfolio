import CallToAction from "./CallToAction";
import Icon from "./Icon";
import { getTranslations } from "next-intl/server";

export default async function ContactCTA() {
  const t = await getTranslations();

  return (
    <aside className="contact-cta">
      <h2>{t("contact.heading")}</h2>
      <CallToAction href="mailto:kuehn.flores@gmail.com">
        {t("contact.button")}
        <Icon icon="paper-plane-tilt" size="1.2em" />
      </CallToAction>
    </aside>
  );
}
