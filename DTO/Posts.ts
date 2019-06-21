
export class Post
{
    private _datepost: any;
    private _post: String;
    public get datepost(): any {
        return this._datepost;
    }
    public set datepost(value: any) {
        this._datepost = value;
    }
  
    public get post(): String {
        return this._post;
    }
    public set post(value: String) {
        this._post = value;
    }

    constructor(datepost:any,post:String)
    {
        this._datepost=datepost;
    }    
}