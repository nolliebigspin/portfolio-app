const portfolioAPI = require ('./src/server/configure')

module.exports  = {
    devServer:{
        before: portfolioAPI
    }
}