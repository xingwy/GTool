import { Type } from "../struct/type";

export const createFromType = (type: Type) => {
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