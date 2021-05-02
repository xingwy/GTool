import * as DBExport from "./models/export";

const start = async () => {
    await DBExport.run();
}
start();