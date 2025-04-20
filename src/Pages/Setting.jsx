import * as React from 'react';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

export function Setting() {
  return (
    <section>
      <h1>Setting</h1>
      <LinkCard url={'living-spells'} linkText={'Living Spells'} />
      <LinkCard
        url={'new-schools-of-magic'}
        linkText={'New Schools of Magic'}
      />
      <LinkCard url={'races'} linkText={'Races'} />
      <LinkCard url={'/'} linkText={'Back'} className={'Back'} />
    </section>
  );
}
