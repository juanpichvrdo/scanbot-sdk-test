import "./style.css";
import ScanbotSDK from "scanbot-web-sdk";

const barcodeFormats = ["CODE_39", "CODE_128"];

const config = {
    containerId: "scanner",
    onBarcodesDetected: onBarcodesDetected,
    onError: onScannerError,
    barcodeFormats: barcodeFormats,
};

async function onBarcodesDetected(e) {
    window.alert(e);
}

async function onScannerError(e) {
    console.log("Error:", e);
}

(async () => {
    try {
        const myLicenseKey = "";
        const scanbotSDK = await ScanbotSDK.initialize({
            licenseKey: myLicenseKey,
        });
        await scanbotSDK.createBarcodeScanner(config);
    } catch (e) {
        console.log(e);
    }
})();
