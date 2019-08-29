/*一、map与数组的比较*/
{
    //数据结构横向对比，增、查、改、删
    let map=new Map();
    let array=[];
    //增
    map.set('t',1);
    array.push({'t':1});

    console.info('map-array',map,array);

    //查
    let map_exist=map.has('t');
    let array_exist=array.find(item=>item.t);
    console.info('map-array',map_exist,array_exist);

    //改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    console.info('map-array-modify',map,array);

    //删
    map.delete('t');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('map-array-empty',map,array);
}

/*二、set与数组的比较*/
{
    let set=new Set();
    let array=[];

    //增
    set.add({t:1});
    array.push({t:1});

    console.info("set-array1",set,array);

    //查
    let set_exist=set.has({t:1});//false
    let array_exist=array.find(item=>item.t);
    console.info('set-array2',set_exist,array_exist);

    //改
    set.forEach(item=>item.t?item.t=2:'');
    array.forEach(item=>item.t?item.t=2:'');
    console.info('set-array-modify',set,array);

    //删
    set.forEach(item=>item.t?set.delete(item):'');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('set-array-empty',set,array);

}

/*三、map,set与Object的对比*/
{
    let item={t:1};
    let map=new Map();
    let set=new Set();
    let obj={};

    //增加
    map.set('t',1);
    set.add(item);
    obj['t']=1;

    console.info('map-set-obj',obj,map,set);

    //查
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    });

    //改
    map.set('t',2);
    item.t=2;
    obj['t']=2;
    console.info('map-set-obj-modify',obj,map,set);

    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.info('map-set-obj-empty',obj,map,set);
}

/*总结：
*     1、能使用map，不使用数组
*     2、对数据要求唯一性，用set，放弃object,数组*
* */