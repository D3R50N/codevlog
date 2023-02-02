function get_redirect(req) {
  let splitted = req.originalUrl.split("/");
  splitted.shift();
  splitted.shift();
  return splitted.join("/");
}
function text_overflow_ellipsis(text, maxLength=400) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + " [...]";
  }
  return text;
}

module.exports = {
  get_redirect,
  text_overflow_ellipsis
}