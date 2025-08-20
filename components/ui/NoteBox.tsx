import { Alert, AlertDescription, AlertProps, ComponentWithAs } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NoteBoxProps extends AlertProps {
    children: ReactNode;
}

export default function NoteBox({ children, ...props }: NoteBoxProps) {
    return (
        <Alert {...props} className=' block  text-cyan-700 rounded-xl '>
            <AlertDescription className='w-full'>
                {children}
            </AlertDescription>
        </Alert>
    );
}