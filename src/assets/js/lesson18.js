/**
 * Created by dell on 2017/8/6.
 */
/*export let A=123;
export let test=function(){
    console.log('test');
};
export class Hello{
    test(){
        console.log('class');
    }
};*/

let A=123;
let test=function(){
    console.log('test');
}
class Hello{
    test(){
        console.log('class');
    }
}
//default 给导出不取名字，把名字交给引入方取
export default{
    A,
    test,
    Hello
}
