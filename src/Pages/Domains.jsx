import * as React from 'react';
import { Link } from 'react-router-dom';

export function Domains() {
  return (
    <section>
      <h1>Domains</h1>
      <p>
        Domains are Esoteric energy given physical form. They are specialized
        techniques (denoted with a (Do) type next to the ability) which operate
        uniquely from instance to instance, but generally share a few similar
        characteristics.
      </p>
      <p>These standard characteristics typically include the following; </p>
      <h2>Radius</h2>
      <p>
        An area of effect whose radius is equal to a number of 5ft increments
        equal to the key ability score modifier of the invoking creature plus
        their number of Hit Dice, this is known as a
        <b>
          <i> Standard-Radius Domain</i>
        </b>
        .
      </p>
      <h2>Barrier</h2>
      <p>
        An enclosing barrier around the area of effect, this barrier has
        statistics similar to a{' '}
        <a href="https://www.d20pfsrd.com/magic/all-spells/w/wall-of-force/">
          Wall of Force
        </a>
        , but the interior has a hardness is equal to the hit dice of the
        Invoker, the exterior has no hardness, and the hit points is equal to
        the number of hit dice the invoker possesses multiplied by their key
        ability modifier, known as a
        <b>
          <i> Barriered </i>
        </b>
        Domain.
      </p>
      <p>
        Additionally, the barrier can be transparent or opaque, denoted as an
        <b>
          <i> Opaque Barriered </i>
        </b>
        or
        <b>
          <i> Transparent Barriered </i>
        </b>
        Domain.
      </p>
      <p>
        <b>
          <i> Barriered </i>
        </b>
        Domains remain stationary, allowing the invoker and all other creatures
        within it to move about the area of the Domain.
        <b>
          <i> Barrierless </i>
        </b>
        Domains are centered on the invoker and move with them.
      </p>
      <h2>Distributive</h2>
      <p>
        The ability to distribute the effects of abilities and techniques to all
        creatures within the domain by targeting the Domain itself, which is
        considered a
        <b>
          <i> Distributive </i>
        </b>
        Domain. The invoker may be immune to this distribution, if they so wish.
      </p>
      <p>
        It is possible for a Domain to have all of these abilities and more, it
        is also possible for a Domain to have none of these characteristics.
      </p>
      <p>
        Domains typically require a Full-Round Action to invoke, and
        Concentration to maintain, but may be dismissed as a Free Action.
      </p>
      <p>
        Domains are treated as spells with an effective level equal to ½ the Hit
        Dice of the invoker of the Domain, and a save DC of (10 + ½ the Hit Dice
        of the invoker + the invokers key ability score modifier) if not
        otherwise specified.
      </p>
      <h3>Additional Domain Characteristics</h3>
      <p>
        The characteristics Domains can possess are as stranger and varied as
        the individuals who invoke them, and listed below are a few of these
        characteristics;
      </p>
      <h4>Innate Spells</h4>
      <p>
        The effects of spells may be imbued within the area the Domain affects.
        These spells use the spell level and DC of the Domain itself, and the
        number of Hit Dice of the Invoker as their Caster Level, when
        determining their effects. If the spell is an area of effect, it is
        generally centered on the Invoker unless otherwise stated. Innate Spells
        cannot affect outside of the Domain unless otherwise stated.
      </p>
      <h2>Domain Manipulation</h2>
      <p>
        Domains may be modified through Binding Vows the same way that other
        Esoteric effects can be. Binding Vows typically affect the Innate Spells
        of the Domain, however they can be modified to affect other features of
        the Domain.
      </p>
      <p>
        The standard characteristics of a Domain can be subject to Binding Vows.
        Adding or removing the enclosing Barrier, the Distribution effect, or a
        portion of the Radius (half or double) grants + or - a number of
        effective metamagic levels equal to the key ability modifier tied to the
        Domain for each characteristic added or removed.
      </p>
      <h2>Domain Clashes</h2>
      <p>
        If two creatures invoke their Domains simultaneously, or a creature
        invokes their Domain within an already existing Domain, a Clash occurs.
      </p>
      <p>
        Clashes are resolved by the more developed and powerful Domain taking
        precedence. This is determined by the effective spell level of each
        Domain. If they are equal, then both Domains are dispelled with all
        associated costs consumed.
      </p>
      <p>
        If a Domain does not have an enclosing Barrier, then it does not Clash
        when used against another Domain; the effects of both simply overlap.
      </p>
      <Link to={'/player-homebrew'}>Back</Link>
    </section>
  );
}
