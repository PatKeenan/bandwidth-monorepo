import { ContentContainer } from '@comps-features';
import React from 'react';
import { Outlet } from 'react-router';

export const ShowingsContainer = () => {
    return (
        <ContentContainer>
            <Outlet />
        </ContentContainer>
    );
};
