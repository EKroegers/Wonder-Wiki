import * as React from 'react';
import { Link } from 'react-router-dom';

import './LinkCard.css';

export default function LinkCard({ url, linkText, className }) {
  return (
    <Link to={url} className={`Link-Card ${className ?? ''}`.trim()}>
      {linkText}
    </Link>
  );
}
