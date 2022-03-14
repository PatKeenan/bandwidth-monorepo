import {ContentContainer} from '@comps-features';
import React from 'react';
import {Outlet} from 'react-router';

export const ProjectsContainer = () => {
  return (
    <ContentContainer>
      <Outlet />
    </ContentContainer>
  );
};
