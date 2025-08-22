import NoteBox from '@/components/ui/NoteBox';
import Static from '../../stream-with-suspense/sections/static';
import RevalidateEvery from '../../stream-with-suspense/sections/RevalidateEvry';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

export const revalidate = 60 * 4;

export async function generateStaticParams() {
    return [];
}

export default function Page({ params }: { params: { id: string } }) {
    return (
        <div className='flex flex-col gap-6'>
            <NoteBox>
                This page with id "{params.id}" is cached and will revalidated every 10 minutes.
                <br />
                Using <b>generateStaticParams()</b> and <b>export const revalidate = 60 * 4;</b>
            </NoteBox>
            <NoteBox >
                <div className='flex items-center gap-4 flex-wrap'>
                    <p className=''>Check out a fresh id page</p>
                    <Link href={`/incremental-static-regeneration/${crypto.randomUUID().split('-')[0]}`}>
                        <Button size={'sm'} colorScheme='blue'>
                            Go to New Page id
                        </Button>
                    </Link>
                </div>
            </NoteBox>
            <NoteBox>
                <p className='mb-2'>
                    This fetch is cached permanently and won't be fetched again even after passing the revalidate
                    time of route or changing id param of page URL because it's been cached by <b>force-cache</b> policy.
                </p>
                <Static cache='force-cache' identifier='force-cache-in-incremental' />
            </NoteBox>
            <NoteBox>
                <p className='mb-2'>
                    This fetch is cached and it will be fetched again only after passing the revalidation time of route (4 min).
                    <br />
                    it <b>won't be revalidated</b> by changing route id.
                </p>
                <Static identifier='default-in-incremental' />
            </NoteBox>
            <NoteBox>
                <p className='mb-2'>
                    This fetch is cached and it will be fetched again:
                    <ul className='list-disc pl-6 flex flex-col gap-1'>
                        <li>
                            By passing the revalidation time of the route (4 min).
                        </li>
                        <li>
                            By changing param id, because Nextjs caches requests
                            based on their URL address and tags (if provided).
                        </li>
                    </ul>
                </p>
                <Static params={params.id}  />
            </NoteBox>
            <NoteBox>
                <p className='mb-2'>
                    This fetch is cached and it will be fetched again:
                    <ul className='list-disc pl-6 flex flex-col gap-1'>
                        <li>
                            By passing the revalidation time of the route (4 min).
                        </li>
                        <li>
                            By changing param id, because Nextjs caches requests
                            based on their URL address and tags (if provided).
                        </li>
                        <li>
                            By passing the revalidation time of its own fetch (2 min).
                        </li>
                    </ul>
                </p>
                <RevalidateEvery revalidate={2} params={params.id} />
            </NoteBox>

        </div >
    );
}
