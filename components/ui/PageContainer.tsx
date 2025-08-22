import { StackProps, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends StackProps {
    children: ReactNode;
}

export default function PageContainer({ children, ...props }: Props) {
    return (
        <VStack alignItems="stretch" gap={6} {...props}>
            {children}
        </VStack>
    );
}