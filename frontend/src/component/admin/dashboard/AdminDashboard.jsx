import React, { useState, useEffect } from "react";
import ApiService from '../../../service/ApiService';
import StatCards from './StatCards';
import RecentBookingsTable from './RecentBookingsTable';
import RoomStatusOverview from './RoomStatusOverview';

const AdminDashboard = () => {
    const [adminName, setAdminName] = useState('Admin');

    useEffect(() => {
        const fetchAdminName = async () => {
            try {
                const response = await ApiService.getUserProfile();
                if (response.user && response.user.name) {
                    setAdminName(response.user.name);
                }
            } catch (error) {
                console.error('Error fetching admin details:', error.message);
            }
        };

        fetchAdminName();
    }, []);

    const dashboardHeaderStyle = {
        marginBottom: '24px',
    };

    const titleStyle = {
        fontSize: '24px',
        fontWeight: '700',
        color: 'var(--admin-text-primary)',
        marginBottom: '8px',
    };

    const subtitleStyle = {
        color: 'var(--admin-text-secondary)',
        fontSize: '15px',
    };

    const lowerRowStyle = {
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
    };

    return (
        <div>
            <div style={dashboardHeaderStyle}>
                <h1 style={titleStyle}>Dashboard Overview</h1>
                <p style={subtitleStyle}>Welcome back, {adminName}. Here's what's happening today.</p>
            </div>

            <StatCards />

            <div style={lowerRowStyle}>
                <RecentBookingsTable />
                <RoomStatusOverview />
            </div>
        </div>
    );
};

export default AdminDashboard;
