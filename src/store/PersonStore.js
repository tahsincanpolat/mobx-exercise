import {action, autorun, computed, configure, makeAutoObservable, observable, runInAction} from 'mobx';

// observed ifadesi olmadan mobx kullanamam
configure({
    enforceActions:"observed"
});

class PersonStore{
    @observable firstName="None";
    @observable lastName="None";

    constructor(){
        autorun(()=>{
            console.log(`${this.firstName} - ${this.lastName}`);
        });

        makeAutoObservable(this,{
            firstName:observable,
            lastName:observable
        })
    }

    @action changeName(){
        setTimeout(()=>{
            runInAction(()=>{
                this.firstName = "Tahsin";
                this.lastName = "Canpolat"
            });
        },2000)
    }
    
    @computed get fullName(){
        return `${this.firstName} ${this.lastName}`
    }



}

export default new PersonStore()