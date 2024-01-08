import React from 'react'

type Props = {
    color?: string;
    height?: number;
    width?: number;
}

export default function SortArrowUpIcon(props: Props) {
    const { color, height, width } = props
    return (
        <svg width={width || 15}
            height={height || 13}
            viewBox={`0 0 15 13`}
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.50502 12.495C5.77839 12.7683 6.22161 12.7683 6.49497 12.495L10.9497 8.0402C11.2231 7.76684 11.2231 7.32362 10.9497 7.05025C10.6764 6.77689 10.2332 6.77689 9.9598 7.05025L6 11.0101L2.0402 7.05025C1.76683 6.77689 1.32362 6.77689 1.05025 7.05025C0.776885 7.32362 0.776885 7.76683 1.05025 8.0402L5.50502 12.495ZM5.3 -3.05979e-08L5.3 12L6.7 12L6.7 3.05979e-08L5.3 -3.05979e-08Z"
                transform="rotate(180 5.5 6)"
                fill={color || "#313434"} />
        </svg >
    )
}
