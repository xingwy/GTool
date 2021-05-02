import * as DBModel from "./dbModel";
import { Type } from "../struct/type";


const createFromType = (type: Type): string => {
    // 组成fields
    let fieldStr = "";
    let typeStr = "";
    fieldStr += `const enum ${type.name}Fields {\n`
    typeStr += `type ${type.name} = [`;
    for (let index = 0; index < type.childsType.length; index++) {
        let child = type.childsType[index];
        fieldStr +=`    ${child.name} = ${index},`;
        if (child.des) {
            fieldStr += `  // ${child.des}`;
        }
        fieldStr += `\n`;
        if (child.type == "array") {
            let nextChild = child.childsType[0];
            typeStr += `Array<${nextChild.name}>,`
        } else {
            typeStr += `${child.type},`;
        }
    }
    fieldStr += `}\n`;
    typeStr += `]\n\n`;
    return fieldStr + typeStr;
}

export const run = async () => {
    try {
        // 导出数据库结构模型
        let content = "";
        Object.values(DBModel).forEach((v: Type) => {
            content += createFromType(v);
        })
    } catch (e) {
        console.error(`导出数据结构模型出错，error:${e.message}, stack:${e.stack}`);
    }
}