'use client'

import Link from 'next/link';


export default function Sidebar() {
    return (
        <div className='flex flex-col gap-2'>
            <Link href="/static">
                Static Page
            </Link>
            <Link href="/server-side-rendered">
                Server Side Rendered (SSR)
            </Link>
        </div>
    );
}