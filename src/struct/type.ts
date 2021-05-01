export class Type {
    public name: string;
    public type: string;
    public des: string;
    public childsType: Array<Type>;

    constructor(name: string, type: string, des: string, childsType?: Array<Type>) {
        this.name = name;
        this.type = type;
        this.des = des;
        this.childsType = childsType;
    }
}