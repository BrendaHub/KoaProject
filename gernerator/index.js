/**
 * Created by bg_cloud on 17/5/9.
 */
function logger(format) {
    format = format || ':method ":url"'

    return function *(){
        var str = format.replace(':method', this.method)
            .replace(':url', this.url)
        console.log(str)

        yield next
    }
}

moduel.exports = logger