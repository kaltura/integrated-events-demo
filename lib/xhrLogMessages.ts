export class XhrLogMessage {
    public objectType: string;
    public isCached: boolean = false;
    public isFetched: boolean = false;
    public isCreated: boolean = false;
    public timing: number = 0;
    public msg: string = '';

    constructor(objectType: string, options: object) {
        this.objectType = objectType;
        const thisProps = Object.getOwnPropertyNames(this);
        thisProps.forEach( (propName, index) => {
            if(options.hasOwnProperty(propName)) {
                this[propName] = options[propName];
            }
        })
    }
}
export class xhrLogMessages {
    private static messages: Map<string, XhrLogMessage> = new Map();
    static addMessage(data: XhrLogMessage) {
        xhrLogMessages.messages.set(data.objectType, data);
    }

    static getMessagesAsHeaderString() {
        const res = {};
        this.messages.forEach( (v, k) => {
            res[k] = v;
        })
        return JSON.stringify(res);
    }

    static clearMessages() {
        this.messages = new Map();
    }
}