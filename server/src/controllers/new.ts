
import { Request, Response } from "express";
import New from "../models/new"
import { newSchema } from "../schemas/product";

export const getAllN = async (req: Request, res: Response) => {
   
    try {
        const movies = await New.find()
        res.send(movies)
    } catch (err) {
        res.status(500).send({
            message: "Cố lỗi xảy ra"
        })
    }
        res.end()
     }
export const getN = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const movie = await New.findById(id)
        res.send(movie)
    } catch (err) {
        res.status(500).send({
            message: "Cố lỗi xảy ra"
        })
    }
    res.end()
}
export const createN = async (req: Request, res: Response) => {
    try {
        const { error } = newSchema.validate(req.body, { abortEarly: false })
        if (!error) {
            const movie = await New.create(req.body)
            res.send({
                massage: "Tạo mới movie thành công",
                data: movie
            })
        } else {
            const messages = error.details.map(item => item.message)
            res.status(400).send({
                message: messages
            })
        }
    } catch (err) {
        res.status(500).send({
            message: "Cố lỗi xảy ra"
        })
    }
    res.end()
};
export const updateN = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const { error } = newSchema.validate(req.body, { abortEarly: false })
        if (!error) {
            const movie = await New.findByIdAndUpdate(id, req.body)
            res.send({
                massage: "Cập nhật movie thành công",
                data: movie
            })
        } else {
            const messages = error.details.map(item => item.message)
            res.status(400).send({
                message: messages
            })
        }
    } catch (err) {
        res.status(500).send({
            message: "Cố lỗi xảy ra"
        })
    }
    res.end()
}

export const removeN = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const data = await New.findByIdAndDelete(id)
        if (data) {
            res.send({
                message: "Xoá movie thành công",
                data: data
            })
        } else {
            res.status(400).send({
                message: "Bản ghi không tồn tại"
            })
        }

    } catch (err) {
        res.status(500).send({
            message: "Cố lỗi xảy ra"
        })
    }
};
// export const restore = async (req, res: Response) => {
//     try {
//         const id = req.params.id as string;
//         const user = req.user as IUser;
//         const product = await Product.findById(id) as IProduct;

//         if (!user.role || user.role !== "admin") {
//             return res.status(403).json({
//                 message: "Bạn không có quyền phục hồi sản phẩm",
//             });
//         }
//         if (!product) {
//             return res.status(404).json({
//                 message: "Không tìm thấy sản phẩm",
//             });
//         }
//         if (!product.deleted) {
//             return res.status(400).json({
//                 message: "Sản phẩm chưa bị xóa mềm",
//             });
//         }

//         product.deleted = false;
//         product.deletedAt = null;

//         const restoredProduct = await product.save();

//         return res.status(200).json({
//             message: "Phục hồi sản phẩm thành công",
//             data: restoredProduct,
//         });
//     } catch (error) {
//         res.status(400).json({
//             message: "Phục hồi sản phẩm không thành công",
//             error: error.message
//         });
//     }
// };
