import { ref, type Ref } from "@vue-mini/core";

async function useWxLogin() {
    return new Promise<Ref<WechatMiniprogram.LoginSuccessCallbackResult>>(
        (resolve, reject) => {
            wx.login({
                success: (res) => {
                    resolve(ref(res));
                },
                fail: (err) => {
                    reject(err);
                },
            });
        }
    );
}

export { useWxLogin };
