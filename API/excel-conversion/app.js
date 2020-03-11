const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoxlsx = require("mongo-xlsx");

model = null;

// THIS POINTS TO THE FILE (XLSX) YOU'RE TRYING TO MAKE DATABASE ITEMS FROM
var xlsx = "./FurniturePricingNEW.xlsx";

//
// THIS WILL GENEREATE AN EXCEL FILE FROM THE EXISTING DATABASE
//


// This will read the data above
// mongoxlsx.xlsx2MongoData(xlsx, model, function(err, mongoData) {
//   console.log(mongoData);
// });

// THIS MAKES A QUICK SCHEMA AND ADDS DATA FROM THE EXCEL SHEET TO THE DATABASE
mongoxlsx.xlsx2MongoData(xlsx, model, function(err, mongoData) {
  furnitureSchema = new mongoose.Schema({
    pageNumber: Number,
    itemNumber: String,
    unitPkg: Number,
    unitPriceCost: Number,
    pkgPricePkgCost: Number,
    pieceCntPkg: Number,
    listPricePiece: Number,
    listPricePkg: Number
  });

  const FurniModel = mongoose.model("furniCOllection", furnitureSchema);
//   // console.log(mongoData);


//   //THIS WILL ACTUALLY EVERY SINGLE ITEM FROM THE EXCEL SHEET  TO THE DATABASE
 
for (let i = 0; i < mongoData.length; i++ ){
  // console.log(mongoData[i]);
  var allData = new FurniModel(mongoData[i]);
  //ONLY SAVE IF YOU HAVE TO (Database gets deleted)
  // allData.save();
}


// THIS WILL GENERATE AN EXCEL SHEET FROM THE ONLINE DATABASE
// async function myFunction() {
//   const daData = await FurniModel.find();

//   const daModel = await mongoxlsx.buildDynamicModel(daData);

//    function two() {
//     mongoxlsx.mongoData2Xlsx(daData, daModel, function(err, data) {
//       console.log('File saved at:', data.fullPath); 
//     });
//   }
//   // two();
// }
// myFunction();


});




dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());

const THEPORT = process.env.MYPORT || 5000;
const ADATABASE = process.env.MYDATABASE;

mongoose
  .connect(ADATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false
  })
  .then(console.log("CONNECTED!!!!"));

app.get("/", (req, res) => {
  // console.log(Furni.find());
});

app.listen(THEPORT, () => {
  console.log(`Listening on port ${THEPORT}`);
});
