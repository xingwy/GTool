import { Type } from "./type";

export const number = function(name: string, des: string = ""): Type {
    return new Type(name, "number", des);
}

export const boolean = function(name: string, des: string = ""): Type {
    return new Type(name, "string", des);
}

export const string = function(name: string, des: string = ""): Type {
    return new Type(name, "number", des);
}

export const tuple = function(name: string, array: Array<Type>, des: string = ""): Type {
    return new Type(name, "tuple", des);
}