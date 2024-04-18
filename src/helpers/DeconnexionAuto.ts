import { useTokenStore, Token  } from "./GlobalDataStore";

export default class DeconnexionAuto {
    static timerId: NodeJS.Timeout | null = null;

    static deconnexionAuto(tokenTimeValid: number, setTokenData: (data: Token) => void) {
        this.arretTimeout();
        this.timerId = setTimeout(() => {
            console.log(useTokenStore.getState().tokenData.token);
            setTokenData({ expire: 0, token: null });
            //this.navigate('/');
        }, tokenTimeValid);
    }

    static arretTimeout() {
        if (this.timerId !== null) {
            clearTimeout(this.timerId);
        }
    }
}
