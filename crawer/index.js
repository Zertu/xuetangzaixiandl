const tough = require('tough-cookie'),
    rp = require('request-promise'), {readFile, writeFile} = require('fs');
function praseHtml() {}
readFile('./cookie.json', 'utf8', (err, data) => {
    const cookie = new tough.Cookie(JSON.parse(data))
    const cookiejar = rp.jar();
    cookiejar.setCookie(cookie, 'http://www.xuetangx.com');
    const option={
        uri:'http://www.xuetangx.com/courses/course-v1:UST+UST001+sp/courseware/4901aa53fc704550b2fa713b0830cca1/',
        headers: {
            'User-Agent': 'Mozilla/5.0'
        },
        jar:cookiejar
    }
    rp
        .get(option)
        .then(data => writeFile('./file.html', data, err => console.log(err)))
})

module.exports = praseHtml