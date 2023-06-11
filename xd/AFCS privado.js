// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = " 🪐 | 𝙷𝚘𝚜𝚝 𝚙𝚛𝚒𝚟𝚊𝚍𝚘 1 𝙰𝙵𝙲𝚂 | 🪐";
const botName = "| 𝙰𝙵𝙲𝚂 𝙰𝚛𝚋𝚒𝚝𝚛𝚘 |";
const maxPlayers = 25;
const roomPublic = false;
const roomPassword = "2112";
const geo = [{"code": "cl", "lat": -33.456, "lon": -70.648}];

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, password: roomPassword, public: roomPublic, playerName: botName, geo: geo[0] });

var roomWebhook = 'https://discord.com/api/webhooks/1116839961812017202/DgBRRLS2DW-u-3Ofb45P5OPqa5UAkca6E4ChByKv6JBC5asCdK1o5oYmo2skDx9cB6c3'; // this webhook is used to send the details of the room (chat, join, leave) ; it should be in a private discord channel
const scoreLimitClassic = 4;
const scoreLimitBig = 0;
const timeLimitClassic = 3;
const timeLimitBig = 8;

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
var bigMap = '{"name": "Futsal x4 by AFCS", "canBeStored": false, "width": 765, "height": 350, "bg": { "type": "hockey", "height": 0, "width": 0, "cornerRadius": 0, "kickOffRadius": 0 }, "vertexes": [ { "x": 0, "y": -350, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "x": 0, "y": -320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "x": -700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ] }, { "x": -735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ] }, { "x": -735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ] }, { "x": -700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ] }, { "x": 700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ] }, { "x": 735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ] }, { "x": 735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ] }, { "x": 700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ] }, { "x": -700, "y": 90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "pos": [ -700, 80 ] }, { "x": -700, "y": 320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": -700, "y": -90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "pos": [ -700, -80 ] }, { "x": -700, "y": -320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": -700, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": 700, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": 700, "y": 90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "pos": [ 700, 80 ], "color": "ffffff" }, { "x": 700, "y": 320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": 700, "y": -320, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff" }, { "x": 700, "y": -90, "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "color": "ffffff", "pos": [ 700, -90 ] }, { "x": -700, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "color": "ffffff" }, { "x": 700, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "color": "ffffff" }, { "x": -706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ -700, 80 ], "color": "ffffff" }, { "x": -706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff" }, { "x": -706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff" }, { "x": -706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ -700, -80 ], "color": "ffffff" }, { "x": 706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff" }, { "x": 706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ 700, -90 ], "color": "ffffff" }, { "x": 706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ 700, 80 ], "color": "ffffff" }, { "x": 706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff" }, { "x": -700, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "E30000" }, { "x": -700, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "E30000" }, { "x": 700, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "0038BA", "pos": [ 700, -90 ] }, { "x": 700, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "0038BA" }, { "x": -700, "y": 280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827 }, { "x": -480, "y": 60, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827 }, { "x": -700, "y": -280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827 }, { "x": -480, "y": -60, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827 }, { "x": 700, "y": 280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827 }, { "x": 480, "y": 70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 93.241608812827 }, { "x": 700, "y": -280, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827 }, { "x": 480, "y": -70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -93.241608812827 }, { "x": 480, "y": 70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 0 }, { "x": 480, "y": -70, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": 0 }, { "x": 480, "y": 1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": 480, "y": -1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": 480, "y": 3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": 480, "y": -3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": 480, "y": 2, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -480, "y": 1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -480, "y": -1, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -480, "y": 3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -480, "y": -3, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -480, "y": 2, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 180, "color": "ffffff" }, { "x": -700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ], "vis": false }, { "x": -735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, -80 ], "vis": false }, { "x": -735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ], "vis": false }, { "x": -700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ -700, 80 ], "vis": false }, { "x": 700, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ], "vis": false }, { "x": 735, "y": -90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, -90 ], "vis": false }, { "x": 735, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ], "vis": false }, { "x": 700, "y": 90, "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "curve": 0, "color": "ffffff", "pos": [ 700, 80 ], "vis": false }, { "x": 0, "y": 320, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "x": 0, "y": 350, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "x": 0, "y": 90, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "696969" }, { "x": 0, "y": -90, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "696969" }, { "x": 0, "y": 90, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "696969" }, { "x": 0, "y": -90, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "696969" }, { "x": 0, "y": -320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ffffff" }, { "x": 0, "y": 90, "cMask": [], "color": "ffffff" }, { "x": 0, "y": 90, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ffffff" }, { "x": 0, "y": 320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "ffffff" }, { "x": 0, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": -180 }, { "x": 0, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": -180 }, { "x": 0, "y": 90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": 180 }, { "x": 0, "y": -90, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": 180 }, { "x": 0, "y": 91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": -180 }, { "x": 0, "y": -91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": -180 }, { "x": 0, "y": 91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": 180 }, { "x": 0, "y": -91, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "B6B6B8", "curve": 180 }, { "x": 0, "y": -91, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "B6B6B8" }, { "x": 0, "y": -320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "B6B6B8" }, { "x": 0, "y": 91, "bCoef": 0, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "B6B6B8" }, { "x": 0, "y": 320, "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ], "color": "B6B6B8" }, { "x": -706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ -700, 80 ], "color": "ffffff" }, { "x": -706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff" }, { "x": -706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff" }, { "x": -706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ -700, -80 ], "color": "ffffff" }, { "x": 706.5, "y": -320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "color": "ffffff" }, { "x": 706.5, "y": -90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "vis": false, "curve": 0, "pos": [ 700, -90 ], "color": "ffffff" }, { "x": 706.5, "y": 90, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "pos": [ 700, 80 ], "color": "ffffff" }, { "x": 706.5, "y": 320, "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "curve": 0, "vis": false, "color": "ffffff" }, { "x": 735, "y": -350, "bCoef": 0.5, "cMask": [ "red", "blue" ] }, { "x": 21.537877266089925, "y": -24.45149168629038, "bCoef": 0.1, "trait": "line", "color": "000000", "curve": -84.07659521498204 }, { "x": 13.29484804620331, "y": -31.664142253691196, "bCoef": 0.1, "trait": "line", "color": "000000", "curve": -84.07659521498204 }, { "x": 2.9910615213449847, "y": -22.390734381318772, "bCoef": 0.1, "trait": "line", "color": "000000", "curve": -91.88795850309086 }, { "x": 2.9910615213449847, "y": -14.14770516143211, "bCoef": 0.1, "trait": "line", "color": "000000" }, { "x": 13.29484804620331, "y": -5.904675941545419, "bCoef": 0.1, "trait": "line", "color": "000000" }, { "x": 21.766849426512838, "y": -15.407063835506094, "bCoef": 0.1, "trait": "line", "color": "000000" }, { "x": -19.677268833343327, "y": -31.664142253691196, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "000000" }, { "x": -19.677268833343327, "y": -5.904675941545419, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "000000" }, { "x": -19.791756223748997, "y": -19.29959842386121, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -7.312725003513425, "y": -19.29959842386121, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -10.40386096097092, "y": -21.360355728832886, "bCoef": 0.1, "trait": "line", "color": "000000" }, { "x": -19.677268833343327, "y": -31.12491075889031, "bCoef": 0.1, "trait": "line" }, { "x": -4.221589046055799, "y": -31.12491075889031, "bCoef": 0.1, "trait": "line" }, { "x": -46.95239528603762, "y": -5.904675941545419, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -36.916694316583346, "y": -31.43027306100875, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -26.419795159221735, "y": -5.904675941545419, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": -36.916694316583346, "y": -31.664142253691196, "bCoef": 0.1, "trait": "line", "curve": 0 }, { "x": 30.983863701759528, "y": -24.321575006018783, "bCoef": 0.1, "trait": "line" }, { "x": 49.39337857591484, "y": -24.628615435430476, "bCoef": 0.1, "trait": "line" }, { "x": -41.96159428746213, "y": -19.065729231178786, "bCoef": 0.1, "trait": "line", "color": "000000" }, { "x": -31.54332037219813, "y": -19.065729231178786, "bCoef": 0.1, "trait": "line", "color": "000000" }, { "x": 31.01746371253537, "y": -24.505870976967685, "bCoef": 0.1, "trait": "line" }, { "x": 39.003228546158624, "y": -17.99841779913329, "bCoef": 0.1, "trait": "line" }, { "x": 46.82471668748999, "y": -16.795111931236185, "bCoef": 0.1, "trait": "line" }, { "x": 49.40322926155528, "y": -12.240423968481075, "bCoef": 0.1, "trait": "line" }, { "x": 39.00322854615867, "y": -17.99841779913329, "bCoef": 0.1, "trait": "line", "curve": 95.8158139144815 }, { "x": 46.996617525760946, "y": -16.795111931236185, "bCoef": 0.1, "trait": "line", "curve": 95.8158139144815 }, { "x": 49.40322926155528, "y": -12.412324806752064, "bCoef": 0.1, "trait": "line" }, { "x": 30.983863701759528, "y": -14.505878722889813, "bCoef": 0.1, "trait": "line", "curve": -153.8158139144815, "color": "E30000" }, { "x": 49.39337857591484, "y": -12.394292053644282, "bCoef": 0.1, "trait": "line", "curve": -153.8158139144815 }, { "x": 18.45874501455389, "y": -26.131018368946442, "bCoef": 0.1, "trait": "line", "color": "0038BA", "curve": -84.07659521498204 }, { "x": 10.21571579466719, "y": -33.343668936347235, "bCoef": 0.1, "trait": "line", "color": "00B9FF", "curve": -84.07659521498204 }, { "x": -0.08807073019109168, "y": -24.070261063974723, "bCoef": 0.1, "trait": "line", "color": "ffffff", "curve": -91.88795850309086 }, { "x": -0.08807073019109168, "y": -15.827231844088104, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 10.21571579466719, "y": -7.584202624201508, "bCoef": 0.1, "trait": "line", "color": "00B9FF" }, { "x": 18.687717174976804, "y": -17.08659051816215, "bCoef": 0.1, "trait": "line", "color": "E30000" }, { "x": -22.75759472336085, "y": -14.645503850904786, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "00B9FF" }, { "x": -22.756401084879403, "y": -7.584202624201508, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "00B9FF" }, { "x": -18.65309219550693, "y": -20.979125106517287, "bCoef": 0.1, "trait": "line", "color": "FFC300" }, { "x": -10.391857255049498, "y": -20.979125106517287, "bCoef": 0.1, "trait": "line", "color": "FFC300" }, { "x": -13.48299321250687, "y": -23.039882411488943, "bCoef": 0.1, "trait": "line", "color": "FFDD00" }, { "x": -22.756401084879403, "y": -32.804437441546305, "bCoef": 0.1, "trait": "line", "color": "00B9FF" }, { "x": -7.300721297591874, "y": -32.804437441546305, "bCoef": 0.1, "trait": "line", "color": "00B9FF" }, { "x": -50.031527537573744, "y": -7.584202624201508, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "0038BA" }, { "x": -39.995826568119384, "y": -33.10979974366479, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "0038BA" }, { "x": -29.498927410757773, "y": -7.584202624201508, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -39.995826568119384, "y": -33.343668936347235, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "0038BA" }, { "x": 27.904731450223494, "y": -26.00110168867478, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 46.31424632437881, "y": -26.308142118086533, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -45.04072653899816, "y": -20.74525591383478, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -34.62245262373416, "y": -20.74525591383478, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 27.938331460999336, "y": -26.185397659623746, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 35.92409629462255, "y": -19.677944481789346, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 43.745584435953916, "y": -18.474638613892203, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 46.3240970100192, "y": -13.919950651137091, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 35.92409629462259, "y": -19.677944481789346, "bCoef": 0.1, "trait": "line", "curve": 95.8158139144815, "color": "ffffff" }, { "x": 43.917485274224916, "y": -18.474638613892203, "bCoef": 0.1, "trait": "line", "curve": 95.8158139144815, "color": "ffffff" }, { "x": 46.32409701001912, "y": -14.091851489408143, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": 27.904731450223494, "y": -16.18540540554588, "bCoef": 0.1, "trait": "line", "curve": -153.8158139144815, "color": "E30000" }, { "x": 46.31424632437881, "y": -14.073818736300296, "bCoef": 0.1, "trait": "line", "curve": -153.8158139144815, "color": "E30000" }, { "x": -50.031527537573744, "y": -7.584202624201508, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "0038BA" }, { "x": -39.995826568119384, "y": -33.10979974366479, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "0038BA" }, { "x": -30.758565568732507, "y": -10.764633488670384, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -32.265180564555095, "y": -14.466272837564102, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -22.75759472336085, "y": -26.744117281969828, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -22.756401084879403, "y": -14.389672679175597, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -22.757874682288726, "y": -34.14479856059838, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "00B9FF" }, { "x": -22.756401084879403, "y": -25.429657435022477, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "00B9FF" }, { "x": -23.222371498599852, "y": -20.979125106517287, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -18.124483767975896, "y": -20.979125106517287, "bCoef": 0.1, "trait": "line", "color": "ffffff" }, { "x": -33.73380734517113, "y": -17.94625156972916, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -35.24042234099376, "y": -21.647890918622867, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -36.81164366562489, "y": -25.33305873881823, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -38.31825866144756, "y": -29.034698087711945, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -48.507421683349314, "y": -11.380200752761128, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -47.03879490273315, "y": -15.28702918968512, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -45.737368994940844, "y": -18.356629745789682, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -44.2687422143248, "y": -22.263458182713673, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "ffffff" }, { "x": -42.96731630653245, "y": -25.43565328283338, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "FFC300" }, { "x": -41.49868952591641, "y": -29.34248171975733, "bCoef": 0.1, "trait": "line", "curve": 0, "color": "FFC300" }, { "x": -0.5590994633589617, "y": 37.349552314451046, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 183, "color": "B7950B" }, { "x": -0.5590994633589617, "y": 37.349552314451046, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -183, "color": "9A7D0A" }, { "x": -5.3150792904836806, "y": 51.25622435247381, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DEEAF7" }, { "x": -6.638503785482442, "y": 54.97520007824053, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DEEAF7" }, { "x": -0.11322635456605212, "y": 59.08884090121095, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -10, "color": "D5E0ED" }, { "x": -4.720581812093059, "y": 55.86833774928187, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -10, "color": "D5E0ED" }, { "x": 4.758832881083009, "y": 55.86833774928187, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -10, "color": "C0CAD6" }, { "x": -0.5590994633589617, "y": 59.08884090121095, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -10, "color": "C0CAD6" }, { "x": 6.823005889738852, "y": 55.02060961345936, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -63, "color": "F1C40F" }, { "x": -6.637934882214694, "y": 54.907497547118254, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -63, "color": "DEEAF7" }, { "x": -5.3150792904836806, "y": 51.255096615022744, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DEEAF7", "curve": 0 }, { "x": -8.584815421631788, "y": 58.79159216201563, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DEEAF7", "curve": 0 }, { "x": 4.059783775477598, "y": 36.03439394040985, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -5, "color": "C0CAD6" }, { "x": -6.357198728134421, "y": 45.83212770053302, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -5, "color": "C0CAD6" }, { "x": 6.4993550310069566, "y": 39.6991908899415, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 9, "color": "969EA8" }, { "x": -1.272792575648566, "y": 47.05620959678137, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 9, "color": "969EA8" }, { "x": 5.296035641256083, "y": 48.63834210366676, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -7, "color": "969EA8" }, { "x": 1.9795513795245938, "y": 44.006376551074425, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -7, "color": "969EA8" }, { "x": -0.6750013977032836, "y": 40.463290183694085, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 10, "color": "C0CAD6" }, { "x": 8.061113973304487, "y": 58.79159216201563, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -30, "color": "969EA8" }, { "x": -0.11322635456605212, "y": 61.52105110973402, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -30, "color": "969EA8" }, { "x": -0.5590994633589617, "y": 37.28184978332874, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 186, "color": "B7950B" }, { "x": -0.5590994633589617, "y": 37.28184978332874, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -186, "color": "9A7D0A" }, { "x": -4.941687949199007, "y": 21.130853477955924, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "D5E0ED" }, { "x": 5.04012853744095, "y": 55.18166713424833, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -36, "color": "F1C40F" }, { "x": 8.5826874148066, "y": 29.70644361334824, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 10, "color": "969EA8" }, { "x": 4.726967779117729, "y": 56.17928288119228, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 10, "color": "969EA8" }, { "x": -0.26185072416367916, "y": 20.01770434714426, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -185, "color": "969EA8" }, { "x": -0.5590994633589617, "y": 37.349552314451046, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -185, "color": "969EA8" }, { "x": -0.26185072416367916, "y": 19.554758588237206, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -187, "color": "969EA8" }, { "x": -0.5590994633589617, "y": 36.90068470274798, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -187, "color": "969EA8" }, { "x": 5.139072723189798, "y": 51.34531561110737, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "969EA8" }, { "x": 6.842451504729979, "y": 55.900968065539374, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "969EA8" }, { "x": -0.11322635456605212, "y": 61.52105110973402, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -30, "color": "D5E0ED" }, { "x": -8.584815421631788, "y": 58.49434342282035, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -30, "color": "D5E0ED" }, { "x": -6.467056969656483, "y": 54.93550235355072, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "DEEAF7", "curve": 65 }, { "x": 6.5926385705800215, "y": 54.93550235355072, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "C0CAD6", "curve": 65 }, { "x": 5.267590477870073, "y": 52.02346865978136, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "969EA8" }, { "x": 8.061113973304487, "y": 59.08884090121095, "cMask": [ "wall" ], "cGroup": [ "wall" ], "color": "969EA8" }, { "x": 1.9906506183062618, "y": 43.74147760477658, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -2, "color": "C0CAD6" }, { "x": -5.159606724528459, "y": 50.63207861375088, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -2, "color": "DEEAF7" }, { "x": -9.638697315142423, "y": 29.56237958966273, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -10, "color": "D5E0ED" }, { "x": -4.601386178194048, "y": 56.17928288119228, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": -10, "color": "D5E0ED" }, { "x": -0.26185072416367916, "y": 20.01770434714426, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 187, "color": "C0CAD6" }, { "x": -0.5590994633589617, "y": 37.349552314451046, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 187, "color": "C0CAD6" }, { "x": -0.26185072416367916, "y": 19.554758588237206, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 185, "color": "C0CAD6" }, { "x": -0.5590994633589617, "y": 36.90068470274798, "cMask": [ "wall" ], "cGroup": [ "wall" ], "curve": 185, "color": "C0CAD6" }, { "x": -63.289672233066554, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000", "curve": -20 }, { "x": 0, "y": 74.53477046088976, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "000000", "curve": -70 }, { "x": 0, "y": -65.83134266832663, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": -20, "color": "000000" }, { "x": 62.80192091690749, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 20, "color": "000000" }, { "x": 0, "y": 74.53477046088976, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "00B9FF", "curve": -55 }, { "x": 62.80192091690749, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": -55, "color": "00B9FF" }, { "x": -63.289672233066554, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -55 }, { "x": 0, "y": 74.53477046088976, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -55 }, { "x": 0, "y": -65.83134266832663, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 45, "color": "E30000" }, { "x": 62.80192091690749, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 45, "color": "E30000" }, { "x": -63.289672233066554, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "0038BA", "curve": -45 }, { "x": 0, "y": -65.83134266832663, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": -45, "color": "0038BA" }, { "x": 0, "y": 74.53477046088976, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "00B9FF", "curve": -45 }, { "x": 62.80192091690749, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": -45, "color": "00B9FF" }, { "x": -63.289672233066554, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -45 }, { "x": 0, "y": 74.53477046088976, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff", "curve": -45 }, { "x": -63.289672233066554, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "0038BA", "curve": -63 }, { "x": 0, "y": -65.83134266832663, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": -63, "color": "0038BA" }, { "x": 0, "y": -65.83134266832663, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 63, "color": "E30000" }, { "x": 62.80192091690749, "y": -42.04047603625605, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "curve": 63, "color": "E30000" }, { "x": -66, "y": 14, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "x": 66, "y": 14, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "x": -66, "y": 12, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff" }, { "x": 66, "y": 12, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff" }, { "x": -66, "y": 10, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff" }, { "x": 66, "y": 10, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "color": "ffffff" } ], "segments": [ { "v0": 0, "v1": 1, "vis": false, "color": "F8F8F8", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "v0": 2, "v1": 3, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, -80 ], "y": -90 }, { "v0": 3, "v1": 4, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": -735 }, { "v0": 4, "v1": 5, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, 80 ], "y": 90 }, { "v0": 6, "v1": 7, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, -90 ], "y": -90 }, { "v0": 7, "v1": 8, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": 735 }, { "v0": 8, "v1": 9, "curve": 0, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, 80 ], "y": 90 }, { "v0": 10, "v1": 11, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": -550 }, { "v0": 12, "v1": 13, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": -550 }, { "v0": 14, "v1": 15, "vis": true, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "y": 240 }, { "v0": 16, "v1": 17, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": 550 }, { "v0": 18, "v1": 19, "vis": true, "color": "ffffff", "bCoef": 1.15, "cMask": [ "ball" ], "trait": "ballArea", "x": 550 }, { "v0": 20, "v1": 21, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "y": -240 }, { "v0": 22, "v1": 23, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5 }, { "v0": 24, "v1": 25, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5 }, { "v0": 26, "v1": 27, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5 }, { "v0": 28, "v1": 29, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5 }, { "v0": 30, "v1": 31, "curve": 0, "vis": true, "color": "E30000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -550 }, { "v0": 32, "v1": 33, "curve": 0, "vis": true, "color": "0038BA", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 550 }, { "v0": 34, "v1": 35, "curve": -93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 36, "v1": 37, "curve": 93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 35, "v1": 37, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480 }, { "v0": 38, "v1": 39, "curve": 93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 40, "v1": 41, "curve": -93.241608812827, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 42, "v1": 43, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 45, "v1": 44, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 44, "v1": 45, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 47, "v1": 46, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 46, "v1": 47, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 50, "v1": 49, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480 }, { "v0": 49, "v1": 50, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480 }, { "v0": 52, "v1": 51, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480 }, { "v0": 51, "v1": 52, "curve": 180, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": -480 }, { "v0": 54, "v1": 55, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, -80 ], "y": -90 }, { "v0": 55, "v1": 56, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": -735 }, { "v0": 56, "v1": 57, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ -700, 80 ], "y": 90 }, { "v0": 58, "v1": 59, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, -90 ], "y": -90 }, { "v0": 59, "v1": 60, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "x": 735 }, { "v0": 60, "v1": 61, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.2, "cMask": [ "red", "blue", "ball" ], "trait": "goalPost", "pos": [ 700, 80 ], "y": 90 }, { "v0": 62, "v1": 63, "vis": false, "color": "F8F8F8", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "v0": 64, "v1": 65, "curve": 179.42829117403, "color": "696969", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "blueKO" ], "curveF": 0.0049891420830909 }, { "v0": 67, "v1": 66, "curve": 180, "color": "696969", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO" ], "curveF": 6.1232339957368e-17 }, { "v0": 72, "v1": 73, "curve": -180, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0 }, { "v0": 74, "v1": 75, "curve": 180, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0 }, { "v0": 76, "v1": 77, "curve": -180, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0 }, { "v0": 78, "v1": 79, "curve": 180, "vis": true, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 0 }, { "v0": 81, "v1": 80, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "v0": 82, "v1": 83, "color": "B6B6B8", "bCoef": 0.1, "cMask": [ "red", "blue" ], "cGroup": [ "redKO", "blueKO" ] }, { "v0": 84, "v1": 85, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5 }, { "v0": 86, "v1": 87, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": -556.5 }, { "v0": 88, "v1": 89, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5 }, { "v0": 90, "v1": 91, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 1, "cMask": [ "ball" ], "trait": "ballArea", "x": 556.5 }, { "v0": 93, "v1": 94, "curve": -84.07659521498204, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 94, "v1": 95, "curve": -91.88795850309086, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 95, "v1": 96, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 96, "v1": 97, "curve": -91.55037058586078, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 97, "v1": 98, "curve": -84.07659521498204, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 99, "v1": 100, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 101, "v1": 102, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 104, "v1": 105, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 106, "v1": 107, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 108, "v1": 109, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 110, "v1": 111, "curve": 153.8158139144815, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 112, "v1": 113, "curve": 0, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 114, "v1": 115, "curve": -95.90294409328301, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 116, "v1": 117, "curve": 51.897982537356484, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 118, "v1": 119, "curve": 43.746959222501616, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 121, "v1": 122, "curve": -153.8158139144815, "vis": true, "color": "000000", "bCoef": 0.1, "trait": "line" }, { "v0": 123, "v1": 124, "curve": -84.07659521498204, "vis": true, "color": "0038BA", "bCoef": 0.1, "trait": "line" }, { "v0": 124, "v1": 125, "curve": -91.88795850309086, "vis": true, "color": "00B9FF", "bCoef": 0.1, "trait": "line" }, { "v0": 125, "v1": 126, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 126, "v1": 127, "curve": -91.55037058586078, "vis": true, "color": "00B9FF", "bCoef": 0.1, "trait": "line" }, { "v0": 127, "v1": 128, "curve": -84.07659521498204, "vis": true, "color": "E30000", "bCoef": 0.1, "trait": "line" }, { "v0": 129, "v1": 130, "curve": 0, "vis": true, "color": "00B9FF", "bCoef": 0.1, "trait": "line" }, { "v0": 131, "v1": 132, "curve": 0, "vis": true, "color": "FFC300", "bCoef": 0.1, "trait": "line" }, { "v0": 134, "v1": 135, "curve": 0, "vis": true, "color": "00B9FF", "bCoef": 0.1, "trait": "line" }, { "v0": 136, "v1": 137, "curve": 0, "vis": true, "color": "0038BA", "bCoef": 0.1, "trait": "line" }, { "v0": 138, "v1": 139, "curve": 0, "vis": true, "color": "0038BA", "bCoef": 0.1, "trait": "line" }, { "v0": 140, "v1": 141, "curve": 153.8158139144815, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 142, "v1": 143, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 144, "v1": 145, "curve": -95.90294409328301, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 146, "v1": 147, "curve": 51.897982537356484, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 148, "v1": 149, "curve": 43.746959222501616, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 151, "v1": 152, "curve": -153.8158139144815, "vis": true, "color": "E30000", "bCoef": 0.1, "trait": "line" }, { "v0": 153, "v1": 154, "curve": 0, "vis": true, "color": "0038BA", "bCoef": 0.1, "trait": "line" }, { "v0": 155, "v1": 156, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 157, "v1": 158, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 159, "v1": 160, "curve": 0, "vis": true, "color": "00B9FF", "bCoef": 0.1, "trait": "line" }, { "v0": 161, "v1": 162, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 163, "v1": 164, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 165, "v1": 166, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 167, "v1": 168, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 169, "v1": 170, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "trait": "line" }, { "v0": 171, "v1": 172, "curve": 0, "vis": true, "color": "FFC300", "bCoef": 0.1, "trait": "line" }, { "v0": 175, "v1": 176, "color": "DEEAF7", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 87 }, { "v0": 177, "v1": 178, "curve": 10.000000000001128, "color": "D5E0ED", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 179, "v1": 180, "curve": 9.999999999996477, "color": "C0CAD6", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 183, "v1": 184, "curve": 0, "color": "DEEAF7", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 87 }, { "v0": 185, "v1": 186, "curve": 4.999999999998416, "color": "C0CAD6", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 187, "v1": 188, "curve": -8.999999999999758, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 189, "v1": 190, "curve": 6.999999999997472, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 192, "v1": 193, "curve": 30.25563141229323, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 110 }, { "v0": 198, "v1": 199, "curve": -10.000000000000195, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 200, "v1": 201, "curve": 185.00000000000813, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -245 }, { "v0": 202, "v1": 203, "curve": 186.9999999999939, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -245 }, { "v0": 204, "v1": 205, "curve": 0, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 206, "v1": 207, "curve": 30.255631412295948, "color": "D5E0ED", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 110 }, { "v0": 208, "v1": 209, "curve": -64.99999999999702, "color": "C0CAD6", "cMask": [ "wall" ], "cGroup": [ "wall" ], "y": 48 }, { "v0": 210, "v1": 211, "curve": 0, "color": "969EA8", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 212, "v1": 213, "curve": 2.0000000000010463, "color": "C0CAD6", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 214, "v1": 215, "curve": 10.000000000000014, "color": "D5E0ED", "cMask": [ "wall" ], "cGroup": [ "wall" ] }, { "v0": 216, "v1": 217, "curve": -186.9999999999994, "color": "C0CAD6", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -245 }, { "v0": 218, "v1": 219, "curve": -184.999999999996, "color": "C0CAD6", "cMask": [ "wall" ], "cGroup": [ "wall" ], "x": -245 }, { "v0": 220, "v1": 221, "curve": -70, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 220, "v1": 222, "curve": -20, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 221, "v1": 223, "curve": -70, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 223, "v1": 222, "curve": 20, "vis": true, "color": "000000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 224, "v1": 225, "curve": -55, "vis": true, "color": "00B9FF", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 226, "v1": 227, "curve": -55, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 229, "v1": 228, "curve": 45, "vis": true, "color": "E30000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 230, "v1": 231, "curve": -45, "vis": true, "color": "0038BA", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 232, "v1": 233, "curve": -62.03471354128121, "vis": true, "color": "00B9FF", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 234, "v1": 235, "curve": -61.70002979712457, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "x": 480 }, { "v0": 236, "v1": 237, "curve": -63, "vis": true, "color": "0038BA", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 239, "v1": 238, "curve": 63, "vis": true, "color": "E30000", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line" }, { "v0": 240, "v1": 241, "curve": 0, "vis": true, "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14 }, { "v0": 242, "v1": 243, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14 }, { "v0": 244, "v1": 245, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.1, "cMask": [ "wall" ], "trait": "line", "y": 14 } ], "planes": [ { "normal": [ 0, 1 ], "dist": -350, "bCoef": 0.1 }, { "normal": [ -1, 0 ], "dist": -784, "bCoef": 0.1 }, { "normal": [ 0, -1 ], "dist": -320, "cMask": [ "ball" ] }, { "normal": [ 0, -1 ], "dist": -350, "bCoef": 0.1 }, { "normal": [ 1, 0 ], "dist": -777, "bCoef": 0.1 }, { "normal": [ 0, 1 ], "dist": -320, "cMask": [ "ball" ] } ], "goals": [ { "p0": [ -707.5, -90 ], "p1": [ -707.5, 90 ], "team": "red", "color": "ffffff" }, { "p0": [ 707.5, 90 ], "p1": [ 707.5, -90 ], "team": "blue", "color": "ffffff" } ], "discs": [ { "radius": 5.5, "invMass": 0, "pos": [ -700, 90 ], "color": "00B9FF", "trait": "goalPost", "y": 90 }, { "radius": 5.5, "invMass": 0, "pos": [ -700, -90 ], "color": "00B9FF", "trait": "goalPost", "y": -85, "x": -560 }, { "radius": 5.5, "invMass": 0, "pos": [ 700, 90 ], "color": "00B9FF", "trait": "goalPost", "y": 90 }, { "radius": 5.5, "invMass": 0, "pos": [ 700, -90 ], "color": "00B9FF", "trait": "goalPost", "y": -85, "vis": true } ], "playerPhysics": { "bCoef": 0.1, "acceleration": 0.11, "kickingAcceleration": 0.083, "kickStrength": 5 }, "ballPhysics": { "radius": 6.25, "bCoef": 0.4, "invMass": 1.5, "color": "FFFFFF" }, "spawnDistance": 200, "traits": { "ballArea": { "vis": false, "bCoef": 1, "cMask": [ "ball" ] }, "goalPost": { "radius": 8, "invMass": 0, "bCoef": 0.5 }, "goalNet": { "vis": true, "bCoef": 0.1, "cMask": [ "ball" ] }, "line": { "vis": true, "bCoef": 0.1, "cMask": [ "" ] }, "kickOffBarrier": { "vis": false, "bCoef": 0.1, "cGroup": [ "redKO", "blueKO" ], "cMask": [ "red", "blue" ] } }, "joints": [], "redSpawnPoints": [], "blueSpawnPoints": [] }'; // Read above

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
	"cp": {
		"name": 'Cantera CD Palestino',
		"type": Uniform.COUNTRY,
		"emoji": '🔴🟢',
		"angle": 90,
		"textcolor": 0x14FF00,
		"color1": 0x000000,
		"color2": 0x136602,
		"color3": 0x000000,
		"angle2": 230,
		"textcolor2": 0xFF0000,
		"color21": 0x000000,
		"color22": 0x3D0000,
		"color23": 0xC40000,
	},
	"esp": {
		"name": 'Espo City',
		"type": Uniform.COUNTRY,
		"emoji": '🟢🟡 ',
		"angle": 120,
		"textcolor": 0xffffff,
		"color1": 0x22A800,
		"color2": 0x0C7800,
		"color3": 0x044D0B,
		"angle2": 120,
		"textcolor2": 0x3B3B3B,
		"color21": 0xD4FF00,
		"color22": 0xCFC800,
		"color23": 0xBFA500,
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
	"tul": {
		"name": 'Los Tulachis',
		"type": Uniform.COUNTRY,
		"emoji": '🟢🟢',
		"angle": 90,
		"textcolor": 0xFFFFFF,
		"color1": 0x48FF24,
		"color2": 0x2EFF82,
		"color3": null,
		"angle2": 90,
		"textcolor2": 0xFFFFFF,
		"color21": 0x000000,
		"color22": 0x00770C,
		"color23": null,
	},
	"pms": {
		"name": 'Palmeiras',
		"type": Uniform.COUNTRY,
		"emoji": '🟢⚪🟢',
		"angle": 60,
		"textcolor": 0xFCFDFC,
		"color1": 0x006134,
		"color2": 0x006134,
		"color3": 0x006134,
		"angle2": 0,
		"textcolor2": 0x006134,
		"color21": 0x000000,
		"color22": 0x000000,
		"color23": 0x000000,
	},
	"trn": {
		"name": 'Los Tourinos F.C',
		"type": Uniform.COUNTRY,
		"emoji": '🟤⚫',
		"angle": 60,
		"textcolor": 0x4A1E00,
		"color1": 0x000000,
		"color2": 0x000000,
		"color3": 0x000000,
		"angle2": 60,
		"textcolor2": 0x919090,
		"color21": 0x301300,
		"color22": 0x301300,
		"color23": 0x301300,
	},
	"ns": {
		"name": 'Nápoles',
		"type": Uniform.COUNTRY,
		"emoji": '⚪🔵⚪',
		"angle": 0,
		"textcolor": 0xFFFFFF,
		"color1": 0x00B3FF,
		"color2": 0x00B3FF,
		"color3": 0x00B3FF,
		"angle2": 0,
		"textcolor2": 0xFF4545,
		"color21": 0xFFFFFF,
		"color22": 0xFFFFFF,
		"color23": 0xFFFFFF,
	},
	"bha": {
		"name": 'Brighton',
		"type": Uniform.COUNTRY,
		"emoji": '⚪🔵',
		"angle": 0,
		"textcolor": 0xFFBB00,
		"color1": 0x0054C6,
		"color2": 0xFFFFFF,
		"color3": 0x0054C6,
		"angle2": 0,
		"textcolor2": 0x000000,
		"color21": 0xFF640A,
		"color22": 0xE83F0C,
		"color23": null,
	},
	"tvli": {
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

	/* ESTANDAR */
		"red": {
		"name": 'Rojo',
		"type": Uniform.CLUBLA,
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
				`${nameHome} vs ${nameGuest} - Sala 1.hbr2`,
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
    room.sendAnnouncement("「📣」 𝐄𝐬𝐭𝐚𝐬 𝐣𝐮𝐠𝐚𝐧𝐝𝐨 𝐥𝐚 𝐂𝐨𝐩𝐚 𝐝𝐞 𝐏𝐫𝐞𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚. ¡𝐁𝐮𝐞𝐧𝐚 𝐒𝐮𝐞𝐫𝐭𝐞!", player, 0xFFFFFF, "bold");
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
	room.sendAnnouncement("👋👋 Bienvenido a la sala 1 de AFCS " + player.name + " ! Buena suerte en tu OFI.", player.id, 0x08CEFF, "bold");
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