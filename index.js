const os = require("os");

const osInfo = {};
const systemInfo = (options = "tiny") => {
  switch (options) {
    case "tiny":
      osInfo.type = os.type();
      osInfo.platform = os.platform();
      osInfo.architecture = os.arch();
      osInfo.release = os.release();
      return osInfo;
    case "medium":
      osInfo.type = os.type();
      osInfo.platform = os.platform();
      osInfo.architecture = os.arch();
      osInfo.release = os.release();
      osInfo.totalMemory = `${Math.floor(os.totalmem() / 1000000)} MB`;
      osInfo.freeMemory = `${Math.floor(os.freemem() / 1000000)} MB`;
      osInfo.homeDirectory = os.homedir();
      osInfo.hostName = os.hostname();
      return osInfo;
    case "complete":
      osInfo.type = os.type();
      osInfo.platform = os.platform();
      osInfo.architecture = os.arch();
      osInfo.release = os.release();
      osInfo.totalMemory = `${Math.floor(os.totalmem() / 1000000)} MB`;
      osInfo.freeMemory = `${Math.floor(os.freemem() / 1000000)} MB`;
      osInfo.homeDirectory = os.homedir();
      osInfo.hostName = os.hostname();
      osInfo.cpuInfo = os.cpus();
      osInfo.cpuInfo.map((item) => delete item.times);
      const netWorkInfo = os.networkInterfaces();
      const keys = Object.keys(netWorkInfo);
      keys.map((key) => {
        osInfo[key] = netWorkInfo[key];
      });
      return osInfo;
    default:
      throw new Error("Unsupported Option");
  }
};

module.exports = { systemInfo };
