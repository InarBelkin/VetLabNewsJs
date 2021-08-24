import {makeAutoObservable} from "mobx";
import {postModel} from "./Models";


export default class PostsStore {
    constructor() {

        this._posts = []
        makeAutoObservable(this);
    }

    private _posts: postModel[];

    public setPosts(posts: postModel[]) {
        this._posts = posts;
    }

    get posts() {
        return this._posts;
    }

}