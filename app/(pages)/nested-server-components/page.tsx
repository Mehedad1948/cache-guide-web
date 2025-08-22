import NoteBox from '@/components/ui/NoteBox';
import RevalidateEvery from '../stream-with-suspense/sections/RevalidateEvry';
import Static from '../stream-with-suspense/sections/static';
import PageContainer from '@/components/ui/PageContainer';

export default async function page() {
    return (
        <PageContainer>
            <NoteBox variant={'left-accent'}>
                A Permanent Cached Section Wrapped in a Revalidation Component
            </NoteBox>
            <RevalidateEvery revalidate={1}>
                <Static identifier='nested-default-cache' />
                <Static identifier='nested-force-cache' cache='force-cache' />
            </RevalidateEvery>
        </PageContainer>
    );
}