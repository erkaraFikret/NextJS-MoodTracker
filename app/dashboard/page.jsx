import Main from '@/components/Main';
import Dashboard from '@/components/Dashboard';
import React from 'react'
import Login from '@/components/Login';

export const metadata = {
    title: "NextMoods · Dashboard",
};

const DashboardPage = () => {

    const isAuthenticated = false;

    let children = (
        <Login />
    )

    if (isAuthenticated) {
        children = (
            <Dashboard />
        )
    }

    return (
        <Main>{children}</Main>
    )
}

export default DashboardPage