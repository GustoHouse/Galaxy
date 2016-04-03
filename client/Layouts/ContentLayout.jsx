import React from 'react';

export const ContentLayout = ({menu,breadcrumbs,content}) => (
    <div className="layout" id="layout-content">
        {menu}
        <div id="content">
            {content}
        </div>
    </div>
)