export class tagModel{
    constructor() {
        this.id='default';
        this.name='defaultName';
        this.description='';
    }
    id: string;
    name: string;
    description: string;
}

export class userModel{
    constructor( isGuest?:boolean) {
        this.id = "default";
        this.email = isGuest ? "Гость" : "default";
        this.roles=[];
    }
    id: string;
    email: string;
    roles: roleModel[];
}

export class roleModel{
    constructor() {

    }
    id: string | undefined;
    name: string | undefined;
    description: string | undefined;
}

export class postModel{
    constructor() {
        this.id="";
        this.title= '';
        this.date=new Date();
        this.contentPreview = '';
        this.content = '';
        this.deleted = false;
        this.tags = [];
    }

    id: string;
    title: string;
    date:Date;
    contentPreview:string;
    content: string;
    deleted: boolean;
    tags: tagModel[];
}