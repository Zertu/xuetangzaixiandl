const login = require('./login/login'),
praseHtml=require('./crawer/index')
async function main() {
    await login('290055513@qq.com', 'a7864548')
    praseHtml()
}