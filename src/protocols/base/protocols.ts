class Protocols {
    private static _instance: Protocols = new Protocols();
    public static get instance(): Protocols {
        return this._instance;
    }

    private _protocols: Array<any>;
    constructor() {
        this._protocols = new Array<any>();
    }

    public register(v: any): void {
        this._protocols.push(v);
    }
    public get(): void {
        console.log(this._protocols);
    }
}

export default Protocols.instance.register.bind(Protocols.instance)
