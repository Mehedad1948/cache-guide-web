import RevalidateEvery from '../stream-with-suspense/sections/RevalidateEvry';
import Static from '../stream-with-suspense/sections/static';

export default async function page() {
    return (
        <div>
            <h1 className='p-4 bg-cyan-50 flex flex-col gap-5 mb-4 font-semibold text-cyan-700 rounded-xl'>A Permanent Cached Section Wrapped in a Revalidation Component</h1>
            <RevalidateEvery revalidate={1}>
                <Static identifier='nested-default-cache' />
                <Static identifier='nested-force-cache' cache='force-cache' />
            </RevalidateEvery>
        </div>
    );
}