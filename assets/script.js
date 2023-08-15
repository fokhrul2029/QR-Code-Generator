function generateQRCode() {
  const data = document.getElementById("dataInput").value;
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";

  const qrcode = new QRCode(qrcodeContainer, {
    text: data,
    width: 128,
    height: 128,
  });
}

function downloadQRCode() {
  const qrcodeCanvas = document.querySelector("#qrcode canvas");
  const downloadLink = document.createElement("a");
  downloadLink.href = qrcodeCanvas.toDataURL("image/jpeg");
  downloadLink.download = "qrcode.jpg";
  downloadLink.click();
}


