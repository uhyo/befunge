// コードの大きさを知る
interface CodeRect{
    width: number;
    height: number;
}
export function getCodeRect(code: string): CodeRect{
    // コードを1回走査して取得するぞ
    let width = 0;
    
    const lines = code.split(/\r\n|\r|\n/);
    const height = lines.length;
    for (let i=0; i<height; i++){
        const linelen = lines[i].length;
        if (width < linelen){
            width = linelen;
        }
    }
    return {
        width,
        height,
    };
}
