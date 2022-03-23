const dns = require("dns");
const email = "arjunphp@gmail.com";
const domain = email.split("@")[1];
dns.resolve(domain, "MX", function (err, addresses) {
  if (err) {
    console.log("No MX record exists, so email is invalid.");
  } else if (addresses && addresses.length > 0) {
    console.log("This MX records exists So I will accept this email as valid.");
  }
});
