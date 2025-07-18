
/**
 * 
 */
function sendToZapierSupport(event) {

  //addDatatoSheetSupport(event);

  var url = "YOUR_ZAPIER_WEBHOOK_URL"; // TODO: Insert your Zapier webhook URL here. Do not commit real tokens to version control.
  var dateObject = new Date()
  var formattedDate = Utilities.formatDate(dateObject, "GMT+8", "yyyy-MM-dd HH:mm:ss");
  var parameters = event.common.parameters;
  var clientDomainSupport = parameters.clientDomainSupport;
  var hiverPermalinkSupport = parameters.hiverPermalinkSupport;
  var regionSupport = parameters.regionSupport;
  var ccMembershipSupport = parameters.ccMembershipSupport;
  var otherCCMembershipSupport = parameters.otherCCMembershipSupport;
  var helpNeededWithSupport = parameters.helpNeededWithSupport;
  var otherHelpNeededSupport = parameters.otherHelpNeededSupport;
  var contactClientDirectlySupport = parameters.contactClientDirectlySupport;
  var whenShouldWeActionSupport = parameters.whenShouldWeActionSupport;

  if(event.common.parameters.helpNeededWithSupport=='Technical Support Request'){

        

        

        if(otherCCMembershipSupport==''){
          otherCCMembershipSupport=' '
        }
        if(otherHelpNeededSupport==''){
          otherHelpNeededSupport=' '
        }

        Logger.log(event.common.formInputs.requestDetailsSupport[""].stringInputs.value)

    var payload = {
    "formattedDate" : formattedDate,
    "clientDomainSupport": clientDomainSupport,
    "hiverPermalinkSupport": hiverPermalinkSupport,
    "regionSupport": regionSupport,
    "ccMembershipSupport": ccMembershipSupport,
    "otherCCMembershipSupport": otherCCMembershipSupport,
    "helpNeededWithSupport": helpNeededWithSupport,
    "otherHelpNeededSupport": otherHelpNeededSupport,
    "contactClientDirectlySupport": contactClientDirectlySupport,
    "whenShouldWeActionSupport": whenShouldWeActionSupport,
    "productWithIssueSupport": event.common.formInputs.productWithIssueSupport[""].stringInputs.value,
    "requestDetailsSupport": event.common.formInputs.requestDetailsSupport[""].stringInputs.value[0],
    "clientNameSupport": event.common.formInputs.clientNameSupport[""].stringInputs.value[0],
    "phoneNumberSupport": event.common.formInputs.phoneNumberSupport[""].stringInputs.value[0],
    "emailAddressSupport": event.common.formInputs.emailAddressSupport[""].stringInputs.value[0],
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName
    // Add more parameters as needed
  };
      
  }


else if(event.common.parameters.helpNeededWithSupport=='Internal consultation'){

  var rawEpochConsultMeetingSupport = event.common.formInputs.consultMeetingSupport[""].dateTimeInput.msSinceEpoch	;
  var dateObjectConsultMeetingSupport = new Date(rawEpochConsultMeetingSupport)
  var consultMeetingSupport = Utilities.formatDate(dateObjectConsultMeetingSupport, "GMT", "yyyy-MM-dd HH:mm:ss");

        

        if(otherCCMembershipSupport==''){
          otherCCMembershipSupport=' '
        }
        if(otherHelpNeededSupport==''){
          otherHelpNeededSupport=' '
        }
        
    
    var payload = {
    "formattedDate" : formattedDate,
    "clientDomainSupport": clientDomainSupport,
    "hiverPermalinkSupport": hiverPermalinkSupport,
    "regionSupport": regionSupport,
    "ccMembershipSupport": ccMembershipSupport,
    "otherCCMembershipSupport": otherCCMembershipSupport,
    "helpNeededWithSupport": helpNeededWithSupport,
    "otherHelpNeededSupport": otherHelpNeededSupport,
    "contactClientDirectlySupport": contactClientDirectlySupport,
    "whenShouldWeActionSupport": whenShouldWeActionSupport,   
    "consultWithSupport": event.common.formInputs.consultWithSupport[""].stringInputs.value[0],
    "consultMeetingSupport": consultMeetingSupport,
    "consultationDetailsSupport": event.common.formInputs.consultationDetailsSupport[""].stringInputs.value[0],
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName
    // Add more parameters as needed
  };

  }

else if(event.common.parameters.helpNeededWithSupport=='Data archiving'){
    var rawEpochexpectedCompletionDateSupport = event.common.formInputs.expectedCompletionDateSupport[""].dateInput.msSinceEpoch;
  var dateObjectexpectedCompletionDateSupport = new Date(rawEpochexpectedCompletionDateSupport)
  var expectedCompletionDateSupport = Utilities.formatDate(dateObjectexpectedCompletionDateSupport, "GMT", "yyyy-MM-dd HH:mm:ss");
 
      

        

        if(otherCCMembershipSupport==''){
          otherCCMembershipSupport=' '
        }
        if(otherHelpNeededSupport==''){
          otherHelpNeededSupport=' '
        }
    
    var payload = {
    "formattedDate" : formattedDate,
    "clientDomainSupport": clientDomainSupport,
    "hiverPermalinkSupport": hiverPermalinkSupport,
    "regionSupport": regionSupport,
    "ccMembershipSupport": ccMembershipSupport,
    "otherCCMembershipSupport": otherCCMembershipSupport,
    "helpNeededWithSupport": helpNeededWithSupport,
    "otherHelpNeededSupport": otherHelpNeededSupport, 
    "contactClientDirectlySupport": contactClientDirectlySupport,
    "whenShouldWeActionSupport": whenShouldWeActionSupport,  
    "expectedCompletionDateSupport": expectedCompletionDateSupport,
    "accountsArchivedSupport": event.common.formInputs.accountsArchivedSupport[""].stringInputs.value[0],
    "sourceToDestinationAccountsSupport": event.common.formInputs.sourceToDestinationAccountsSupport[""].stringInputs.value[0],
    "clientNameSupport": event.common.formInputs.clientNameSupport[""].stringInputs.value[0],
    "phoneNumberSupport": event.common.formInputs.phoneNumberSupport[""].stringInputs.value[0],
    "emailAddressSupport": event.common.formInputs.emailAddressSupport[""].stringInputs.value[0],
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName
    // Add more parameters as needed
  };

  }

else if(event.common.parameters.helpNeededWithSupport=='Google Classroom Onboarding'){



        if(otherCCMembershipSupport==''){
          otherCCMembershipSupport=' '
        }
        if(otherHelpNeededSupport==''){
          otherHelpNeededSupport=' '
        }


    var payload = {
    "formattedDate" : formattedDate,
    "clientDomainSupport": clientDomainSupport,
    "hiverPermalinkSupport": hiverPermalinkSupport,
    "regionSupport": regionSupport,
    "ccMembershipSupport": ccMembershipSupport,
    "otherCCMembershipSupport": otherCCMembershipSupport,
    "helpNeededWithSupport": helpNeededWithSupport,
    "otherHelpNeededSupport": otherHelpNeededSupport, 
    "contactClientDirectlySupport": contactClientDirectlySupport,
    "whenShouldWeActionSupport": whenShouldWeActionSupport,
    "whitelistedDomainOnboardingSupport": event.common.formInputs.whitelistedDomainOnboardingSupport[""].stringInputs.value,
    "emailAddressClassroomUsersSupport": event.common.formInputs.emailAddressClassroomUsersSupport[""].stringInputs.value,
    "coursesSupport": event.common.formInputs.coursesSupport[""].stringInputs.value,
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName

    }

}
else if(event.common.parameters.helpNeededWithSupport=='Google Classroom Offboarding'){



        if(otherCCMembershipSupport==''){
          otherCCMembershipSupport=' '
        }
        if(otherHelpNeededSupport==''){
          otherHelpNeededSupport=' '
        }


    var payload = {
    "formattedDate" : formattedDate,
    "clientDomainSupport": clientDomainSupport,
    "hiverPermalinkSupport": hiverPermalinkSupport,
    "regionSupport": regionSupport,
    "ccMembershipSupport": ccMembershipSupport,
    "otherCCMembershipSupport": otherCCMembershipSupport,
    "helpNeededWithSupport": helpNeededWithSupport,
    "otherHelpNeededSupport": otherHelpNeededSupport, 
    "contactClientDirectlySupport": contactClientDirectlySupport,
    "whenShouldWeActionSupport": whenShouldWeActionSupport,
    "whitelistedDomainOffboardingSupport": event.common.formInputs.whitelistedDomainOffboardingSupport[""].stringInputs.value,
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName

    }

}
else if(event.common.parameters.helpNeededWithSupport=='CC Inclusion Product Cancellation'){



        if(otherCCMembershipSupport==''){
          otherCCMembershipSupport=' '
        }
        if(otherHelpNeededSupport==''){
          otherHelpNeededSupport=' '
        }


    var payload = {
    "formattedDate" : formattedDate,
    "clientDomainSupport": clientDomainSupport,
    "hiverPermalinkSupport": hiverPermalinkSupport,
    "regionSupport": regionSupport,
    "ccMembershipSupport": ccMembershipSupport,
    "otherCCMembershipSupport": otherCCMembershipSupport,
    "helpNeededWithSupport": helpNeededWithSupport,
    "otherHelpNeededSupport": otherHelpNeededSupport, 
    "contactClientDirectlySupport": contactClientDirectlySupport,
    "whenShouldWeActionSupport": whenShouldWeActionSupport,
    "productsCancelSupport": event.common.formInputs.productsCancelSupport[""].stringInputs.value,
    "financeRequestSupport": event.common.formInputs.financeRequestSupport[""].stringInputs.value,
    "clientApprovedCancellationSupport": event.common.formInputs.clientApprovedCancellationSupport[""].stringInputs.value,
    "reasonCancellationSupport": event.common.formInputs.reasonCancellationSupport[""].stringInputs.value,
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName

    }

}
else if(event.common.parameters.helpNeededWithSupport=='Transfer-In'){


        if(otherCCMembershipSupport==''){
          otherCCMembershipSupport=' '
        }
        if(otherHelpNeededSupport==''){
          otherHelpNeededSupport=' '
        }


    var payload = {
      "formattedDate" : formattedDate,
      "clientDomainSupport": clientDomainSupport,
      "hiverPermalinkSupport": hiverPermalinkSupport,
      "regionSupport": regionSupport,
      "ccMembershipSupport": ccMembershipSupport,
      "otherCCMembershipSupport": otherCCMembershipSupport,
      "helpNeededWithSupport": helpNeededWithSupport,
      "otherHelpNeededSupport": otherHelpNeededSupport,
      "contactClientDirectlySupport": contactClientDirectlySupport,
      "whenShouldWeActionSupport": whenShouldWeActionSupport,
      "requestorEmail" : event.user.email,
      "requestorName" : event.user.displayName
    }

}
else if(event.common.parameters.helpNeededWithSupport=='Other'){




        if(otherCCMembershipSupport==''){
          otherCCMembershipSupport=' '
        }
        if(otherHelpNeededSupport==''){
          otherHelpNeededSupport=' '
        }


    var payload = {
    "formattedDate" : formattedDate,
    "clientDomainSupport": clientDomainSupport,
    "hiverPermalinkSupport": hiverPermalinkSupport,
    "regionSupport": regionSupport,
    "ccMembershipSupport": ccMembershipSupport,
    "otherCCMembershipSupport": otherCCMembershipSupport,
    "helpNeededWithSupport": helpNeededWithSupport,
    "otherHelpNeededSupport": otherHelpNeededSupport, 
    "contactClientDirectlySupport": contactClientDirectlySupport,
    "whenShouldWeActionSupport": whenShouldWeActionSupport,
    "completeRequestDetailsSupport": event.common.formInputs.completeRequestDetailsSupport[""].stringInputs.value,
    "requestorEmail" : event.user.email,
    "requestorName" : event.user.displayName

    }

}
  


  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);
}