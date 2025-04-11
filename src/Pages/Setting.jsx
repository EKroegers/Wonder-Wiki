import * as React from 'react';
import { Link } from 'react-router-dom';

export function Setting() {
  return (
    <section>
      <h1>Setting</h1>
      <Link to={'living-spells'}>Living Spells</Link>
      <Link to={'new-schools-of-magic'}>New Schools of Magic</Link>
      <Link to={'races'}>Races</Link>
      <Link to={'/'}>Back</Link>
    </section>
  );
}
