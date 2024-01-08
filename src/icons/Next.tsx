import React from 'react'

type Props = {
    color?: string;
    height?: number;
    width?: number;
}

export default function NextIcon(props: Props) {
    const { color, height, width } = props
    return (
        <svg
            width={width || 11}
            height={height || 19}
            viewBox={`0 0 11 19`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8333 9.11347C10.8333 9.45576 10.7001 9.79804 10.4337 10.012L2.26434 17.8845C1.73156 18.3979 0.887978 18.3979 0.39959 17.8845C-0.133197 17.371 -0.133197 16.5581 0.39959 16.0875L7.59221 9.15626L0.39959 2.18225C-0.133197 1.66883 -0.133197 0.855906 0.39959 0.385267C0.932377 -0.128157 1.77596 -0.128157 2.26434 0.385267L10.4337 8.21498C10.6557 8.47169 10.8333 8.81398 10.8333 9.11347Z"
                fill={color || "#06997E"} />
        </svg>
    )
}

