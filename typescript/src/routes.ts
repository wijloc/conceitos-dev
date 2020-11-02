import {Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response){
  const user = createUser({
    name: 'Willian',
    email: 'wijloc@gmail.com',
    password: '123456789',
    techs: ['Node.js', 'ReactJS', 'React Native']
  });    

  return response.json({ message : 'Hello World'});  
}