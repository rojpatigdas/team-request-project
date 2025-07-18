/**
 * 
 */
function sendToZapierEngage(event) {

  //addDatatoSheetEngage(event);

  var url = "https://hooks.zapier.com/hooks/catch/6916010/35wcw55/"; // Replace with your Zapier webhook URL
  

  var dateObject = new Date()
  var formattedDate = Utilities.formatDate(dateObject, "GMT", "yyyy-MM-dd HH:mm:ss");
 






 if(event.common.parameters.helpNeededWithEngage=='Account Manager assignment'){
  var parameters = event.common.parameters;
  var regionEngage = parameters.regionEngage;
  var clientDomainEngage = parameters.clientDomainEngage;
  var hiverPermalinkEngage = parameters.hiverPermalinkEngage;
  var ccMembershipEngage = parameters.ccMembershipEngage;
  var otherCCMembershipEngage = parameters.otherCCMembershipEngage;
  var helpNeededWithEngage = parameters.helpNeededWithEngage;
  

  if(otherCCMembershipEngage==''){
          otherCCMembershipEngage=' '
        }
  var payload = {

    "clientDomainEngage": clientDomainEngage,
    "regionEngage": regionEngage,
    "hiverPermalinkEngage": hiverPermalinkEngage,
    "ccMembershipEngage": ccMembershipEngage,
    "otherCCMembershipEngage": otherCCMembershipEngage,
    "helpNeededWithEngage": helpNeededWithEngage,
    "requestDetailsEngage": event.common.formInputs.requestDetailsEngage[""].stringInputs.value[0],
    "deadline": formattedDate,
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName
    // Add more parameters as needed
  };



 }




 else if(event.common.parameters.helpNeededWithEngage=='Escalation'){
  var parameters = event.common.parameters;
  var regionEngage = parameters.regionEngage;
  var clientDomainEngage = parameters.clientDomainEngage;
  var hiverPermalinkEngage = parameters.hiverPermalinkEngage;
  var ccMembershipEngage = parameters.ccMembershipEngage;
  var otherCCMembershipEngage = parameters.otherCCMembershipEngage;
  var helpNeededWithEngage = parameters.helpNeededWithEngage;
  var otherOtherLicensesEngage = event.common.formInputs.otherOtherLicensesEngage[""].stringInputs.value[0]
  
  if(otherCCMembershipEngage==''){
          otherCCMembershipEngage=' '
        }
  if(otherOtherLicensesEngage==''){
          otherOtherLicensesEngage=' '
        }
  var payload = {

    "clientDomainEngage": clientDomainEngage,
    "regionEngage": regionEngage,
    "hiverPermalinkEngage": hiverPermalinkEngage,
    "ccMembershipEngage": ccMembershipEngage,
    "otherCCMembershipEngage": otherCCMembershipEngage,
    "helpNeededWithEngage": helpNeededWithEngage,
    "escalationTypeEngage": event.common.formInputs.escalationTypeEngage[""].stringInputs.value[0],
    "primaryContactNameEngage": event.common.formInputs.primaryContactNameEngage[""].stringInputs.value[0],
    "primaryContactEmailEngage": event.common.formInputs.primaryContactEmailEngage[""].stringInputs.value[0],
    "engagementCardTypeEngage": event.common.formInputs.engagementCardTypeEngage[""].stringInputs.value[0],
    "cloudConciergeEngage": event.common.formInputs.cloudConciergeEngage[""].stringInputs.value[0],
    "productLicenseEngage": event.common.formInputs.productLicenseEngage[""].stringInputs.value[0],
    "otherLicensesEngage": event.common.formInputs.otherLicensesEngage[""].stringInputs.value[0],
    "otherOtherLicensesEngage": otherOtherLicensesEngage,
    "ccValueEngage": event.common.formInputs.ccValueEngage[""].stringInputs.value[0],
    "productLicenseValueEngage": event.common.formInputs.productLicenseValueEngage[""].stringInputs.value[0],
    "otherLicenseValueEngage": event.common.formInputs.otherLicenseValueEngage[""].stringInputs.value[0],
    "escalationDetailsEngage": event.common.formInputs.escalationDetailsEngage[""].stringInputs.value[0],
    "deadline": formattedDate,
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName
    // Add more parameters as needed
  };

 }


 if(event.common.parameters.helpNeededWithEngage=='Post-project handover'){
  var parameters = event.common.parameters;
  var regionEngage = parameters.regionEngage;
  var clientDomainEngage = parameters.clientDomainEngage;
  var hiverPermalinkEngage = parameters.hiverPermalinkEngage;
  var ccMembershipEngage = parameters.ccMembershipEngage;
  var otherCCMembershipEngage = parameters.otherCCMembershipEngage;
  var helpNeededWithEngage = parameters.helpNeededWithEngage;
  var otherProjectImplementationEngage = event.common.formInputs.otherProjectImplementationEngage[""].stringInputs.value[0];
  

  if(otherCCMembershipEngage==''){
          otherCCMembershipEngage=' '
        }
  if(otherProjectImplementationEngage==''){
          otherProjectImplementationEngage=' '
        }
  var payload = {

    "clientDomainEngage": clientDomainEngage,
    "regionEngage": regionEngage,
    "hiverPermalinkEngage": hiverPermalinkEngage,
    "ccMembershipEngage": ccMembershipEngage,
    "otherCCMembershipEngage": otherCCMembershipEngage,
    "helpNeededWithEngage": helpNeededWithEngage,
    "projectCompletedEngage": event.common.formInputs.projectCompletedEngage[""].stringInputs.value[0],
    "feedbackFromClientEngage": event.common.formInputs.feedbackFromClientEngage[""].stringInputs.value[0],
    "projectRatingScoreEngage": event.common.formInputs.projectRatingScoreEngage[""].stringInputs.value[0],
    "projectImplementationEngage": event.common.formInputs.projectImplementationEngage[""].stringInputs.value[0],
    "otherProjectImplementationEngage": otherProjectImplementationEngage,
    "nextProjectScopingRequestDetailsEngage": event.common.formInputs.nextProjectScopingRequestDetailsEngage[""].stringInputs.value[0],
    "deadline": formattedDate,
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName
    // Add more parameters as needed
  };



 }


 if(event.common.parameters.helpNeededWithEngage=='Scoping'){
  var parameters = event.common.parameters;
  var regionEngage = parameters.regionEngage;
  var clientDomainEngage = parameters.clientDomainEngage;
  var hiverPermalinkEngage = parameters.hiverPermalinkEngage;
  var ccMembershipEngage = parameters.ccMembershipEngage;
  var otherCCMembershipEngage = parameters.otherCCMembershipEngage;
  var helpNeededWithEngage = parameters.helpNeededWithEngage;
  var otherProjectImplementationEngage = event.common.formInputs.otherProjectImplementationEngage[""].stringInputs.value[0];

  if(otherCCMembershipEngage==''){
          otherCCMembershipEngage=' '
        }
  if(otherProjectImplementationEngage==''){
          otherProjectImplementationEngage=' '
        }
  var payload = {

    "clientDomainEngage": clientDomainEngage,
    "regionEngage": regionEngage,
    "hiverPermalinkEngage": hiverPermalinkEngage,
    "ccMembershipEngage": ccMembershipEngage,
    "otherCCMembershipEngage": otherCCMembershipEngage,
    "helpNeededWithEngage": helpNeededWithEngage,
    "projectImplementationEngage": event.common.formInputs.projectImplementationEngage[""].stringInputs.value[0],
    "otherProjectImplementationEngage": otherProjectImplementationEngage,
    "nextProjectScopingRequestDetailsEngage": event.common.formInputs.nextProjectScopingRequestDetailsEngage[""].stringInputs.value[0],
    "deadline": formattedDate,
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
