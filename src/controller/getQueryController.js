const operationsSchema = require('../models/operationsModel');

module.exports = async (req, res, next) => {
  try {
    res.status(200).json({message: 'ta feito '})
  } catch (error) {
    return res.status(400).json(error);
  }
};
