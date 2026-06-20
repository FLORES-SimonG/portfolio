import CallToAction from './CallToAction';
import Icon from './Icon';

export default function ContactCTA() {
  return (
    <aside className="contact-cta">
      <h2>Interested in working together?</h2>
      <CallToAction href="mailto:kuehn.flores@gmail.com">
        Send Me a Message
        <Icon icon="paper-plane-tilt" size="1.2em" />
      </CallToAction>
    </aside>
  );
}
