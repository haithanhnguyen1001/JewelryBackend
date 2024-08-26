const express = require('express');
const router = express.Router();
const XLSX = require("xlsx");

router.post('/', async (req, res) => {
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="SheetJSNode.xlsx"'
  );
  res.setHeader("Content-Type", "application/vnd.ms-excel");
  let data = req.body.newBody;
  try{
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(JSON.parse(data));
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    var downloadFile = XLSX.write(workbook, {
      type: 'buffer',
      bookType: "xlsx"
    });
    res.status(200).send(downloadFile);
  }
  catch(error){
    console.log(error);
  }
});
module.exports = router;