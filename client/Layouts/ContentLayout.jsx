import React from 'react';

export const ContentLayout = ({menu,breadcrumbs,content}) => (
    <div className="layout" id="layout-content">
        <div id="menu">
            {menu}
        </div>
        <div id="content">
            {breadcrumbs}
            {content}
        </div>
    </div>
)