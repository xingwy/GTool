import { Export } from "./protocols/base/protocols";
import * as DBModel from "./models/dbModel";
import { Type } from "./struct/type";
import { createFromType } from "./models/export";

const start = async () => {
    try {
        let a = Object.getOwnPropertyNames(DBModel)
        Object.values(DBModel).forEach((v: Type) => {
            let str = createFromType(v);
            console.log(str)
        })
    } catch (error) {
        
    }
}
start();