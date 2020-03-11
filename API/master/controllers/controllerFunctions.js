const Furniture = require("../models/Furniture");

//GET Request (Grabs EVERYONE)
exports.getEmAll = async (req, res) => {
  try {
    const everyBody = await Furniture.find();
    res.status(200).json({ message: "All Furniture", data: everyBody, size: everyBody.length });
  } catch (err) {
    res.status(404).json({ message: "There is NO furniture" });
  }
};

//GET Request (Grabs item by it's ID)
exports.getOne = async (req, res) => {
  try {
    const onlyOne = await Furniture.findById(req.params.id);
    res.status(200).json({ message: "One Furniture", data: onlyOne });
    //You can get properties by doing onlyOne.pageNumber or onlyOne.unitPrice, etc
  } catch (err) {
    res.status(404).json({ message: "Did not find selected Furniture", data: null });
  }
};

//POST Request (Adds one item)
exports.addOne = async (req, res) => {
  try {
    const newOne = await Furniture.create(req.body);
    newOne.save();
    res.status(200).json({ message: "Added new furniture item!", newOne });
  } catch (err) {
    res.status(404).json({ message: "Added NO Furniture" });
  }
};

//PUT Request (Updates one item)
exports.updateOne = async (req, res) => {
  try {
    const updateIt = await Furniture.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Updated Selected Furniture!", data: updateIt });
  } catch (err) {
    res.status(404).json({ message: "Did not update Selected Furniture" });
  }
};

//DELETE Request (Deletes an item by ID)
exports.deleteOne = async (req, res) => {
  try {
    const killEm = await Furniture.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted Furniture!!!" });
  } catch (err) {
    res.status(404).json({ message: "Nothing happened." });
  }
};
