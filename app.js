const express = require('express');
const morgan = require('morgan');
const schedule = require('node-schedule');

var player = require('play-sound')(opts = {});
var sched = [];

/*var bells = [
	['5 * * * * *','./resources/sound.mp3'],
	['10 * * * * *', './resources/mbeernut.mp3'],
];*/

var bells = [
	['50 8 * * 1-5','./resources/sound.mp3'],
	['10 9 * * 1-5', './resources/mbeernut.mp3'],
	['50 9 * * 1-5', './resources/mbeernut.mp3'],
	['30 10 * * 1-5', './resources/mbeernut.mp3'],
	['50 10 * * 1-5', './resources/mbeernut.mp3'],
	['30 11 * * 1-5', './resources/mbeernut.mp3'],
	['10 12 * * 1-5', './resources/mbeernut.mp3'],
	['50 12 * * 1-5', './resources/mbeernut.mp3'],
	['50 13 * * 1-5', './resources/mbeernut.mp3'],
	['30 14 * * 1-5', './resources/mbeernut.mp3'],
	['15 15 * * 1-5', './resources/mbeernut.mp3']
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


/*for (var i=0; i<2; i++) {
	sched[i] = schedule.scheduleJob(bells[i][0], function(){
		player.play(String(bells[i][1]), { timeout: 300 }, function(err){
  			if (err) throw err
		})
	});
}*/