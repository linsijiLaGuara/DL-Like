const handleErrors = (error, req, res, nex) => {
  console.log(typeof error);
  if (error) {
    res.status(500).send("error en el servidor");
  }
};

module.exports = { handleErrors };
