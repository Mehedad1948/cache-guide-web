import ClientShwTime from '@/components/ClientShwoTime';

export default async function Static() {
    let time
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/time`, {
        });

        time = await res.json();
    } catch (error) {
        console.log('🚀🚀', error);
    }

    return (
        <div className='rounded-3xl border p-6 bg-white'>
            <h2>This section has a fetch with no validate time set</h2>
            <ClientShwTime dataTime={time?.timestamp} />
        </div>
    );
}