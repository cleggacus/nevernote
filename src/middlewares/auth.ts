import jwt from 'jsonwebtoken';

export default (req: any, res: any, next: any) => {
  try {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.JwtSecret as string);
      
    if (!decoded) {
      return res.status(401).json({
        message: 'Auth failed'
      });
    }else {
      req.userData = decoded;
      next();
    }
  } catch (err) {
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
};