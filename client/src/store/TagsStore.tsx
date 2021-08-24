import {makeAutoObservable} from "mobx";
import {tagModel} from "./Models";

export class Tag {

}

export default class TagsStore {
    constructor() {
        this._tags = []
        this._selectedTag = new tagModel();

        makeAutoObservable(this);
    }

    private _tags: tagModel[];
    private _selectedTag: tagModel;


    public setTags(tags: tagModel[]) {
        this._tags = tags;
    }

    get tags() {
        return this._tags;
    }

    public setSelectedTag(tag: tagModel) {
        this._selectedTag = tag;
    }

    get selectedTag() {
        return this._selectedTag;
    }

}