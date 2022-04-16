
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from '../entities/Food';
import {cleanAccents} from '../function/function';

@Injectable()
export class FoodService {
    constructor(
        @InjectRepository(Food)
        private foodRepository: Repository<Food>,
    )   {}

    
    async findAll(): Promise<Food[]> {
        console.log("Da vao ");
      return this.foodRepository.find();
    }

    async searchFood(name : string ) : Promise<Food []> {

            
            if(name)
            { 
                const listFood = await  this.foodRepository.find({});
                 const listfilter = await listFood.filter((el)=>{
                    return  cleanAccents(el['nameFood']).toLowerCase().indexOf(cleanAccents(name).toLowerCase()) === 0 
                 })
                return listfilter;
            }
            else
            { 
                return [];
            }
       

       
    }


    // async searchId(id : string) : Promise<Food[]>{
    //     if(id)
    //     {
    //         const listFood = await this.foodRepository.find({id : })
    //     }
    //     else
    //     { 
    //         return [];
    //     }
    // }
}
