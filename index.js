const os = require('os');

const osInfo={};

osInfo.architecture= os.arch();
osInfo.platform=os.platform();
osInfo.type=os.type();
osInfo.totalMemory=os.totalmem();
osInfo.release=os.release();
osInfo.cpuInfo=os.cpus();
osInfo.freeMemory=os.freemem();
osInfo.homeDirectory=os.homedir();
osInfo.hostName=os.hostname();
osInfo.netWorks=os.networkInterfaces();

console.log('info ',osInfo);
