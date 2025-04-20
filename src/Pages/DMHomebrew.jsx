import * as React from 'react';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

export function DMHomebrew() {
  return (
    <section>
      <h1>Homebrew for Dungeon Masters</h1>
      <LinkCard url={'duels'} linkText={'Duels'} />
      <LinkCard url={'training-system'} linkText={'Training System'} />
      <LinkCard url={'/'} linkText={'Back'} className={'Back'} />
    </section>
  );
}
