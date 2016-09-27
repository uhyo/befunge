// code sanitizer.
export function sanitizeCode(code: string): string{
    // do it per line.
    const resultlines: Array<string> = [];
    const lines = code.split(/\r\n|\r|\n/);

    let flag = false;
    // 後ろから走査して要らないlinesは消す
    for (let i = lines.length-1; i >= 0; i--){
        const line = lines[i];
        let w = line.length - 1;
        for (; w>=0;  w--){
            const c = line.charCodeAt(w);
            if (c <= 0x20 || 0x7F <= c){
                // お前は消してもいいのではないか？
                continue;
            }
            break;
        }
        if (flag || w>=0){
            resultlines.push(line.slice(0, w+1));
            flag = true;
        }
    }
    resultlines.reverse();
    return resultlines.join('\n');
}
