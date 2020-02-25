import React from 'react';

interface CardProps {
  header: string;
  subheader: string;
  headerClass: string;
  footer: string;
  children: JSX.Element;
}
function Card({ header, subheader, headerClass, footer, children }: CardProps) {
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
