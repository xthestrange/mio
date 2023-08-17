const roomName = "๖໐k໐ hคrค๓ VS _???  ";
 
const maxPlayers = 25;
const roomPublic = false;
const roomPassword = "BOKOharam2112"
const playerName = "𝙰𝚛𝚋𝚒𝚝𝚛𝚘";
const geo = [{code: "CL", lat: 40.712772, lon: -74.006058} ];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, password: roomPassword, public: roomPublic, playerName: playerName, geo: geo[0] });
 
var masterPassword = "onlyduki2807" 
var adminPassword = "bokoadmin123";
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
		"color1": 0x404040,
		"color2": 0x2E2E2E,
		"color3": 0x171717,
		"angle2": 60,
		"textcolor2": 0x000000,
		"color21": 0xFFFFFF,
		"color22": 0xE8E8E8,
		"color23": 0xC9C9C9,
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
const replaysdiscord = "https://discord.com/api/webhooks/1141165697985151056/JJUq1EQpzkevx2p-L52DD8-TjCsx7QQQH-uaurHourSpbjWQoBE_Ix6hwAY9m1xNeC4Z";

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
		room.sendAnnouncement("[📄] Comandos : !uni, !reserva, !bans, t mensaje, @id mensaje ", player.id,0xFFFFFF,"bold");
		player.admin ? room.sendAnnouncement("Admin : !mute #jugador, !swap, !rr, !bans, !entreno, !x3, !x4", player.id,0x00FFFF,"bold") : null;
		if(localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master"){
		room.sendAnnouncement("Master : !clearbans, !setplayer, !setadmin", player.id,0xFFFF00,"bold");
		}
	}
	else if (["!claim"].includes(message[0].toLowerCase())) {
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
    else if(["!x4"].includes(message[0])){
			if(player.admin){
			room.setCustomStadium(x4oficial);	
			}
			return false;
		}
	else if(["!x3"].includes(message[0])){
			if(player.admin){
			room.setCustomStadium(x3oficial);	
			}
			return false;
		}
	else if(["!entreno"].includes(message[0])){
			if(player.admin){
			room.setCustomStadium(entreno1);	
			}
			return false;
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
				room.sendAnnouncement("[Team] " + player.name + ": " + teamMessage, teamPlayer.id, 0xED6A5A, "bold", 1);
			});
		}
		if (player.team == 2) {
			var teamPlayers = room.getPlayerList().filter((player) => player.team == 2);
			teamPlayers.forEach(function(teamPlayer) {
				room.sendAnnouncement("[Team] " + player.name + ": " + teamMessage, teamPlayer.id, 0x5995ED, "bold", 1);
			});
		}
		if (player.team == 0) {
			var teamPlayers = room.getPlayerList().filter((player) => player.team == 0);
			teamPlayers.forEach(function(teamPlayer) {
				room.sendAnnouncement("[Spec] " + player.name + ": " + teamMessage, teamPlayer.id, 0xdee7fa, "bold", 1);
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
 
var x4oficial = '{"name": "Futsal x4 ๖໐k໐ hคrค๓.", "canBeStored": false, "width": 765, "height": 350, "bg": { "type": "hockey", "height": 0, "width": 0, "cornerRadius": 0, "kickOffRadius": 0 }, "vertexes": [ { "x": 0, "y": -320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "x": -700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ] }, { "x": -735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ] }, { "x": -735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ] }, { "x": -700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ] }, { "x": 700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ] }, { "x": 735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ] }, { "x": 735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ] }, { "x": 700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ] }, { "x": -700, "y": 90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "pos": [ -700, 80 ] }, { "x": -700, "y": 320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": -700, "y": -90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "pos": [ -700, -80 ] }, { "x": -700, "y": -320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": -700, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": 700, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": 700, "y": 90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "pos": [ 700, 80 ], "color": "ffffff" }, { "x": 700, "y": 320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": 700, "y": -320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": 700, "y": -90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "pos": [ 700, -90 ] }, { "x": -700, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "color": "ffffff" }, { "x": 700, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "color": "ffffff" }, { "x": -706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ -700, 80 ], "color": "ffffff" }, { "x": -706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff" }, { "x": -706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff" }, { "x": -706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ -700, -80 ], "color": "ffffff" }, { "x": 706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff" }, { "x": 706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ 700, -90 ], "color": "ffffff" }, { "x": 706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ 700, 80 ], "color": "ffffff" }, { "x": 706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff" }, { "x": -700, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000" }, { "x": -700, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000" }, { "x": 700, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000", "pos": [ 700, -90 ] }, { "x": 700, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000" }, { "x": -700, "y": 280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827 }, { "x": -480, "y": 60, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827 }, { "x": -700, "y": -280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827 }, { "x": -480, "y": -60, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827 }, { "x": 700, "y": 280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827 }, { "x": 480, "y": 70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827 }, { "x": 700, "y": -280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827 }, { "x": 480, "y": -70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827 }, { "x": 480, "y": 70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 0 }, { "x": 480, "y": -70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 0 }, { "x": 480, "y": 1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": 480, "y": -1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": 480, "y": 3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": 480, "y": -3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": 480, "y": 2, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -480, "y": 1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -480, "y": -1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -480, "y": 3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -480, "y": -3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -480, "y": 2, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ], "vis": false }, { "x": -735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ], "vis": false }, { "x": -735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ], "vis": false }, { "x": -700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ], "vis": false }, { "x": 700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ], "vis": false }, { "x": 735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ], "vis": false }, { "x": 735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ], "vis": false }, { "x": 700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ], "vis": false }, { "x": 0, "y": 320, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "x": 0, "y": 90, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ffffff" }, { "x": 0, "y": -90, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ffffff" }, { "x": 0, "y": 90, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "696969" }, { "x": 0, "y": -90, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "696969" }, { "x": 0, "y": -320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ffffff" }, { "x": 0, "y": 90, "cMask": [], "color": "ffffff" }, { "x": 0, "y": 90, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ffffff" }, { "x": 0, "y": 320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ffffff" }, { "x": 0, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -180 }, { "x": 0, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -180 }, { "x": 0, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": 180 }, { "x": 0, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": 180 }, { "x": 0, "y": 91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000", "curve": -180 }, { "x": 0, "y": -91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000", "curve": -180 }, { "x": 0, "y": 91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000", "curve": 180 }, { "x": 0, "y": -91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000", "curve": 180 }, { "x": 0, "y": -91, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "000000" }, { "x": 0, "y": -320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "000000" }, { "x": 0, "y": 91, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "000000" }, { "x": 0, "y": 320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "000000" }, { "x": -706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ -700, 80 ], "color": "ffffff" }, { "x": -706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff" }, { "x": -706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff" }, { "x": -706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ -700, -80 ], "color": "ffffff" }, { "x": 706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff" }, { "x": 706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ 700, -90 ], "color": "ffffff" }, { "x": 706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ 700, 80 ], "color": "ffffff" }, { "x": 706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff" }, { "x": -1.4219843611043217, "y": -0.9458136558835442, "bCoef": 0.1, "trait": "line" }, { "x": -14.735727335536708, "y": 20.30017953226044, "bCoef": 0.1, "trait": "line" }, { "x": 9.600690041218954, "y": -0.2805346378487492, "bCoef": 0.1, "trait": "line" }, { "x": -7.021233514230417, "y": 28.549206985056653, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 36.42750356049085, "y": 0.9234956047903005, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "662703" }, { "x": -11.01865453526905, "y": -1.9678153262558915, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -7.02123351423036, "y": 28.549206985056653, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -14.735727335536708, "y": 20.300179532260383, "bCoef": 0.1, "trait": "line" }, { "x": 14.240529352338442, "y": 6.295423355424216, "bCoef": 0.1, "trait": "line" }, { "x": 13.748843720341611, "y": -0.23080990166772963, "bCoef": 0.1, "trait": "line" }, { "x": 22.704654053966536, "y": 6.709419548980346, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 14.076929602069853, "y": 6.140258791384493, "bCoef": 0.1, "trait": "line" }, { "x": 22.385889739658083, "y": 6.717854735209098, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 21.89420410766148, "y": 0.19162147811699626, "bCoef": 0.1, "trait": "line" }, { "x": 27.000423492091258, "y": 12.337519785557216, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 22.188549244474856, "y": 5.287632913935976, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 29.790940814075995, "y": 21.354821253514896, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 26.832606148708564, "y": 12.022973064363168, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 37.86038452533755, "y": 18.90837380452461, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 29.63155865692174, "y": 21.35903884662933, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 37.86038452533755, "y": 18.90837380452461, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 34.47029691276525, "y": 11.342382123411792, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 34.63389666303392, "y": 11.497546687451656, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 36.58688571764499, "y": 0.9192780116759103, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 36.591103310759294, "y": 1.0786601688300657, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 37.189787220155736, "y": -6.433389182987444, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 48.065732244667956, "y": -5.285746100375764, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 37.03462265611587, "y": -6.269789432718884, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 51.831857712767075, "y": -7.618318535278494, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 48.065732244667956, "y": -5.285746100375764, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 78.21426550549118, "y": -5.126578256063045, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 51.672475555612905, "y": -7.614100942164161, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 75.6625925414837, "y": 12.963739771530182, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 78.05488334833701, "y": -5.122360662948655, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 75.65415735525498, "y": 12.644975457221758, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": 36.42750356049085, "y": 0.9234956047903005, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": 37.202439999498765, "y": -5.955242711524921, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 30.025138953255905, "y": -11.985572743505944, "bCoef": 0.1, "trait": "line" }, { "x": 30.18873870352435, "y": -11.83040817946608, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -8.10937253773291, "y": -12.571389560717709, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": 32.89068657010755, "y": -6.1601320117457625, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": 2.259789244707619, "y": -6.466029233869566, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": 2.5785535590159014, "y": -6.47446442009829, "bCoef": 0.1, "trait": "line" }, { "x": 1.7352492489871878, "y": -8.20658018322229, "bCoef": 0.1, "trait": "line" }, { "x": 2.0540135632957544, "y": -8.215015369451098, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -7.680950802451449, "y": -8.435888660938193, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -7.995497523645454, "y": -8.268071317555272, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -7.676733209337229, "y": -8.276506503783938, "bCoef": 0.1, "trait": "line" }, { "x": -8.520037519365772, "y": -10.008622266908024, "bCoef": 0.1, "trait": "line" }, { "x": -8.10937253773291, "y": -12.571389560717709, "bCoef": 0.1, "trait": "line" }, { "x": -17.62257723080161, "y": -16.466487652979286, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 14.240529352338442, "y": 6.295423355424216, "bCoef": 0.1, "trait": "line" }, { "x": 13.748843720341611, "y": -0.23080990166772963, "bCoef": 0.1, "trait": "line" }, { "x": -10.69145503473193, "y": -1.657486198176219, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -11.200011039186066, "y": -8.821248083884885, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -11.032193695803258, "y": -8.506701362690936, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -18.686754832317447, "y": -8.463639050356282, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -18.523155082049087, "y": -8.30847448631636, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -19.01905830716005, "y": -14.994089900562589, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -19.00218793470266, "y": -14.356561271945967, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -17.144430759339187, "y": -16.479140432322314, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -18.847023370662683, "y": -14.520161022214584, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -41.294601970714, "y": -12.969187450166064, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -10.699890220960654, "y": -1.9762505124845582, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -14.638050625557142, "y": -0.11760695592989023, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -14.478668468402773, "y": -0.12182454904432305, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -20.762054087244806, "y": -2.5074529320512404, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -20.59845433697616, "y": -2.3522883680114752, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -41.01624082516663, "y": -2.4499650779912265, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -40.844205888669435, "y": -1.9760361996431364, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -41.62180147125083, "y": -13.279516578245708, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -41.59649591256466, "y": -12.323223635320804, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -56.55733071948448, "y": -11.129859096800946, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -56.23856640517609, "y": -11.138294283029555, "bCoef": 0.1, "trait": "line" }, { "x": -59.639534034708916, "y": -7.06095330565984, "bCoef": 0.1, "trait": "line" }, { "x": -59.16138756324649, "y": -7.07360608500284, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -81.15190765740665, "y": -6.332196078068311, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -40.865293854241216, "y": -2.772946985413885, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -76.08453299219714, "y": -1.681476749988196, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -76.2439151493514, "y": -1.6772591568738768, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -75.92515083504306, "y": -1.6856943431025861, "bCoef": 0.1, "trait": "line" }, { "x": -76.76845514507154, "y": -3.4178101062266997, "bCoef": 0.1, "trait": "line" }, { "x": -76.44969083076337, "y": -3.426245292455338, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -76.4412556445347, "y": -3.1074809781470414, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -81.06755579511982, "y": -3.1445529349850183, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -80.99252550025263, "y": -6.336413671182701, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -80.7445738876972, "y": -2.993605964059615, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -78.28302882863177, "y": -6.408112754126652, "bCoef": 0.1, "trait": "line" }, { "x": -78.64485545527482, "y": -14.054238704412146, "bCoef": 0.1, "trait": "line" }, { "x": -76.4412556445347, "y": -3.1074809781470414, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -81.06755579511982, "y": -3.1445529349850183, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -74.65608393330639, "y": -14.000296375116765, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -78.96361976958322, "y": -14.045803518183508, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -70.96410237888342, "y": -7.08026850884929, "bCoef": 0.1, "trait": "line" }, { "x": -74.81546609046059, "y": -13.996078782002375, "bCoef": 0.1, "trait": "line" }, { "x": -55.33163100259638, "y": -59.89638647033756, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -48.73676558978171, "y": -46.706655644708164, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -49.28633770751624, "y": -46.70665564470819, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -49.83590982525085, "y": -34.34128299568064, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -50.1106958841181, "y": -34.34128299568066, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -42.41668623583429, "y": -38.463073878689826, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -49.83590982525085, "y": -37.63871570208799, "bCoef": 0.1, "trait": "line", "curve": -171.40522667214597, "color": "ffffff" }, { "x": -43.5158304713034, "y": -39.837004173026216, "bCoef": 0.1, "trait": "line", "curve": -171.40522667214597, "color": "ffffff" }, { "x": -23.181662115124777, "y": -45.05793929150455, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -23.181662115124805, "y": -34.890855113415185, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -22.357303938522943, "y": -46.431869585840914, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -23.181662115124805, "y": -34.34128299568066, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": 8.693520713479547, "y": -59.072028293735755, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 8.693520713479547, "y": -28.29598970060054, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 11.990953419886825, "y": -45.8822974681063, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 21.883251539108887, "y": -28.295989700600526, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 21.608465480241552, "y": -51.65280470431922, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 8.693520713479547, "y": -43.40922293830086, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 31.225977540596393, "y": -43.95879505603544, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 31.225977540596336, "y": -33.79171087794609, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 32.050335717198166, "y": -45.3327253503718, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": 31.225977540596336, "y": -33.242138760211546, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -50.243500163789804, "y": 31.369699403433955, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -50.243500163789804, "y": 61, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -50.144051443663244, "y": 41.88430023798159, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -36.72889578215046, "y": 47.433050822250195, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -36.82686404587781, "y": 46.63690602036827, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -36.82686404587781, "y": 61, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -25.3926710192394, "y": 45.35411992364851, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -10.820908795837681, "y": 48.35833607176137, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -10.918877059565034, "y": 47.56219126987945, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -10.918877059565034, "y": 61, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -25.120283282745362, "y": 44.71815297349481, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -26.047048988655717, "y": 54.43068718056368, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -26.186083676499322, "y": 53.34522407932427, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -26.18608367649935, "y": 61, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -20.95993550796402, "y": 52.56558558205097, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -26.25196863199028, "y": 60, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -21.96926944867249, "y": 53.326411696015626, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -20.61927691158698, "y": 54.607105209355495, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -1.6660245644533234, "y": 41.31651583567904, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -1.6660245644533234, "y": 61, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -1.7978971567045505, "y": 45.816762548404085, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 6.296868320118961, "y": 43.731909824205516, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 13.00666683547422, "y": 46.04808386078189, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 27.57842905887594, "y": 49.05230000889475, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 27.480460795148645, "y": 48.256155207012824, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 27.480460795148645, "y": 61, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 13.279054571968231, "y": 45.412116910628185, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 12.352288866057904, "y": 55.124651117697084, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 12.2132541782143, "y": 54.03918801645764, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 12.213254178214243, "y": 61, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 17.439402346749603, "y": 53.25954951918435, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 12.147369222723341, "y": 60, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 16.43006840604113, "y": 54.020375633149015, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 17.78006094312667, "y": 55.301069146488885, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 51.855083952387254, "y": 49.29960882506219, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 52.13834281572315, "y": 61.49244873900874, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 51.855083952387254, "y": 49.66072085761312, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 43.368951187440366, "y": 52.89921923090221, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 34.82335940038116, "y": 49.158876674908875, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 35.80740376295921, "y": 60.89056846057846, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 34.818761397308954, "y": 49.519959433318654, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 43.60674611219185, "y": 52.63315082921496, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 36.32370127053133, "y": 60.98261580091141, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 37.673693807616814, "y": 62.263309314251266, "bCoef": 0.1, "trait": "line", "color": "ffffff" } ], "segments": [ { "v0": 1, "v1": 2, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, -80 ], "y": -90 }, { "v0": 2, "v1": 3, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": -735 }, { "v0": 3, "v1": 4, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, 80 ], "y": 90 }, { "v0": 5, "v1": 6, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, -90 ], "y": -90 }, { "v0": 6, "v1": 7, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": 735 }, { "v0": 7, "v1": 8, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, 80 ], "y": 90 }, { "v0": 9, "v1": 10, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": -550 }, { "v0": 11, "v1": 12, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": -550 }, { "v0": 13, "v1": 14, "vis": true, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "y": 240 }, { "v0": 15, "v1": 16, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": 550 }, { "v0": 17, "v1": 18, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": 550 }, { "v0": 19, "v1": 20, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "y": -240 }, { "v0": 21, "v1": 22, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5 }, { "v0": 23, "v1": 24, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5 }, { "v0": 25, "v1": 26, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5 }, { "v0": 27, "v1": 28, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5 }, { "v0": 29, "v1": 30, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -550 }, { "v0": 31, "v1": 32, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 550 }, { "v0": 33, "v1": 34, "curve": -93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 35, "v1": 36, "curve": 93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 34, "v1": 36, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480 }, { "v0": 37, "v1": 38, "curve": 93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 39, "v1": 40, "curve": -93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 41, "v1": 42, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 44, "v1": 43, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 43, "v1": 44, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 46, "v1": 45, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 45, "v1": 46, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 49, "v1": 48, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480 }, { "v0": 48, "v1": 49, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480 }, { "v0": 51, "v1": 50, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480 }, { "v0": 50, "v1": 51, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480 }, { "v0": 53, "v1": 54, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, -80 ], "y": -90 }, { "v0": 54, "v1": 55, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": -735 }, { "v0": 55, "v1": 56, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, 80 ], "y": 90 }, { "v0": 57, "v1": 58, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, -90 ], "y": -90 }, { "v0": 58, "v1": 59, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": 735 }, { "v0": 59, "v1": 60, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, 80 ], "y": 90 }, { "v0": 62, "v1": 63, "curve": 179.42829117403, "color": "ffffff", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "curveF": 0.0049891420830909 }, { "v0": 65, "v1": 64, "curve": 180, "color": "696969", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "curveF": 6.1232339957368e-17 }, { "v0": 70, "v1": 71, "curve": -180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0 }, { "v0": 72, "v1": 73, "curve": 180, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0 }, { "v0": 74, "v1": 75, "curve": -180, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0 }, { "v0": 76, "v1": 77, "curve": 180, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0 }, { "v0": 79, "v1": 78, "color": "000000", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "v0": 80, "v1": 81, "color": "000000", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "v0": 82, "v1": 83, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5 }, { "v0": 84, "v1": 85, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5 }, { "v0": 86, "v1": 87, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5 }, { "v0": 88, "v1": 89, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5 }, { "v0": 90, "v1": 91, "curve": 63.48552230683781, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 92, "v1": 93, "curve": 60.7249471482441, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 94, "v1": 95, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 96, "v1": 97, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 98, "v1": 99, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 100, "v1": 101, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 102, "v1": 103, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 104, "v1": 105, "curve": -40.44971886234031, "vis": true, "color": "662703", "bCoef": 0.1, "trait": "line" }, { "v0": 106, "v1": 107, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 108, "v1": 109, "curve": 32.32328168423968, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 110, "v1": 111, "curve": -49.38996528079284, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 112, "v1": 113, "curve": 81.8555255799868, "vis": true, "color": "662703", "bCoef": 0.1, "trait": "line" }, { "v0": 114, "v1": 115, "vis": true, "color": "662703", "bCoef": 0.1, "trait": "line" }, { "v0": 116, "v1": 117, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 118, "v1": 119, "curve": 89.47193203747327, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 120, "v1": 121, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 122, "v1": 123, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 124, "v1": 125, "curve": 0, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 126, "v1": 127, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 128, "v1": 129, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 130, "v1": 131, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 132, "v1": 133, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 134, "v1": 135, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 137, "v1": 138, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 139, "v1": 140, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 141, "v1": 142, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 143, "v1": 144, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 145, "v1": 146, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 147, "v1": 148, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 149, "v1": 150, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 151, "v1": 152, "curve": 0, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 153, "v1": 154, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 155, "v1": 156, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 157, "v1": 158, "curve": 0, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 159, "v1": 160, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 161, "v1": 162, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 163, "v1": 164, "curve": 89.47193203747327, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 165, "v1": 166, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 167, "v1": 168, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 170, "v1": 171, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 173, "v1": 174, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 175, "v1": 176, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 177, "v1": 178, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 179, "v1": 180, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 181, "v1": 182, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 183, "v1": 184, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 185, "v1": 186, "curve": 61.927513064142914, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 187, "v1": 188, "curve": 284.4867219195378, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 189, "v1": 190, "curve": 171.40522667214597, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 191, "v1": 192, "curve": -171.40522667214597, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 193, "v1": 194, "curve": 306.21081833524164, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 195, "v1": 196, "curve": -45.13401815574261, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 197, "v1": 198, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 199, "v1": 200, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 201, "v1": 202, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 203, "v1": 204, "curve": 306.21081833524164, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 205, "v1": 206, "curve": -45.13401815574261, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 207, "v1": 208, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 209, "v1": 210, "curve": 141.0269513033983, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 211, "v1": 212, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 213, "v1": 214, "curve": 154.41343651122733, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 215, "v1": 216, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 217, "v1": 218, "curve": -20.22236524954136, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 219, "v1": 220, "curve": 9.790287355018622, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 221, "v1": 222, "curve": 9.790287355018622, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 223, "v1": 224, "curve": 306.21081833524164, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 225, "v1": 226, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 227, "v1": 228, "curve": 106.69560446056494, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 229, "v1": 230, "curve": 154.41343651122733, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 231, "v1": 232, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 233, "v1": 234, "curve": -20.22236524954136, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 235, "v1": 236, "curve": 9.790287355018622, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 237, "v1": 238, "curve": 9.790287355018622, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 239, "v1": 240, "curve": 306.21081833524164, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 241, "v1": 242, "curve": 46.78217343698191, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 243, "v1": 244, "curve": -168.08032177858712, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 245, "v1": 246, "curve": -45.97977672599232, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 247, "v1": 248, "curve": 168.30364775676796, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 249, "v1": 250, "curve": 306.21081833524164, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" } ], "planes": [ { "normal": [ 0, -1 ], "dist": -320, "cMask": [ "ball" ] }, { "normal": [ 0, 1 ], "dist": -320, "cMask": [ "ball" ] } ], "goals": [ { "p0": [ -707.5, -90 ], "p1": [ -707.5, 90 ], "team": "red", "color": "ffffff" }, { "p0": [ 707.5, 90 ], "p1": [ 707.5, -90 ], "team": "blue", "color": "ffffff" } ], "discs": [ { "radius": 5.5, "invMass": 0, "pos": [ -700, 90 ], "color": "592203", "trait": "goalPost", "y": 90 }, { "radius": 5.5, "invMass": 0, "pos": [ -700, -90 ], "color": "592203", "trait": "goalPost", "y": -85, "x": -560 }, { "radius": 5.5, "invMass": 0, "pos": [ 700, 90 ], "color": "592203", "trait": "goalPost", "y": 90 }, { "radius": 5.5, "invMass": 0, "pos": [ 700, -90 ], "color": "592203", "trait": "goalPost", "y": -85, "vis": true } ], "playerPhysics": { "bCoef": 0.1, "acceleration": 0.11, "kickingAcceleration": 0.083, "kickStrength": 5 }, "ballPhysics": { "radius": 6.25, "bCoef": 0.4, "invMass": 1.5, "color": "FFFFFF" }, "spawnDistance": 200, "traits": { "ballArea": { "vis": false, "bCoef": 1, "cMask": [ "ball" ] }, "goalPost": { "radius": 8, "invMass": 0, "bCoef": 0.5 }, "goalNet": { "vis": true, "bCoef": 0.1, "cMask": [ "ball" ] }, "line": { "vis": true, "bCoef": 0.1, "cMask": [ "" ] }, "kickOffBarrier": { "vis": false, "bCoef": 0.1, "cGroup": [ "redKO", "blueKO" ], "cMask": [ "red", "blue" ] } }, "joints": [], "redSpawnPoints": [], "blueSpawnPoints": [] }';

var entreno1 = '{"name":"FAH Training by Jijazo","width":765,"height":350,"bg":{"type":"hockey"},"vertexes":[{"x":0,"y":-350,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":320,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-320,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":320,"cMask":["ball"]},{"x":700,"y":320,"cMask":["ball"]},{"x":700,"y":90,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":320,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":-320,"bCoef":1.15,"cMask":["ball"]},{"x":700,"y":-90,"bCoef":1.15,"cMask":["ball"]},{"x":-700,"y":-320,"cMask":["ball"]},{"x":700,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":90,"cMask":["ball"]},{"x":-706.5,"y":320,"cMask":["ball"]},{"x":-706.5,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":-320,"cMask":["ball"]},{"x":706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":90,"cMask":["ball"]},{"x":706.5,"y":320,"cMask":["ball"]},{"x":-700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":280,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":60,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-280,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":-60,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":280,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-280,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":1,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-1,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":3,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-3,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":2,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":1,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":-1,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":3,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":-3,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":2,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-735,"y":-90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-735,"y":90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-765.1,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":-735,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":-765.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":-735,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":765.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":765.1,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":0,"y":320,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["ball"],"cGroup":["red","blue"]},{"x":-32,"y":-319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-32,"y":320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-23.5,"y":-350,"cMask":["ball"]},{"x":-23.5,"y":350,"cMask":["ball"]},{"x":-706.5,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":-320,"cMask":["ball"]},{"x":706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":90,"cMask":["ball"]},{"x":706.5,"y":320,"cMask":["ball"]},{"x":-735,"y":-350,"bCoef":0.5,"cMask":["red","blue"]},{"x":-735,"y":350,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":350,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":-350,"bCoef":0.5,"cMask":["red","blue"]},{"x":-0.5,"y":-322,"cMask":["ball"]},{"x":329,"y":-319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":329,"y":320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":320.5,"y":-348,"cMask":["ball"]},{"x":320.5,"y":352,"cMask":["ball"]},{"x":-10,"y":-319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-10,"y":320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":307,"y":-320,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":307,"y":319,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"]},{"x":-15,"y":8.5,"cMask":["ball"]},{"x":312,"y":8.5,"cMask":["ball"]},{"x":-15,"y":-8.5,"cMask":["ball"]},{"x":312,"y":-8.5,"cMask":["ball"]},{"x":-15,"y":0,"cMask":["ball"]},{"x":312,"y":0,"cMask":["ball"]},{"x":-18.5,"y":-350,"cMask":["ball"]},{"x":-18.5,"y":350,"cMask":["ball"]},{"x":315.5,"y":-348,"cMask":["ball"]},{"x":315.5,"y":352,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-726,"y":-125,"bCoef":1.5,"cMask":["ball"]},{"x":-726,"y":105,"bCoef":1.5,"cMask":["ball"]},{"x":-732.5,"y":-125,"bCoef":1.5,"cMask":["ball"]},{"x":-732.5,"y":105,"bCoef":1.5,"cMask":["ball"]},{"x":734,"y":-115,"bCoef":2.5,"cMask":["ball"]},{"x":734,"y":115,"bCoef":2.5,"cMask":["ball"]},{"x":727.5,"y":-115,"bCoef":1.5,"cMask":["ball"]},{"x":727.5,"y":115,"bCoef":1.5,"cMask":["ball"]},{"x":700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-734,"y":97,"bCoef":1.5,"cMask":["ball"]},{"x":-708,"y":97,"bCoef":1.5,"cMask":["ball"]},{"x":-735,"y":-97,"bCoef":1.5,"cMask":["ball"]},{"x":-709,"y":-97,"bCoef":1.5,"cMask":["ball"]},{"x":706,"y":96,"bCoef":1.5,"cMask":["ball"]},{"x":732,"y":96,"bCoef":1.5,"cMask":["ball"]},{"x":705,"y":-98,"bCoef":1.5,"cMask":["ball"]},{"x":731,"y":-98,"bCoef":1.5,"cMask":["ball"]},{"x":506.5,"y":-194,"bCoef":1.5,"cMask":["ball"]},{"x":506.5,"y":36,"bCoef":1.5,"cMask":["ball"]},{"x":721,"y":-116,"bCoef":1.5,"cMask":["ball"]},{"x":721,"y":114,"bCoef":1.5,"cMask":["ball"]},{"x":720,"y":-122,"bCoef":1.5,"cMask":["ball"]},{"x":720,"y":108,"bCoef":1.5,"cMask":["ball"]},{"x":726.5,"y":-122,"bCoef":1.5,"cMask":["ball"]},{"x":726.5,"y":108,"bCoef":1.5,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":2,"v1":3,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":3,"v1":4,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":4,"v1":5,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":6,"v1":7,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":7,"v1":8,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":8,"v1":9,"bCoef":0.2,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":10,"v1":11,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":12,"v1":13,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":14,"v1":15,"cMask":["ball"],"color":"FFFFFF"},{"v0":16,"v1":17,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":18,"v1":19,"bCoef":1.15,"cMask":["ball"],"color":"FFFFFF"},{"v0":20,"v1":21,"cMask":["ball"],"color":"FFFFFF"},{"v0":22,"v1":23,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":24,"v1":25,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":26,"v1":27,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":28,"v1":29,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":35,"v1":34,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":36,"v1":37,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":35,"v1":37,"bCoef":0.1,"cMask":["wall"],"color":"FFFFFF"},{"v0":38,"v1":39,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":41,"v1":40,"bCoef":0.1,"curve":93.241608812827,"curveF":0.9449654112221421,"cMask":["wall"],"color":"FFFFFF"},{"v0":42,"v1":43,"bCoef":0.1,"cMask":["wall"],"color":"FFFFFF"},{"v0":45,"v1":44,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":44,"v1":45,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":47,"v1":46,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":46,"v1":47,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":50,"v1":49,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":49,"v1":50,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":52,"v1":51,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":51,"v1":52,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"FFFFFF"},{"v0":54,"v1":55,"bCoef":1.5,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":55,"v1":56,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":56,"v1":57,"bCoef":1.5,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":58,"v1":59,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":59,"v1":60,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":60,"v1":61,"bCoef":0.2,"vis":false,"cMask":["red","blue","ball"],"color":"FFFFFF"},{"v0":62,"v1":63,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":64,"v1":65,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":66,"v1":67,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":68,"v1":69,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":70,"v1":71,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":75,"v1":76,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":77,"v1":78,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":79,"v1":80,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":81,"v1":82,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":83,"v1":84,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":85,"v1":86,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":87,"v1":88,"bCoef":0.5,"vis":false,"cMask":["red","blue"],"color":"FFFFFF"},{"v0":90,"v1":91,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":92,"v1":93,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":94,"v1":95,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":96,"v1":97,"bCoef":1.15,"cMask":["ball"],"cGroup":["redKO","blueKO"],"color":"FFFFFF"},{"v0":98,"v1":99,"cMask":["ball"],"color":"FFFFFF"},{"v0":100,"v1":101,"cMask":["ball"],"color":"FFFFFF"},{"v0":102,"v1":103,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":104,"v1":105,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":106,"v1":107,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":108,"v1":109,"bCoef":0.1,"cMask":["wall"],"color":"F80000"},{"v0":110,"v1":111,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":112,"v1":113,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":114,"v1":115,"bCoef":2.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":118,"v1":119,"bCoef":0.1,"cMask":["wall"],"color":"F8"},{"v0":120,"v1":121,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":122,"v1":123,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":124,"v1":125,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":126,"v1":127,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":132,"v1":133,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"},{"v0":134,"v1":135,"bCoef":1.5,"vis":false,"cMask":["ball"],"color":"FFFFFF"}],"planes":[{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[-1,0],"dist":-765.1,"bCoef":0.1},{"normal":[0,-1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-765.1,"bCoef":0.1},{"normal":[0,1],"dist":-320,"cMask":["ball"]}],"goals":[],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-765.1,0],"radius":0.01,"bCoef":440,"invMass":0,"color":"0"},{"pos":[765.1,0],"radius":0.1,"bCoef":440,"invMass":0,"color":"0"},{"pos":[-700,90],"radius":5.5,"invMass":0},{"pos":[-700,-90],"radius":5.5,"invMass":0},{"pos":[700,90],"radius":5.5,"invMass":0},{"pos":[700,-90],"radius":5.5,"invMass":0},{"pos":[-318.7777786254883,-99.22222900390625],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-319.7777786254883,86.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[478.2222213745117,156.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[458.2222213745117,-173.22222900390625],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[138.22222137451172,116.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-316.7777786254883,-275.22222900390625],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]},{"pos":[-323.7777786254883,265.77777099609375],"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FEBA01","cGroup":["ball","kick","score"]}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","cameraFollow":"player","redSpawnPoints":[[-90,0]],"blueSpawnPoints":[[370,0]]}';

var x3oficial = '{"name": "Futsal x3 ๖໐k໐ hคrค๓.", "width": 620, "height": 270, "spawnDistance": 350, "bg": { "type": "hockey", "width": 0, "height": 0, "kickOffRadius": 80, "cornerRadius": 0 }, "vertexes": [ { "x": 550, "y": 240, "trait": "ballArea", "color": "FFFFFF" }, { "x": 550, "y": -240, "trait": "ballArea", "color": "FFFFFF" }, { "x": 0, "y": 270, "trait": "kickOffBarrier", "color": "FFFFFF" }, { "x": 0, "y": 80, "bCoef": 0.15, "trait": "kickOffBarrier", "color": "B6B6B8", "vis": true, "curve": 180 }, { "x": 0, "y": -80, "bCoef": 0.15, "trait": "kickOffBarrier", "color": "B6B6B8", "vis": true, "curve": 180 }, { "x": 0, "y": -270, "trait": "kickOffBarrier", "color": "FFFFFF" }, { "x": -550, "y": -80, "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "curve": 0, "color": "FFFFFF", "pos": [ -700, -80 ] }, { "x": -590, "y": -80, "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "curve": 0, "color": "FFFFFF", "pos": [ -700, -80 ] }, { "x": -590, "y": 80, "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "curve": 0, "color": "FFFFFF", "pos": [ -700, 80 ] }, { "x": -550, "y": 80, "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "curve": 0, "color": "FFFFFF", "pos": [ -700, 80 ] }, { "x": 550, "y": -80, "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "curve": 0, "color": "FFFFFF", "pos": [ 700, -80 ] }, { "x": 590, "y": -80, "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "curve": 0, "color": "FFFFFF", "pos": [ 700, -80 ] }, { "x": 590, "y": 80, "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "curve": 0, "color": "FFFFFF", "pos": [ 700, 80 ] }, { "x": 550, "y": 80, "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "curve": 0, "color": "FFFFFF", "pos": [ 700, 80 ] }, { "x": -550, "y": 80, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "FFFFFF", "pos": [ -700, 80 ] }, { "x": -550, "y": 240, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "FFFFFF" }, { "x": -550, "y": -80, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "FFFFFF", "pos": [ -700, -80 ] }, { "x": -550, "y": -240, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "FFFFFF" }, { "x": -550, "y": 240, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "color": "FFFFFF" }, { "x": 550, "y": 240, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "color": "FFFFFF" }, { "x": 550, "y": 80, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "pos": [ 700, 80 ], "color": "FFFFFF" }, { "x": 550, "y": 240, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "FFFFFF" }, { "x": 550, "y": -240, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "FFFFFF" }, { "x": 550, "y": -80, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "FFFFFF", "pos": [ 700, -80 ] }, { "x": 550, "y": -240, "bCoef": 0, "cMask": [ "ball" ], "trait": "ballArea", "color": "FFFFFF" }, { "x": 550, "y": -240, "bCoef": 0, "cMask": [ "ball" ], "trait": "ballArea", "color": "FFFFFF" }, { "x": -550, "y": -240, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "color": "FFFFFF" }, { "x": 550, "y": -240, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "color": "FFFFFF" }, { "x": 0, "y": -240, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "trait": "kickOffBarrier", "color": "B6B6B8" }, { "x": 0, "y": -80, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "trait": "kickOffBarrier", "color": "B6B6B8" }, { "x": 0, "y": 80, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "trait": "kickOffBarrier", "color": "B6B6B8" }, { "x": 0, "y": 240, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "trait": "kickOffBarrier", "color": "B6B6B8" }, { "x": 0, "y": -80, "bCoef": 0.1, "cMask": [ "red", "blue" ], "trait": "kickOffBarrier", "vis": true, "color": "FFFFFF" }, { "x": 0, "y": 80, "bCoef": 0.1, "cMask": [ "red", "blue" ], "trait": "kickOffBarrier", "vis": true, "color": "FFFFFF" }, { "x": 0, "y": 80, "trait": "kickOffBarrier", "color": "FFFFFF", "vis": true, "curve": -180 }, { "x": 0, "y": -80, "trait": "kickOffBarrier", "color": "FFFFFF", "vis": true, "curve": -180 }, { "x": 0, "y": 80, "trait": "kickOffBarrier", "color": "FFFFFF", "vis": true, "curve": 0 }, { "x": 0, "y": -80, "trait": "kickOffBarrier", "color": "FFFFFF", "vis": true, "curve": 0 }, { "x": -557.5, "y": 80, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ -700, 80 ], "color": "FFFFFF" }, { "x": -557.5, "y": 240, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "FFFFFF" }, { "x": -557.5, "y": -240, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "FFFFFF" }, { "x": -557.5, "y": -80, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ -700, -80 ], "color": "FFFFFF" }, { "x": 557.5, "y": -240, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "FFFFFF" }, { "x": 557.5, "y": -80, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ 700, -80 ], "color": "FFFFFF" }, { "x": 557.5, "y": 80, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ 700, 80 ], "color": "FFFFFF" }, { "x": 557.5, "y": 240, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "FFFFFF" }, { "x": 0, "y": -80, "bCoef": 0.1, "trait": "line", "color": "FFFFFF" }, { "x": 0, "y": 80, "bCoef": 0.1, "trait": "line", "color": "FFFFFF" }, { "x": -550, "y": -80, "bCoef": 0.1, "trait": "line", "color": "000000" }, { "x": -550, "y": 80, "bCoef": 0.1, "trait": "line", "color": "000000" }, { "x": 550, "y": -80, "bCoef": 0.1, "trait": "line", "color": "000000" }, { "x": 550, "y": 80, "bCoef": 0.1, "trait": "line", "color": "000000" }, { "x": -550, "y": 200, "bCoef": 0.1, "trait": "line", "color": "B6B6B8", "curve": -90 }, { "x": -390, "y": 70, "bCoef": 0.1, "trait": "line", "color": "B6B6B8", "curve": 0 }, { "x": -550, "y": 226, "bCoef": 0.1, "trait": "line", "curve": -90, "color": "B6B6B8" }, { "x": -536, "y": 240, "bCoef": 0.1, "trait": "line", "curve": -90, "color": "B6B6B8" }, { "x": -550, "y": -200, "bCoef": 0.1, "trait": "line", "color": "B6B6B8", "curve": 90 }, { "x": -390, "y": -70, "bCoef": 0.1, "trait": "line", "color": "B6B6B8", "curve": 0 }, { "x": -550, "y": -226, "bCoef": 0.1, "trait": "line", "curve": 90, "color": "B6B6B8" }, { "x": -536, "y": -240, "bCoef": 0.1, "trait": "line", "curve": 90, "color": "B6B6B8" }, { "x": 550, "y": -226, "bCoef": 0.1, "trait": "line", "curve": -90, "color": "B6B6B8" }, { "x": 536, "y": -240, "bCoef": 0.1, "trait": "line", "curve": -90, "color": "B6B6B8" }, { "x": 550, "y": 226, "bCoef": 0.1, "trait": "line", "curve": 90, "color": "B6B6B8" }, { "x": 536, "y": 240, "bCoef": 0.1, "trait": "line", "curve": 90, "color": "B6B6B8" }, { "x": 550, "y": 200, "bCoef": 0.1, "trait": "line", "color": "B6B6B8", "curve": 90 }, { "x": 390, "y": 70, "bCoef": 0.1, "trait": "line", "color": "B6B6B8", "curve": 90 }, { "x": 550, "y": -200, "bCoef": 0.1, "trait": "line", "color": "B6B6B8", "curve": -90 }, { "x": 390, "y": -70, "bCoef": 0.1, "trait": "line", "color": "B6B6B8", "curve": -90 }, { "x": 390, "y": 70, "bCoef": 0.1, "trait": "line", "color": "B6B6B8", "curve": 0 }, { "x": 390, "y": -70, "bCoef": 0.1, "trait": "line", "color": "B6B6B8", "curve": 0 }, { "x": -1.45801245971812, "y": 0.8397600124629785, "bCoef": 0.1, "trait": "line" }, { "x": -12.452413064111564, "y": 18.3845602085647, "bCoef": 0.1, "trait": "line" }, { "x": 7.644438920308002, "y": 1.3891430110696392, "bCoef": 0.1, "trait": "line" }, { "x": -6.081835256320025, "y": 25.19655234232056, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 29.797843514090754, "y": 2.3834231960484336, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "662703" }, { "x": -9.382879010441023, "y": -0.004202185396102065, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -6.0818352563199785, "y": 25.19655234232056, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -12.452413064111564, "y": 18.384560208564654, "bCoef": 0.1, "trait": "line" }, { "x": 11.4759874355846, "y": 6.819525486872884, "bCoef": 0.1, "trait": "line" }, { "x": 11.069956703281983, "y": 1.4302053682573792, "bCoef": 0.1, "trait": "line" }, { "x": 18.465605450139137, "y": 7.161400796422651, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 11.34088784738572, "y": 6.691391619489772, "bCoef": 0.1, "trait": "line" }, { "x": 18.202371994557012, "y": 7.168366517238327, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 17.796341262254597, "y": 1.7790463986226928, "bCoef": 0.1, "trait": "line" }, { "x": 22.013023347386532, "y": 11.809048626295654, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 18.039409523095735, "y": 5.987298827527103, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 24.31741403528829, "y": 19.255476343857815, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 21.874440898780033, "y": 11.549298031121403, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 30.98110710692018, "y": 17.235216273984996, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 24.185797307497204, "y": 19.2589592042657, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 30.98110710692018, "y": 17.235216273984996, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 28.181595251524712, "y": 10.987270548173127, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 28.316694839723663, "y": 11.115404415556359, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 29.92946024188174, "y": 2.379940335640584, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 29.93294310228952, "y": 2.5115570634315816, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 30.427332302077232, "y": -3.6918434447847757, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 39.408615535535844, "y": -2.7441274023972486, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 30.299198434694, "y": -3.556743856585916, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 42.5186569568106, "y": -4.670350241258941, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 39.408615535535844, "y": -2.7441274023972486, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 64.30507425048279, "y": -2.612687652728627, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 42.38704022901959, "y": -4.666867380851138, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 62.197919648537024, "y": 12.326176935403483, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 64.17345752269178, "y": -2.609204792320777, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 62.190953927721374, "y": 12.062943479821392, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": 29.797843514090754, "y": 2.3834231960484336, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": 30.43778088330066, "y": -3.2969932614117345, "bCoef": 0.1, "trait": "line", "color": "662703" }, { "x": 24.510813304591604, "y": -8.276799787317026, "bCoef": 0.1, "trait": "line" }, { "x": 24.645912892790367, "y": -8.148665919933794, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -6.980413241536834, "y": -8.760563427758752, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": 26.877163512127822, "y": -3.46618948598267, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": 1.5823717534001582, "y": -3.7187973822188223, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": 1.845605208982142, "y": -3.7257631030344758, "bCoef": 0.1, "trait": "line" }, { "x": 1.1492101055411017, "y": -5.1561328066964025, "bCoef": 0.1, "trait": "line" }, { "x": 1.4124435611233024, "y": -5.163098527512125, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -6.626625415351567, "y": -5.345494226008297, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -6.886376010525794, "y": -5.206911777401611, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -6.623142554943856, "y": -5.213877498217217, "bCoef": 0.1, "trait": "line" }, { "x": -7.319537658384757, "y": -6.644247201879214, "bCoef": 0.1, "trait": "line" }, { "x": -6.980413241536834, "y": -8.760563427758752, "bCoef": 0.1, "trait": "line" }, { "x": -14.836354551809297, "y": -11.977109586263678, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": 11.4759874355846, "y": 6.819525486872884, "bCoef": 0.1, "trait": "line" }, { "x": 11.069956703281983, "y": 1.4302053682573792, "bCoef": 0.1, "trait": "line" }, { "x": -9.112679834043293, "y": 0.25206554937031167, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -9.532642007977094, "y": -5.663721480409267, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -9.394059559370502, "y": -5.403970885235097, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -15.715145353746522, "y": -5.368410313450895, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -15.580045765547826, "y": -5.240276446067618, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -15.989559358258077, "y": -10.761213292474228, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -15.975627916626816, "y": -10.234746381310234, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -14.44150436843633, "y": -11.98755816748711, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -15.847494049243494, "y": -10.369845969509143, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -34.384555505328535, "y": -9.089062285260836, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -9.119645554858947, "y": -0.011167906211707379, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -12.371752285148283, "y": 1.523687609684853, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -12.240135557357112, "y": 1.5202047492769681, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -17.428913707731393, "y": -0.4498313394742217, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -17.293814119532463, "y": -0.3216974720910737, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -34.15468671841242, "y": -0.4023582510544985, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -34.01262140939798, "y": -0.010990928089342988, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -34.65475468172602, "y": -9.345330020027227, "bCoef": 0.1, "trait": "line", "color": "592203" }, { "x": -34.633857519279054, "y": -8.555629653281263, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -46.98841562959456, "y": -7.570157135991375, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -46.7251821740125, "y": -7.577122856806934, "bCoef": 0.1, "trait": "line" }, { "x": -49.533678675219186, "y": -4.210081733059917, "bCoef": 0.1, "trait": "line" }, { "x": -49.13882849184621, "y": -4.220530314283326, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -67.29845406659697, "y": -3.608278850213593, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -34.030035711437094, "y": -0.6690745670443086, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "592203" }, { "x": -63.113849692841384, "y": 0.23225431087428117, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -63.24546642063248, "y": 0.23573717128207217, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -62.98223296505044, "y": 0.22877145046643155, "bCoef": 0.1, "trait": "line" }, { "x": -63.67862806849132, "y": -1.20159825319559, "bCoef": 0.1, "trait": "line" }, { "x": -63.41539461290944, "y": -1.2085639740111715, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -63.40842889209384, "y": -0.9453305184291878, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -67.22879685844079, "y": -0.975944294393484, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -67.16683733880608, "y": -3.611761710621443, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -66.962080542451, "y": -0.8512932874181622, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -64.92935296635896, "y": -3.6709703375543237, "bCoef": 0.1, "trait": "line" }, { "x": -65.22814699372522, "y": -9.985090411114722, "bCoef": 0.1, "trait": "line" }, { "x": -63.40842889209384, "y": -0.9453305184291878, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -67.22879685844079, "y": -0.975944294393484, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -61.9342459385423, "y": -9.940545193519155, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -65.49138044930727, "y": -9.97812469029914, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -58.88543206919629, "y": -4.226032099686935, "bCoef": 0.1, "trait": "line" }, { "x": -62.06586266633333, "y": -9.937062333111305, "bCoef": 0.1, "trait": "line" }, { "x": -45.97624093656963, "y": -47.84123184874614, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -40.530244839169804, "y": -36.94923965394646, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -40.984077847286414, "y": -36.94923965394648, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -41.4379108554031, "y": -26.73799697132178, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -41.66482735946144, "y": -26.73799697132179, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -35.31116524582826, "y": -30.141744532196682, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -41.4379108554031, "y": -29.460995020021702, "bCoef": 0.1, "trait": "line", "curve": -171.40522667214597, "color": "ffffff" }, { "x": -36.21883126206156, "y": -31.276327052488305, "bCoef": 0.1, "trait": "line", "curve": -171.40522667214597, "color": "ffffff" }, { "x": -19.427009961745412, "y": -35.587740629596546, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -19.427009961745426, "y": -27.19182997943842, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -18.746260449570432, "y": -36.722323149888155, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -19.427009961745426, "y": -26.73799697132179, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": 6.8953045090204395, "y": -47.160482336571185, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 6.8953045090204395, "y": -21.745833882038625, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 9.618302557720305, "y": -36.26849014177146, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 17.78729670382008, "y": -21.74583388203861, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 17.56038019976171, "y": -41.033736726996366, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 6.8953045090204395, "y": -34.226241605246564, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 25.502457841803206, "y": -34.680074613363246, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 25.50245784180316, "y": -26.284163963205128, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 26.18320735397814, "y": -35.814657133654855, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": 25.50245784180316, "y": -25.83033095508849, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -41.774496252386015, "y": 27.525696265922303, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -41.774496252386015, "y": 51.99420188547997, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -41.69237215920161, "y": 36.208583865022504, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -30.614225630745246, "y": 40.79070527854724, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -30.695127172858825, "y": 40.133254184004954, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -30.695127172858825, "y": 51.99420188547997, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -21.252846443522138, "y": 39.073937937314035, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -9.219581890968637, "y": 41.55479969782498, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -9.300483433082217, "y": 40.897348603282694, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -9.300483433082217, "y": 51.99420188547997, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -21.02791045816546, "y": 38.548760649862146, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -21.793227428514015, "y": 46.5693069501367, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -21.90804135116484, "y": 45.672938723768546, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -21.908041351164858, "y": 51.99420188547997, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -17.592322871910973, "y": 45.029118426043794, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -21.962448710226923, "y": 51.16840852102138, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -18.42582414267087, "y": 45.65740358246262, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -17.311009263477033, "y": 46.71499178768384, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -1.6595392403048495, "y": 35.73971127315797, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -1.6595392403048495, "y": 51.99420188547997, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -1.7684387519398563, "y": 39.4559851469529, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 4.916164865669481, "y": 37.7343276014363, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 10.45707195650395, "y": 39.64700875177234, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 22.490336509057453, "y": 42.12787051228329, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 22.40943496694392, "y": 41.47041941774099, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 22.40943496694392, "y": 51.99420188547997, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 10.682007941860597, "y": 39.121831464320444, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 9.916690971512073, "y": 47.14237776459502, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 9.801877048861249, "y": 46.24600953822685, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 9.801877048861202, "y": 51.99420188547997, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 14.11759552811512, "y": 45.60218924050209, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 9.747469689799168, "y": 51.16840852102138, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 13.284094257355221, "y": 46.23047439692093, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 14.398909136549088, "y": 47.288062602142155, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 42.53783703137027, "y": 42.33209649164647, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 42.771750321137134, "y": 52.40086278648939, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 42.53783703137027, "y": 42.63030041195318, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 35.530044904162494, "y": 45.304630879425254, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 28.47315191103717, "y": 42.21588081588387, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 29.285769215987013, "y": 51.903834046363166, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 28.46935491061038, "y": 42.51406056179907, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 35.7264143751242, "y": 45.08491335881982, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 29.712124271826575, "y": 51.97984612922619, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 30.826939151020387, "y": 53.0374343344474, "bCoef": 0.1, "trait": "line", "color": "ffffff" } ], "segments": [ { "v0": 6, "v1": 7, "curve": 0, "color": "FFFFFF", "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "pos": [ -700, -80 ], "y": -80 }, { "v0": 7, "v1": 8, "color": "FFFFFF", "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "x": -590 }, { "v0": 8, "v1": 9, "curve": 0, "color": "FFFFFF", "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "pos": [ -700, 80 ], "y": 80 }, { "v0": 10, "v1": 11, "curve": 0, "color": "FFFFFF", "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "pos": [ 700, -80 ], "y": -80 }, { "v0": 11, "v1": 12, "color": "FFFFFF", "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "x": 590 }, { "v0": 12, "v1": 13, "curve": 0, "color": "FFFFFF", "cMask": [ "red", "blue", "ball" ], "trait": "goalNet", "pos": [ 700, 80 ], "y": 80 }, { "v0": 2, "v1": 3, "color": "FFFFFF", "trait": "kickOffBarrier" }, { "v0": 3, "v1": 4, "curve": 180, "vis": true, "color": "B6B6B8", "bCoef": 0.15, "cGroup": [ "blueKO" ], "trait": "kickOffBarrier" }, { "v0": 3, "v1": 4, "curve": -180, "vis": true, "color": "B6B6B8", "bCoef": 0.15, "cGroup": [ "redKO" ], "trait": "kickOffBarrier" }, { "v0": 4, "v1": 5, "color": "FFFFFF", "trait": "kickOffBarrier" }, { "v0": 14, "v1": 15, "vis": true, "color": "FFFFFF", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": -550 }, { "v0": 16, "v1": 17, "vis": true, "color": "FFFFFF", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": -550 }, { "v0": 18, "v1": 19, "vis": true, "color": "FFFFFF", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "y": 240 }, { "v0": 20, "v1": 21, "vis": true, "color": "FFFFFF", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": 550 }, { "v0": 22, "v1": 23, "vis": true, "color": "FFFFFF", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": 550 }, { "v0": 24, "v1": 25, "vis": true, "color": "FFFFFF", "bCoef": 0, "cMask": [ "ball" ], "trait": "ballArea", "x": 550, "y": -240 }, { "v0": 26, "v1": 27, "curve": 0, "vis": true, "color": "FFFFFF", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "y": -240 }, { "v0": 28, "v1": 29, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "trait": "kickOffBarrier" }, { "v0": 30, "v1": 31, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "trait": "kickOffBarrier" }, { "v0": 38, "v1": 39, "curve": 0, "vis": false, "color": "FFFFFF", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -557.5 }, { "v0": 40, "v1": 41, "curve": 0, "vis": false, "color": "FFFFFF", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -557.5 }, { "v0": 42, "v1": 43, "curve": 0, "vis": false, "color": "FFFFFF", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 557.5 }, { "v0": 44, "v1": 45, "curve": 0, "vis": false, "color": "FFFFFF", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 557.5 }, { "v0": 48, "v1": 49, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "x": -550 }, { "v0": 50, "v1": 51, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "x": 550 }, { "v0": 52, "v1": 53, "curve": -90, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "trait": "line" }, { "v0": 55, "v1": 54, "curve": -90, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "trait": "line" }, { "v0": 56, "v1": 57, "curve": 90, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "trait": "line" }, { "v0": 53, "v1": 57, "curve": 0, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "trait": "line" }, { "v0": 59, "v1": 58, "curve": 90, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "trait": "line" }, { "v0": 61, "v1": 60, "curve": -90, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "trait": "line" }, { "v0": 63, "v1": 62, "curve": 90, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "trait": "line" }, { "v0": 64, "v1": 65, "curve": 90, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "trait": "line" }, { "v0": 66, "v1": 67, "curve": -90, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "trait": "line" }, { "v0": 68, "v1": 69, "curve": 0, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "trait": "line", "x": 390 }, { "v0": 70, "v1": 71, "curve": 63.48552230683781, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 72, "v1": 73, "curve": 60.7249471482441, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 74, "v1": 75, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 76, "v1": 77, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 78, "v1": 79, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 80, "v1": 81, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 82, "v1": 83, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 84, "v1": 85, "curve": -40.44971886234031, "vis": true, "color": "662703", "bCoef": 0.1, "trait": "line" }, { "v0": 86, "v1": 87, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 88, "v1": 89, "curve": 32.32328168423968, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 90, "v1": 91, "curve": -49.38996528079284, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 92, "v1": 93, "curve": 81.8555255799868, "vis": true, "color": "662703", "bCoef": 0.1, "trait": "line" }, { "v0": 94, "v1": 95, "vis": true, "color": "662703", "bCoef": 0.1, "trait": "line" }, { "v0": 96, "v1": 97, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 98, "v1": 99, "curve": 89.47193203747327, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 100, "v1": 101, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 102, "v1": 103, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 104, "v1": 105, "curve": 0, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 106, "v1": 107, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 108, "v1": 109, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 110, "v1": 111, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 112, "v1": 113, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 114, "v1": 115, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 117, "v1": 118, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 119, "v1": 120, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 121, "v1": 122, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 123, "v1": 124, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 125, "v1": 126, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 127, "v1": 128, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 129, "v1": 130, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 131, "v1": 132, "curve": 0, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 133, "v1": 134, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 135, "v1": 136, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 137, "v1": 138, "curve": 0, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 139, "v1": 140, "vis": true, "color": "592203", "bCoef": 0.1, "trait": "line" }, { "v0": 141, "v1": 142, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 143, "v1": 144, "curve": 89.47193203747327, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 145, "v1": 146, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 147, "v1": 148, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 150, "v1": 151, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 153, "v1": 154, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 155, "v1": 156, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 157, "v1": 158, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 159, "v1": 160, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 161, "v1": 162, "curve": 0, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 163, "v1": 164, "vis": true, "bCoef": 0.1, "trait": "line" }, { "v0": 165, "v1": 166, "curve": 61.927513064142914, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 167, "v1": 168, "curve": 284.4867219195378, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 169, "v1": 170, "curve": 171.40522667214597, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 171, "v1": 172, "curve": -171.40522667214597, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 173, "v1": 174, "curve": 306.21081833524164, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 175, "v1": 176, "curve": -45.13401815574261, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 177, "v1": 178, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 179, "v1": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 181, "v1": 182, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 183, "v1": 184, "curve": 306.21081833524164, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 185, "v1": 186, "curve": -45.13401815574261, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 187, "v1": 188, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 189, "v1": 190, "curve": 141.0269513033983, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 191, "v1": 192, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 193, "v1": 194, "curve": 154.41343651122733, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 195, "v1": 196, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 197, "v1": 198, "curve": -20.22236524954136, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 199, "v1": 200, "curve": 9.790287355018622, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 201, "v1": 202, "curve": 9.790287355018622, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 203, "v1": 204, "curve": 306.21081833524164, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 205, "v1": 206, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 207, "v1": 208, "curve": 106.69560446056494, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 209, "v1": 210, "curve": 154.41343651122733, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 211, "v1": 212, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 213, "v1": 214, "curve": -20.22236524954136, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 215, "v1": 216, "curve": 9.790287355018622, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 217, "v1": 218, "curve": 9.790287355018622, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 219, "v1": 220, "curve": 306.21081833524164, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 221, "v1": 222, "curve": 46.78217343698191, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 223, "v1": 224, "curve": -168.08032177858712, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 225, "v1": 226, "curve": -45.97977672599232, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 227, "v1": 228, "curve": 168.30364775676796, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 229, "v1": 230, "curve": 306.21081833524164, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" } ], "goals": [ { "p0": [ -557.5, -80 ], "p1": [ -557.5, 80 ], "team": "red", "color": "FFFFFF" }, { "p0": [ 557.5, 80 ], "p1": [ 557.5, -80 ], "team": "blue", "color": "FFFFFF" } ], "discs": [ { "radius": 5, "pos": [ -550, 80 ], "color": "592203", "trait": "goalPost", "y": 80 }, { "radius": 5, "pos": [ -550, -80 ], "color": "592203", "trait": "goalPost", "y": -80, "x": -560 }, { "radius": 5, "pos": [ 550, 80 ], "color": "592203", "trait": "goalPost", "y": 80 }, { "radius": 5, "pos": [ 550, -80 ], "color": "592203", "trait": "goalPost", "y": -80 }, { "radius": 3, "invMass": 0, "pos": [ -550, 240 ], "color": "EFB810", "bCoef": 0.1, "trait": "line" }, { "radius": 3, "invMass": 0, "pos": [ -550, -240 ], "color": "EFB810", "bCoef": 0.1, "trait": "line" }, { "radius": 3, "invMass": 0, "pos": [ 550, -240 ], "color": "EFB810", "bCoef": 0.1, "trait": "line" }, { "radius": 3, "invMass": 0, "pos": [ 550, 240 ], "color": "EFB810", "bCoef": 0.1, "trait": "line" } ], "planes": [ { "normal": [ 0, 1 ], "dist": -240, "bCoef": 1, "trait": "ballArea", "vis": false, "curve": 0 }, { "normal": [ 0, -1 ], "dist": -240, "bCoef": 1, "trait": "ballArea" }, { "normal": [ 0, 1 ], "dist": -270, "bCoef": 0.1 }, { "normal": [ 0, -1 ], "dist": -270, "bCoef": 0.1 }, { "normal": [ 1, 0 ], "dist": -620, "bCoef": 0.1 }, { "normal": [ -1, 0 ], "dist": -620, "bCoef": 0.1 }, { "normal": [ 1, 0 ], "dist": -620, "bCoef": 0.1, "trait": "ballArea", "vis": false, "curve": 0 }, { "normal": [ -1, 0 ], "dist": -620, "bCoef": 0.1, "trait": "ballArea", "vis": false, "curve": 0 } ], "traits": { "ballArea": { "vis": false, "bCoef": 1, "cMask": [ "ball" ] }, "goalPost": { "radius": 8, "invMass": 0, "bCoef": 0.5 }, "goalNet": { "vis": true, "bCoef": 0.1, "cMask": [ "ball" ] }, "line": { "vis": true, "bCoef": 0.1, "cMask": [ "" ] }, "kickOffBarrier": { "vis": false, "bCoef": 0.1, "cGroup": [ "redKO", "blueKO" ], "cMask": [ "red", "blue" ] } }, "playerPhysics": { "bCoef": 0, "acceleration": 0.11, "kickingAcceleration": 0.083, "kickStrength": 5 }, "ballPhysics": { "radius": 6.25, "bCoef": 0.4, "invMass": 1.5, "damping": 0.99, "color": "FFFFFF" }, "joints": [], "redSpawnPoints": [], "blueSpawnPoints": [], "canBeStored": false }';