const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next) //With this code we work around all the try catch function in the routers
}

export default asyncHandler