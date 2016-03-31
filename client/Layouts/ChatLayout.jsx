import React from 'react';

export const ChatLayout = ({menu,chat}) => (
    <div className="layout" id="layout-chat">
        <div id="menu">
            {menu}
        </div>
        <div id="chat">
            {chat}
        </div>
    </div>
)