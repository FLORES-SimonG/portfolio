import { getTranslations } from "next-intl/server";


export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const t = await getTranslations();

  return (
    <footer>
      <div className="group">
        <p>{t("footer.location")}</p>
        <p>&copy; {currentYear} Simón G. Flores</p>
      </div>
      <p className="socials">
        <a href="https://github.com/FLORES-SimonG"> GitHub</a>
        <a href="https://www.linkedin.com/in/simongf94/"> LinkedIn</a>
      </p>
    </footer>
  );
}
