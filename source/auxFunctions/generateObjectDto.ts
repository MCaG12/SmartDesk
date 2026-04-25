import { Request , Response } from "express";


export function generateDTO<T extends object>(templateInterface: T, req: Request, nullables : string[]): T | string
{
    const keys = Object.keys(templateInterface) as (keyof T)[];
    const result = {} as T;

    for(const key of keys){
    if (req.body[key] == null && !nullables.includes(key as string) ) {
      return `key ${String(key)} is missing in body!`;
    } else {
      result[key] = req.body[key];
    }
  }

  return result;
}