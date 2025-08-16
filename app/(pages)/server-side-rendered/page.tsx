import ClientShwTime from '@/components/ClientShwoTime';
import { differenceInSeconds, format } from 'date-fns';

export default async function page() {
    let time
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/time`, {
            next: {
                revalidate: 0
            }
        });

        time = await res.json();
    } catch (error) {
        console.log('🚀🚀', error);
    }

    return (
        <ClientShwTime dataTime={time?.timestamp} renderTime={new Date().getTime()} />
    );
}