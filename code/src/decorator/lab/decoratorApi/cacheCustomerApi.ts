import { Api } from "../api";
import { Customer } from "../customer";

export class CacheCustomerApi implements Api {
    private customerApi: Api;
    private cachedCustomer: Customer | undefined;

    constructor(customerApi: Api) {
        this.customerApi = customerApi;
    }

    get(): Customer {
        if (!this.cachedCustomer) {
            this.cachedCustomer = this.customerApi.get();
            this.cachedCustomer.isCached = true;
        }
        return this.cachedCustomer;
    }

} 