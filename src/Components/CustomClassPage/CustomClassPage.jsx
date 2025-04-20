import * as React from 'react';

import ClassTable from '../ClassTable/ClassTable.jsx';
import ClassFeature from '../ClassFeature/ClassFeature.jsx';
import EpicClassTable from '../ClassTable/EpicClassTable/EpicClassTable.jsx';
import LinkCard from '../LinkCard/LinkCard.jsx';

export default function CustomClassPage({
  name,
  role,
  alignment,
  hitDie,
  startingWealth,
  classSkills,
  skillRanks,
  maxLevel,
  baseAttackBonusType,
  saveTypes,
  additionalColumn,
  classFeatures,
  epicLevelClassFeatures,
  className,
  extraContent,
  setRoleInnerHtml,
}) {
  return (
    <section className={`Custom-Class-Page ${className ?? ''}`.trim()}>
      <h1>{name}</h1>
      {setRoleInnerHtml ? (
        <p dangerouslySetInnerHTML={{ __html: role }} />
      ) : (
        <p>
          <b>Role: </b>
          {role}
        </p>
      )}
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
      <p>
        <b>Skill Ranks Per Level: </b>
        {skillRanks} + Int modifier
      </p>
      <ClassTable
        maxLevel={maxLevel}
        baseAttackBonusType={baseAttackBonusType}
        saveTypes={saveTypes}
        additionalColumn={additionalColumn}
        classFeatures={classFeatures.filter(
          (classFeature) => !classFeature.hideInTable
        )}
      />
      <h2>Class Features</h2>
      <p>All of the following are class features of the {name}</p>
      {classFeatures
        ? classFeatures
            .filter((classFeature) => !classFeature.hideInBody)
            .map((classFeature) => {
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
      {extraContent}
      {epicLevelClassFeatures ? (
        <>
          <h2>Epic {name}</h2>
          <EpicClassTable
            baseAttackBonusType={baseAttackBonusType}
            additionalColumn={additionalColumn}
            epicLevelClassFeatures={epicLevelClassFeatures.filter(
              (epicClassFeature) => !epicClassFeature.hideInTable
            )}
          />
          <h2>Epic Class Features</h2>
          {epicLevelClassFeatures
            .filter((epicClassFeature) => !epicClassFeature.hideInBody)
            .map((epicLevelClassFeature) => {
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
      <LinkCard
        url={'/player-homebrew/custom-classes'}
        linkText={'Back'}
        className={'Back'}
      />
    </section>
  );
}
