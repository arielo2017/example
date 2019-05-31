
export class Post
{
    private _datepost: any;
    private _post: any;
    public get datepost(): any {
        return this._datepost;
    }
    public set datepost(value: any) {
        this._datepost = value;
    }
  
    public get post(): any {
        return this._post;
    }
    public set post(value: any) {
        this._post = value;
    }

    constructor(datepost:any,post:any)
    {
        this._datepost=datepost;
    }    
}