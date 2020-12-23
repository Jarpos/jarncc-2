export class CharInfo_c {
    /**
     * @param n name
     * @param a age
     * @param o origin
     * @param p profession
     */
    constructor(n: string = "", a: number = 0, o: string = "", p: string = "") {
        this.name = n;
        this.age = a;
        this.origin = o;
        this.profession = p;
    }

    private _name: string = "";
    public get name(): string { return this._name; }
    public set name(n: string) {
        if (n.length <= 256) {
            this._name = n;
        }
    }

    private _age: number = 0;
    public get age(): number { return this._age; }
    public set age(a: number) {
        if (a >= 0) {
            this._age = a;
        }
    }

    private _origin: string = "";
    public get origin(): string { return this._origin; }
    public set origin(o: string) {
        if (o.length <= 256) {
            this._origin = o;
        }
    }

    private _profession: string = "";
    public get profession(): string { return this._profession; }
    public set profession(p: string) {
        if (p.length <= 256) {
            this._profession = p;
        }
    }
}
