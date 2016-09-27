// Befunge Graph.

// 座標の定義
export interface Vector{
    readonly x: number;
    readonly y: number;
}

// ひとつのアレ
export interface Verticle{
    // 座標
    point: Vector;
    // 枝
    edges: WeakMap<Vector, Verticle>;
}

// プログラム全体
export interface BefungeGraph{
    entry: Vecticle;
}

// 方向の定義
export namespace dir{
    export const up: Vector = {
        x: 0,
        y: -1,
    };
    export const right: Vector = {
        x: 1,
        y: 0,
    };
    export const down: Vector = {
        x: 0,
        y: 1,
    };
    export const left: Vector = {
        x: -1,
        y: 0,
    };
}


