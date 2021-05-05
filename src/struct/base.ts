import { Type } from "./type";
import { Protocol } from "./protocol"

// 基础number
export const number = function(name: string, des: string = ""): Type {
    return new Type(name, "number", des);
}

// 基础boolean
export const boolean = function(name: string, des: string = ""): Type {
    return new Type(name, "boolean", des);
}

// 基础string
export const string = function(name: string, des: string = ""): Type {
    return new Type(name, "string", des);
}

// 数组
export const array = function(type: Type): Function {
    return (name: string, des: string = ""): Type => {
        return new Type(name, "array", des, [type]);  
    }
}

// 组合
export const tuple = function(name: string, array: Array<Type>, des: string = "", dbKey: string = ""): Type {
    return new Type(name, "tuple", des, array, dbKey);
}

// 协议
export const register = function(name: string, code: number| string, type: Array<Type>, des: string = "") {
    return new Protocol(name, code, type, des);
}
