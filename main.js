if ('Worker' in window) { // Kiểm tra phiên bản browser có support Worker hay không
    const worker = new Worker('worker.js')
    worker.onmessage = function (event) {
        const message = event.data;
    }
} else {
    /**
     * Browser Not supported
     */
}