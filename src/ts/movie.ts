import Buyable from "./buyable";

export default class Movie implements Buyable {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly isIMAX: boolean,
        readonly original_name: string,
        readonly year: number,
        readonly state: string,
        readonly slogan: string,
        readonly style: string[],
        readonly timing: number,
        readonly price: number,
        readonly img: string,
    ){}
}