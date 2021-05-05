import * as path from "path";
import { Type } from "../struct/type";
import { write } from "../util/write";
import { Protocol } from "../struct/protocol";

import * as GatewayProtocols from "./server/gateway";
import * as CenterProtocols from "./server/center";
import * as WorldProtocols from "./server/world";
import * as ClientProtocols from "./server/client";
import * as HttpProtocol from "./server/http";

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

const builProtocol = (name: string, protocols: Array<any>): string => {
    let content = "";
    Object.values(protocols).forEach((v: Protocol) => {
        content += createFromProtocol(v);
    })
    return content;
}

const buildInterface = (name: string, protocols: Array<any>): string => {
    let content = "";
    Object.values(protocols).forEach((v: Protocol) => {
        content += `        [${name}ProtocolCode.${v.name}]: ${v.name};\n`
    })
    return content;
}

const buildEnum = (name: string, protocols: Array<any>): string => {
    let content = "";
    let offset = 1;
    content += `    const enum ${name}ProtocolCode {\n`;
    Object.values(protocols).forEach((v: Protocol) => {
        content += `        ${v.name} = 0x${(Number(v.code) + offset).toString(16)},`;
        offset++;
        if (v.des) {
            content += `  // ${v.des}`;
        }
        content += `\n`;
    })
    content += `    }\n\n`;
    return content;
}

const buildHttpPath = (name: string, protocols: Array<any>): string => {
    let content = "";
    content += `    const enum ${name}ProtocolPath {\n`;
    Object.values(protocols).forEach((v: Protocol) => {
        content += `        ${v.name} = "${(v.code).toString(16)}",`;
        if (v.des) {
            content += `  // ${v.des}`;
        }
        content += `\n`;
    })
    content += `    }\n\n`;
    return content;
}

const buildHttpInterface = (name: string, protocols: Array<any>): string => {
    let content = "";
    Object.values(protocols).forEach((v: Protocol) => {
        content += `        [${name}ProtocolPath.${v.name}]: ${v.name};\n`
    })
    return content;
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
        content += builProtocol("gateway", GatewayProtocols as any);
        content += builProtocol("Center", CenterProtocols as any);
        content += builProtocol("World", WorldProtocols as any);
        content += builProtocol("Client", ClientProtocols as any);
        content += builProtocol("Http", HttpProtocol as any);
        
        // 导出类型类型enum
        content += buildEnum("Gateway",GatewayProtocols as any);
        content += buildEnum("Center",CenterProtocols as any);
        content += buildEnum("World",WorldProtocols as any);
        content += buildEnum("Client",ClientProtocols as any);
        content += buildHttpPath("Http",HttpProtocol as any);

        // 导出interface
        content += `    interface ProtocolsTuple {\n`;
        content += buildInterface("Gateway", GatewayProtocols as any);
        content += buildInterface("Center",CenterProtocols as any);
        content += buildInterface("World",WorldProtocols as any);
        content += buildInterface("Client",ClientProtocols as any);
        content += `    }\n\n`;

        content += `    interface RequestTuple {\n`;
        content += buildHttpInterface("Http",HttpProtocol as any);
        content += `    }\n`;

        tailStr += `}`

        let dir = path.join(__filename, "../../../export/protocol.d.ts");
        await write(dir, headStr + content + tailStr);
        console.info(`已经导出文件：${dir}`);
    } catch (e) {
        console.error(`导出协议模型出错，error:${e.message}, stack:${e.stack}`);
    }
}