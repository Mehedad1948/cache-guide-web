import PageContainer from '@/components/ui/PageContainer';
import Static from '../stream-with-suspense/sections/static';
import { headers } from 'next/headers';
import NoteBox from '@/components/ui/NoteBox';

export default async function page() {
    const userHeaders = headers()

    return (
        <PageContainer>
            <NoteBox>
                This section is using Headers request so it will be revalidated per request. <br />
                <b>

                Your browser agent: <br /> {userHeaders.get('user-agent')}
                </b>
            </NoteBox>
            <Static identifier='ssr-page'  />
            <Static cache='force-cache' identifier='ssr-page' />
        </PageContainer>
    );
}