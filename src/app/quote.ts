export class Quote {
    showQuoteDescription: boolean;
    constructor(public id: number, public quoteTitle: string, public quoteDescription: string){
        this.showQuoteDescription=false;
    }
}