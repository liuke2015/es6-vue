/**
 * Created by dell on 2017/8/4.
 */
/*iterator 和 for ... of循环*/
{
  let arr = ['hello', 'world'];
  let map = arr[Symbol.iterator]();
  console.log(map.next());//{value: "hello", done: false}
  console.log(map.next());//{value: "world", done: false}
  console.log(map.next());//{value: undefined, done: true}
}
//自定义iterator接口，object没有部署、内置iterator接口，需要自定义
{
    let obj={
        start:[1,3,2],
        end:[7,9,8],
        [Symbol.iterator](){
            let self=this;
            let index=0;
            let arr=self.start.concat(self.end);
            let len=arr.length;
            return {//返回一个对象，该对象包含next()方法
                next(){//next()返回的值是个对象，{value:x,done:false||true}
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return {
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
  console.log("obj=", obj);
  let map = obj[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());

    /*for(let key of obj){
        console.log(key);//1,3,2,7,9,8
    }*/
}

{
    let arr=['hello','world'];
    for(let value of arr){
        console.log('value',value);
    }
}

/*练习*/
/*{
  let obj = {
    start: ["a", "b", "c"],
    end: ["d", "e", "f"],
    [Symbol.iterator]() {
      let _this = this;
      let ary = _this.start.concat(_this.end);
      let len = ary.length;
      let index = 0;
      return {
        next() {
          if (index < len) {
            return {
              value: ary[index++],
              done: false
            }
          } else {
            return {
              value: ary[index++],
              done: true
            }
          }
        }
      }
    }
  }
  console.log("obj=", obj);
  let map = obj[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}*/
