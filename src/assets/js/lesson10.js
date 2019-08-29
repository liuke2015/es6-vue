/**
 * Created by Administrator on 2017/7/31 0031.
 */
/*一、set*/
{   /*1、定义--不加参数*/
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log('list',list);
    console.log('size',list.size);
}

{   /*2、定义--加参数*/
    let arr = [1,2,3,4,5];
    let list = new Set(arr);

    console.log('size',list.size);
}

{   /*3、特性--元素不能重复*/
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log('list',list);

    let arr=[1,2,3,1,'2'];
    let list2=new Set(arr);

    console.log('unique',list2);
}

{   /*4、方法--'add','delete','clear','has'*/
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);

    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log('list',list);
}

{   /*5、遍历*/
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);

    for(let key of list.keys()){
        console.log('keys',key);
    }
    for(let value of list.values()){
        console.log('value',value);
    }
    for(let [key,value] of list.entries()){
        console.log('entries',key,value);
    }

    list.forEach(function(item){console.log(item);})
}

/*二、WeakSet*/
/*WeakSet与Set的区别-- 支持类型不一样
*   WeakSet的key值只支持对象，且对象是弱引用--地址引用。
*   没有clear方法，没有size属性,不能遍历
* */

{
    let weakList=new WeakSet();

    let arg={};

    weakList.add(arg);

    // weakList.add(2);

    console.log('weakList',weakList);
}
/*三、map*/
/*map的key可以是任何类型，甚至是数组类型*/
{
    let map = new Map();
    let arr=['123'];

    map.set(arr,456);

    console.log('map',map,map.get(arr));
}

{
    let map = new Map([['a',123],['b',456]]);
    console.log('map args',map);
    console.log('size',map.size);
    console.log('delete',map.delete('a'),map);
    console.log('clear',map.clear(),map);
}
/*四、WeakMap*/
/*   WeakMap的key值只支持对象，且对象是弱引用--地址引用。
 *   没有clear方法，没有size属性,不能遍历
*
* */
{
    let weakmap=new WeakMap();

    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o));
}
