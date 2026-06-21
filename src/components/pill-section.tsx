import Icon, { IconName } from "./Icon";
import Pill from "./Pill";

{
  {
    /* <Pill>
                <Icon icon="code" size="1.33em" /> Developer
              </Pill>
              <Pill>
                <Icon icon="pencil-line" size="1.33em" /> Frontend
              </Pill>
              <Pill>
                <Icon icon="arrow-up" size="1.33em" /> Germany
              </Pill>
 */
  }
}

interface PillSectionProps {
  items: {
    icon: IconName;
    label: string;
  }[];
}

export default function PillSection({ items }: PillSectionProps) {
  return (
    <div className="roles">
      {items.map((item, index) => (
        <Pill key={index}>
          <Icon icon={item.icon} size="1.33em" /> {item.label}
        </Pill>
      ))}
    </div>
  );
}
