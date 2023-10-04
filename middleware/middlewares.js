import colors from "colors";
export function requestTime(req, resp, next) {
  req.requestTime = Date.now();
  next();
}
export function logger(req, resp, next) {
  console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`));
  next();
}
