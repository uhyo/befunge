// main bin bin binbinbinbinbin
import * as cli from 'cli';
import {
    parse,
} from './parser';

cli.withStdin((code: string)=>{
    const graph = parse(code);

    console.log('BOOM');
});
