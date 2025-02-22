import jwt from 'jsonwebtoken'

 const isAuthenticated = async(req,res,next) => {
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(400).json({
                message: "User not authenticated",
                success: false,
              });
        }
        const decodeToken = await jwt.verify(token,process.env.SECRET_KEY)
        if(!decodeToken){
            return res.status(400).json({
                message: "Invalid Token",
                success: false,
              });
        }
        req.id = decodeToken.userId
        next()
    } catch (error) {
        console.log(error);
        
    }
}

export default isAuthenticated