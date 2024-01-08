import React from 'react'

type Props = {
    color?: string;
    height?: number;
    width?: number;
}

export default function PreviousIcon(props: Props) {
    const { color, height, width } = props
    return (
        <svg
            width={width || 11}
            height={height || 19}
            viewBox={`0 0 11 19`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M-0.00130177 9.15606C-0.00130177 8.81378 0.131894 8.47149 0.398288 8.25757L8.56769 0.385068C9.10047 -0.128356 9.94405 -0.128356 10.4324 0.385068C10.9652 0.898492 10.9652 1.71141 10.4324 2.18205L3.23982 9.11327L10.4324 16.0873C10.9652 16.6007 10.9652 17.4136 10.4324 17.8843C9.89965 18.3977 9.05607 18.3977 8.56769 17.8843L0.398288 10.0546C0.176293 9.79784 -0.00130177 9.45555 -0.00130177 9.15606Z"
                fill={color || "#06997E"} />
        </svg>
    )
}

