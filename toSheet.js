function addDatatoSheetAttract(event) {
  var spreadsheetId = "1h2b34DMFkaQm3hwrNJ4IGiGrpOT9O2d1LVGVwPot6zU";
  var sheetName = "Attract";
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  var rawEpoch = event.common.formInputs.deadlineAttract[""].dateInput.msSinceEpoch;
  var dateObject = new Date()
  var formattedDate = Utilities.formatDate(dateObject, "GMT+8", "yyyy-MM-dd HH:mm:ss");
  
  
  // Example data
  var data = [
    formattedDate, 
    event.user.displayName,
    '',
    '',
    '',
    '',
    // event.common.formInputs.clientDomainAttract[""].stringInputs.value[0], 
    // event.common.formInputs.hiverPermalinkAttract[""].stringInputs.value[0], 
    // event.common.formInputs.ccMembershipAttract[""].stringInputs.value[0], 
    //event.common.formInputs.otherCCMembershipAttract[""].stringInputs.value[0],
    event.common.formInputs.helpNeededAttract[""].stringInputs.value ,
    event.common.formInputs.requestDetailsAttract[""].stringInputs.value[0],
    ];
  


  // Find the first empty row
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange(lastRow + 1, 1).getNextDataCell(SpreadsheetApp.Direction.UP);
  var nextRow = range.getRow() + 1;
  
  // Write the data to the next empty row
  var targetRange = sheet.getRange(nextRow, 1, 1, data.length);
  targetRange.setValues([data]);
}







function addDatatoSheetDeliver(event) {
  var spreadsheetId = "1h2b34DMFkaQm3hwrNJ4IGiGrpOT9O2d1LVGVwPot6zU";
  var sheetName = "Deliver";
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  
  if(event.common.parameters.helpNeededWith=='Research / Technical Consultation'){
        var parameters = event.common.parameters;
        var clientDomain = parameters.clientDomain;
        var clientLink = parameters.clientLink;
        var ccMembership = parameters.ccMembership;
        var otherCCMembership = parameters.otherCCMembership;
        var helpNeededWith = parameters.helpNeededWith;
        var currentDate = new Date();
        

        if(otherCCMembership==''){
          otherCCMembership=' '
        }
        // Example data
        var data = [
          currentDate,
          event.user.displayName,
          clientDomain,
          clientLink,
          ccMembership,
          otherCCMembership,
          helpNeededWith,
          ,
          event.common.formInputs.requestDetailsDeliver[""].stringInputs.value[0],
          ,
          ,
          
        ];
  }
  else if(event.common.parameters.helpNeededWith=='Project Manager assignment'){
        var parameters = event.common.parameters;
        var clientDomain = parameters.clientDomain;
        var clientLink = parameters.clientLink;
        var ccMembership = parameters.ccMembership;
        var otherCCMembership = parameters.otherCCMembership;
        var helpNeededWith = parameters.helpNeededWith;
        var currentDate = new Date();
        

        if(otherCCMembership==''){
          otherCCMembership=' '
        }
        // Example data
        var data = [
          currentDate,
          event.user.displayName,
          clientDomain,
          clientLink,
          ccMembership,
          otherCCMembership,
          helpNeededWith,
          ,
          ,
          event.common.formInputs.implemRequestDeliver[""].stringInputs.value,
          event.common.formInputs.requestDetailsDeliver[""].stringInputs.value[0],
          
        ];
  }
  else{

        var otherCCMembershipDeliver = ''
          if(event.common.formInputs.otherCCDeliver[""].stringInputs.value[0]==''){
            otherCCDeliver = ' '
          }
          else{
            otherCCMembershipDeliver = event.common.formInputs.otherCCDeliver[""].stringInputs.value[0]
          }
        var currentDate = new Date();
        // Example data
        var data = [
          currentDate,
          event.user.displayName,
          event.common.formInputs.clientDomainDeliver[""].stringInputs.value[0],
          event.common.formInputs.hiverPermalinkDeliver[""].stringInputs.value[0],
          event.common.formInputs.ccMembershipDeliver[""].stringInputs.value[0],
          otherCCMembershipDeliver,
          event.common.formInputs.helpNeededWithDeliver[""].stringInputs.value[0],
          event.common.formInputs.otherHelpDeliver[""].stringInputs.value[0],
          ,
          ,
          ,
          

        ];
  }

  // Find the first empty row
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange(lastRow + 1, 1).getNextDataCell(SpreadsheetApp.Direction.UP);
  var nextRow = range.getRow() + 1;
  
  // Write the data to the next empty row
  var targetRange = sheet.getRange(nextRow, 1, 1, data.length);
  targetRange.setValues([data]);
}










/**
 * Adds new row to dumpsheet
 * Parameters: payload json sent to webhook
 */
function addDatatoSheetFinance (event) {
    var dateObject = new Date()
  var formattedDate = Utilities.formatDate(dateObject, "GMT", "yyyy-MM-dd HH:mm:ss");
  var spreadsheetId = "1h2b34DMFkaQm3hwrNJ4IGiGrpOT9O2d1LVGVwPot6zU";
  var sheetName = "Finance";
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);

  var hold = [
    formattedDate,
    event.user.displayName,
    event.user.email,
    event.common.formInputs.clientDomainFinance[""].stringInputs.value[0], 
    event.common.formInputs.hiverPermalinkFinance[""].stringInputs.value[0], 
    event.common.formInputs.ccMembershipFinance[""].stringInputs.value[0], 
    event.common.formInputs.requestReasonFinance[""].stringInputs.value[0],
    event.common.formInputs.clientBillLink[""].stringInputs.value,
    event.common.formInputs.levelOfUrgencyFinance[""].stringInputs.value[0],
    event.common.formInputs.productFinance[""].stringInputs.value[0], 
    event.common.formInputs.chargeCardBoolean[""].stringInputs.value[0],
    event.common.formInputs.numberOfLicensestoAdd[""].stringInputs.value ,
    event.common.formInputs.numberOfLicensestoDowngrade[""].stringInputs.value[0],
    event.common.formInputs.otherImportantNotes[""].stringInputs.value[0],
    
  ];

  // Find the first empty row
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange(lastRow + 1, 1).getNextDataCell(SpreadsheetApp.Direction.UP);
  var nextRow = range.getRow() + 1;
  
  // Write the data to the next empty row
  var targetRange = sheet.getRange(nextRow, 1, 1, hold.length);
  targetRange.setValues([hold]);
}

















/**
 * Adds new row to dumpsheet
 * Parameters: payload json sent to webhook
 */
function addDatatoSheetEmpower (data) {
  var spreadsheetId = "1h2b34DMFkaQm3hwrNJ4IGiGrpOT9O2d1LVGVwPot6zU";
  var sheetName = "Empower";
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);

  var hold = [
    clientDomain,
    clientLink,
    ccMembership,
    clientNameEmpower,
    companyNameEmpower,
    clientEmailAddressEmpower,
    businessPhoneNumberEmpower,
    deadlineEmpower,
    typeOfAttendeesEmpower,
    nameAndEmailEmpower,
    trainingCourseEmpower,
    specificRequestEmpower,
    requestorEmail,
  ];

  // Find the first empty row
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange(lastRow + 1, 1).getNextDataCell(SpreadsheetApp.Direction.UP);
  var nextRow = range.getRow() + 1;
  
  // Write the data to the next empty row
  var targetRange = sheet.getRange(nextRow, 1, 1, hold.length);
  targetRange.setValues([hold]);
}













/**
 * Adds new row to dumpsheet
 * Parameters: payload json sent to webhook
 */
function addDatatoSheetExcite (event) {
    var dateObject = new Date()
  var formattedDate = Utilities.formatDate(dateObject, "GMT", "yyyy-MM-dd HH:mm:ss");
  var spreadsheetId = "1h2b34DMFkaQm3hwrNJ4IGiGrpOT9O2d1LVGVwPot6zU";
  var sheetName = "Excite";
  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);

  var hold = [
    formattedDate,
    event.user.displayName,
    event.user.email,
    event.common.formInputs.clientDomainExcite[""].stringInputs.value[0], 
    event.common.formInputs.hiverPermalinkExcite[""].stringInputs.value[0], 
    event.common.formInputs.ccMembershipExcite[""].stringInputs.value[0], 
    event.common.formInputs.otherCCMembershipExcite[""].stringInputs.value[0],
    event.common.formInputs.clientFirstNameExcite[""].stringInputs.value[0],
    event.common.formInputs.clientLastNameExcite[""].stringInputs.value[0],
    event.common.formInputs.companyNameExcite[""].stringInputs.value[0],
    event.common.formInputs.clientEmailAddressExcite[""].stringInputs.value[0],
    event.common.formInputs.clientPhoneNumberExcite[""].stringInputs.value[0],
    event.common.formInputs.teamSizeExcite[""].stringInputs.value[0],
    event.common.formInputs.customerSourceExcite[""].stringInputs.value[0],
    event.common.formInputs.customerTypeExcite[""].stringInputs.value[0],
    event.common.formInputs.howCanWeHelpExcite[""].stringInputs.value[0],
    
  ];

  // Find the first empty row
  var lastRow = sheet.getLastRow();
  var range = sheet.getRange(lastRow + 1, 1).getNextDataCell(SpreadsheetApp.Direction.UP);
  var nextRow = range.getRow() + 1;
  
  // Write the data to the next empty row
  var targetRange = sheet.getRange(nextRow, 1, 1, hold.length);
  targetRange.setValues([hold]);
}