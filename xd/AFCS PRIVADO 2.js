// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = " 🪐 | 𝚂𝚊𝚕𝚊 2 𝙰𝙵𝙲𝚂 | 🪐";
const botName = "| 𝙰𝙵𝙲𝚂 𝙰𝚛𝚋𝚒𝚝𝚛𝚘 |";
const maxPlayers = 25;
const roomPublic = false;
const roomPassword = "2112";
const geo = [{"code": "cl", "lat": -33.456, "lon": -70.648}];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, password: roomPassword, public: roomPublic, playerName: botName, geo: geo[0] });

var roomWebhook = 'https://discord.com/api/webhooks/1117242525107900416/yVtXIgQFdQEYGGVW_a9sX4fNRozk0S2Ei1-Jjhmrr7Wl8hgwQm0zU30wRApaNFkPIokN'; // this webhook is used to send the details of the room (chat, join, leave) ; it should be in a private discord channel
const scoreLimitClassic = 4;
const scoreLimitBig = 0;
const timeLimitClassic = 3;
const timeLimitBig = 14;

const Uniform = { COUNTRY: 0, CLUBLA: 1 };

var isTimeAddedShown = false;
var isTimeAddedShowndos = false;
var isTimeAddedShowntres = false;
var isTimeAddedShowncuatro = false;
var isTimeAddedShowncinco = false;
var isTimeAddedShownseis = false;
var isTimeAddedShownquince = false;
var isTimeAddedShownsiete = false;
room.setTeamsLock(true);

var adminPassword = "0520"
console.log("adminPassword : " + adminPassword);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
var aloneMap = '{"name":"Futsal No Goals GLH","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-171,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"bCoef":1,"trait":"ballArea","x":368,"y":171},{"bCoef":1,"trait":"ballArea","x":368,"y":-171},{"bCoef":0,"trait":"line","x":0,"y":171},{"bCoef":0,"trait":"line","x":0,"y":-171},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"line"},{"x":0,"y":-65,"trait":"line"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":369,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":369,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":-370,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":-370,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"vis":false},{"x":371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0,"_selected":"segment"},{"x":371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0,"_selected":"segment"},{"x":371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"line","curve":180,"cGroup":["blueKO"]},{"v0":8,"v1":9,"trait":"line","curve":-180,"cGroup":["redKO"]},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":10,"y":171},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":11,"y":-171},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":12,"v1":13},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":9,"v1":8},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":15,"v1":14},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":16,"v1":17,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":18,"v1":19,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":20,"v1":21,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":22,"v1":23,"cMask":["ball"],"x":330},{"v0":26,"v1":27,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":27,"v1":28,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":31,"v1":32,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":34,"v1":35,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":36,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":38,"v1":39,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":35,"v1":39,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":41,"v1":40,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":46,"v1":47,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":53,"v1":52,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":52,"v1":53,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":55,"v1":54,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":60,"v1":61,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":63,"v1":62,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":68,"v1":69,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":71,"v1":70,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":76,"v1":77,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":79,"v1":78,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":109,"v1":108,"x":369},{"curve":0,"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":111,"v1":110,"x":-370},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":112,"v1":113,"cMask":["ball"],"x":371,"_selected":true},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":114,"v1":115,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":116,"v1":117,"cMask":["ball"],"x":-371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":118,"v1":119,"cMask":["ball"],"x":-371}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FFCC00","bCoef":0.4,"invMass":1.5,"damping":0.99}}'
var classicMap = '{"name":"Futsal x1 and x2 ; by Bazinga! & GLH","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-171,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"line"},{"bCoef":1,"trait":"ballArea","x":368,"y":171},{"bCoef":1,"trait":"ballArea","x":368,"y":-171},{"bCoef":0,"trait":"line","x":0,"y":171},{"bCoef":0,"trait":"line","x":0,"y":-171},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":199,"trait":"kickOffBarrier"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":0,"y":-199,"trait":"kickOffBarrier"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":10,"y":171},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":11,"y":-171},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":12,"v1":13},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":9,"v1":8},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":15,"v1":14},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":16,"v1":17,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":18,"v1":19,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":20,"v1":21,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":22,"v1":23,"cMask":["ball"],"x":330},{"v0":24,"v1":25,"trait":"kickOffBarrier"},{"v0":26,"v1":27,"trait":"kickOffBarrier"},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":29,"v1":30,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":33,"v1":34,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":34,"v1":35,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":36,"v1":37,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":39,"v1":38,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":40,"v1":41,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":41,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":47,"v1":46,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":55,"v1":54,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":60,"v1":61,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":63,"v1":62,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":68,"v1":69,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":71,"v1":70,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":76,"v1":77,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":79,"v1":78,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":85,"v1":84,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":110,"v1":111,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":112,"v1":113,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":114,"v1":115,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":116,"v1":117,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":118,"v1":119,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":120,"v1":121,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":122,"v1":123,"cMask":["ball"],"x":-371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":124,"v1":125,"cMask":["ball"],"x":-371}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FFCC00","bCoef":0.4,"invMass":1.5,"damping":0.99}}'; // Insert your map for 1v1 and 2v2 here. To get minimum file size, here are the instructions : 1. Download the map 2. Go to https://cssminifier.com 3. Paste the result
var bigMap = '{"name": "Futsal x4 by AFCS", "canBeStored": false, "width": 765, "height": 350, "bg": { "type": "hockey", "height": 0, "width": 0, "cornerRadius": 0, "kickOffRadius": 0 }, "vertexes": [ { "x": 0, "y": -350, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "_selected": true }, { "x": 0, "y": -320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "_selected": true }, { "x": -700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ], "_selected": true }, { "x": -735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ], "_selected": true }, { "x": -735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ], "_selected": true }, { "x": -700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ], "_selected": true }, { "x": 700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ], "_selected": true }, { "x": 735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ], "_selected": true }, { "x": 735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ], "_selected": true }, { "x": 700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ], "_selected": true }, { "x": -700, "y": 90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "pos": [ -700, 80 ], "_selected": true }, { "x": -700, "y": 320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "_selected": true }, { "x": -700, "y": -90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "pos": [ -700, -80 ], "_selected": true }, { "x": -700, "y": -320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "_selected": true }, { "x": -700, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "_selected": true }, { "x": 700, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "_selected": true }, { "x": 700, "y": 90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "pos": [ 700, 80 ], "color": "ffffff", "_selected": true }, { "x": 700, "y": 320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "_selected": true }, { "x": 700, "y": -320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "_selected": true }, { "x": 700, "y": -90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "pos": [ 700, -90 ], "_selected": true }, { "x": -700, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "color": "ffffff", "_selected": true }, { "x": 700, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ -700, 80 ], "color": "ffffff", "_selected": true }, { "x": -706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff", "_selected": true }, { "x": -706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff", "_selected": true }, { "x": -706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ -700, -80 ], "color": "ffffff", "_selected": true }, { "x": 706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff", "_selected": true }, { "x": 706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ 700, -90 ], "color": "ffffff", "_selected": true }, { "x": 706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ 700, 80 ], "color": "ffffff", "_selected": true }, { "x": 706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff", "_selected": true }, { "x": -700, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "E30000", "_selected": true }, { "x": -700, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "E30000", "_selected": true }, { "x": 700, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "0038BA", "pos": [ 700, -90 ], "_selected": true }, { "x": 700, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "0038BA", "_selected": true }, { "x": -700, "y": 280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827, "_selected": true }, { "x": -480, "y": 60, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827, "_selected": true }, { "x": -700, "y": -280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827, "_selected": true }, { "x": -480, "y": -60, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827, "_selected": true }, { "x": 700, "y": 280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827, "_selected": true }, { "x": 480, "y": 70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827, "_selected": true }, { "x": 700, "y": -280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827, "_selected": true }, { "x": 480, "y": -70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827, "_selected": true }, { "x": 480, "y": 70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 0, "_selected": true }, { "x": 480, "y": -70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 0, "_selected": true }, { "x": 480, "y": 1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff", "_selected": true }, { "x": 480, "y": -1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff", "_selected": true }, { "x": 480, "y": 3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff", "_selected": true }, { "x": 480, "y": -3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff", "_selected": true }, { "x": 480, "y": 2, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff", "_selected": true }, { "x": -480, "y": 1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff", "_selected": true }, { "x": -480, "y": -1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff", "_selected": true }, { "x": -480, "y": 3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff", "_selected": true }, { "x": -480, "y": -3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff", "_selected": true }, { "x": -480, "y": 2, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff", "_selected": true }, { "x": -700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ], "vis": false, "_selected": true }, { "x": -735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ], "vis": false, "_selected": true }, { "x": -735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ], "vis": false, "_selected": true }, { "x": -700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ], "vis": false, "_selected": true }, { "x": 700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ], "vis": false, "_selected": true }, { "x": 735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ], "vis": false, "_selected": true }, { "x": 735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ], "vis": false, "_selected": true }, { "x": 700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ], "vis": false, "_selected": true }, { "x": 0, "y": 320, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "_selected": true }, { "x": 0, "y": 350, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "_selected": true }, { "x": 0, "y": 90, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "696969", "_selected": true }, { "x": 0, "y": -90, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "696969", "_selected": true }, { "x": 0, "y": 90, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "696969", "_selected": true }, { "x": 0, "y": -90, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "696969", "_selected": true }, { "x": 0, "y": -320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ffffff", "_selected": true }, { "x": 0, "y": 90, "cMask": [], "color": "ffffff", "_selected": true }, { "x": 0, "y": 90, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ffffff", "_selected": true }, { "x": 0, "y": 320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ffffff", "_selected": true }, { "x": 0, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": -180, "_selected": true }, { "x": 0, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": -180, "_selected": true }, { "x": 0, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": 180, "_selected": true }, { "x": 0, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": 180, "_selected": true }, { "x": 0, "y": 91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": -180, "_selected": true }, { "x": 0, "y": -91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": -180, "_selected": true }, { "x": 0, "y": 91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": 180, "_selected": true }, { "x": 0, "y": -91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": 180, "_selected": true }, { "x": 0, "y": -91, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "B6B6B8", "_selected": true }, { "x": 0, "y": -320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "B6B6B8", "_selected": true }, { "x": 0, "y": 91, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "B6B6B8", "_selected": true }, { "x": 0, "y": 320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "B6B6B8", "_selected": true }, { "x": -706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ -700, 80 ], "color": "ffffff", "_selected": true }, { "x": -706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff", "_selected": true }, { "x": -706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff", "_selected": true }, { "x": -706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ -700, -80 ], "color": "ffffff", "_selected": true }, { "x": 706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff", "_selected": true }, { "x": 706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ 700, -90 ], "color": "ffffff", "_selected": true }, { "x": 706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ 700, 80 ], "color": "ffffff", "_selected": true }, { "x": 706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff", "_selected": true }, { "x": 735, "y": -350, "bCoef": 0.5, "cMask": [ "red", "blue" ], "_selected": true }, { "x": 24.070488940386454, "y": -24.96796599980672, "bCoef": 0.1, "trait": "line", "color": "000000", "curve": -84.07659521498204, "_selected": true }, { "x": 14.959772434195983, "y": -32.93984294272341, "bCoef": 0.1, "trait": "line", "color": "000000", "curve": -84.07659521498204, "_selected": true }, { "x": 3.5713768014578373, "y": -22.69028687325915, "bCoef": 0.1, "trait": "line", "color": "000000", "curve": -91.88795850309086, "_selected": true }, { "x": 3.5713768014578373, "y": -13.57957036706863, "bCoef": 0.1, "trait": "line", "color": "000000", "_selected": true }, { "x": 14.959772434195983, "y": -4.4688538608780775, "bCoef": 0.1, "trait": "line", "color": "000000", "_selected": true }, { "x": 24.32356343348546, "y": -14.97149311209777, "bCoef": 0.1, "trait": "line", "color": "000000", "_selected": true }, { "x": -21.48309359056608, "y": -32.93984294272341, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "000000", "_selected": true }, { "x": -21.48309359056608, "y": -4.4688538608780775, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "000000", "_selected": true }, { "x": -21.609632285224983, "y": -19.27376818343763, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": -7.817018831280404, "y": -19.27376818343763, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": -11.233537521101846, "y": -21.551447309985278, "bCoef": 0.1, "trait": "line", "color": "000000", "_selected": true }, { "x": -21.48309359056608, "y": -32.34385023794348, "bCoef": 0.1, "trait": "line", "_selected": true }, { "x": -4.400500141458817, "y": -32.34385023794348, "bCoef": 0.1, "trait": "line", "_selected": true }, { "x": -51.62928598564925, "y": -4.4688538608780775, "bCoef": 0.1, "trait": "line", "curve": 0, "_selected": true }, { "x": -40.537195440462945, "y": -32.68135594028492, "bCoef": 0.1, "trait": "line", "curve": 0, "_selected": true }, { "x": -28.93535952969485, "y": -4.4688538608780775, "bCoef": 0.1, "trait": "line", "curve": 0, "_selected": true }, { "x": -40.537195440462945, "y": -32.93984294272341, "bCoef": 0.1, "trait": "line", "curve": 0, "_selected": true }, { "x": 34.510789737705494, "y": -24.82437387950653, "bCoef": 0.1, "trait": "line", "_selected": true }, { "x": 54.85814828282451, "y": -25.163734354119455, "bCoef": 0.1, "trait": "line", "_selected": true }, { "x": -46.11313751353949, "y": -19.015281180999168, "bCoef": 0.1, "trait": "line", "color": "000000", "_selected": true }, { "x": -34.59820318614244, "y": -19.015281180999168, "bCoef": 0.1, "trait": "line", "color": "000000", "_selected": true }, { "x": 34.547926591720895, "y": -25.028069426344793, "bCoef": 0.1, "trait": "line", "_selected": true }, { "x": 43.37429824993607, "y": -17.835621177159407, "bCoef": 0.1, "trait": "line", "_selected": true }, { "x": 52.019100932460205, "y": -16.505651533694188, "bCoef": 0.1, "trait": "line", "_selected": true }, { "x": 54.8690358827429, "y": -11.471522732754329, "bCoef": 0.1, "trait": "line", "_selected": true }, { "x": 43.37429824993611, "y": -17.835621177159407, "bCoef": 0.1, "trait": "line", "curve": 95.8158139144815, "_selected": true }, { "x": 52.20909659581232, "y": -16.505651533694188, "bCoef": 0.1, "trait": "line", "curve": 95.8158139144815, "_selected": true }, { "x": 54.8690358827429, "y": -11.661518396106475, "bCoef": 0.1, "trait": "line", "_selected": true }, { "x": 34.510789737705494, "y": -13.975446408679776, "bCoef": 0.1, "trait": "line", "curve": -153.8158139144815, "color": "E30000", "_selected": true }, { "x": 54.85814828282451, "y": -11.641587458461032, "bCoef": 0.1, "trait": "line", "curve": -153.8158139144815, "_selected": true }, { "x": 20.667237504478205, "y": -26.824284964847628, "bCoef": 0.1, "trait": "line", "color": "0038BA", "curve": -84.07659521498204, "_selected": true }, { "x": 11.556520998287642, "y": -34.796161907764294, "bCoef": 0.1, "trait": "line", "color": "00B9FF", "curve": -84.07659521498204, "_selected": true }, { "x": 0.1681253655495425, "y": -24.54660583829994, "bCoef": 0.1, "trait": "line", "color": "ffffff", "curve": -91.88795850309086, "_selected": true }, { "x": 0.1681253655495425, "y": -15.435889332109465, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": 11.556520998287642, "y": -6.325172825919017, "bCoef": 0.1, "trait": "line", "color": "00B9FF", "_selected": true }, { "x": 20.920311997577215, "y": -16.827812077138674, "bCoef": 0.1, "trait": "line", "color": "E30000", "_selected": true }, { "x": -24.887664311111767, "y": -14.129768918591061, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "00B9FF", "_selected": true }, { "x": -24.886345026474377, "y": -6.325172825919017, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "00B9FF", "_selected": true }, { "x": -20.351108885589014, "y": -21.130087148478562, "bCoef": 0.1, "trait": "line", "color": "FFC300", "_selected": true }, { "x": -11.220270267188695, "y": -21.130087148478562, "bCoef": 0.1, "trait": "line", "color": "FFC300", "_selected": true }, { "x": -14.63678895701, "y": -23.40776627502618, "bCoef": 0.1, "trait": "line", "color": "FFDD00", "_selected": true }, { "x": -24.886345026474377, "y": -34.20016920298432, "bCoef": 0.1, "trait": "line", "color": "00B9FF", "_selected": true }, { "x": -7.803751577367111, "y": -34.20016920298432, "bCoef": 0.1, "trait": "line", "color": "00B9FF", "_selected": true }, { "x": -55.03253742155759, "y": -6.325172825919017, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "0038BA", "_selected": true }, { "x": -43.9404468763712, "y": -34.5376749053258, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "0038BA", "_selected": true }, { "x": -32.3386109656031, "y": -6.325172825919017, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -43.9404468763712, "y": -34.796161907764294, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "0038BA", "_selected": true }, { "x": 31.107538301797238, "y": -26.68069284454737, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": 51.45489684691627, "y": -27.02005331916036, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": -49.51638894944774, "y": -20.87160014604, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": -38.00145462205069, "y": -20.87160014604, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": 31.144675155812646, "y": -26.8843883913857, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": 39.97104681402777, "y": -19.691940142200313, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": 48.61584949655192, "y": -18.361970498735047, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": 51.4657844468346, "y": -13.327841697795188, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": 39.97104681402782, "y": -19.691940142200313, "bCoef": 0.1, "trait": "line", "curve": 95.8158139144815, "color": "ffffff", "_selected": true }, { "x": 48.805845159904074, "y": -18.361970498735047, "bCoef": 0.1, "trait": "line", "curve": 95.8158139144815, "color": "ffffff", "_selected": true }, { "x": 51.46578444683451, "y": -13.517837361147404, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": 31.107538301797238, "y": -15.83176537372069, "bCoef": 0.1, "trait": "line", "curve": -153.8158139144815, "color": "E30000", "_selected": true }, { "x": 51.45489684691627, "y": -13.497906423501888, "bCoef": 0.1, "trait": "line", "curve": -153.8158139144815, "color": "E30000", "_selected": true }, { "x": -55.03253742155759, "y": -6.325172825919017, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "0038BA", "_selected": true }, { "x": -43.9404468763712, "y": -34.5376749053258, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "0038BA", "_selected": true }, { "x": -33.730842613890964, "y": -9.840385886647775, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -35.396048661905404, "y": -13.931671482793462, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -24.887664311111767, "y": -27.501920605557686, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -24.886345026474377, "y": -13.847008149837748, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -24.887973739400472, "y": -35.681620966147136, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "00B9FF", "_selected": true }, { "x": -24.886345026474377, "y": -26.049096564194826, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "00B9FF", "_selected": true }, { "x": -25.40136495742856, "y": -21.130087148478562, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": -19.766857465686293, "y": -21.130087148478562, "bCoef": 0.1, "trait": "line", "color": "ffffff", "_selected": true }, { "x": -37.01926773521786, "y": -17.777963765712737, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -38.68447378323235, "y": -21.869249361858415, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -40.421086826245705, "y": -25.942329584179603, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -42.08629287426023, "y": -30.033615180325288, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -53.34799937215165, "y": -10.520749704853335, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -51.72478029883904, "y": -14.838823240400904, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -50.2863621902265, "y": -18.231539644516474, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -48.66314311691403, "y": -22.549613180064043, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -47.224725008301434, "y": -26.055723553880558, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "FFC300", "_selected": true }, { "x": -45.601505934988964, "y": -30.37379708942808, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "FFC300", "_selected": true }, { "x": -4.554127144058015, "y": 53.241282672421505, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DEEAF7", "curve": 0, "_selected": true }, { "x": -7.673358291056729, "y": 60.54345097903996, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DEEAF7", "curve": 0, "_selected": true }, { "x": 3.762882545252637, "y": 39.96100344037773, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -5, "color": "C0CAD6", "_selected": true }, { "x": -5.658619776953202, "y": 48.82243441056003, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -5, "color": "C0CAD6", "_selected": true }, { "x": 5.969320565205777, "y": 43.27558066640772, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 9, "color": "969EA8", "_selected": true }, { "x": -1.0600957460187885, "y": 49.92953912385632, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 9, "color": "969EA8", "_selected": true }, { "x": 7.3818328254961045, "y": 60.54345097903996, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -30, "color": "969EA8", "_selected": true }, { "x": -0.011341383525405035, "y": 63.0120740957033, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -30, "color": "969EA8", "_selected": true }, { "x": 7.853563039942486, "y": 34.23777229541407, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 10, "color": "969EA8", "_selected": true }, { "x": 4.366308310579029, "y": 58.180782332235275, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 10, "color": "969EA8", "_selected": true }, { "x": -0.14576273278029817, "y": 25.05621477573679, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -187, "color": "969EA8", "_selected": true }, { "x": -0.41460543129022653, "y": 40.74450868541814, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -187, "color": "969EA8", "_selected": true }, { "x": -0.011341383525405035, "y": 63.0120740957033, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -30, "color": "D5E0ED", "_selected": true }, { "x": -7.673358291056729, "y": 60.27460828053009, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -30, "color": "D5E0ED", "_selected": true }, { "x": -5.757979613379433, "y": 57.055861451795465, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DEEAF7", "curve": 65, "_selected": true }, { "x": 6.053689631238655, "y": 57.055861451795465, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "C0CAD6", "curve": 65, "_selected": true }, { "x": 4.652815545059127, "y": 54.30063991849306, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "969EA8", "_selected": true }, { "x": 7.3818328254961045, "y": 60.812293677549846, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "969EA8", "_selected": true }, { "x": 1.8914823736114386, "y": 46.93157352783711, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -2, "color": "C0CAD6", "_selected": true }, { "x": -4.575473497393233, "y": 53.16368665512079, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -2, "color": "DEEAF7", "_selected": true }, { "x": -8.47656354054692, "y": 33.995002252357764, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -10, "color": "D5E0ED", "_selected": true }, { "x": -4.070598292719609, "y": 58.180782332235275, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -10, "color": "D5E0ED", "_selected": true }, { "x": -0.14576273278029817, "y": 25.05621477573679, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 185, "color": "C0CAD6", "_selected": true }, { "x": -0.41460543129022653, "y": 40.74450868541814, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 185, "color": "C0CAD6", "_selected": true }, { "x": -63.289672233066554, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000", "curve": -25, "_selected": true }, { "x": 0, "y": 74.53477046088976, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000", "curve": -70, "_selected": true }, { "x": 0, "y": -65.83134266832663, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 25, "color": "000000", "_selected": true }, { "x": 62.80192091690749, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 25, "color": "000000", "_selected": true }, { "x": 0, "y": 74.53477046088976, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "00B9FF", "curve": -55, "_selected": true }, { "x": 62.80192091690749, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": -55, "color": "00B9FF", "_selected": true }, { "x": -63.289672233066554, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -55, "_selected": true }, { "x": 0, "y": 74.53477046088976, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -55, "_selected": true }, { "x": 0, "y": -65.83134266832663, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 45, "color": "E30000", "_selected": true }, { "x": 62.80192091690749, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 45, "color": "E30000", "_selected": true }, { "x": -63.289672233066554, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "0038BA", "curve": -45, "_selected": true }, { "x": 0, "y": -65.83134266832663, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": -45, "color": "0038BA", "_selected": true }, { "x": 0, "y": 74.53477046088976, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "00B9FF", "curve": -45, "_selected": true }, { "x": 62.80192091690749, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": -45, "color": "00B9FF", "_selected": true }, { "x": -63.289672233066554, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -45, "_selected": true }, { "x": 0, "y": 74.53477046088976, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -45, "_selected": true }, { "x": -63.289672233066554, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "0038BA", "curve": -63, "_selected": true }, { "x": 0, "y": -65.83134266832663, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": -63, "color": "0038BA", "_selected": true }, { "x": 0, "y": -65.83134266832663, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 63, "color": "E30000", "_selected": true }, { "x": 62.80192091690749, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 63, "color": "E30000", "_selected": true }, { "x": -63.21107860898502, "y": 21.793608355297028, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": 61.39971894874225, "y": 21.793608355297028, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": -63.21107860898502, "y": 19.767902500105325, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": 61.39971894874225, "y": 19.767902500105325, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": -63.21107860898502, "y": 17.74219664491362, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": 61.39971894874225, "y": 17.74219664491362, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": -63.21107860898502, "y": 15.600531681523435, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": 61.39971894874225, "y": 15.600531681523435, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": -63.21107860898502, "y": 13.458866718133258, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": 61.39971894874225, "y": 13.458866718133258, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": -63.21107860898502, "y": 11.317201754743074, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": 61.39971894874225, "y": 11.317201754743074, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": -63.21107860898502, "y": 9.17553679135289, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": 61.39971894874225, "y": 9.17553679135289, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "_selected": true }, { "x": -63.21107860898502, "y": 19.767902500105325, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -55.09084164816977, "y": 23.52797580935808, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -73.27778639559148, "y": 30.5209767267077, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -55.09084164816977, "y": 23.52797580935808, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -73.27778639559148, "y": 30.5209767267077, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -69.50453688808363, "y": 18.265833102722876, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -74.19294164891932, "y": 11.989082846818498, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -69.50453688808363, "y": 18.265833102722876, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -74.19294164891932, "y": 11.989082846818498, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": -63.09845011478859, "y": 9.17553679135289, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 0, "color": "ffffff", "_selected": true }, { "x": 61.39971894874225, "y": 9.17553679135289, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 35.00045568043001, "color": "ffffff", "_selected": true }, { "x": 72.69709124367489, "y": 11.85182248923929, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 35.00045568043001, "color": "ffffff", "_selected": true }, { "x": 67.80560858886963, "y": 18.332505018968625, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 35.00045568043001, "color": "ffffff", "_selected": true }, { "x": 72.69709124367489, "y": 11.85182248923929, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 35.00045568043001, "color": "ffffff", "_selected": true }, { "x": 67.80560858886963, "y": 18.332505018968625, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 35.00045568043001, "color": "ffffff", "_selected": true }, { "x": 73.60780291743191, "y": 30.547090679301277, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 35.00045568043001, "color": "ffffff", "_selected": true }, { "x": 55.584271962177525, "y": 23.28556990124757, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 35.00045568043001, "color": "ffffff", "_selected": true }, { "x": 73.60780291743191, "y": 30.547090679301277, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 35.00045568043001, "color": "ffffff", "_selected": true }, { "x": 55.584271962177525, "y": 23.28556990124757, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 35.00045568043001, "color": "ffffff", "_selected": true }, { "x": 61.25935571246299, "y": 19.62677072940492, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 35.00045568043001, "color": "ffffff", "_selected": true } ], "segments": [ { "v0": 0, "v1": 1, "vis": false, "color": "F8F8F8", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "_selected": true }, { "v0": 2, "v1": 3, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, -80 ], "y": -90, "_selected": true }, { "v0": 3, "v1": 4, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": -735, "_selected": true }, { "v0": 4, "v1": 5, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, 80 ], "y": 90, "_selected": true }, { "v0": 6, "v1": 7, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, -90 ], "y": -90, "_selected": true }, { "v0": 7, "v1": 8, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": 735, "_selected": true }, { "v0": 8, "v1": 9, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, 80 ], "y": 90, "_selected": true }, { "v0": 10, "v1": 11, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": -550, "_selected": true }, { "v0": 12, "v1": 13, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": -550, "_selected": true }, { "v0": 14, "v1": 15, "vis": true, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "y": 240, "_selected": true }, { "v0": 16, "v1": 17, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": 550, "_selected": true }, { "v0": 18, "v1": 19, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": 550, "_selected": true }, { "v0": 20, "v1": 21, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "y": -240, "_selected": true }, { "v0": 22, "v1": 23, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5, "_selected": true }, { "v0": 24, "v1": 25, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5, "_selected": true }, { "v0": 26, "v1": 27, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5, "_selected": true }, { "v0": 28, "v1": 29, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5, "_selected": true }, { "v0": 30, "v1": 31, "curve": 0, "vis": true, "color": "E30000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -550, "_selected": true }, { "v0": 32, "v1": 33, "curve": 0, "vis": true, "color": "0038BA", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 550, "_selected": true }, { "v0": 34, "v1": 35, "curve": -93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "_selected": true }, { "v0": 36, "v1": 37, "curve": 93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "_selected": true }, { "v0": 35, "v1": 37, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480, "_selected": true }, { "v0": 38, "v1": 39, "curve": 93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "_selected": true }, { "v0": 40, "v1": 41, "curve": -93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "_selected": true }, { "v0": 42, "v1": 43, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480, "_selected": true }, { "v0": 45, "v1": 44, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480, "_selected": true }, { "v0": 44, "v1": 45, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480, "_selected": true }, { "v0": 47, "v1": 46, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480, "_selected": true }, { "v0": 46, "v1": 47, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480, "_selected": true }, { "v0": 50, "v1": 49, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480, "_selected": true }, { "v0": 49, "v1": 50, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480, "_selected": true }, { "v0": 52, "v1": 51, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480, "_selected": true }, { "v0": 51, "v1": 52, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480, "_selected": true }, { "v0": 54, "v1": 55, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, -80 ], "y": -90, "_selected": true }, { "v0": 55, "v1": 56, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": -735, "_selected": true }, { "v0": 56, "v1": 57, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, 80 ], "y": 90, "_selected": true }, { "v0": 58, "v1": 59, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, -90 ], "y": -90, "_selected": true }, { "v0": 59, "v1": 60, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": 735, "_selected": true }, { "v0": 60, "v1": 61, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, 80 ], "y": 90, "_selected": true }, { "v0": 62, "v1": 63, "vis": false, "color": "F8F8F8", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "_selected": true }, { "v0": 64, "v1": 65, "curve": 179.42829117403, "color": "696969", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "curveF": 0.0049891420830909, "_selected": true }, { "v0": 67, "v1": 66, "curve": 180, "color": "696969", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "curveF": 6.1232339957368e-17, "_selected": true }, { "v0": 72, "v1": 73, "curve": -180, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0, "_selected": true }, { "v0": 74, "v1": 75, "curve": 180, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0, "_selected": true }, { "v0": 76, "v1": 77, "curve": -180, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0, "_selected": true }, { "v0": 78, "v1": 79, "curve": 180, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0, "_selected": true }, { "v0": 81, "v1": 80, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "_selected": true }, { "v0": 82, "v1": 83, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "_selected": true }, { "v0": 84, "v1": 85, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5, "_selected": true }, { "v0": 86, "v1": 87, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5, "_selected": true }, { "v0": 88, "v1": 89, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5, "_selected": true }, { "v0": 90, "v1": 91, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5, "_selected": true }, { "v0": 93, "v1": 94, "curve": -84.07659521498204, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 94, "v1": 95, "curve": -91.88795850309086, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 95, "v1": 96, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 96, "v1": 97, "curve": -91.55037058586078, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 97, "v1": 98, "curve": -84.07659521498204, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 99, "v1": 100, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 101, "v1": 102, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 104, "v1": 105, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 106, "v1": 107, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 108, "v1": 109, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 110, "v1": 111, "curve": 153.8158139144815, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 112, "v1": 113, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 114, "v1": 115, "curve": -95.90294409328301, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 116, "v1": 117, "curve": 51.897982537356484, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 118, "v1": 119, "curve": 43.746959222501616, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 121, "v1": 122, "curve": -153.8158139144815, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 123, "v1": 124, "curve": -84.07659521498204, "vis": true, "color": "0038BA", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 124, "v1": 125, "curve": -91.88795850309086, "vis": true, "color": "00B9FF", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 125, "v1": 126, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 126, "v1": 127, "curve": -91.55037058586078, "vis": true, "color": "00B9FF", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 127, "v1": 128, "curve": -84.07659521498204, "vis": true, "color": "E30000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 129, "v1": 130, "curve": 0, "vis": true, "color": "00B9FF", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 131, "v1": 132, "curve": 0, "vis": true, "color": "FFC300", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 134, "v1": 135, "curve": 0, "vis": true, "color": "00B9FF", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 136, "v1": 137, "curve": 0, "vis": true, "color": "0038BA", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 138, "v1": 139, "curve": 0, "vis": true, "color": "0038BA", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 140, "v1": 141, "curve": 153.8158139144815, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 142, "v1": 143, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 144, "v1": 145, "curve": -95.90294409328301, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 146, "v1": 147, "curve": 51.897982537356484, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 148, "v1": 149, "curve": 43.746959222501616, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 151, "v1": 152, "curve": -153.8158139144815, "vis": true, "color": "E30000", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 153, "v1": 154, "curve": 0, "vis": true, "color": "0038BA", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 155, "v1": 156, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 157, "v1": 158, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 159, "v1": 160, "curve": 0, "vis": true, "color": "00B9FF", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 161, "v1": 162, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 163, "v1": 164, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 165, "v1": 166, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 167, "v1": 168, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 169, "v1": 170, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 171, "v1": 172, "curve": 0, "vis": true, "color": "FFC300", "bCoef": 0.1, "trait": "line", "_selected": true }, { "v0": 173, "v1": 174, "curve": 0, "color": "DEEAF7", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 87, "_selected": true }, { "v0": 175, "v1": 176, "curve": 4.999999999998416, "color": "C0CAD6", "cMask": [ "wall" ], "cGroup": [ "wall" ], "_selected": true }, { "v0": 177, "v1": 178, "curve": -8.999999999999758, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ], "_selected": true }, { "v0": 179, "v1": 180, "curve": 30.25563141229323, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 110, "_selected": true }, { "v0": 181, "v1": 182, "curve": -10.000000000000195, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ], "_selected": true }, { "v0": 183, "v1": 184, "curve": 186.9999999999939, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -245, "_selected": true }, { "v0": 185, "v1": 186, "curve": 30.255631412295948, "color": "D5E0ED", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 110, "_selected": true }, { "v0": 187, "v1": 188, "curve": -64.99999999999702, "color": "C0CAD6", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 48, "_selected": true }, { "v0": 189, "v1": 190, "curve": 0, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ], "_selected": true }, { "v0": 191, "v1": 192, "curve": 2.0000000000010463, "color": "C0CAD6", "cMask": [ "wall" ], "cGroup": [ "wall" ], "_selected": true }, { "v0": 193, "v1": 194, "curve": 10.000000000000014, "color": "D5E0ED", "cMask": [ "wall" ], "cGroup": [ "wall" ], "_selected": true }, { "v0": 195, "v1": 196, "curve": -184.999999999996, "color": "C0CAD6", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -245, "_selected": true }, { "v0": 197, "v1": 198, "curve": -70, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480, "_selected": true }, { "v0": 197, "v1": 199, "curve": -25, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "_selected": true }, { "v0": 198, "v1": 200, "curve": -70, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "_selected": true }, { "v0": 200, "v1": 199, "curve": 25, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "_selected": true }, { "v0": 206, "v1": 205, "curve": 45, "vis": true, "color": "E30000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "_selected": true }, { "v0": 207, "v1": 208, "curve": -45, "vis": true, "color": "0038BA", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "_selected": true }, { "v0": 209, "v1": 210, "curve": -62.03471354128121, "vis": true, "color": "00B9FF", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "_selected": true }, { "v0": 211, "v1": 212, "curve": -61.70002979712457, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480, "_selected": true }, { "v0": 217, "v1": 218, "curve": 9.918277729289573, "vis": true, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 219, "v1": 220, "curve": 11.876883611700258, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 221, "v1": 222, "curve": 13.885804696492814, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 223, "v1": 224, "curve": 13.885804696492814, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 17.18920886515862, "_selected": true }, { "v0": 225, "v1": 226, "curve": 13.885804696492814, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 15.18920886515862, "_selected": true }, { "v0": 227, "v1": 228, "curve": 13.885804696492814, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 13.18920886515862, "_selected": true }, { "v0": 229, "v1": 230, "curve": 13.885804696492814, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 11.18920886515862, "_selected": true }, { "v0": 231, "v1": 232, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 233, "v1": 234, "curve": 35.00045568043001, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 235, "v1": 236, "curve": 35.00045568043001, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 237, "v1": 238, "curve": 35.00045568043001, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 239, "v1": 240, "curve": 35.00045568043001, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 241, "v1": 242, "curve": 35.00045568043001, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 243, "v1": 244, "curve": 35.00045568043001, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 245, "v1": 246, "curve": 35.00045568043001, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 247, "v1": 248, "curve": 35.00045568043001, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true }, { "v0": 249, "v1": 250, "curve": 35.00045568043001, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14, "_selected": true } ], "planes": [ { "normal": [ 0, 1 ], "dist": -350, "bCoef": 0.1, "_selected": true }, { "normal": [ -1, 0 ], "dist": -784, "bCoef": 0.1, "_selected": true }, { "normal": [ 0, -1 ], "dist": -320, "cMask": [ "ball" ], "_selected": true }, { "normal": [ 0, -1 ], "dist": -350, "bCoef": 0.1, "_selected": true }, { "normal": [ 1, 0 ], "dist": -777, "bCoef": 0.1, "_selected": true }, { "normal": [ 0, 1 ], "dist": -320, "cMask": [ "ball" ], "_selected": true } ], "goals": [ { "p0": [ -707.5, -90 ], "p1": [ -707.5, 90 ], "team": "red", "color": "ffffff", "_selected": true }, { "p0": [ 707.5, 90 ], "p1": [ 707.5, -90 ], "team": "blue", "color": "ffffff", "_selected": true } ], "discs": [ { "radius": 5.5, "invMass": 0, "pos": [ -700, 90 ], "color": "00B9FF", "trait": "goalPost", "y": 90, "_selected": true }, { "radius": 5.5, "invMass": 0, "pos": [ -700, -90 ], "color": "00B9FF", "trait": "goalPost", "y": -85, "x": -560, "_selected": true }, { "radius": 5.5, "invMass": 0, "pos": [ 700, 90 ], "color": "00B9FF", "trait": "goalPost", "y": 90, "_selected": true }, { "radius": 5.5, "invMass": 0, "pos": [ 700, -90 ], "color": "00B9FF", "trait": "goalPost", "y": -85, "vis": true, "_selected": true } ], "playerPhysics": { "bCoef": 0.1, "acceleration": 0.11, "kickingAcceleration": 0.083, "kickStrength": 5 }, "ballPhysics": { "radius": 6.25, "bCoef": 0.4, "invMass": 1.5, "color": "FFFFFF" }, "spawnDistance": 200, "traits": { "ballArea": { "vis": false, "bCoef": 1, "cMask": [ "ball" ] }, "goalPost": { "radius": 8, "invMass": 0, "bCoef": 0.5 }, "goalNet": { "vis": true, "bCoef": 0.1, "cMask": [ "ball" ] }, "line": { "vis": true, "bCoef": 0.1, "cMask": [ "" ] }, "kickOffBarrier": { "vis": false, "bCoef": 0.1, "cGroup": [ "redKO", "blueKO" ], "cMask": [ "red", "blue" ] } }, "joints": [], "redSpawnPoints": [], "blueSpawnPoints": [] }'; // Read above

var uniforms = {
	/* SELECCIONES */
	"pal": {
		"name": 'Palestino',
		"type": Uniform.COUNTRY,
		"emoji": '🔴🟢⚪',
		"angle": 40,
		"textcolor": 0xffffff,
		"color1": 0x030000,
		"color2": 0x125707,
		"color3": 0xFF0000,
		"angle2": 90,
		"textcolor2": 0xDEFF08,
		"color21": 0x000000,
		"color22": 0x313302,
		"color23": 0x000000,
	},
	"ssh": {
		"name": 'Shishiboss H.C',
		"type": Uniform.COUNTRY,
		"emoji": '🟤⚫⚪',
		"angle": 60,
		"textcolor": 0xFFFDFC,
		"color1": 0x000000,
		"color2": 0xD4AE5A,
		"color3": 0x000000,
		"angle2": 60,
		"textcolor2": 0x000000,
		"color21": 0xD4AE5A,
		"color22": 0xFFFAFA,
		"color23": 0xD4AE5A,
	},
	"god": {
		"name": 'God FC',
		"type": Uniform.COUNTRY,
		"emoji": '🟠⚪',
		"angle": 60,
		"textcolor": 0x0F0F0F,
		"color1": 0xFFCE2E,
		"color2": 0xFFCE2E,
		"color3": 0xFFCE2E,
		"angle2": 60,
		"textcolor2": 0xFFF700,
		"color21": 0x000000,
		"color22": 0x000000,
		"color23": 0x000000,
	},
	"mtl": {
		"name": 'Mentolato FC',
		"type": Uniform.COUNTRY,
		"emoji": '⚫🟠',
		"angle": 60,
		"textcolor": 0xFFFFFF,
		"color1": 0xB5340D,
		"color2": 0x9E2D0B,
		"color3": 0x8C280A,
		"angle2": -200,
		"textcolor2": 0xFFA200,
		"color21": 0xFFF7F7,
		"color22": 0xFFF7F7,
		"color23": 0xFFF7F7,
	},
	"tali": {
		"name": 'Talibanes',
		"type": Uniform.COUNTRY,
		"emoji": '⚫🟡⚪',
		"angle": 0,
		"textcolor": 0xFFFF38,
		"color1": 0x000000,
		"color2": 0x000000,
		"color3": 0x000000,
		"angle2": 0,
		"textcolor2": 0x0A0A02,
		"color21": 0xFFFFFF,
		"color22": 0xFFFFFF,
		"color23": 0xFFFFFF,
	},
	"fcp": {
		"name": 'FC Pierola',
		"type": Uniform.COUNTRY,
		"emoji": '⚫🔴⚪',
		"angle": 60,
		"textcolor": 0xFFFFFF,
		"color1": 0x002033,
		"color2": 0xA61505,
		"color3": 0x002033,
		"angle2": 60,
		"textcolor2": 0x000000,
		"color21": 0xFFFFFF,
		"color22": 0xE6E6E6,
		"color23": null,
	},
	"can": {
		"name": 'Club Atletico Nuram',
		"type": Uniform.COUNTRY,
		"emoji": '⚪🟠⚫',
		"angle": 0,
		"textcolor": 0x000000,
		"color1": 0xFFFFFF,
		"color2": 0xFF7B08,
		"color3": 0xFFFFFF,
		"angle2": 0,
		"textcolor2": 0xC75D00,
		"color21": 0x171616,
		"color22": 0xC2C2C2,
		"color23": 0x171616,
	},
	"isc": {
		"name": 'Ibis Sport Club',
		"type": Uniform.COUNTRY,
		"emoji": '🔴⚫',
		"angle": 0,
		"textcolor": 0xC4A233,
		"color1": 0x960000,
		"color2": 0x000000,
		"color3": 0x960000,
		"angle2": 11111,
		"textcolor2": 0xFF0000,
		"color21": 0xFFFFFF,
		"color22": 0xFFFFFF,
		"color23": 0xCCCCCC,
	},
	"gsc": {
		"name": 'Gordibis',
		"type": Uniform.COUNTRY,
		"emoji": '⚪🔴',
		"angle": 50,
		"textcolor": 0xA10000,
		"color1": 0xFFFFFF,
		"color2": 0xFFFFFF,
		"color3": 0xEDEDED,
		"angle2": 0,
		"textcolor2": 0xC4A233,
		"color21": 0x960000,
		"color22": 0x000000,
		"color23": 0x960000,
	},
	"ph": {
		"name": 'Pichang Heroes',
		"type": Uniform.COUNTRY,
		"emoji": '⚪🟢',
		"angle": 60,
		"textcolor": 0x225275,
		"color1": 0xFFFFFC,
		"color2": 0xBAB505,
		"color3": 0xFFFEFA,
		"angle2": 60,
		"textcolor2": 0x225275,
		"color21": 0xFFFFFC,
		"color22": 0xBAB505,
		"color23": 0xFFFEFA,
	},
	"tiw": {
		"name": 'TimberWolves HC',
		"type": Uniform.COUNTRY,
		"emoji": '🔵⚫',
		"angle": 90,
		"textcolor": 0xFFFFFF,
		"color1": 0x004D99,
		"color2": 0x00004A,
		"color3": 0x00004A,
		"angle2": 0,
		"textcolor2": 0x004D99,
		"color21": 0x00004A,
		"color22": 0xFFFFFF,
		"color23": 0xFFFFFF,
	},
	"stk": {
		"name": 'Stabaek',
		"type": Uniform.COUNTRY,
		"emoji": '⚫🟡⚫',
		"angle": 45,
		"textcolor": 0x000000,
		"color1": 0xDCB900,
		"color2": 0xE6FFF9,
		"color3": 0xDCB900,
		"angle2": 45,
		"textcolor2": 0xFFFFFF,
		"color21": 0x000000,
		"color22": 0xDCB900,
		"color23": 0x000000,
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

var nameHome = 'Rojo';
var acronymHome = "red";
var nameGuest = 'Azul';
var acronymGuest = "blu";
var emojiHome = '🔴🔴';
var emojiGuest = '🔵🔵';
var goalsHome = [];
var goalsGuest = [];
var afkLimit = Infinity;
var drawTimeLimit = Infinity;
var maxTeamSize = 4; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;

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
var lastPlayersTouched = { id: 0, team: 0 }; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want
const replaysdiscord = "https://discord.com/api/webhooks/1116840081525841921/v2G0qISE0Mmq28be7aMvhuLHuGcY54NbCYOmxpoJaB8DDhiMzX9DxPGSGcSJZA3e_9NW";

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

loadMap(bigMap, 0, 0);

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

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // returns a random number from 0 to max-1
	return Math.floor(Math.random() * Math.floor(max)); 
}

function sendDiscordWebhook(scores){
		const form = new FormData();
		form.append(
			"file",
			new File([room.stopRecording()],
				`${nameHome} vs ${nameGuest} - Sala 2.hbr2`,
				{type: "text/plain"}
				)
			);
	
		const webhook = new XMLHttpRequest();
		webhook.open("POST", replaysdiscord);
		webhook.send(form);
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

/* BUTTONS */

function PublicitaDonacion(player) {
    var scores = room.getScores();
    if (scores.time > 20 && !isTimeAddedShownsiete) {
    room.sendAnnouncement("「📣」 𝐄𝐬𝐭𝐚𝐬 𝐣𝐮𝐠𝐚𝐧𝐝𝐨 𝐥𝐚 𝐩𝐫𝐢𝐦𝐞𝐫𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 𝐝𝐞 𝐀𝐅𝐂𝐒. ¡𝐁𝐮𝐞𝐧𝐚 𝐒𝐮𝐞𝐫𝐭𝐞!", player, 0xFFFFFF, "bold");
    isTimeAddedShownsiete = true;
    }
}

function PublicitaHelp(player) {
    var scores = room.getScores();
    if (scores.time > 120 && !isTimeAddedShowncinco) {
    room.sendAnnouncement("「🎥」 ¡𝐑𝐞𝐜𝐮𝐞𝐫𝐝𝐚 𝐪𝐮𝐞 𝐞𝐥 𝐩𝐚𝐫𝐭𝐢𝐝𝐨 𝐞𝐬𝐭𝐚 𝐬𝐢𝐞𝐧𝐝𝐨 𝐠𝐫𝐚𝐛𝐚𝐝𝐨!", player, 0xFFFFFF, "bold");
    isTimeAddedShowncinco = true;
    }
}

function PublicitaLiga(player) {
    var scores = room.getScores();
    if (scores.time > 400 && !isTimeAddedShowncuatro) {
    room.sendAnnouncement("「🎥」 ¡𝐑𝐞𝐜𝐮𝐞𝐫𝐝𝐚 𝐪𝐮𝐞 𝐞𝐥 𝐩𝐚𝐫𝐭𝐢𝐝𝐨 𝐞𝐬𝐭𝐚 𝐬𝐢𝐞𝐧𝐝𝐨 𝐠𝐫𝐚𝐛𝐚𝐝𝐨!", player, 0xFFFFFF, "bold");
    isTimeAddedShowncuatro = true;
    }
}

function topBtn() {
	if (teamS.length == 0) {
		return;
	}
	else {
		if (teamR.length == teamB.length) {
			if (teamS.length > 1) {
				room.setPlayerTeam(teamS[0].id, Team.RED);
				room.setPlayerTeam(teamS[1].id, Team.BLUE);
			}
			return;
		}
		else if (teamR.length < teamB.length) {
			room.setPlayerTeam(teamS[0].id, Team.RED);
		}
		else {
			room.setPlayerTeam(teamS[0].id, Team.BLUE);
		}
	}
}

function randomBtn() {
	if (teamS.length == 0) {
		return;
	}
	else {
		if (teamR.length == teamB.length) {
			if (teamS.length > 1) {
				var r = getRandomInt(teamS.length);
				room.setPlayerTeam(teamS[r].id, Team.RED);
				teamS = teamS.filter((spec) => spec.id != teamS[r].id);
				room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
			}
			return;
		}
		else if (teamR.length < teamB.length) {
			room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
		}
		else {
			room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
		}
	}
}

function blueToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
	}
}

function redToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamR.length; i++) {
		room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
	}
}

function resetBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	if (teamR.length <= teamB.length) {
		for (var i = 0; i < teamR.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamR.length; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
		}
	}
	else {
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamB.length; i < teamR.length; i++) {
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
	}
}

function blueToRedBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[i].id, Team.RED);
	}
}

/* GAME FUNCTIONS */

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
		room.sendChat("⚽ Gol de oro!");
	}
	if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			room.sendChat("⌛ 1 minuto! tamo' ready!");
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
    
	if (roomWebhook != '') {
        var endMessage = `🏆 FINAL DEL PARTIDO 🏆\n 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙵𝙸𝙽𝙰𝙻    ${emojiHome}  ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest}  ${emojiGuest}`;
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `[${getDate()}] ${endMessage}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
}

function quickRestart() {
	room.stopGame();
	setTimeout(() => { room.startGame(); }, 2000);
}

function resumeGame() {
	setTimeout(() => { room.startGame(); }, 2000);
	setTimeout(() => { room.pauseGame(false); }, 1000);
}

function activateChooseMode() {
	inChooseMode = true;
	slowMode = 2;
	room.sendChat("Modo lento activado (2 segundos)!");
}

function deactivateChooseMode() {
	inChooseMode = false;
	clearTimeout(timeOutCap);
	if (slowMode != 0) {
		slowMode = 0;
		room.sendChat("Modo lento Finalizado");
	}
	redCaptainChoice = "";
	blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
	if (map == bigMap) {
		room.setCustomStadium(bigMap);
	}
	else if (map == bigMap) {
		(bigMap != '') ? room.setCustomStadium(bigMap) : room.setDefaultStadium("Classic");
	}
	else if (map == bigMap) {
		(bigMap != '.') ? room.setCustomStadium(bigMap) : room.setDefaultStadium("Big");
	}
	else {
		room.setCustomStadium(map);
	}
	room.setScoreLimit(scoreLim);
	room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

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

function setAFK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
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

function getLastTouchOfTheBall() {
	const ballPosition = room.getBallPosition();
	updateTeams();
	for (var i = 0; i < players.length; i++) {
		if (players[i].position != null) {
			var distanceToBall = pointDistance(players[i].position, ballPosition);
			if (distanceToBall < triggerDistance) {
				!activePlay ? activePlay = true : null;
				if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
					lastPlayersTouched[1] = lastPlayersTouched[0];
					lastPlayersTouched[0] = players[i];
				}
				lastTeamTouched = players[i].team;
			}
		}
	}
}

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

setInterval(() => {
	var tableau = [];
	if (statNumber % 5 == 0) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Partidos Jugados> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 1) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Victorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 2) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Goles> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 3) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	if (statNumber % 5 == 4) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
	}
	statNumber++;
}, statInterval * 60 * 1000);

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function(player) {
	extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
	updateRoleOnPlayerIn();
	if (roomWebhook != '') {
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: `${player.name} entró a la sala ➡️ (${players.length + 1}/${maxPlayers}) a las ${getDate()}`,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
	room.sendAnnouncement("👋👋 Bienvenido a la sala 2 de AFCS " + player.name + " ! Buena suerte en tu OFI.", player.id, 0x08CEFF, "bold");
	room.sendAnnouncement("𝙿𝚘𝚗 '𝚝' 𝚊𝚗𝚝𝚎𝚜 𝚍𝚎𝚕 𝚖𝚎𝚗𝚜𝚊𝚓𝚎 𝚙𝚊𝚛𝚊 𝚞𝚜𝚊𝚛 𝚎𝚕 𝚌𝚑𝚊𝚝 𝚍𝚎 𝚎𝚚𝚞𝚒𝚙𝚘!", player.id, 0x08CEFF, "bold");
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
	updateTeams();
}

room.onPlayerLeave = function(player) {
    updateRoleOnPlayerOut();
    if (roomWebhook != '') {
        var stringContent = `${player.name} dejó la sala ➡️ (${players.length}/${maxPlayers}) a las ${getDate()}`;
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: stringContent,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
    ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;

    if (roomWebhook != '') {
        var stringContent = `${kickedPlayer.name} fue ${ban ? 'baneado' : 'kickeado'} de la sala ⛔ a las [${getDate()}]`;
        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: stringContent,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
}

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
	message = message.split(/ +/);
	player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
	if (["!ayuda"].includes(message[0].toLowerCase())) {
		room.sendAnnouncement("[📄] Comandos : !uni, !reserva. ", player.id,0x08CEFF,"bold");
		player.admin ? room.sendAnnouncement("[📄] Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>", player.id,0xFFFFFF,"bold") : null;
	}
	else if (["!claim"].includes(message[0].toLowerCase())) {
		if (message[1] == adminPassword) {
			room.setPlayerAdmin(player.id, true);
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
			if (stats[Ss.RL] != "master") {
				stats[Ss.RL] = "master";
				room.sendChat(player.name + " is now a room master !");
				localStorage.setItem(getAuth(player), JSON.stringify(stats));
			}
		}
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
					room.sendChat(cstm, player.id);
					cstm = "... ";
				}
				cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
			}
		}
		if (cstm == "[PV] Lista de Muteados : ") {
			room.sendChat("[PV] No hay nadie en la lista de muteados !", player.id);
			return false;
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
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
				room.sendChat("Se ha limpiado la lista de muteados");
			}
			else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
				setMute(room.getPlayer(Number.parseInt(message[1])), false);
				room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ha sido desmuteado !");
			}
			else if (Number.isNaN(Number.parseInt(message[1]))) {
				if (message[1].length > 1 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
						setMute(room.getPlayer(Number.parseInt(message[1])), false);
						room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " ha sido desmuteado!");
					}
				}
			}
		}
	}
	else if (["!slow"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				slowMode = 2;
				room.sendChat("Modo lento activado (2 segundos)!");
			}
			else if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						slowMode = Number.parseInt(message[1]);
						room.sendChat(slowMode + " segundos, modo lento activado !");
						return false;
					}
				}
				slowMode = 2;
				room.sendChat("Modo lento activado (2 segundos)!");
			}
		}
	}
	else if (["!endslow"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			slowMode != 0 ? room.sendChat("Modo lento terminado.") : null;
			slowMode = 0;
		}
	}
	else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
		if (banList.length == 0) {
			room.sendChat("[PV] No hay nadie en la lista de baneados!", player.id);
			return false;
		}
		var cstm = "[PV] Lista de baneados : ";
		for (var i = 0; i < banList.length; i++) {
			if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
				room.sendChat(cstm, player.id);
				cstm = "... ";
			}
			cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}
	else if (["!clearbans"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				room.clearBans();
				room.sendChat("Bans removidos!");
				banList = [];
			}
			if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						ID = Number.parseInt(message[1]);
						room.clearBan(ID);
						if (banList.length != banList.filter((array) => array[1] != ID)) {
							room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " ha sido baneado del host !");
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
		room.sendChat("Usted está muteado.", player.id);
		return false;
	}
	if (slowMode > 0) {
		if (!player.admin) {
			if (!SMSet.has(player.id)) {
				SMSet.add(player.id);
				setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
			}
			else {
				return false;
			}
		}
	}
}

room.onPlayerActivity = function(player) {
	setActivity(player, 0);
}

room.onPlayerBallKick = function(player) {
	if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
		!activePlay ? activePlay = true : null;
		lastTeamTouched = player.team;
		lastPlayersTouched[1] = lastPlayersTouched[0];
		lastPlayersTouched[0] = player;
	}
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
	lastPlayersTouched = [null, null];
    Rposs = 0;
	Bposs = 0;
	goalsHome = [];
    goalsGuest = [];
	GKList = [];
	allReds = [];
	allBlues = [];

    room.sendAnnouncement(centerText(`    🥅🥅 EMPIEZA EL PARTIDO 🥅🥅`), null, 0xFFFFFF, "bold", Notification.CHAT);
    room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} X ${nameGuest} ${emojiGuest}`), null, 0xFFFFFF, "bold", 0);
	room.sendAnnouncement(centerText(`     𝙴𝚕 𝚙𝚊𝚛𝚝𝚒𝚍𝚘 𝚎𝚜𝚝𝚊 𝚜𝚒𝚎𝚗𝚍𝚘 𝚐𝚛𝚊𝚋𝚊𝚍𝚘.`), null, 0xFFFFFF, "bold", 0);
	
	if (roomWebhook != '') {
        var playersTeam1 = room.getPlayerList().filter((player) => player.team === 1);
        var playersTeam1List = playersTeam1.map((player) => player.name).join(" - ");
        var playersTeam2 = room.getPlayerList().filter((player) => player.team === 2);
        var playersTeam2List = playersTeam2.map((player) => player.name).join(" - ");

        var stringContent = ` [${getDate()}]    🥅🥅 EMPIEZA EL PARTIDO 🥅🥅   entre    ${emojiHome}  ${nameHome} VS ${nameGuest}  ${emojiGuest}\n` +
            `𝙰𝚕𝚒𝚗𝚎𝚊𝚌𝚒𝚘𝚗 𝚍𝚎𝚕 𝙻𝚘𝚌𝚊𝚕   (${nameHome}):   ${playersTeam1List}\n` +
            `𝙰𝚕𝚒𝚗𝚎𝚊𝚌𝚒𝚘𝚗 𝚍𝚎 𝚕𝚊 𝚅𝚒𝚜𝚒𝚝𝚊   (${nameGuest}):   ${playersTeam2List}`;

        fetch(roomWebhook, {
            method: 'POST',
            body: JSON.stringify({
                content: stringContent,
                username: roomName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
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

room.onTeamGoal = function(team) {
	activePlay = false;
	countAFK = false;
	const goalTime = getTime();
	const scores = room.getScores();
	game.scores = scores;
	if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			room.sendAnnouncement("", null, 0xFFFFFF, "bold", Notification.CHAT);
			room.sendAnnouncement(centerText(`⚽ Autor: ${lastPlayersTouched[0].name}`), null, 0xFFFFFF, "bold", 0);
			room.sendAnnouncement(centerText(`👟 Pase: ${lastPlayersTouched[1].name}`), null, 0xFFFFFF, "bold", 0);
			room.sendAnnouncement(centerText(`Velocidad de Tiro: ${ballSpeed.toFixed()}km/h`), null, 0xFFFFFF, "bold", 0);
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
		} else {
			room.sendAnnouncement("", null, 0xFFFFFF, "bold", Notification.CHAT);
			room.sendAnnouncement(centerText(`⚽ Autor: ${lastPlayersTouched[0].name}`), null, 0xFFFFFF, "bold", 0);
			room.sendAnnouncement(centerText(`Velocidad de Tiro: ${ballSpeed.toFixed()}km/h`), null, 0xFFFFFF, "bold", 0);
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
		}
		
		if (team === 1) {
			goalsHome.push(`${lastPlayersTouched[0].name}  ${goalTime}`);
		} else if (team === 2) {
			goalsGuest.push(`${lastPlayersTouched[0].name}  ${goalTime}`);
		}
		
		if (roomWebhook != '') {
            var goalString = `⚽ Gol de ${lastPlayersTouched[0].name} para (${team === 1 ? nameHome : nameGuest}) en ${goalTime} de partido` + 
                    `   ${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`;
            fetch(roomWebhook, {
                method: 'POST',
                body: JSON.stringify({
                    content: `[${getDate()}]      ${goalString}`,
                    username: roomName,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res);
        }
		
	} else {
		room.sendAnnouncement("", null, 0xFFFFFF, "bold", Notification.CHAT);
		room.sendAnnouncement(centerText(`🤡 Autogol: ${lastPlayersTouched[0].name} 🤡`), null, 0xFFFFFF, "bold", 0);
		room.sendAnnouncement(centerText(`Velocidad de Tiro: ${ballSpeed.toFixed()}km/h`), null, 0xFFFFFF, "bold", 0);
		game.goals.push(new Goal(scores.time, team, null, null));
		
		if (team === 1) {
			goalsHome.push(`${lastPlayersTouched[0].name} (C)  ${goalTime}`);
		} else if (team === 2) {
			goalsGuest.push(`${lastPlayersTouched[0].name} (C)  ${goalTime}`);
		}
		
		if (roomWebhook != '') {
            var goalString = `🤡 Autogol de ${lastPlayersTouched[0].name} de (${team === 2 ? nameHome : nameGuest}) en ${goalTime} de partido` + 
                    `   ${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`;
            fetch(roomWebhook, {
                method: 'POST',
                body: JSON.stringify({
                    content: `[${getDate()}]      ${goalString}`,
                    username: roomName,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res);
        }
	}
	if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
		endGame(team);
		goldenGoal = false;
		setTimeout(() => { room.stopGame(); }, 1000);
	}
	room.sendAnnouncement(centerText(`${emojiHome} ${nameHome} ${scores.red} - ${scores.blue} ${nameGuest} ${emojiGuest}`), null, 0xFFFFFF, "bold", 0);
}

room.onPositionsReset = function() {
	countAFK = true; 
	lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onRoomLink = function(url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
	if (getMute(changedPlayer) && changedPlayer.admin) {
		room.sendChat(changedPlayer.name + " ha sido desmuteado.");
		setMute(changedPlayer, false);
	}
	if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
		room.sendChat("No tienes permiso para nombrar a un jugador como Administrador !", byPlayer.id);
		room.setPlayerAdmin(changedPlayer.id, false);
	}
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
}

room.onGameTick = function() {
	PublicitaDonacion();
    PublicitaHelp();
    PublicitaLiga();
	checkTime();
	getLastTouchOfTheBall();
	getStats();
}