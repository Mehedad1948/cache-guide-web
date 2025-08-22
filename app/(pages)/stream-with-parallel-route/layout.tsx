import { ReactNode } from 'react';
import Static from '../stream-with-suspense/sections/static';
import NoteBox from '@/components/ui/NoteBox';

export default function layout({ children, parallel }: { children: ReactNode, parallel: ReactNode }) {
    return (
        <div className='flex flex-col gap-6'>
            <Static />
            {children}
            <NoteBox >
                <p className=' mb-4 font-semibold'>Parallel Route</p>
                {parallel}
            </NoteBox>
        </div>
    );
}