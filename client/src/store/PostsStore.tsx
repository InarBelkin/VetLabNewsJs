import {makeAutoObservable} from "mobx";
import {postModel} from "./Models";

class PostsStore {
    constructor() {

        this._posts = []
        this._page = 1;
        this._totalCount = 0;
        this._limit=10;
        makeAutoObservable(this);
    }


    private _posts: postModel[];

    private _page;
    private _totalCount;
    private _limit;

    public setPosts(posts: postModel[]) {
        this._posts = posts;
    }

    get posts() {
        return this._posts;
    }

    public setPage(page:number){
        this._page = page;
    }

    get Page(){
        return this._page;
    }

    public setTotalCount(count:number|null){
        this._totalCount = count? count:1;  //исправить
    }

    get TotalCount(){
        return this._totalCount;
    }

    public setLimit(limit:number){
        this._limit = limit;
    }

    get Limit(){
        return this._limit;
    }

}
export const postStore = new PostsStore();
