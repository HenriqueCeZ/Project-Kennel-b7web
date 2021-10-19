import { CreateMenuObject } from '../helpers/createMenuObject';
import {Request, Response} from 'express';
import {Pet} from '../models/pets'

 export const home = (req: Request, res: Response) =>{
    const list = Pet.getAll();
      res.render('pages/page',{
          menu: CreateMenuObject('all'),
          banner: {
              title: 'Todos os animais',
              background: 'allanimals.jpg'
          },
          list
      });

}
export const dogs = (req: Request, res: Response) =>{
    const list = Pet.getFromType('dog');
    res.render('pages/dogs',{
        menu: CreateMenuObject('dog'),
        banner: {
            title: 'Dogs',
            background: 'banner_dog.jpg'
        },
        list
    });

}
export const cats = (req: Request, res: Response) =>{
    const list = Pet.getFromType('cat');
    res.render('pages/cats',{
        
        menu: CreateMenuObject('cat'),
        banner: {
            title: 'Cats',
            background: 'banner_cat.jpg'
        },
        list
    });

}
export const fishes = (req: Request, res: Response) =>{
    const list = Pet.getFromType('fish');
    res.render('pages/fishes',{
        menu: CreateMenuObject('fish'),
        banner: {
            title: 'Fishes',
            background: 'banner_fish.jpg'
        },
        list
    });


}