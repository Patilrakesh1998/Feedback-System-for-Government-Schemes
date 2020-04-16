(function(window, undefined) {
  var dictionary = {
    "6aaf0456-f4d0-47b3-b7c0-ca0bd404fc5f": "ContinueFeedback2",
    "66da8cdd-d949-44d2-ae0f-e06717d08e70": "Screen 5",
    "119a9a44-784b-4132-aa66-bb17fbc563bc": "ContinueFeedback",
    "232781b4-0f99-46d4-b74a-33c5b3fe6acb": "Screen 4",
    "20f38ab8-e02b-4c87-a3e1-88340bb2b143": "Screen 3",
    "82d55eec-1543-4429-abf1-8be50f9ab074": "GoogleLoginPassword",
    "22820e04-eeed-4090-97bc-4c233681e526": "Screen 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "e5b761b7-dde5-4319-8c0b-734eebc25dcd": "Successfully-Submitted",
    "0d6bd3de-546d-478d-8911-2921aff53c81": "AfterFarming",
    "3a2f970a-92d5-4824-849a-ed2983941c03": "Home-Page",
    "54de3da5-baac-4227-81e1-76829e96e6b1": "GoogleLoginEmail",
    "4cd3536e-41d7-47e7-8803-3a78b8ef4adf": "FeedbackForm",
    "62b497e5-b3e7-42cb-8a74-d2fb1b68d866": "Screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);