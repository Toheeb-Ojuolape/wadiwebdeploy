export interface Project {
    author:string | null;
    email:string;
    name:string;
    date:string;
    field:string;
    file:string;
    journal:string;
    progress:string;
    slug:string;
    status:string;
    timestamp:number;
    title: string;
    step: number;
    type:string
    amount?:string;
  }