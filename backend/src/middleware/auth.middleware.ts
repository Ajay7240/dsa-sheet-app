import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env";

interface JwtPayload {
    userId: string;
}

// extend Express Request type
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}


export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({message: "Unauthorized"})
    }

    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({message: "Invalid Token"});
    }
};