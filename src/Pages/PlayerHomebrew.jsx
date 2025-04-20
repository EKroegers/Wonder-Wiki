import * as React from 'react';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

export function PlayerHomebrew() {
  return (
    <section>
      <h1>Homebrew for Players</h1>
      <LinkCard url={'custom-classes'} linkText={'Custom Classes'} />
      <LinkCard url={'domains'} linkText={'Domains'} />
      <LinkCard url={'homebrew-feats'} linkText={'Homebrew Feats'} />
      <LinkCard url={'homebrew-traits'} linkText={'Homebrew Traits'} />
      <LinkCard url={'pacts'} linkText={'Pacts'} />
      <LinkCard url={'/'} linkText={'Back'} className={'Back'} />
    </section>
  );
}
