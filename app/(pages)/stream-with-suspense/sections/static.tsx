import ClientShwTime from '@/components/ClientShwoTime';
import { ReactNode } from 'react';

export default async function Static({ children, fetchTags, params }: {
    children?: ReactNode,
    fetchTags?: string[],
    params?: string
}) {
    let time
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/time${params ? `?params=${params}` : ''}`, {
            cache: 'force-cache',
            next: {
                tags: fetchTags || ['static']
            }
        });

        time = await res.json();
    } catch (error) {
        console.log('🚀🚀', error);
    }

    return (
        <div className='rounded-3xl flex flex-col gap-4 border p-6 bg-white'>
            <h2>This section has a fetch with <b>force-cache</b> policy ( Nextjs 14 default )
            </h2>
            <ClientShwTime dataTime={time?.timestamp} />
            {children}
            <div>
                {params &&
                    <p className='font-semibold flex items-center '>
                        <span className='mr-2'> Fetch from</span>
                        <span className='text-gray-500'>api/time</span>?params={params}
                    </p>}
            </div>
        </div>
    );
}