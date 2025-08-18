import ClientShwTime from '@/components/ClientShwoTime';
import { Badge } from '@/components/ui/badge';
import { ReactNode } from 'react';

export default async function RevalidateEvery({ revalidate, children, tags }:
    { revalidate: number, children?: ReactNode, tags?: string[] }) {
    let time
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/time`, {
            next: {
                revalidate: revalidate * 60,
                tags: tags
            }
        });

        time = await res.json();
    } catch (error) {
        console.log('🚀🚀', error);
    }

    return (
        <div className='rounded-3xl flex flex-col gap-4 border p-6 bg-white relative'>
            {tags && <div className='absolute bottom-4 right-4 flex items-center gap-3'>
                {tags.map(item => <Badge variant={'secondary'} key={item}>
                    {item}
                </Badge>)}
            </div>}
            <h2>This section is being revalidated every {revalidate} minutes</h2>
            <ClientShwTime dataTime={time?.timestamp} renderTime={new Date().getTime()} />

            {children}
        </div>
    );
}