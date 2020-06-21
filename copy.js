module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                assets:"@/assets",
                components:"@/components",
                views:"@/views"
            }
        }
    },
    devServer:{
        // /api/getMenu相当于http://localhost:25000/mock/5ecc7dd726e9404a34405e46/getMenu
        // /api相当于http://localhost:25000/mock/5ecc7dd726e9404a34405e46
        proxy:{
            "/api":{
                target:"http://localhost:25000/mock/5ecc7dd726e9404a34405e46",//要代理的域名
                changeOrigin:true,//允许跨域
                pathRewrite:{
                    "^/api":""//路径重写
                }
            }
        }
    }
}