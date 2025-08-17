import ClientShwTime from '@/components/ClientShwoTime';
import { Suspense } from 'react';
import Static from './sections/static';
import RevalidateEvery from './sections/RevalidateEvry';

export default async function page() {

    return (
        <div className='flex flex-col gap-6'>
            <Suspense>
                <Static />
            </Suspense>
            {/* <Suspense>
                <RevalidateEvery revalidate={1} />
            </Suspense> */}
        </div>
    );
}