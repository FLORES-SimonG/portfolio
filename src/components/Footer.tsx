export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="group">
        <p>Gelsenkirchen, Nordrhein-Westfalen, Deutschland</p>
        <p>&copy; {currentYear} Simón G. Flores</p>
      </div>
      <p className="socials">
        <a href="https://github.com/FLORES-SimonG"> GitHub</a>
        <a href="https://www.linkedin.com/in/simongf94/"> LinkedIn</a>
      </p>
    </footer>
  );
}
