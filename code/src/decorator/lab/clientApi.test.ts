import { Api } from './api';
import { CustomerApi } from './customerApi';
import { CacheCustomerApi } from './decoratorApi/cacheCustomerApi';
import { Customer } from './customer';
import { EncryptedCustomerApi } from './decoratorApi/encryptedCustomerApi';

describe('[Decorator - lab] Build Response', () => {
  it('should build response', () => {
    // given
    const api = new CustomerApi();

    // when
    const customer: Customer = api.get();

    // then
    expect(customer.name).toBe('John');
  });

  it('should return customer object from cache', () => {
    // given
    const api = new CustomerApi();
``
    // when
    const cachedApi: Api = new CacheCustomerApi(api);
    const customer: Customer = cachedApi.get();

    // then
    expect(customer.isCached).toBe(true);
  })

  it('should return customer ecrypted object', () => {
    const api = new CustomerApi();
    const encryptedApi = new EncryptedCustomerApi(api);
    const customer: Customer = encryptedApi.get();

    expect(customer.name).toBe('encrypted - John');
    expect(customer.lastName).toBe('encrypted - Doe');
    expect(customer.isCached).toBe(false);
  });

  // it('should return customer ecrypted object form cache', () => {
  //   const api = new CustomerApi();
  //   const encryptedApi = new CacheCustomerApi(api);
  //   const customer: Customer = EncryptedCustomerApi(cachedApi);

  //   expect(customer.name).toBe('encrypted - John');
  //   expect(customer.lastName).toBe('encrypted - Doe');
  //   expect(customer.isCached).toBe(false);
  // });
});
