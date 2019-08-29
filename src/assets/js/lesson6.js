/**
 * Created by Administrator on 2017/7/28 0028.
 */
/*数组扩展*/

/*1、 Array.of*/
{
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=',arr);// [3, 4, 7, 9, 11]

    let empty=Array.of();
    console.log('empty',empty);//[]
}


/*2、Array.from*/
{   /*a、将DOM集合转换成数组*/
    let p=document.querySelectorAll('p');
    let pArr=Array.from(p);
    pArr.forEach(function(item){
        //textContent--原生js获取DOM节点文本内容
        console.log(item.textContent);
    });
    /*b、两个参数，类似map的功能*/
    console.log(Array.from([1,3,5],function(item){return item*2}));//[2, 6, 10]
}
/*3、.fill--填充数组*/
{
    console.log('fill-7',[1,'a',undefined].fill(7));//[7, 7, 7]
    console.log('fill,pos',['a','b','c'].fill(7,1,3));// ["a", 7, 7]
}

/*4、跟遍历相关
*    keys--索引
*    values--值
*    entries--索引、值*
* */
{
    for(let index of ['1','c','ks'].keys()){
        console.log('keys',index);
    }
    for(let value of ['1','c','ks'].values()){
        console.log('values',value);
    }
    for(let [index,value] of ['1','c','ks'].entries()){
        console.log('values',index,value);
    }
}
/* 5、copyWithin*/
{
    console.log([1,2,3,4,5].copyWithin(0,3,4));//[4, 2, 3, 4, 5]
}
/*6、查找
     find
     findIndex
*
* */
{
    console.log([1,2,3,4,5,6].find(function(item){return item>3}));//4
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));//3
}
/*7、includes*/
{
    console.log('number',[1,2,NaN].includes(1));//true
    console.log('number',[1,2,NaN].includes(NaN));//true
}
