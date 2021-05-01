import { Console } from "node:console";
import { Type } from "./type";

// 基础number
export const number = function(name: string, des: string = ""): Type {
    return new Type(name, "number", des);
}

// 基础boolean
export const boolean = function(name: string, des: string = ""): Type {
    return new Type(name, "string", des);
}

// 基础string
export const string = function(name: string, des: string = ""): Type {
    return new Type(name, "number", des);
}

// 数组
export const array = function(type: Type): Function {
    return (name: string, des: string = ""): Type => {
        return new Type(name, "number", des, [type]);  
    }
}

// 组合
export const tuple = function(name: string, array: Array<Type>, des: string = ""): Type {
    return new Type(name, "tuple", des, array);
}