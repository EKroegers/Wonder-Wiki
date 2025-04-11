import * as React from 'react';

export default function ClassFeature({
  featureName,
  featureType,
  featureDescription,
}) {
  return (
    <div className="Class-Feature-Container">
      <h4 className="Class-Feature-Header">
        {featureName} {featureType ? `(${featureType})` : ''}
      </h4>
      <div className="Class-Feature-Body">{featureDescription}</div>
    </div>
  );
}
