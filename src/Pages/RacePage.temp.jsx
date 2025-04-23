import * as React from 'react';
import LinkCard from '../Components/LinkCard/LinkCard.jsx';

export function RacePageTemp() {
  return (
    <section>
      <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
        <h1>Synth (24 RP)</h1>
        <p>
          Synths are entirely synthetic humanoids; mechanical beings that are
          assembled in factories. Coming in two forms; one prioritizing Strength
          and the other Dexterity, these models are independent from gender,
          which is a little-used concept within Synth society.&nbsp;
        </p>
        <p>
          Many would assume religion to be considered a foreign concept to
          mechanical beings, however this is untrue for Synths; They revere The
          Machine Spirit, a being they believe inhabits and guides all machines,
          not just the sentient ones such as themselves. It is said that Synth's
          considered most gods unworthy of their worship, so they built their
          own. Others claim that at the very core of Derexia they found their
          god. Others still claim that The Machine Spirit is the first Synth, a
          progenitor of sorts. The answer to this question exists within the
          Grand Archive of Cortex, though access is highly restricted, only
          allowed to machine priests and high ranking scholars.&nbsp;
        </p>
        <p>
          As far as personality is considered, the most generous individuals
          would consider Synths “Quirky” at best, other less sympathetic few
          would consider them pale imitations of actual humanity, frighteningly
          hollow. Perception mostly depends upon how good the particular Synth
          is at replicating emotion and believable behavior, something that does
          not come naturally to them. Most believe they're not actually capable
          of emotion, and are only able to attempt pale mimicry, although those
          are not aware of the complexity that lurks beneath the mechanical
          visage most see.
        </p>
        <p>
          As far as class selection is concerned, most Synths lean towards a
          specialization based upon their model, Heavy models leaning towards
          Fighters and Barbarians, Light models leaning towards Monks and
          Rogues. Particularly zealous Synths (which constitute a decent
          proportion of the populace) become Clerics, however Arcane and Occult
          magics are considered taboo in Synth society, a sign of mistrust in
          The Machine God and the cold certainty of the steel that makes up
          their very being. That is not to say that Synth Wizards do not exist,
          but that they will typically exist in secret.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Adulthood</b>
              </td>
              <td>
                <b>Intuitive </b>
                <b>1</b>
              </td>
              <td>
                <b>Self-Taught </b>
                <b>2</b>
              </td>
              <td>
                <b>Trained </b>
                <b>3</b>
              </td>
            </tr>
            <tr>
              <td>18 years</td>
              <td>+1d6 years (19 - 24 years)</td>
              <td>+2d6 years (20 - 30 years)</td>
              <td>+3d6 years (21 - 36 years)</td>
            </tr>
          </tbody>
        </table>
        <p>
          1 This category includes barbarians, oracles, rogues, and sorcerers.
        </p>
        <p>
          2 This category includes bards, cavaliers, fighters, gunslingers,
          paladins, rangers, summoners, and witches.
        </p>
        <p>
          3 This category includes alchemists, clerics, druids, inquisitors,
          magi, monks, and wizards.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Model</b>
              </td>
              <td>
                <b>Base Height</b>
              </td>
              <td>
                <b>Height Modifier</b>
              </td>
              <td>
                <b>Base Weight</b>
              </td>
              <td>
                <b>Weight Modifier</b>
              </td>
            </tr>
            <tr>
              <td>Heavy</td>
              <td>6 ft. 0 in.</td>
              <td>none</td>
              <td>300 lbs.</td>
              <td>none</td>
            </tr>
            <tr>
              <td>Light</td>
              <td>5 ft. 0 in.</td>
              <td>none</td>
              <td>150 lbs.</td>
              <td>none</td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <table>
          <tbody>
            <tr>
              <td colspan="2">
                <b>Racial Traits</b>
              </td>
              <td>
                <b>Race Point Cost</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Type</b>
              </td>
              <td>Construct</td>
              <td>20</td>
            </tr>
            <tr>
              <td>
                <b>Size</b>
              </td>
              <td>Medium</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Base Speed</b>
              </td>
              <td>Variable (Fast and Slow)</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Languages</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Skill Bonus</b>
              </td>
              <td>Perception and Knowledge</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Senses</b>
              </td>
              <td>Darkvision 60ft</td>
              <td>
                <ul>
                  <li aria-level="1">&nbsp;</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <b>Total</b>
              </td>
              <td>
                <b>24</b>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Standard Racial Traits</h3>
        <ul>
          <li aria-level="1">
            <b>Ability Score Modifiers</b>: Synths are specialized machines.
            They gain +2 Strength as a Heavy model, or +2 to Dexterity as a
            Light model. All Synths suffer a -2 penalty to Charisma and receive
            a +2 bonus to Intelligence.
          </li>
          <li aria-level="1">
            <b>Type</b>: Synths are Constructs.
          </li>
          <li aria-level="1">
            <b>Size</b>: Synths are Medium creatures and thus have no bonuses or
            penalties due to their size.
          </li>
          <li aria-level="1">
            <b>Base Speed</b>: Synths' speed is modified by its model, 20ft
            Speed for Heavy, and 40ft Speed for Light.
          </li>
          <li aria-level="1">
            <b>Languages</b>: Synths begin play speaking Common and Esperanto.
            Synths with high Intelligence scores can choose from the following
            languages: Lumari, Sensa, Ridian, Averus, Akohnic, Dresden and
            Draconic.
          </li>
        </ul>
        <p>
          <b>Feat and Skill Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Skilled</b>: Synths have a +2 racial bonus on Knowledge
            (Engineering) and Perception checks.
          </li>
        </ul>
        <p>
          <b>Senses Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Darkvision</b>: Synths have darkvision 60ft.
          </li>
        </ul>
        <h1>Lumara (24 RP)</h1>
        <p>
          Lumari both embrace and rebuke the title of ‘Warrior Race'. It is a
          title they hold alongside their eternal rivals, Akhon, and it is one
          that they fit rather well. Lumari society is divided into a network of
          clans which inhabit Khrilis, and they are typically rather insulated
          from one another, barring two exceptions; War, whether it be against
          an outside force or a so-called “Fallen Clan”, and Celebration, in
          which times the idea of clan separation is thrown away altogether.
        </p>
        <p>
          The greatest division of the clans is the method by which they
          practice the blade. Every Lumara is raised to wield a sword without
          exception, though not every Lumara is destined to become a soldier.
          The techniques by which a Lumara wields their blade (or blades) shapes
          them a great deal. The Lumari are blessed with the unique ability to
          channel the essence of reality itself through steel, and depending on
          their stance the result of such effort takes different forms, each
          roughly corresponding to a discipline of the Magic School of
          Reality.&nbsp;
        </p>
        <p>
          Within Lumari society there are many clans of each discipline, however
          there are only ever six Grandmasters, those said to be the most
          skilled alive in their discipline and leaders of all clans who follow
          their form. Each of these Grandmasters possesses a Fragment, said to
          be a blade crafted from the shattered remains of their patron god's
          blade, destroyed in a duel with the patron god of the Akhon people.
          Each of these Fragments is said to be unnaturally responsive to a
          discipline by which the Lumari people live by, and only the
          Grandmasters are worthy of such power.&nbsp;
        </p>
        <p>
          Besides their affinity for swordplay, most Lumari are generally jovial
          folk, albeit not often the brightest of their group. Most prioritize
          bravado and honor over planning and tactics. To underestimate a Lumara
          as a simple-minded loud-mouthed fighter is most often a fatal error,
          as a lifetime of training leaves even the most clumsy and sedentary
          Lumara able to wield a blade with devastating prowess.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Adulthood</b>
              </td>
              <td>
                <b>Intuitive </b>
                <b>1</b>
              </td>
              <td>
                <b>Self-Taught </b>
                <b>2</b>
              </td>
              <td>
                <b>Trained </b>
                <b>3</b>
              </td>
            </tr>
            <tr>
              <td>15 years</td>
              <td>
                +1d6 years<p></p>
                <p>(16 - 21 years)</p>
              </td>
              <td>+2d6 years (20 - 30 years)</td>
              <td>+3d6 years (21 - 36 years)</td>
            </tr>
          </tbody>
        </table>
        <p>
          1 This category includes barbarians, oracles, rogues, samurai, and
          sorcerers.
        </p>
        <p>
          2 This category includes bards, cavaliers, fighters, gunslingers,
          paladins, rangers, summoners, and witches.
        </p>
        <p>
          3 This category includes alchemists, clerics, druids, inquisitors,
          magi, monks, and wizards.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Gender</b>
              </td>
              <td>
                <b>Base Height</b>
              </td>
              <td>
                <b>Height Modifier</b>
              </td>
              <td>
                <b>Base Weight</b>
              </td>
              <td>
                <b>Weight Modifier</b>
              </td>
            </tr>
            <tr>
              <td>Male</td>
              <td>4 ft. 10 in.</td>
              <td>
                +2d10 in.<p></p>
                <p>(5 ft - 6 ft. 6 in.)</p>
              </td>
              <td>120 lbs.</td>
              <td>
                +(2d10×5 lbs.)<p></p>
                <p>(130 - 220 lbs.)</p>
              </td>
            </tr>
            <tr>
              <td>Female</td>
              <td>4 ft. 5 in.</td>
              <td>
                +2d10 in.<p></p>
                <p>(4 ft. 7 in. - 6 ft. 1 in.)</p>
              </td>
              <td>85 lbs.</td>
              <td>
                +(2d10×5 lbs.)<p></p>
                <p>(95 - 185 lbs.)</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <table>
          <tbody>
            <tr>
              <td colspan="2">
                <b>Racial Traits</b>
              </td>
              <td>
                <b>Race Point Cost</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Type</b>
              </td>
              <td>Outsider (Native)</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <b>Size</b>
              </td>
              <td>Medium</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Base Speed</b>
              </td>
              <td>Normal</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Languages</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Skill</b>
              </td>
              <td>Nimble Attacks</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Senses</b>
              </td>
              <td>Darkvision 60ft</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Movement</b>
              </td>
              <td>Fast</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Defense</b>
              </td>
              <td>Defensive Training, Greater and Energy Resistance</td>
              <td>5</td>
            </tr>
            <tr>
              <td>
                <b>Offense</b>
              </td>
              <td>Elemental Assault</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Monstrous (Defense)</b>
              </td>
              <td>Fast Healing</td>
              <td>6</td>
            </tr>
            <tr>
              <td>
                <b>Monstrous (Offense)</b>
              </td>
              <td>Elemental Weapons</td>
              <td>6</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>Total</b>
              </td>
              <td>24</td>
            </tr>
          </tbody>
        </table>
        <h3>Standard Racial Traits</h3>
        <ul>
          <li aria-level="1">
            <b>Ability Score Modifiers</b>: Lumari are incredibly skilled and
            precise, but many prefer to fight with bravado over brains. They
            gain +2 Dexterity and +2 Charisma, but suffer a -2 penalty to
            Wisdom.
          </li>
          <li aria-level="1">
            <b>Type</b>: Lumari are outsiders with the native subtype.
          </li>
          <li aria-level="1">
            <b>Size</b>: Lumari are Medium creatures and thus have no bonuses or
            penalties due to their size.
          </li>
          <li aria-level="1">
            <b>Base Speed</b>: Lumari have a speed of 40 feet.
          </li>
          <li aria-level="1">
            <b>Languages</b>: Lumari begin play speaking Common and Lumari.
            Lumari with high Intelligence scores can choose from the following
            languages: Artificial, Sensa, Ridian, Averus, Akohnic, Dresden and
            Draconic.
          </li>
        </ul>
        <p>
          <b>Feat and Skill Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Nimble Attacks</b>: Lumari receive Weapon Finesse as a bonus
            feat.
          </li>
        </ul>
        <p>
          <b>Senses Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Darkvision</b>: Lumari have darkvision 60 ft.
          </li>
        </ul>
        <p>
          <b>Movement Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Fast</b>: Lumari gain a +10 foot bonus to their base speed (this
            is already included in the speed listed above).
          </li>
        </ul>
        <p>
          <b>Defense Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Defensive Training, Greater</b>: Lumari gain a +2 dodge bonus to
            Armor Class.
          </li>
          <li aria-level="1">
            <b>Energy Resistance</b>: Pick one of the following energy types:
            acid (land), cold (frost), electricity (sky), fire (ashes), positive
            (ether), or negative (void). Lumari has resistance 5 to the
            corresponding energy type.
          </li>
        </ul>
        <p>
          <b>Offense Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Elemental Assault</b>: With the same energy type you picked for
            Energy Resistance, Lumari gain the following supernatural ability:
            Once per day as a swift action, a Lumara can call on the elemental
            power lurking in its veins to shroud its arms in the energy type
            that corresponds to the elemental discipline its race has ties to.
            Unarmed strikes with its elbows or hands (or attacks with weapons
            held in those hands) deal +1d6 points of damage of the appropriate
            energy type. This lasts for 1 round per character level. The
            creature may end the effects of its elemental assault early as a
            free action.
          </li>
        </ul>
        <p>
          <b>Monstrous Defense Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Fast Healing</b>: Lumari regain 1 hit point each round. Except
            for where noted here, fast healing is just like natural healing.
            Fast healing does not restore hit points lost from starvation,
            thirst, or suffocation, nor does it allow a creature to regrow lost
            body parts. Fast healing continues to function (even at negative hit
            points) until the Lumari dies, at which point the effects of fast
            healing immediately end.
          </li>
        </ul>
        <p>
          <b>Monstrous Offense Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Elemental Weapons</b>: With the same energy type you picked for
            Energy Resistance, Lumari deal 1d6 points of energy damage of the
            selected type whenever they strike a foe with a natural attack,
            unarmed strike, or melee weapon.
          </li>
        </ul>
        <h3>Alternate Racial Traits</h3>
        <ul>
          <li aria-level="1">
            <b>The Strong, Silent Type</b>: Lumari gain +2 Strength and +2
            Wisdom, but suffer a -2 penalty to Charisma. This ability alters
            Ability Score Modifiers
          </li>
        </ul>
        <h1>Allurin (24 RP)</h1>
        <p>
          “There is no such thing as an ugly Allurin” is a phrase commonly
          tossed around bars and brothels, though the more cynical typically
          append “at least on the outside”.&nbsp;
        </p>
        <p>
          Alluri are many things, though one thing you could not call them is
          serious. The average Allurin is bubbly, easily-excitable, lighthearted
          and stunningly attractive. Their anatomy differs greatly from the
          average humanoid race, however it may not appear so to the untrained
          eye or hand. Where the average person would see a highly sculpted
          physique seemingly cut from marble coinciding with curvature that
          guarantees them entry to any bar, are actually interspersed deposits
          of fat. The muscular build of the Allurin is something of a trick, as
          none of those muscles are actually that, rendering them merely for
          show. This biology guarantees that any Allurin, however gluttonous or
          slovenly, possesses a body that seemingly brushes against the edges of
          absolute perfection.
        </p>
        <p>
          The Alluri do not let this gift go to waste, and many take their
          chance to dominate the entertainment market within every realm they
          can reach. This natural advantage along with a healthy dose of
          nepotism has led to the perception that practically all of art is
          monopolized by the Alluri. Nepotism is rather difficult for the Alluri
          to execute, though, due to the unique way in which they
          reproduce.&nbsp;
        </p>
        <p>
          Alluri are genetically incompatible with one another, unable to
          reproduce and create a so-called “pureblooded Allurin”. This leaves
          crossbreeding as the only recourse for Alluri, though that raises
          somewhat of a problem; What makes an Allurin if they're all
          crossbreeds? Luckily there is a way to tell; Other than their specific
          physique, Allurin skin typically sports a lightly pink hue and hair
          and eye colors of nearly any sort, as long as they compliment each
          other, as well as something the Allurin refer to as ‘Ink'.
        </p>
        <p>
          Ink is called such as it resembles a tattoo, although it is a
          birthmark. Ink is a black pattern unique to every Allurin, although
          related Alluri may have similar marks. The pattern manifests when the
          Allurin reaches adulthood, just below the belly button for women and
          between the shoulder blades for men. The Ink varies in size, though
          some Alluri believe its size coincides with how much their patron
          goddess favors their bloodline, something that has caused quite a stir
          within Whymsa society over the very many years, as a quirk in Alluri
          biology allows them to live many times longer than their mixed
          heritage would suggest, at least until they've had children of their
          own, at which point they begin aging normally as they did before
          adulthood.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Adulthood</b>
              </td>
              <td>
                <b>Intuitive </b>
                <b>1</b>
              </td>
              <td>
                <b>Self-Taught </b>
                <b>2</b>
              </td>
              <td>
                <b>Trained </b>
                <b>3</b>
              </td>
            </tr>
            <tr>
              <td>15 years</td>
              <td>
                +1d6 years<p></p>
                <p>(16 - 21 years)</p>
              </td>
              <td>+2d6 years (20 - 30 years)</td>
              <td>+3d6 years (21 - 36 years)</td>
            </tr>
          </tbody>
        </table>
        <p>
          1 This category includes barbarians, oracles, rogues, and sorcerers.
        </p>
        <p>
          2 This category includes bards, cavaliers, fighters, gunslingers,
          paladins, rangers, summoners, and witches.
        </p>
        <p>
          3 This category includes alchemists, clerics, druids, inquisitors,
          magi, monks, and wizards.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Gender</b>
              </td>
              <td>
                <b>Base Height</b>
              </td>
              <td>
                <b>Height Modifier</b>
              </td>
              <td>
                <b>Base Weight</b>
              </td>
              <td>
                <b>Weight Modifier</b>
              </td>
            </tr>
            <tr>
              <td>Male</td>
              <td>5 ft. 2 in.</td>
              <td>+2d8 in. (5 ft. 4 in. - 6 ft. 6 in.)</td>
              <td>110 lbs.</td>
              <td>+(2d8×5 lbs.) (120 - 190 lbs.)</td>
            </tr>
            <tr>
              <td>Female</td>
              <td>5 ft. 0 in.</td>
              <td>+2d8 in. (5 ft. 2 in. - 6 ft. 4 in.)</td>
              <td>90 lbs.</td>
              <td>+(2d8×5 lbs.) (100 - 170 lbs.)</td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <table>
          <tbody>
            <tr>
              <td colspan="2">
                <b>Racial Traits</b>
              </td>
              <td>
                <b>Race Point Cost</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Type</b>
              </td>
              <td>Humanoid</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Size</b>
              </td>
              <td>Medium</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Base Speed</b>
              </td>
              <td>Normal</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Advanced Charisma</td>
              <td>15</td>
            </tr>
            <tr>
              <td>
                <b>Languages</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Skill</b>
              </td>
              <td>Silver Tongued</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <b>Skill</b>
              </td>
              <td>Skill Training (Bluff and Diplomacy)</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Skill</b>
              </td>
              <td>Emissary</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Skill Bonus</b>
              </td>
              <td>Bluff</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Skill Bonus</b>
              </td>
              <td>Diplomacy</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Magical</b>
              </td>
              <td>Seducer</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Senses</b>
              </td>
              <td>Darkvision 60ft</td>
              <td>0</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>Total</b>
              </td>
              <td>
                <b>24</b>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Standard Racial Traits</h3>
        <ul>
          <li aria-level="1">
            <b>Ability Score Modifiers</b>: Alluri are highly sociable and
            always up for a good time, they receive +8 to Charisma and +2 to
            Constitution, however suffer -2 to Intelligence as they rarely
            consider the consequences of said good time.
          </li>
          <li aria-level="1">
            <b>Type</b>: Alluri are Humanoids.
          </li>
          <li aria-level="1">
            <b>Size</b>: Alluri are Medium creatures and thus have no bonuses or
            penalties due to their size.
          </li>
          <li aria-level="1">
            <b>Base Speed</b>: Alluri have a base speed of 30 feet.
          </li>
          <li aria-level="1">
            <b>Languages</b>: Alluri begin play speaking Common and Sensa.
            Alluri with high Intelligence scores can choose from the following
            languages: Lumari, Artificial, Ridian, Averus, Akohnic, Dresden and
            Draconic.
          </li>
        </ul>
        <p>
          <b>Feat and Skill Racial Traits</b>
        </p>
        <ul>
          <li>
            <ul>
              <li aria-level="1">
                <b>Skill Training</b>: Alluri always consider Bluff and
                Diplomacy as class skills.
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li aria-level="1">
            <b>Silver Tongued</b>: Alluri gain a +2 bonus on Diplomacy and Bluff
            checks. In addition, when they use Diplomacy to shift a creature's
            attitude, they can do so up to three steps up rather than just two.
          </li>
        </ul>
        <ul>
          <li aria-level="1">
            <b>Emissary</b>: Once per day, Alluri can roll twice when making a
            Bluff or Diplomacy check and take the better roll.
          </li>
        </ul>
        <ul>
          <li aria-level="1">
            <b>Skilled</b>: Alluri have a +2 racial bonus on Diplomacy and Bluff
            checks.
          </li>
        </ul>
        <p>
          <b>Magical Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Seducer</b>: Alluri add +1 to the save DCs for their spells and
            spell-like abilities of the emotion school. In addition, an Allurin
            with a Charisma score of 16 or higher gain the following spell-like
            ability (the caster level is equal to character level):
            <ul>
              <li aria-level="2">1/day—charm person</li>
            </ul>
          </li>
        </ul>
        <p>
          <b>Senses Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Darkvision</b>: Alluri have darkvision 60 ft.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h1>Ridian (24 RP)</h1>
        <p>&nbsp;</p>
        <p>
          Elysium is characterized by a single word, Primal. From the
          environment that scatters its surface to the beings that call that
          place their home, there is an unrefined edge that is common
          throughout, traits that all beings on its face share; Exotic and
          dangerous. None more fit this description than the Elysian natives,
          the Ridians.&nbsp;
        </p>
        <p>
          Ridans are typically reclusive people, at least the smart ones are.
          Bordering the line of flora and fauna they have been considered prize
          collectors pieces by the more megalomaniacal of society, though what
          makes them truly valuable is their process of so-called “Generational
          Evolution”.
        </p>
        <p>
          While Ridians reproduce in the typical fashion, what is passed down to
          their progeny is far more than simple genetic code. The memories,
          experiences, and skills are passed down to their children, though
          without specific training and focus it is difficult for the average
          Ridian to access these assets.
        </p>
        <p>
          Beyond this ability, the Ridians possess rather simple bodies, though
          to any other race they seem anything but. Ridans are as varied as
          plant life on Elysium itself. They have humanoid bodies and
          physiology, though in terms of specific biology, the appearance of
          Ridians is mimicry of standard humanoid appearance. Specific features
          that are truly pointless to plants, such as breasts, hair, most
          orifices, and rather limited limb structure, are replicated for
          reasons that are completely unknown to Ridians and others alike. This
          replication extends so far that some Ridians have been known to even
          grow clothing.
        </p>
        <p>
          Besides their odd appearance though, personality is typically what
          sets Ridians apart from other races. With their long lifespans and
          strange upbringing in Elysium, their perspective in the world is truly
          alien, and for this reason they find difficulty connecting with other
          races besides, strangely enough, Synths, as they share a similar
          disposition.
        </p>
        <p>
          The final quirk of Ridian society is that of a lost art of magic,
          Druidism. Druidism was only taught to a select few ancient Ridians by
          their patron god, and the secret of that magic disappeared with them,
          and their whereabouts are unknown by even the oldest Ridians still in
          Elysium.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Adulthood</b>
              </td>
              <td>
                <b>Intuitive </b>
                <b>1</b>
              </td>
              <td>
                <b>Self-Taught </b>
                <b>2</b>
              </td>
              <td>
                <b>Trained </b>
                <b>3</b>
              </td>
            </tr>
            <tr>
              <td>110 years</td>
              <td>
                +4d6 years<p></p>
                <p>(114 - 134 years)</p>
              </td>
              <td>
                +6d6 years<p></p>
                <p>(116 - 146 years)</p>
              </td>
              <td>
                +10d6 years<p></p>
                <p>(120 - 170 years)</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          1 This category includes barbarians, oracles, rogues, and sorcerers.
        </p>
        <p>
          2 This category includes bards, cavaliers, fighters, gunslingers,
          paladins, rangers, summoners, and witches.
        </p>
        <p>
          3 This category includes alchemists, clerics, druids, inquisitors,
          magi, monks, and wizards.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Gender</b>
              </td>
              <td>
                <b>Base Height</b>
              </td>
              <td>
                <b>Height Modifier</b>
              </td>
              <td>
                <b>Base Weight</b>
              </td>
              <td>
                <b>Weight Modifier</b>
              </td>
            </tr>
            <tr>
              <td>Male</td>
              <td>5 ft. 4 in.</td>
              <td>
                +2d8 in.<p></p>
                <p>(5 ft. 6 in. - 6 ft. 8 in.)</p>
              </td>
              <td>110 lbs.</td>
              <td>
                +(2d8×3 lbs.)<p></p>
                <p>(116 - 158 lbs.)</p>
              </td>
            </tr>
            <tr>
              <td>Female</td>
              <td>5 ft. 4 in.</td>
              <td>
                +2d6 in.<p></p>
                <p>(5 ft. 6 in. - 6 ft. 4 in.)</p>
              </td>
              <td>90 lbs.</td>
              <td>
                +(2d6×3 lbs.)<p></p>
                <p>(96 - 126 lbs.)</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <table>
          <tbody>
            <tr>
              <td colspan="2">
                <b>Racial Traits</b>
              </td>
              <td>
                <b>Race Point Cost</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Type</b>
              </td>
              <td>Plant</td>
              <td>10</td>
            </tr>
            <tr>
              <td>
                <b>Size</b>
              </td>
              <td>Medium</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Base Speed</b>
              </td>
              <td>Normal</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Paragon</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Languages</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Defense</b>
              </td>
              <td>Bond to the Land</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Defense</b>
              </td>
              <td>Hydrated Vitality</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <b>Defense</b>
              </td>
              <td>Natural Armor</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Skill</b>
              </td>
              <td>Shards of the Past</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Other</b>
              </td>
              <td>Treespeech</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Senses</b>
              </td>
              <td>Low-light vision</td>
              <td>0</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>Total</b>
              </td>
              <td>
                <b>24</b>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Standard Racial Traits</h3>
        <ul>
          <li aria-level="1">
            <b>Ability Score Modifiers</b>: Ridians are complex beings,
            possessing inherited knowledge far beyond many “younger” races. They
            receive a +4 to Wisdom, but take a -2 to all physical stats, as they
            have evolved for complex minds over powerful bodies.
          </li>
          <li aria-level="1">
            <b>Type</b>: Ridians are Plants, though they have Wisdom and
            Charisma scores, and lack immunity to mind-affecting effects.
          </li>
          <li aria-level="1">
            <b>Size</b>: Ridians are Medium creatures and thus have no bonuses
            or penalties due to their size.
          </li>
          <li aria-level="1">
            <b>Base Speed</b>: Ridians have a base speed of 30 feet.
          </li>
          <li aria-level="1">
            <b>Languages</b>: Ridians begin play speaking Common and Ridian.
            Ridians with high Intelligence scores can choose from the following
            languages: Lumari, Artificial, Sensa, Averus, Akohnic, Dresden and
            Draconic.
          </li>
        </ul>
        <p>
          <b>Defense Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Bond to the Land</b>: Ridians gain a +2 dodge bonus to AC when in
            a specific terrain type selected from the ranger's list of favored
            terrains. This choice is made at character creation, and cannot be
            changed.
          </li>
          <li aria-level="1">
            <b>Hydrated Vitality</b>: Ridians gain fast healing 2 for 1 round
            anytime they submerge completely within a body of natural fresh
            water. Stagnant, poisoned, or trapped water does not activate this
            ability. Members of this race can heal up to 2 hit points per level
            per day with this ability, after which it ceases to function.
          </li>
          <li aria-level="1">
            <b>Natural Armor</b>: Ridians gain a +1 natural armor bonus to their
            Armor Class.
          </li>
        </ul>
        <p>
          <b>Feat and Skill Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Shards of the Past</b>: Ridians have past lives that grant them
            two particular Knowledge skills through evolutionary progression.
            Each Ridian picks two Knowledge skills. The Ridian gains a +2 racial
            bonus on both of these skills, and those skills are treated as class
            skills.
          </li>
        </ul>
        <p>
          <b>Other Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Treespeech</b>: Ridians have the ability to converse with plants
            as if subject to a continual speak with plants spell.
          </li>
        </ul>
        <p>
          <b>Senses Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Low-light Vision</b>: Ridians have low light vision.
          </li>
        </ul>
        <h1>Almouran (24 RP)</h1>
        <p>&nbsp;</p>
        <p>
          The Almourans are a fractured people. All at once they have the
          capability to be the most immensely powerful faction within Utopia
          Prime, but expend much of their effort in-fighting to the point of
          utter exhaustion. Their division begins at their appearance. An
          Almouran is always the inverse of their mother, and appears in one of
          two varieties without deviation.&nbsp;
        </p>
        <p>
          The first of the typical Almouran forms is that of an angelic figure
          of pure refined regality. Perfectly unblemished skin complementing
          hair of immaculate volume all coming together to form an appearance
          that is utterly otherworldly, the particularly powerful taking this
          otherworldly nature a step further and growing feathered wings to
          complete their perfect forms. The second form is that of a raw,
          unrefined sort of beauty. Skin of shades varying from a burnished red,
          to a deep blue, the most vibrant of purples, to blacker than any
          night. Their appearance is demonic, complete with horns and tails that
          make all but the most innocent-looking Almourans seem sinister. One
          would expect a rather rigid division of their society to branch from
          this difference in appearance, but due to the inevitability of it, as
          well as every empress alternating their own palette down the line of
          succession, this is the least of the divisions the Almourans face.
        </p>
        <p>
          The greatest rift within society in Xion is that of magical
          preference. Divine and Arcane. Prayer and Study. Scriptures and
          Spellcraft. These two schools of thought have been warring within the
          heart of the Almouran Empire since its inception, and will doubtless
          continue for generations. The Empire has built two robust hierarchies,
          one for each of these schools of thought, with the Empress herself
          superseding both the Archmage and Archbishop respectively.&nbsp;
        </p>
        <p>
          The path an Almourans life takes depends largely upon what side they
          take within this eternal struggle. To side with the divine is to
          become an apostle of Nikita herself. For most, it means joining the
          congregation as a cleric and perhaps joining a crusade or two within
          your lifetime and enjoying the most blessed inevitability of dying for
          a righteous cause. This is where the less devoted (and all men) will
          end their journeys, but for the women who choose to devote themselves
          fully to Nikita's grace, they will be rewarded with the honor of grand
          bureaucracy, though some will be lucky enough to join the Empresses
          elite military force, Adepta Sororitus.
        </p>
        <p>
          The path of the Arcane involves rigorous years of study within the
          Almouran Institute of Arcane Ascendence. Through a minimum of sixteen
          years of study, an Almouran will be able to gain the prestigious title
          of Spiral Mage, perfecting a type of magic that works independently
          from the traditional bounds of arcane study, complementing it with
          power unmatched by any other.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Adulthood</b>
              </td>
              <td>
                <b>Intuitive </b>
                <b>1</b>
              </td>
              <td>
                <b>Self-Taught </b>
                <b>2</b>
              </td>
              <td>
                <b>Trained </b>
                <b>3</b>
              </td>
            </tr>
            <tr>
              <td>60 years</td>
              <td>
                +4d6 years<p></p>
                <p>(64 - 84 years)</p>
              </td>
              <td>
                +6d6 years<p></p>
                <p>(66 - 96 years)</p>
              </td>
              <td>
                +8d6 years<p></p>
                <p>(68 - 108 years)</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          1 This category includes barbarians, oracles, rogues, and sorcerers.
        </p>
        <p>
          2 This category includes bards, cavaliers, fighters, gunslingers,
          paladins, rangers, summoners, and witches.
        </p>
        <p>
          3 This category includes alchemists, clerics, druids, inquisitors,
          magi, monks, and wizards.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Gender</b>
              </td>
              <td>
                <b>Base Height</b>
              </td>
              <td>
                <b>Height Modifier</b>
              </td>
              <td>
                <b>Base Weight</b>
              </td>
              <td>
                <b>Weight Modifier</b>
              </td>
            </tr>
            <tr>
              <td>Male</td>
              <td>4 ft. 10 in.</td>
              <td>
                +2d10 in.<p></p>
                <p>(5 ft. - 6 ft. 6 in.)</p>
              </td>
              <td>120 lbs.</td>
              <td>
                +(2d10×5 lbs.)<p></p>
                <p>(130 - 220 lbs.)</p>
              </td>
            </tr>
            <tr>
              <td>Female</td>
              <td>4 ft. 5 in.</td>
              <td>
                +2d10 in.<p></p>
                <p>(4 ft. 7 in. - 6 ft. 1 in.)</p>
              </td>
              <td>85 lbs.</td>
              <td>
                +(2d10×5 lbs.)<p></p>
                <p>(95 - 185 lbs.)</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <table>
          <tbody>
            <tr>
              <td colspan="2">
                <b>Racial Traits</b>
              </td>
              <td>
                <b>Race Point Cost</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Type</b>
              </td>
              <td>Outsider (Native)&nbsp;</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <b>Size</b>
              </td>
              <td>Medium</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Base Speed</b>
              </td>
              <td>Normal</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Specialized</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Advanced Charisma</td>
              <td>9</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Advanced Intelligence</td>
              <td>9</td>
            </tr>
            <tr>
              <td>
                <b>Languages</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Monstrous (Magical)</b>
              </td>
              <td>Spell-Like Ability, At-Will (Detect Magic, Greater)</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Senses</b>
              </td>
              <td>Darkvision 60ft</td>
              <td>0</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>Total</b>
              </td>
              <td>
                <b>24</b>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Standard Racial Traits</h3>
        <ul>
          <li aria-level="1">
            <b>Ability Score Modifiers</b>: Almourans are born to wield magic,
            and typically leave weaponry to those that lack the aptitude. They
            receive +6 Intelligence and Charisma and suffer a -2 to Strength.
          </li>
          <li aria-level="1">
            <b>Type</b>: Almourans are Outsiders with the Native subtype.
          </li>
          <li aria-level="1">
            <b>Size</b>: Almourans are Medium creatures and thus have no bonuses
            or penalties due to their size.
          </li>
          <li aria-level="1">
            <b>Base Speed</b>: Almourans have a base speed of 30 feet.
          </li>
          <li aria-level="1">
            <b>Languages</b>: Almourans begin play speaking Common and Averus.
            Almourans with high Intelligence scores can choose from the
            following languages: Lumari, Artificial, Sensa, Ridian, Akohnic,
            Dresden and Draconic.
          </li>
        </ul>
        <p>
          <b>Monstrous (Magical) Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>At-Will Spell-Like Ability</b>: Almourans can cast Greater Detect
            Magic at will.
          </li>
        </ul>
        <h1>Akohn (24 RP)</h1>
        <p>&nbsp;</p>
        <p>
          There is a fine line between the treatment of War as an artform, and
          War as sport. The Akohn do not lie anywhere near this line, as they
          firmly believe war is sport, and vice versa.&nbsp;
        </p>
        <p>
          Living the entirety of one's life in constant training is sure to
          cultivate a certain attitude towards life, and luckily for most Akohn
          this attitude is one of joyful ambition and extremely simplistic
          outlooks on self-improvement. To live is to train for an Akohn. Within
          Akohnic society it is the gravest of shames to die before seeing the
          greatest heights one can reach. Even to surpass one's prime age
          without reaching what they consider to be an ultimate physique is
          considered a disappointment of the highest measure.
        </p>
        <p>
          Combat is at the very center of Akohnic society, to the point where
          their hierarchy, which is seemingly a monarchy from the outside, is
          decided entirely by the strongest. The king is decided by a trial of
          combat, and all other offices are filled by appointment by the new
          king. It so happens that the position of king is the one that is most
          often changed, as the Akohn with talent in finances or urban planning
          typically remain in their positions as the combat-obsessed paragon who
          just usurped the previous king has little time or patience to search
          for a suitable replacement for them.
        </p>
        <p>
          Regardless of the king in charge at the time, every few years the
          exact same event takes place; The Pride War. The Lumari and Akohnic
          have, for many centuries now, traded blows on the grand stage of war.
          Interestingly enough, the tradition began from a good-natured spar
          between the patron gods of either race that quickly became an all-out
          battle. The patron gods have not joined in the action after the first
          Pride War, but ever since these wars have been waged consistently
          every few years. Within them there are two simple rules; don't kill,
          and win. These events, despite being extreme and vicious battles, are
          sport for the combatants first and foremost, and the celebration
          following a Pride War is truly a sight to behold.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Adulthood</b>
              </td>
              <td>
                <b>Intuitive </b>
                <b>1</b>
              </td>
              <td>
                <b>Self-Taught </b>
                <b>2</b>
              </td>
              <td>
                <b>Trained </b>
                <b>3</b>
              </td>
            </tr>
            <tr>
              <td>15 years</td>
              <td>
                +1d6 years<p></p>
                <p>(16 - 21 years)</p>
              </td>
              <td>+2d6 years (20 - 30 years)</td>
              <td>+3d6 years (21 - 36 years)</td>
            </tr>
          </tbody>
        </table>
        <p>
          1 This category includes barbarians, oracles, rogues, and sorcerers.
        </p>
        <p>
          2 This category includes bards, cavaliers, fighters, gunslingers,
          paladins, rangers, summoners, and witches.
        </p>
        <p>
          3 This category includes alchemists, clerics, druids, inquisitors,
          magi, monks, and wizards.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Gender</b>
              </td>
              <td>
                <b>Base Height</b>
              </td>
              <td>
                <b>Height Modifier</b>
              </td>
              <td>
                <b>Base Weight</b>
              </td>
              <td>
                <b>Weight Modifier</b>
              </td>
            </tr>
            <tr>
              <td>Male</td>
              <td>5 ft. 2 in.</td>
              <td>+2d8 in. (5 ft. 4 in. - 6 ft. 6 in.)</td>
              <td>110 lbs.</td>
              <td>+(2d8×5 lbs.) (120 - 190 lbs.)</td>
            </tr>
            <tr>
              <td>Female</td>
              <td>5 ft. 0 in.</td>
              <td>+2d8 in. (5 ft. 2 in. - 6 ft. 4 in.)</td>
              <td>90 lbs.</td>
              <td>+(2d8×5 lbs.) (100 - 170 lbs.)</td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <table>
          <tbody>
            <tr>
              <td colspan="2">
                <b>Racial Traits</b>
              </td>
              <td>
                <b>Race Point Cost</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Type</b>
              </td>
              <td>Humanoid</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Size</b>
              </td>
              <td>Medium</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Base Speed</b>
              </td>
              <td>Normal</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Specialized</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Languages</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Advanced Strength</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Advanced Dexterity</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Advanced Constitution</td>
              <td>9</td>
            </tr>
            <tr>
              <td>
                <b>Defense</b>
              </td>
              <td>Cornered Fury</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Advanced (Offense)</b>
              </td>
              <td>Frenzy</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Senses</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>Total</b>
              </td>
              <td>
                <b>24</b>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Standard Racial Traits</h3>
        <ul>
          <li aria-level="1">
            <b>Ability Score Modifiers</b>: True paragons of physical might,
            Akohn gain a +4 bonus to All Physical Scores, due to this societal
            hyperfixation on training, however, they have spent little time
            socializing with other races, reflected in their -2 to penalty
            Charisma.
          </li>
          <li aria-level="1">
            <b>Type</b>: Akohn are Humanoids.
          </li>
          <li aria-level="1">
            <b>Size</b>: Akohn are Medium creatures and thus have no bonuses or
            penalties due to their size.
          </li>
          <li aria-level="1">
            <b>Base Speed</b>: Akohn have a base speed of 30 feet.
          </li>
          <li aria-level="1">
            <b>Languages</b>: Akohn begin play speaking Common and Akohnic.
            Akohn with high Intelligence scores can choose from the following
            languages: Lumari, Artificial, Sensa, Averus, Dresden and Draconic.
          </li>
        </ul>
        <p>
          <b>Defense Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Cornered Fury</b>: Whenever an Akohn is reduced to half its hit
            points or fewer and has no conscious ally within 30 feet, it gains a
            +2 racial bonus on melee attack rolls and to Armor Class.
          </li>
        </ul>
        <p>
          <b>Advanced Offense Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Frenzy</b>: Once per day, whenever an Akohn takes damage, they
            can fly into a frenzy for 1 minute, gaining a +2 racial bonus to
            Constitution and Strength, but a -2 penalty to AC.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h1>Starkin (24 RP)</h1>
        <p>&nbsp;</p>
        <p>
          Throughout the entirety of recorded history, there are only a small
          handful of documented encounters with the Starkin. Records of these
          encounters have been carefully analyzed and preserved for all time,
          and extensive analysis has yielded four fundamental truths of the
          Starkin. It should be known that many points in this entry are merely
          conjecture, as it is far more difficult to document a race of people
          that do not wish to be known by the general populace than one that
          cannot wait to be known, like the Alluri. The challenge of piercing
          together facts about creatures that were, until recently, thought to
          be myth is a great one to say the least, however, the following are
          considered to be the fundamental truths of the Starkin people;
        </p>
        <p>
          First. All Starkin possess intellect on an entirely transcendent level
          compared to the typical mortal. It would take the most dedicated and
          gifted Almouran Spiral Mage to match the genius that a Starkin can
          muster. This truth naturally leads many to the conclusion that the
          Starkin are naturally gifted mages, and it may be for the best that
          they remain in the shadows.
        </p>
        <p>
          Second. Starkin are largely comprised of a singular collective, one
          ruled by a royal family. Within the records it is stated that the
          royal family are as to Starkin peasantry as Starkin are to humans in
          terms of intelligence, a truly terrifying prospect. The records could
          also be interpreted as hinting at the existence of artifacts possessed
          by the royal family, and that it is the existence of those artifacts
          that propel their intellect to such otherworldly levels.
        </p>
        <p>
          Third. Starkin are on an endless quest to document all of existence.
          It is unknown what the documentation is for, but many also point to
          what is largely considered to be their patron god. The God of Reality
          perhaps wishes for existence to be known, this is the most optimistic
          of interpretations. It is not currently known what they will do once
          this quest is completed.
        </p>
        <p>
          Fourth. The Starkin all possess the innate ability to twist and warp
          their physical forms in order to take the shape of any being they can
          conjure into their imaginations. This truth means there is a very real
          possibility that Starkin can be found among the general populace of
          any realm, and due to this change being entirely biological in nature,
          there is no way to know if any living being is a Starkin in disguise.
          An undisguised Starkin is a pale, gaunt humanoid figure with pallid
          skin and a face adorned with three eyes and a tentacled maw. With the
          means currently available to us, it is impossible to discern a
          Starkin. Perhaps that is by design.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Adulthood</b>
              </td>
              <td>
                <b>Intuitive </b>
                <b>1</b>
              </td>
              <td>
                <b>Self-Taught </b>
                <b>2</b>
              </td>
              <td>
                <b>Trained </b>
                <b>3</b>
              </td>
            </tr>
            <tr>
              <td>110 years</td>
              <td>
                +4d6 years<p></p>
                <p>(114 - 134 years)</p>
              </td>
              <td>
                +6d6 years<p></p>
                <p>(116 - 146 years)</p>
              </td>
              <td>
                +10d6 years<p></p>
                <p>(120 - 170 years)</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          1 This category includes barbarians, oracles, rogues, and sorcerers.
        </p>
        <p>
          2 This category includes bards, cavaliers, fighters, gunslingers,
          paladins, rangers, summoners, and witches.
        </p>
        <p>
          3 This category includes alchemists, clerics, druids, inquisitors,
          magi, monks, and wizards.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Gender</b>
              </td>
              <td>
                <b>Base Height</b>
              </td>
              <td>
                <b>Height Modifier</b>
              </td>
              <td>
                <b>Base Weight</b>
              </td>
              <td>
                <b>Weight Modifier</b>
              </td>
            </tr>
            <tr>
              <td>Male</td>
              <td>6 ft. 2 in.</td>
              <td>+2d8 in. (6 ft. 4 in. - 7 ft. 6 in.)</td>
              <td>110 lbs.</td>
              <td>+(2d8×5 lbs.) (120 - 190 lbs.)</td>
            </tr>
            <tr>
              <td>Female</td>
              <td>6 ft. 0 in.</td>
              <td>+2d8 in. (6 ft. 2 in. - 7 ft. 4 in.)</td>
              <td>90 lbs.</td>
              <td>+(2d8×5 lbs.) (100 - 170 lbs.)</td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <table>
          <tbody>
            <tr>
              <td colspan="2">
                <b>Racial Traits</b>
              </td>
              <td>
                <b>Race Point Cost</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Type</b>
              </td>
              <td>Aberration</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <b>Size</b>
              </td>
              <td>Medium</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Base Speed</b>
              </td>
              <td>Normal</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Advanced Intelligence</td>
              <td>15</td>
            </tr>
            <tr>
              <td>
                <b>Languages</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Magical</b>
              </td>
              <td>Change Shape (Greater)</td>
              <td>6</td>
            </tr>
            <tr>
              <td>
                <b>Senses</b>
              </td>
              <td>Darkvision 60ft</td>
              <td>0</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>Total</b>
              </td>
              <td>
                <b>24</b>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Standard Racial Traits</h3>
        <ul>
          <li aria-level="1">
            <b>Ability Score Modifiers</b>: Starkin have grown to prioritize
            mind over all else, though centuries of experimentation have ensured
            they possess the physical resilience to persist for as long as
            possible. They gain +8 to intelligence and +2 to Constitution,
            however receive a -2 penalty to Strength.
          </li>
          <li aria-level="1">
            <b>Type</b>: Starkin are Aberrations, alien in the grandeur of their
            mindset and strange in their anatomies. They receive Darkvision out
            to 60ft.
          </li>
          <li aria-level="1">
            <b>Size</b>: Starkin are Medium creatures and thus have no bonuses
            or penalties due to their size.
          </li>
          <li aria-level="1">
            <b>Base Speed</b>: Starkin have a base speed of 30 feet.
          </li>
          <li aria-level="1">
            <b>Languages</b>: Starkin begin play speaking Common and Astral.
            Starkin with high Intelligence scores can choose from the following
            languages: Lumari, Artificial, Sensa, Ridian, Akohnic, Averus,
            Dresden, and Draconic.
          </li>
        </ul>
        <p>
          <b>Magical Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Change Shape, Greater</b>: Starkin can assume the appearance of a
            Medium humanoid as the alter self spell, save that it does not
            adjust its ability scores.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h1>Felguardian (24 RP)</h1>
        <p>
          In a way unlike every other race imaginable, Felguardians are
          impossible to define. This is not to say that other races are
          monolithic, or that Felguardians are somehow inherently “more special”
          than any other phylum of humanoid that exists, but is a far greater
          testament to the environment in which they cultivated themselves.
        </p>
        <p>
          Terra is a world lost. One that has been torn asunder by its
          inhabitants and every piece of it used, consumed, and permuted to the
          absolute extent possible. Likewise Felguardian culture has undergone a
          similar treatment. To spend all of one's time locked away with the
          only connection to others being one of many technicolor dream worlds
          that constitute virtual or alternate reality games and media that tear
          the user away from their world and place them within one where they
          are allowed to abstract themselves into whatever form they desire,
          dissolving themselves as a physical being and making the construction
          of their thoughts into their reality.
        </p>
        <p>
          To utterly dissolve traditional values, to completely dismantle any
          form of a structured self, it leaves any Felguardian you meet to be
          capable of truly anything. There is no “Average” Felguardian, in fact
          the term Felguardian only refers to a specific encoded pattern upon
          the genome of certain individuals, which allows them to be
          particularly compatible with cybernetic interfaces, this pattern
          derived from years of genetic evolution being intermingled with the
          artificial evolution of mechanical augmentations.
        </p>
        <p>
          The complete destruction of a sense of community or self allows
          Felguardians to be entirely unique, many deciding in their formative
          years a skill, trade, or interest to define themselves with and then
          abstracting a personality or framework of values from there, lest they
          find themselves in a world of Noise.
        </p>
        <p>
          Every Felguardian is a study on the effects of deconstruction on the
          human psyche. The effect of complete disintegration of frameworks has
          on a developing mind.
        </p>
        <p>
          And it is because of this that a Felguardian finding true happiness in
          this world is a truly profound event. One that speaks far more of
          other races than their own.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Adulthood</b>
              </td>
              <td>
                <b>Intuitive </b>
                <b>1</b>
              </td>
              <td>
                <b>Self-Taught </b>
                <b>2</b>
              </td>
              <td>
                <b>Trained </b>
                <b>3</b>
              </td>
            </tr>
            <tr>
              <td>15 years</td>
              <td>
                +1d6 years<p></p>
                <p>(16 - 21 years)</p>
              </td>
              <td>+2d6 years (20 - 30 years)</td>
              <td>+3d6 years (21 - 36 years)</td>
            </tr>
          </tbody>
        </table>
        <p>
          1 This category includes barbarians, oracles, rogues, and sorcerers.
        </p>
        <p>
          2 This category includes bards, cavaliers, fighters, gunslingers,
          paladins, rangers, summoners, and witches.
        </p>
        <p>
          3 This category includes alchemists, clerics, druids, inquisitors,
          magi, monks, and wizards.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Gender</b>
              </td>
              <td>
                <b>Base Height</b>
              </td>
              <td>
                <b>Height Modifier</b>
              </td>
              <td>
                <b>Base Weight</b>
              </td>
              <td>
                <b>Weight Modifier</b>
              </td>
            </tr>
            <tr>
              <td>Male</td>
              <td>5 ft. 2 in.</td>
              <td>+2d8 in. (5 ft. 4 in. - 6 ft. 6 in.)</td>
              <td>110 lbs.</td>
              <td>+(2d8×5 lbs.) (120 - 190 lbs.)</td>
            </tr>
            <tr>
              <td>Female</td>
              <td>5 ft. 0 in.</td>
              <td>+2d8 in. (5 ft. 2 in. - 6 ft. 4 in.)</td>
              <td>90 lbs.</td>
              <td>+(2d8×5 lbs.) (100 - 170 lbs.)</td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <table>
          <tbody>
            <tr>
              <td colspan="2">
                <b>Racial Traits</b>
              </td>
              <td>
                <b>Race Point Cost</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Type</b>
              </td>
              <td>Humanoid</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Size</b>
              </td>
              <td>Medium</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Base Speed</b>
              </td>
              <td>Normal</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Flexible</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Advanced Constitution</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Advanced Intelligence</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Advanced Wisdom</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Advanced Charisma</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Languages</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Other</b>
              </td>
              <td>Cybernetic Affinity</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Other</b>
              </td>
              <td>Skilled</td>
              <td>4</td>
            </tr>
            <tr>
              <td>
                <b>Other</b>
              </td>
              <td>Craftsman</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Senses</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>Total</b>
              </td>
              <td>
                <b>24</b>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Standard Racial Traits</h3>
        <ul>
          <li aria-level="1">
            <b>Ability Score Modifiers</b>: Felguardians are diligent beings,
            ones that strive to excel in all aspects, and this is reflected in
            both their minds and bodies. They receive a +2 to all Ability
            Scores.
          </li>
          <li aria-level="1">
            <b>Type</b>: Felguardians are Humanoids.
          </li>
          <li aria-level="1">
            <b>Size</b>: Felguardians are Medium creatures and thus have no
            bonuses or penalties due to their size.
          </li>
          <li aria-level="1">
            <b>Base Speed</b>: Felguardians have a base speed of 30 feet.
          </li>
          <li aria-level="1">
            <b>Languages</b>: Felguardians begin play speaking Common and
            Dresden. Alluri with high Intelligence scores can choose from the
            following languages: Lumari, Artificial, Sensa, Averus, Akohnic, and
            Draconic.
          </li>
        </ul>
        <p>
          <b>Other Racial Traits</b>
        </p>
        <ul>
          <li>
            <ul>
              <li aria-level="1">
                <b>Cybernetic Affinity</b>: Felguardians are the inventors of{' '}
                <a
                  target="_blank"
                  href="https://www.d20pfsrd.com/equipment/cybertech/"
                >
                  Cybernetics
                </a>
                , and over centuries of augmentation their physiology has
                adapted to further accommodate mechanical enhancements. A
                Felguardian treats their Constitution and Wisdom scores as 2
                points higher for the purpose of determining the number of
                cybernetic augmentations they can equip.
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li aria-level="1">
            <b>Skilled</b>: Felguardians gain an additional skill rank at 1st
            level and one additional skill rank whenever they gain a level.
          </li>
        </ul>
        <ul>
          <li aria-level="1">
            <b>Craftsman</b>: Felguardians gain a +2 racial bonus on all Craft
            or Profession checks to create objects from metal or stone.
          </li>
        </ul>
        <h1>Maedel (24 RP)</h1>
        <p>&nbsp;</p>
        <p>
          Maedel believe in many things. They believe in the goddess Delmae, and
          her infinite passion from which they draw their lives. They believe in
          themselves and the strength they have, both physical, and emotional.
          They believe in each other, the strength of community and their
          collective strength. Most of all though, they believe that they exist
          for a reason.
        </p>
        <p>
          The quest for purpose for a Maedel is different from that of other
          races. It is not simply the search for a place of belonging in this
          world, or for a point of view from which they are able to see
          themselves living a happy life. They look for their spot in the grand
          tapestry of the universe, their place in the infinite and beautiful
          weave of existence, a place from which they are able to contribute
          their color to the painting, their thread to the weave, their words to
          the page. A Maedel prizes legacy above all else.
        </p>
        <p>
          Their endless search for purpose is reflected well within their
          society. Upon their home realm of The Azaereum, a massive and highly
          volcanic realm whose atmosphere would force any but the Maedel to
          succumb to heat stroke within minutes. They make their homes near the
          abundant superheated pools of mineral water that accompany the base of
          volcanoes, spending their time honing whatever craft they wish and
          receiving the utmost support from their tribe, which many Maedel
          consider to be as close as family.
        </p>
        <p>
          It is the destiny of most Maedel to leave The Azaereum, unless they
          find their purpose to be guiding the young upon their path. Leaving
          The Azaereum is a difficult choice many have to make, but they most
          often view their home realm as a nest from which they must take flight
          from eventually. Sometimes this is viewed as more literal by the
          particularly dedicated Maedel, those with pure dragon blood within
          their veins. All Maedel possess scales adorning their figure and a
          draconic tail, typically complemented with darker skin tones, but
          purebloods have innate connection to draconic magic, something thought
          to be restricted to the mythical sorcerers of which Utopia Prime sees
          so little. For these Maedel their purpose is simple; Become a Dragon.
        </p>
        <p>
          They often refuse to elaborate on how literal this purpose may be.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Adulthood</b>
              </td>
              <td>
                <b>Intuitive </b>
                <b>1</b>
              </td>
              <td>
                <b>Self-Taught </b>
                <b>2</b>
              </td>
              <td>
                <b>Trained </b>
                <b>3</b>
              </td>
            </tr>
            <tr>
              <td>15 years</td>
              <td>
                +1d6 years<p></p>
                <p>(16 - 21 years)</p>
              </td>
              <td>+2d6 years (20 - 30 years)</td>
              <td>+3d6 years (21 - 36 years)</td>
            </tr>
          </tbody>
        </table>
        <p>
          1 This category includes barbarians, oracles, rogues, and sorcerers.
        </p>
        <p>
          2 This category includes bards, cavaliers, fighters, gunslingers,
          paladins, rangers, summoners, and witches.
        </p>
        <p>
          3 This category includes alchemists, clerics, druids, inquisitors,
          magi, monks, and wizards.
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Gender</b>
              </td>
              <td>
                <b>Base Height</b>
              </td>
              <td>
                <b>Height Modifier</b>
              </td>
              <td>
                <b>Base Weight</b>
              </td>
              <td>
                <b>Weight Modifier</b>
              </td>
            </tr>
            <tr>
              <td>Male</td>
              <td>5 ft. 2 in.</td>
              <td>+2d8 in. (5 ft. 4 in. - 6 ft. 6 in.)</td>
              <td>110 lbs.</td>
              <td>+(2d8×5 lbs.) (120 - 190 lbs.)</td>
            </tr>
            <tr>
              <td>Female</td>
              <td>5 ft. 0 in.</td>
              <td>+2d8 in. (5 ft. 2 in. - 6 ft. 4 in.)</td>
              <td>90 lbs.</td>
              <td>+(2d8×5 lbs.) (100 - 170 lbs.)</td>
            </tr>
          </tbody>
        </table>
        <p>&nbsp;</p>
        <table>
          <tbody>
            <tr>
              <td colspan="2">
                <b>Racial Traits</b>
              </td>
              <td>
                <b>Race Point Cost</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Type</b>
              </td>
              <td>Dragon</td>
              <td>10</td>
            </tr>
            <tr>
              <td>
                <b>Size</b>
              </td>
              <td>Medium</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Base Speed</b>
              </td>
              <td>Normal</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Modifiers</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Languages</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>Offense</b>
              </td>
              <td>Breath Weapon</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Defense</b>
              </td>
              <td>Fire in the Blood</td>
              <td>3</td>
            </tr>
            <tr>
              <td>
                <b>Defense</b>
              </td>
              <td>Natural Armor</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Defense</b>
              </td>
              <td>Energy Resistance (Fire)</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <b>Defense</b>
              </td>
              <td>Fearless</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <p>
                  <b>Defense</b>
                </p>
              </td>
              <td>Lifebound</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Other</b>
              </td>
              <td>Prehensile Tail</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Advanced (Offense)</b>
              </td>
              <td>Claws</td>
              <td>2</td>
            </tr>
            <tr>
              <td>
                <b>Senses</b>
              </td>
              <td>Standard</td>
              <td>0</td>
            </tr>
            <tr>
              <td colspan="2">
                <b>Total</b>
              </td>
              <td>
                <b>24</b>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Standard Racial Traits</h3>
        <ul>
          <li aria-level="1">
            <b>Ability Score Modifiers</b>: +2 to Cha, +2 to Str, -2 to Dex
          </li>
          <li aria-level="1">
            <b>Type</b>: Maedel are Dragons, receiving Darkvision of 60ft, low
            light vision, and Immunity to Sleep and Paralysis effects.
          </li>
          <li aria-level="1">
            <b>Size</b>: Maedel are Medium creatures and thus have no bonuses or
            penalties due to their size.
          </li>
          <li aria-level="1">
            <b>Base Speed</b>: Maedel have a base speed of 30 feet.
          </li>
          <li aria-level="1">
            <b>Languages</b>: Maedel begin play speaking Common and Draconic.
            Maedel with high Intelligence scores can choose from the following
            languages: Lumari, Artificial, Sensa, Averus, Akohnic, and Dresden.
          </li>
        </ul>
        <p>
          <b>Offense Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Breath Weapon</b>: Pick either a 15-foot cone or a 20-foot line.
            Once per day, as a standard action, a Maedel can make a supernatural
            breath weapon attack that deals 1d6 points of fire damage in the
            area chosen. All creatures within the affected area must make a
            Reflex saving throw to avoid taking damage. The save DC against this
            breath weapon is 10 + 1/2 the user's character level + the user's
            Constitution modifier. Those who succeed at the save take no damage
            from the attack.
          </li>
        </ul>
        <p>
          <b>Defense Racial Traits</b>
        </p>
        <ul>
          <li>
            <ul>
              <li aria-level="1">
                <b>Fire in the Blood</b>: Maedel gain fast healing 2 for 1 round
                anytime they take fire damage (whether or not this fire damage
                overcomes their fire resistance). Maedel can heal up to 2 hit
                points per level per day with this ability, after which it
                ceases to function.
              </li>
              <li aria-level="1">
                <b>Natural Armor</b>: Maedel gain a +1 natural armor bonus to
                their Armor Class.
              </li>
              <li aria-level="1">
                <b>Energy Resistance</b>: Maedel gain 5 points of Fire
                Resistance.
              </li>
              <li aria-level="1">
                <b>Fearless</b>: Maedel gain a +2 racial bonus on all saving
                throws against fear effects.
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li aria-level="1">
            <b>Lifebound</b>: Maedel gain a +2 racial bonus on all saving throws
            made to resist death effects, saving throws against negative energy
            effects, Fortitude saves made to remove negative levels, and
            Constitution checks made to stabilize if reduced to negative hit
            points.
          </li>
        </ul>
        <p>
          <b>Defense Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Claws</b>: Maedel receive two claw attacks. These are primary
            natural attacks. The damage is based on the creature's size.
          </li>
        </ul>
        <p>
          <b>Other Racial Traits</b>
        </p>
        <ul>
          <li aria-level="1">
            <b>Prehensile Tail</b>: Maedel have a long, flexible tail that can
            be used to carry objects. They cannot wield weapons with their
            tails, but they can retrieve small, stowed objects carried on their
            persons as a swift action.
          </li>
        </ul>
        <p>
          <b>Table: Aging Effects</b>
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Race</b>
              </td>
              <td>
                <b>Middle Age</b>
              </td>
              <td>
                <b>Old</b>
              </td>
              <td>
                <b>Venerable</b>
              </td>
              <td>
                <b>Maximum Age</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Ability Score Effects</b>
              </td>
              <td>
                <b>-1 to Str, Dex, and Con; +1 to Int, Wis, and Cha</b>
              </td>
              <td>
                <b>-3 to Str, Dex, and Con; +3 to Int, Wis, and Cha</b>
              </td>
              <td>
                <b>-6 to Str, Dex, and Con; +6 to Int, Wis, and Cha</b>
              </td>
              <td>
                <b>GM secretly determines Maximum</b>
              </td>
            </tr>
            <tr>
              <td>Synths</td>
              <td>150 years</td>
              <td>200 years</td>
              <td>250 years</td>
              <td>250 + 6d% years</td>
            </tr>
            <tr>
              <td>Lumari</td>
              <td>35 years</td>
              <td>53 years</td>
              <td>70 years</td>
              <td>70 + 2d20 years</td>
            </tr>
            <tr>
              <td>Allurin (Childless)</td>
              <td>150 years</td>
              <td>200 years</td>
              <td>250 years</td>
              <td>250 + 6d% years</td>
            </tr>
            <tr>
              <td>Allurin</td>
              <td>35 years</td>
              <td>53 years</td>
              <td>70 years</td>
              <td>70 + 2d20 years</td>
            </tr>
            <tr>
              <td>Ridians</td>
              <td>175 years</td>
              <td>263 years</td>
              <td>350 years</td>
              <td>350 + 4d% years</td>
            </tr>
            <tr>
              <td>Almourans</td>
              <td>150 years</td>
              <td>200 years</td>
              <td>
                <p>250 years</p>
              </td>
              <td>250 + 6d% years</td>
            </tr>
            <tr>
              <td>Akohn</td>
              <td>35 years</td>
              <td>53 years</td>
              <td>70 years</td>
              <td>70 + 2d20 years</td>
            </tr>
            <tr>
              <td>Starkin</td>
              <td>150 years</td>
              <td>200 years</td>
              <td>250 years</td>
              <td>250 + 6d% years</td>
            </tr>
            <tr>
              <td>Felguardian</td>
              <td>35 years</td>
              <td>53 years</td>
              <td>70 years</td>
              <td>70 + 2d20 years</td>
            </tr>
            <tr>
              <td>Maedel</td>
              <td>35 years</td>
              <td>53 years</td>
              <td>70 years</td>
              <td>70 + 2d20 years</td>
            </tr>
          </tbody>
        </table>
      </div>
      <LinkCard url={'/setting'} linkText={'Back'} className={'Back'} />
    </section>
  );
}
