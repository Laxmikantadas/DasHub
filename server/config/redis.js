import {Redis} from "ioredis"

const redisClient=()=>{
    if(process.env.REDIS_URL){
        console.log('redis is connected');
        return process.env.REDIS_URL
    }
    throw new Error('redis is not connected')
}

export const redis=new Redis(redisClient())