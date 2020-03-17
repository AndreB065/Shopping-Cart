const mongoose = require('mongoose');
const furnitureSchema = new mongoose.Schema({
    pageNumber: Number,
    itemNumber: String,
    unitPkg: Number,
    unitPriceCost: Number,
    pkgPricePkgCost: Number,
    pieceCntPkg: Number,
    listPricePiece: Number,
    listPricePkg: Number,
    imageUrl: String
})

const Furniture = mongoose.model('furniCOllection', furnitureSchema);

module.exports = Furniture;