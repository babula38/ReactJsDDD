export abstract class Quote {
    protected ZipCode!: string;
    protected QuoteType: QuoteType;
    protected constructor(quoteType: QuoteType) {
        this.QuoteType = quoteType;
    }
    public static getAutoQuote(): AutoQuote {
        return new AutoQuote();
    }

}
export enum QuoteType {
    Auto,
    Property,
    Combined,
}
export class AutoQuote extends Quote {
    constructor() {
        super(QuoteType.Auto);
    }
}
export class HomeQuote extends Quote {
    constructor() {
        super(QuoteType.Property);
    }
}