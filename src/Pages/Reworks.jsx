import * as React from 'react';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

export function Reworks() {
  return (
    <section>
      <h1>Reworks</h1>
      <LinkCard
        url={'base-game-class-reworks'}
        linkText={'Base Game Class Reworks'}
      />
      <LinkCard url={'core-rule-changes'} linkText={'Core Rule Changes'} />
      <LinkCard url={'occult-magic'} linkText={'Occult Magic'} />
      <LinkCard url={'poisons'} linkText={'Poisons'} />
      <LinkCard url={'/'} linkText={'Back'} className={'Back'} />
    </section>
  );
}
