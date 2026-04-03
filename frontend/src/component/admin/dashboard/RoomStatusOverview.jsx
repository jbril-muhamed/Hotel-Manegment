import React from 'react';

const RoomStatusOverview = () => {
    const statuses = [
        { label: 'Available', percent: 45, color: 'var(--admin-success-color)', count: 54 },
        { label: 'Occupied', percent: 35, color: 'var(--admin-primary-color)', count: 42 },
        { label: 'Cleaning', percent: 12, color: 'var(--admin-warning-color)', count: 14 },
        { label: 'Maintenance', percent: 8, color: '#EF4444', count: 10 },
    ];

    const containerStyle = {
        backgroundColor: 'var(--admin-bg-surface)',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        border: '1px solid var(--admin-border-color)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    };

    const headerStyle = {
        fontSize: '18px',
        fontWeight: '600',
        color: 'var(--admin-text-primary)',
        marginBottom: '24px',
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>Room Status Overview</div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px' }}>
                {/* Visual Bar */}
                <div style={{ display: 'flex', height: '12px', borderRadius: '6px', overflow: 'hidden', marginBottom: '16px' }}>
                    {statuses.map((s, i) => (
                        <div key={i} style={{ width: `${s.percent}%`, backgroundColor: s.color }} title={`${s.label}: ${s.percent}%`} />
                    ))}
                </div>

                {/* Legend List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {statuses.map((s, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: s.color }} />
                                <span style={{ color: 'var(--admin-text-secondary)', fontSize: '14px', fontWeight: '500' }}>{s.label}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <span style={{ color: 'var(--admin-text-primary)', fontWeight: '600', fontSize: '14px' }}>{s.count}</span>
                                <span style={{ color: 'var(--admin-text-secondary)', fontSize: '13px', width: '32px', textAlign: 'right' }}>{s.percent}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomStatusOverview;
