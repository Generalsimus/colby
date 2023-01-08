import toRgb from "./toRgb";

const toHex = (hex: string) => {

    return toRgb(parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16))
}
export { toHex }
export default toHex