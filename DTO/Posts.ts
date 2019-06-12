
export class Post
{
    private _datepost: any;
    private _post: string;
    public get datepost(): any {
        return this._datepost;
    }
    public set datepost(value: any) {
        this._datepost = value;
    }
  
    public get post(): string {
        return this._post;
    }
    public set post(value: string) {
        this._post = value;
    }

    constructor(datepost:any,post:string)
    {
        this._datepost=datepost;
    }    
}