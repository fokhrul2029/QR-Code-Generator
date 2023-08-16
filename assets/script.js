function generateQRCode() {
  const data = document.getElementById("dataInput").value;
  let size = document.getElementById('sizeInput').value 
  size = parseInt(size) || 200
  let qrcodeContainer = document.getElementById("qrcode");
  if(!qrcodeContainer){
    qrcodeContainer.textContant = "Inter Data"
  }
  qrcodeContainer.innerHTML = "";

  
  const qrcode = new QRCode(qrcodeContainer, {
    text: data,
    width: size,
    height: size,
  });
}

function downloadQRCode() {
  const qrcodeCanvas = document.querySelector("#qrcode canvas");
  const downloadLink = document.createElement("a");
  downloadLink.href = qrcodeCanvas.toDataURL("image/jpeg");
  downloadLink.download = "qrcode.jpg";
  downloadLink.click();
}


