'use client'

import TimeShowWrapper from '../TimeShowWrapper';

export default function Footer({ renderTime }: { renderTime: number }) {
    return (
        <footer className="w-full gap-4 flex text-lg text-cyan-700 bg-cyan-100 items-center 
                        justify-center py-5 font-semibold"
        >
            App Was Deployed:
            <TimeShowWrapper timestamp={renderTime} >
                {(timer) => (
                    <span className="  capitalize ">
                        {timer}
                    </span>
                )}
            </TimeShowWrapper>
        </footer>
    );
}