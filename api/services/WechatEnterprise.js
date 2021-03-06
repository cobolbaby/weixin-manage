/**
 * wechat enterprise utility function
 */

module.exports = {


    /**
     * AccessToken是企业号的全局唯一票据，调用接口时需携带AccessToken。
     * AccessToken需要用CorpID和Secret来换取，不同的Secret会返回不同的AccessToken。
     * 正常情况下AccessToken有效期为7200秒，有效期内重复获取返回相同结果。access_token至少保留512字节的存储空间。
     * 
     * 请求说明
     * Https请求方式: GET
     * https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=id&corpsecret=secrect
     * 
     * corpid - 企业Id
     * corpsecret - 管理组的凭证密钥
     * 每个secret代表了对应用、通讯录的不同权限；不同的管理组拥有不同的secret
     * 
     * 正确的Json返回结果:
     * {
     *  "access_token": "accesstoken000001",
     *  "expires_in": 7200
     * }
     * 
     */
    getAccessToken: function(cb) {
        // ...
        cb(null, null)
    },

    /**
     * 将之前请求到的accessToken保存下来供后续调用使用.
     */
    saveAccessToken: function(accessToken) {

    }
};