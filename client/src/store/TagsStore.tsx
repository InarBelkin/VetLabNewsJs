import {makeAutoObservable} from "mobx";
import {tagModel} from "./Models";

class TagsStore {
    constructor() {
        this._tags = []
        this._selectedTag = null;

        makeAutoObservable(this);
    }

    private _tags: tagModel[];
    private _selectedTag: tagModel|null;


    public setTags(tags: tagModel[]) {
        this._tags = tags;
    }

    get tags() {
        return this._tags;
    }

    public setSelectedTag(tag: tagModel|null) {
        this._selectedTag = tag;

    }

    get selectedTag() {
        return this._selectedTag;
    }

}

export const tagStore = new TagsStore();