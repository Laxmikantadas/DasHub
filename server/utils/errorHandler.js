export const errorHandler=(statusCode,message="something went wrong")=>{
    const error=new Error(message)
    error.statusCode=statusCode
}