const database = require('../dbconfig')

const AddLike = async (titulo) => {

    try {
        const consulta = "INSERT INTO POSTS (titulo) VALUE ($1) RETURNING *"
        const values = [titulo]
        const result = await database.query(consulta, values)
        if (result.rowCount) {
            return {
                mgs: "Post agregado",
                data: result.rows[0]
            }
        } else {
            return {
                mgs: "Post agregado",
                data: []
            }
        }
    } catch (error) {
        throw error

    }
}
const getLike = async () => {
    try {
        const consulta = "SELECT * FROM POSTS "
        const { rows } = await database.query(consulta)

        if (rows.length) {
            return {
                mgs: "Post tomado",
                data: rows
            }
        } else {
            return {
                mgs: "No existen post",
                data: []
            }
        }

    } catch (error) {
        throw error
    }
}

const likeCollection{
    AddLike,
    getLike
}

module.exports = { likeCollection }