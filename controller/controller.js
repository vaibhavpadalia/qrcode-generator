var qrcode = require("qrcode");
var fs = require("fs");

exports.generateQRCode = async (req, res) => {
  var base64String = await qrcode.toDataURL(`{here:"there"}`);
  base64String = base64String.replace(/^data:image\/png;base64,/, "")
  fs.writeFileSync("out.png", base64String, "base64");
};
