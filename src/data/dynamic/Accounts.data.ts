import DateUtil from "../../utils/date.utils";

export class AccountsData {
    private readonly timestamp: string = DateUtil.epochTime().toString();

    constructor(
        public accountName?: string,
        public accountType?: string,
        public phone?: string,
        public website?: string
    ) {
        this.accountName = accountName || `AutoAccount_${this.timestamp}`;
        this.accountType = accountType || 'Customer';
        this.phone = phone || '123-456-7890';
        this.website = website || `www.autoaccount${this.timestamp}.com`;
    }
}