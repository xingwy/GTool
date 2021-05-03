import * as path from "path";
import { Type } from "../struct/type";
import { write } from "../util/write";
import { Protocol } from "../struct/protocol";

import * as GatewayProtocols from "./server/gateway";

const createFromProtocol = (protocol: Protocol): string => {
    return "";   
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
        })
        tailStr += `}`;
        let dir = path.join(__filename, "../../../export/protocols.d.ts");
        await write(dir, headStr + content + tailStr);
    } catch (e) {
        console.error(`导出协议模型出错，error:${e.message}, stack:${e.stack}`);
    }
}