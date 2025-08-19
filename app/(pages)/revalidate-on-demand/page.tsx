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
                <p className='mb-2'>
                    This section won't revalidated by revalidating another fetch in this react tree, but revalidating full path with <b> revalidatePath() </b> will reset its cache.
                </p>
                <Static fetchTags={['tag-3']} cache='force-cache' />
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