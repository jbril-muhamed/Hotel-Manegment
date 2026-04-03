import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, Key, Users, Settings } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
        { name: 'Room Management', path: '/admin/manage-rooms', icon: <Key size={20} /> },
        { name: 'Bookings', path: '/admin/manage-bookings', icon: <CalendarDays size={20} /> },
        { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
    ];

    const sidebarStyle = {
        width: '260px',
        backgroundColor: 'var(--admin-sidebar-bg)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
    };

    const headerStyle = {
        padding: '24px',
        fontSize: '20px',
        fontWeight: '700',
        color: '#FFFFFF',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '20px',
    };

    const linkStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 24px',
        color: 'var(--admin-text-secondary)',
        textDecoration: 'none',
        fontSize: '15px',
        fontWeight: '500',
        transition: 'background-color 0.2s, color 0.2s',
    };

    const activeStyle = {
        ...linkStyle,
        backgroundColor: 'var(--admin-sidebar-hover)',
        color: 'white',
        borderRight: '3px solid var(--admin-primary-color)',
    };

    return (
        <div style={sidebarStyle}>
            <div style={headerStyle}>
                Skylight <span style={{ color: 'var(--admin-primary-color)' }}>HMS</span>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
                        end={item.path === '/admin'}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
