import { VStack } from '@chakra-ui/react';
import Static from '../stream-with-suspense/sections/static';
import NoteBox from '@/components/ui/NoteBox';
import Link from 'next/link';
const renderTime = Date.now();

export default async function page() {

    return (
        <VStack gap={6} alignItems={'stretch'}>

            <Static cache='force-cache' identifier='static-page' />

            <Static identifier='static-page' />

            <NoteBox colorScheme='orange'>
                <p className='mb-2'>
                    This is a static section which also is being used in another page
                    <Link href={'/revalidate-on-demand'} className='mx-1 hover:underline font-semibold'>
                        Revalidate on demand
                    </Link>
                    to demonstrate the effect of revalidation of fetch request globally through the app.
                </p>
                <Static cache='force-cache' identifier='common-static-section' />
            </NoteBox>

            <NoteBox colorScheme='orange'>
                <p className='mb-2'>
                    This is a static section which also is being used in another page
                    <Link href={'/revalidate-on-demand'} className='mx-1 hover:underline font-semibold'>
                        Static Page
                    </Link>
                    to demonstrate the effect of revalidation of fetch request globally through the app.
                </p>
                <Static cache='default' identifier='common-default-section' />
            </NoteBox>
        </VStack>
    );
}