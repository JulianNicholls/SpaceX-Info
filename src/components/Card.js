import React from 'react';

function Card({ header, subheader, headerClass, footer, children }) {
  return (
    <div className="card">
      <div className={`card__header ${headerClass}`}>
        {header}
        {subheader && <small>{subheader}</small>}
      </div>
      {children && <div className="card__content">{children}</div>}
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
}

export default Card;
