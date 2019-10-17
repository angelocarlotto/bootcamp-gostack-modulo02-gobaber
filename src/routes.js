import {Router} from "express";
const routes=new Router();

routes.get("/",(req,res)=>{
    return res.json({message:"Hello ss rrr WOrld"})
});


export default routes;