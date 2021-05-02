import * as DBModel from "./dbModel";
import * as path from "path";
import { Type } from "../struct/type";
import { write } from "../util/write";


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
            typeStr += `Array<${nextChild.name}>, `
        } else {
            typeStr += `${child.type}, `;
        }
    }

    let offset = typeStr.lastIndexOf(",");
    if (offset != -1) {
        typeStr = typeStr.substring(0, typeStr.length-2);
    }
    fieldStr += `}\n`;
    typeStr += `];\n\n`;
    return fieldStr + typeStr;
}

export const run = async () => {
    try {
        // 导出数据库结构模型
        let content = "";
        Object.values(DBModel).forEach((v: Type) => {
            content += createFromType(v);
        })
        let dir = path.join(__filename, "../../../export/DBdefine.d.ts");
        await write(dir, content);
        console.info(`已经导出文件：${dir}`);
    } catch (e) {
        console.error(`导出数据结构模型出错，error:${e.message}, stack:${e.stack}`);
    }
}