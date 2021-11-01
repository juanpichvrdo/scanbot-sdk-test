import "./style.css";
import ScanbotSDK from "scanbot-web-sdk";

const barcodeFormats = ["CODE_39", "CODE_128"];

const config = {
    containerId: "scanner",
    style: {
        window: {
            aspectRatio: 1,
            paddingPropLeft: 0.1,
            borderColor: "white",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
        },
        hint: "",
    },
    onBarcodesDetected: onBarcodesDetected,
    onError: onScannerError,
    barcodeFormats: barcodeFormats,
};

async function onBarcodesDetected(e) {
    let text = "";
    e.barcodes.forEach((barcode) => {
        text += " " + barcode.text + " (" + barcode.format + "),";
    });
    window.alert(`code ${text.slice(0, -1)}`);
}

async function onScannerError(e) {
    window.alert(`Error Scanning: ${e}`);
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
        window.alert(`Error: ${e}`);
        console.log(e);
    }
})();
