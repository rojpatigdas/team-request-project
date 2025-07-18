function sendToZapierTeamRequestUnified(event) {
  var url = WEBHOOK_TEAM_REQUEST_UNIFIED; // Reference from const.js. TODO: Set your Zapier webhook URL in const.js
  
  var dateObject = new Date()
  var formattedDate = Utilities.formatDate(dateObject, "GMT", "yyyy-MM-dd HH:mm:ss");
  
  var allSubtasks = splitSubTasks(event.common.formInputs.allSubTasks[""].stringInputs.value[0]);
  console.log(allSubtasks);

 
  var payload = {
    "formattedDate":formattedDate,
    "clientDomain": event.common.formInputs.clientDomainMultiplePods[""].stringInputs.value[0],
    "clientLink": event.common.formInputs.hiverPermalinkMultiplePods[""].stringInputs.value[0],
    "clientPainPoints":event.common.formInputs.clientPainPoints[""].stringInputs.value[0],
    "whyNeedProject":event.common.formInputs.whyNeedProject[""].stringInputs.value[0],
    "requestDetailsMultiplePods":event.common.formInputs.requestDetailsMultiplePods[""].stringInputs.value[0],
    "allSubTasks": allSubtasks,
    "podsAssigned": event.common.formInputs.podsAssigned[""].stringInputs.value,
    "ccMembership": event.common.formInputs.ccMembershipMultiplePods[""].stringInputs.value[0],
    "otherCCMembership": event.common.formInputs.otherMultiplePods[""].stringInputs.value[0],
    "clientRegion": event.common.formInputs.clientRegionMultiplePods[""].stringInputs.value[0],
    // "requestDetails": event.common.formInputs.requestDetailsMultiplePods[""].stringInputs.value[0],
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

function splitSubTasks(allSubTasks){
  //Removes any newlines and replaces with whitespace
  var sample = allSubTasks.replace(/\n/g, ' ');
  //Splits the subtasks
  var subTasksArr = sample.split(";");
  return subTasksArr;
}

