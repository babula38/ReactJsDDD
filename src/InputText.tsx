import React, { ReactElement } from 'react'
import ValidationErrorMessage from './ValidationErrorMessage'

interface Props {
    error?: string;
    onChange(value: string): void;
}

export default function InputText({ error, onChange }: Props): ReactElement {
    return (
        <>
            <input type="text" name="name" id="name" onChange={(e) => onChange(e.target.value)} />
            <ValidationErrorMessage Message={error}></ValidationErrorMessage>
        </>
    )
}
