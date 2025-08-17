import { ReactNode } from 'react';

export default function layout({ children, parallel }: { children: ReactNode, parallel: ReactNode }) {
    return (
        <div className='flex flex-col gap-6'>
            {children}
            <div className='p-4 bg-cyan-50 border border-cyan-500 rounded-2xl'>
                <p className='text-cyan-700 mb-4 font-semibold'>Parallel Route</p>
                {parallel}
            </div>
        </div>
    );
}