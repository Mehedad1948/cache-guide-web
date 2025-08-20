import ClientShwTime from '@/components/ClientShwoTime';
import { Badge } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default async function Static({ children, fetchTags, params, cache = 'default', identifier }: {
    children?: ReactNode,
    fetchTags?: string[],
    params?: string
    cache?: RequestCache
    identifier?: string
}) {
    let time
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/time/${identifier || ''}${params ? `?params=${params}` : ''}`, {
            cache,
            next: {
                tags: fetchTags || ['static']
            }
        });

        time = await res.json();
    } catch (error) {
        console.log('🚀🚀', error);
    }

    return (
        <div className='rounded-3xl flex flex-col gap-4 border p-6 bg-white relative' >
            {fetchTags && <div className='absolute bottom-4 right-4 flex items-center gap-3'>
                {fetchTags.map(item => <Badge variant={'secondary'} key={item}>
                    {item}
                </Badge>)}
            </div>}
            <h2>This section has a fetch with <b>{cache}</b> cache policy
            </h2>
            <ClientShwTime dataTime={time?.timestamp} />
            {children}
            <div>
                {params &&
                    <p className=' flex items-center '>
                        <span className='mr-2 text-gray-600 '> Fetch from</span>
                        <span className='text-gray-600 '>api/time</span><span className='font-semibold'>?params={params}</span>
                    </p>
                }
            </div>
        </div>
    );
}