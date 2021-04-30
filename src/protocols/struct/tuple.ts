import { number, boolean, string } from "./base";

export const tuple = function(name: string, array: Array<any>, des: string = "") {
    
}


let a = tuple("CreateUser", [
    string("account"),
    string("password"),
    string("name"),
    number("sex"),
])