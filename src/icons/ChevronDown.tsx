import React from 'react'

type Props = {
    color?: string;
    height?: number;
    width?: number;
}

export default function CheveronDownIcon(props: Props) {
    const { color, height, width } = props
    return (
        <svg
            width={width || 16}
            height={height || 16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8.70623 12.7061C8.3156 13.0967 7.68123 13.0967 7.2906 12.7061L1.2906 6.70605C0.899975 6.31543 0.899975 5.68105 1.2906 5.29043C1.68122 4.8998 2.3156 4.8998 2.70623 5.29043L7.99998 10.5842L13.2937 5.29355C13.6844 4.90293 14.3187 4.90293 14.7094 5.29355C15.1 5.68418 15.1 6.31855 14.7094 6.70918L8.70935 12.7092L8.70623 12.7061Z"
                fill={color || "#313434"} />
        </svg>
    )
}
