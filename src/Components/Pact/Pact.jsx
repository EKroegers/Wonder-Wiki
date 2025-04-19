import * as React from 'react';

export default function Pact({
  pactName,
  pactPrologue,
  pactBenefits,
  pactEpilogue,
  setInnerHtml,
  className,
}) {
  if (setInnerHtml) {
    return (
      <div className={`Pact-Container ${className ?? ''}`.trim()}>
        <h3
          className="Pact-Name"
          dangerouslySetInnerHTML={{ __html: `Pact of ${pactName}` }}
        />
        <div
          className="Pact-Prologue"
          dangerouslySetInnerHTML={{
            __html: pactPrologue,
          }}
        />
        <div
          className="Pact-Benefits"
          dangerouslySetInnerHTML={{
            __html: pactBenefits,
          }}
        />
        <div
          className="Pact-Epilogue"
          dangerouslySetInnerHTML={{
            __html: pactEpilogue,
          }}
        />
      </div>
    );
  } else {
    return (
      <div className={`Pact-Container ${className ?? ''}`.trim()}>
        <h3 className="Pact-Name">{pactName}</h3>
        <p className="Pact-Prologue">{pactPrologue}</p>
        <p className="Pact-Benefits">{pactBenefits}</p>
        <p className="Pact-Epilogue">{pactEpilogue}</p>
      </div>
    );
  }
}
