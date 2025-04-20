import * as React from 'react';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

export function BaseGameClassReworks() {
  return (
    <section>
      <h1>Base Game Class Reworks</h1>
      <LinkCard url={'rogue'} linkText={'Rogue'} />
      <LinkCard url={'/reworks'} linkText={'Back'} className={'Back'} />
    </section>
  );
}
