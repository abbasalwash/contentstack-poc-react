import React from 'react';
import { GroupedNavigation } from '../typescript/generated';
import '../styles/navigation.css';

const Navigation = ({ groupedNavigation }: { groupedNavigation: GroupedNavigation }) => {

    if (!groupedNavigation.title) {
        return null;
    }

    return (
        <nav role="navigation">
            {renderNavItem(groupedNavigation)}
        </nav>
    );
};

const renderNavItem = (groupedNavigation: GroupedNavigation) => {
    return (
        <ul>
            {groupedNavigation.global_grouped_navigation?.main_group?.map((page, index) => {
                return (
                    <li key={index}>
                        <a href={page.title}>{page.title}</a>
                        {page.sub_group && renderSubNavItem(page.sub_group)}
                    </li>
                );
            })}
        </ul>
    );
}

const renderSubNavItem = (subGroup: any) => {
    if (subGroup.length === 0) {
        return null;
    }

    return (
        <ul className="dropdown">
            {subGroup.map((sub: any, index: number) => {
                return <li key={index}><a href={sub.sub_page_reference[0].url}>{sub.sub_page_reference[0].title}</a></li>;
            })}
        </ul>
    );
}

export default Navigation;