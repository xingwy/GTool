import * as fs from "fs";
export const write = async (path: string, content: string) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, "utf-8", (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(null);
        })
    })
}