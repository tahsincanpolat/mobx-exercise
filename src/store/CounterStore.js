import { observable, action, makeAutoObservable } from 'mobx';


class CounterStore {
    @observable count = 1; // takip edilebilir değişken

    constructor(){ // Yapıcı methodu
        makeAutoObservable(this,{  // count adlı değişkeni takip edilebilir hale getiriyoruz.
            count:observable
        })
    }

    @action increment = () => {  // tetikleyici methodumuz 
        this.count++;
        //console.log(this.count);
    }

    @action decrement = () => {  // tetikleyici methodumuz 
        this.count--
        // console.log(this.count);
    }
}

export default new CounterStore()