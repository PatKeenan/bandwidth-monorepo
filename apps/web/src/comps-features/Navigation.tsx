/**
 *
 * This file serves as the Navigation for the site.
 * The Links below will trigger the proper comps found in src/index.tsx
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import type { NavSourceDataInterface } from 'NavSourceData';
import { NavSourceData } from 'NavSourceData';
import { joinStrings } from '@utils';

export const Navigation = () => {
    return (
        <Menu theme="light" mode="inline">
            {NavSourceData.map((navItem: NavSourceDataInterface) => {
                if (navItem.subItems) {
                    return (
                        <Menu.SubMenu title={navItem.title} icon={navItem.icon} key={navItem.path}>
                            {navItem.subItems.map((navSubItem: NavSourceDataInterface) => {
                                return (
                                    <Menu.Item icon={navSubItem.icon ?? null} key={navSubItem.path}>
                                        <Link to={joinStrings([navItem.path, '/', navSubItem.path])}>
                                            {navSubItem.title}
                                        </Link>
                                    </Menu.Item>
                                );
                            })}
                        </Menu.SubMenu>
                    );
                } else {
                    return (
                        <Menu.Item icon={navItem.icon ?? null} key={navItem.path}>
                            <Link to={navItem.path}>{navItem.title}</Link>
                        </Menu.Item>
                    );
                }
            })}
        </Menu>
    );
};
