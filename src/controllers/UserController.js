const User = require("../models/User");

class UserController {
    async register(req, res) {
        const { name, email, password } = req.body;

        if (name === "" || email === "" || password === "") {
            return res.status(400).send({ msg: "Dados inválidos" });
        }

        try {
            if (await User.findOne({ email })) {
                return res.status(400).send({ msg: "E-mail já existente" });
            }

            const user = await User.create(req.body);

            return res.status(201).send({
                id: user.id,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
                lastLogin: user.createdAt
            });
        } catch (err) {
            console.error({err});
            return res.status(400).send({ error: 'Registration failed' });
        }
    }
}

module.exports = new UserController();