const Initiative = require("../Module/Initiative");
require("dotenv").config();

exports.createInitiative = async (req, res) => {
  try {

    const {title, description,location,date}= req.body;
    if(!title || !description || !location || !date){
        return res.status(400).json({
            success: false,
            message: 'Data Miss',
            
        })
    }
    const newInitiative = await Initiative.create({title, description, location, date})
    const allInitiative = await Initiative.find({});
    return res.status(200).json({
        success: true,
        message: 'Initiative Created Successfully',
        allInitiative
    })
  } catch (e) {}
};

exports.getAllInitiative = (req, res) => {
  try {

  } catch (e) {}
};
