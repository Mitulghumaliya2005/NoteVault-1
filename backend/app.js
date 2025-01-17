import express, { response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./Database/user.js";
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'
// 1.5 weeky dowl, security breach , # ,json web token create
const jwt_secret = "Kelvin@147"
const app = express();
app.use(cors());

// const saltRounds = process.env.SALT_ROUNDS;
const saltRounds = 10;


mongoose.connect("mongodb://127.0.0.1:27017/NoteVaultDB")
.then(()=>{
    console.log("Database is connected...");
})
.catch((error)=>{
    console.log(error);
})


app.get("/api/auth", (req, res) => {
    try {
        const a = jwt.verify(req.query.token, jwt_secret);
        User.findOne({id:a.id}).then((result)=>{
            res.json({ token: result, login: true , status: true })
        }).catch((err)=>{
            console.log(err)
        })

    } catch (err) {
        res.json({ login: false , status :  false})
    }
})



app.get("/sign-in",(req,res)=>{
    const email = req.query.email;
    const password = req.query.password;

    User.findOne({email : email}).then((result)=>{

        if(result){
            bcrypt.compare(password , result.password , (err , response)=>{
                if(err){
                    res.json({
                        error : "Error occured while signing in!"
                    })
                }else{
                    if(response){

                        const token = jwt.sign({
                            username: email,
                            id:result.id
                        }, jwt_secret)

                        res.json({
                            status : response,
                            data : result,
                            token : token
                        })

                    }else{

                        res.json({
                            status : false,
                            data : "Password is wrong"
                        })
                    }
                }
            })

        }else{
            res.json({
                error : "This account doesn't exist please register before signing in"
            })
        }

    }).catch((err)=>{
        console.log(err);
    })

})


app.get("/sign-up",(req,res)=>{
    const email = req.query.email;
    const password = req.query.password;

    bcrypt.hash(password , saltRounds , (err,hash)=>{
        if(err){

            res.json({
                error : "Error occured while signing up!"
            })

        }else{

            const newId = uuidv4()
            const user = new User({
                id: newId,
                email : email,
                password : hash
            })
            user.save();

            const token = jwt.sign({
                username: email,
                id:newId
            }, jwt_secret)

            res.json({
                status : true,
                data : user,
                token : token
            })
        }
    })
})



app.listen(4000 , ()=>{
    console.log("server is running on 4000");
})