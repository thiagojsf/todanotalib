export class Storage {

    static getObjectFromLocalStorage(key: string, protoType: any): any {
        let json = localStorage.getItem(key);
        let obj = Object.create(protoType);
        return Object.assign(obj, JSON.parse(json));
    }

}
