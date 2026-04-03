import React from 'react';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';

const AdminLayout = ({ children }) => {
    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: 'var(--admin-bg-body)', overflow: 'hidden' }}>
            <Sidebar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <TopHeader />
                <main style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
