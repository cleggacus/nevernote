import mongoose from "mongoose";
import bcrypt from "bcrypt" ;
import jwt from "jsonwebtoken";
import {usernameValid, passwordValid} from '../helpers/validators';
import User from "../models/user";

const resolveServerError = (err: string|object, res: any) => {
  err = typeof err == "string" ? err : "Server error";

  res.status(500).json({
    mes: err
  });
}

export const register = (req: any, res: any, next: any) => {
  const id = new mongoose.Types.ObjectId();

  req.body.username = req.body.username.toLowerCase();
  
  usernameValid(req.body.username)
    .then(() => passwordValid(req.body.password))
    .then(() => User.find({ username: req.body.username }).exec())
    .then((user: any) => {
      if (user.length >= 1) {
        throw "Username already exists";
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            throw err;
          } else {
            const user = new User({
              _id: id,
              username: req.body.username,
              password: hash
            });
            
            return user.save();
          }
        });
      }
    }).then(() => {
      res.status(201).json({
        id: id,
        mes: "User was created successfully"
      });
    }).catch(err => resolveServerError(err, res));
};

export const login = (req: any, res: any, next: any) => {
  req.body.username = req.body.username.toLowerCase();

  User.findOne({ username: req.body.username }).exec()
    .then((user: any) => {
      if (!user) {
        return res.status(401).json({
          mes: "Auth failed"
        });
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            mes: "Auth failed"
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              username: user.username,
              userId: user._id
            },
            process.env.JwtSecret as string,
            {
              expiresIn: "1h"
            }
          );

          return res.cookie('jwt', token,{
            expires: new Date(Date.now() + 1000 * 60 * 60), 
            httpOnly: true
          }).status(200).json({
            mes: "Auth was successful",
            token: token
          });
        }
        res.status(401).json({
          mes: "Auth failed"
        });
      });
    })
    .catch((err: any) => resolveServerError(err, res));
};

export const getCurrentUser = (req: any, res: any, next: any) => {
  User.findOne({ _id: req.userData.userId }).exec()
  .then((user: any) => {
    if (!user) {
      return res.status(401).json({
        mes: "User not found"
      });
    }
    
    res.status(200).json({
      id: user._id,
      username: user.username,
      picture: user.picture,
      theme: user.theme,
      mes: "Current User found"
    });
  }).catch((err: any) => resolveServerError(err, res));
}

export const getPublic = (req: any, res: any, next: any) => {
  if(req.body.username)
    req.body.username = req.body.username.toLowerCase();

  let mongoReq = req.body.username ? User.findOne({ username: req.body.username }).exec() : User.findOne({ _id: req.body.id }).exec();

  mongoReq.then((user: any) => {
    if (!user) {
      return res.status(401).json({
        mes: "User not found"
      });
    }
    
    res.status(200).json({
      id: user._id,
      username: user.username,
      picture: user.picture,
      mes: "User found"
    });
  }).catch((err: any) => resolveServerError(err, res));
}

export const updateTheme = (req: any, res: any, next: any) => {
  req.body.theme = req.body.theme > 2 || req.body.theme < 0 ? 0 : req.body.theme;
  User.update({ _id: req.userData.userId }, {$set : {theme: req.body.theme}}).exec()
    .then((result: any) => {
      res.status(200).json({
        mes: "Theme updated"
      });
    }).catch((err: any) => resolveServerError(err, res));
}

export const logOut = (req: any, res: any, next: any) => {
  return res.clearCookie("jwt").status(200).json({
    mes: "Logged out"
  });
}

export const validateUsername = (req: any, res: any, next: any) => {
  req.body.username = req.body.username.toLowerCase();
  
  usernameValid(req.body.username).then(() => {
    return User.findOne({ username: req.body.username }).exec();
  }).then((user: any) => {
    if (user) {
      throw "Username exists";
    } else {
      res.status(200).json({
        mes: "Success"
      });
    }
  }).catch(err => resolveServerError(err, res));
};