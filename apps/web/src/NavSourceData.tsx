/**
 *
 * This file serves as the source of truth for the nav links.
 * You only need to add a new link to this file and it will automatically be added to the browser routes inside of src/index.tsx
 * and it will also automatically be added to the navigation inside of src/comps-features/Navigation.
 *
 */
import React from 'react';
import {
  BarsOutlined,
  CalculatorOutlined,
  CarOutlined,
  DollarOutlined,
  HomeOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import {
  Calendar,
  Dashboard,
  Expenses,
  PeopleAll,
  PeopleContainer,
  PersonAdd,
  ProjectsAdd,
  ProjectsContainer,
  ShowingsAll,
  ShowingsContainer,
  ShowingsCreate,
} from '@comps-core';

export interface NavSourceDataInterface {
  title: string;
  path: string;
  component?: React.ReactNode;
  icon?: React.ReactNode | null;
  subItems?: NavSourceDataInterface[] | null;
}

const dashboard: NavSourceDataInterface = {
  title: 'Dashboard',
  path: '/',
  component: <Dashboard />,
  icon: <HomeOutlined />,
  subItems: null,
};

const calendar: NavSourceDataInterface = {
  title: 'Calendar',
  path: 'calendar',
  component: <Calendar />,
  icon: <CalculatorOutlined />,
  subItems: null,
};

const showings: NavSourceDataInterface = {
  title: 'Showings',
  path: 'showings',
  component: <ShowingsContainer />,
  icon: <CarOutlined />,
  subItems: [
    {
      title: 'All Showings',
      path: 'all-showings',
      component: <ShowingsAll />,
      icon: null,
      subItems: null,
    },
    {
      title: 'Create New',
      path: 'create-new',
      component: <ShowingsCreate />,
      icon: null,
      subItems: null,
    },
  ],
};

const projects: NavSourceDataInterface = {
  title: 'Projects',
  path: 'projects',
  component: <ProjectsContainer />,
  icon: <BarsOutlined />,
  subItems: [
    {
      title: 'Add New',
      path: 'add-new',
      component: <ProjectsAdd />,
      icon: null,
      subItems: null,
    },
  ],
};

const people: NavSourceDataInterface = {
  title: 'People',
  path: 'people',
  component: <PeopleContainer />,
  icon: <TeamOutlined />,
  subItems: [
    {
      title: 'All People',
      path: 'all-people',
      component: <PeopleAll />,
      icon: null,
      subItems: null,
    },
    {
      title: 'Add Person',
      path: 'add-person',
      component: <PersonAdd />,
      icon: null,
      subItems: null,
    },
  ],
};

const expenses: NavSourceDataInterface = {
  title: 'Expenses',
  path: 'expenses',
  component: <Expenses />,
  icon: <DollarOutlined />,
  subItems: null,
};

export const NavSourceData: NavSourceDataInterface[] = [
  dashboard,
  calendar,
  showings,
  projects,
  people,
  expenses,
];
