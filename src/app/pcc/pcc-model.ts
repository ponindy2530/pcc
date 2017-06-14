export class Pcmodel {
    id: number;
    cid: string;
    usernames: string;
    fullname: string;
    subject: string;
    article: string;
    url_youtube: string;
    files: any;
    hcode: string;
    st: number;
    hname: string;
    groups: any = 0;
    stlock:number = 1;
}

export class Regis {
    id: number;
    usernames: string;
    passwords: string;
    fullname: string;
    position: string;
    tol: string;
    email: string;
    groups: number = 0;
    in_out: number = 1;
    st: number = 1;
    confirm: number;
    hcode: string;
}