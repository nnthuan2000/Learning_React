import { ReactNode } from 'react';

import './Card.css';

interface ICard {
  className: string;
  children: ReactNode;
}

function Card({ className, children }: ICard) {
  return <div className={`card ${className}`}>{children}</div>;
}

export default Card;
