export class Object {

    static isNullOrEmpty(obj: any) : boolean {
        
        if (obj == null)
            return true;

        if (obj == "")
            return true;

        return false;
    }

}
