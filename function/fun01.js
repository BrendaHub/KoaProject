/**
 * Created by bg_cloud on 17/6/5.
 */

function sayHello(value){
    console.log('Hello , ' + value)
}

function someThingSay(funcationName, value){
    funcationName(value)
}

someThingSay(sayHello, 'scala');

function execute(someFun, value){
    someFun(value)
}

execute(function(value){console.log('Hello, ' + value)}, 'Spark, Scala');