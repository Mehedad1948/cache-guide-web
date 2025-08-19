import NoteBox from '@/components/ui/NoteBox';
import Static from '../../stream-with-suspense/sections/static';
import RevalidateEvery from '../../stream-with-suspense/sections/RevalidateEvry';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

export const revalidate = 60 * 10;

export async function generateStaticParams() {
    return [];
}

export default function Page({ params }: { params: { id: string } }) {
    return (
        <div className='flex flex-col gap-6'>
            <NoteBox>
                This page with id "{params.id}" is cached and revalidated every 10 minutes.
                <br />
                Using <b>generateStaticParams()</b> and <b>export const revalidate = 60 * 10;</b>
            </NoteBox>
            <NoteBox >
                <div className='flex items-center gap-4 flex-wrap'>
                    <p className=''>Checkout a fresh id page</p>
                    <Link href={`/incremental-static-regeneration/${crypto.randomUUID().split('-')[0]}`}>
                        <Button size={'sm'} colorScheme='blue'>
                            Go to New Page
                        </Button>
                    </Link>
                </div>
            </NoteBox>
            <Static />
            <Static params={params.id} />
            <RevalidateEvery revalidate={2} params={params.id} />
            <NoteBox>
                <strong>Note: </strong>
                <span>
                    The reason the fetch is revalidated for each new page is that each one contains a unique URL address.
                    If two fetches are executed with the exact same address,
                    the data will be read from the cache.
                </span>
            </NoteBox>
        </div >
    );
}
