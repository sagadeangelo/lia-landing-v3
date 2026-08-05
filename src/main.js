import './styles/global.css';
import { LIA_OS } from './core/LIA_OS.js';

console.log("MAIN 1");

const boot = async () => {

    console.log("MAIN 2");

    try{

        const os = new LIA_OS();

        console.log("MAIN 3");

        await os.boot();

        console.log("MAIN 4");

    }catch(err){

        console.error(err);

    }

}

boot();