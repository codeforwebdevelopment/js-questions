
// Here the businessList is private member to city module
const businessList = new WeakMap();

// Here City uses the businessList member as it’s in same module
class City {
    constructor() {
        businessList.set(this, ['Pizza Hut', 'Dominos', 'Street Pizza']);
    }

    // public method to access the private ‘businessList’
    getBusinessList() {
        return businessList.get(this);
    }

    // public method to add business to ‘businessList’
    addBusiness(business) {
        businessList.get(this).push(business);
    }
}
const city = new City();
const li = city.getBusinessList();
console.log(li);