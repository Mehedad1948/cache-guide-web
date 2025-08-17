import ClientShwTime from '@/components/ClientShwoTime';

export default async function RevalidateEvery({ revalidate }: { revalidate: number }) {
    let time
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/time`, {
            next: {
                revalidate: revalidate * 60
            }
        });

        time = await res.json();
    } catch (error) {
        console.log('🚀🚀', error);
    }

    return (
        <div className='rounded-3xl border p-6 bg-white'>
            <h2>This section is being revalidated every {revalidate} minutes</h2>
            <ClientShwTime dataTime={time?.timestamp} renderTime={new Date().getTime()} />
        </div>
    );
}