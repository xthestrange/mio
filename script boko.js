const roomName = " ๖໐k໐ Şคlค ";
 
const maxPlayers = 25;
const roomPublic = true;
const roomPassword = "bokoharam#2023"
const noPlayer = true;
const geo = [{code: "CL", lat: -33.456, lon: -70.648} ];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, password: roomPassword, public: roomPublic, noPlayer: true, geo: geo[0] });
 
var masterPassword = "boko:v" 
var adminPassword = "paralelepipedo123";
console.log("adminPassword : " + adminPassword);
 
const Uniform = { COUNTRY: 0, CLUBLA: 1 };
var playersHistorial = [];
var discordInterval2 = 5;
 
    room.setScoreLimit(0);
    room.setTimeLimit(8);
	room.setTeamsLock(true);
	
var uniforms = {
	/* SELECCIONES */
	"boko": {
		"name": '๖໐k໐ hคrค๓.',
		"type": Uniform.COUNTRY,
		"emoji": '⚫⚪',
		"angle": 60,
		"textcolor": 0xFFFFFF,
		"color1": 0x000000,
		"color2": 0x1F1F1F,
		"color3": null,
		"angle2": 60,
		"textcolor2": 0x000000,
		"color21": 0xFFFFFF,
		"color22": 0xD9D9D9,
		"color23": null,
	},

	/* ESTANDAR */
		"red": {
		"name": 'Rojo',
		"type": Uniform.CLUBLA,
		"emoji": '🔴🔴',
		"angle": 60,
		"textcolor": 0xF2D3B3,
        "color1": 0xED8470,
        "color2": 0xC76F5F,
        "color3": 0xA15A4C,
		"angle2": 90,
		"textcolor2": 0xFFFFFF,
		"color21": 0xC4B702,
		"color22": 0xC4B702,
		"color23": 0xC4B702,
	},
	    "blu": {
		"name": 'Azul',
		"type": Uniform.CLUBLA,
		"emoji": '🔵🔵',
		"angle": 0,
		"textcolor": 0x1400CF,
		"color1": 0x000000,
		"color2": 0x000000,
		"color3": 0x000000,
		"angle2": 0,
		"textcolor2": 0xFFFFFF,
		"color21": 0x0208C4,
		"color22": 0x0208C4,
		"color23": 0x0208C4,	
	}
}

/* OPTIONS */

var nameHome = '๖໐k໐ hคrค๓.';
var acronymHome = "boko";
var nameGuest = 'Azul';
var acronymGuest = "blu";
var emojiHome = '🔴🔴';
var emojiGuest = '🔵🔵';
var goalsHome = [];
var goalsGuest = [];

room.setTeamColors(1, uniforms[acronymHome].angle, uniforms[acronymHome].textcolor, [uniforms[acronymHome].color1, uniforms[acronymHome].color2, uniforms[acronymHome].color3]);

room.setTeamColors(2, uniforms[acronymGuest].angle, uniforms[acronymGuest].textcolor, [uniforms[acronymGuest].color1, uniforms[acronymGuest].color2, uniforms[acronymGuest].color3]);	

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11}
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want
const replaysdiscord = "https://discord.com/api/webhooks/1187610405380567081/Rcz5mFMI8HEhinkHo0tBUTTNCiGu9uRn2Kj6EyZbRbCTrMIjrwlAKh7ty_8ZGNCP1eoA";

/* STATS */

var game;
var GKList = ["",""];
var Rposs = 0;
var Bposs = 0;
var point = [{"x": 0, "y": 0}, {"x": 0, "y": 0}]; // created to get ball speed
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;
 
/* OBJECTS */

function Goal(time, team, striker, assist) {
	this.time = time;
	this.team = team;
	this.striker = striker;
	this.assist = assist;
}

function Game(date, scores, goals) {
	this.date = date;
	this.scores = scores;
	this.goals = goals;
} 

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // returns a random number from 0 to max-1
	return Math.floor(Math.random() * Math.floor(max)); 
}

function getTime(scores) { // returns the current time of the game
	return "[" + Math.floor(Math.floor(scores.time/60)/10).toString() + Math.floor(Math.floor(scores.time/60)%10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))/10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))%10).toString() + "]"
}

function getDate() {
    let d = new Date();
    return d.toLocaleTimeString() + ' del ' + d.toLocaleDateString();
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function getUniform(uniformStr) {
	if (uniforms.hasOwnProperty(uniformStr)) return uniformStr;
	for (const [key, value] of Object.entries(uniforms)) {
		for (let i = 0; i < value.aliases.length; i++) {
			if (value.aliases[i] === uniformStr) return key;
		}
	}
	return false;
}

function centerText(string) {
	var space;
	space = parseInt((80 - string.length) * 0.8, 10);
	if (space < 0) {
		space = 0;
	}
	return ' '.repeat(space) + string + ' '.repeat(space)
}

function getTime() {
	const scores = room.getScores();
	var min = parseInt(scores.time / 60);
	var sec = parseInt(scores.time) - min * 60;
	return `[${min}' ${sec}"]`
}

function docketFormat(string1, string2) {
	if (string1 !== undefined && string2 === undefined) {
		var space = 53 - (string1.length) * 0.8;
		return ' '.repeat(space) + string1
	} else if (string2 !== undefined && string1 === undefined) {
		return ' '.repeat(77) + string2
	} else if (string2 !== undefined && string1 !== undefined) {
		var space = 16 - (string1.length + 10 + string2.length)
		return ' '.repeat(12) + centerText(string1 + ' '.repeat(10) + string2)
	} else if (string1 === undefined && string2 === undefined) {
		return ''
	}
}
 
/* SETTINGS */

function getRandomInt(max) { // returns a random number from 0 to max-1
	return Math.floor(Math.random() * Math.floor(max)); 
}

function sendDiscordWebhook(scores){
		const form = new FormData();
		form.append(
			"file",
			new File([room.stopRecording()],
				`boko_haram  vs __ .hbr2`,
				{type: "text/plain"}
				)
			);
	
		const webhook = new XMLHttpRequest();
		webhook.open("POST", replaysdiscord);
		webhook.send(form);
	}

 
function updateTeams() { // update the players' list and all the teams' list
	players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
	teamR = players.filter(p => p.team === Team.RED);
	teamB = players.filter(p => p.team === Team.BLUE);
	teamS = players.filter(p => p.team === Team.SPECTATORS);
}
 
function getAuth(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function getMute(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

function setActivity(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getUniform(uniformStr) {
	if (uniforms.hasOwnProperty(uniformStr)) return uniformStr;
	for (const [key, value] of Object.entries(uniforms)) {
		for (let i = 0; i < value.aliases.length; i++) {
			if (value.aliases[i] === uniformStr) return key;
		}
	}
	return false;
}

function swapFun(player){
    if (player.admin == true){
        if (room.getScores() == null) {
            players = room.getPlayerList();
            for (i = 0; i < players.length; i++){
                if (players[i].team == 1){
                    room.setPlayerTeam(players[i].id, 2);
                }
                else if (players[i].team == 2){
                    room.setPlayerTeam(players[i].id, 1);
                }
            }
			room.sendAnnouncement("Equipos intercambiados!", player.id, 0xFFFFFF, "bold");
			room.sendAnnouncement("Swap hecho por: " + player.name, null, 0xFFFFFF, "bold");
 
     	 }
}
}

/* BALANCE & CHOOSE FUNCTIONS */

function updateRoleOnPlayerIn() {
	updateTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();
}

function getSpecList(player) {
	var cstm = "[PV] Jugadores : ";
	for (var i = 0 ; i < teamS.length ; i++) {
		if (140 - cstm.length < (teamS[i].name + "[" + (i+1) + "], ").length) {
			room.sendChat(cstm, player.id);
			cstm = "... ";
		}
		cstm += teamS[i].name + "[" + (i+1) + "], ";
	}
	cstm = cstm.substring(0,cstm.length - 2);
	cstm += ".";
	room.sendChat(cstm, player.id);
}

/* STATS FUNCTIONS */

function getStats() { // gives possession, ball speed and GK of each team
	if (activePlay) {
		updateTeams();
		lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
		var ballPosition = room.getBallPosition();
		point[1] = point[0];
		point[0] = ballPosition;
		ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60)/15000;
		var k = [-1, Infinity];
		for (var i = 0; i < teamR.length; i++) {
			if (teamR[i].position.x < k[1]) {
				k[0] = teamR[i];
				k[1] = teamR[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		k = [-1, -Infinity];
		for (var i = 0; i < teamB.length; i++) {
			if (teamB[i].position.x > k[1]) {
				k[0] = teamB[i];
				k[1] = teamB[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		findGK();
	}
}

function updateStats() {
	if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
		var stats;
		for (var i = 0; i < allReds.length; i++) {
			localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
			stats[Ss.GA]++;
			lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
			stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
			localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
		}
		for (var i = 0; i < allBlues.length; i++) {
			localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
			stats[Ss.GA]++;
			lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
			stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
			localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
		}
		for (var i = 0; i < game.goals.length; i++) {
			if (game.goals[i].striker != null) {
				if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
					stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
					stats[Ss.GL]++;
					localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
				}
			}
			if (game.goals[i].assist != null) {
				if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
					stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
					stats[Ss.AS]++;
					localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
				}
			}
		}
		if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
			stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
			stats[Ss.GK]++;
			game.scores.blue == 0 ? stats[Ss.CS]++ : null;
			stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
			localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
		}
		if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
			stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
			stats[Ss.GK]++;
			game.scores.red == 0 ? stats[Ss.CS]++ : null;
			stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
			localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
		}
	}
}

function findGK() {
	var tab = [[-1,""], [-1,""]];
	for (var i = 0; i < extendedP.length ; i++) {
		if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
			if (tab[0][0] < extendedP[i][eP.GK]) {
				tab[0][0] = extendedP[i][eP.GK];
				tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
		else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
			if (tab[1][0] < extendedP[i][eP.GK]) {
				tab[1][0] = extendedP[i][eP.GK];
				tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
	}
	GKList = [tab[0][1], tab[1][1]];
}
 
/* EVENTS */

function checkTime() {
	const scores = room.getScores();
	game.scores = scores;
	if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
		if (scores.red != scores.blue) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 3000);
				scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
				setTimeout(() => { room.stopGame(); }, 2000);
			}
			return;
		}
		goldenGoal = true;
	}
	if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
		}
	}
	if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			endGame(Team.SPECTATORS);
			room.stopGame();
			goldenGoal = false;
		}
	}
}

function endGame(winner) {
    const scores = room.getScores();
    game.scores = scores;
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    endGameVariable = true;

    room.sendAnnouncement(centerText(`🏆 FINAL DEL PARTIDO 🏆`), null, 0xFFFFFF, "bold", Notification.CHAT);
    room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, 0xFFFFFF, "bold", 0);
    room.sendAnnouncement(centerText(`${emojiHome} ` + (Rposs * 100).toPrecision(2).toString() + `%` + `  Posesión del Balón  ` + (Bposs * 100).toPrecision(2).toString() + `% ${emojiGuest}`), null, 0xFFFFFF, "bold", 0);

    updateStats();
	sendDiscordWebhook(scores);
    room.sendAnnouncement(centerText("      𝐄𝐥 𝐩𝐚𝐫𝐭𝐢𝐝𝐨 𝐟𝐮𝐞 𝐠𝐫𝐚𝐛𝐚𝐝𝐨 𝐲 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐚 𝐧𝐮𝐞𝐬𝐭𝐫𝐨 𝐃𝐢𝐬𝐜𝐨𝐫𝐝."), null, 0xFFFFFF, "bold");

    setTimeout(function () {
        lastPlayerKick = { id: 0, team: 0 };
        penultPlayerKick = undefined;
        goalsHome = [];
        goalsGuest = [];
    }, 8000);
}

/* GAME MANAGEMENT */

room.onGameStart = function(byPlayer) {
	game = new Game(Date.now(), room.getScores(), []);
    var isTimeAddedShowncuatro = false;
    var isTimeAddedShowncinco = false;
    var isTimeAddedShownsiete = false;
	countAFK = true;
	activePlay = false;
	goldenGoal = false;
	endGameVariable = false;
    Rposs = 0;
	Bposs = 0;
	goalsHome = [];
    goalsGuest = [];
	GKList = [];
	allReds = [];
	allBlues = [];

    room.sendAnnouncement(centerText(`    🥅🥅 EMPIEZA EL PARTIDO 🥅🥅`), null, 0xFFFFFF, "bold", Notification.CHAT);
	room.sendAnnouncement(centerText(`           𝙴𝚕 𝚙𝚊𝚛𝚝𝚒𝚍𝚘 𝚎𝚜𝚝𝚊 𝚜𝚒𝚎𝚗𝚍𝚘 𝚐𝚛𝚊𝚋𝚊𝚍𝚘.`), null, 0xFFFFFF, "bold", 0);
	
	room.startRecording();
}

room.onGameStop = function(byPlayer) {
    const scores = room.getScores();
    game.scores = scores;
    updateTeams();
    sendDiscordWebhook(scores);
    room.sendAnnouncement(centerText("      𝐄𝐥 𝐩𝐚𝐫𝐭𝐢𝐝𝐨 𝐟𝐮𝐞 𝐠𝐫𝐚𝐛𝐚𝐝𝐨 𝐲 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐚 𝐧𝐮𝐞𝐬𝐭𝐫𝐨 𝐃𝐢𝐬𝐜𝐨𝐫𝐝."), null, 0xFFFFFF, "bold");
}

room.onGamePause = function(byPlayer) {
}

room.onGameUnpause = function (byPlayer) {
}

room.onPositionsReset = function() {
	countAFK = true; 
}

/* PLAYER MOVEMENT */ 
 
room.onPlayerJoin = function(player) {
 
 
console.log(player)
console.log(new Date().toLocaleTimeString());
extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
updateRoleOnPlayerIn();
 
playersHistorial.forEach(p => {
        if (p[0] !== player.name && (p[1] === player.auth || p[2] === player.conn)) {
            console.log('Multicuenta: ' + player.name + ' ha entrado con otro nick, antes era ' + p[0] + " - Hora: " + new Date().toLocaleTimeString())
        }
    });
 
playersHistorial.push([player.name, player.auth, player.conn]);
if (localStorage.getItem(player.auth) != null) {
	    var playerData = JSON.parse(localStorage.getItem(player.auth));
		if (JSON.parse(localStorage.getItem(player.auth))[Ss.RL] != "player") {
			room.setPlayerAdmin(player.id, true);
            var announcementColor = (playerData[Ss.RL] == "master") ? 0xFFFF00 : 0x00FFFF;
            var announcementText = player.name + " 𝚎𝚗𝚝𝚛𝚘 𝚊 𝚕𝚊 𝚜𝚊𝚕𝚊 !";
            room.sendAnnouncement(announcementText, null, announcementColor, "bold");
        }
	}
}
 
room.onPlayerChat = function (player, message) {
	originalMessage = message;
	message = message.split(/ +/);
	player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
	if (["!ayuda"].includes(message[0].toLowerCase())) {
		room.sendAnnouncement("[📄] Comandos : !uni, !reserva, !bans, t mensaje ", player.id,0xFFFFFF,"bold");
		player.admin ? room.sendAnnouncement("Admin : !mute #jugador, !swap, !rr, !bans, !entreno, !x3, !x4", player.id,0x00FFFF,"bold") : null;
		if(localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master"){
		room.sendAnnouncement("Master : !clearbans, !setplayer, !setadmin", player.id,0xFFFF00,"bold");
		}
	}
	else if (["!admin"].includes(message[0].toLowerCase())) {
    if (message[1] === masterPassword) {
		room.setPlayerAdmin(player.id, true);
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
        if (stats[Ss.RL] !== "master") {
            stats[Ss.RL] = "master";
            room.sendAnnouncement(player.name + " es ahora un master de sala!", null, 0xFFFF00, "bold");
            localStorage.setItem(getAuth(player), JSON.stringify(stats));
        }
    } else if (message[1] === adminPassword) {
        room.setPlayerAdmin(player.id, true);
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
        if (stats[Ss.RL] !== "master") {  // Se agrega esta condición para evitar sobrescribir si ya es master
            stats[Ss.RL] = "admin";
            room.sendAnnouncement(player.name + " es ahora un admin de sala!", null, 0x00FFFF, "bold");
            localStorage.setItem(getAuth(player), JSON.stringify(stats));
        }
    }
}
	else if (["!unclaim"].includes(message[0].toLowerCase())) {
    var stats;
    if (localStorage.getItem(getAuth(player))) {
        stats = JSON.parse(localStorage.getItem(getAuth(player)));
        if (stats[Ss.RL] === "master" || stats[Ss.RL] === "admin") {
            stats[Ss.RL] = "player";
            room.setPlayerAdmin(player.id, false);
            room.sendAnnouncement(player.name + " ya no es un " + (stats[Ss.RL] === "master" ? "Master" : "Admin") + " de sala.", null, (stats[Ss.RL] === "master" ? 0xFFFF00 : 0x00FFFF));
            localStorage.setItem(getAuth(player), JSON.stringify(stats));
        } else {
            room.sendAnnouncement("No tienes los permisos necesarios para realizar esta acción.", player.id, 0xFFFF00);
        }
    } 
}
    else if(["!x4ffc"].includes(message[0])){
			if(player.admin){
			room.setCustomStadium(x4f);	
			}
			return false;
		}
	else if(["!x3ffc"].includes(message[0])){
			if(player.admin){
			room.setCustomStadium(x3f);	
			}
			return false;
		}
	else if(["!x4bazinga"].includes(message[0])){
			if(player.admin){
			room.setCustomStadium(x4b);	
			}
			return false;
		}
	else if(["!x3bazinga"].includes(message[0])){
			if(player.admin){
			room.setCustomStadium(x3b);	
			}
			return false;
		}	
	else if(["!entreno"].includes(message[0])){
			if(player.admin){
			room.setCustomStadium(entreno1);	
			}
			return false;
		}
		
	else if (["!bb", "!bye", "!xao", "!nv"].includes(message[0].toLowerCase())) {
		room.kickPlayer(player.id, "Bye !", false);
	}			
    else if(["!rr"].includes(message[0].toLowerCase())){
		if(player.admin == true){
		room.stopGame();
		room.startGame();
		room.sendAnnouncement("Reinicio hecho por: " + player.name, null, 0xFFFFFF, "bold");	
		}
		return false;
	}
	else if (["!swap"].includes(message[0].toLowerCase())) {
  if (room.getScores() != null) {
    room.sendAnnouncement("No se puede usar durante un partido", player.id, 0xFFFFFF, "bold", Notification.MODERATION);
    return false;
  }
  
  if (player.admin) {
    if (message.length === 1) {
      var players = room.getPlayerList().filter((player) => player.id !== 0 );
      if (players.length === 0) return false;
      players.forEach(function(player) {	
        if (player.team === 1) {
          room.setPlayerTeam(player.id, 2);
        }
        if (player.team === 2) {
          room.setPlayerTeam(player.id, 1);
        }
      });
      room.sendAnnouncement("🔄 𝚂𝚎 𝚑𝚊𝚗 𝚒𝚗𝚝𝚎𝚛𝚌𝚊𝚖𝚋𝚒𝚊𝚍𝚘 𝚕𝚘𝚜 𝚎𝚚𝚞𝚒𝚙𝚘𝚜!", null, 0xffffff, "bold", Notification.CHAT);
	  room.sendAnnouncement(" Swap hecho por: " + player.name, null, 0xFFFFFF, "bold");
    }
  } else {
    room.sendAnnouncement("Solo admins", player.id, 0xFFFFFF, "bold", Notification.MODERATION);
  }
}
	if (message[0].toLowerCase() === "t") {
        var teamMessage = message.slice(1).join(" "); // Extrae el texto después de la "t" y une las palabras nuevamente
        if (player.team == 1) {
			var teamPlayers = room.getPlayerList().filter((player) => player.team == 1);
			teamPlayers.forEach(function(teamPlayer) {
				room.sendAnnouncement(player.name + ": " + teamMessage, teamPlayer.id, 0xC20606, "bold", 1);
			});
		}
		if (player.team == 2) {
			var teamPlayers = room.getPlayerList().filter((player) => player.team == 2);
			teamPlayers.forEach(function(teamPlayer) {
				room.sendAnnouncement(player.name + ": " + teamMessage, teamPlayer.id, 0x3A55DE, "bold", 1);
			});
		}
		if (player.team == 0) {
			var teamPlayers = room.getPlayerList().filter((player) => player.team == 0);
			teamPlayers.forEach(function(teamPlayer) {
				room.sendAnnouncement(player.name + ": " + teamMessage, teamPlayer.id, 0xdee7fa, "bold", 1);
			});
		}
		return false;
	}
	else if (message[0].toLowerCase() === "!uni") {
    if (!room.getPlayerList().some(p => p.id === player.id)) {
        room.sendAnnouncement("No puedes usar el comando si no estás jugando.", player.id, 0xFFFFFF, "bold");
        return false;
    }
    if (player.team === 0) {
        room.sendAnnouncement("No puedes usar el comando si no estás en un equipo.", player.id, 0xFFFFFF, "bold");
        return false;
    }
    var teamPlayerslist = room.getPlayerList().filter(p => p.team === player.team);
    var firstPlayer = teamPlayerslist[0];
    if (firstPlayer.id !== player.id) {
        room.sendAnnouncement("Solo el capitán del equipo puede cambiar el uniforme.", player.id, 0xFFFFFF, "bold");
        return false;
    }
    if (message.length === 1) {
        try {
            var uniformString = "[🏆] 𝙴𝚀𝚄𝙸𝙿𝙾𝚂 𝙰𝙵𝙲𝚂 :";
            for (const [key, value] of Object.entries(uniforms)) {
                if (value.type === Uniform.COUNTRY) uniformString += ` ${value.name}: !uni ${key} |`;
            }
            uniformString += `\n`;
            room.sendAnnouncement(uniformString, player.id, 0xFFFFFF, "bold", Notification.CHAT);
            uniformString2 = "[🏆] 𝙴𝚂𝚃𝙰𝙽𝙳𝙰𝚁 :";
            for (const [key, value] of Object.entries(uniforms)) {
                if (value.type === Uniform.CLUBLA) uniformString2 += ` ${value.name}: !uni ${key} |`;
            }
            uniformString2 += `\n`;
            room.sendAnnouncement(uniformString2, player.id, 0xFFFFFF, "bold", Notification.CHAT);
            room.sendAnnouncement("Para elegir un uniforme para su equipo, escriba '!uni <nombre del equipo>'.", player.id, 0xFFFFFF, "bold", Notification.CHAT);
        } catch (err) {
            console.error(err);
            room.sendAnnouncement("Elige un uniforme que exista.", player.id, 0xFFFFFF, "bold", Notification.CHAT);
        }
    } else if (message.length >= 2) {
        try {
            var uniformName = getUniform(message[1].toLowerCase());
            if (uniformName !== false && uniforms[uniformName].name !== false) {
                room.sendAnnouncement(`[🏆] El uniforme de '${uniforms[uniformName].name}' fue colocado en su equipo. Con !reserva usas el de visita`, player.id, 0xFFFFFF, "bold", Notification.CHAT);

                const colors = [uniforms[uniformName].color1, uniforms[uniformName].color2];
                if (uniforms[uniformName].color3 !== null) {
                    colors.push(uniforms[uniformName].color3);
                }

                room.setTeamColors(player.team, uniforms[uniformName].angle, uniforms[uniformName].textcolor, colors);

                if (player.team === 1) {
                    nameHome = uniforms[uniformName].name;
                    acronymHome = uniformName;
                    emojiHome = uniforms[uniformName].emoji;
                } else if (player.team === 2) {
                    nameGuest = uniforms[uniformName].name;
                    acronymGuest = uniformName;
                    emojiGuest = uniforms[uniformName].emoji;
                }
            } else {
                room.sendAnnouncement(`[🏆] Ese uniforme no existe. Escriba '!uni' para ver todos los disponibles.`, player.id, 0xFFFFFF, "bold", Notification.CHAT);
            }
        } catch (err) {
            console.error(err);
            room.sendAnnouncement("Ese uniforme no está disponible.", player.id, 0xFFFFFF, "bold", Notification.CHAT);
        }
    }
} else if (message[0].toLowerCase() === "!reserva") {
    var teamPlayerslist = room.getPlayerList().filter(p => p.team === player.team);
    var firstPlayer = teamPlayerslist[0];
    if (firstPlayer.id !== player.id) {
        room.sendAnnouncement("Solo el capitán del equipo puede cambiar el uniforme.", player.id, 0xFFFFFF, "bold");
        return false;
    }
    if (player.team === 1 && nameHome !== 'Local') {
        if (uniforms[acronymHome].color21 !== null && uniforms[acronymHome].color22 !== null && uniforms[acronymHome].color23 !== null) {
            room.setTeamColors(player.team, uniforms[acronymHome].angle2, uniforms[acronymHome].textcolor2, [uniforms[acronymHome].color21, uniforms[acronymHome].color22, uniforms[acronymHome].color23]);
        } else if (uniforms[acronymHome].color21 !== null && uniforms[acronymHome].color22 !== null) {
            room.setTeamColors(player.team, uniforms[acronymHome].angle2, uniforms[acronymHome].textcolor2, [uniforms[acronymHome].color21, uniforms[acronymHome].color22]);
        } else {
            room.setTeamColors(player.team, uniforms[acronymHome].angle2, uniforms[acronymHome].textcolor2, [uniforms[acronymHome].color21]);
        }
        room.sendAnnouncement(`[🏆] El uniforme de visita de ${nameHome} fue colocado.`, player.id, 0xFFFFFF, "bold", Notification.CHAT);
    } else if (player.team === 1 && nameHome === 'Local') {
        room.sendAnnouncement(`[🏆] Ese equipo aún no tiene un uniforme. Escriba !uni para ver los disponibles.`, player.id, 0xFFFFFF, "bold", Notification.CHAT);
    }

    if (player.team === 2 && nameGuest !== 'Visitante') {
        if (uniforms[acronymGuest].color21 !== null && uniforms[acronymGuest].color22 !== null && uniforms[acronymGuest].color23 !== null) {
            room.setTeamColors(player.team, uniforms[acronymGuest].angle2, uniforms[acronymGuest].textcolor2, [uniforms[acronymGuest].color21, uniforms[acronymGuest].color22, uniforms[acronymGuest].color23]);
        } else if (uniforms[acronymGuest].color21 !== null && uniforms[acronymGuest].color22 !== null) {
            room.setTeamColors(player.team, uniforms[acronymGuest].angle2, uniforms[acronymGuest].textcolor2, [uniforms[acronymGuest].color21, uniforms[acronymGuest].color22]);
        } else {
            room.setTeamColors(player.team, uniforms[acronymGuest].angle2, uniforms[acronymGuest].textcolor2, [uniforms[acronymGuest].color21]);
        }
        room.sendAnnouncement(`[🏆] El uniforme de visita de ${nameHome} fue colocado.`, player.id, 0xFFFFFF, "bold", Notification.CHAT);
    } else if (player.team === 2 && nameGuest === 'Visitante') {
        room.sendAnnouncement(`[🏆] Ese equipo aún no tiene un uniforme. Escriba !uni para ver los disponibles.`, player.id, 0xFFFFFF, "bold", Notification.CHAT);
    }
}
	else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
			if (message.length >= 2 && message[1][0] == "#") {
				message[1] = message[1].substring(1, message[1].length);
				if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
					var stats;
					localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
					if (stats[Ss.RL] == "player") {
						stats[Ss.RL] = "admin";
						localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ahora es el administrador del host !");
					}
				}
			}
		}
	}
	else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
			if (message.length >= 2 && message[1][0] == "#") {
				message[1] = message[1].substring(1, message[1].length);
				if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
					var stats;
					localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
					if (stats[Ss.RL] == "admin") {
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " Ya no es administrador del host !");
						stats[Ss.RL] = "player";
						localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
					}
				}
			}
		}
	}
	else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
		var cstm = "[PV] Lista de muteados : ";
		for (var i = 0; i < extendedP.length; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
				if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
					room.sendAnnouncement(cstm, player.id, 0x00FFFF, "bold");
					cstm = "... ";
				}
				cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
			}
		}
		if (cstm == "[PV] Lista de Muteados : ") {
			room.sendAnnouncement("[PV] No hay nadie en la lista de muteados !", player.id, 0x00FFFF, "bold");
			return false;
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendAnnouncement(cstm, player.id, 0x00FFFF, "bold");
	}
	else if (["!mute"].includes(message[0].toLowerCase())) {
    if (player.admin) {
        updateTeams();
        try {
            var timeOut;
            if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
                if (Number.parseInt(message[1]) > 0) {
                    timeOut = Number.parseInt(message[1]) * 60 * 1000;
                } else {
                    timeOut = 3 * 60 * 1000;
                }
                if (message[2].length > 1 && message[2][0] == "#") {
                    message[2] = message[2].substring(1, message[2].length);
                    if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
                        if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
                        setMute(room.getPlayer(Number.parseInt(message[2])), true);
                        room.sendAnnouncement(room.getPlayer(Number.parseInt(message[2])).name + " ha sido muteado por " + (timeOut / 60000) + " minutos !", null, 0x08CEFF, "bold");
                    }
                }
            } else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                        if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
                        setMute(room.getPlayer(Number.parseInt(message[1])), true);
                        room.sendAnnouncement(room.getPlayer(Number.parseInt(message[1])).name + " ha sido muteado por 3 minutos!", null, 0x08CEFF, "bold");
                    }
                }
            }
        } catch (error) {
            console.error("Error al procesar el comando !mute:", error);
            room.sendAnnouncement("No puedes usar el comando !mute sin nada despues.", player.id, 0x08CEFF, "bold");
        }
    }
}
	else if (["!unmute"].includes(message[0].toLowerCase())) {
		if (player.admin && message.length >= 2) {
			if (message[1] == "all") {
				extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
				room.sendAnnouncement("Se ha limpiado la lista de muteados", null, 0x00FFFF, "bold");
			}
			else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
				setMute(room.getPlayer(Number.parseInt(message[1])), false);
				room.sendAnnouncement(room.getPlayer(Number.parseInt(message[1])).name + " ha sido desmuteado !", null, 0x00FFFF, "bold");
			}
			else if (Number.isNaN(Number.parseInt(message[1]))) {
				if (message[1].length > 1 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
						setMute(room.getPlayer(Number.parseInt(message[1])), false);
						room.sendAnnouncement(room.getPlayer(Number.parseInt(message[1])).name + " ha sido desmuteado!", null, 0x00FFFF, "bold");
					}
				}
			}
		}
	}
	else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
		if (banList.length == 0) {
			room.sendAnnouncement("[PV] No hay nadie en la lista de baneados!", player.id, 0x00FFFF, "bold");
			return false;
		}
		var cstm = "[PV] Lista de baneados : ";
		for (var i = 0; i < banList.length; i++) {
			if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
				room.sendAnnouncement(cstm, player.id, 0x00FFFF, "bold");
				cstm = "... ";
			}
			cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendAnnouncement(cstm, player.id, 0x00FFFF, "bold");
	}
	else if (["!clearbans"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				room.clearBans();
				room.sendAnnouncement("Bans removidos!", null, 0x00FFFF, "bold");
				banList = [];
			}
			if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						ID = Number.parseInt(message[1]);
						room.clearBan(ID);
						if (banList.length != banList.filter((array) => array[1] != ID)) {
							room.sendAnnouncement(banList.filter((array) => array[1] == ID)[0][0] + " ha sido baneado del host !", null, 0x00FFFF, "bold");
						}
						setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
					}
				}
			}
		}
	}
	if (message[0][0] == "!") {
		return false;
	}
	if (getMute(player)) {
		room.sendAnnouncement("Usted está muteado.", player.id, 0x00FFFF, "bold");
		return false;
	}
	if (localStorage.getItem(getAuth(player))){
        var announcement = "";
        var chatColor = "";
		var playerRole = JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL];
        if (playerRole === "admin") {
            announcement += "「👨‍💼」";
            chatColor = "0x3BF5F5"; // Color para el rol de admin (turquesa)
        } else if (playerRole === "master") {
                   announcement += "「👑」";
                   chatColor = "0xFFFF00"; // Color para el rol de master (amarillo)
        }
		console.log(announcement + " " + player.name + ": " + originalMessage);
        if (playerRole === "admin" || playerRole === "master") {
            announcement += player.name + ": " + originalMessage;
            room.sendAnnouncement(announcement, null, chatColor);
            return false;
        }
    } 
}

room.onPlayerActivity = function(player) {
	setActivity(player, 0);
}	
 
room.onPlayerLeave = function (player, message) {
	updateRoleOnPlayerOut();
}

room.onGameUnpause = function (byPlayer) {  
 if(byPlayer.admin){
	 room.sendAnnouncement("La pausa ha sido reanudada por: " + byPlayer.name, null , 0x00FFFF, "bold");
 }        
}
room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    if (ban)  {
        extendedP.forEach(p => {
            if (byPlayer.id === p[0]) {
                if (localStorage.getItem(p[1]) != null) { // Soy player
                    if (JSON.parse(localStorage.getItem(p[1]))[Ss.RL] == "player") {
                        room.clearBan(kickedPlayer.id);
                        room.kickPlayer(byPlayer.id, "You shouldn't ban no one!", false);
                        //updateAdmins();
                    } else { // Soy admin
                        banList.push([kickedPlayer.name, kickedPlayer.id]);
                    }
                } else { // No estoy en localStorage (soy player)
                    room.clearBan(kickedPlayer.id);
                    room.kickPlayer(byPlayer.id, "You shouldn't ban no one!", false);
                    //updateAdmins();
                }
            }
        });
	}
}
 
var x4f = '{"name":"Futsal x4 by FFC from HaxMaps","canBeStored":true,"width":765,"height":350,"bg":{"type":"hockey","height":0,"width":0,"cornerRadius":0},"vertexes":[{"x":0,"y":-350,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80]},{"x":-735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80]},{"x":-735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80]},{"x":-700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80]},{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[700,-90]},{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[700,-90]},{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[700,80]},{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[700,80]},{"x":-700,"y":90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[-700,80]},{"x":-700,"y":320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":-700,"y":-90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[-700,-80]},{"x":-700,"y":-320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":-700,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":700,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":700,"y":90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80],"color":"ffffff"},{"x":700,"y":320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":700,"y":-320,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff"},{"x":700,"y":-90,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"ffffff","pos":[700,-90]},{"x":-700,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},{"x":700,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"color":"ffffff"},{"x":-706.5,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"ffffff"},{"x":-706.5,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":-706.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},{"x":-706.5,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"ffffff"},{"x":706.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},{"x":706.5,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-90],"color":"ffffff"},{"x":706.5,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80],"color":"ffffff"},{"x":706.5,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":-700,"y":-90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"EFB810"},{"x":-700,"y":90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"EFB810"},{"x":700,"y":-90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"EFB810","pos":[700,-90]},{"x":700,"y":90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"EFB810"},{"x":-700,"y":280,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":-93.241608812827},{"x":-480,"y":60,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":-93.241608812827},{"x":-700,"y":-280,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":93.241608812827},{"x":-480,"y":-60,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":93.241608812827},{"x":700,"y":280,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":93.241608812827},{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":93.241608812827},{"x":700,"y":-280,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":-93.241608812827},{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":-93.241608812827},{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":0},{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":0},{"x":480,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":480,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":480,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":480,"y":-3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":480,"y":2,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-480,"y":1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-480,"y":-1,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-480,"y":3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-480,"y":-3,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-480,"y":2,"bCoef":0.1,"cMask":["wall"],"trait":"line","curve":180,"color":"ffffff"},{"x":-700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80],"vis":false},{"x":-735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,-80],"vis":false},{"x":-735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80],"vis":false},{"x":-700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[-700,80],"vis":false},{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[700,-90],"vis":false},{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[700,-90],"vis":false},{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[700,80],"vis":false},{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","curve":0,"color":"ffffff","pos":[700,80],"vis":false},{"x":0,"y":320,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969"},{"x":0,"y":-90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969"},{"x":0,"y":90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969"},{"x":0,"y":-90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"696969"},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":90,"cMask":[],"color":"ffffff"},{"x":0,"y":90,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"ffffff"},{"x":0,"y":90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":-180},{"x":0,"y":-90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":-180},{"x":0,"y":90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":180},{"x":0,"y":-90,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":180},{"x":0,"y":91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":-180},{"x":0,"y":-91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":-180},{"x":0,"y":91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":180},{"x":0,"y":-91,"bCoef":0.1,"cMask":["wall"],"trait":"line","color":"B6B6B8","curve":180},{"x":0,"y":-91,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"B6B6B8"},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"B6B6B8"},{"x":0,"y":91,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"B6B6B8"},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"B6B6B8"},{"x":-706.5,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80],"color":"ffffff"},{"x":-706.5,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":-706.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},{"x":-706.5,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80],"color":"ffffff"},{"x":706.5,"y":-320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"color":"ffffff"},{"x":706.5,"y":-90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-90],"color":"ffffff"},{"x":706.5,"y":90,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80],"color":"ffffff"},{"x":706.5,"y":320,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"color":"ffffff"},{"x":735,"y":-350,"bCoef":0.5,"cMask":["red","blue"]},{"x":-46.77777862548828,"y":-43.22222900390625,"bCoef":0.1,"trait":"line","color":"000000"},{"x":50.22222137451172,"y":-42.22222900390625,"bCoef":0.1,"trait":"line","color":"000000"},{"x":-41.77777862548828,"y":8.77777099609375,"bCoef":0.1,"trait":"line","color":"000000"},{"x":2.2222213745117188,"y":62.77777099609375,"bCoef":0.1,"trait":"line","color":"000000"},{"x":44.22222137451172,"y":9.77777099609375,"bCoef":0.1,"trait":"line","color":"000000"},{"x":1.2222213745117188,"y":6.77777099609375,"bCoef":0.1,"trait":"line","curve":-180,"color":"000000"},{"x":2.2222213745117188,"y":45.77777099609375,"bCoef":0.1,"trait":"line","curve":-180,"color":"000000"},{"x":0.22222137451171875,"y":5.77777099609375,"bCoef":0.1,"trait":"line","curve":180,"color":"000000"},{"x":1.2222213745117188,"y":44.77777099609375,"bCoef":0.1,"trait":"line","curve":180,"color":"000000"},{"x":-26,"y":-37,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":-26,"y":-12,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":-11,"y":-37,"bCoef":0.1,"trait":"line","color":"000000"},{"x":-24.77777862548828,"y":-25,"bCoef":0.1,"trait":"line","color":"000000"},{"x":-14,"y":-25,"bCoef":0.1,"trait":"line","color":"000000"},{"x":38,"y":-30,"bCoef":0.1,"trait":"line","color":"000000"},{"x":30,"y":-39.22222900390625,"bCoef":0.1,"trait":"line","color":"000000"},{"x":20,"y":-28,"bCoef":0.1,"trait":"line","color":"000000"},{"x":20,"y":-20,"bCoef":0.1,"trait":"line","color":"000000"},{"x":30,"y":-12,"bCoef":0.1,"trait":"line","color":"000000"},{"x":38.22222137451172,"y":-21.22222900390625,"bCoef":0.1,"trait":"line","color":"000000"},{"x":-2,"y":-37,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":-2,"y":-12,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":13,"y":-37,"bCoef":0.1,"trait":"line","color":"000000"},{"x":-0.7777786254882812,"y":-25,"bCoef":0.1,"trait":"line","color":"000000"},{"x":10,"y":-25,"bCoef":0.1,"trait":"line","color":"000000"},{"x":-54.39999771118164,"y":-4,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":58.60000228881836,"y":-4,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":-54.39999771118164,"y":-1,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":58.60000228881836,"y":-1,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":-54.39999771118164,"y":2,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":58.60000228881836,"y":2,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":-29,"y":-39,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":-14,"y":-39,"bCoef":0.1,"trait":"line","color":"000000"},{"x":-5,"y":-39,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":-5,"y":-14,"bCoef":0.1,"trait":"line","curve":0,"color":"000000"},{"x":10,"y":-39,"bCoef":0.1,"trait":"line","color":"000000"},{"x":7,"y":-27,"bCoef":0.1,"trait":"line","color":"000000"},{"x":-49.77777862548828,"y":-46.22222900390625,"bCoef":0.1,"trait":"line","color":"EFB810"},{"x":47.22222137451172,"y":-45.22222900390625,"bCoef":0.1,"trait":"line","color":"EFB810"},{"x":-44.77777862548828,"y":5.77777099609375,"bCoef":0.1,"trait":"line","color":"EFB810"},{"x":-0.7777786254882812,"y":59.77777099609375,"bCoef":0.1,"trait":"line","color":"EFB810"},{"x":41.22222137451172,"y":6.77777099609375,"bCoef":0.1,"trait":"line","color":"EFB810"},{"x":-1.7777786254882812,"y":3.77777099609375,"bCoef":0.1,"trait":"line","curve":-180,"color":"071B7E"},{"x":-0.7777786254882812,"y":42.77777099609375,"bCoef":0.1,"trait":"line","curve":-180,"color":"071B7E"},{"x":-1.7777786254882812,"y":3.77777099609375,"bCoef":0.1,"trait":"line","curve":180,"color":"071B7E"},{"x":-0.7777786254882812,"y":42.77777099609375,"bCoef":0.1,"trait":"line","curve":180,"color":"071B7E"},{"x":-18.77777862548828,"y":18.77777099609375,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-10.777778625488281,"y":13.77777099609375,"bCoef":0.1,"trait":"line","curve":0,"color":"071B7E"},{"x":-19.77777862548828,"y":28.77777099609375,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-11.777778625488281,"y":31.77777099609375,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-9.777778625488281,"y":38.77777099609375,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":8.222221374511719,"y":40.77777099609375,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":10.222221374511719,"y":31.77777099609375,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":16.22222137451172,"y":28.77777099609375,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":9.222221374511719,"y":5.77777099609375,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":9.222221374511719,"y":15.77777099609375,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":17.22222137451172,"y":16.77777099609375,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-7.777778625488281,"y":5.77777099609375,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-29,"y":-40,"bCoef":0.1,"trait":"line","curve":0,"color":"071B7E"},{"x":-29,"y":-15,"bCoef":0.1,"trait":"line","curve":0,"color":"071B7E"},{"x":-14,"y":-40,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-27.77777862548828,"y":-28,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-17,"y":-28,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":36,"y":-32,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":28,"y":-41.22222900390625,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":18,"y":-30,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":18,"y":-22,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":28,"y":-14,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":36.22222137451172,"y":-23.22222900390625,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-6,"y":18.599998474121094,"bCoef":0.1,"trait":"line","curve":0,"color":"071B7E"},{"x":3,"y":18.599998474121094,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":3,"y":28.599998474121094,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-5,"y":29.599998474121094,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":13.333335876464844,"y":30.66666665673256,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":10.333335876464844,"y":36.66666665673256,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-2.6666641235351562,"y":19.66666665673256,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-2.6666641235351562,"y":26.66666665673256,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-0.6666641235351562,"y":19.66666665673256,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-0.6666641235351562,"y":26.66666665673256,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":11.333335876464844,"y":10.66666665673256,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":13.333335876464844,"y":13.66666665673256,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-17.333332061767578,"y":16.666666984558105,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-9.333332061767578,"y":6.6666669845581055,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-17.333332061767578,"y":30.666666984558105,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-12.333332061767578,"y":35.666666984558105,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-5,"y":-40,"bCoef":0.1,"trait":"line","curve":0,"color":"071B7E"},{"x":-5,"y":-15,"bCoef":0.1,"trait":"line","curve":0,"color":"071B7E"},{"x":10,"y":-40,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-3.7777786254882812,"y":-28,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":7,"y":-28,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-57.39999771118164,"y":-7,"bCoef":0.1,"trait":"line","curve":0,"color":"EFB810"},{"x":55.60000228881836,"y":-7,"bCoef":0.1,"trait":"line","curve":0,"color":"EFB810"},{"x":-57.39999771118164,"y":-4,"bCoef":0.1,"trait":"line","curve":0,"color":"EFB810"},{"x":55.60000228881836,"y":-4,"bCoef":0.1,"trait":"line","curve":0,"color":"EFB810"},{"x":-57.39999771118164,"y":-1,"bCoef":0.1,"trait":"line","curve":0,"color":"EFB810"},{"x":55.60000228881836,"y":-1,"bCoef":0.1,"trait":"line","curve":0,"color":"EFB810"},{"x":-32,"y":-42,"bCoef":0.1,"trait":"line","curve":0,"color":"071B7E"},{"x":-17,"y":-42,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":-8,"y":-42,"bCoef":0.1,"trait":"line","curve":0,"color":"071B7E"},{"x":-8,"y":-17,"bCoef":0.1,"trait":"line","curve":0,"color":"071B7E"},{"x":7,"y":-42,"bCoef":0.1,"trait":"line","color":"071B7E"},{"x":4,"y":-30,"bCoef":0.1,"trait":"line","color":"071B7E"}],"segments":[{"v0":0,"v1":1,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":2,"v1":3,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,-80],"y":-90},{"v0":3,"v1":4,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":-735},{"v0":4,"v1":5,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,80],"y":90},{"v0":6,"v1":7,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[700,-90],"y":-90},{"v0":7,"v1":8,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":735},{"v0":8,"v1":9,"curve":0,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[700,80],"y":90},{"v0":10,"v1":11,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":12,"v1":13,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":14,"v1":15,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":16,"v1":17,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":18,"v1":19,"vis":true,"color":"ffffff","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":20,"v1":21,"curve":0,"vis":true,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":22,"v1":23,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":24,"v1":25,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":26,"v1":27,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":28,"v1":29,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":30,"v1":31,"curve":0,"vis":true,"color":"EFB810","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-550},{"v0":32,"v1":33,"curve":0,"vis":true,"color":"EFB810","bCoef":0.1,"cMask":["wall"],"trait":"line","x":550},{"v0":34,"v1":35,"curve":-93.241608812827,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":36,"v1":37,"curve":93.241608812827,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":35,"v1":37,"curve":0,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-480},{"v0":38,"v1":39,"curve":93.241608812827,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":40,"v1":41,"curve":-93.241608812827,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"trait":"line"},{"v0":42,"v1":43,"curve":0,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"trait":"line","x":480},{"v0":45,"v1":44,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":480},{"v0":44,"v1":45,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":480},{"v0":47,"v1":46,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":480},{"v0":46,"v1":47,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":480},{"v0":50,"v1":49,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-480},{"v0":49,"v1":50,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-480},{"v0":52,"v1":51,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-480},{"v0":51,"v1":52,"curve":180,"vis":true,"color":"ffffff","bCoef":0.1,"cMask":["wall"],"trait":"line","x":-480},{"v0":54,"v1":55,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,-80],"y":-90},{"v0":55,"v1":56,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":-735},{"v0":56,"v1":57,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[-700,80],"y":90},{"v0":58,"v1":59,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[700,-90],"y":-90},{"v0":59,"v1":60,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","x":735},{"v0":60,"v1":61,"curve":0,"vis":false,"color":"ffffff","bCoef":0.2,"cMask":["red","blue","ball"],"trait":"goalPost","pos":[700,80],"y":90},{"v0":62,"v1":63,"vis":false,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":64,"v1":65,"curve":179.42829117403,"color":"696969","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":0.0049891420830909},{"v0":67,"v1":66,"curve":180,"color":"696969","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.1232339957368e-17},{"v0":72,"v1":73,"curve":-180,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":74,"v1":75,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":76,"v1":77,"curve":-180,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":78,"v1":79,"curve":180,"vis":true,"color":"B6B6B8","bCoef":0.1,"cMask":["wall"],"trait":"line","x":0},{"v0":81,"v1":80,"color":"B6B6B8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":82,"v1":83,"color":"B6B6B8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":84,"v1":85,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":86,"v1":87,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-556.5},{"v0":88,"v1":89,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":90,"v1":91,"curve":0,"vis":false,"color":"ffffff","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":556.5},{"v0":93,"v1":94,"curve":30.510237406115554,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":93,"v1":95,"curve":-21.688246782510454,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":95,"v1":96,"curve":-37.32402297924154,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"curve":-39.590045447894795,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":97,"v1":94,"curve":-23.378738350878383,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":98,"v1":99,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":102,"v1":104,"curve":0,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":105,"v1":106,"curve":0,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":107,"v1":108,"curve":-61.579169590959616,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":108,"v1":109,"curve":-81.88795850309086,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":109,"v1":110,"curve":0,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":110,"v1":111,"curve":-91.55037058586078,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":111,"v1":112,"curve":-84.07659521498204,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":113,"v1":114,"curve":0,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":113,"v1":115,"curve":0,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":116,"v1":117,"curve":0,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":118,"v1":119,"curve":0,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":120,"v1":121,"curve":0,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":122,"v1":123,"curve":0,"vis":true,"color":"000000","bCoef":0.1,"trait":"line"},{"v0":130,"v1":131,"curve":30.510237406115554,"vis":true,"color":"EFB810","bCoef":0.1,"trait":"line"},{"v0":130,"v1":132,"curve":-21.688246782510454,"vis":true,"color":"EFB810","bCoef":0.1,"trait":"line"},{"v0":132,"v1":133,"curve":-37.32402297924154,"vis":true,"color":"EFB810","bCoef":0.1,"trait":"line"},{"v0":133,"v1":134,"curve":-39.590045447894795,"vis":true,"color":"EFB810","bCoef":0.1,"trait":"line"},{"v0":134,"v1":131,"curve":-23.378738350878383,"vis":true,"color":"EFB810","bCoef":0.1,"trait":"line"},{"v0":135,"v1":136,"curve":-180,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":137,"v1":138,"curve":180,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":139,"v1":140,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":141,"v1":142,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":142,"v1":143,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":144,"v1":145,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":145,"v1":146,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":147,"v1":148,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":148,"v1":149,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":140,"v1":150,"curve":14.250032697803574,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":151,"v1":152,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":151,"v1":153,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":154,"v1":155,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":156,"v1":157,"curve":-61.579169590959616,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":157,"v1":158,"curve":-81.88795850309086,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":158,"v1":159,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":159,"v1":160,"curve":-91.55037058586078,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":160,"v1":161,"curve":-84.07659521498204,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":162,"v1":163,"curve":-22.61986494804039,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":163,"v1":164,"curve":-22.61986494804039,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":164,"v1":165,"curve":-22.61986494804039,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":165,"v1":162,"curve":-22.61986494804039,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":140,"v1":162,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":163,"v1":148,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":145,"v1":164,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":142,"v1":165,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":166,"v1":167,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":168,"v1":169,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":170,"v1":171,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":172,"v1":173,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":174,"v1":175,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":176,"v1":177,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":178,"v1":179,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":178,"v1":180,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":181,"v1":182,"curve":0,"vis":true,"color":"071B7E","bCoef":0.1,"trait":"line"},{"v0":183,"v1":184,"curve":0.9017871427253047,"vis":true,"color":"EFB810","bCoef":0.1,"trait":"line"},{"v0":185,"v1":186,"curve":0,"vis":true,"color":"EFB810","bCoef":0.1,"trait":"line"},{"v0":187,"v1":188,"curve":0,"vis":true,"color":"EFB810","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[-1,0],"dist":-784,"bCoef":0.1,"_selected":true},{"normal":[0,-1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-777,"bCoef":0.1},{"normal":[0,1],"dist":-320,"cMask":["ball"]}],"goals":[{"p0":[-707.5,-90],"p1":[-707.5,90],"team":"red","color":"ffffff"},{"p0":[707.5,90],"p1":[707.5,-90],"team":"blue","color":"ffffff"}],"discs":[{"radius":5.5,"invMass":0,"pos":[-700,90],"color":"6666FF","trait":"goalPost","y":90},{"radius":5.5,"invMass":0,"pos":[-700,-90],"color":"6666FF","trait":"goalPost","y":-85,"x":-560},{"radius":5.5,"invMass":0,"pos":[700,90],"color":"6666FF","trait":"goalPost","y":90},{"radius":5.5,"invMass":0,"pos":[700,-90],"color":"6666FF","trait":"goalPost","y":-85,"vis":true}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FFFFFF"},"spawnDistance":200,"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}';

var entreno1 = '{"name":"FAH Training by Jijazo","width":765,"height":350,"bg":{"type":"hockey"},"vertexes":[{"x":0,"y":-350,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":320,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-320,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":320,"cMask":["ball"]},{"x":700,"y":320,"cMask":["ball"]},{"x":700,"y":90,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":320,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":-320,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":-90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-320,"cMask":["ball"]},{"x":700,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":90,"cMask":["ball"]},{"x":-706.5,"y":320,"cMask":["ball"]},{"x":-706.5,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":-320,"cMask":["ball"]},{"x":706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":90,"cMask":["ball"]},{"x":706.5,"y":320,"cMask":["ball"]},{"x":-700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":280,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":60,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-280,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":-60,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":280,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-280,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":1,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-1,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":3,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-3,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":2,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":1,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":-1,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":3,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":-3,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":2,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-735,"y":-90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-735,"y":90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-765.1,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":-735,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":-765.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":-735,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":765.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":765.1,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":0,"y":320,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"x":-32,"y":-319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-32,"y":320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-23.5,"y":-350,"cMask":["ball"]},{"x":-23.5,"y":350,"cMask":["ball"]},{"x":-706.5,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":-320,"cMask":["ball"]},{"x":706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":90,"cMask":["ball"]},{"x":706.5,"y":320,"cMask":["ball"]},{"x":-735,"y":-350,"bCoef":0.5,"cMask":["red","blue"]},{"x":-735,"y":350,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":350,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":-350,"bCoef":0.5,"cMask":["red","blue"]},{"x":-0.5,"y":-322,"cMask":["ball"]},{"x":329,"y":-319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":329,"y":320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":320.5,"y":-348,"cMask":["ball"]},{"x":320.5,"y":352,"cMask":["ball"]},{"x":-10,"y":-319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-10,"y":320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":307,"y":-320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":307,"y":319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-15,"y":8.5,"cMask":["ball"]},{"x":312,"y":8.5,"cMask":["ball"]},{"x":-15,"y":-8.5,"cMask":["ball"]},{"x":312,"y":-8.5,"cMask":["ball"]},{"x":-15,"y":0,"cMask":["ball"]},{"x":312,"y":0,"cMask":["ball"]},{"x":-18.5,"y":-350,"cMask":["ball"]},{"x":-18.5,"y":350,"cMask":["ball"]},{"x":315.5,"y":-348,"cMask":["ball"]},{"x":315.5,"y":352,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-726,"y":-125,"bCoef":1.5,"cMask":["ball"]},{"x":-726,"y":105,"bCoef":1.5,"cMask":["ball"]},{"x":-732.5,"y":-125,"bCoef":1.5,"cMask":["ball"]},{"x":-732.5,"y":105,"bCoef":1.5,"cMask":["ball"]},{"x":734,"y":-115,"bCoef":2.5,"cMask":["ball"]},{"x":734,"y":115,"bCoef":2.5,"cMask":["ball"]},{"x":727.5,"y":-115,"bCoef":1.5,"cMask":["ball"]},{"x":727.5,"y":115,"bCoef":1.5,"cMask":["ball"]},{"x":700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-734,"y":97,"bCoef":1.5,"cMask":["ball"]},{"x":-708,"y":97,"bCoef":1.5,"cMask":["ball"]},{"x":-735,"y":-97,"bCoef":1.5,"cMask":["ball"]},{"x":-709,"y":-97,"bCoef":1.5,"cMask":["ball"]},{"x":706,"y":96,"bCoef":1.5,"cMask":["ball"]},{"x":732,"y":96,"bCoef":1.5,"cMask":["ball"]},{"x":705,"y":-98,"bCoef":1.5,"cMask":["ball"]},{"x":731,"y":-98,"bCoef":1.5,"cMask":["ball"]},{"x":506.5,"y":-194,"bCoef":1.5,"cMask":["ball"]},{"x":506.5,"y":36,"bCoef":1.5,"cMask":["ball"]},{"x":721,"y":-116,"bCoef":1.5,"cMask":["ball"]},{"x":721,"y":114,"bCoef":1.5,"cMask":["ball"]},{"x":720,"y":-122,"bCoef":1.5,"cMask":["ball"]},{"x":720,"y":108,"bCoef":1.5,"cMask":["ball"]},{"x":726.5,"y":-122,"bCoef":1.5,"cMask":["ball"]},{"x":726.5,"y":108,"bCoef":1.5,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":2,"v1":3,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":3,"v1":4,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":4,"v1":5,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":6,"v1":7,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":7,"v1":8,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":10,"v1":11,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":13,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":14,"v1":15,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":18,"v1":19,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":20,"v1":21,"cMask":["ball"],"color":"FFFFFF"},{"v0":22,"v1":23,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":29,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":35,"v1":34,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":36,"v1":37,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":35,"v1":37,"bCoef":0.1,"cMask":["wall"],"color":"FFFFFF"},{"v0":38,"v1":39,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":41,"v1":40,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":42,"v1":43,"bCoef":0.1,"cMask":["wall"],"color":"FFFFFF"},{"v0":45,"v1":44,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":44,"v1":45,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":47,"v1":46,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":46,"v1":47,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":50,"v1":49,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":49,"v1":50,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":52,"v1":51,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":51,"v1":52,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":54,"v1":55,"bCoef":1.5,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":55,"v1":56,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":56,"v1":57,"bCoef":1.5,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":58,"v1":59,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":59,"v1":60,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":60,"v1":61,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":62,"v1":63,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":64,"v1":65,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":66,"v1":67,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":68,"v1":69,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":70,"v1":71,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":75,"v1":76,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":77,"v1":78,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":79,"v1":80,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":81,"v1":82,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":83,"v1":84,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":85,"v1":86,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":87,"v1":88,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":90,"v1":91,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":92,"v1":93,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":94,"v1":95,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":96,"v1":97,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":98,"v1":99,"cMask":["ball"],"color":"FFFFFF"},{"v0":100,"v1":101,"cMask":["ball"],"color":"FFFFFF"},{"v0":102,"v1":103,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":104,"v1":105,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":106,"v1":107,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":108,"v1":109,"bCoef":0.1,"cMask":["wall"],"color":"F80000"},{"v0":110,"v1":111,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":112,"v1":113,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":114,"v1":115,"bCoef":2.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":118,"v1":119,"bCoef":0.1,"cMask":["wall"],"color":"F8"},{"v0":120,"v1":121,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":122,"v1":123,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":124,"v1":125,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":126,"v1":127,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":132,"v1":133,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":134,"v1":135,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"}],"planes":[{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[-1,0],"dist":-765.1,"bCoef":0.1},{"normal":[0,-1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-765.1,"bCoef":0.1},{"normal":[0,1],"dist":-320,"cMask":["ball"]}],"goals":[],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-765.1,0],"radius":0.01,"bCoef":440,"invMass":0,"color":"0"},{"pos":[765.1,0],"radius":0.1,"bCoef":440,"invMass":0,"color":"0"},{"pos":[-700,90],"radius":5.5,"invMass":0},{"pos":[-700,-90],"radius":5.5,"invMass":0},{"pos":[700,90],"radius":5.5,"invMass":0},{"pos":[700,-90],"radius":5.5,"invMass":0},{"pos":[-318.7777786254883,-99.22222900390625],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-319.7777786254883,86.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[478.2222213745117,156.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[458.2222213745117,-173.22222900390625],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[138.22222137451172,116.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-316.7777786254883,-275.22222900390625],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-323.7777786254883,265.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","cameraFollow":"player","redSpawnPoints":[[-90,0]],"blueSpawnPoints":[[370,0]]}';

var x3f = '{"name" : "Futsal x3 by FFC", "width" : 620, "height" : 270, "spawnDistance" : 350, "bg" : { "type" : "hockey", "width" : 0, "height" : 0, "kickOffRadius" : 80, "cornerRadius" : 0, "color" : "0E163E" }, "vertexes" : [ /* 0 */ { "x" : 550, "y" : 240, "trait" : "ballArea", "color" : "FFFFFF" }, /* 1 */ { "x" : 550, "y" : -240, "trait" : "ballArea", "color" : "FFFFFF" }, /* 2 */ { "x" : 0, "y" : 270, "trait" : "kickOffBarrier", "color" : "FFFFFF" }, /* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "B6B6B8", "vis" : true, "curve" : 180 }, /* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "B6B6B8", "vis" : true, "curve" : 180 }, /* 5 */ { "x" : 0, "y" : -270, "trait" : "kickOffBarrier", "color" : "FFFFFF" }, /* 6 */ { "x" : -550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FFFFFF", "pos" : [-700,-80 ] }, /* 7 */ { "x" : -590, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FFFFFF", "pos" : [-700,-80 ] }, /* 8 */ { "x" : -590, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FFFFFF", "pos" : [-700,80 ] }, /* 9 */ { "x" : -550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FFFFFF", "pos" : [-700,80 ] }, /* 10 */ { "x" : 550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FFFFFF", "pos" : [700,-80 ] }, /* 11 */ { "x" : 590, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FFFFFF", "pos" : [700,-80 ] }, /* 12 */ { "x" : 590, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FFFFFF", "pos" : [700,80 ] }, /* 13 */ { "x" : 550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FFFFFF", "pos" : [700,80 ] }, /* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF", "pos" : [-700,80 ] }, /* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF" }, /* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF", "pos" : [-700,-80 ] }, /* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF" }, /* 18 */ { "x" : -550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF" }, /* 19 */ { "x" : 550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF" }, /* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "color" : "FFFFFF" }, /* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF" }, /* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF" }, /* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF", "pos" : [700,-80 ] }, /* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF" }, /* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "FFFFFF" }, /* 26 */ { "x" : -550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "FFFFFF" }, /* 27 */ { "x" : 550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "FFFFFF" }, /* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "B6B6B8" }, /* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "B6B6B8" }, /* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "B6B6B8" }, /* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "B6B6B8" }, /* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "FFFFFF" }, /* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "FFFFFF" }, /* 34 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "FFFFFF", "vis" : true, "curve" : -180 }, /* 35 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "FFFFFF", "vis" : true, "curve" : -180 }, /* 36 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "FFFFFF", "vis" : true, "curve" : 0 }, /* 37 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "FFFFFF", "vis" : true, "curve" : 0 }, /* 38 */ { "x" : -557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ], "color" : "FFFFFF" }, /* 39 */ { "x" : -557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF" }, /* 40 */ { "x" : -557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "color" : "FFFFFF" }, /* 41 */ { "x" : -557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ], "color" : "FFFFFF" }, /* 42 */ { "x" : 557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "color" : "FFFFFF" }, /* 43 */ { "x" : 557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ], "color" : "FFFFFF" }, /* 44 */ { "x" : 557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ], "color" : "FFFFFF" }, /* 45 */ { "x" : 557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF" }, /* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "trait" : "line", "color" : "EFB810" }, /* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "trait" : "line", "color" : "EFB810" }, /* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "trait" : "line", "color" : "EFB810" }, /* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "trait" : "line", "color" : "EFB810" }, /* 52 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 53 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 54 */ { "x" : -240, "y" : -256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 55 */ { "x" : -120, "y" : -224, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 56 */ { "x" : -120, "y" : -256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 57 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 58 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 59 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 60 */ { "x" : 240, "y" : -224, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 61 */ { "x" : 240, "y" : -256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 62 */ { "x" : 120, "y" : -224, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 63 */ { "x" : 120, "y" : -256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 64 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 65 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 66 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "B6B6B8", "curve" : -90 }, /* 67 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "B6B6B8", "curve" : 0 }, /* 68 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "B6B6B8" }, /* 69 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "B6B6B8" }, /* 70 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "B6B6B8", "curve" : 90 }, /* 71 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "B6B6B8", "curve" : 0 }, /* 72 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "B6B6B8" }, /* 73 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "B6B6B8" }, /* 74 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 75 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 76 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 77 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 78 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 79 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 80 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 81 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 82 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 83 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 84 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 85 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 86 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 87 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "trait" : "line", "color" : "FFFFFF" }, /* 88 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "B6B6B8" }, /* 89 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "B6B6B8" }, /* 90 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "B6B6B8" }, /* 91 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "B6B6B8" }, /* 92 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "B6B6B8", "curve" : 90 }, /* 93 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "B6B6B8", "curve" : 90 }, /* 94 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "B6B6B8", "curve" : -90 }, /* 95 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "B6B6B8", "curve" : -90 }, /* 96 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "B6B6B8", "curve" : 0 }, /* 97 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "B6B6B8", "curve" : 0 }, /* 98 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 99 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 100 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 101 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 102 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 103 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 104 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 105 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 106 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 107 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 108 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 109 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 110 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 111 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 112 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 113 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 114 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 115 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 116 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 117 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 118 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 119 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 120 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 121 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 122 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 123 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 124 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 125 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 126 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 127 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 128 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 129 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "B6B6B8" }, /* 130 */ { "x" : -46.77777862548828, "y" : -43.22222900390625, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 131 */ { "x" : 50.22222137451172, "y" : -42.22222900390625, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 132 */ { "x" : -41.77777862548828, "y" : 8.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 133 */ { "x" : 2.2222213745117188, "y" : 62.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 134 */ { "x" : 44.22222137451172, "y" : 9.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 135 */ { "x" : 1.2222213745117188, "y" : 6.77777099609375, "bCoef" : 0.1, "trait" : "line", "curve" : -180, "color" : "000000" }, /* 136 */ { "x" : 2.2222213745117188, "y" : 45.77777099609375, "bCoef" : 0.1, "trait" : "line", "curve" : -180, "color" : "000000" }, /* 137 */ { "x" : 0.22222137451171875, "y" : 5.77777099609375, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "000000" }, /* 138 */ { "x" : 1.2222213745117188, "y" : 44.77777099609375, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "000000" }, /* 139 */ { "x" : -26, "y" : -37, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 140 */ { "x" : -26, "y" : -12, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 141 */ { "x" : -11, "y" : -37, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 142 */ { "x" : -24.77777862548828, "y" : -25, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 143 */ { "x" : -14, "y" : -25, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 144 */ { "x" : 38, "y" : -30, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 145 */ { "x" : 30, "y" : -39.22222900390625, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 146 */ { "x" : 20, "y" : -28, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 147 */ { "x" : 20, "y" : -20, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 148 */ { "x" : 30, "y" : -12, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 149 */ { "x" : 38.22222137451172, "y" : -21.22222900390625, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 150 */ { "x" : -2, "y" : -37, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 151 */ { "x" : -2, "y" : -12, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 152 */ { "x" : 13, "y" : -37, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 153 */ { "x" : -0.7777786254882812, "y" : -25, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 154 */ { "x" : 10, "y" : -25, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 155 */ { "x" : -54.39999771118164, "y" : -4, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 156 */ { "x" : 58.60000228881836, "y" : -4, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 157 */ { "x" : -54.39999771118164, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 158 */ { "x" : 58.60000228881836, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 159 */ { "x" : -54.39999771118164, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 160 */ { "x" : 58.60000228881836, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 161 */ { "x" : -29, "y" : -39, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 162 */ { "x" : -14, "y" : -39, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 163 */ { "x" : -5, "y" : -39, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 164 */ { "x" : -5, "y" : -14, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "000000" }, /* 165 */ { "x" : 10, "y" : -39, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 166 */ { "x" : 7, "y" : -27, "bCoef" : 0.1, "trait" : "line", "color" : "000000" }, /* 167 */ { "x" : -49.77777862548828, "y" : -46.22222900390625, "bCoef" : 0.1, "trait" : "line", "color" : "EFB810" }, /* 168 */ { "x" : 47.22222137451172, "y" : -45.22222900390625, "bCoef" : 0.1, "trait" : "line", "color" : "EFB810" }, /* 169 */ { "x" : -44.77777862548828, "y" : 5.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "EFB810" }, /* 170 */ { "x" : -0.7777786254882812, "y" : 59.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "EFB810" }, /* 171 */ { "x" : 41.22222137451172, "y" : 6.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "EFB810" }, /* 172 */ { "x" : -1.7777786254882812, "y" : 3.77777099609375, "bCoef" : 0.1, "trait" : "line", "curve" : -180, "color" : "071B7E" }, /* 173 */ { "x" : -0.7777786254882812, "y" : 42.77777099609375, "bCoef" : 0.1, "trait" : "line", "curve" : -180, "color" : "071B7E" }, /* 174 */ { "x" : -1.7777786254882812, "y" : 3.77777099609375, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "071B7E" }, /* 175 */ { "x" : -0.7777786254882812, "y" : 42.77777099609375, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "071B7E" }, /* 176 */ { "x" : -18.77777862548828, "y" : 18.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 177 */ { "x" : -10.777778625488281, "y" : 13.77777099609375, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "071B7E" }, /* 178 */ { "x" : -19.77777862548828, "y" : 28.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 179 */ { "x" : -11.777778625488281, "y" : 31.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 180 */ { "x" : -9.777778625488281, "y" : 38.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 181 */ { "x" : 8.222221374511719, "y" : 40.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 182 */ { "x" : 10.222221374511719, "y" : 31.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 183 */ { "x" : 16.22222137451172, "y" : 28.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 184 */ { "x" : 9.222221374511719, "y" : 5.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 185 */ { "x" : 9.222221374511719, "y" : 15.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 186 */ { "x" : 17.22222137451172, "y" : 16.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 187 */ { "x" : -7.777778625488281, "y" : 5.77777099609375, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 188 */ { "x" : -29, "y" : -40, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "071B7E" }, /* 189 */ { "x" : -29, "y" : -15, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "071B7E" }, /* 190 */ { "x" : -14, "y" : -40, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 191 */ { "x" : -27.77777862548828, "y" : -28, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 192 */ { "x" : -17, "y" : -28, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 193 */ { "x" : 36, "y" : -32, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 194 */ { "x" : 28, "y" : -41.22222900390625, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 195 */ { "x" : 18, "y" : -30, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 196 */ { "x" : 18, "y" : -22, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 197 */ { "x" : 28, "y" : -14, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 198 */ { "x" : 36.22222137451172, "y" : -23.22222900390625, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 199 */ { "x" : -6, "y" : 18.599998474121094, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "071B7E" }, /* 200 */ { "x" : 3, "y" : 18.599998474121094, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 201 */ { "x" : 3, "y" : 28.599998474121094, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 202 */ { "x" : -5, "y" : 29.599998474121094, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 203 */ { "x" : 13.333335876464844, "y" : 30.66666665673256, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 204 */ { "x" : 10.333335876464844, "y" : 36.66666665673256, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 205 */ { "x" : -2.6666641235351562, "y" : 19.66666665673256, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 206 */ { "x" : -2.6666641235351562, "y" : 26.66666665673256, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 207 */ { "x" : -0.6666641235351562, "y" : 19.66666665673256, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 208 */ { "x" : -0.6666641235351562, "y" : 26.66666665673256, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 209 */ { "x" : 11.333335876464844, "y" : 10.66666665673256, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 210 */ { "x" : 13.333335876464844, "y" : 13.66666665673256, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 211 */ { "x" : -17.333332061767578, "y" : 16.666666984558105, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 212 */ { "x" : -9.333332061767578, "y" : 6.6666669845581055, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 213 */ { "x" : -17.333332061767578, "y" : 30.666666984558105, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 214 */ { "x" : -12.333332061767578, "y" : 35.666666984558105, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 215 */ { "x" : -5, "y" : -40, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "071B7E" }, /* 216 */ { "x" : -5, "y" : -15, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "071B7E" }, /* 217 */ { "x" : 10, "y" : -40, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 218 */ { "x" : -3.7777786254882812, "y" : -28, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 219 */ { "x" : 7, "y" : -28, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 220 */ { "x" : -57.39999771118164, "y" : -7, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "EFB810" }, /* 221 */ { "x" : 55.60000228881836, "y" : -7, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "EFB810" }, /* 222 */ { "x" : -57.39999771118164, "y" : -4, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "EFB810" }, /* 223 */ { "x" : 55.60000228881836, "y" : -4, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "EFB810" }, /* 224 */ { "x" : -57.39999771118164, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "EFB810" }, /* 225 */ { "x" : 55.60000228881836, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "EFB810" }, /* 226 */ { "x" : -32, "y" : -42, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "071B7E" }, /* 227 */ { "x" : -17, "y" : -42, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 228 */ { "x" : -8, "y" : -42, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "071B7E" }, /* 229 */ { "x" : -8, "y" : -17, "bCoef" : 0.1, "trait" : "line", "curve" : 0, "color" : "071B7E" }, /* 230 */ { "x" : 7, "y" : -42, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" }, /* 231 */ { "x" : 4, "y" : -30, "bCoef" : 0.1, "trait" : "line", "color" : "071B7E" } ], "segments" : [ { "v0" : 6, "v1" : 7, "curve" : 0, "color" : "FFFFFF", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 }, { "v0" : 7, "v1" : 8, "color" : "FFFFFF", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 }, { "v0" : 8, "v1" : 9, "curve" : 0, "color" : "FFFFFF", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 }, { "v0" : 10, "v1" : 11, "curve" : 0, "color" : "FFFFFF", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -80 }, { "v0" : 11, "v1" : 12, "color" : "FFFFFF", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : 590 }, { "v0" : 12, "v1" : 13, "curve" : 0, "color" : "FFFFFF", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 80 }, { "v0" : 2, "v1" : 3, "color" : "FFFFFF", "trait" : "kickOffBarrier" }, { "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" }, { "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" }, { "v0" : 4, "v1" : 5, "color" : "FFFFFF", "trait" : "kickOffBarrier" }, { "v0" : 14, "v1" : 15, "vis" : true, "color" : "FFFFFF", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 }, { "v0" : 16, "v1" : 17, "vis" : true, "color" : "FFFFFF", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 }, { "v0" : 18, "v1" : 19, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240 }, { "v0" : 20, "v1" : 21, "vis" : true, "color" : "FFFFFF", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 }, { "v0" : 22, "v1" : 23, "vis" : true, "color" : "FFFFFF", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 }, { "v0" : 24, "v1" : 25, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 }, { "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 }, { "v0" : 28, "v1" : 29, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, { "v0" : 30, "v1" : 31, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, { "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 }, { "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 }, { "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 }, { "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 }, { "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "EFB810", "bCoef" : 0.1, "trait" : "line", "x" : -550 }, { "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "EFB810", "bCoef" : 0.1, "trait" : "line", "x" : 550 }, { "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "trait" : "line", "x" : -381 }, { "v0" : 66, "v1" : 67, "curve" : -90, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 69, "v1" : 68, "curve" : -90, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 70, "v1" : 71, "curve" : 90, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 67, "v1" : 71, "curve" : 0, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 73, "v1" : 72, "curve" : 90, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 74, "v1" : 75, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 }, { "v0" : 76, "v1" : 77, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 }, { "v0" : 78, "v1" : 79, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 }, { "v0" : 80, "v1" : 81, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 }, { "v0" : 82, "v1" : 83, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "trait" : "line", "x" : -381 }, { "v0" : 84, "v1" : 85, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "trait" : "line", "x" : 381 }, { "v0" : 86, "v1" : 87, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "trait" : "line", "x" : 381 }, { "v0" : 89, "v1" : 88, "curve" : -90, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 91, "v1" : 90, "curve" : 90, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 92, "v1" : 93, "curve" : 90, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 94, "v1" : 95, "curve" : -90, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 96, "v1" : 97, "curve" : 0, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 390 }, { "v0" : 99, "v1" : 98, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 98, "v1" : 99, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 101, "v1" : 100, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 100, "v1" : 101, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 103, "v1" : 102, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 102, "v1" : 103, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 105, "v1" : 104, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 104, "v1" : 105, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 107, "v1" : 106, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 106, "v1" : 107, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 109, "v1" : 108, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 108, "v1" : 109, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 111, "v1" : 110, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 110, "v1" : 111, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 113, "v1" : 112, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 112, "v1" : 113, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 115, "v1" : 114, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 114, "v1" : 115, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 117, "v1" : 116, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 116, "v1" : 117, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 119, "v1" : 118, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 118, "v1" : 119, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 121, "v1" : 120, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 120, "v1" : 121, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 123, "v1" : 122, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 122, "v1" : 123, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 125, "v1" : 124, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 124, "v1" : 125, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 127, "v1" : 126, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 126, "v1" : 127, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 129, "v1" : 128, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 128, "v1" : 129, "curve" : 180, "vis" : true, "color" : "B6B6B8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 130, "v1" : 131, "curve" : 30.510237406115554, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 130, "v1" : 132, "curve" : -21.688246782510454, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 132, "v1" : 133, "curve" : -37.32402297924154, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 133, "v1" : 134, "curve" : -39.590045447894795, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 134, "v1" : 131, "curve" : -23.378738350878383, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 135, "v1" : 136, "curve" : -180, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 137, "v1" : 138, "curve" : 180, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 139, "v1" : 140, "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 139, "v1" : 141, "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 142, "v1" : 143, "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 144, "v1" : 145, "curve" : -61.579169590959616, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 145, "v1" : 146, "curve" : -81.88795850309086, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 146, "v1" : 147, "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 147, "v1" : 148, "curve" : -91.55037058586078, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 148, "v1" : 149, "curve" : -84.07659521498204, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 150, "v1" : 151, "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 150, "v1" : 152, "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 153, "v1" : 154, "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 155, "v1" : 156, "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 157, "v1" : 158, "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 159, "v1" : 160, "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 167, "v1" : 168, "curve" : 30.510237406115554, "vis" : true, "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 167, "v1" : 169, "curve" : -21.688246782510454, "vis" : true, "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 169, "v1" : 170, "curve" : -37.32402297924154, "vis" : true, "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 170, "v1" : 171, "curve" : -39.590045447894795, "vis" : true, "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 171, "v1" : 168, "curve" : -23.378738350878383, "vis" : true, "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 172, "v1" : 173, "curve" : -180, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 174, "v1" : 175, "curve" : 180, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 176, "v1" : 177, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 178, "v1" : 179, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 179, "v1" : 180, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 181, "v1" : 182, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 182, "v1" : 183, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 184, "v1" : 185, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 185, "v1" : 186, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 177, "v1" : 187, "curve" : 14.250032697803574, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 188, "v1" : 189, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 188, "v1" : 190, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 191, "v1" : 192, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 193, "v1" : 194, "curve" : -61.579169590959616, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 194, "v1" : 195, "curve" : -81.88795850309086, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 195, "v1" : 196, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 196, "v1" : 197, "curve" : -91.55037058586078, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 197, "v1" : 198, "curve" : -84.07659521498204, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 199, "v1" : 200, "curve" : -22.61986494804039, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 200, "v1" : 201, "curve" : -22.61986494804039, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 201, "v1" : 202, "curve" : -22.61986494804039, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 202, "v1" : 199, "curve" : -22.61986494804039, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 177, "v1" : 199, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 200, "v1" : 185, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 182, "v1" : 201, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 179, "v1" : 202, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 203, "v1" : 204, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 205, "v1" : 206, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 207, "v1" : 208, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 209, "v1" : 210, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 211, "v1" : 212, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 213, "v1" : 214, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 215, "v1" : 216, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 215, "v1" : 217, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 218, "v1" : 219, "curve" : 0, "vis" : true, "color" : "071B7E", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 220, "v1" : 221, "curve" : 0.9017871427253047, "vis" : true, "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 222, "v1" : 223, "curve" : 0, "vis" : true, "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 224, "v1" : 225, "curve" : 0, "vis" : true, "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" } ], "goals" : [ { "p0" : [-557.5,-80 ], "p1" : [-557.5,80 ], "team" : "red", "color" : "FFFFFF" }, { "p0" : [557.5,80 ], "p1" : [557.5,-80 ], "team" : "blue", "color" : "FFFFFF" } ], "discs" : [ { "radius" : 5, "pos" : [-550,80 ], "color" : "6666FF", "trait" : "goalPost", "y" : 80 }, { "radius" : 5, "pos" : [-550,-80 ], "color" : "6666FF", "trait" : "goalPost", "y" : -80, "x" : -560 }, { "radius" : 5, "pos" : [550,80 ], "color" : "6666FF", "trait" : "goalPost", "y" : 80 }, { "radius" : 5, "pos" : [550,-80 ], "color" : "6666FF", "trait" : "goalPost", "y" : -80 }, { "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" }, { "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" }, { "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" }, { "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "EFB810", "bCoef" : 0.1, "trait" : "line" } ], "planes" : [ { "normal" : [0,1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 }, { "normal" : [0,-1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea" }, { "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 }, { "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 }, { "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 }, { "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 }, { "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }, { "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 } ], "traits" : { "ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] }, "goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 }, "goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] }, "line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] }, "kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] } }, "playerPhysics" : { "bCoef" : 0, "acceleration" : 0.11, "kickingAcceleration" : 0.083, "kickStrength" : 5 }, "ballPhysics" : { "radius" : 6.25, "bCoef" : 0.4, "invMass" : 1.5, "damping" : 0.99, "color" : "FFFFFF" } }';

var x4b = '{"name":"Futsal x4 by Bazinga from HaxMaps","width":800,"height":350,"bg":{"type":"hockey","width":700,"height":320,"kickOffRadius":80},"vertexes":[{"x":-700,"y":321,"cMask":["ball"]},{"x":-700,"y":-319,"cMask":["ball"]},{"x":699,"y":319,"cMask":["ball"]},{"x":601,"y":-320,"cMask":["ball"]},{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-700,"y":-99,"bCoef":0.1,"cMask":["ball"]},{"x":-750,"y":-99,"bCoef":0.1,"cMask":["ball"]},{"x":-750,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":749,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":749,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":699,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":321,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":-99,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":-319,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":321,"bCoef":2,"cMask":["ball"]},{"x":699,"y":319,"bCoef":2,"cMask":["ball"]},{"x":699,"y":90,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":319,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":-321,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":-90,"bCoef":1.25,"cMask":["ball"]},{"x":601,"y":-320,"bCoef":0,"cMask":["ball"]},{"x":601,"y":-320,"bCoef":0,"cMask":["ball"]},{"x":-699,"y":-320,"bCoef":2,"cMask":["ball"]},{"x":699,"y":-321,"bCoef":2,"cMask":["ball"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-710,"y":90,"cMask":["ball"]},{"x":-710,"y":321,"cMask":["ball"]},{"x":-710,"y":90,"cMask":["ball"]},{"x":-710,"y":321,"cMask":["ball"]},{"x":-710,"y":-315,"cMask":["ball"]},{"x":-710,"y":-99,"cMask":["ball"]},{"x":710,"y":-90,"cMask":["ball"]},{"x":709,"y":-317,"cMask":["ball"]},{"x":709,"y":-90,"cMask":["ball"]},{"x":709,"y":94,"cMask":["ball"]},{"x":709,"y":319,"cMask":["ball"]},{"x":-699,"y":274,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":-141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":-141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-699,"y":-274,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":698,"y":273,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":140,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":140,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":-142,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":-142,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":698,"y":-275,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":-701,"y":90,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-701,"y":-90,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":699,"y":90,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":699,"y":-90,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":-713,"y":90,"cMask":["ball"]},{"x":-713,"y":321,"cMask":["ball"]},{"x":-713,"y":-315,"cMask":["ball"]},{"x":-713,"y":-99,"cMask":["ball"]},{"x":712,"y":-317,"cMask":["ball"]},{"x":712,"y":-90,"cMask":["ball"]},{"x":712,"y":94,"cMask":["ball"]},{"x":712,"y":319,"cMask":["ball"]},{"x":704,"y":-317,"cMask":["ball"]},{"x":704,"y":-90,"cMask":["ball"]},{"x":704,"y":-317,"cMask":["ball"]},{"x":704,"y":-90,"cMask":["ball"]},{"x":704,"y":94,"cMask":["ball"]},{"x":704,"y":319,"cMask":["ball"]},{"x":704,"y":94,"cMask":["ball"]},{"x":704,"y":319,"cMask":["ball"]},{"x":-705,"y":90,"cMask":["ball"]},{"x":-705,"y":321,"cMask":["ball"]},{"x":-705,"y":90,"cMask":["ball"]},{"x":-705,"y":321,"cMask":["ball"]},{"x":-705,"y":-315,"cMask":["ball"]},{"x":-705,"y":-99,"cMask":["ball"]},{"x":-705,"y":-315,"cMask":["ball"]},{"x":-705,"y":-99,"cMask":["ball"]},{"x":-699,"y":319.88890075683594,"bCoef":2,"cMask":["ball"]},{"x":699,"y":318.88890075683594,"bCoef":2,"cMask":["ball"]}],"segments":[{"v0":8,"v1":9,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":9,"v1":10,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":10,"v1":11,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":12,"v1":13,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":14,"v1":15,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":4,"v1":5,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":5,"v1":6,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"F8F8F8"},{"v0":6,"v1":5,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":6,"v1":7,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":16,"v1":17,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":18,"v1":19,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":22,"v1":23,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":24,"v1":25,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":26,"v1":27,"bCoef":0,"cMask":["ball"],"color":"F8F8F8"},{"v0":28,"v1":29,"bCoef":2,"cMask":["ball"],"color":"F8F8F8"},{"v0":30,"v1":31,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":32,"v1":33,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":42,"v1":43,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":44,"v1":45,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":46,"v1":47,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":49,"v1":50,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":51,"v1":52,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":54,"v1":53,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":56,"v1":55,"bCoef":0.1,"curve":10,"curveF":11.430052302761343,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":58,"v1":57,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":59,"v1":60,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":61,"v1":62,"bCoef":0.1,"curve":10,"curveF":11.430052302761343,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":63,"v1":64,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":65,"v1":66,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":67,"v1":68,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":69,"v1":70,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":71,"v1":72,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":73,"v1":74,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":75,"v1":76,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":77,"v1":78,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":79,"v1":80,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":81,"v1":82,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":83,"v1":84,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":85,"v1":86,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":87,"v1":88,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":89,"v1":90,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":91,"v1":92,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":93,"v1":94,"bCoef":2,"cMask":["ball"],"color":"F8F8F8"}],"planes":[{"normal":[0,1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-317.5,"cMask":["ball"]},{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[0,-1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-800,"bCoef":0.1},{"normal":[-1,0],"dist":-800,"bCoef":0.1}],"goals":[{"p0":[-707,-94],"p1":[-707,86],"team":"red"},{"p0":[706,90],"p1":[706,-90],"team":"blue"}],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FFCC00","cGroup":["ball","kick","score"]},{"pos":[-700,89],"radius":6,"invMass":0,"color":"FF0000"},{"pos":[-700,-99],"radius":6,"invMass":0,"color":"FF0000"},{"pos":[700,90],"radius":6,"invMass":0,"color":"33FF"},{"pos":[701,-89],"radius":6,"invMass":0,"color":"33FF"}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","spawnDistance":350}'

var x3b = '{"name":"Futsal x3  by Bazinga from HaxMaps","width":620,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},{"x":0,"y":80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":550,"y":80,"bCoef":0.1,"trait":"line"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":240,"y":256,"bCoef":0.1,"trait":"line"},{"x":120,"y":224,"bCoef":0.1,"trait":"line"},{"x":120,"y":256,"bCoef":0.1,"trait":"line"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":256,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":550},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":66,"v1":67,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":67,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":73,"v1":72,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":89,"v1":88,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":91,"v1":90,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":94,"v1":95,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":123,"v1":122,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":127,"v1":126,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":126,"v1":127,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":128,"v1":129,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FF6666","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"FF6666","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666FF","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1},{"normal":[-1,0],"dist":-620,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"}}'