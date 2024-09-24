const fs = require("fs");
const seco = require("seco-file");
const zlib = require("zlib");
const bs = require("bitcoin-seed");
const path = require("path");

const shrinkBuffer = (buf) => {
    const t = buf.readUInt32BE(0);
    return buf.slice(4, 4 + t);
}

(async () => {
    const key = JSON.parse(fs.readFileSync(path.join(__dirname, "passphrase.json"))).passphrase
    if(!key) {
        console.error(`No passphrase found in passphrase.json`)
        return
    }
    // love unclear
    const mnemonic = bs.fromBuffer(zlib.gunzipSync(shrinkBuffer((await seco.read(path.join(__dirname, "seed.seco"), key)).data))).mnemonicString;
    console.log(mnemonic);
    process.exit(0);
})();