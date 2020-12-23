type difficulties = 1 | 2 | 3 | 4;

export class Talent_c {
    /**
     * @param n name
     * @param d difficulty
     * @param a attributes
     * @param b basepoints value
     * @param e extrapoints value
     */
    constructor(n: string = "", d: difficulties = 1, a: string[] = ["", "", ""], b: number = 0, e: number = 0) {
        this.name = n;
        this._difficulty = d;
        this.attributes = a;
        this._basePoints = b;
        this.extraPoints = e;
    }

    private _name: string = "";
    public get name(): string { return this._name; }
    public set name(n: string) {
        if (n.length <= 256) {
            this._name = n;
        }
    }

    private _difficulty: difficulties = 1;
    public get difficulty(): difficulties { return this._difficulty; }
    //public set difficulty(d: difficulties) {
    //    if (d > 0 && d < 4) {
    //        this._difficulty = d;
    //    }
    //}

    private _attributes: string[] = ["", "", ""];
    public get attributes(): string[] { return this._attributes; }
    public set attributes(a: string[]) {
        if (a.length === 3) {
            this._attributes = a;
        }
    }

    private _trained: boolean = false;
    public get trained(): boolean { return this._trained; }
    public set trained(b: boolean) { this._trained = b; }

    private _basePoints: number = 0;
    public get basePoints(): number { return this._basePoints; }
    //public set basePoints(e: number) {
    //    if (e > 0 && e <= 20) {
    //        this._basePoints = e;
    //    }
    //}

    private _extraPoints: number = 0;
    public get extraPoints(): number { return this._extraPoints; }
    public set extraPoints(e: number) {
        if (e > 0 && e <= 20) {
            this._extraPoints = e;
        }
    }
}


export function get_talents(): Map<string, Talent_c> {
    return new Map([
        ["Talent1", new Talent_c("Talent1", 1, ["WE", "KR", "IN"], 5, 4)],
        ["Talent2", new Talent_c("Talent2", 2, ["WE", "KR", "IN"], 0, 13)],
    ]);
}

export function get_talents_arr(): Talent_c[] {
    return Array.from(get_talents().values());
}
