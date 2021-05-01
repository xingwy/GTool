import { number, boolean, string } from "./base";
import { Type } from "./type";

export const tuple = function(name: string, array: Array<Type>, des: string = ""): Type {
    return new Type();
}
