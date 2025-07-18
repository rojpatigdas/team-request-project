/**
 * 
 */
function sendToZapierAttract(event) {

  //addDatatoSheetAttract(event);

  var url = WEBHOOK_ATTRACT; // Reference from const.js. TODO: Set your Zapier webhook URL in const.js
  
  var rawEpoch = event.common.formInputs.deadlineAttract[""].dateInput.msSinceEpoch;
  var dateObject = new Date(rawEpoch)
  var formattedDate = Utilities.formatDate(dateObject, "GMT+8", "yyyy-MM-dd HH:mm:ss");

    
  // var otherCCMembershipAttract = ''
  //   if(event.common.formInputs.otherCCMembershipAttract[""].stringInputs.value[0]=''){
  //     otherCCMembershipAttract = ' '
  //   }
  //   else{
  //     otherCCMembershipAttract = event.common.formInputs.otherCCMembershipAttract[""].stringInputs.value[0]
  //   }


  var payload = {

    // "clientDomain": event.common.formInputs.clientDomainAttract[""].stringInputs.value[0],
    // "clientLink": event.common.formInputs.hiverPermalinkAttract[""].stringInputs.value[0],
    // "ccMembership": event.common.formInputs.ccMembershipAttract[""].stringInputs.value[0],
    //"otherCCMembership": otherCCMembershipAttract,
    "regionAttract": event.common.formInputs.regionAttract[""].stringInputs.value,
    "helpNeeded": event.common.formInputs.helpNeededAttract[""].stringInputs.value,
    "assetsLink": event.common.formInputs.assetsLinkAttract[""].stringInputs.value[0],
    "size": event.common.formInputs.sizeAttract[""].stringInputs.value[0],
    "requestDetails": event.common.formInputs.requestDetailsAttract[""].stringInputs.value[0],
    "additionalRequests": event.common.formInputs.additionalRequestsAttract[""].stringInputs.value[0],
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
