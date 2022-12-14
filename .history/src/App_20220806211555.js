import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import {
  getZindexPartial,
  TooltipComponent,
} from '@syncfusion/ej2-react-popups';

import './App.css';

const App = () => {
  const activeMenu = false;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl hover:drop-shadow-xl p-3 hover:bg-light-gray text-white"
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white sidebar">
              Sidbar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Nosidebar</div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-bg bg-main-bg min-h-scren md:ml-72 w-full'
                : 'dark:bg-main-bg bg-main-bg min-h-scren md:ml-72 w-full'
            }
          ></div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
