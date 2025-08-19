'use client'

import Link from 'next/link';


export default function Sidebar() {
    return (
        <div className='flex flex-col gap-4 sticky top-12'>
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
            <Link href={`/incremental-static-regeneration/9d29baad`}>
                Incremental Static Regeneration (ISR)
            </Link>
            <Link href="/revalidate-on-demand">
                Revalidate on Demand
            </Link>
        </div>
    );
}