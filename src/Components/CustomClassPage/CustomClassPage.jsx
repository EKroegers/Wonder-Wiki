import * as React from 'react';
import { Link } from 'react-router-dom';

import ClassTable from '../ClassTable/ClassTable.jsx';
import ClassFeature from '../ClassFeature/ClassFeature.jsx';
import EpicClassTable from '../ClassTable/EpicClassTable/EpicClassTable.jsx';

export default function CustomClassPage({
  name,
  role,
  alignment,
  hitDie,
  startingWealth,
  classSkills,
  maxLevel,
  baseAttackBonusType,
  saveTypes,
  classFeatures,
  epicLevelClassFeatures,
  className,
  extraContent,
}) {
  return (
    <section className={`Custom-Class-Page ${className ?? ''}`.trim()}>
      <h1>{name}</h1>
      <p>
        <b>Role: </b>
        {role}
      </p>
      <p>
        <b>Alignment: </b>
        {alignment}
      </p>
      <p>
        <b>Hit Die: </b>
        {hitDie}
      </p>
      <p>
        <b>Starting Wealth: </b>
        {startingWealth} In addition, each character begins play with an outfit
        worth 10 gp or less.
      </p>
      <h2>Class Skills</h2>
      <p>
        The {name}'s class skills are {classSkills}
      </p>
      <ClassTable
        maxLevel={maxLevel}
        baseAttackBonusType={baseAttackBonusType}
        saveTypes={saveTypes}
        classFeatures={classFeatures}
      />
      <h2>Class Features</h2>
      <p>All of the following are class features of the {name}</p>
      {classFeatures
        ? classFeatures.map((classFeature) => {
            return (
              <ClassFeature
                key={classFeature.featureName}
                className={classFeature.className}
                featureName={classFeature.featureName}
                featureType={classFeature.featureType}
                featureDescription={classFeature.featureDescription}
                setInnerHtml={classFeature.setInnerHtml}
              />
            );
          })
        : null}
      {epicLevelClassFeatures ? (
        <>
          <h2>Epic {name}</h2>
          <EpicClassTable
            baseAttackBonusType={baseAttackBonusType}
            epicLevelClassFeatures={epicLevelClassFeatures}
          />
          <h2>Epic Class Features</h2>
          {epicLevelClassFeatures.map((epicLevelClassFeature) => {
            return (
              <ClassFeature
                key={epicLevelClassFeature.featureName}
                className={epicLevelClassFeature.className}
                featureName={epicLevelClassFeature.featureName}
                featureType={epicLevelClassFeature.featureType}
                featureDescription={epicLevelClassFeature.featureDescription}
                setInnerHtml={epicLevelClassFeature.setInnerHtml}
              />
            );
          })}
        </>
      ) : null}
      {extraContent}
      <Link to={'/player-homebrew/custom-classes'}>Back</Link>
    </section>
  );
}
