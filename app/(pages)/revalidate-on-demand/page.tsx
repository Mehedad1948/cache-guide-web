import RevalidateButton from '@/components/utils/RevaldiateButton';
import RevalidateEvery from '../stream-with-suspense/sections/RevalidateEvry';
import Static from '../stream-with-suspense/sections/static';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button,
} from '@chakra-ui/react'
import NoteBox from '@/components/ui/NoteBox';
import Link from 'next/link';

export default async function page() {
    return (
        <div className='flex flex-col gap-6'>
            <NoteBox>
                Use the buttons below to trigger <b className='ml-1'>revalidateTag</b> or
                <b className='ml-1'>revalidatePath</b> and see how each section updates differently in real
                time.
            </NoteBox>
            
            <NoteBox>
                <div className='flex items-center gap-2'>
                    <p>
                        Revalidate full route:
                    </p>
                    <RevalidateButton path='/revalidate-on-demand' colorScheme='blue' size={'sm'}>
                        Revalidate Path
                    </RevalidateButton>
                </div>
            </NoteBox>

            <NoteBox>
                <p>
                    <strong>Key Takeaway: </strong>
                    Revalidating a  fetch request no matter how
                    will reset cache related to that endpoint on server . So in all other pages, fetches with
                    <b> Similar URL </b>
                    <span className='underline underline-offset-1'>and</span> <b> Similar Cache Policy </b>
                    will get revalidated.
                </p>
            </NoteBox>

            <NoteBox colorScheme='orange'>
                <p className='mb-2'>
                    This is a static section which also is being used in another page
                    <Link href={'/static'} className='mx-1 hover:underline font-semibold'>
                       Static Page
                    </Link>
                    to demonstrate the effect of revalidation of fetch request globally through the app.
                </p>
                <Static cache='force-cache' identifier='common-static-section' />
            </NoteBox>

            <NoteBox colorScheme='orange'>
                <p className='mb-2'>
                    This is a static section which also is being used in another page
                    <Link href={'/static'} className='mx-1 hover:underline font-semibold'>
                       Static Page
                    </Link>
                    to demonstrate the effect of revalidation of fetch request globally through the app.
                </p>
                <Static cache='default' identifier='common-default-section' />
            </NoteBox>

            <Static fetchTags={['tag-4']} />

            <RevalidateEvery tags={['tag-6']} revalidate={5} />

            <RevalidateEvery revalidate={10} tags={['tag-1']}>
                <RevalidateButton
                    tag='tag-1'
                    colorScheme='blue'
                    className='w-fit'
                >
                    Revalidate This Section with tag <strong>"tag-1"</strong>
                </RevalidateButton>
            </RevalidateEvery>

        </div>
    );
}