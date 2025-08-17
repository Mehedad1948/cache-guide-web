import ClientShwTime from '@/components/ClientShwoTime';
import { ReactNode } from 'react';

export default async function Static({ children, fetchTags }: { children?: ReactNode, fetchTags?: string[] }) {
    let time
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/time`, {
            next: { tags: fetchTags || ['static'] }
        });

        time = await res.json();
    } catch (error) {
        console.log('🚀🚀', error);
    }

    return (
        <div className='rounded-3xl flex flex-col gap-4 border p-6 bg-white'>
            <h2>This section has a fetch with no validate time set</h2>
            <ClientShwTime dataTime={time?.timestamp} />
            {children}
        </div>
    );
}