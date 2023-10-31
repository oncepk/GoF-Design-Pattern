import { Api } from "../api";
import { Customer } from "../customer";

export  class EncryptedCustomerApi implements Api {
    private api: Api;

    constructor(api: Api) {
        this.api = api;
    }
    get(): Customer {
        const customer = this.api.get();
        customer.name = `encrypted - ${customer.name}`;
        customer.lastName = `encrypted - ${customer.lastName}`;
        return customer;
    }
}