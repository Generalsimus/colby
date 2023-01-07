import toAnsi from "./toAnsi";

export const toRgb = (r: number, g: number, b: number): ReturnType<typeof toAnsi> => {
    let ansi: number = 0

    if (r === g && g === b) {
        if (r < 8) {
            ansi = 231;
        } else if (r > 248) {
            ansi = 231;
        } else {
            ansi = Math.round(((r - 8) / 247) * 24) + 232;
        }
    } else {
        ansi = 16
            + (36 * Math.round(r / 255 * 5))
            + (6 * Math.round(g / 255 * 5))
            + Math.round(b / 255 * 5);
    }

    return toAnsi(ansi)
}
export default toRgb