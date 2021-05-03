import * as path from "path";
import { Type } from "../struct/type";
import { write } from "../util/write";
import { Protocol } from "../struct/protocol";

import * as GatewayProtocols from "./server/gateway";

const createFromProtocol = (protocol: Protocol): string => {
    let desStr = "";
    let fieldStr = "";
    let typeStr = "";
    fieldStr += `    const enum ${protocol.name}Fields {\n`
    typeStr += `    type ${protocol.name} = [`;

    if (protocol.des) {
        desStr += `    // ${protocol.des}\n`;
    }
    for (let index = 0; index < protocol.type.length; index++) {
        let type = protocol.type[index];
        if (type.des) {
            fieldStr +=  `        ${type.name} = ${index},`;
        }
        fieldStr += `\n`;
        if (type.type == "array") {
            let nextChild = type.childsType[0];
            typeStr += `Array<${nextChild.name}>, `
        } else {
            typeStr += `${type.type}, `;
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

const builInterface = (name: string, protocols: any): string => {
    let desStr = "";
    
    return desStr;
}

const buildEnum = (name: string, protocols: any): string => {
    let desStr = "";

    return desStr;
}

export const run = async () => {
    try {
        // 包装头、尾
        let headStr = "";
        let tailStr = "";
        headStr += `/**\n`;
        headStr += ` * 协议约定模型文件\n`;
        headStr += ` */\n\n`;
        headStr += `declare namespace Protocols {\n`;
        headStr += `\n`;
        // 导出协议模型
        let content = "";
        Object.values(GatewayProtocols).forEach((v: Protocol) => {
            content += createFromProtocol(v);
        })
        // 导出类型类型interface
        content += buildEnum("GatewayProtocol",GatewayProtocols);
        content += builInterface("GatewayProtocol", GatewayProtocols);
        let dir = path.join(__filename, "../../../export/protocols.d.ts");
        await write(dir, headStr + content + tailStr);
        console.info(`已经导出文件：${dir}`);
    } catch (e) {
        console.error(`导出协议模型出错，error:${e.message}, stack:${e.stack}`);
    }
}