import * as React from 'react';
import { Link } from 'react-router-dom';

export function BaseGameClassReworks() {
  return (
    <section>
      <h1>Base Game Class Reworks</h1>
      <Link to={'rogue'}>Rogue</Link>
      <Link to={'/reworks'}>Back</Link>
    </section>
  );
}
