const asynchHandler =(requestHandler) =>{
  return (req,res,next)=>{

        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>{next(err)})
    }

}
export {asynchHandler}

// const asynchHandler =(fn)=> async(req,res,next) =>{
//     try{
//         await fn(req ,res,next)

//     }catch(error){
//         req.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }