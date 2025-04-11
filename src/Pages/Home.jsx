import * as React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <section>
      <h1>Welcome to Wonder</h1>
      <h2>A Complete Pathfinder First Edition Overhaul</h2>
      <Link to={'reworks'}>Reworks</Link>
      <Link to={'dm-homebrew'}>Homebrew for DMs</Link>
      <Link to={'player-homebrew'}>Homebrew for Players</Link>
      <Link to={'setting'}>The Wonder Setting</Link>
    </section>
  );
}
