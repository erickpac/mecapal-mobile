const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const fs = require('fs');

const projectRoot = fs.realpathSync(__dirname);
const config = getDefaultConfig(projectRoot);
config.projectRoot = projectRoot;
config.watchFolders = [projectRoot];

module.exports = withNativeWind(config, { input: './global.css' });
