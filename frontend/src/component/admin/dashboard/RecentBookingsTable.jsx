import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const RecentBookingsTable = () => {
    // Mock data for display purposes
    const recentBookings = [
        { id: 'BK-7829', guest: 'Sarah Jenkins', room: '402', type: 'Deluxe', status: 'Checked-in', checkIn: 'Oct 12', checkOut: 'Oct 15' },
        { id: 'BK-7830', guest: 'Marcus Chen', room: '115', type: 'Standard', status: 'Confirmed', checkIn: 'Oct 14', checkOut: 'Oct 16' },
        { id: 'BK-7831', guest: 'Elena Rodriguez', room: '305', type: 'Suite', status: 'Pending', checkIn: 'Oct 15', checkOut: 'Oct 18' },
        { id: 'BK-7832', guest: 'David Smith', room: '224', type: 'Standard', status: 'Checked-in', checkIn: 'Oct 11', checkOut: 'Oct 14' },
        { id: 'BK-7833', guest: 'Jessica Taylor', room: '510', type: 'Suite', status: 'Confirmed', checkIn: 'Oct 16', checkOut: 'Oct 20' },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Checked-in':
                return { bg: '#DBEAFE', color: '#1E40AF' }; // Blue
            case 'Confirmed':
                return { bg: '#D1FAE5', color: '#065F46' }; // Green
            case 'Pending':
                return { bg: '#FEF3C7', color: '#92400E' }; // Yellow
            default:
                return { bg: '#F3F4F6', color: '#374151' }; // Gray
        }
    };

    const containerStyle = {
        backgroundColor: 'var(--admin-bg-surface)',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        border: '1px solid var(--admin-border-color)',
        flex: 2,
    };

    const headerStyle = {
        fontSize: '18px',
        fontWeight: '600',
        color: 'var(--admin-text-primary)',
        marginBottom: '20px',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
    };

    const thStyle = {
        textAlign: 'left',
        padding: '12px 16px',
        color: 'var(--admin-text-secondary)',
        fontSize: '13px',
        fontWeight: '500',
        borderBottom: '1px solid var(--admin-border-color)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
    };

    const tdStyle = {
        padding: '16px',
        fontSize: '14px',
        color: 'var(--admin-text-primary)',
        borderBottom: '1px solid var(--admin-border-color)',
    };

    const tdSubStyle = {
        fontSize: '12px',
        color: 'var(--admin-text-secondary)',
        marginTop: '4px',
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>Recent Bookings</div>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Guest & ID</th>
                        <th style={thStyle}>Room Info</th>
                        <th style={thStyle}>Dates</th>
                        <th style={thStyle}>Status</th>
                        <th style={thStyle}></th>
                    </tr>
                </thead>
                <tbody>
                    {recentBookings.map((booking, idx) => {
                        const statusStyle = getStatusStyle(booking.status);
                        return (
                            <tr key={idx} style={{ transition: 'background-color 0.2s' }}>
                                <td style={tdStyle}>
                                    <div style={{ fontWeight: '500' }}>{booking.guest}</div>
                                    <div style={tdSubStyle}>{booking.id}</div>
                                </td>
                                <td style={tdStyle}>
                                    <div>Room {booking.room}</div>
                                    <div style={tdSubStyle}>{booking.type}</div>
                                </td>
                                <td style={tdStyle}>
                                    <div>{booking.checkIn} - {booking.checkOut}</div>
                                </td>
                                <td style={tdStyle}>
                                    <span style={{
                                        backgroundColor: statusStyle.bg,
                                        color: statusStyle.color,
                                        padding: '4px 12px',
                                        borderRadius: '9999px',
                                        fontSize: '12px',
                                        fontWeight: '500',
                                        display: 'inline-block'
                                    }}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td style={{ ...tdStyle, textAlign: 'right' }}>
                                    <button style={{
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: 'var(--admin-text-secondary)'
                                    }}>
                                        <MoreHorizontal size={20} />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default RecentBookingsTable;
