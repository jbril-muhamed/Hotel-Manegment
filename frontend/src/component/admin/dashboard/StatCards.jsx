import React from 'react';
import { ArrowUpRight, ArrowDownRight, LogIn, LogOut, Percent, DollarSign } from 'lucide-react';

const StatCards = () => {
    const stats = [
        { title: "Today's Check-ins", value: "24", trend: "+5% from yesterday", isPositive: true, icon: <LogIn size={24} color="var(--admin-info-color)" /> },
        { title: "Today's Check-outs", value: "18", trend: "-2% from yesterday", isPositive: false, icon: <LogOut size={24} color="var(--admin-warning-color)" /> },
        { title: "Occupancy Rate", value: "85%", trend: "+12% this week", isPositive: true, icon: <Percent size={24} color="var(--admin-primary-color)" /> },
        { title: "Total Revenue", value: "$4,250", trend: "+8% this month", isPositive: true, icon: <DollarSign size={24} color="var(--admin-success-color)" /> },
    ];

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
        marginBottom: '24px',
    };

    const cardStyle = {
        backgroundColor: 'var(--admin-bg-surface)',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        border: '1px solid var(--admin-border-color)'
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const titleStyle = {
        color: 'var(--admin-text-secondary)',
        fontSize: '14px',
        fontWeight: '500',
    };

    const valueStyle = {
        fontSize: '28px',
        fontWeight: '700',
        color: 'var(--admin-text-primary)',
    };

    const iconWrapperStyle = {
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        backgroundColor: 'var(--admin-bg-body)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={containerStyle}>
            {stats.map((stat, idx) => (
                <div key={idx} style={cardStyle}>
                    <div style={headerStyle}>
                        <div>
                            <div style={titleStyle}>{stat.title}</div>
                            <div style={valueStyle}>{stat.value}</div>
                        </div>
                        <div style={iconWrapperStyle}>
                            {stat.icon}
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px' }}>
                        {stat.isPositive ?
                            <ArrowUpRight size={16} color="var(--admin-success-color)" /> :
                            <ArrowDownRight size={16} color="var(--admin-warning-color)" />
                        }
                        <span style={{ color: stat.isPositive ? 'var(--admin-success-color)' : 'var(--admin-warning-color)', fontWeight: '500' }}>
                            {stat.trend}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatCards;
