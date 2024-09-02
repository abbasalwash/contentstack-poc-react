import React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from "../typescript/card";
import { CallToActionButton } from './call-to-action-button';

export default function CardSection({ cards }: CardProps) {

  return (
    <div className='demo-section'>
      {cards?.map((card) => (
        <div className='cards' key={card.title_h3}>
          {card.title_h3 && <h3 {...card.$?.title_h3 as {}}>{card.title_h3}</h3>}
          {card.description && <p {...card.$?.description as {}}>{card.description}</p>}
          <div className='card-cta'>
            {card.call_to_action.title && card.call_to_action.href && (
              <CallToActionButton {...card.call_to_action} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
