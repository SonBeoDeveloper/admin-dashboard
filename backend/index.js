const express = require("express");
const clientRouter = require("./router/client");
const generalRouter = require("./router/general");
const managementRouter = require("./router/managament");
const salesRouter = require("./router/sales");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

// const Transaction = require("./models/Transaction");
// const AffiliateStat = require("./models/AffiliateStat");
// const OverallStat = require("./models/OverallStat");
// const Product = require("./models/Product");
// const ProductStat = require("./models/ProductStat");

// const {
//   dataAffiliateStat,
//   dataOverallStat,
//   dataProduct,
//   dataProductStat,
//   dataTransaction,
// } = require("./data/index");
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/client", clientRouter);
app.use("/general", generalRouter);
app.use("/management", managementRouter);
app.use("/sales", salesRouter);
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`server port: ${PORT}`));
    // User.insertMany(dataUser);
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
  })
  .catch((error) => console.log(`${error} did not connect`));
