import React, { ReactElement } from 'react'

interface Props {
    Message: string | undefined;
}

export default function ValidationErrorMessage({ Message }: Props): ReactElement | null {
    const isInvalid = Message != '' || Message != undefined
    if (!isInvalid)
        return null;
    return (
        <div>
            {Message}
        </div>
    )
}
