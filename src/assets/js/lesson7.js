/**
 * Created by Administrator on 2017/7/28 0028.
 */
/*函数扩展*/
{
    function test(x, y = 'world'){
        console.log('默认值',x,y);
    }
    test('hello');//hello world
    test('hello','kill');//hello kill
}

{
    let x='test';
    function test2(x,y=x){
        console.log('作用域',x,y);//kill kill
    }
    test2('kill');
}
/*...arg---把传入参数转为数组
* ...arg之后，不能再有其它参数
* */
{
    function test3(...arg){
        for(let v of arg){
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,'a');
}

{
    console.log(...[1,2,4]);//1 2 4
    console.log('a',...[1,2,4]);//a 1 2 4
}
/*箭头函数*/
{
    let arrow = v => v*2;
    let arrow2 = () => 5;
    console.log('arrow',arrow(3));//6
    console.log(arrow2());//5

}
/*尾调用 函数最后是函数
*     在函数中需要调用另一个函数时，或者函数之中嵌套函数，用尾调用（提高性能）
*
* */
{
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x)
    }
    fx(123)//tail 123
}
