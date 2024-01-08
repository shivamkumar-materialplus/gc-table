import React from 'react'

type Props = {
    color?: string;
    height?: number;
    width?: number;
}

export default function ThreeDotsIcon(props: Props) {
    const { color, height, width } = props
    return (
        <svg
            width={width || "21"}
            height={height || "5"}
            viewBox="0 0 21 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width={height || "5"} height={height || "5"} rx="2.5" fill={color || "#313434"} />
            <rect x="8" width={height || "5"} height={height || "5"} rx="2.5" fill={color || "#313434"} />
            <rect x="16" width={height || "5"} height={height || "5"} rx="2.5" fill={color || "#313434"} />
        </svg>

    )
}
