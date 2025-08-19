import RevalidateButton from '@/components/utils/RevaldiateButton';
import RevalidateEvery from '../stream-with-suspense/sections/RevalidateEvry';
import Static from '../stream-with-suspense/sections/static';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
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
            <Static />

            <RevalidateEvery revalidate={5} />

            <RevalidateEvery revalidate={10} tags={['tag-1']} >
                <RevalidateButton tag='tag-1' className='w-fit'>
                    Revalidate This Section with tag <strong>"tag-1"</strong>
                </RevalidateButton>
            </RevalidateEvery>

        </div>
    );
}