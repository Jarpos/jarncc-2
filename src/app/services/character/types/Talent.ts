type difficulties = 1 | 2 | 3 | 4;

export class Talent_c {
    /**
     * @param n name
     * @param d difficulty
     * @param a attributes
     * @param b basepoints value
     * @param e extrapoints value
     * @param expl explanation string
     */
    constructor(n: string = "", d: difficulties = 1, a: string[] = ["", "", ""], b: number = 0, e: number = 0, expl: string = "") {
        this.name = n;
        this._difficulty = d;
        this.attributes = a;
        this._basePoints = b;
        this.extraPoints = e;
        this.explanation = expl;
    }

    private _name: string = "";
    public get name(): string { return this._name; }
    public set name(n: string) {
        if (n.length <= 256) {
            this._name = n;
        }
    }

    private _difficulty: difficulties = 1;
    public get difficulty(): string {
        // 65 is A, so we use +64 to force at least a 65
        return String.fromCharCode(this._difficulty + 64);
    }
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

    public get cost(): number {
        return this._extraPoints * this._difficulty;
    }
    public get allPoints(): number {
        return this._extraPoints + this.basePoints;
    }

    private _explanation: string = "";
    public get explanation(): string { return this._explanation; }
    public set explanation(e: string) {
        if (e.length <= 512) {
            this._explanation = e;
        }
    }
}


export function get_talents(): Map<string, Talent_c> {
    return new Map([
        ["Talent1", new Talent_c("Talent1", 1, ["WE", "KR", "IN"], 5, 4, "Erklärung die alles erklärt")],
        ["Talent2", new Talent_c("Talent2", 4, ["WE", "KR", "IN"], 0, 13, "Erklärung die alles erklärt")],
    ]);
}

export function get_talents_arr(): Talent_c[] {
    return Array.from(get_talents().values());
}
