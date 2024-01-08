import React from 'react'

type Props = {
    color?: string;
    height?: number;
    width?: number;
}

export default function CheveronRightIcon(props: Props) {
    const { color, height, width } = props
    return (
        <svg
            width={width || 16}
            height={height || 16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7063 7.29365C13.0969 7.68428 13.0969 8.31865 12.7063 8.70928L6.7063 14.7093C6.31567 15.0999 5.6813 15.0999 5.29067 14.7093C4.90005 14.3187 4.90005 13.6843 5.29067 13.2937L10.5844 7.9999L5.2938 2.70615C4.90317 2.31553 4.90317 1.68115 5.2938 1.29053C5.68442 0.899902 6.3188 0.899902 6.70942 1.29053L12.7094 7.29053L12.7063 7.29365Z"
                fill={color || "#313434"} />
        </svg>
    )
}
