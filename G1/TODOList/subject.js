/**
 * Created by P23460 on 12.12.2016.
 */

export default class Subject {
    constructor() {
        //assoziativer Array mit Array
        this.observers = [];
    }

    subscribe(topic, listenerObj, callbackFct) {
        if (this.observers[topic] == undefined) {
            this.observers[topic] = new Array();
        }
        this.observers[topic].push({
            obj: listenerObj,
            fct: callbackFct,
        });
    }

    unsubscribe(topic, listenerObj) {
        if(this.observers[topic]!=undefined){
            let observersForTopic = this.observers[topic];
            for (let i=0; i < observersForTopic.length;i++){
                if(observersForTopic[i].obj === listenerObj){
                    console.log("removing observer");
                    observersForTopic.splice(i,1);
                    return;
                }
            }
        }
    }

    notifyObservers(topic, param) {
        let observersForTopic = this.observers[topic];
        if(observersForTopic) {
            for (let observer of observersForTopic) {
                observer.fct.call(observer.obj, param);
            }
        }
    }
}
