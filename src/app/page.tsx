import Image from 'next/image';
import Hero from '@/components/Hero';
import Icon from '@/components/Icon';
import Pill from '@/components/Pill';
import Skills from '@/components/Skills';

export default function HomePage() {
  return (
    <div className="stack gap-20 lg:gap-48">
      <div className="wrapper stack gap-8 lg:gap-20">
        <header className="home-hero">
          <Hero title="Hello, my name is Simón G. Flores" tagline="I am a FullStack Developer and it's a pleasure to meet you!" align="start">
            <div className="roles">
              <Pill>
                <Icon icon="code" size="1.33em" /> Developer
              </Pill>
              <Pill>
                <Icon icon="pencil-line" size="1.33em" /> Frontend
              </Pill>
              <Pill>
                <Icon icon="arrow-up" size="1.33em" /> Germany
              </Pill>
            </div>
          </Hero>

          <Image alt="Simon photo" width={480} height={620} src="/assets/SimonGF_1.jpg" priority />
        </header>

        <Skills />
      </div>
    </div>
  );
}
