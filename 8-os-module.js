const os = require("os")

// info about current user
const user = os.userInfo()
console.log(user);

//returning system uptime
console.log(`The System uptime: ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS);