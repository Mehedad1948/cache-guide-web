import ClientShwTime from '../../../components/ClientShwoTime';
const renderTime = Date.now();

export default async function page() {
    let time
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/time/static`, {
            cache: 'force-cache',
            next: {
                tags: ['tag-7']
            }
        });

        time = await res.json();
    } catch (error) {
        console.log('🚀🚀', error);
    }

    return (
        <ClientShwTime dataTime={time?.timestamp} renderTime={renderTime} />
    );
}