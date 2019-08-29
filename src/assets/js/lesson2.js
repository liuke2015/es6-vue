/**
 * Created by Administrator on 2017/7/28 0028.
 */
//解构赋值--左边一个值，右边一个值

//1、数组类型的解构赋值
{
    let a,b,rest;
    [a,b]=[1,2];
    console.log("1:数组类型的解构赋值:");
    console.log(a,b);
}

//
{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log("2、...在赋值中的应用：");
    console.log(a,b,rest);
}

//对象解构赋值
{
    let a,b;
    ({a,b}={a:1,b:2})
    console.log("3、对象解构赋值：")
    console.log(a,b);
}
{
    let a,b,c,rest;
    [a,b,c=3]=[1,2];
    console.log(a,b,c);
}

{
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);
}

{
    function f(){
        return [1,2]
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);
}

{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b]=f();
    console.log(a,b);
}

{
    function f(){
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,...b]=f();
    console.log(a,b);
}

{
    let o={p:42,q:true};
    let {p,q}=o;
    console.log(p,q);
}

{
    let {a=10,b=5}={a:3};
    console.log(a,b);
}

{
    let metaData={
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]}=metaData;
    console.log(esTitle,cnTitle);
}
