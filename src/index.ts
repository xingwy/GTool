import * as DBExport from "./models/export";
import * as ProtocolExport from "./protocols/export";

const start = async () => {
    // await DBExport.run();
    await ProtocolExport.run();
}
start();