"use client"

import { revalidatePathAction } from '@/app/actions/revalidatePathAction'
import { Button, type ButtonProps } from "../ui/button"
import { revalidateTagAction } from '@/app/actions/revalidateTagAction'

type RevalidateButtonProps = ButtonProps & {
    tag?: string
    path?: string
}

export default function RevalidateButton({
    tag,
    path,
    ...props
}: RevalidateButtonProps) {
    return (
        <Button
            {...props}
            onClick={(e) => {
                props.onClick?.(e)
                if (path) {
                    revalidatePathAction(path)
                } else if (tag) {
                    console.log(tag);
                    revalidateTagAction(tag)
                }
            }}
        />
    )
}
