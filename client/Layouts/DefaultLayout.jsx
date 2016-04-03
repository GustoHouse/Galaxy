import React from 'react';

export const DefaultLayout = ({menu,breadcrumbs,content,chat}) => (
    <div className="layout" id="layout-default">
        {menu}
        <div id="content">
            {content}
        </div>
        <div id="chat">
            {chat}
        </div>
    </div>
)