import * as React from 'react';
import { Link } from 'react-router-dom';

export function PlayerHomebrew() {
  return (
    <section>
      <h1>Homebrew for Players</h1>
      <Link to={'custom-classes'}>Custom Classes</Link>
      <Link to={'domains'}>Domains</Link>
      <Link to={'homebrew-feats'}>Homebrew Feats</Link>
      <Link to={'homebrew-traits'}>Homebrew Traits</Link>
      <Link to={'pacts'}>Pacts</Link>
      <Link to={'/'}>Back</Link>
    </section>
  );
}
