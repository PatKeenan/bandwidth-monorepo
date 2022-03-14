/**
 *
 * This file serves as the entry point for webpack as well as the controller for the routing.
 * Main entry point for the Application is found in the App component.
 *
 * Navigation links can be found in comps-features/Navigation.
 *  Link to must be the same as path in the Route below.
 *
 */
import './styles.css';
import 'antd/dist/antd.css';

import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router';

import {NavSourceData, NavSourceDataInterface} from 'NavSourceData';

import {PageNotFound} from '@comps-core';

ReactDom.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {NavSourceData.map((navItem: NavSourceDataInterface) => {
          if (navItem.subItems) {
            return (
              <Route
                path={navItem.path}
                element={navItem.component}
                key={navItem.title}
              >
                {navItem.subItems.map((subItem: NavSourceDataInterface) => (
                  <Route
                    path={subItem.path}
                    element={subItem.component}
                    key={subItem.title}
                  />
                ))}
              </Route>
            );
          } else {
            return (
              <Route
                path={navItem.path}
                element={navItem.component}
                key={navItem.title}
              />
            );
          }
        })}
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
