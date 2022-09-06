const globalMiddleware = (req, res, next) => {
    console.log("GLobal middleware started ");
    next();
    console.log("GLobal middleware ended");
};

module.exports = {
    globalMiddleware,
};