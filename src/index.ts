import { Export } from "./protocols/base/protocols";
import * as DBModel from "./models/dbModel";

const start = async () => {
    try {
        for (let key in DBModel) {
            console.log(key)
        }
    } catch (error) {
        
    }
}
start();