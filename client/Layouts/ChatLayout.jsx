import React from 'react';

export const ChatLayout = ({menu,chat}) => (
    <div className="layout" id="layout-chat">
        {menu}
        <div id="chat">
            {chat}
        </div>
    </div>
)