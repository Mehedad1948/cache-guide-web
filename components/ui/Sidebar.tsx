'use client'

import Link from 'next/link';


export default function Sidebar() {
    return (
        <div className='flex flex-col gap-4'>
            <Link href="/static">
                Static Page
            </Link>
            <Link href="/server-side-rendered">
                Server Side Rendered (SSR)
            </Link>
            <Link href="/stream-with-suspense">
                Stream with Suspense
            </Link>
            <Link href="/stream-with-parallel-route">
                Stream with Parallel Route
            </Link>
            <Link href="/nested-server-components">
                Nested Server Components
            </Link>
        </div>
    );
}