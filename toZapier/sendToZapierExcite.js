





/**
 * 
 */
function sendToZapierExcite(event) {
  addDatatoSheetExcite(event);
  var url = "YOUR_ZAPIER_WEBHOOK_URL"; // TODO: Insert your Zapier webhook URL here. Do not commit real tokens to version control.
    
  var ccMembershipExcite = (event.common.formInputs.ccMembershipExcite[""].stringInputs.value[0]!="Other")?
    event.common.formInputs.ccMembershipExcite[""].stringInputs.value[0]:
    event.common.formInputs.otherCCMembershipExcite[""].stringInputs.value[0];

  var payload = {
    "clientDomain": event.common.formInputs.clientDomainExcite[""].stringInputs.value[0],
    "clientLink": event.common.formInputs.hiverPermalinkExcite[""].stringInputs.value[0],
    "ccMembership": ccMembershipExcite,
    "clientFirstNameExcite": event.common.formInputs.clientFirstNameExcite[""].stringInputs.value[0],
    "clientLastNameExcite": event.common.formInputs.clientLastNameExcite[""].stringInputs.value[0],
    "companyNameExcite": event.common.formInputs.companyNameExcite[""].stringInputs.value[0],
    "clientEmailAddressExcite": event.common.formInputs.clientEmailAddressExcite[""].stringInputs.value[0],
    "clientPhoneNumberExcite": event.common.formInputs.clientPhoneNumberExcite[""].stringInputs.value[0],
    "teamSizeExcite": event.common.formInputs.teamSizeExcite[""].stringInputs.value[0],
    "customerSourceExcite": event.common.formInputs.customerSourceExcite[""].stringInputs.value[0],
    "customerTypeExcite": event.common.formInputs.customerTypeExcite[""].stringInputs.value[0],
    "howCanWeHelpExcite": event.common.formInputs.howCanWeHelpExcite[""].stringInputs.value[0],
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName,
    // Add more parameters as needed
  };
  
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);

  // addDatatoSheetExcite(event);
}