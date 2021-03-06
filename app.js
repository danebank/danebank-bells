const express = require('express');
const morgan = require('morgan');
const schedule = require('node-schedule');

// initialise app
const app = express();
const loopSeconds = 20;
const port = '3000';
var player = require('play-sound')(opts = {});
var evacSound;
var evacOn = false;
var sched = [];

var bells = [
	['50 8 * * 1-5','./resources/sound.mp3'],
	['10 9 * * 1-5', './resources/mbeernut.mp3'],
	['50 9 * * 1-5', './resources/sound.mp3'],
	['30 10 * * 1-5', './resources/mbeernut.mp3'],
	['50 10 * * 1-5', './resources/sound.mp3'],
	['30 11 * * 1-5', './resources/mbeernut.mp3'],
	['10 12 * * 1-5', './resources/sound.mp3'],
	['50 12 * * 1-5', './resources/mbeernut.mp3'],
	['50 13 * * 1-5', './resources/sound.mp3'],
	['30 14 * * 1-5', './resources/mbeernut.mp3'],
	['15 15 * * 1-5', './resources/sound.mp3']
];


sched = schedule.scheduleJob(bells[0][0], function(){ player.play(bells[0][1], { timeout: 300 }, function(err){ if (err) throw err }) });
sched = schedule.scheduleJob(bells[1][0], function(){ player.play(bells[1][1], { timeout: 300 }, function(err){ if (err) throw err }) });
sched = schedule.scheduleJob(bells[2][0], function(){ player.play(bells[2][1], { timeout: 300 }, function(err){ if (err) throw err }) });
sched = schedule.scheduleJob(bells[3][0], function(){ player.play(bells[3][1], { timeout: 300 }, function(err){ if (err) throw err }) });
sched = schedule.scheduleJob(bells[4][0], function(){ player.play(bells[4][1], { timeout: 300 }, function(err){ if (err) throw err }) });
sched = schedule.scheduleJob(bells[5][0], function(){ player.play(bells[5][1], { timeout: 300 }, function(err){ if (err) throw err }) });
sched = schedule.scheduleJob(bells[6][0], function(){ player.play(bells[6][1], { timeout: 300 }, function(err){ if (err) throw err }) });
sched = schedule.scheduleJob(bells[7][0], function(){ player.play(bells[7][1], { timeout: 300 }, function(err){ if (err) throw err }) });
sched = schedule.scheduleJob(bells[8][0], function(){ player.play(bells[8][1], { timeout: 300 }, function(err){ if (err) throw err }) });
sched = schedule.scheduleJob(bells[9][0], function(){ player.play(bells[9][1], { timeout: 300 }, function(err){ if (err) throw err }) });
sched = schedule.scheduleJob(bells[10][0], function(){ player.play(bells[10][1], { timeout: 300 }, function(err){ if (err) throw err }) });

// main page
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

// sound off form post
app.post('/evac', function(req, res) {
	evacOn = true;
	soundEvac();
	res.sendFile(__dirname + '/index.html');
});

// all sounds off form post
app.post('/', function(req, res) {
	evacOn = false;
	res.sendFile(__dirname + '/index.html');
	evacSound.kill();
});

// port listener
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

function mainLoop() {
	if (evacOn == true) { evacSound.kill(); soundEvac(); }
	setTimeout(mainLoop, loopSeconds * 1000);
}

function soundEvac() {
	evacSound = player.play('./resources/evac.mp3', { timeout: 300 }, function(err){
  			if (err && !err.killed) throw err
	});
}

mainLoop();