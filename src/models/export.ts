import * as path from "path";
import * as DBModel from "./dbModel";
import { Type } from "../struct/type";
import { write } from "../util/write";


const createFromType = (type: Type): string => {
    // 组成fields
    let desStr = "";
    let fieldStr = "";
    let typeStr = "";
    fieldStr += `    const enum ${type.name}Fields {\n`
    typeStr += `    type ${type.name} = [`;

    if (type.des) {
        desStr += `    // ${type.des}\n`;
    }

    for (let index = 0; index < type.childsType.length; index++) {
        let child = type.childsType[index];
        fieldStr += `        ${child.name} = ${index},`;
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
    fieldStr += `    }\n`;
    typeStr += `];\n\n`;
    
    return desStr + fieldStr + typeStr;
}

const buildType = (models: Array<Type>): string => {
    let content = "";
    Object.values(models).forEach((v: Type) => {
        content += createFromType(v);
    })
    return content;
}

const buildDBKey = (models: Array<Type>): string => {
    let content = "";
    let key = "";
    key += `    const enum MongoDBKey {\n`;
    content += `    interface DBFieldsType {\n`;
    Object.values(models).forEach((v: Type) => {
        if (v.dbKey) {
            key += `        ${v.dbKey} = "${v.dbKey}",\n`;
            content += `        [MongoDBKey.${v.dbKey}]: ${v.name};\n`;
        }
    })
    key += `    }\n\n`;
    content += `    }\n`;
    return key + content;
}

export const run = async () => {
    try {
        // 包装头、尾
        let headStr = "";
        let tailStr = "";
        headStr += `/**\n`;
        headStr += ` * 数据库字段段映射模型文件\n`;
        headStr += ` */\n\n`;
        headStr += `declare namespace DBModels {\n`;
        headStr += `\n`;
        // 导出数据库结构模型
        let content = "";
        content += buildType(DBModel as any);
        content += buildDBKey(DBModel as any);
        tailStr += `}`;
        let dir = path.join(__filename, "../../../export/model.d.ts");
        await write(dir, headStr + content + tailStr);
        console.info(`已经导出文件：${dir}`);
    } catch (e) {
        console.error(`导出数据结构模型出错，error:${e.message}, stack:${e.stack}`);
    }
}