
export const startSeq = "\u001b["
export const resetSeq = startSeq + "0m";

export const toAnsi = (ansi: number, seq: string = startSeq + '38;5;') => {
    return (input: string, isBg: boolean = false) => {
        if (isBg) {
            seq = startSeq + '48;5;'
        }
        const ansiSec = (seq + (ansi + 'm'));
        return ansiSec + input.split(resetSeq).join(resetSeq + ansiSec) + resetSeq
    }
}
export default toAnsi