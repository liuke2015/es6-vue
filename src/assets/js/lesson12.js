/**
 * Created by Administrator on 2017/7/31 0031.
 */
//Proxy和Reflect
/*Proxy:代理
* Reflect:反射
* */
{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  let monitor = new Proxy(obj, {
    // 拦截对象属性的读取
    get(target, key) {
      return target[key].replace('2017', '2018')
    },
    // 拦截对象设置属性
    set(target, key, value) {
      if (key === 'name') {
        return target[key] = value;
        /*  效果同上
           target[key] = value;
           return true;*/
      } else {
        return target[key];  //跟 return true 结果一样；

        /*target.time="123";
        return true;*/
      }
    },
    // 拦截key in object操作
    has(target, key) {
      if (key === 'name') {
        return target[key]
      } else {
        return false;
      }
    },
    // 拦截delete
    deleteProperty(target, key) {
      if (key.indexOf('_') > -1) {
        delete target[key];
        return true;
      } else {
        return target[key]
      }
    },
    // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item != 'time')
    }
  });

  console.log('get', monitor.time);

  monitor.time = '2018';
  monitor.name = 'mukewang';
  console.log('set1', monitor.time, monitor);
  console.log('set2', obj.time, obj);

  console.log('has', 'name' in monitor, 'time' in monitor);

  // delete monitor.time;
  // console.log('delete',monitor);
  //
  // delete monitor._r;
  // console.log('delete',monitor);
  console.log('ownKeys', Object.keys(monitor));

}

{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  console.log('Reflect get', Reflect.get(obj, 'time'));
  Reflect.set(obj, 'name', 'mukewang');
  console.log(obj);
  console.log('has', Reflect.has(obj, 'name'));
}
/*
* 示例：和业务解耦的校验
* */
{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          let va = this._validator[key];
          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy)
          } else {
            throw Error(`不能设置${key}到${value}`)
          }
        } else {
          throw Error(`${key} 不存在`);
        }
      }
    })
  }

  const personValidators = {
    name(val) {
      return typeof val === "string"
    },
    age(val) {
      return typeof val === "number" && val > 18
    },
    mobile(val) {
      return true
    }
  };

  class Person {
    constructor(name, age, mobile) {
      /*this.name = name;
      this.age = age;
      this.mobile = mobile;*/
      this.name = "";
      this.age = 0;
      this.mobile = "";
      /*
      * 以下校验 只能对new Person('lilei', 30,131)时，传入的值进行校验
      * */
      let _personVa = personValidators;
      let keysAry = Object.keys(this);
      for (let key of keysAry) {
        console.log("key=" + key);
        let va = _personVa[key];
        let param = eval(key);
        if (!!va(param)) {
          Reflect.set(this, key, param)
        } else {
          throw Error(`不能赋值${param}到${key}`)
        }
      }
      /*
      * 以下校验(return validator)只能对 new Person之后的实例-person.name=48 这样赋值进行校验
      * */
      return validator(this, personValidators)
    }
  }

  // const person = new Person('lilei', 30,131);
  const person = new Person(66, 30, 131);
  console.info(person);

  person.name = 48;
  console.info(person);
}
/*练习*/
/*{
  function validator(target, vali) {
    return new Proxy(target, {
      _vali: vali,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          let va = this._vali[key];
          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy);
          } else {
            throw Error(`不能给${key}赋值${value}`)
          }
        } else {
          throw Error(`${key}不存在`);
        }
      }
    })
  }

  const personValidator = {
    name(val) {
      return typeof val === "string";
    },
    age(val) {
      return typeof val === "number" && val > 18
    },
    mobile(val) {
      return true
    }
  }

  class Person {
    constructor(name, age, mobile) {
      this.name = "";
      this.age = "";
      this.mobile = "";
      let keyAry = Object.keys(this);
      let personV = personValidator;
      for (let key of keyAry) {
        let va = personV[key];
        let value = eval(key)
        if (!!va(value)) {
          Reflect.set(this, key, value);
        } else {
          throw Error(`不能将${key}赋值为${value}`);
        }
      }
      return validator(this, personValidator)
    }
  }

  let person = new Person("dabao", 38, 132);
  console.log("person1=", person);
  person.name = 18;
  console.log("person2=", person);
}*/
