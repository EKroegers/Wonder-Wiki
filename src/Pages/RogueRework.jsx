import * as React from 'react';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

export function RogueRework() {
  return (
    <section>
      <h1>Rogue</h1>
      <LinkCard
        url={'/reworks/base-game-class-reworks'}
        linkText={'Back'}
        className={'Back'}
      />
    </section>
  );
}
