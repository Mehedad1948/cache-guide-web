import { Suspense } from 'react';
import RevalidateEvery from './sections/RevalidateEvry';
import Static from './sections/static';


export const revalidate = 60 * 5

export default async function page() {

    return (
        <div className='flex flex-col gap-6'>
            <div className='bg-cyan-50 font-medium text-base text-cyan-700 rounded-xl p-4'>
                export const revalidate = 60 * 30
            </div>
            <Suspense>
                <Static />
            </Suspense>
            <div className='bg-cyan-50 font-medium text-base text-cyan-700 rounded-xl p-4'>
                The section above  has no validation time but it revalidates every 1 minute as the below component determines the
                revalidation of page as the minimum revalidation used in the page
            </div>
            <Suspense>
                <RevalidateEvery revalidate={2} />
            </Suspense>
        </div>
    );
}