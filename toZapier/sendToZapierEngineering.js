
/**
 * 
 */
function sendToZapierEngineering(event) {

  //addDatatoSheetEngineering(event);

  var url = "YOUR_ZAPIER_WEBHOOK_URL"; // TODO: Insert your Zapier webhook URL here. Do not commit real tokens to version control.
  var parameters = event.common.parameters;
  var requestTypeEngineering = parameters.requestTypeEngineering;
  var dateObject = new Date()
  var formattedDate = Utilities.formatDate(dateObject, "GMT+8", "yyyy-MM-dd HH:mm:ss");
  
  if(requestTypeEngineering=='Internal'){

    var payload = {
        "formattedDate" : formattedDate,
        "requestTypeEngineering": requestTypeEngineering,
        "hiverPermalinkEngineering": event.common.formInputs.hiverPermalinkEngineering[""].stringInputs.value[0],
        "requestDetailsEngineering": event.common.formInputs.requestDetailsEngineering[""].stringInputs.value[0],
        "requestSubjectEngineering": event.common.formInputs.requestSubjectEngineering[""].stringInputs.value[0],
        "requestorEmail" : event.user.email,
        "requestorName" : event.user.displayName
        // Add more parameters as needed
      };
      
  }


  else{

    var payload = {
        "formattedDate" : formattedDate,
        "requestTypeEngineering": requestTypeEngineering,
        "clientDomainEngineering": event.common.formInputs.clientDomainEngineering[""].stringInputs.value[0],
        "hiverPermalinkEngineering": event.common.formInputs.hiverPermalinkEngineering[""].stringInputs.value[0],
        "requestSubjectEngineering": event.common.formInputs.requestSubjectEngineering[""].stringInputs.value[0],
        "requestDetailsEngineering": event.common.formInputs.requestDetailsEngineering[""].stringInputs.value[0],
        "requestDetailsEngineering": event.common.formInputs.regionEngineering[""].stringInputs.value[0],
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