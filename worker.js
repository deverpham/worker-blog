
/**
 * function này sẽ được thực hiện khi worker nhận message
 */
self.onmessage = function (event) {
    const message = event.data;
}

/**
 * self.postMessage là function để gửi message tới thread website
 * @param {object} message 
 */
function sendMessage(message) {
    return self.postMessage(message);
}