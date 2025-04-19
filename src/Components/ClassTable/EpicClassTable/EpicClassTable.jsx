import * as React from 'react';

function get20sNumberWithSuffix(number) {
  if (number === 21) return '21st';
  if (number === 22) return '22nd';
  if (number === 23) return '23rd';
  return `${number}th`;
}

const epicBABProgessions = {
  Half: [
    '+11/+6/+6/+6',
    '+12/+7/+7/+7',
    '+13/+8/+8/+8',
    '+14/+9/+9/+9',
    '+15/+10/+10/+10',
    '+16/+11/+11/+11',
    '+17/+12/+12/+12',
    '+18/+13/+13/+13',
    '+19/+14/+14/+14',
    '+20/+15/+15/+15',
  ],
  '3/4': [
    '+16/+11/+11/+11',
    '+17/+12/+12/+12',
    '+18/+13/+13/+13',
    '+19/+14/+14/+14',
    '+20/+15/+15/+15',
    '+21/+16/+16/+16/+16',
    '+22/+17/+17/+17/+17',
    '+23/+18/+18/+18/+18',
    '+24/+19/+19/+19/+19',
    '+25/+20/+20/+20/+20',
  ],
  Full: [
    '+21/+16/+16/+16/+16',
    '+22/+17/+17/+17/+17',
    '+23/+18/+18/+18/+18',
    '+24/+19/+19/+19/+19',
    '+25/+20/+20/+20/+20',
    '+26/+21/+21/+21/+21',
    '+27/+22/+22/+22/+22',
    '+28/+23/+23/+23/+23',
    '+29/+24/+24/+24/+24',
    '+30/+25/+25/+25/+25',
  ],
};

const epicAdditionalColumnProgressions = {
  'Ki Points': [
    '376',
    '445',
    '481',
    '556',
    '595',
    '635',
    '676',
    '718',
    '761',
    '805',
  ],
};

export default function EpicClassTable({
  baseAttackBonusType,
  epicLevelClassFeatures,
  additionalColumn,
}) {
  let tableRows = [];

  for (let i = 20; i < 30; i++) {
    let filteredFeatures = epicLevelClassFeatures.filter(
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
      <tr className={'Epic-Class-Progression-Table-Row'} key={i}>
        <td>{get20sNumberWithSuffix(i + 1)}</td>
        <td>{epicBABProgessions[baseAttackBonusType][i - 20]}</td>
        <td>{`+${i - 19}`}</td>
        {additionalColumn ? (
          <td>{epicAdditionalColumnProgressions[additionalColumn][i - 20]}</td>
        ) : null}
        <td>{featureList}</td>
      </tr>
    );
  }

  return (
    <div className={'Epic-Class-Table-Container'}>
      <table className={'Epic-Class-Progression-Table'}>
        <thead>
          <tr className={'Epic-Class-Progression-Table-Header-Row'}>
            <td>Level</td>
            <td>Base Attack Bonus</td>
            <td>Saves Bonus</td>
            {additionalColumn ? <td>{additionalColumn}</td> : null}
            <td>Special</td>
          </tr>
        </thead>
        <tbody className={'Epic-Class-Progression-Table-Body'}>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
}
