
import joi from 'joi';

export const productSchema = joi.object({
    name: joi.string().required(),
    img: joi.string().required(),
    desc: joi.string().required(),
    app:joi.string().required()
});
export const userSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
    name: joi.string(),
    role:joi.string().required()
});
export const newSchema = joi.object({
    img: joi.string().required(),
    title: joi.string().required(),
    content:joi.string().required(),
    date:joi.string()
});
// export const categoryProductSchema = joi.object().shape({
//     name: joi.string().trim().required(),
//     description: joi.string().required(),
//     products: joi.array().of(
//         joi
//             .string()
//             // regular expression để validate ObjectId.
//             //
//             .matches(/^[0-9a-fA-F]{24}$/)
//             .required()
//     ),
// });
