/**
 * @param {Array<number> | Float32Array} rgb
 * @returns {Float32Array}
 */
export function RGBtoHSV(rgb) {
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;

    const out = new Float32Array(3);

    const MAX = Math.max(r, g, b);
    const MIN = Math.min(r, g, b);

    out[2] = MAX;
    out[1] = (MAX === 0 ? 0 : (MAX - MIN) / MAX);

    if (MAX === MIN) {
        out[0] = 0;
    } else if (r === MAX) {
        out[0] = 60 * (g - b) / (MAX - MIN);
    } else if (g === MAX) {
        out[0] = 60 * (b - r) / (MAX - MIN) + 120;
    } else if (b === MAX) {
        out[0] = 60 * (r - g) / (MAX - MIN) + 240;
    }
    if (out[0] < 0) {
        out[0] += 360;
    }

    out[0] = Math.round(out[0]);
    out[1] = Math.round(out[1] * 100) / 100;
    out[2] = Math.round(out[2] * 100) / 100;

    return out;
}
