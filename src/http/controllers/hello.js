function hello(request, response) {
    response.status(200).json({ message: "Hello world."})
}

module.exports = { hello }