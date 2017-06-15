/**
 * Created by bg_cloud on 17/6/9.
 */
for(var i = 1 ; i <=5; i ++){
    (function(varl){
        setTimeout(function timer(){
            console.log(varl)
        }, varl * 1000)
    })(i)

}