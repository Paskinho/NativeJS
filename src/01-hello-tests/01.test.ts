import{sum} from "./01";

const a = 1;
const b = 2;
const c = 3;


test('sum should be correct', ()=>{

    const result = sum(a,b);

    expect(result).toBe(3)


})