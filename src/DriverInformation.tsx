import React, { Component, MouseEvent } from 'react'
import { DriverInformationService } from './ApplicationServices/DriverInformationService';

import ValidationErrorMessage from './Core/Components/ValidationError';
import TextBox from './Core/Components/TextBox';

interface State {
    Name: string;
    Error: ValidationError;
}

export default class DriverInformation extends Component<{}, State> {
    state: State = {
        Name: '',
        Error: ValidationError.Init(),
    };

    render() {
        return (
            <div>
                <form>
                    <fieldset>Driver information</fieldset>

                    <TextBox error={this.state.Error.NameInValidErrorMessage}
                        onChange={(e: string) => this.setState({ Name: e })}></TextBox>

                    <ValidationErrorMessage Message={this.state.Error.NameInValidErrorMessage} />

                    <button onClick={(e) => {
                        e.preventDefault();
                        const driverInform = new DriverInformationEntity(this.state);
                        if (!driverInform.IsValid()) {
                            this.setState({
                                Error: driverInform.ValidationError
                            });
                        }
                        else {
                            const information = new DriverInformationService();
                            information.Save("");
                        }
                    }}>Submit</button>
                </form>
            </div >
        )
    }
}

class DriverInformationEntity {
    Name: string;

    public get ValidationError(): ValidationError {
        return ValidationError.Init();
    }

    constructor({ Name }: { Name: string }) {
        this.Name = Name;
    }
    public IsValid(): boolean {
        return this.Name != '';
    }
}

class ValidationError {
    static Init(): ValidationError {
        return new ValidationError();
    }
    IsNameValid: boolean = false;
    NameInValidErrorMessage?: string = "";
    constructor() {

    }
}