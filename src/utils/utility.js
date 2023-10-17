export default getErrorMsgColor = (errorMessage) => {
  switch (errorMessage) {
    case "ERROR":
      "red";
      break;
    default:
      "green";
  }
};
