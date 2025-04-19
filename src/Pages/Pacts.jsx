import * as React from 'react';
import { Link } from 'react-router-dom';
import Pact from '../Components/Pact/Pact.jsx';

import { PACT_LIST } from '../Data/Pacts/0_PACT_LIST.jsx';

export function Pacts() {
  return (
    <section>
      <h1>Pacts</h1>
      <p>
        In a world of adventurers rapidly gaining experience and power in a
        short span of time in order to conquer their fated adversaries, it is
        often easy to forget that you are most certainly not the first in this
        world to do so. Many beings in this world have gained immense power,
        absconded from this fraction of reality, and become forgotten. This is
        very rarely the end of their interaction with this plane of existence,
        however.
      </p>
      <p>
        Beings with power maintain bonds and influence in this world with Pacts,
        offering a fragment of their immense power to prospective mortals on
        this plane in order to further their own ends.
      </p>
      <h2>Forming a Pact</h2>
      <p>
        Methods of forming a pact are as varied as the strange and esoteric
        entities that offer them, however there are a great many records of
        Pacts thanks to the efforts of the Jakunnal Magical Society, an
        organization dedicated to the study and propagation of occult magical
        practices. Each record is the firsthand account of a member of the JMS
        chronicling the abilities they gained from their pact, and often
        followed by the secondhand accounts of the fates of those same members.
      </p>
      <h2>Types of Pacts</h2>
      <p>
        Listed below are a few example pacts that individuals within Utopia
        Prime form, these pacts are recorded in written history, though it is
        not out of the question that there are unrecorded pacts of far greater
        power, or far more gruesome costs.
      </p>
      {PACT_LIST.map((pact) => {
        return (
          <Pact
            key={pact.name}
            className={pact.className ?? ''}
            pactName={pact.name}
            pactPrologue={pact.prologue}
            pactBenefits={pact.benefits}
            pactEpilogue={pact.epilogue}
            setInnerHtml={pact.setInnerHtml}
          />
        );
      })}
      <Link to={'/player-homebrew'}>Back</Link>
    </section>
  );
}
