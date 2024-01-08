import React from 'react'

type Props = {
    color?: string;
    height?: number;
    width?: number;
}

function SearchIcon(props: Props) {
    const { color, height, width } = props
    return (
        <svg
            width={width || 14}
            height={height || 14}
            viewBox={`0 0 ${width || 14} ${height || 14}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8337 10.8482L15 15M12.5294 6.76471C12.5294 9.94847 9.94847 12.5294 6.76471 12.5294C3.58095 12.5294 1 9.94847 1 6.76471C1 3.58095 3.58095 1 6.76471 1C9.94847 1 12.5294 3.58095 12.5294 6.76471Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                stroke={color || "#000000"} />
        </svg>
    )
}

export default SearchIcon
