// Maybe rename to Capital_c ?
export class Finance_c {
    /**
     *
     * @param l label for displaying as name
     * @param m amount of money that is given as base (!In Goldsichel!)
     * @param e example to explain what person would have such money
     */
    constructor(l: string, m: number, e?: string) {
        this.label = l;
        this.money = m;
        this.example = e;
    }

    public label: string;
    public money: number;
    public example?: string;
}

export function get_finances(): Finance_c[] {
    return [
        new Finance_c("1", 40, "Obdachloser Bettler"),
        new Finance_c("2", 70, "Tagelöhner"),
        new Finance_c("3", 110, "Bürger: Istakum"),
        new Finance_c("4", 150, "Bürger: Aél/Elersien"),
        new Finance_c("5", 200, "Bürger: Cordania"),
        new Finance_c("6", 275, "Reich: Cordania"),
        new Finance_c("7", 350, "Ein Adeliger"),
    ];
}
