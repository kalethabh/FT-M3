const { stdout } = require('process');
const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js')

function bash() {
   process.stdout.write("prompt > ");
   process.stdin.on("data",(data) =>{

      var args = String(data).trim().split(" ")
      var cmd = args.shift()
      args = args.join(" ")

      commands[cmd] ? commands[cmd](print, args) : print(`command not found: ${cmd}`);
      
   });
}

function print(output) {
   process.stdout.write(output);
   process.stdout.write("\nprompt > ");

}

bash();
module.exports = {
   print,
   bash,
};
