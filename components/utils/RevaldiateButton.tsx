"use client";

import { revalidatePathAction } from "@/app/actions/revalidatePathAction";
import { revalidateTagAction } from "@/app/actions/revalidateTagAction";
import { Button, type ButtonProps } from "@chakra-ui/react";

type RevalidateButtonProps = ButtonProps & {
    tag?: string;
    path?: string;
};

export default function RevalidateButton({
    tag,
    path,
    onClick,
    ...props
}: RevalidateButtonProps) {
    return (
        <Button
            {...props}
            onClick={(e) => {
                // Call user-supplied onClick if present
                if (onClick) {
                    onClick(e);
                }

                if (path) {
                    revalidatePathAction(path);
                } else if (tag) {
                    revalidateTagAction(tag);
                }
            }}
        />
    );
}
