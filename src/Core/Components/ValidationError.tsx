import React, { ReactElement } from 'react'

interface Props {
    Message: string | undefined;
}

export default function ValidationErrorMessage({ Message }: Props): ReactElement | null {
    const isInvalid = Message != '' || Message != undefined || Message != null

    return (
        <span>
            {Message}
        </span>
    )
}
