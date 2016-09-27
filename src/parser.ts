// Befunge parser.
import {
    sanitizeCode,
} from './util/sanitize';
import {
    getCodeRect,
} from './util/getCodeRect';
import {
    Vector,
    Verticle,
    BefungeGraph,
} from './graph';

export function parse(code: string): BefungeGraph{
    code = sanitizeCode(code);
    const {
        width, height,
    } = getCodeRect(code);
    //

    const verticles = new WeakMap<Vector, Verticle>();

    return {
    };
}
