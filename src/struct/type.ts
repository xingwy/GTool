export class Type {
    public name: string;
    public type: string;
    public des: string;
    public childsType: Array<Type>;
    public dbKey: string;

    constructor(name: string, type: string, des: string, childsType?: Array<Type>, dbKey?: string) {
        this.name = name;
        this.type = type;
        this.des = des;
        this.childsType = childsType;
        this.dbKey = dbKey;
    }
}