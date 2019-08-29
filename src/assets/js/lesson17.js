/**
 * Created by dell on 2017/8/5.
 */
/*Decorator 修饰器
* 1、修饰器是一个函数
* 2、修改行为（或者说扩展类的功能）
* 3、修饰器修改类的行为（只在类中管用，别的地方不管用）
*
* 需要装一个包:
 npm install babel-plugin-transform-decorators-legacy --save-dev

 在.babelrc文件中增加一个插件
 "plugins":["transform-decorators-legacy"]
 * */

/*修饰器函数
* parameters:
*  target:修改的类本身
*  name:
*  descriptor:属性的描述对象
*
* */

{
    let readonly=function(target,name,descriptor){
        descriptor.writable=false;
        return descriptor
    };

    class Test{
        @readonly
        time(){
            return '2017-03-11'
        }
    }

    let test=new Test();

    // test.time=function(){
    //   console.log('reset time');
    // };

    console.log(test.time());
}


{
    let typename=function(target,name,descriptor){
        //给类增加静态属性
        target.myname='hello';
    }

    @typename
    class Test{

    }

    console.log('类修饰符',Test.myname);
    // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

//日志系统
{
    let log=(type)=>{
        return function(target,name,descriptor){
            let src_method=descriptor.value;
            descriptor.value=(...arg)=>{
                src_method.apply(target,arg);
                /*模拟埋点
                * new Image().src=一个接口
                * */
                console.info(`log ${type}`);
            }
        }
    }

    class AD{
        @log('show')
        show(){
            console.info('ad is show');
        }
        @log('click')
        click(){
            console.info('ad is click');
        }
    }

   /* let ad=new AD();
    ad.show();
    ad.click();*/
}

//日志系统练习
{
    let log=function(type){
        return function(target,name,descriptor){
            var src_method=descriptor.value;
            descriptor.value=()=>{
                src_method.apply(target);
                console.log(`log is ${type}`);
            }
        }
    }

    class AD{
        @log('show')
        show(){
            console.log("ad is show");
        }

        @log('click')
        click(){
            console.log("ad is click");
        }
    }

    let ad=new AD();
    ad.show();
    ad.click();
}