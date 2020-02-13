// index, show, store, update, destroy
const User = require ('../models/User');

module.exports = {
    async store(req, res){
        const { name } = req.body;
        const { email } = req.body;
        const { age } = req.body;
        const { phone } = req.body;
        const { document } = req.body;
        // verifica se o usuario existe
        let user = await User.findOne({ document , email });

        // Deletar usuarios  
        //let user = await User.deleteOne({ document });

        if (!user) {
           user = await User.create({ document , email, age, phone, name });
        }
        return res.json(user);
    }
};