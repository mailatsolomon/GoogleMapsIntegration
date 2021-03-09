import tokenValidationService from "../utils/tokenValidationService";
import errorReturnsEntity from '../entities/errorReturnsEntity';

const authMiddleware = async (req, res, next) => {
  if (!req.headers.access_token) {
    return res.status(400).json(errorReturnsEntity.accessTokenRequired);
  }

  try {
    const userId = await tokenValidationService(req.headers.access_token);

    if (userId == "Access Token has expired") {
      return res.status(400).json(errorReturnsEntity.sessionExpired);
    } else if (userId == "Access Token has been revoked") {
      return res.status(400).json(errorReturnsEntity.tokenNotExist);
    } else if (userId == "Invalid Access Token") {
      return res.status(400).json(errorReturnsEntity.tokenNotExist);
    } else {
      next();
    }

  } catch (err) {
    res.status(401).json(errorReturnsEntity.invalidToken);
  }
}

export default authMiddleware;
