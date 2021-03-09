const errorReturnsEntity = {
    credentialsAreRequired: {
      code: 2,
      message: "Credential/s is/are required.",
    },
    accessTokenRequired: {
      code: 2,
      message: "Access Denied. Missing token.",
    },
    dataAlreadyExist: {
      code: 3,
      message: "Data already exist.",
    },
    userAlreadyExist: {
      code: 3,
      message: "User already exist.",
    },
    dataDoesNotExist: {
      code: 0,
      message: "Data doesn't exist.",
    },
    userDoesNotExist: {
      code: 4,
      message: "User doesn't exist.",
    },
    noDataFound: {
      code: 5,
      message: "No data found.",
    },
    sessionExpired: {
      code: 6,
      message: "Session has expired. Kindly log-in",
    },
    tokenExpired: {
      code: 6,
      message: "Token has expired, kindly log-in",
    },
    incorrectCredentials: {
      code: 7,
      message: "Incorrect Credential/s.",
    },
    incorrectData: {
      code: 7,
      message: "Incorrect Data.",
    },
    emailIsNotAvailable: {
      code: 8,
      message: "Email is not available.",
    },
    tokenNotExist: {
      code: 9,
      message: "Access denied, Invalid token. Kindly log-in",
    },
    userIdDoesNotMatched: {
      code: 10,
      message: "Access denied. Token user ID doesn't matched to request id.",
    },
    incorrectConfirmationCode: {
      code: 12,
      message: "Incorrect confirmation code.",
    },
    invalidSession: {
      code: 13,
      message: "Access denied, Invalid Session. Kindly log-in",
    },
    invalidToken: {
      code: 13,
      message: "Access denied, Invalid Token. Kindly log-in",
    },
    userNotVerified: {
      code: 14,
      message: "User not verified.",
    },
    userAlreadyVerified: {
      code: 15,
      message: "User already verified.",
    },
    homeExist: {
      code: 1001,
      message: "Home already exist. Please try a new home name.",
    },
    roomExist: {
      code: 1004,
      message: "Room already exist. Please try a new room name.",
    },
    roomIdDoesNotExist: {
      code: 1005,
      message: "Room ID does not exist. Please enter a valid room id.",
    },
    homeDoesNotExist: {
      code: 1003,
      message: "Home does not exist. Please try a new home.",
    },
    noHomeAddedYet: {
      code: 1002,
      message: "No home added yet.",
    },
    noSendingOfPushNotification: {
      code: 16,
      message: "No Sending of Push Notification.",
    },
    latLongRequired: {
      code: 3001,
      message: "Latitude/Longitude is required."
    },
    googleMapError: {
      code: 3002,
      message: "Google Map Error"
    },
    failedSendingOfPushNotification: {
      code: 17,
      message: "Sending Failed.",
    }
  };
  
  export default errorReturnsEntity;
  