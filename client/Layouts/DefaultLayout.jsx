import React from 'react';

export const DefaultLayout = ({menu,breadcrumbs,content,chat}) => (
    <div className="layout" id="layout-default">
        <div id="menu">
            {menu}
        </div>
        <div id="content">
            {breadcrumbs}
            {content}
        </div>
        <div id="chat">
            {chat}
        </div>
    </div>
)