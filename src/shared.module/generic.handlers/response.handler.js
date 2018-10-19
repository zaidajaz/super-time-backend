exports.sendResponse = function(res, messages, responseObj, isValid) {
    res.json({
        messages: messages,
        responseObj: responseObj,
        valid: isValid
    });
}