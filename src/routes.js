import {Router} from "express";
const routes=new Router();

routes.get("/",(req,res)=>{
    return res.json({message:"Hell22o ss rrr WOrld"})
});


export default routes;