import { Interface } from "readline";

export interface IDriverInformationService {
    Save(request: any): void;
}

export class DriverInformationService implements IDriverInformationService {
    constructor() {

    }
    Save(request: any): void {
        let { name } = request;
    }
}