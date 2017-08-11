const tough = require('tough-cookie'),
    rp = require('request-promise'), {writeFile} = require('fs')
// Easy creation of the cookie - see tough-cookie docs for details
let cookies = new tough.CookieJar();

function login(account, pwd) {
    let cookiejar = rp.jar()
    const options = {
        method: 'POST',
        uri: 'http://www.xuetangx.com/v2/login_ajax',
        formData: {
            'username': account,
            'password': pwd,
            'remember': 'true'
        },
        headers: {
            'User-Agent': 'Mozilla/5.0'
        },
        jar: cookiejar
    }
    rp(options).then(function (body) {
        let cookie=cookiejar._jar.store.idx['www.xuetangx.com']['/']
        cookies.getCookies('http://www.xuetangx.com',(err,cookies)=>{
        console.log(cookies)

        })
        cookie=JSON.stringify(cookie)
        writeFile('./cookie.json', cookie, err => {})
    })
        .catch(function (err) {
            console.log(err)
        })
}
    login('290055513@qq.com', 'a7864548')
module.exports=login