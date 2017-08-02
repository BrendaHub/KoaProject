'use strict';


//将传入的参数
// var str = ;//'24ab_2t2';//'b\\__\\1UL0123__'//'\\23b_2__f4'//


//根据三个转换法则分别封装出三个方法
var $ = (chart,chartNext) => {
    var backStr = '';
    if((isNaN(chart) || parseInt(chart) === 0) &&  chart != '_'){
        backStr += chart
    }

    if(!isNaN(chart) && (chartNext === '')){
        backStr += chart
    }

    if(!isNaN(chart) && parseInt(chart) > 0 && chartNext != ''){
        for(let i = 1 ; i <= parseInt(chart)+1; i++){
            backStr += chartNext
        }
    }

    if(chart === '_'){
        backStr += '\\UL'
    }

    return backStr
};

var encode = (_param) => {
    var arr = [];
    var back_str = '';
    let str_param = _param || '';
    if(str_param === ''){
        console.log('请传入正常的参数！')
    }else{
        for(let i = 0 ; i < str_param.length ; i++){
            arr.push(str_param.substr(i, 1))
        }
    }

    for(let j = 0 ; j < arr.length ; j++){
        let chartNext = '';
        if(j+1 >= arr.length){
            chartNext = ''
        }else{
            chartNext = arr[j+1]
        }
        // console.log('sss333sss>' + back_str)
        // console.log(">>" + arr[j])
        back_str += $(arr[j], chartNext);
        // console.log('sss>' + back_str)
        if(j != arr.length -1 )
            back_str += '_'
    }
    return back_str
};
//解密
var decode = (_param) =>{
    var backStr = '';
    _param = _param || '';
    if(_param === ''){
        console.log('请输入正确的参数....')
    }else{
        var regx = /(\_)\1+/g;//正则表达式，用来匹配多个_的串
        // if((_param.match(regx)).length > 1){
        try{
            _param =  _param.replace(regx, '_'+(_param.match(regx)[0].length - 3) + '&_' )
        }catch(e){
            
        }
        // }
        
        // console.log('>>' + _param)
        //再以_下划线分隔
        var _arr = _param.split('_');
        _arr.forEach(function(vla,index) {
            // console.log('vla = ' + vla)
            if(vla === '\\UL'){
                backStr += '_'
            }

            if(vla.length > 1 && vla.indexOf('&') === -1 && vla != '\\UL'){
                backStr += vla.length -1 ;
            }

            if(parseInt(vla) === 0 ){
                backStr += vla
            }

            if(isNaN(vla) && vla != '\\UL' && vla.length === 1 ){
                backStr += vla
            }

            if(!isNaN(vla) && index === _arr.length - 1){
                backStr += vla
            }

            if(vla.indexOf('&') != -1){
                backStr += vla.substr(0,1)
            }

        }, this);
      
    }
    return backStr
};

// console.log(isNaN(3))


console.log(encode('__0a\\U\\3_4b\\\\'));
console.log(encode('24ab_2t2'));
console.log(encode('b\\__\\1UL0123__'));
console.log(encode('\\23b_2__f4'));

console.log(decode(encode('__0a\\U\\3_4b\\\\')));
console.log(decode(encode('24ab_2t2')));
console.log(decode(encode('b\\__\\1UL0123__')));
console.log(decode(encode('\\23b_2__f4')));
// 