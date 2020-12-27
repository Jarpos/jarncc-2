export class Origin_c {
    /**
     * @param l label
     * @param exHP extra hit points
     */
    constructor(l: string, exHP: number) {
        this.label = l;
        this.extraHitPoints = exHP;
    }

    public label: string;
    public extraHitPoints: number;
}


export function get_origins(): Origin_c[] {
    return [
        new Origin_c("Aél", 50),
        new Origin_c("Bruchlanden", 60),
        new Origin_c("Cordania", 45),
        new Origin_c("Elersien", 55),
        new Origin_c("Istakum", 60),
    ];
}
