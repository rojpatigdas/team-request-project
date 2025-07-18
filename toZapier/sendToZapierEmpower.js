





/**
 * 
 */
function sendToZapierEmpower(event) {
  var url = WEBHOOK_EMPOWER; // Reference from const.js. TODO: Set your Zapier webhook URL in const.js
   var dateObject = new Date()
  var formattedDate = Utilities.formatDate(dateObject, "GMT+8", "yyyy-MM-dd HH:mm:ss");
    

   if(event.common.formInputs.otherRequestEmpower[""].stringInputs.value[0]==''){
          event.common.formInputs.otherRequestEmpower[""].stringInputs.value[0]=' '
        }

  var payload = {
    // "formattedDate" : formattedDate,
    // "clientDomain": event.common.formInputs.clientDomainEmpower[""].stringInputs.value[0],
    // "clientLink": event.common.formInputs.hiverPermalinkEmpower[""].stringInputs.value[0],
    // "ccMembership": ccMembershipEmpower,
    // "clientNameEmpower": event.common.formInputs.clientNameEmpower[""].stringInputs.value[0],
    // "companyNameEmpower": event.common.formInputs.companyNameEmpower[""].stringInputs.value[0],
    // "clientEmailAddressEmpower": event.common.formInputs.clientEmailAddressEmpower[""].stringInputs.value[0],
    // "businessPhoneNumberEmpower": event.common.formInputs.businessPhoneNumberEmpower[""].stringInputs.value[0],
    // "deadlineEmpower": deadlineDate,
    // "typeOfAttendeesEmpower": event.common.formInputs.typeOfAttendeesEmpower[""].stringInputs.value[0],
    // "nameAndEmailEmpower": event.common.formInputs.nameAndEmailEmpower[""].stringInputs.value,
    // "trainingCourseEmpower": trainingCourseEmpower,
    // "specificRequestEmpower": event.common.formInputs.specificRequestEmpower[""].stringInputs.value[0],
    // "requestorEmail" : event.user.email,
    // Add more parameters as needed

    "formattedDate" : formattedDate,
    "requestorEmail" : event.user.email,
    "typeOfConcernEmpower": event.common.formInputs.typeOfConcernEmpower[""].stringInputs.value[0],
    "otherRequestEmpower": event.common.formInputs.otherRequestEmpower[""].stringInputs.value[0],
    "requestDetailsEmpower": event.common.formInputs.requestDetailsEmpower[""].stringInputs.value[0],

  };
  
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);

  // addDatatoSheetEmpower(payload);
}