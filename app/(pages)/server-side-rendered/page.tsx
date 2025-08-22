import PageContainer from '@/components/ui/PageContainer';
import Static from '../stream-with-suspense/sections/static';
import { headers } from 'next/headers';
import NoteBox from '@/components/ui/NoteBox';
import Link from 'next/link';

export default async function page() {
    const userHeaders = await headers()

    return (
        <PageContainer>
            <NoteBox variant={'left-accent'}>
                This section is using Headers of user request so Nextjs will turn this page to a SSR page <br />
                <b>
                    Your browser agent: <br /> {userHeaders.get('user-agent')}
                </b>
            </NoteBox>
            <Static identifier='ssr-page' />
            <Static cache='force-cache' identifier='ssr-page' />
            <NoteBox colorScheme='orange'>
                <p className='mb-2'>
                    This is a static section which also is being used in another page
                    <Link href={'/revalidate-on-demand'} className='mx-1 hover:underline font-semibold'>
                        Revalidate on demand
                    </Link>
                    to demonstrate the effect of revalidation of fetch request globally through the app.
                </p>
                <Static cache='default' identifier='common-default-section' />
            </NoteBox>
        </PageContainer>
    );
}