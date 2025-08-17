import ClientShwTime from '@/components/ClientShwoTime';
import { Suspense } from 'react';
import Static from './sections/static';
import RevalidateEvery from './sections/RevalidateEvry';


export const revalidate = 60;

export default async function page() {

    return (
        <div className='flex flex-col gap-6'>
            <Suspense>
                <Static />
            </Suspense>
            <div className='bg-cyan-50 text-lg text-cyan-700 rounded-xl p-4'>
                The section above  has no validation time but it revalidates every 1 minute as the below component determines the
                revalidation of page as the minimum revalidation used in the page
            </div>
            <Suspense>
                <RevalidateEvery revalidate={1} />
            </Suspense>
        </div>
    );
}