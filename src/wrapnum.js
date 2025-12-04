export class Wrapnum {
    constructor(start, min, max) {
        this.index = start
        this.min = min
        this.max = max
        this.history = []
    }

    /**
     *
     * @param {number}num
     * @returns {number}
     */
    increment(num) {
        for (let i = 0;  i < Math.abs(num);i++  ) {
            this.index += Math.sign(num)

            if (this.index > this.max) {
                this.index = this.min
            }

            if(this.index < this.min) {
                this.index = this.max
            }

            if (this.index === 0) {
                this.history.push(this.index)
            }
        }

        return this.index
    }
}