import { Suspense } from 'react';
import RevalidateEvery from './sections/RevalidateEvry';
import Static from './sections/static';
import NoteBox from '@/components/ui/NoteBox';


// export const revalidate = 60 * 5

export default async function page() {

    return (
        <div className='flex flex-col gap-6'>
            <NoteBox variant={'left-accent'}>
                export const revalidate = 60 * 30
            </NoteBox>
            <Suspense>
                <Static />
            </Suspense>
            <NoteBox variant={'left-accent'}>
                The section above  has no validation time but it revalidates every 1 minute as the below component determines the
                revalidation of page as the minimum revalidation used in the page
            </NoteBox>
            <Suspense>
                <RevalidateEvery revalidate={2} />
            </Suspense>
        </div >
    );
}