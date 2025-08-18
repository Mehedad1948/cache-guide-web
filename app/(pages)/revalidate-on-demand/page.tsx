import RevalidateButton from '@/components/utils/RevaldiateButton';
import RevalidateEvery from '../stream-with-suspense/sections/RevalidateEvry';
import Static from '../stream-with-suspense/sections/static';

export default async function page() {
    return (
        <div className='flex flex-col gap-6'>
            <Static />

            <RevalidateEvery revalidate={5} />

            <RevalidateEvery revalidate={10} tags={['tag-1']} >
                <RevalidateButton tag='tag-1' className='w-fit'>
                    Revalidate This Section with tag <strong>tag-1</strong>
                </RevalidateButton>
            </RevalidateEvery>

        </div>
    );
}