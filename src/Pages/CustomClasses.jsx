import * as React from 'react';
import { Link } from 'react-router-dom';

export function CustomClasses() {
  return (
    <section>
      <h1>Custom Classes</h1>
      <Link to={'apostate'}>Apostate</Link>
      <Link to={'astral-blade'}>Astral Blade</Link>
      <Link to={'dagger-of-dusk'}>Dagger of Dusk</Link>
      <Link to={'fateweaver'}>Fateweaver</Link>
      <Link to={'mutant-mercenary'}>Mutant Mercenary</Link>
      <Link to={'saiyan-warrior'}>Saiyan Warrior</Link>
      <Link to={'underdog'}>Underdog</Link>
      <Link to={'/player-homebrew'}>Back</Link>
    </section>
  );
}
