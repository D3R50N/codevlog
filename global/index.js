function get_redirect(req) {
  let splitted = req.originalUrl.split("/");
  splitted.shift();
  splitted.shift();
  return splitted.join("/");
}

module.exports = {
    get_redirect,
}