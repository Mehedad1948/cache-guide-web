import PageContainer from '@/components/ui/PageContainer';
import Static from '../../stream-with-suspense/sections/static';
import { Suspense } from 'react';
import { HStack, Spinner } from '@chakra-ui/react';


export default function page() {
    return (
        <PageContainer>
            <Static cache='force-cache' identifier='static-rendered' />
            <Suspense
                fallback={
                    <HStack className='border rounded-3xl' h={32} w={'full'} justifyContent={'center'} alignItems={'center'}>
                        <Spinner colorScheme='blue' />
                    </HStack>
                }
            >
                <Static delay={5} identifier='dynamic' cache='no-store' />
            </Suspense>
        </PageContainer>
    );
}