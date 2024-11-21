export const errorHandler=(statusCode,message="Somthing went worng",errors)=>{
    const error=new Error(message)
    error.statusCode=statusCode
    error.error=errors
    return error
}
