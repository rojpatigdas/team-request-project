

/**
 * 
 */
function sendToZapierMultiplePods(event) {
  var url = WEBHOOK_MULTIPLE_PODS; // Reference from const.js. TODO: Set your Zapier webhook URL in const.js
  //test url below
  // var url = 'https://hooks.zapier.com/hooks/catch/6916010/3v7818v/';
  var dateObject = new Date()
  var formattedDate = Utilities.formatDate(dateObject, "GMT", "yyyy-MM-dd HH:mm:ss");
  Logger.log(event.common.parameters.needHelpFinance)
 
  var payload = {
    "formattedDate":formattedDate,
    "clientDomain": event.common.formInputs.clientDomainMultiplePods[""].stringInputs.value[0],
    "clientLink": event.common.formInputs.hiverPermalinkMultiplePods[""].stringInputs.value[0],
    "ccMembership": event.common.formInputs.ccMembershipMultiplePods[""].stringInputs.value[0],
    "otherCCMembership": event.common.formInputs.otherMultiplePods[""].stringInputs.value[0],
    "helpPods": event.common.formInputs.podsHelp[""].stringInputs.value,
    "clientRegion": event.common.formInputs.clientRegionMultiplePods[""].stringInputs.value[0],
    "requestDetails": event.common.formInputs.requestDetailsMultiplePods[""].stringInputs.value[0],

    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName
    // Add more parameters as needed
  };
  // if(event.common.parameters.needHelpFinance=='Yes'){
  //   var parameters = event.common.parameters;
  //       var clientDomain = parameters.clientDomain;
  //       var clientLink = parameters.clientLink;
  //       var ccMembership = parameters.ccMembership;
  //       var otherCCMembership = parameters.otherCCMembership;
  //       var helpPods = parameters.helpPods;
  //       var clientRegion = parameters.clientRegion;
  //       var requestDetails = parameters.requestDetails;
  //       var needHelpFinance = parameters.needHelpFinance;


  // }
  
  
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);
}