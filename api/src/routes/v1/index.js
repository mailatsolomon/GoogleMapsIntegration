import { Router } from "express";
const router = Router();
import { secrets } from "../../utils/secrets";

import maps from './maps';

router.get("/", (_req, res) => {
  var params = {
    SecretId: process.env.AWS_SECRETS_MANAGER_SECRET_ID /* required */,
  };
  secrets.getSecretValue(params, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });
  res.status(200).json({
    message: "hello from v1",
  });
});

router.use('/maps', maps);

export default router;
