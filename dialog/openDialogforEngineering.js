



/**
 * Opens a dialog in Google Chat.
 *
 * @param {Object} event the event object from Chat API.
 *
 * @return {object} open a Dialog in Google Chat.
 */
function openDialogforEngineering(event) {
  utilprocess()


  return {
    "action_response": {
      "type": "DIALOG",
      "dialog_action": {
        "dialog": {
          "body": {
            "sections": [
              {
                "header": "ENGINEERING",
                "widgets": [
                  {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                    }
                  },
                  {
                    "divider": {}
                  },
              
                  {
                      "selectionInput": {
                        "type": "DROPDOWN",
                        "label": "Requested For*",
                        "name": "requestTypeEngineering",
                        "items": [
                          {
                            "text": "Internal",
                            "value": "Internal",
                            "selected": false
                          },
                          {
                            "text": "CC Support",
                            "value": "CC Support",
                            "selected": false
                          },
                          {
                            "text": "CC Growth",
                            "value": "CC Growth",
                            "selected": false
                          },
                          {
                            "text": "Lead",
                            "value": "Lead",
                            "selected": false
                          },
                        ]
                      }
                    },





                                    //Implement this for V.2 thanks
                                    //--------------------------------------------------------------------
                                    // {
                                    //   "textParagraph": {
                                    //     "text": "Type of Request(Select those that apply)"
                                    //   }
                                    // },

                                    
                                    // {
                                    //   "columns": {
                                    //     "columnItems": [
                                    //       {
                                    //         //"horizontalSizeStyle": "FILL_MINIMUM_SPACE",
                                    //         //"horizontalAlignment": "CENTER",
                                    //         //"verticalAlignment": "TOP",
                                    //         "widgets": [
                                    //           {
                                    //             "selectionInput": {
                                    //               "type": "CHECK_BOX",
                                    //               "label": "",
                                    //               "name": "itypeOfRequestEngineeringTest",
                                    //               "items": [
                                    //                 {
                                    //                   "text": "App-script",
                                    //                   "value": "App-script",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Automation",
                                    //                   "value": "Automation",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Codes",
                                    //                   "value": "Codes",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Demo",
                                    //                   "value": "Demo",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Documentation",
                                    //                   "value": "Documentation",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Forms",
                                    //                   "value": "Forms",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Looker/GDS",
                                    //                   "value": "Looker/GDS",
                                    //                   "selected": false
                                    //                 },
                                                    
                                                  
                                    //               ]
                                    //             }
                                    //           },
                                    //         ]
                                    //       },
                                    //       {
                                    //         //"horizontalSizeStyle": "FILL_AVAILABLE_SPACE",
                                    //         //"horizontalAlignment": "CENTER",
                                    //         //"verticalAlignment": "TOP",
                                    //         "widgets": [
                                    //           {
                                    //             "selectionInput": {
                                    //               "type": "CHECK_BOX",
                                    //               "label": "",
                                    //               "name": "typeOfRequestEngineeringTest2",
                                    //               "items": [
                                                    
                                    //                 {
                                    //                   "text": "Maintenance",
                                    //                   "value": "Maintenance",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Meeting",
                                    //                   "value": "Meeting",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Research",
                                    //                   "value": "Research",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Trouble-shooting",
                                    //                   "value": "Trouble-shooting",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Website",
                                    //                   "value": "Website",
                                    //                   "selected": false
                                    //                 },
                                    //                 {
                                    //                   "text": "Workflow Diagram",
                                    //                   "value": "Workflow Diagram",
                                    //                   "selected": false
                                    //                 },
                                                  
                                    //               ]
                                    //             }
                                    //           },
                                    //         ]
                                    //       }
                                    //     ]
                                    //   }
                                    // },
                                    //--------------------------------------------------------------------







                                      {
                                        "selectionInput": {
                                          "type": "CHECK_BOX",
                                          "label": "Type of Request (Select ALL those that apply)*",
                                          "name": "typeOfRequestEngineering",
                                          "items": [
                                      {
                                        "text": "App-script",
                                        "value": "App-script",
                                        "selected": false
                                      },
                                      {
                                        "text": "Automation",
                                        "value": "Automation",
                                        "selected": false
                                      },
                                      {
                                        "text": "Codes",
                                        "value": "Codes",
                                        "selected": false
                                      },
                                      {
                                        "text": "Demo",
                                        "value": "Demo",
                                        "selected": false
                                      },
                                      {
                                        "text": "Documentation",
                                        "value": "Documentation",
                                        "selected": false
                                      },
                                      {
                                        "text": "Forms",
                                        "value": "Forms",
                                        "selected": false
                                      },
                                      {
                                        "text": "Looker/GDS",
                                        "value": "Looker/GDS",
                                        "selected": false
                                      },
                                      {
                                        "text": "Maintenance",
                                        "value": "Maintenance",
                                        "selected": false
                                      },
                                      {
                                        "text": "Meeting",
                                        "value": "Meeting",
                                        "selected": false
                                      },
                                      {
                                        "text": "Research",
                                        "value": "Research",
                                        "selected": false
                                      },
                                      {
                                        "text": "Trouble-shooting",
                                        "value": "Trouble-shooting",
                                        "selected": false
                                      },
                                      {
                                        "text": "Website",
                                        "value": "Website",
                                        "selected": false
                                      },
                                      {
                                        "text": "Workflow Diagram",
                                        "value": "Workflow Diagram",
                                        "selected": false
                                      },
                                    ]
                                  }
                                },

                                                    
                                {
                                  // Add an empty section for spacing
                                },
                                {
                                  // Add an empty section for spacing
                                },
                              
                                

                  
                                {
                                  "buttonList": {
                                    "buttons": [

                                      {
                                        "text": "Next",
                                        "onClick": {
                                          "action": {

                                              "function": "nextDialogforEngineering",
                                              "parameters": [
                                                {
                                                  "key": "nextDialogforEngineering",
                                                  "value": "nextDialogforEngineering"
                                                }
                                              ]
                                          }
                                        }
                                      },
                                      
                                    ]
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  }
                };
              }



function nextDialogforEngineering(event) {
var requestTypeEngineering = event.common.formInputs.requestTypeEngineering[""].stringInputs.value[0]
var typeOfRequestEngineering = event.common.formInputs.typeOfRequestEngineering[""].stringInputs.value[0]



      if(event.common.formInputs.requestTypeEngineering[""].stringInputs.value[0]=='Internal'){
        return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "ENGINEERING",
                              "widgets": [
                                {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                    }
                  },
                  {
                    "divider": {}
                  },
                                
                                            {
                                              "textInput": {
                                                "label": "Hiver permalink*",
                                                "type": "SINGLE_LINE",
                                                "name": "hiverPermalinkEngineering"
                                              }
                                            },
                                            {
                                              "textInput": {
                                                "label": "Request Summary/Subject*",
                                                "type": "SINGLE_LINE",
                                                "name": "requestSubjectEngineering"
                                              }
                                            },
                                            {
                                              "textInput": {
                                                "label": "Request Details*",
                                                "type": "MULTIPLE_LINE",
                                                "name": "requestDetailsEngineering"
                                              }
                                            },
                                            
                
                                            {
                                                "buttonList": {
                                                  "buttons": [
                                                    
                                                    {
                                                      "text": "Submit",
                                                      "onClick": {
                                                        "action": {

                                                            "function": "submitDialogEngineering",
                                                            "parameters": [
                                                              {
                                                                "key": "submitDialogEngineering",
                                                                "value": "submitDialogEngineering"
                                                              },
                                                              {
                                                                "key": "requestTypeEngineering",
                                                                "value": requestTypeEngineering
                                                              },
                                                            ]
                                                        }
                                                      }
                                                    },
                                                    
                                                    
                                                  ]
                                                }
                                              }
                                          ] 
                            }
                          ]
                        }
                      }
                    }
                  }
                };
      }
      else if(event.common.formInputs.requestTypeEngineering[""].stringInputs.value[0]=='CC Support'){
         return {
                                      "action_response": {
                                        "type": "DIALOG",
                                        "dialog_action": {
                                          "dialog": {
                                            "body": {
                                              "sections": [
                                                {
                                                  "header": "ENGINEERING",
                                                  "widgets": [
                                                    {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                    }
                  },
                  {
                    "divider": {}
                  },
                                      {
                                        "textInput": {
                                          "label": "Client Primary Domain*",
                                          "type": "SINGLE_LINE",
                                          "name": "clientDomainEngineering"
                                        }
                                      },

                                      


                                      {
                                        "textInput": {
                                          "label": "Hiver permalink*",
                                          "type": "SINGLE_LINE",
                                          "name": "hiverPermalinkEngineering"
                                        }
                                      },
                                      {
                                        "textInput": {
                                          "label": "Region  (type N/A if not applicable)*",
                                          "type": "SINGLE_LINE",
                                          "name": "regionEngineering"
                                        }
                                      },

                                        {
                                          // Add an empty section for spacing
                                        },
                                        {
                                          // Add an empty section for spacing
                                        },                  

                                        {
                                          // Add an empty section for spacing
                                        },
                                        {
                                          // Add an empty section for spacing
                                        },
                                        {
                                              "textInput": {
                                                "label": "Request Summary/Subject*",
                                                "type": "SINGLE_LINE",
                                                "name": "requestSubjectEngineering"
                                              }
                                            }, 
                                        {
                                          "textParagraph": {
                                            "text": "Request Details:"
                                          }
                                      },
                                      {
                                        "textInput": {
                                          "label": "Request Details*",
                                          "type": "MULTIPLE_LINE",
                                          "name": "requestDetailsEngineering"
                                        }
                                      },
                                      
                                
                                        {
                                        "buttonList": {
                                          "buttons": [
                                            
                                            {
                                              "text": "Submit",
                                              "onClick": {
                                                "action": {

                                                    "function": "submitDialogEngineering",
                                                    "parameters": [
                                                      {
                                                        "key": "submitDialogEngineering",
                                                        "value": "submitDialogEngineering"
                                                      },
                                                      {
                                                        "key": "requestTypeEngineering",
                                                        "value": requestTypeEngineering
                                                      },
                                                    ]
                                                }
                                              }
                                            },
                                            
                                            
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          }
                        }
                      };
      }
      else if(event.common.formInputs.requestTypeEngineering[""].stringInputs.value[0]=='CC Growth'){
         return {
                                      "action_response": {
                                        "type": "DIALOG",
                                        "dialog_action": {
                                          "dialog": {
                                            "body": {
                                              "sections": [
                                                {
                                                  "header": "ENGINEERING",
                                                  "widgets": [
                                                    {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                    }
                  },
                  {
                    "divider": {}
                  },
                                      {
                                        "textInput": {
                                          "label": "Client Primary Domain*",
                                          "type": "SINGLE_LINE",
                                          "name": "clientDomainEngineering"
                                        }
                                      },

                                      


                                      {
                                        "textInput": {
                                          "label": "Hiver permalink*",
                                          "type": "SINGLE_LINE",
                                          "name": "hiverPermalinkEngineering"
                                        }
                                      },
                                      {
                                        "textInput": {
                                          "label": "Region  (type N/A if not applicable)*",
                                          "type": "SINGLE_LINE",
                                          "name": "regionEngineering"
                                        }
                                      },

                                        {
                                          // Add an empty section for spacing
                                        },
                                        {
                                          // Add an empty section for spacing
                                        },                  

                                        {
                                          // Add an empty section for spacing
                                        },
                                        {
                                          // Add an empty section for spacing
                                        }, 
                                        {
                                              "textInput": {
                                                "label": "Request Summary/Subject*",
                                                "type": "SINGLE_LINE",
                                                "name": "requestSubjectEngineering"
                                              }
                                            },
                                        {
                                                        "textParagraph": {
                                                          "text": "Request Details:"
                                                        }
                                                    },
                                      {
                                        "textInput": {
                                          "label": "Request Details*",
                                          "type": "MULTIPLE_LINE",
                                          "name": "requestDetailsEngineering"
                                        }
                                      },
                                     
                                
                                        {
                                        "buttonList": {
                                          "buttons": [
                                            
                                            {
                                              "text": "Submit",
                                              "onClick": {
                                                "action": {

                                                    "function": "submitDialogEngineering",
                                                    "parameters": [
                                                      {
                                                        "key": "submitDialogEngineering",
                                                        "value": "submitDialogEngineering"
                                                      },
                                                      {
                                                        "key": "requestTypeEngineering",
                                                        "value": requestTypeEngineering
                                                      },
                                                    ]
                                                }
                                              }
                                            },
                                            
                                            
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          }
                        }
                      };
      }
      else if(event.common.formInputs.requestTypeEngineering[""].stringInputs.value[0]=='Lead'){
                            return {
                                      "action_response": {
                                        "type": "DIALOG",
                                        "dialog_action": {
                                          "dialog": {
                                            "body": {
                                              "sections": [
                                                {
                                                  "header": "ENGINEERING",
                                                  "widgets": [
                                                    {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                    }
                  },
                  {
                    "divider": {}
                  },
                                      {
                                        "textInput": {
                                          "label": "Client Primary Domain*",
                                          "type": "SINGLE_LINE",
                                          "name": "clientDomainEngineering"
                                        }
                                      },

                                      


                                      {
                                        "textInput": {
                                          "label": "Hiver permalink*",
                                          "type": "SINGLE_LINE",
                                          "name": "hiverPermalinkEngineering"
                                        }
                                      },
                                      {
                                        "textInput": {
                                          "label": "Region  (type N/A if not applicable)*",
                                          "type": "SINGLE_LINE",
                                          "name": "regionEngineering"
                                        }
                                      },

                                        {
                                          // Add an empty section for spacing
                                        },
                                        {
                                          // Add an empty section for spacing
                                        },                  

                                        {
                                          // Add an empty section for spacing
                                        },
                                        {
                                          // Add an empty section for spacing
                                        }, 
                                        {
                                              "textInput": {
                                                "label": "Request Summary/Subject*",
                                                "type": "SINGLE_LINE",
                                                "name": "requestSubjectEngineering"
                                              }
                                            },
                                        {
                                                        "textParagraph": {
                                                          "text": "Request Details:"
                                                        }
                                                    },
                                      {
                                        "textInput": {
                                          "label": "Request Details*",
                                          "type": "MULTIPLE_LINE",
                                          "name": "requestDetailsEngineering"
                                        }
                                      },
                                      
                                
                                        {
                                        "buttonList": {
                                          "buttons": [
                                            
                                            {
                                              "text": "Submit",
                                              "onClick": {
                                                "action": {

                                                    "function": "submitDialogEngineering",
                                                    "parameters": [
                                                      {
                                                        "key": "submitDialogEngineering",
                                                        "value": "submitDialogEngineering"
                                                      },
                                                      {
                                                        "key": "requestTypeEngineering",
                                                        "value": requestTypeEngineering
                                                      },
                                                    ]
                                                }
                                              }
                                            },
                                            
                                            
                                          ]
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            }
                          }
                        }
                      };
                    }



      

      // let clientDomain = event.common.formInputs.clientDomain[""].stringInputs.value[0]
      // "clientLink" : event.common.formInputs.hiverPermalink[""].stringInputs.value[0]
      // "productNo" : event.common.formInputs.ccMembership[""].stringInputs.value[0]
      // "noOfLicences" :event.common.formInputs.Other[""].stringInputs.value[0]
      // "levelOfugency": event.common.formInputs.clientDomain[""].stringInputs.value[0]

}

function engineeringInternalRequest(event){
  var requestType = event.common.formInputs.requestTypeEngineering[""].stringInputs.value[0]
   return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "ENGINEERING",
                              "widgets": [
                                {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                    }
                  },
                  {
                    "divider": {}
                  },
                                                   {
                    "textInput": {
                      "label": "Request Details",
                      "type": "MULTIPLE_LINE",
                      "name": "requestDetailsEngineering"
                    }
                  },
            
                    {
                    "buttonList": {
                      "buttons": [
                        
                        {
                          "text": "Submit",
                          "onClick": {
                            "action": {

                                "function": "submitDialogEngineering",
                                "parameters": [
                                  {
                                    "key": "submitDialogEngineering",
                                    "value": "submitDialogEngineering"
                                  },
                                  {
                                    "key": "requestType",
                                    "value": requestType
                                  },
                                ]
                            }
                          }
                        },
                        
                        
                      ]
                    }
                  }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  }
                };
}





function engineeringExternalRequest(event){
  var requestType = event.common.formInputs.requestTypeEngineering[""].stringInputs.value[0]
                  return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "ENGINEERING",
                              "widgets": [
                                {
                    "textParagraph":{
                      "text": "Note: All fields with * are required. Please make sure all required fields are complete, indicate 'N/A' if not applicable"
                    }
                  },
                  {
                    "divider": {}
                  },

                                  {
                                    "textInput": {
                                      "label": "Client Primary Domain",
                                      "type": "SINGLE_LINE",
                                      "name": "clientDomainEngineering"
                                    }
                                  },

                                  


                                  {
                                    "textInput": {
                                      "label": "Hiver permalink",
                                      "type": "SINGLE_LINE",
                                      "name": "hiverPermalinkEngineering"
                                    }
                                  },

                                  {
                                    // Add an empty section for spacing
                                  },
                                  {
                                    // Add an empty section for spacing
                                  },                  

                                  {
                                    // Add an empty section for spacing
                                  },
                                  {
                                    // Add an empty section for spacing
                                  }, 
                                  {
                                      "textParagraph": {
                                        "text": "Request Details:"
                                      }
                                  },
                                  {
                                    "textInput": {
                                      "label": "Request Details",
                                      "type": "MULTIPLE_LINE",
                                      "name": "requestDetailsEngineering"
                                    }
                                  },
            
                    {
                    "buttonList": {
                      "buttons": [
                        
                        {
                          "text": "Submit",
                          "onClick": {
                            "action": {

                                "function": "submitDialogEngineering",
                                "parameters": [
                                  {
                                    "key": "submitDialogEngineering",
                                    "value": "submitDialogEngineering"
                                  },
                                  {
                                    "key": "requestType",
                                    "value": requestType
                                  },
                                ]
                            }
                          }
                        },
                        
                        
                      ]
                    }
                  }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  }
                };
}


function submitDialogEngineering(event) {
      sendToZapierEngineering(event) 

                  return {
                  "action_response": {
                    "type": "DIALOG",
                    "dialog_action": {
                      "dialog": {
                        "body": {
                          "sections": [
                            {
                              "header": "ENGINEERING",
                              "widgets": [
                                {
                                    "textParagraph": {
                                      "text": "Thank You, "+event.user.displayName+"("+event.user.email+")! Your response has been recorded. You may close this dialog now."
                                    }
                                },
                              ]
                            }
                          ]
                        }
                      }
                    }
                  }
                };
      

}

