import toAnsi, { startSeq } from "./toAnsi"

export const toStyle = (ansi: number) => toAnsi(ansi, startSeq)

const style = {
    Normal: toStyle(0),
    Bold: toStyle(1),
    Dim: toStyle(2),
    Italic: toStyle(3),
    Underlined: toStyle(4),
    Blinking: toStyle(5),
    Reverse: toStyle(7),
    Invisible: toStyle(8),
    StrikeThrough: toStyle(9),
} as const

export { style };
export default style;
