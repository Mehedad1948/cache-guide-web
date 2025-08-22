import ClientShwTime from '@/components/ClientShwoTime';
import { Badge } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default async function RevalidateEvery({ revalidate, children, tags, params, identifier }:
    { revalidate: number, children?: ReactNode, tags?: string[], params?: string, identifier?: string }) {
    let time
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/time/${identifier || ''}${params ? `?param=${params}` : ''}`, {
            next: {
                revalidate: revalidate * 60,
                tags: tags
            }
        });

        time = await res.json();
    } catch (error) {
        console.error(error);
    }

    return (
        <div className='rounded-3xl flex flex-col gap-4 border p-6 bg-white relative'>
            {tags && <div className='absolute bottom-4 right-4 flex items-center gap-3'>
                {tags.map(item => <Badge variant={'secondary'} key={item}>
                    {item}
                </Badge>)}
            </div>}
            <h2>This section is being revalidated every <b>{revalidate}</b> minutes </h2>
            <ClientShwTime dataTime={time?.timestamp} renderTime={new Date().getTime()} />
            {
                <p className=' flex items-center '>
                    <span className='mr-2 text-gray-600 '> Fetch from</span>
                    <span className='text-gray-600 '>/api/time/{identifier || ''}{params ? <b>?params={params}</b> : ''}</span>
                </p>
            }


            {children}
        </div>
    );
}