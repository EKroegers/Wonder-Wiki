import * as React from 'react';

function getNumberWithSuffix(number) {
  if (number === 1) return '1st';
  if (number === 2) return '2nd';
  if (number === 3) return '3rd';
  return `${number}th`;
}

const BABProgessions = {
  Half: [
    '+0',
    '+1',
    '+1',
    '+2',
    '+2',
    '+3',
    '+3',
    '+4',
    '+4',
    '+5',
    '+5',
    '+6/+1',
    '+6/+1',
    '+7/+2',
    '+7/+2',
    '+8/+3',
    '+8/+3',
    '+9/+4',
    '+9/+4',
    '+10/+5',
  ],
  '3/4': [
    '+0',
    '+1',
    '+2',
    '+3',
    '+3',
    '+4',
    '+5',
    '+6/+1',
    '+6/+1',
    '+7/+2',
    '+8/+3',
    '+9/+4',
    '+9/+4',
    '+10/+5',
    '+11/+6/+6',
    '+12/+7/+7',
    '+12/+7/+7',
    '+13/+8/+8',
    '+14/+9/+9',
    '+15/+10/+10',
  ],
  Full: [
    '+1',
    '+2',
    '+3',
    '+4',
    '+5',
    '+6/+1',
    '+7/+2',
    '+8/+3',
    '+9/+4',
    '+10/+5',
    '+11/+6/+6',
    '+12/+7/+7',
    '+13/+8/+8',
    '+14/+9/+9',
    '+15/+10/+10',
    '+16/+11/+11/+11',
    '+16/+12/+12/+12',
    '+18/+13/+13/+13',
    '+19/+14/+14/+14',
    '+20/+15/+15/+15',
  ],
};

const saveProgressions = {
  Good: [
    '+2',
    '+3',
    '+3',
    '+4',
    '+4',
    '+5',
    '+5',
    '+6',
    '+6',
    '+7',
    '+7',
    '+8',
    '+8',
    '+9',
    '+9',
    '+10',
    '+10',
    '+11',
    '+11',
    '+12',
  ],
  Bad: [
    '+0',
    '+0',
    '+1',
    '+1',
    '+1',
    '+2',
    '+2',
    '+2',
    '+3',
    '+3',
    '+3',
    '+4',
    '+4',
    '+4',
    '+5',
    '+5',
    '+5',
    '+6',
    '+6',
    '+6',
  ],
};

export default function ClassTable({
  maxLevel,
  baseAttackBonusType,
  saveTypes,
  classFeatures,
}) {
  let tableRows = [];

  for (let i = 0; i < maxLevel; i++) {
    let filteredFeatures = classFeatures.filter(
      (feature) => feature.featureLevel === i + 1
    );

    let featureList =
      filteredFeatures.length === 1 ? filteredFeatures[0].featureName : '';

    if (filteredFeatures.length > 1) {
      filteredFeatures.forEach((feature) => {
        featureList += `${feature.featureName}, `;
      });
      featureList = featureList.slice(0, featureList.length - 2);
    }

    tableRows.push(
      <tr className={'Class-Progression-Table-Row'} key={i}>
        <td>{getNumberWithSuffix(i + 1)}</td>
        <td>{BABProgessions[baseAttackBonusType][i]}</td>
        <td>{saveProgressions[saveTypes['Fortitude']][i]}</td>
        <td>{saveProgressions[saveTypes['Reflex']][i]}</td>
        <td>{saveProgressions[saveTypes['Willpower']][i]}</td>
        <td>{featureList}</td>
      </tr>
    );
  }

  return (
    <div className={'Class-Table-Container'}>
      <table className={'Class-Progression-Table'}>
        <thead>
          <tr className={'Class-Progression-Table-Header-Row'}>
            <td>Level</td>
            <td>Base Attack Bonus</td>
            <td>Fort Save</td>
            <td>Ref Save</td>
            <td>Will Save</td>
            <td>Special</td>
          </tr>
        </thead>
        <tbody className={'Class-Progression-Table-Body'}>{tableRows}</tbody>
      </table>
    </div>
  );
}
