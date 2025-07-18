
/**
 * 
 */
function sendToZapierDeliver(event) {

  //addDatatoSheetDeliver(event);
//event.common.formInputs.helpNeededWithDeliver[""].stringInputs.value[0]=='Research / Technical Consultation' || event.common.formInputs.helpNeededWithDeliver[""].stringInputs.value[0]=='GW Audit' || event.common.formInputs.helpNeededWithDeliver[""].stringInputs.value[0]=='Other'
  var url = WEBHOOK_DELIVER; // Reference from const.js. TODO: Set your Zapier webhook URL in const.js
  
  if(event.common.parameters.helpNeededWith=='Research / Technical Consultation' || event.common.parameters.helpNeededWith=='GW Audit' ||event.common.parameters.helpNeededWith=='Other'){
        var parameters = event.common.parameters;
        var clientDomain = parameters.clientDomain;
        var clientLink = parameters.clientLink;
        var ccMembership = parameters.ccMembership;
        var otherCCMembership = parameters.otherCCMembership;
        var helpNeededWith = parameters.helpNeededWith;
        var regionDeliver = parameters.regionDeliver;

        if(otherCCMembership==''){
          otherCCMembership=' '
        }

    var payload = {

    "clientDomain": clientDomain,
    "clientLink": clientLink,
    "ccMembership": ccMembership,
    "otherCCMembership": otherCCMembership,
    "helpNeededWith": helpNeededWith,
    "requestDetailsDeliver": event.common.formInputs.requestDetailsDeliver[""].stringInputs.value[0],
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName,
    "regionDeliver" : regionDeliver,
    // Add more parameters as needed
  };
      
  }


  else if(event.common.parameters.helpNeededWith=='Project Manager assignment'){
        var parameters = event.common.parameters;
        var clientDomain = parameters.clientDomain;
        var clientLink = parameters.clientLink;
        var ccMembership = parameters.ccMembership;
        var otherCCMembership = parameters.otherCCMembership;
        var helpNeededWith = parameters.helpNeededWith;
        

        if(otherCCMembership=''){
          otherCCMembership=' '
        }
    
    var payload = {

    "clientDomain": clientDomain,
    "clientLink": clientLink,
    "ccMembership": ccMembership,
    "otherCCMembership": otherCCMembership,
    "helpNeededWith": helpNeededWith, 
    // "implemRequestDeliverTest": event.common.formInputs.implemRequestDeliverTest[""].stringInputs.value,
    // "implemRequestDeliverTest2": event.common.formInputs.implemRequestDeliverTest2[""].stringInputs.value,  
    "implemRequestDeliver": event.common.formInputs.implemRequestDeliver[""].stringInputs.value,
    "requestDetailsDeliver": event.common.formInputs.requestDetailsDeliver[""].stringInputs.value[0],
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName
    // Add more parameters as needed
  };

  }

  
  else{
    var otherCCMembershipDeliver = ''
    if(event.common.formInputs.otherCCDeliver[""].stringInputs.value[0]=''){
      otherCCDeliver = ' '
    }
    else{
      otherCCMembershipDeliver = event.common.formInputs.otherCCDeliver[""].stringInputs.value[0]
    }
    var payload = {

    "clientDomain": event.common.formInputs.clientDomainDeliver[""].stringInputs.value[0],
    "clientLink": event.common.formInputs.hiverPermalinkDeliver[""].stringInputs.value[0],
    "ccMembership": event.common.formInputs.ccMembershipDeliver[""].stringInputs.value[0],
    "otherCCMembership": otherCCMembershipDeliver,
    "helpNeededWith": event.common.formInputs.helpNeededWithDeliver[""].stringInputs.value[0],
    "otherHelpDeliver": event.common.formInputs.otherHelpDeliver[""].stringInputs.value[0],
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName
    // Add more parameters as needed
  };
  }

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);
}