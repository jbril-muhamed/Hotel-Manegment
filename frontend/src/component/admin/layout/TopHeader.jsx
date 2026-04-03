import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const TopHeader = () => {
    const headerStyle = {
        height: '70px',
        backgroundColor: 'var(--admin-bg-surface)',
        borderBottom: '1px solid var(--admin-border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
    };

    const searchStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--admin-bg-body)',
        borderRadius: '8px',
        padding: '8px 16px',
        width: '300px',
        border: '1px solid var(--admin-border-color)',
    };

    const inputStyle = {
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        marginLeft: '8px',
        width: '100%',
        color: 'var(--admin-text-primary)',
        fontSize: '14px',
    };

    const rightSectionStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    };

    const iconButtonStyle = {
        background: 'none',
        border: 'none',
        color: 'var(--admin-text-secondary)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const avatarStyle = {
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        backgroundColor: 'var(--admin-primary-color)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        fontSize: '14px',
    };

    return (
        <header style={headerStyle}>
            <div style={searchStyle}>
                <Search size={18} color="var(--admin-text-secondary)" />
                <input type="text" placeholder="Search..." style={inputStyle} />
            </div>

            <div style={rightSectionStyle}>
                <button style={iconButtonStyle}>
                    <Bell size={20} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--admin-text-primary)' }}>Admin User</div>
                        <div style={{ fontSize: '12px', color: 'var(--admin-text-secondary)' }}>Manager</div>
                    </div>
                    <div style={avatarStyle}>
                        <User size={18} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopHeader;
