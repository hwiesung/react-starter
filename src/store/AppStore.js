import {observable} from "mobx";
import {AUTH_STATE} from "../common/Constants";

const Cookies = require('js-cookie');
const COOKIE_TOKEN_KEY = 'tplace-token';

export default class AppStore {
    @observable authState = AUTH_STATE.NOT_DEFINED;
    @observable accessToken = '';

    init() {
        console.log('init');
        this.checkSeession();
    }

    checkSeession(){
        this.accessToken = this.getAccessToken();
        if(this.accessToken) {
            this.authState = AUTH_STATE.LOGIN;
        }
        else{
            this.authState = AUTH_STATE.NOT_LOGIN;
        }
    }

    getAccessToken(){
        let token = Cookies.get(COOKIE_TOKEN_KEY);
        let auth = null;
        if(token){
            let tokens = token.split('/');
            auth = {
                accessToken : tokens[0],
                refreshToken : tokens[1]
            };
        }
        return auth?auth.accessToken : null;
    }
}
