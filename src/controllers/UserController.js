const User = require("../models/User");
const Joi = require("@hapi/joi");

class UserController {
    async register(req, res) {
        const { name, email, password } = req.body;

        const schema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().lowercase().email().required().strict(),
            password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/)
        });

        const { error } = schema.validate({ name, email, password });

        if (error) {
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
            return res.status(400).send({ error: 'Registration failed' });
        }
    }
}

module.exports = new UserController();