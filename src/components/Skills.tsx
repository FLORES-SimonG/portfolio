import Icon from "./Icon";

export default function Skills() {
  return (
    <section className="box skills">
      <div className="stack gap-2 lg:gap-4">
        <Icon
          icon="terminal-window"
          color="var(--accent-regular)"
          size="2.5rem"
          gradient
        />
        <h2>Full Stack</h2>
        <p>
          I have experience working with JavaScript, Typescript, Angular,
          React.js, Vue.js, Next.js, Tailwind CSS, and Bootstrap, among others.
        </p>
      </div>
      <div className="stack gap-2 lg:gap-4">
        <Icon
          icon="trophy"
          color="var(--accent-regular)"
          size="2.5rem"
          gradient
        />
        <h2>Experienced Leader</h2>
        <p>
          I was a president for 5 years, leading projects and growing the
          organization. As a football coach for 2 years, I improved my team
          management and communication skills.
        </p>
      </div>
      <div className="stack gap-2 lg:gap-4">
        <Icon
          icon="strategy"
          color="var(--accent-regular)"
          size="2.5rem"
          gradient
        />
        <h2>Growth & Learning</h2>
        <p>
          I always want to get better and learn about new technology in the
          market. I look for chances to grow my skills and use new ideas in my
          work.
        </p>
      </div>
    </section>
  );
}
