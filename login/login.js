const tough = require('tough-cookie'),
    rp = require('request-promise'), {writeFile} = require('fs')
// Easy creation of the cookie - see tough-cookie docs for details
let cookie = new tough.Cookie({key: "some_key", value: "some_value", domain: 'api.mydomain.com', httpOnly: true, maxAge: 31536000});

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
        const cookie=cookiejar._jar.store.idx['www.xuetangx.com']['/']
        writeFile('cookie.json', JSON.stringify(cookie), err => {})
    })
        .catch(function (err) {
            console.log(err)
        })
}
login('290055513@qq.com', 'a7864548')