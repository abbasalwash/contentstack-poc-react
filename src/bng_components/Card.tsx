import React, { Children, Component } from 'react';


export interface CardTitleProps extends React.HTMLAttributes<HTMLElement> {
    abbas: string
}

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    bart?: string
}

const CardTitle = React.forwardRef<HTMLElement, CardTitleProps>(
    ({
        ...props
    }, ref) => {
        return (
            <div {...props}>{props.abbas}</div>
        );
    }
);

CardTitle.displayName = "Card titeltje";

const Card = React.forwardRef<HTMLElement, CardProps>(
    ({
        ...props
    }, ref) => {
        return (
            <div {...props}>
                {props.children}
            </div>
        );
    }
);

Card.displayName = "Card objectje";

export default Object.assign(Card, {
    Title: CardTitle
});