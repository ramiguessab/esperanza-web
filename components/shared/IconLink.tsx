import React, { AnchorHTMLAttributes } from "react"

interface IconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode
}

export default function IconLink({ children, ...props }: IconLinkProps) {
    return (
        <a {...props} className="transition hover:scale-125">
            {children}
        </a>
    )
}
