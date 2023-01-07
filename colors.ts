import toRgb from "./toRgb"

export const colors = {
    Black: toRgb(1, 1, 1),
    Red: toRgb(255, 0, 0),
    Green: toRgb(0, 128, 0),
    Yellow: toRgb(255, 255, 0),
    Blue: toRgb(0, 0, 255),
    Magenta: toRgb(255, 0, 255),
    White: toRgb(255, 255, 255),
    Gray: toRgb(128, 128, 128),
    Cyan: toRgb(0, 255, 255),
} as const

export default colors