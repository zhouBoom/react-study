import './index.less';
import { Menu } from 'antd';
import React from 'react';
const {SubMenu} = Menu

const LeftNav = () => {
    return(
        <div className="left-nav">
            <Menu>
                <Menu.Item>item 1</Menu.Item>
                <Menu.Item>item 2</Menu.Item>
                <SubMenu title="sub menu">
                    <Menu.Item>item 3</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}

export default LeftNav