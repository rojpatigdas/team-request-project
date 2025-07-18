
/**
 * 
 */
function sendToZapierFinance(event) {
  addDatatoSheetFinance(event);
  var url = "YOUR_ZAPIER_WEBHOOK_URL"; // TODO: Insert your Zapier webhook URL here. Do not commit real tokens to version control.
    
  var ccMembershipFinance = (event.common.formInputs.ccMembershipFinance[""].stringInputs.value[0]!="Other")?
    event.common.formInputs.ccMembershipFinance[""].stringInputs.value[0]:
    event.common.formInputs.otherCCMembershipFinance[""].stringInputs.value[0];
  var requestReasonFinance = (event.common.formInputs.requestReasonFinance[""].stringInputs.value[0]!="Other")?
    event.common.formInputs.requestReasonFinance[""].stringInputs.value[0]:
    event.common.formInputs.otherRequestReasonFinance[""].stringInputs.value[0];
  var productFinance = (event.common.formInputs.productFinance[""].stringInputs.value[0]!="Other")?
    event.common.formInputs.productFinance[""].stringInputs.value[0]:
    event.common.formInputs.otherProductFinance[""].stringInputs.value[0];
  var chargeCardBoolean = (event.common.formInputs.chargeCardBoolean[""].stringInputs.value[0]!="Other")?
    event.common.formInputs.chargeCardBoolean[""].stringInputs.value[0]:
    event.common.formInputs.otherChargeCardFinance[""].stringInputs.value[0];

  var payload = {
    "clientDomain": event.common.formInputs.clientDomainFinance[""].stringInputs.value[0],
    "clientLink": event.common.formInputs.hiverPermalinkFinance[""].stringInputs.value[0],
    "ccMembership": ccMembershipFinance,
    "requestReason": requestReasonFinance,
    "clientBillLink": event.common.formInputs.clientBillLink[""].stringInputs.value[0],
    "levelOfUrgencyFinance": event.common.formInputs.levelOfUrgencyFinance[""].stringInputs.value[0],
    "productFinance": productFinance,
    "chargeCardBoolean": chargeCardBoolean,
    "numberOfLicensestoAdd": event.common.formInputs.numberOfLicensestoAdd[""].stringInputs.value[0],
    "numberOfLicensestoDowngrade": event.common.formInputs.numberOfLicensestoDowngrade[""].stringInputs.value[0],
    "otherImportantNotes": event.common.formInputs.otherImportantNotes[""].stringInputs.value[0],
    "requestorEmail" : event.user.email,
    // Add more parameters as needed
  };
  
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);

  
}