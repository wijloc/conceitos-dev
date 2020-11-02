import {Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response){
  const user = createUser('Willian', 'wijloc@gmail.com', '12345679');

  return response.json({ message : 'Hello World'});  
}