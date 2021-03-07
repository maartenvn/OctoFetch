export interface CurrentPrice {
    time: Time;
    bpi: Bpi;
}

export interface Bpi {
    USD: Currency;
    GBP: Currency;
    EUR: Currency;
}

export interface Currency {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}

export interface Time {
    updated: string;
    updatedISO: Date;
    updateduk: string;
}
