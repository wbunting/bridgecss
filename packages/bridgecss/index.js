let fs = import 'fs';

function getAssetData() {
   return fs.readFileSync('./assets/bridge.scss')
}

module.exports = { getAssetData };
