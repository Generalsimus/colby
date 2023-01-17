import { createProxy } from "./createProxy";
import toAnsi, { startSeq } from "./toAnsi";

export const toStyle = (ansi: number = 0): (input: string) => string => toAnsi(ansi, startSeq);

const style = createProxy({
    Normal: 0,
    Bold: 1,
    Dim: 2,
    Italic: 3,
    Underlined: 4,
    Blinking: 5,
    Reverse: 7,
    Invisible: 8,
    StrikeThrough: 9,
}, toStyle);

export { style };
export default style;
