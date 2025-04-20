import * as React from 'react';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

export function CustomClasses() {
  return (
    <section>
      <h1>Custom Classes</h1>
      <LinkCard url={'apostate'} linkText={'Apostate'} />
      <LinkCard url={'astral-blade'} linkText={'Astral Blade'} />
      <LinkCard url={'dagger-of-dusk'} linkText={'Dagger of Dusk'} />
      <LinkCard url={'fateweaver'} linkText={'Fateweaver'} />
      <LinkCard url={'mutant-mercenary'} linkText={'Mutant Mercenary'} />
      <LinkCard url={'saiyan-warrior'} linkText={'Saiyan Warrior'} />
      <LinkCard url={'underdog'} linkText={'Underdog'} />
      <LinkCard url={'/player-homebrew'} linkText={'Back'} className={'Back'} />
    </section>
  );
}
