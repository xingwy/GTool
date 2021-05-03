import { Type } from "./type";

export class Protocol {
    public name: string;
    public type: Array<Type>;
    public code: number;
    public des: string;
    constructor(name: string, code: number, type: Array<Type>, des: string = "") {
        this.name = name;
        this.code = code;
        this.type = type;
        this.des = des;
    }
}
