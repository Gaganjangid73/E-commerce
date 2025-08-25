const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user')

//signup
const register = async(req, res) =>{
    const [username,email,password] = req.body;
    try {
        const hashpassword =  await bcrypt.hash(password,50);
        const newuser = new User({username,email,password: hashpassword });

        await newuser.save();
        res.status(200).json({
            success : true,
            message: " user Successfully Signup"
        })
        
    } catch (e) {
        
        console.log(e);
        res.status(500).json({
            success : false,
            message : "some error Occur"
        }
        )
        
    }
}

//login
const login = async(req, res) =>{
   
    try {
        
    } catch (e) {
        
        console.log(e);
        res.status(500).json({
            success : false,
            message : "some error Occur"
        }
        )
        
    }
}