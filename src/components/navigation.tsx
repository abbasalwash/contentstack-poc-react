import React from 'react';
import { GroupedNavigation } from '../typescript/generated';

const Navigation = ({groupedNavigation}: {groupedNavigation: GroupedNavigation}) => {

    if (!groupedNavigation.title) {
        return null;
    }

    console.log('Navigation props => ', groupedNavigation);
    return <h1>Navigation</h1>;
};

export default Navigation;