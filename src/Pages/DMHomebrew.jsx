import * as React from 'react';
import { Link } from 'react-router-dom';

export function DMHomebrew() {
  return (
    <section>
      <h1>Homebrew for Dungeon Masters</h1>
      <Link to={'duels'}>Duels</Link>
      <Link to={'training-system'}>Training System</Link>
      <Link to={'/'}>Back</Link>
    </section>
  );
}
