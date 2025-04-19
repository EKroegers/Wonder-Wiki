import * as React from 'react';

export default function ClassFeature({
  featureName,
  featureType,
  featureDescription,
  setInnerHtml,
  className,
}) {
  if (setInnerHtml) {
    return (
      <div className={`Class-Feature-Container ${className ?? ''}`.trim()}>
        <h4
          className="Class-Feature-Name"
          dangerouslySetInnerHTML={{
            __html: `${featureName} ${featureType ? `(${featureType})` : ''}`,
          }}
        />
        <div className="Class-Feature-Body">
          <div dangerouslySetInnerHTML={{ __html: `${featureDescription}` }} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={`Class-Feature-Container ${className ?? ''}`.trim()}>
        <h4 className="Class-Feature-Name">
          {featureName} {featureType ? `(${featureType})` : ''}
        </h4>
        <div className="Class-Feature-Body">{featureDescription}</div>
      </div>
    );
  }
}
