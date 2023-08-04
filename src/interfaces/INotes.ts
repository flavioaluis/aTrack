export enum TypeNotes {
  SUCCESS,
  FAIL,
  CAUTION
}

export interface Iinfo {
  id:number
  title: string
  text:string
  type:TypeNotes
}