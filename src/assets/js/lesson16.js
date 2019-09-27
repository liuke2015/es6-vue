/**
 * Created by dell on 2017/8/4.
 * genertaor-1、是个函数 2、解决异步编程的一种方案，比promise更高级
 */
{
  // genertaor基本定义
  let tell = function* () {
    yield 'a';
    yield 'b';
    return 'c'
  };

  let k = tell();

  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
}
/*
* genertaor函数和iterator接口的关系
* generator作为遍历器的返回值
* 通过创建generator函数的方式，给对象部署一个iterator接口
* */
{
  let obj = {};
  obj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
  }

  for (let key of obj) {
    console.log('value', key);
  }
}
/*
* 示例：状态机
* */
{
  let state = function* () {
    while (1) {
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status = state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}
/*async写法只是generator的语法糖，跟上面的执行结果是一样的*/
// {
//   let state=async function (){
//     while(1){
//       await 'A';
//       await 'B';
//       await 'C';
//     }
//   }
//   let status=state();
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
//   console.log(status.next());
// }


/*抽奖*/
{  /*draw-实现抽奖逻辑+提示剩余次数*/
  let draw = function (count) {
    //具体抽奖逻辑
    console.info(`1-剩余${count}次`);
  }

  let residue = function* (count) {
    while (count > 0) {
      console.log(`count=${count}`);
      count--;
      yield draw(count);//执行抽奖逻辑
    }
  }
  let star = residue(5);
  let btn = document.createElement('button');
  btn.id = 'start';
  btn.textContent = "抽奖";
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click', function () {
    star.next();
  })
}
/*抽奖练习1*/
/*{
  let draw = function (count) {
    console.info(`2-剩余${count}次`);
  }
  let residue = function* (count) {
    while (count > 0) {
      count--;
      yield draw(count);
    }
  }
  let star = residue(5);
  let btn = document.createElement('button');
  btn.id = 'start2';
  btn.textContent = "抽奖2";
  document.body.appendChild(btn);
  document.getElementById('start2').addEventListener('click', function () {
    star.next();
  })
}*/
/*抽奖练习2*/
/*{
  let draw = function (count) {
    console.log(`还剩${count}次`);
  };

  let residue = function* (count) {
    while (count > 0) {
      count--;
      yield draw(count);
    }
  };

  let star = residue(5);
  let btn = document.createElement('button');
  btn.id = 'start3';
  btn.textContent = "抽奖3";
  document.body.appendChild(btn);
  document.getElementById('start3').addEventListener('click', function () {
    star.next();
  })
}*/
/*抽奖练习3*/
/*{
  function draw(count) {
    console.log("执行抽奖相关逻辑~~");
    console.log(`剩余抽奖${count}次`)
  }

  let residu = function* (count) {
    while (count > 0) {
      count--;
      yield draw(count)
    }
  }
  let start = residu(5);
  let btn = document.createElement("button");
  btn.id = "btn";
  btn.textContent="抽奖3";
  document.body.appendChild(btn);
  document.getElementById("btn").addEventListener("click",()=>{
    start.next();
  })
}*/
/*抽奖练习4*/
/*{
  let num = 5;

  function draw(count) {
    console.log("执行相关抽奖逻辑~~~");
    console.log(`剩余抽奖${count}次`);
    btn.textContent = `抽奖 剩余${count}次`;
  }

  let residu = function* (count) {
    while (count > 0) {
      count--;
      yield draw(count)
    }
  }

  let start = residu(num);
  let btn = document.createElement("button");
  btn.id = "btn2";
  btn.textContent = `抽奖 剩余${num}次`;
  document.body.appendChild(btn);
  document.getElementById("btn2").addEventListener("click", function () {
    console.log("this=", this);
    start.next();
  })
}*/
{/* 长轮询*/
  let ajax = function* () {
    yield new Promise(function (resolve, reject) {
      setTimeout(function () {//模拟请求接口
        resolve({code: 0})//请求接口回调里写
      }, 200)
    })
  }

  let pull = function () {
    let generator = ajax();
    let step = ajax().next();
    step.value.then(function (d) {
      if (d.code != 0) {
        setTimeout(function () {
          console.log('wait');
          pull();
        }, 1000)
      } else {
        console.log(d);
      }
    })
  }
  /* pull();*/
}

/* 长轮询练习1*/
{
  let ajax = function* () {
    yield new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({code: 0})
      }, 200)
    });
  }

  let pull = function () {
    let step = ajax().next();
    step.value.then(function (d) {
      if (d.code != 0) {
        setTimeout(function () {
          console.info('1:waite');
          pull();
        }, 1000)
      } else {
        console.info(d);
      }
    })
  }
  // pull();
}
/* 长轮询练习1*/
{
  let ajax = function* () {
    yield new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({code: 0})
      }, 1000);
    })
  };
  let pull = function () {
    let step = ajax().next();
    step.value.then(function (d) {
      if (d.code != 0) {
        console.log('2:waite');
        pull();
      } else {
        console.info(d);
      }
    })
  };
  //pull()
}
/* 长轮询练习2*/
{
  let ajax = function* () {
    yield new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({code: 0})
      }, 1000)
    })
  };
  let pull = function () {
    let step = ajax().next();
    step.value.then(function (d) {
      if (d.code != 0) {
        console.log('3:waite');
        pull();
      } else {
        console.log(d)
      }
    })
  };
  pull();
}
/*长轮询练习3*/
/*{
  let ajax = function* (num) {
    while (num > 0) {
      num--
      yield new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve({code: num})
        }, 2000);
      })
    }
  }
  let generator = ajax(5);
  let pull = function () {
    let step = generator.next();
    step.value.then(function (d) {
      if (d.code == 0) {
        console.log(`code==0`);
      } else {
       setTimeout(() => {
          console.log(`wait-${d.code}`);
          pull();
        }, 2000)
      }
    })
  }
  pull();
}*/
/*长轮询练习4*/
{
  let ajax = function* (num) {
    while (num > 0) {
      num--;
      yield new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve({code: num})
        }, 1000)
      })
    }
  }
  let generator = ajax(5);
  let pull = function () {
    let step = generator.next();
    step.value.then(function (d) {
      if (d.code == 0) {
        console.log(`等待结束,code==0`);
      } else {
        console.log(`code==${d.code},waite`);
        setTimeout(() => {
          pull();
        }, 1000)
      }
    })
  }
  pull()
}

/*长轮询练习5*/
/*{
  let ajax = function* () {
    yield new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve({code: 0})
      }, 1000)
    })
  }

  let pull = function () {
    let step = ajax().next();
    step.value.then(function (d) {
      if (d.code == 0) {
        console.log("长轮询练习5,code==0");
       /!* pull()*!/
      }else{
        console.log(d)
      }
    })
  }
  pull()
}*/
