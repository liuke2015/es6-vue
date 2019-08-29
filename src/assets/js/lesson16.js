/**
 * Created by dell on 2017/8/4.
 */
{
    // genertaor基本定义
    let tell=function* (){
        yield 'a';
        yield 'b';
        return 'c'
    };

    let k=tell();

    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{
    let obj={};
    obj[Symbol.iterator]=function* (){
        yield 1;
        yield 2;
        yield 3;
    }

    for(let key of obj){
        console.log('value',key);
    }
}

{
    let state=function* (){
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status=state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

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
{
    let draw=function(count){
        console.info(`1-剩余${count}次`);
    }

    let residue=function*(count){
        while(count>0){
            count--;
            yield draw(count);
        }
    }
    let star=residue(5);
    let btn=document.createElement('button');
    btn.id='start';
    btn.textContent="抽奖";
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function(){
        star.next();
    })
}
/*抽奖练习1*/
{
    let draw=function(count){
        console.info(`2-剩余${count}次`);
    }
    let residue=function*(count){
        while(count>0){
            count--;
            yield draw(count);
        }
    }
    let star=residue(5);
    let btn=document.createElement('button');
    btn.id='start2';
    btn.textContent="抽奖2";
    document.body.appendChild(btn);
    document.getElementById('start2').addEventListener('click',function(){
        star.next();
    })
}
/*抽奖练习2*/
{
    let draw=function(count){
        console.log(`还剩${count}次`);
    };

    let residue=function*(count){
        while(count>0){
            count--;
            yield draw(count);
        }
    };

    let star=residue(5);
    let btn=document.createElement('button');
    btn.id='start3';
    btn.textContent="抽奖3";
    document.body.appendChild(btn);
    document.getElementById('start3').addEventListener('click',function(){
        star.next();
    })
}
{/* 长轮询*/
    let ajax=function*(){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({code:0})
            },200)
        })
    }

    let pull=function(){
        let generator=ajax();
        let step=ajax().next();
        step.value.then(function(d){
            if(d.code!=0){
                setTimeout(function(){
                    console.log('wait');
                    pull();
                },1000)
            }else{
                console.log(d);
            }
        })
    }
   // pull();
}

/* 长轮询练习1*/
{
    let ajax=function* (){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({code:0})
            },200)
        });
    }

    let pull=function(){
        let step=ajax().next();
        step.value.then(function(d){
            if(d.code!=0){
                setTimeout(function(){
                    console.info('1:waite');
                    pull();
                },1000)
            }else{
                console.info(d);
            }
        })
    }
   // pull();
}
/* 长轮询练习1*/
{
    let ajax=function*(){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({code:0})
            },1000);
        })
    };
    let pull=function(){
        let step=ajax().next();
        step.value.then(function(d){
            if(d.code!=0){
                console.log('2:waite');
                pull();
            }else{
                console.info(d);
            }
        })
    };
    //pull()
}
/* 长轮询练习2*/
{
    let ajax=function*(){
        yield new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({code:0})
            },1000)
        })
    };
    let pull=function(){
        let step=ajax().next();
        step.value.then(function(d){
            if(d.code!=0){
                console.log('3:waite');
                pull();
            }else{
                console.log(d)
            }
        })
    };
    pull();
}