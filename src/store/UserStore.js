import { action, configure, makeAutoObservable, observable, runInAction } from 'mobx'
import axios from 'axios';


configure({
    enforceActions: 'observed'
})

class UserStore{
    @observable users = [];
    @observable loading = false;
    @observable error = '';

    constructor(){
        makeAutoObservable(this,{
            users:observable,
            loading:observable,
            error:observable
        })
    }

    @action async fetchUsers(){
        this.loading = true;
        this.error='';
        this.users=[];

        try{
            const{data:{results}} = await axios.get('https://randomuser.me/api?results=10');
            runInAction(()=>{
                this.users = results;
                this.loading = false;
            })
        }
        catch(e){
            runInAction(()=>{
                this.loading=true;
                this.error='Error Api not working !';
            });
        }




    }

}

export default new UserStore();