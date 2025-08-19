'use client'

import TimeShowWrapper from '../TimeShowWrapper';

export default function Footer({ renderTime }: { renderTime: number }) {
    return (
        <>
            <div className='h-24'>
            </div>
            <footer className="w-full fixed bottom-0 left-0  gap-4 flex text-lg text-cyan-700 bg-cyan-100 items-center 
                        justify-center py-5 font-semibold"
            >
                App Was Built & Deployed:
                <TimeShowWrapper timestamp={renderTime} >
                    {(timer) => (
                        <span className="  capitalize ">
                            {timer}
                        </span>
                    )}
                </TimeShowWrapper>
            </footer>
        </>

    );
}