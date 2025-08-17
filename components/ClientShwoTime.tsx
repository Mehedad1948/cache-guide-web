'use client';

import { useEffect, useState } from 'react';

type Props = {
    dataTime: number;
    renderTime?: number;
};

export default function ClientShwTime({ dataTime, renderTime }: Props) {
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

    return (
        <div className='flex items-center font-semibold flex-col justify-around h-full text-3xl gap-12'>
            <div className='flex flex-col gap-4 items-center'>
                <span className='text-2xl font-medium'>

                    Data was fetched:
                </span>
                <span>
                    {formatDiff(now - dataTime)}
                </span>
            </div>
            {renderTime && <div className='flex flex-col gap-4 items-center'>
                <span className='text-2xl font-medium'>
                    Page was rendered:
                </span>
                <span>
                    {formatDiff(now - renderTime)}
                </span>
            </div>}
        </div >
    );
}
