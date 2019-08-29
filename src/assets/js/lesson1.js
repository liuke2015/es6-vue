/**
 * Created by Administrator on 2017/7/28 0028.
 */
function test(){
    //1、es6强制开启严格模式
    //2、let 在块作用域有效(大括号)
   /* for(let i=1;i<3;i++){
        console.log(i);
    }
    console.log(i);*/


    //let 不能重复定义
   /* let a=1;
    let a=2;*/
}

function last(){
    /*常量  1、声明的时候必须定义
            2、数值类型定义后不能更改值
            3、引用类型定义后可以改变值
            */
    const PI=3.1415926;
    const k={
        a:1
    };
    k.b=3;
    //PI=8;
    console.log(PI,k);
}

//test();

last();