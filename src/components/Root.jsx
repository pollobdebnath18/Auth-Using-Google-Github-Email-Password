import React from 'react';
import { Outlet } from 'react-router';
import Navigation from './Navigation/Navigation';

const Root = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet>
                
            </Outlet>
        </div>
    );
};

export default Root;