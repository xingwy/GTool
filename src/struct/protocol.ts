import { Type } from "./type";

export class Protocol {
    public name: string;
    public type: Array<Type>;
    public code: number;
    constructor(name: string, code: number, type: Array<Type>) {
        this.name = name;
        this.code = code;
        this.type = type;
    }
}
