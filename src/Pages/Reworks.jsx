import * as React from 'react';
import { Link } from 'react-router-dom';

export function Reworks() {
  return (
    <section>
      <h1>Reworks</h1>
      <Link to={'base-game-class-reworks'}>Base Game Class Reworks</Link>
      <Link to={'core-rule-changes'}>Core Rule Changes</Link>
      <Link to={'occult-magic'}>Occult Magic</Link>
      <Link to={'poisons'}>Poisons</Link>
      <Link to={'/'}>Back</Link>
    </section>
  );
}
