import React from 'react'

type Props = {
    color?: string;
    height?: number;
    width?: number;
}

export default function EditIcon(props: Props) {
    const { color, height, width } = props
    return (
        <svg
            width={width || 12}
            height={height || 12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 9.64033V11.6667C0 11.8534 0.146646 12 0.333287 12H2.35967C2.44633 12 2.53298 11.9667 2.59297 11.9L9.87196 4.62769L7.37231 2.12804L0.0999862 9.40036C0.0333288 9.46702 0 9.54701 0 9.64033ZM11.805 2.69463C12.065 2.43466 12.065 2.01472 11.805 1.75476L10.2452 0.194973C9.98528 -0.064991 9.56534 -0.064991 9.30537 0.194973L8.08554 1.4148L10.5852 3.91446L11.805 2.69463Z"
                fill={color || "#313434"}
            />
        </svg>


    )
}
