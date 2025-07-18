
/**
 * 
 */
function sendToZapierEmpowerr(event) {
  var url = "YOUR_WEBHOOK_URL"; // TODO: Insert your webhook URL here. Do not commit real tokens to version control.
  
  var dateObject = new Date(event.common.formInputs.deadlineAttract[""])
  var formattedDate = Utilities.formatDate(dateObject, "GMT", "yyyy-MM-dd HH:mm:ss");
  Logger.log(dateObject.toString())
  Logger.log(formattedDate)
 
  var payload = {

    "clientDomain": event.common.formInputs.clientDomainDeliver[""].stringInputs.value[0],
    "clientLink": event.common.formInputs.hiverPermalinkDeliver[""].stringInputs.value[0],
    "ccMembership": event.common.formInputs.ccMembershipAttract[""].stringInputs.value[0],
    "otherCCMembership": event.common.formInputs.otherCCMembershipAttract[""].stringInputs.value[0],
    "helpNeeded": event.common.formInputs.helpNeededAttract[""].stringInputs.value,
    "requestDetails": event.common.formInputs.requestDetailsAttract[""].stringInputs.value[0],
    "deadline": formattedDate,
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName
    // Add more parameters as needed
  };
  
  
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);
}