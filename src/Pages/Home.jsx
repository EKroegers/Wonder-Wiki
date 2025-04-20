import * as React from 'react';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

export function Home() {
  return (
    <section>
      <h1>Welcome to Wonder</h1>
      <h2>A Complete Pathfinder First Edition Overhaul</h2>
      <LinkCard url={'reworks'} linkText={'Reworks'} />
      <LinkCard url={'dm-homebrew'} linkText={'Homebrew for DMs'} />
      <LinkCard url={'player-homebrew'} linkText={'Homebrew for Players'} />
      <LinkCard url={'setting'} linkText={'The Wonder Setting'} />
    </section>
  );
}
