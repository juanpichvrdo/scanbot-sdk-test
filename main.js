import "./style.css";
import ScanbotSDK from "scanbot-web-sdk";

console.log(ScanbotSDK);

const myLicenseKey = "";
const scanbotSDK = await ScanbotSDK.initialize({
    licenseKey: myLicenseKey,
});

const barcodeFormats = ["CODE_39", "CODE_128"];

const config = {
    containerId: "scanner",
    onBarcodesDetected: onBarcodesDetected,
    onError: onScannerError,
    barcodeFormats: barcodeFormats,
};

async function onBarcodesDetected(e) {
    console.log(e);
}

async function onScannerError(e) {
    console.log("Error:", e);
}

await scanbotSDK.createBarcodeScanner(config);
