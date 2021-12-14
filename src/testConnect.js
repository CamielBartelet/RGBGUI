let { PythonShell } = require("python-shell");

//set temporary path since enoent error is thrown
let options = {
  pythonOptions: ['-u'],
  pythonPath: 'C:/Users/Camiel/AppData/Local/Programs/Python/Python310/python',
}

var txt = "Go";

// const selectedSpeeds = document.getElementsByClassName('speed')

// for (var i = 0; i < selectedSpeeds.length; i++){
//      selectedSpeeds[i].onclick = function() { setNr(this);};
// }

async function setNr(e) {

let pyshell = new PythonShell('engine/my_script.py', options);

// sends a message to the Python script via stdin
pyshell.send(+e.value);

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log("message" + message);
  txt = message;
  document.getElementById('p1').innerHTML = txt;
});

// end the input stream and allow the process to exit
pyshell.end(function (err,code,signal) {
  if (err) throw err;
  // console.log('The exit code was: ' + code);
  // console.log('The exit signal was: ' + signal);
  console.log('finished');
});
}
