// Deploy this from script.google.com, bound to the target Google Sheet
// (Extensions > Apps Script from within the Sheet). See setup steps in
// the PR/README for how to deploy and wire up the URL + secret.

const SHEET_NAME = "Landing Page Waitlist";
const SECRET = "replace-with-a-long-random-string"; // must match GOOGLE_SHEETS_WEBHOOK_SECRET

function doPost(e) {
  const respond = (status, body) =>
    ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
      ContentService.MimeType.JSON,
    );

  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return respond(400, { error: "Invalid JSON" });
  }

  if (data.secret !== SECRET) {
    return respond(401, { error: "Unauthorized" });
  }

  const email = String(data.email || "").trim();
  if (!email) {
    return respond(400, { error: "Missing email" });
  }

  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) ||
    SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  sheet.appendRow([new Date(), email, data.role || ""]);

  return respond(200, { ok: true });
}
