/**
 * Responds to a MESSAGE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onMessage(event) {
 if (event.message.slashCommand) {
    switch (event.message.slashCommand.commandId) {
      case 1: // /TR_Finance_ok
        return openDialogforFinance(event); //checked09032023_okok
      case 2:  // /TR_Attract_ok
        return openDialogforAttract(event); //goodtogo
      case 3: // /TR_Excite
        return openDialogforExcite(event);//checked09052023_okok
      case 4:  // /TR_Engage
        return openDialogforEngage(event);//need Sheet but otherwise ok
      case 5: // /TR_Deliver_ok
        return openDialogforDeliver(event); //checked09052023_okok
      case 6:  // /TR_Support
        return openDialogforSupport(event); //checked09122023_ok
      case 7: // /TR_Empower_ok
        return openDialogforEmpower(event); //will ask jigs where the chat space is
      case 8:  // /TR_Engineering
        return openDialogforEngineering(event); //Zapier end needs checking
      case 9: // /TR_MultiplePods_ok
        return openDialogforMultiplePods(event); //ok
      case 10: // /TR_Concierge
        return openDialogforConcierge(event);//
      case 11: // /TR_MultiplePods_ok
        return openDialogforTeamRequestUnified(event); //ok
    }
  }
}



/**
 * Responds to an ADDED_TO_SPACE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onAddToSpace(event) {
  var message = "";

  if (event.space.singleUserBotDm) {
    message = "Thank you for adding me to a DM, " + event.user.displayName + "!";
  } else {
    message = "Thank you for adding me to " +
        (event.space.displayName ? event.space.displayName : "this chat");
  }

  if (event.message) {
    // Bot added through @mention.
    message = message + " and you said: \"" + event.message.text + "\"";
  }

  return { "text": message };
}

/**
 * Responds to a REMOVED_FROM_SPACE event in Google Chat.
 *
 * @param {Object} event the event object from Google Chat
 */
function onRemoveFromSpace(event) {
  console.info("Bot removed from ",
      (event.space.name ? event.space.name : "this chat"));
}

