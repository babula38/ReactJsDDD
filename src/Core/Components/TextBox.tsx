import React, { ReactElement } from 'react'

interface Props {
    error?: string;
    onChange(value: string): void;
}

export default function TextBox({ error, onChange }: Props): ReactElement {
    return (
        <>
            <input type="text" name="name" id="name" onChange={(e) => onChange(e.target.value)} />
        </>
    )
}
