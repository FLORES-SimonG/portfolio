import type { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'About | Simón G. Flores',
  description: 'About Simón G. Flores',
};

export default function AboutPage() {
  return (
    <div className="stack gap-20">
      <main className="wrapper about">
        <Hero title="About me" />

        <section>
          <h2 className="section-title">Background</h2>
          <div className="content">
            <p>
              I have experience in software development, especially in web development with a focus on frontend technologies. Since August
              2024, I am working at <a href="https://refineit.de/">RefineIT</a> in Recklinghausen as part of the frontend team, focusing on
              ReactJS/NextJS. I previously completed an internship as a software developer at Alltagsauto.ch.
            </p>

            <br />
            <p>
              From 03/2024 to 06/2024 I have worked as a Teaching Assistant in the same field where I studied, helping students learn and
              improve their skills.
            </p>
            <br />
            <p>
              Before I started programming, I graduated as a University Technician in Chemistry from Universidad Tecnológica Nacional Villa
              María in Argentina. This was my first experience with technology, through process simulations. By studying Chemical Engineering
              at university, I gained a solid understanding of mathematics, physics, chemistry, algebra, and calculus.
            </p>
            <br />

            <p>
              I live in Gelsenkirchen since April 2021. My native language is Spanish, I have a B2 level in German and a B2 level in
              English, and I speak Portuguese fluently.
            </p>
          </div>
        </section>
        <section>
          <h2 className="section-title">Education</h2>
          <div className="content">
            <p>Full-Stack Developer - Henry</p>
            <p>University Technician in Chemistry - Universidad Tecnológica Nacional Villa María</p>
          </div>
        </section>
        <section>
          <h2 className="section-title">Skills</h2>
          <div className="content">
            <p>React | Angular | NextJS | Typescript | JavaScript | Figma | Leadership | Tailwind | Astro | PostgreSQL | NodeJS</p>
          </div>
        </section>
      </main>
    </div>
  );
}
