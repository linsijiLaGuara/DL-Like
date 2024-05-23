const database = require("../dbconfig");

const AddLike = async (titulo, img, descripcion) => {
  try {
    const consulta =
      "INSERT INTO POSTS (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *";
    const values = [titulo, img, descripcion];
    const result = await database.query(consulta, values);
    if (result.rowCount) {
      return {
        msg: "Post agregado",
        data: result.rows[0],
      };
    } else {
      return {
        msg: "Post no agregado",
        data: [],
      };
    }
  } catch (error) {
    console.error("Error en AddLike:", error);
    throw error;
  }
};

const getLike = async () => {
  try {
    const consulta = "SELECT * FROM POSTS";
    const { rows } = await database.query(consulta);
    if (rows.length) {
      return {
        msg: "Post tomado",
        data: rows,
      };
    } else {
      return {
        msg: "No existen posts",
        data: [],
      };
    }
  } catch (error) {
    console.error("Error en getLike:", error);
    throw error;
  }
};

const likeCollection = {
  AddLike,
  getLike,
};

module.exports = { likeCollection };
