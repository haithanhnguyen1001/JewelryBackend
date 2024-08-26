const db = require("../models");
const ReportDetail = db.ReportDetail

/*
reportId ReportId
buy : map [ProductId, Buy]
sell : map [ProductId, Sell]
preStock : map [ProductId, [ProductTypeId, endStock]]
*/
const createReportDetails = async ( cart ) => {
  let success;
  const result = await Promise.all(
    cart.map(async (item) => {
      try {
        const reportDetails = await ReportDetail.create({
          ...item
        })
        // console.log(reportDetails)
        if(!reportDetails){
          success = false
        }
      } catch (error) {
        console.log("Something went wrong when created Report details", error);
        success = false;
      }
    })
  )
    .then((detail) => {
      console.log("Report details created");
      success = true;
    })
    .catch((error) => {
      console.log(error);
      success = false
    })
  return success;
}

module.exports = { createReportDetails }