module.exports = {
    login(req, res){
        let name = req.body.name
        res.json({
            message:   `hello ${ name }`
        })
    }

}