import ClientShwTime from '../../../components/ClientShwoTime';

export default async function page() {
    let time
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/time`, {
            // next: {
            //     revalidate: 0
            // }
        });

        time = await res.json();
    } catch (error) {
        console.log('🚀🚀', error);
    }

    return (
        <div className='h-full'>
            <ClientShwTime dataTime={time?.timestamp} renderTime={new Date().getTime()} />
        </div>
    );
}