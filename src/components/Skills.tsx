import Icon from "./Icon";
import { useTranslations } from "./I18nProvider";

export default function Skills() {
  const t = useTranslations();

  return (
    <section className="box skills">
      <div className="stack gap-2 lg:gap-4">
        <Icon
          icon="terminal-window"
          color="var(--accent-regular)"
          size="2.5rem"
          gradient
        />
        <h2>{t('skills.fullstack.title')}</h2>
        <p>{t('skills.fullstack.desc')}</p>
      </div>
      <div className="stack gap-2 lg:gap-4">
        <Icon
          icon="trophy"
          color="var(--accent-regular)"
          size="2.5rem"
          gradient
        />
        <h2>{t('skills.leader.title')}</h2>
        <p>{t('skills.leader.desc')}</p>
      </div>
      <div className="stack gap-2 lg:gap-4">
        <Icon
          icon="strategy"
          color="var(--accent-regular)"
          size="2.5rem"
          gradient
        />
        <h2>{t('skills.growth.title')}</h2>
        <p>{t('skills.growth.desc')}</p>
      </div>
    </section>
  );
}
