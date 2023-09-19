
let qrcode = document.getElementById("qrcode")
let qrimg = document.getElementById("qrimg")
let content = document.getElementById("content")

function generateQRCode() {
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+content.value;
        

}
