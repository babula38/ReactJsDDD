import React, { Component } from 'react'
import { DriverInformationService } from './ApplicationServices/DriverInformationService';
import InputText from './InputText';

interface State {
    Name: string;
    Error: ValidationError;
}

export default class DriverInformation extends Component<{}, State> {
    state: State = {
        Name: "",
        Error: ValidationError.Init(),
    };

    render() {
        return (
            <div>
                <InputText error={this.state.Error.NameInValidErrorMessage}
                    onChange={(e) => this.setState({ Name: e })}></InputText>
                <button onClick={() => {
                    const driverInform = new DriverInformationEntity(this.state);
                    if (driverInform.IsValid()) {
                        this.setState({
                            Error: {
                                IsNameValid: true,
                                NameInValidErrorMessage: "f"
                            }
                        });
                    }
                    const information = new DriverInformationService();
                    information.Save("");
                }}>Submit</button>
            </div >
        )
    }
}

class DriverInformationEntity {
    Name: string;
    constructor({ Name }: { Name: string }) {
        this.Name = Name;
    }
    public IsValid(): boolean {
        return this.Name != "" || this.Name != undefined;
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