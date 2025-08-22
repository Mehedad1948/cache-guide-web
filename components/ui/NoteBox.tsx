import { Alert, AlertDescription, AlertProps, ComponentWithAs } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NoteBoxProps extends AlertProps {
    children: ReactNode;
}

export default function NoteBox({ children, ...props }: NoteBoxProps) {
    return (
        <Alert {...props} border={props.variant === 'left-accent' ? undefined : '1px'}
            borderColor={`${props.colorScheme || 'blue'}.200`}
            bg={`${props.colorScheme || 'blue'}.50`}
            className=' block rounded-xl '
            fontWeight={'medium'}
            variant={props.variant}
        >
            <AlertDescription className='w-full'>
                {children}
            </AlertDescription>
        </Alert>
    );
}