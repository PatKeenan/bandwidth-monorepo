import React from 'react';

import { Input, Button, Dropdown, Menu, Badge } from 'antd';

import { BellOutlined, SettingOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Account</Menu.Item>
        <Menu.Item>Help</Menu.Item>
    </Menu>
);

export const Head = () => {
    const { Search } = Input;

    return (
        <header className="w-full flex flex-row pb-4 border-b justify-between">
            <div>
                <Search placeholder="Search..." />
            </div>

            <div className="flex flex-row">
                <div className="mr-4">
                    <Badge dot offset={[-5, 3.5]}>
                        <Button shape="circle" icon={<BellOutlined />} />
                    </Badge>
                </div>
                <div>
                    <Dropdown overlay={menu} trigger={['click', 'hover']} placement={'bottomRight'}>
                        <Button shape="circle" icon={<SettingOutlined />} />
                    </Dropdown>
                </div>
            </div>
        </header>
    );
};
