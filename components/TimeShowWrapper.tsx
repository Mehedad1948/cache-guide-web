'use client';

import { useEffect, useState } from 'react';

export default function TimeShowWrapper({ timestamp, children }: { timestamp: number, children: (timer: string) => React.ReactNode }) {
    const [now, setNow] = useState(Date.now());

    // One interval for both counters
    useEffect(() => {
        const interval = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formatDiff = (diff: number) => {
        const halfMinute = 30 * 1000;
        const oneDay = 24 * 60 * 60 * 1000;

        // if (diff < halfMinute) {
        //     return 'Now';
        // }

        if (diff < oneDay) {
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            return `${hours.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ago`;
        }

        const days = Math.floor(diff / oneDay);
        const hours = Math.floor((diff % oneDay) / (1000 * 60 * 60));
        return `${days} day${days !== 1 ? 's' : ''} and ${hours} hour${hours !== 1 ? 's' : ''
            } ago`;
    };

    return children(formatDiff(now - timestamp));
}