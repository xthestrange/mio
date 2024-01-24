// ===============================|  Princi x4 |===============================
//		Version: 1.0
//      author: Raio (JuanRo#8877)
//		Build Date: 07/07/2023
//      Last Update: 11/11/2023
//		* Princi x4 (prx4)
//      Features:
//          0.1 Commands:
//            0.1 User Commands:    
//              0.1 [!help] Muestra todos los comandos disponibles
//              0.2 [!bb], [!nv] Te kickea para salir mas rapido de la sala.
//              0.3 [!liga] Muestra el discord de la liga
//              0.4 [!firmo] Comando para firmar en un partido oficial.
//              0.5 [!firmas] Muestra la lista de los jugadores que firmaron.
//            0.2 Admin Commands:
//              0.1 [!rr] Reinica el juego (Para el juego y lo empieza de nuevo.)
//              0.2 [!clearbans] Borra todos los bans de la sala.
//              0.3 [!swap] Cambia de lado a los equipos.
//              0.4 [!x4] Ejecuta el mapa oficial futsal x4 by bazinga!
//              0.5 [!training] Ejecuta el mapa de entrenamiento prx4
//              0.6 [!x7] Ejecuta el mapa de entrenamiento de FAH
//              0.7 [!rrs] Swapea y tira rr.
//              0.8 [!oficial] Activa el modo Oficial para partidos OFICIALES (El uso de este fuera de un partido Ofical conllevara a SANCION)           
//              0.9 [!setcamiseta] Te muestra como funciona el nuevo comando para la camiseta.
//              0.10 [![ID de lacamiseta]2|3 red|blue] Ej: !rn2 red pondra la camiseta visitante de Rio Negro al Red.
//              0.12 [!camisetasx4] Muestra las camisetas de x4.
//              0.13 [!amarilla [ID]] Le saca amarilla al jugador.
//              0.14 [!roja [ID]] Le saca roja al jugador.
//              0.15 [!setpassword [contraseña]] Cambía la contraseña del host.
//              0.16 [!clearpassword] Borrá las contraseña del host.
//              0.17 [!du [ID]] Muestra los nombres utilizados por el jugador cuando entro al host.
//              
//            0.3 Misc:
//              0.1 [!admin (contraseña)] Te dara admin si pones la contraseña.
//              0.2 [t ] Team chat, todo lo que escribas despues de la t sera enviado a tus compañeros de equipo
//              0.3 [@@(nombre)] Si pones un nombre despues de este se enviara un mensaje privado al jugador que nombraste.
//      Changelog:
// ------------------------------------------------
// https://www.haxball.com/headless
// =========================================================================

var roomName = "⚫🔴[𝐇★𝐒] All Stars cl | privada 2"; // Nombre de la sala, cambiar siempre entre ""
var maxPlayers = 30; // maximo de jugadores en la sala, dejar 30 por defecto
var password = null // password siempre entre "", en caso de no definir password dejar null.
var roomPublic = true; // room publico: dejar true, room oculto: dejar false.

var room = HBInit({
	roomName: roomName,
	maxPlayers: maxPlayers,
	public: roomPublic,
    roomPassword: password,
	geo: { "code": "CL", "lat": -35.6, "lon": -71.5 },
	noPlayer: true
});

// Estadios


    // Bazinga
var futsalx4 = `{"name":"Futsal x4 ; By Bazinga!","width":800,"height":350,"bg":{"type":"hockey","width":700,"height":320,"kickOffRadius":80},"vertexes":[{"x":-700,"y":321,"cMask":["ball"]},{"x":-700,"y":-319,"cMask":["ball"]},{"x":699,"y":319,"cMask":["ball"]},{"x":601,"y":-320,"cMask":["ball"]},{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-700,"y":-99,"bCoef":0.1,"cMask":["ball"]},{"x":-750,"y":-99,"bCoef":0.1,"cMask":["ball"]},{"x":-750,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":749,"y":-90,"bCoef":0.1,"cMask":["ball"]},{"x":749,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":699,"y":90,"bCoef":0.1,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":321,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":-99,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":-319,"bCoef":1.25,"cMask":["ball"]},{"x":-700,"y":321,"bCoef":2,"cMask":["ball"]},{"x":699,"y":319,"bCoef":2,"cMask":["ball"]},{"x":699,"y":90,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":319,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":-321,"bCoef":1.25,"cMask":["ball"]},{"x":699,"y":-90,"bCoef":1.25,"cMask":["ball"]},{"x":601,"y":-320,"bCoef":0,"cMask":["ball"]},{"x":601,"y":-320,"bCoef":0,"cMask":["ball"]},{"x":-699,"y":-320,"bCoef":2,"cMask":["ball"]},{"x":699,"y":-321,"bCoef":2,"cMask":["ball"]},{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-150,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":90,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-710,"y":90,"cMask":["ball"]},{"x":-710,"y":321,"cMask":["ball"]},{"x":-710,"y":90,"cMask":["ball"]},{"x":-710,"y":321,"cMask":["ball"]},{"x":-710,"y":-315,"cMask":["ball"]},{"x":-710,"y":-99,"cMask":["ball"]},{"x":710,"y":-90,"cMask":["ball"]},{"x":709,"y":-317,"cMask":["ball"]},{"x":709,"y":-90,"cMask":["ball"]},{"x":709,"y":94,"cMask":["ball"]},{"x":709,"y":319,"cMask":["ball"]},{"x":-699,"y":274,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":-141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-506,"y":-141,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-699,"y":-274,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":698,"y":273,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":140,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":140,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":-142,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":505,"y":-142,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":698,"y":-275,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":-701,"y":90,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-701,"y":-90,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":699,"y":90,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":699,"y":-90,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":-713,"y":90,"cMask":["ball"]},{"x":-713,"y":321,"cMask":["ball"]},{"x":-713,"y":-315,"cMask":["ball"]},{"x":-713,"y":-99,"cMask":["ball"]},{"x":712,"y":-317,"cMask":["ball"]},{"x":712,"y":-90,"cMask":["ball"]},{"x":712,"y":94,"cMask":["ball"]},{"x":712,"y":319,"cMask":["ball"]},{"x":704,"y":-317,"cMask":["ball"]},{"x":704,"y":-90,"cMask":["ball"]},{"x":704,"y":-317,"cMask":["ball"]},{"x":704,"y":-90,"cMask":["ball"]},{"x":704,"y":94,"cMask":["ball"]},{"x":704,"y":319,"cMask":["ball"]},{"x":704,"y":94,"cMask":["ball"]},{"x":704,"y":319,"cMask":["ball"]},{"x":-705,"y":90,"cMask":["ball"]},{"x":-705,"y":321,"cMask":["ball"]},{"x":-705,"y":90,"cMask":["ball"]},{"x":-705,"y":321,"cMask":["ball"]},{"x":-705,"y":-315,"cMask":["ball"]},{"x":-705,"y":-99,"cMask":["ball"]},{"x":-705,"y":-315,"cMask":["ball"]},{"x":-705,"y":-99,"cMask":["ball"]},{"x":-699,"y":319.88890075683594,"bCoef":2,"cMask":["ball"]},{"x":699,"y":318.88890075683594,"bCoef":2,"cMask":["ball"]}],"segments":[{"v0":8,"v1":9,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":9,"v1":10,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":10,"v1":11,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":12,"v1":13,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":13,"v1":14,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":14,"v1":15,"bCoef":0.1,"cMask":["ball"],"color":"F8F8F8"},{"v0":4,"v1":5,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":5,"v1":6,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"F8F8F8"},{"v0":6,"v1":5,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":6,"v1":7,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":16,"v1":17,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":18,"v1":19,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":22,"v1":23,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":24,"v1":25,"bCoef":1.25,"cMask":["ball"],"color":"F8F8F8"},{"v0":26,"v1":27,"bCoef":0,"cMask":["ball"],"color":"F8F8F8"},{"v0":28,"v1":29,"bCoef":2,"cMask":["ball"],"color":"F8F8F8"},{"v0":30,"v1":31,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":32,"v1":33,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"F8F8F8"},{"v0":42,"v1":43,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":44,"v1":45,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":46,"v1":47,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":49,"v1":50,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":51,"v1":52,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":54,"v1":53,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":56,"v1":55,"bCoef":0.1,"curve":10,"curveF":11.430052302761343,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":58,"v1":57,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":59,"v1":60,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":61,"v1":62,"bCoef":0.1,"curve":10,"curveF":11.430052302761343,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":63,"v1":64,"bCoef":0.1,"curve":89.99999999999997,"curveF":1.0000000000000004,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":65,"v1":66,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":67,"v1":68,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO"],"color":"F8F8F8"},{"v0":69,"v1":70,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":71,"v1":72,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":73,"v1":74,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":75,"v1":76,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":77,"v1":78,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":79,"v1":80,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":81,"v1":82,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":83,"v1":84,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":85,"v1":86,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":87,"v1":88,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":89,"v1":90,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":91,"v1":92,"vis":false,"cMask":["ball"],"color":"F8F8F8"},{"v0":93,"v1":94,"bCoef":2,"cMask":["ball"],"color":"F8F8F8"}],"planes":[{"normal":[0,1],"dist":-320,"cMask":["ball"]},{"normal":[0,-1],"dist":-317.5,"cMask":["ball"]},{"normal":[0,1],"dist":-350,"bCoef":0.1},{"normal":[0,-1],"dist":-350,"bCoef":0.1},{"normal":[1,0],"dist":-800,"bCoef":0.1},{"normal":[-1,0],"dist":-800,"bCoef":0.1}],"goals":[{"p0":[-707,-94],"p1":[-707,86],"team":"red"},{"p0":[706,90],"p1":[706,-90],"team":"blue"}],"discs":[{"radius":6.25,"bCoef":0.4,"invMass":1.5,"color":"FFCC00","cGroup":["ball","kick","score"]},{"pos":[-700,89],"radius":6,"invMass":0,"color":"FF0000"},{"pos":[-700,-99],"radius":6,"invMass":0,"color":"FF0000"},{"pos":[700,90],"radius":6,"invMass":0,"color":"33FF"},{"pos":[701,-89],"radius":6,"invMass":0,"color":"33FF"}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","spawnDistance":350}`
    // Training prx4
var trainingprx4 = `{"name":"Prx4 Professional Training By ElBanaNooB","width":765,"height":350,"bg":{"type":"hockey","cornerRadius":0,"kickOffRadius":0},"vertexes":[{"x":0,"y":-320,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":-700,"y":320,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":-700,"y":-90,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":-700,"y":-320,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":-700,"y":320,"cMask":["ball"],"cGroup":["wall"]},{"x":700,"y":320,"cMask":["ball"],"cGroup":["wall"]},{"x":700,"y":90,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":700,"y":320,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":700,"y":-320,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":700,"y":-90,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":-700,"y":-320,"cMask":["ball"],"cGroup":["wall"]},{"x":700,"y":-320,"cMask":["ball"],"cGroup":["wall"]},{"x":-706.5,"y":90,"cMask":["ball"]},{"x":-706.5,"y":320,"cMask":["ball"]},{"x":-706.5,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":-320,"cMask":["ball"]},{"x":706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":90,"cMask":["ball"]},{"x":706.5,"y":320,"cMask":["ball"]},{"x":-700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":280,"bCoef":0.1,"cMask":["wall"],"color":"B62626"},{"x":-480,"y":60,"bCoef":0.1,"cMask":["wall"],"color":"B62626"},{"x":-700,"y":-280,"bCoef":0.1,"cMask":["wall"],"color":"B62626"},{"x":-480,"y":-60,"bCoef":0.1,"cMask":["wall"],"color":"B62626"},{"x":700,"y":280,"bCoef":0.1,"cMask":["wall"],"color":"2C2689"},{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"],"color":"2C2689"},{"x":700,"y":-280,"bCoef":0.1,"cMask":["wall"],"color":"2C2689"},{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"],"color":"2C2689"},{"x":480,"y":70,"bCoef":0.1,"cMask":["wall"],"color":"2C2689"},{"x":480,"y":-70,"bCoef":0.1,"cMask":["wall"],"color":"2C2689"},{"x":480,"y":1,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-1,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":3,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":-3,"bCoef":0.1,"cMask":["wall"]},{"x":480,"y":2,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":1,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":-1,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":3,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":-3,"bCoef":0.1,"cMask":["wall"]},{"x":-480,"y":2,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-735,"y":-90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-735,"y":90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":-700,"y":90,"bCoef":1.5,"cMask":["red","blue","ball"]},{"x":700,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":-90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":735,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":700,"y":90,"bCoef":0.2,"cMask":["red","blue","ball"]},{"x":-735,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":765.1,"y":-15,"bCoef":0.5,"cMask":["red","blue"]},{"x":735,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":765.1,"y":15,"bCoef":0.5,"cMask":["red","blue"]},{"x":0,"y":320,"bCoef":0,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-175.29719582617892,"y":-319.73502985279646,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":-175.29719582617892,"y":319.26497014720354,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":-166.79719582617892,"y":-350.73502985279646,"cMask":["ball"]},{"x":-166.79719582617892,"y":349.26497014720354,"cMask":["ball"]},{"x":-706.5,"y":-320,"cMask":["ball"]},{"x":-706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":-320,"cMask":["ball"]},{"x":706.5,"y":-90,"cMask":["ball"]},{"x":706.5,"y":90,"cMask":["ball"]},{"x":706.5,"y":320,"cMask":["ball"]},{"x":735,"y":-350,"bCoef":0.5,"cMask":["red","blue"]},{"x":185.70280417382108,"y":-319.73502985279646,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":185.70280417382108,"y":319.26497014720354,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":177.20280417382108,"y":-348.73502985279646,"cMask":["ball"]},{"x":177.20280417382108,"y":351.26497014720354,"cMask":["ball"]},{"x":-153.29719582617892,"y":-319.73502985279646,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":-153.29719582617892,"y":319.26497014720354,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":163.70280417382108,"y":-320.73502985279646,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":163.70280417382108,"y":318.26497014720354,"bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"x":-158.29719582617892,"y":7.764970147203547,"cMask":["ball"]},{"x":168.70280417382108,"y":7.764970147203547,"cMask":["ball"]},{"x":-158.29719582617892,"y":-9.235029852796453,"cMask":["ball"]},{"x":168.70280417382108,"y":-9.235029852796453,"cMask":["ball"]},{"x":-158.29719582617892,"y":-0.7350298527964534,"cMask":["ball"]},{"x":168.70280417382108,"y":-0.7350298527964534,"cMask":["ball"]},{"x":-161.79719582617892,"y":-350.73502985279646,"cMask":["ball"]},{"x":-161.79719582617892,"y":349.26497014720354,"cMask":["ball"]},{"x":172.20280417382108,"y":-348.73502985279646,"cMask":["ball"]},{"x":172.20280417382108,"y":351.26497014720354,"cMask":["ball"]},{"x":-700,"y":90,"bCoef":0.1,"cMask":["wall"]},{"x":-700,"y":-90,"bCoef":0.1,"cMask":["wall"]},{"x":-726,"y":-125,"bCoef":1.5,"cMask":["ball"]},{"x":-726,"y":105,"bCoef":1.5,"cMask":["ball"]},{"x":-732.5,"y":-125,"bCoef":1.5,"cMask":["ball"]},{"x":-732.5,"y":105,"bCoef":1.5,"cMask":["ball"]},{"x":734,"y":-115,"bCoef":2.5,"cMask":["ball"]},{"x":734,"y":115,"bCoef":2.5,"cMask":["ball"]},{"x":700,"y":90,"bCoef":0.1,"cMask":["wall"],"color":"0013FF"},{"x":700,"y":-90,"bCoef":0.1,"cMask":["wall"],"color":"0013FF"},{"x":-734,"y":97,"bCoef":1.5,"cMask":["ball"]},{"x":-708,"y":97,"bCoef":1.5,"cMask":["ball"]},{"x":-735,"y":-97,"bCoef":1.5,"cMask":["ball"]},{"x":-709,"y":-97,"bCoef":1.5,"cMask":["ball"]},{"x":706,"y":96,"bCoef":1.5,"cMask":["ball"]},{"x":732,"y":96,"bCoef":1.5,"cMask":["ball"]},{"x":705,"y":-98,"bCoef":1.5,"cMask":["ball"]},{"x":731,"y":-98,"bCoef":1.5,"cMask":["ball"]},{"x":720,"y":-122,"bCoef":1.5,"cMask":["ball"]},{"x":720,"y":108,"bCoef":1.5,"cMask":["ball"]},{"x":382.5039999999999,"y":-256.5008,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"color":"000000","vis":true},{"x":502.5039999999999,"y":-256.5008,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"color":"000000","vis":true},{"x":382.5039999999999,"y":-276.5008,"bCoef":0.1,"cMask":["ball"],"color":"000000","vis":true},{"x":492.5039999999999,"y":-276.5008,"bCoef":0.1,"cMask":["ball"],"color":"000000","vis":true},{"x":382.5039999999999,"y":-150.5008,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":362.5039999999999,"y":-150.5008,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":502.5039999999999,"y":-150.5008,"bCoef":0.1,"cMask":["ball"]},{"x":522.5039999999999,"y":-248.5008,"bCoef":0.1,"cMask":["ball"]},{"x":520,"y":-150.5008,"bCoef":0.1,"cMask":["ball"]},{"x":382.5039999999999,"y":-150.5008,"bCoef":0.1,"cMask":["ball"]},{"x":362.5039999999999,"y":-252.90861384951475,"bCoef":0.1,"cMask":["ball"]},{"x":362.5039999999999,"y":-150.5008,"bCoef":0.1,"cMask":["ball"]},{"x":392.5039999999999,"y":-134.5008,"bCoef":0.1,"cMask":["ball"]},{"x":351.71016775897976,"y":-135.29463224102017,"bCoef":0.1,"cMask":["ball"]},{"x":382.5039999999999,"y":-253.27857777777777,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":362.5039999999999,"y":-253.27857777777777,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":522.4336410860116,"y":-251.65777112427185,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":502.43364108601156,"y":-251.65777112427185,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":520,"y":-151.16775860690436,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":501.8933722015096,"y":-151.16775860690436,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":492.517826969865,"y":-134.5008,"bCoef":0.1,"cMask":["ball"]},{"x":534.6587999610191,"y":-134.5008,"cMask":["ball"]},{"x":337.5039999999999,"y":-150.5008,"bCoef":0.1,"cMask":["ball"]},{"x":337.5039999999999,"y":-281.5008,"bCoef":0.1,"cMask":["ball"]},{"x":546.5039999999999,"y":-281.5008,"bCoef":0.1,"cMask":["ball"]},{"x":546.5039999999999,"y":-150.5008,"bCoef":0.1,"cMask":["ball"]},{"x":317.5039999999999,"y":-150.5008,"bCoef":0.1,"cMask":["ball"],"curve":0},{"x":317.5039999999999,"y":-281.57487407407405,"bCoef":0.1,"cMask":["ball"]},{"x":342.5039999999999,"y":-301.5008,"bCoef":0.1,"cMask":["ball"]},{"x":537.5039999999999,"y":-301.5008,"bCoef":0.1,"cMask":["ball"]},{"x":566.5039999999999,"y":-276.05635555555557,"bCoef":0.1,"cMask":["ball"]},{"x":566.5039999999999,"y":-146.5008,"bCoef":0.1,"cMask":["ball"],"curve":10},{"x":545,"y":-114.5008,"bCoef":0.1,"cMask":["ball"],"curve":10},{"x":341,"y":-115.47564238134431,"bCoef":0.1,"cMask":["ball"],"curve":0},{"x":346.50085876142384,"y":-139.097790326599,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":333.6636834167308,"y":-128.83682350673544,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":565.6456033089182,"y":-151.097790326599,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":545.6456033089182,"y":-151.68128072186113,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":337.5752395648156,"y":-277.0346786189741,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":317.5752395648156,"y":-277.0346786189741,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":565.7199841123099,"y":-276.5347253766208,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":545.7199841123099,"y":-276.5347253766208,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":441.5039999999999,"y":-281.78613893398006,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}},"_selected":"segment"},{"x":441.5039999999999,"y":-303.37528355867903,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}},"_selected":"segment"},{"x":496.97726275997996,"y":260.1027402135877,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"color":"000000","vis":true},{"x":376.977691757705,"y":259.78186754426713,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"color":"000000","vis":true},{"x":496.92378398175987,"y":280.10266871396686,"bCoef":0.1,"cMask":["ball"],"color":"000000","vis":true},{"x":386.92417722967446,"y":279.80853543375633,"bCoef":0.1,"cMask":["ball"],"color":"000000","vis":true},{"x":497.26070028454666,"y":154.10311916157795,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":517.2606287849258,"y":154.15659793979805,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":377.2611292822713,"y":153.78224649225734,"bCoef":0.1,"cMask":["ball"]},{"x":356.9991547686137,"y":251.7284173658953,"bCoef":0.1,"cMask":["ball"]},{"x":358,"y":153.72876771403728,"bCoef":0.1,"cMask":["ball"]},{"x":497.26070028454666,"y":154.10311916157795,"bCoef":0.1,"cMask":["ball"]},{"x":516.9867965466826,"y":256.56404568331993,"bCoef":0.1,"cMask":["ball"]},{"x":517.2606287849258,"y":154.15659793979805,"bCoef":0.1,"cMask":["ball"]},{"x":487.3035190569331,"y":138.0764369721645,"bCoef":0.1,"cMask":["ball"]},{"x":528.0950828018583,"y":138.97934659060783,"bCoef":0.1,"cMask":["ball"]},{"x":496.98587878535994,"y":256.88052951074883,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":516.9858072857392,"y":256.9340082889689,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":357.06107188314024,"y":254.8855653394931,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":377.0610003835193,"y":254.93904411771322,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":358,"y":154.39735671800784,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":377.8699714912078,"y":154.45083549622788,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":387.2900496346032,"y":137.80900610859138,"bCoef":0.1,"cMask":["ball"]},{"x":345.1492272966285,"y":137.69632372116268,"cMask":["ball"]},{"x":542.2605394103998,"y":154.2234464125732,"bCoef":0.1,"cMask":["ball"]},{"x":541.910253413058,"y":285.2229780900569,"bCoef":0.1,"cMask":["ball"],"_data":{"mirror":{}}},{"x":332.9110005840954,"y":284.66412485765693,"bCoef":0.1,"cMask":["ball"]},{"x":333.2612865814373,"y":153.66459318017317,"bCoef":0.1,"cMask":["ball"]},{"x":562.260467910779,"y":154.2769251907933,"bCoef":0.1,"cMask":["ball"],"curve":-10},{"x":561.9099838438883,"y":285.3505306775377,"bCoef":0.1,"cMask":["ball"]},{"x":536.8567925097432,"y":305.2095368958811,"bCoef":0.1,"cMask":["ball"]},{"x":341.85748963104595,"y":304.6881188082351,"bCoef":0.1,"cMask":["ball"]},{"x":312.9256301955653,"y":279.166221098778,"bCoef":0.1,"cMask":["ball"]},{"x":313.27205383670196,"y":149.61112870187722,"bCoef":0.1,"cMask":["ball"]},{"x":331,"y":121.6593740016686,"bCoef":0.1,"cMask":["ball"]},{"x":545.2504139084817,"y":127.17407096789216,"bCoef":0.1,"cMask":["ball"],"curve":-10},{"x":542.262084322082,"y":154.82044300442314,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":562.2620128224612,"y":154.87392178264324,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":314.11815538772396,"y":154.21039789463626,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":334.11652367043087,"y":154.84736498215145,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":541.8509562386644,"y":280.7566821850859,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":561.8508847390437,"y":280.810160963306,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":313.70836414873486,"y":279.6466856202692,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":333.708292649114,"y":279.7001643984893,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":437.9098622322079,"y":285.2302263572112,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":437.8521341783406,"y":306.8192938011274,"bCoef":-2.7,"cMask":["ball"],"color":"0013FF","_data":{"mirror":{}}},{"x":-317.4367343979609,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-312.4195302170841,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-318.9374812993552,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-310.91878331568967,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-320.43822820074956,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-309.4180364142953,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-404.007533782787,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-398.9903296019102,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-405.50828068418133,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-397.48958270051577,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-407.00902758557567,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-395.9888357991214,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-484.2245130292772,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-479.20730884840043,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-485.72525993067154,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-477.706561947006,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-487.2260068320659,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-476.2058150456116,"y":-310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-240.4367343979609,"y":-270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-235.41953021708412,"y":-270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-241.93748129935523,"y":-270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-233.91878331568967,"y":-270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-243.43822820074956,"y":-270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-232.41803641429527,"y":-270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-240.4367343979609,"y":270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-235.41953021708412,"y":270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-241.93748129935523,"y":270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-233.91878331568967,"y":270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-243.43822820074956,"y":270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-232.41803641429527,"y":270,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-317.4367343979609,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-312.4195302170841,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-318.9374812993552,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-310.91878331568967,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-320.43822820074956,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-309.4180364142953,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-404.007533782787,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-398.9903296019102,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-405.50828068418133,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-397.48958270051577,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-407.00902758557567,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-395.9888357991214,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-484.2245130292772,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-479.20730884840043,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-485.72525993067154,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-477.706561947006,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180,"color":"C30404"},{"x":-487.2260068320659,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180},{"x":-476.2058150456116,"y":310,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-180}],"segments":[{"v0":1,"v1":2,"color":"FFFFFF","bCoef":0.2,"cMask":["red","blue","ball"]},{"v0":2,"v1":3,"color":"FFFFFF","bCoef":0.2,"cMask":["red","blue","ball"]},{"v0":3,"v1":4,"color":"FFFFFF","bCoef":0.2,"cMask":["red","blue","ball"]},{"v0":5,"v1":6,"color":"FFFFFF","bCoef":0.2,"cMask":["red","blue","ball"]},{"v0":6,"v1":7,"color":"FFFFFF","bCoef":0.2,"cMask":["red","blue","ball"]},{"v0":7,"v1":8,"color":"FFFFFF","bCoef":0.2,"cMask":["red","blue","ball"]},{"v0":9,"v1":10,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"v0":11,"v1":12,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"v0":13,"v1":14,"color":"FFFFFF","cMask":["ball"],"cGroup":["wall"]},{"v0":15,"v1":16,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"v0":17,"v1":18,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"v0":19,"v1":20,"color":"FFFFFF","cMask":["ball"],"cGroup":["wall"]},{"v0":21,"v1":22,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":23,"v1":24,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":25,"v1":26,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":27,"v1":28,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":34,"v1":33,"curve":93.241608812827,"color":"B62626","bCoef":0.1,"cMask":["wall"],"curveF":0.9449654112221421},{"v0":35,"v1":36,"curve":93.241608812827,"color":"B62626","bCoef":0.1,"cMask":["wall"],"curveF":0.9449654112221421},{"v0":34,"v1":36,"color":"B62626","bCoef":0.1,"cMask":["wall"]},{"v0":37,"v1":38,"curve":93.241608812827,"color":"2C2689","bCoef":0.1,"cMask":["wall"],"curveF":0.9449654112221421},{"v0":40,"v1":39,"curve":93.241608812827,"color":"2C2689","bCoef":0.1,"cMask":["wall"],"curveF":0.9449654112221421},{"v0":41,"v1":42,"color":"2C2689","bCoef":0.1,"cMask":["wall"]},{"v0":44,"v1":43,"curve":180,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":43,"v1":44,"curve":180,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":46,"v1":45,"curve":180,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":45,"v1":46,"curve":180,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":49,"v1":48,"curve":180,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":48,"v1":49,"curve":180,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":51,"v1":50,"curve":180,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":50,"v1":51,"curve":180,"color":"FFFFFF","bCoef":0.1,"cMask":["wall"],"curveF":6.123233995736766e-17},{"v0":53,"v1":54,"vis":false,"color":"FFFFFF","bCoef":1.5,"cMask":["red","blue","ball"]},{"v0":54,"v1":55,"vis":false,"color":"FFFFFF","bCoef":0.2,"cMask":["red","blue","ball"]},{"v0":55,"v1":56,"vis":false,"color":"FFFFFF","bCoef":1.5,"cMask":["red","blue","ball"]},{"v0":57,"v1":58,"vis":false,"color":"FFFFFF","bCoef":0.2,"cMask":["red","blue","ball"]},{"v0":58,"v1":59,"vis":false,"color":"FFFFFF","bCoef":0.2,"cMask":["red","blue","ball"]},{"v0":59,"v1":60,"vis":false,"color":"FFFFFF","bCoef":0.2,"cMask":["red","blue","ball"]},{"v0":62,"v1":63,"vis":false,"color":"FFFFFF","bCoef":0.5,"cMask":["red","blue"]},{"v0":64,"v1":65,"vis":false,"color":"FFFFFF","bCoef":0.5,"cMask":["red","blue"]},{"v0":67,"v1":68,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"v0":69,"v1":70,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":71,"v1":72,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":73,"v1":74,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":75,"v1":76,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":78,"v1":79,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"v0":80,"v1":81,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":82,"v1":83,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"v0":84,"v1":85,"color":"FFFFFF","bCoef":1.15,"cMask":["ball"],"cGroup":["wall"]},{"v0":86,"v1":87,"color":"FFFFFF","cMask":["ball"]},{"v0":88,"v1":89,"color":"FFFFFF","cMask":["ball"]},{"v0":90,"v1":91,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":92,"v1":93,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":94,"v1":95,"vis":false,"color":"FFFFFF","cMask":["ball"]},{"v0":96,"v1":97,"color":"F80000","bCoef":0.1,"cMask":["wall"]},{"v0":98,"v1":99,"vis":false,"color":"FFFFFF","bCoef":1.5,"cMask":["ball"]},{"v0":100,"v1":101,"vis":false,"color":"FFFFFF","bCoef":1.5,"cMask":["ball"]},{"v0":102,"v1":103,"vis":false,"color":"FFFFFF","bCoef":2.5,"cMask":["ball"]},{"v0":104,"v1":105,"color":"0013FF","bCoef":0.1,"cMask":["wall"]},{"v0":106,"v1":107,"vis":false,"color":"FFFFFF","bCoef":1.5,"cMask":["ball"]},{"v0":108,"v1":109,"vis":false,"color":"FFFFFF","bCoef":1.5,"cMask":["ball"]},{"v0":110,"v1":111,"vis":false,"color":"FFFFFF","bCoef":1.5,"cMask":["ball"]},{"v0":112,"v1":113,"vis":false,"color":"FFFFFF","bCoef":1.5,"cMask":["ball"]},{"v0":114,"v1":115,"vis":false,"color":"FFFFFF","bCoef":1.5,"cMask":["ball"]},{"v0":116,"v1":117,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"y":-260},{"v0":118,"v1":119,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"],"y":-280},{"v0":120,"v1":121,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[382.5039999999999,-150.5008],"b":[362.5039999999999,-150.5008],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":117,"v1":122,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":119,"v1":123,"curve":81.75943593406684,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":123,"v1":124,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":116,"v1":125,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":118,"v1":126,"curve":-80.62049531877175,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":126,"v1":127,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":125,"v1":128,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":127,"v1":129,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":130,"v1":131,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[382.5039999999999,-253.27857777777777],"b":[362.5039999999999,-253.27857777777777],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":132,"v1":133,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[522.4336410860116,-251.65777112427185],"b":[502.43364108601156,-251.65777112427185],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":134,"v1":135,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[520,-151.16775860690436],"b":[501.8933722015096,-151.16775860690436],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":135,"v1":136,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":134,"v1":137,"vis":true,"color":"000000","cMask":["ball"]},{"v0":129,"v1":138,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":138,"v1":139,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":139,"v1":140,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":140,"v1":141,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":141,"v1":137,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":142,"v1":143,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":143,"v1":144,"curve":70.28362908261883,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":144,"v1":145,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":145,"v1":146,"curve":70.4588905798732,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":146,"v1":147,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":147,"v1":148,"curve":10,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":142,"v1":149,"curve":0,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":150,"v1":151,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[346.50085876142384,-139.097790326599],"b":[333.6636834167308,-128.83682350673544],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":152,"v1":153,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[565.6456033089182,-151.097790326599],"b":[545.6456033089182,-151.68128072186113],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":154,"v1":155,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[337.5752395648156,-277.0346786189741],"b":[317.5752395648156,-277.0346786189741],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":156,"v1":157,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[565.7199841123099,-276.5347253766208],"b":[545.7199841123099,-276.5347253766208],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":158,"v1":159,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[441.5039999999999,-281.78613893398006],"b":[441.5039999999999,-303.37528355867903],"radius":null,"center":[null,null],"from":null,"to":null}},"_selected":true},{"v0":160,"v1":161,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"],"cGroup":["wall"],"y":-260},{"v0":162,"v1":163,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"],"y":-280},{"v0":164,"v1":165,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[497.26070028454666,154.10311916157795],"b":[517.2606287849258,154.15659793979805],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":161,"v1":166,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":163,"v1":167,"curve":81.75943593406684,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":167,"v1":168,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":160,"v1":169,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":162,"v1":170,"curve":-80.62049531877175,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":170,"v1":171,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":169,"v1":172,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":171,"v1":173,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":174,"v1":175,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[496.98587878535994,256.88052951074883],"b":[516.9858072857392,256.9340082889689],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":176,"v1":177,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[357.06107188314024,254.8855653394931],"b":[377.0610003835193,254.93904411771322],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":178,"v1":179,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[358,154.39735671800784],"b":[377.8699714912078,154.45083549622788],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":179,"v1":180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":178,"v1":181,"vis":true,"color":"000000","cMask":["ball"]},{"v0":173,"v1":182,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":182,"v1":183,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":183,"v1":184,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":184,"v1":185,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":185,"v1":181,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":186,"v1":187,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":187,"v1":188,"curve":70.28362908261883,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":188,"v1":189,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":189,"v1":190,"curve":70.4588905798732,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":190,"v1":191,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":191,"v1":192,"curve":13.947058323515964,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":186,"v1":193,"curve":-10,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball"]},{"v0":194,"v1":195,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[542.262084322082,154.82044300442314],"b":[562.2620128224612,154.87392178264324],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":196,"v1":197,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[314.11815538772396,154.21039789463626],"b":[334.11652367043087,154.84736498215145],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":198,"v1":199,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[541.8509562386644,280.7566821850859],"b":[561.8508847390437,280.810160963306],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":200,"v1":201,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[313.70836414873486,279.6466856202692],"b":[333.708292649114,279.7001643984893],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":202,"v1":203,"vis":true,"color":"0013FF","bCoef":-2.7,"cMask":["ball"],"_data":{"mirror":{},"arc":{"a":[437.9098622322079,285.2302263572112],"b":[437.8521341783406,306.8192938011274],"radius":null,"center":[null,null],"from":null,"to":null}}},{"v0":204,"v1":205,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":205,"v1":204,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":206,"v1":207,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":207,"v1":206,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":208,"v1":209,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":209,"v1":208,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":210,"v1":211,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":211,"v1":210,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":212,"v1":213,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":213,"v1":212,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":214,"v1":215,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":215,"v1":214,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":216,"v1":217,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":217,"v1":216,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":218,"v1":219,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":219,"v1":218,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":220,"v1":221,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":221,"v1":220,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":222,"v1":223,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":223,"v1":222,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":224,"v1":225,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":225,"v1":224,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":226,"v1":227,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":227,"v1":226,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":-310},{"v0":228,"v1":229,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":270},{"v0":229,"v1":228,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":270},{"v0":230,"v1":231,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":270},{"v0":231,"v1":230,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":270},{"v0":232,"v1":233,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":270},{"v0":233,"v1":232,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":270},{"v0":234,"v1":235,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":235,"v1":234,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":236,"v1":237,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":237,"v1":236,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":238,"v1":239,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":239,"v1":238,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":240,"v1":241,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":241,"v1":240,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":242,"v1":243,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":243,"v1":242,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":244,"v1":245,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":245,"v1":244,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":246,"v1":247,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":247,"v1":246,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":248,"v1":249,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":249,"v1":248,"curve":-180,"vis":true,"color":"C30404","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":250,"v1":251,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310},{"v0":251,"v1":250,"curve":-180,"vis":true,"color":"000000","bCoef":0.1,"cMask":["ball","red","blue"],"y":310}],"planes":[{"normal":[0,1],"dist":-350,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-350,"canvas_rect":[-520.646145730821,-238.88470215884726,520.646145730821,238.88470215884726],"a":[-520.646145730821,-350],"b":[520.646145730821,-350]}}},{"normal":[-1,0],"dist":-765.1,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-765.1,"canvas_rect":[-520.646145730821,-238.88470215884726,520.646145730821,238.88470215884726],"a":[765.1,-238.88470215884726],"b":[765.1,238.88470215884726]}}},{"normal":[0,-1],"dist":-320,"cMask":["ball"],"_data":{"extremes":{"normal":[0,-1],"dist":-320,"canvas_rect":[-520.646145730821,-238.88470215884726,520.646145730821,238.88470215884726],"a":[-520.646145730821,320],"b":[520.646145730821,320]}}},{"normal":[0,-1],"dist":-350,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-350,"canvas_rect":[-520.646145730821,-238.88470215884726,520.646145730821,238.88470215884726],"a":[-520.646145730821,350],"b":[520.646145730821,350]}}},{"normal":[0,1],"dist":-320,"cMask":["ball"],"_data":{"extremes":{"normal":[0,1],"dist":-320,"canvas_rect":[-520.646145730821,-238.88470215884726,520.646145730821,238.88470215884726],"a":[-520.646145730821,-320],"b":[520.646145730821,-320]}}}],"goals":[],"discs":[{"radius":0.01,"invMass":0,"pos":[-765.1,0],"color":"0","bCoef":440},{"radius":0.1,"invMass":0,"pos":[765.1,0],"color":"0","bCoef":440},{"radius":5.5,"invMass":0,"pos":[-700,90]},{"radius":5.5,"invMass":0,"pos":[-700,-90]},{"radius":5.5,"invMass":0,"pos":[700,90]},{"radius":5.5,"invMass":0,"pos":[700,-90]},{"radius":6.25,"invMass":1.5,"pos":[372.49612082022736,-142.40944929493583],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99,"_data":{"mirror":{}}},{"radius":6.25,"invMass":1.5,"pos":[-77.0287359503328,-124.61412231483982],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99},{"radius":6.25,"invMass":1.5,"pos":[84.35493837261126,-122.41672773128779],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99},{"radius":6.25,"invMass":1.5,"pos":[-86.5903643356128,107.62062502800828],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99},{"radius":6.25,"invMass":1.5,"pos":[89.06092082022727,109.53295070506428],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99},{"radius":6.25,"invMass":1.5,"pos":[-358.60625079449284,-72.94094658671177],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99},{"radius":6.25,"invMass":1.5,"pos":[-360.61359944038094,95.53615070506429],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99},{"radius":6.25,"invMass":1.5,"pos":[-478.97587917977296,1.057750705064251],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99},{"radius":6.25,"invMass":1.5,"pos":[511.6305208202274,-139.4094492949358],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99},{"radius":6.25,"invMass":1.5,"pos":[532.9281208202277,129.55855070506422],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99},{"radius":6.25,"invMass":1.5,"pos":[342.6305208202274,126.5905507050642],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99},{"radius":6.25,"invMass":1.5,"pos":[-238.5174858992609,4.5802993509522345],"color":"FFFFFF","bCoef":0.4,"cMask":["wall","red","blue"],"cGroup":["ball","kick","score","ball"],"damping":0.99}],"playerPhysics":{"bCoef":0.1,"acceleration":0.11,"kickingAcceleration":0.083},"ballPhysics":"disc0","cameraFollow":"player","redSpawnPoints":[[-90,0]],"blueSpawnPoints":[[370,0]],"traits":{},"joints":[],"canBeStored":false}`;
    // Training fah
var futsalx3 = `{"name":"Futsal x3  by Bazinga from HaxMaps","width":620,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},{"x":0,"y":80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":550,"y":80,"bCoef":0.1,"trait":"line"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":240,"y":256,"bCoef":0.1,"trait":"line"},{"x":120,"y":224,"bCoef":0.1,"trait":"line"},{"x":120,"y":256,"bCoef":0.1,"trait":"line"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":256,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":550},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":66,"v1":67,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":67,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":73,"v1":72,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":89,"v1":88,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":91,"v1":90,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":94,"v1":95,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":123,"v1":122,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":127,"v1":126,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":126,"v1":127,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":128,"v1":129,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FF6666","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"FF6666","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666FF","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1},{"normal":[-1,0],"dist":-620,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"}}`
// Variables

class RecInfo {
    constructor () {
        this.date = Date.now();
        this.scores = room.getScores();
        this.playerComp = getStartingLineups();
        this.goals = [];
        this.rec = room.startRecording();
        this.touchArray = [];
    }
}

class PlayerComposition {
    constructor(player, auth, timeEntry, timeExit) {
        this.player = player;
        this.auth = auth;
        this.timeEntry = timeEntry;
        this.timeExit = timeExit;
        this.inactivityTicks = 0;
        this.GKTicks = 0;
    }
}

class Goal {
    constructor(time, team, striker, assist) {
        this.time = time;
        this.team = team;
        this.striker = striker;
        this.assist = assist;
    }
}

class BallTouch {
    constructor(player, time, goal, position) {
        this.player = player;
        this.time = time;
        this.goal = goal;
        this.position = position;
    }
}

const camisetasx4 = [
 
]
const camisetasTodas = [

]

var discordWebhookFirmas = 'https://discord.com/api/webhooks/1139015845230682112/Jw_GOuUir__hnTapbr35Qiq0SLxUVh4IIAuav4it44HKRBlkhUwJY22SXeaSGtS-36Ns'
var gameWebhook = 'https://discord.com/api/webhooks/1139016029176074330/nvr1350ZDU3a2z2tDeOpLNWtv9Ede1wXYvmYIweBVBW6c_p6m9h569VMZlWgJEFpAFc5'
var binIdString = '657fafe8dc7465401884929a'
var apiKeyString = '$2a$10$BOY2tpyIcRXpyu1bdgFineBFOiUeS.RNty4HzIyJJVmWlN9jbbw8m'
var firmas = [];
var firmasIds = [];
var authArray = [];
var players = [];
var teamRed = [];
var teamBlue = [];
var teamSpec = [];
var amarillas = [];
var rojas = [];
var amarillasReport = [];
var GKTicksRed = [];
var GKTicksBlue = [];
var camisetasNow = [
    {id: "red", nombre: "Red team", uniform: [{ angle: 0, mainColor: [0xED6A5A], avatarColor: 0xffffff }]},
    {id: "blue", nombre: "Blue team", uniform:[{ angle: 0, mainColor: [0x5995ED], avatarColor: 0xffffff }]}
];
var locvisalt = ["loc", "vis", "alt"];
var tipCami = {red: "loc", blue: "loc"}
var keysDU = {};
var possession = [0, 0];
var actionZoneHalf = [0, 0];
var mapSelect = 0;
var playerRadius = 15;
var ballRadius = 6.25;
var triggerDistance = playerRadius + ballRadius + 0.01;
var speedCoefficient = 100 / (5 * (0.99 ** 60 + 1));
var ballSpeed = 0;
var n = '\n'
var lastTouches = Array(2).fill(null);
var lastTeamTouched;
var GKRed;
var GKBlue;
var fetchRecordingVariable = true;
var oficialMode = false;
var enjuego = false;
var vallaRed = false;
var vallaBlue = false;
var recInfo = new RecInfo();

// Room Functions

room.onPlayerJoin = function (player) {
    authArray[player.id] = [player.auth, player.conn]
    welcomeMsg(player);
    updateTeams();
    if (keysDU[player.conn] != undefined) {        
          var valorBuscado = player.name;
          var valores = Object.values(keysDU[player.conn]);
          
          if (valores.includes(valorBuscado)) {
            return;
          } else {
            keysDU[player.conn][player.name] = player.name
            Request.put()
          }
          
    } else {
        keysDU[player.conn] = {0: player.name}
        Request.put()
    }
}

room.onPlayerLeave = function (player) {
    updateTeams();
    Request.put()
}

room.onPlayerAdminChange = function (changedPlayer) {

}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    handleLineupChangeTeamChange(changedPlayer);
    updateTeams();
}

room.onGameStart = function (byPlayer) {
    recInfo = new RecInfo();
    possession = [0, 0];
    actionZoneHalf = [0, 0];
    lastTouches = Array(2).fill(null);
    GKTicksRed = [];
    GKTicksBlue = [];
    GKRed = undefined;
    GKBlue = undefined;
    enjuego = true;
    if (oficialMode == true) {
        announce("Comienza el partido.", null, null, "bold", 2)
        announce(`${camisetasNow[0].nombre} vs ${camisetasNow[1].nombre}`)
        announce("La partida esta siendo grabada, sonrian :).")
    }
}

room.onGameStop = function (byPlayer) {
    updateTeams();
    announce("Final del partido!", null, null,"bold", 2)
    recInfo.rec = room.stopRecording();
    fetchSummaryEmbed(recInfo);
    if (fetchRecordingVariable) {
        setTimeout((gameEnd) => { fetchRecording(gameEnd); }, 500, recInfo);
    }
    if (oficialMode == true) {
        announce("La partida fue grabada y enviada a discord.")
        announce(`ID de la grabación: ${getIdReport()}`)
    }
    enjuego = false;
}

room.onGameTick = function () {
    const scores = room.getScores();
    recInfo.scores = scores;
    getLastTouchOfTheBall();
    getGameStats();
    getGK();
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    updateTeams();
}

room.onTeamGoal = function (team) {
    ballSpeed = getBallSpeed();
    var goalString = getGoalString(team);
    announce(
        goalString,
        null,
        team == 1 ? 0xED6A5A : 0x5995ED,
        null,
        1
    );
    let scores = recInfo.scores
    team == 1 ? vallaBlue == false ? vallaBlue = getTimeGame(scores.time) : null : null
    team == 2 ? vallaRed == false ? vallaRed = getTimeGame(scores.time) : null : null
}

room.onPlayerBallKick = function (player) {
        var ballPosition = room.getBallPosition();
        if (recInfo.touchArray.length == 0 || player.id != recInfo.touchArray[recInfo.touchArray.length - 1].player.id) {
            lastTeamTouched = player.team;
            recInfo.touchArray.push(
                new BallTouch(
                    player,
                    recInfo.scores.time,
                    getGoalGame(),
                    ballPosition
                )
            );
            lastTouches[0] = checkGoalKickTouch(
                recInfo.touchArray,
                recInfo.touchArray.length - 1,
                getGoalGame()
            );
            lastTouches[1] = checkGoalKickTouch(
                recInfo.touchArray,
                recInfo.touchArray.length - 2,
                getGoalGame()
            );
        }
};

room.onPlayerChat = function (player, message) {
    if (message.startsWith("!")) {
        message = message.substr(1);
		let args = message.split(" ");
		let superAdminCode = "hsadmins";

        if (args[0] == "admin" && args.length == 1) {
			
		}
        else if (args[0] == "admin" && args.length == 2) {
            if (args[1] == superAdminCode) {
				room.setPlayerAdmin(player.id, true);
				announce("[✅] Has obtenido admininistrador por contraseña correctamente.", player.id, 0x00ff00, "normal", 2);
			}
        }
        else if (args[0] == "help") {
            announce("Comandos disponibles: !help, !bb, !nv, !admin, !liga, !firmo, !firmas, t [msg], @@[Jugador] [msg]", player.id, null, "small", 2)
            if (player.admin) { 
                announce("Comandos de Admin: !rr, !swap, !clearbans, !oficial, !x4, !setpassword, !clearpassword, !camisetasx4, !rrs, !training, !x3, !amarilla [id], !roja [id].", player.id, 0xffff00, "small")
                announce("El uso erroneo del OFICIAL se sancionara.", player.id, null, "small")
            }
        }
        else if (args[0] == "bb" || args[0] == "nv" && args.length == 1) {
            room.kickPlayer(player.id, "Adios!! [👋]")
        }
        else if (args[0] == "liga") {
            announce("Discord de HS: https://discord.gg/8TKVyDZhyB", player.id, null, null, 2)
        }
        else if (args[0] == "firmas") {
           if (oficialMode == true) { 
            announce(`Firmas: ${firmas}.`, player.id, 0x00ff00, "bold", 2)
           }
           else {
            announce("[✖] El modo OFICIAL no fue activado.", player.id, 0xff0000, "bold", 2)
           }
        }
        else if (args[0] == "firmo") {
            if (oficialMode == true) {
                if (firmasIds.indexOf(player.id) == -1) {

                    firmas.length > 0 ? firmas.push(` ${player.name}`) : firmas.push(player.name)
										firmasIds.push(player.id)
                    discordLogFirmas(player);
                    announce(`[✅] ${player.name}, firmó correctamente.`, null, 0x00ff00, "bold", 2)
                }
                else {
                    announce("[✖] Ya firmaste anteriormente.", player.id, 0xff0000, "bold", 2)
                }
            }
            else {
                announce("[✖] El modo OFICIAL no fue activado.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "rr") {
            if (player.admin) {
                room.stopGame();
                room.startGame();
                announce(`[✅] ${player.name}, reinició el partido.`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] Debes ser un administrador para utilizar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "swap") {
            if (player.admin) {
                let players = room.getPlayerList().filter((player) => player.id != 0);
                if (players.length == 0) return false;
                players.forEach(function (player) {
                    if (player.team == 1) {
                        room.setPlayerTeam(player.id, 2);
                    }
                    if (player.team == 2) {
                        room.setPlayerTeam(player.id, 1);
                    }
                });
                announce(`[🔄] Los equipos fueron cambiados de lado por ${player.name}.`, null, 0x00ff00, "bold", 2);
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "rrs") {
            if (player.admin) {
                room.stopGame();
                let players = room.getPlayerList().filter((player) => player.id != 0);
                if (players.length == 0) return false;
                players.forEach(function (player) {
                    if (player.team == 1) {
                        room.setPlayerTeam(player.id, 2);
                    }
                    if (player.team == 2) {
                        room.setPlayerTeam(player.id, 1);
                    }
                });
                room.startGame();
                announce(`[✅] Se intercambiaron los equipos y se reinició el juego por: ${player.name}.`, null, 0x00ff00, "bold", 2);
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "clearbans") {
            if (player.admin) {
                room.clearBans();
                announce(`[✅] ${player.name}, borró los baneos.`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "oficial") {
            if (player.admin) {
                if (oficialMode == false) {
                    oficialMode = true;
                    announce(`[✅] ${player.name}, activo el modo OFICIAL. El comando !firmo esta habilitado.`, null, 0x00ff00, "bold", 2)
                    discordLogOficial(player)
                }
                else if (oficialMode == true) {
                    oficialMode = false;
                    firmas = [];
                    discordLogOficial(player)
                    announce(`[✅] ${player.name}, desactivo el modo OFICIAL.`, null, 0x00ff00, "bold", 2)
                }
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "x4") {
            if (player.admin) {
                room.stopGame();
                room.setCustomStadium(futsalx4);
                room.startGame();
                announce(`[✅] ${player.name}, cambió el mapa a "Futsal x4 ; by Bazinga!"`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "training") {
            if (player.admin) {
                room.stopGame();
                room.setCustomStadium(trainingprx4);
                room.startGame();
                announce(`[✅] ${player.name}, cambió el mapa a "HS Professional Training By ElBanaNooB"`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "x3") {
            if (player.admin) {
                room.stopGame();
                room.setCustomStadium(futsalx3);
                room.startGame();
                announce(`[✅] ${player.name}, cambió el mapa a "Futsal x3  by Bazinga from HaxMaps"`, null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "setpassword" && args.length == 1) {
            if (player.admin) {
             announce("Uso: !setpassword [contraseña]", player.id, null, "bold", 2)           
            }
            else {
             announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            } 
        }
        else if (args[0] == "setpassword" && args.length == 2) {
             if (player.admin) {
              room.setPassword(`${args[1]}`)
              announce(`[✅] La contraseña fue cambiada correctamente.`, null, 0x00ff00, "bold", 2)       
              announce(`[MP] Ahora la contraseña es: ${args[1]}.`, player.id, null, "bold", 0);   
             }
             else {
              announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
             } 
        }
        else if (args[0] == "clearpassword") {
            if (player.admin) {
                room.setPassword(null)
                announce(`[✅] ${player.name}, borró la contraseña.`, null, 0x00ff00, "bold", 2) 
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            } 
        }
        else if (args[0] == "camisetasx4") {
            if (player.admin) {
                var camisetas = [];
                for (i = 0; i < camisetasx4.length; i++) {
                    if (i != 0) {                    
                        camisetas.push(` ${camisetasx4[i].nombre}: ${camisetasx4[i].id}`)
                    }    
                    else {
                        camisetas.push(`${camisetasx4[i].nombre}: ${camisetasx4[i].id}`)
                    }
                }
                announce(`${camisetas}.`, player.id)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "setcamiseta") {
            if (player.admin) {
                announce("Uso: ![ID]|2|3 red|blue    Ej: !oym red", player.id)
                announce("Este comando pondría la camiseta local de oym.")
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "swapcolors") {
            if (player.admin) {
                let res = locvisalt.indexOf(tipCami.red)
                let res2 = locvisalt.indexOf(tipCami.blue)
                let res3 = tipCami.red
                tipCami.red = tipCami.blue
                tipCami.blue = res3
                room.setTeamColors(1, camisetasNow[1].uniform[res2].angle, camisetasNow[1].uniform[res2].avatarColor, camisetasNow[1].uniform[res2].mainColor)
                room.setTeamColors(2, camisetasNow[0].uniform[res].angle, camisetasNow[0].uniform[res].avatarColor, camisetasNow[0].uniform[res].mainColor)

            let camisetasNow2 = [];

            camisetasNow2[0] = camisetasNow[1]
            camisetasNow[1] = camisetasNow[0]
            camisetasNow[0] = camisetasNow2[0]

            announce("[✅] Las camisetas fueron intercambiadas correctamente.", null, 0x00ff00, "bold", 2)
            }
            else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "amarilla" ) {
            if (player.admin) {
                if (oficialMode == true) {
                    if (args.length == 2) {
                        var players = room.getPlayerList();
				    	var numID = encontrarId(args[1]);

                        if (numID != null) {
							amarillas[args[1]] == null ? amarillas[args[1]] = 0 : null;
							amarillas[args[1]]++;
                            amarillasReport[args[1]] = `**${players[numID].name}:** 🟨`

                            announce(`[✅] El arbitro ${player.name} le saco amarilla a @${players[numID].name} (${amarillas[args[1]]}/2)`, null, null, "bold", 2)
							if (amarillas[args[1]] == 2) {
                                amarillasReport[args[1]] = `**${players[numID].name}:** 🟨🟨`
								room.kickPlayer(args[1], "Excediste el limite de Amarillas.", true);
								announce(`[✅] El jugador ${players[numID].name} fue expulsado por exceso de amarillas.`, null, null, "bold", 0);
							}
                        } else {
                            announce("[✖] No se encontro a ese jugador.", player.id, 0xff0000, "bold", 2)
                        }
                    } else {
                        announce("Uso: !amarilla [ID].", player.id, null, null, 2)
                    }
                } else {
                    announce("[✖] No esta activado el modo OFICIAL.", player.id, 0xff0000, "bold", 2)
                }
            } else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "roja" ) {
            if (player.admin) {
                if (oficialMode == true) {
                    if (args.length == 2) {
                        var players = room.getPlayerList();
				    	var numID = encontrarId(args[1]);

                        if (numID != null) {
							rojas[args[1]] == null ? rojas[args[1]] = 0 : null;
							rojas[args[1]]++;

                            announce(`[✅] El arbitro ${player.name} le saco roja a @${players[numID].name}`, null, null, "bold", 2)
							if (rojas[args[1]] == 1) {
                                rojas[args[1]] = `**${players[numID].name}:** 🟥`
								room.kickPlayer(args[1], "Fuiste expulsado del partido.", true);
								announce(`[✅] El jugador ${players[numID].name} fue expulsado del partido.`, null, null, "bold", 0);
							}
                        } else {
                            announce("[✖] No se encontro a ese jugador.", player.id, 0xff0000, "bold", 2)
                        }
                    } else {
                        announce("Uso: !roja [ID].", player.id, null, null, 2)
                    }
                } else {
                    announce("[✖] No esta activado el modo OFICIAL.", player.id, 0xff0000, "bold", 2)
                }
            } else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] == "du") {
            if (player.admin) {
                if (args.length == 2) { 
                    if (authArray[args[1]] != undefined) {
                        var valores = Object.values(keysDU[authArray[args[1]][1]]);
                        announce(`Nombres utilizados: ${valores}.`, player.id, null, "bold", 2)
                    } else {
                        announce("[✖] Esa ID no existe.", player.id, 0xff0000, "bold", 2)
                    }
                } else {
                    announce("Uso: !du [ID].", player.id, null, null, 2)
                }
            } else {
                announce("[✖] No tienes permiso para ejecutar este comando.", player.id, 0xff0000, "bold", 2)
            }
        }
        else if (args[0] && args.length == 2) {
            if (player.admin) {
                let locvisaltstr;
                let visOrAlt = false;

                if (args[0].slice(-1) == "2" ) {
                    visOrAlt = true;
                    locvisaltstr = 1;
                }
                else if (args[0].slice(-1) == "3" ) {
                    visOrAlt = true;
                    locvisaltstr = 2
                }
                else if (args[0].slice(-1) != Number) {
                    visOrAlt = false;
                    locvisaltstr = 0
                } else {
                    visOrAlt = true;
                    locvisaltstr = -1
                }

                let pos;

                visOrAlt == true ? pos = camisetasTodas.findIndex(t => t.id == args[0].slice(0, -1)) : pos = camisetasTodas.findIndex(t => t.id == args[0])


                if (pos != -1) {
                    let teamID = pos;
                    let equipo = args[1];

                    if (equipo != "red" && equipo != "blue") {
                        announce("[✖] Ese team no existe. red|blue", player.id, 0xff0000, "bold", 2)
                        return false;
                    }
                    else {
                        equipo == "red" ? equipo = 1 : equipo = 2

                        if (locvisaltstr != -1) {
                             if (camisetasTodas[teamID].uniform[locvisaltstr] != undefined) {
                                room.setTeamColors(equipo, camisetasTodas[teamID].uniform[locvisaltstr].angle, camisetasTodas[teamID].uniform[locvisaltstr].avatarColor, camisetasTodas[teamID].uniform[locvisaltstr].mainColor);
                                announce(`[✅] Se cambió la camiseta del ${args[1]}.`, null, 0x00ff00, "bold", 2)
                                let ant = camisetasNow[equipo - 1].nombre
                                camisetasNow[equipo - 1] = camisetasTodas[teamID];
                                let now = camisetasNow[equipo - 1].nombre
                                announce(`Antes: ${ant} Ahora: ${now}`)
                                equipo == 1 ? tipCami.red = locvisalt[locvisaltstr] : tipCami.blue = locvisalt[locvisaltstr]
                             }
                             else {
                                announce(`[✖] Este equipo no posee ese tipo de camiseta.`, player.id, 0xff0000, "bold", 2)
                                return false;
                             }
                        }
                        else {
                            announce(`[✖] Ese tipo de camiseta no existe. 2|3`, player.id, 0xff0000, "bold", 2)
                            return false;
                        }
                    }
                }
                else {
                    announce("[✖] Esa ID no existe.", player.id, 0xff0000, "bold", 2)
                    return false;
                }
            }
        }
        return false;
    }
    if (message.startsWith("t ")) {
		teamMsg = message.substring(1).trim();
		if (player.team == 1) {
			var players = room.getPlayerList().filter((player) => player.team == 1);
			players.forEach(function (teamPlayer) {
				room.sendAnnouncement("[🔴] " + player.name + ": " + teamMsg, teamPlayer.id, 0xED6A5A, "normal", 1);
			});
		}
		if (player.team == 2) {
			var players = room.getPlayerList().filter((player) => player.team == 2);
			players.forEach(function (teamPlayer) {
				room.sendAnnouncement("[🔵] " + player.name + ": " + teamMsg, teamPlayer.id, 0x5995ED, "normal", 1);
			});
		}
		if (player.team == 0) {
			var players = room.getPlayerList().filter((player) => player.team == 0);
			players.forEach(function (teamPlayer) {
				room.sendAnnouncement("[🔘] " + player.name + ": " + teamMsg, teamPlayer.id, 0x9AADAA, "normal", 1);
			});
		}
		return false;
	}
    if (message.startsWith("@@")) {
		message = message.substr(2).trim();
		if (message.indexOf(' ') !== -1) {
			let args = message.match(/^(\S+)\s(.*)/).slice(1);
			
			if (args.length > 1) {
				var pmMsg = args[1];
				var players = room.getPlayerList();
				var pmSent = false;
				players.forEach(function (pmPlayer) {
					if (pmPlayer.name === args[0] || pmPlayer.name === args[0].replace(/_/g, ' ')) {
						announce("[MP a " + pmPlayer.name + "] " + player.name + ": " + pmMsg, player.id, 0x2DC4AB, "normal", 2);
						announce("[MP de " + player.name + "]: " + pmMsg, pmPlayer.id, 0x2DC4AB, "normal", 2);
						pmSent = true;
					}
				});
				if (pmSent == false) {
					whisper("No se encuentra el usuario '" + args[0] + "'", player.id, 0xFF71FF, "normal", 1);
				}
				return false;
			}
		}
	}

    if (player.admin) {
        announce(`[👮] ${player.name}: ${message}`, null, 0xffff00, "bold", 1)
        return false;
    }
}

room.onStadiumChange = function (newStadiumName, byPlayer) {

}

// Custom functions

function welcomeMsg (player) {
    announce("██║░░██║░░░░░░░░█░░░░░░░░███████╗", player.id, 0xFFFFFF, "bold", 2)
    announce("██║░░██║░░░░░░░█░█░░░░░░░██╔════╝", player.id, 0x9F0000, "bold")
    announce("███████║░█░█░█░█░█░█░█░█░███████╗", player.id, 0x830402, "bold")
    announce("██╔══██║░░░█░█░█░█░█░█░░░░░░░░██║", player.id, 0x7D0D06, "bold")
    announce("██║░░██║░░░░░█░█░█░█░░░░░███████║", player.id, 0x210000, "bold")
    announce("╚═╝░░╚═╝░░░░█░█░█░█░█░░░░╚══════╝", player.id, 0x16030A, "bold")
    announce("░░░░░░░░░░░█░█░░░░░█░█░░░░░░░░░░░", player.id, 0x010002, "bold")
}

function announce (msg, target, colors, style, sound) {
    if (colors == null) {
        colors = 0x9F0000
    }
    else if (style == null) {
        style = "bold"
    }
    else if (sound == null) {
        sound = 0
    }

    room.sendAnnouncement(msg, target, colors, style, sound)
    console.log(`Announce: ${msg}`)
}

function maxTicks(array) {
    let maxTicks = -Infinity;
    let objetoMaxTicks = null;
  
    for (let i = 0; i < array.length; i++) {
      const objeto = array[i];
      const ticks = objeto.ticks;
  
      if (ticks > maxTicks) {
        maxTicks = ticks;
        objetoMaxTicks = objeto;
      }
    }
  
    return objetoMaxTicks;
}
  

function getGK () {
    updateTeams();

    if (teamRed.length != 0) {
        var k = [-1, Infinity];
        for (var i = 0; i < teamRed.length; i++) {
            if (teamRed[i].position.x < k[1]) {
                k[0] = teamRed[i];
                k[1] = teamRed[i].position.x;
            }
        }
        let pos;
        k[0] != -1 ? pos = GKTicksRed.findIndex(t => t.name == k[0].name) : null
        pos != -1 ? GKTicksRed[pos].ticks++ : GKTicksRed.push({name: k[0].name, ticks: 1})
        GKRed = maxTicks(GKTicksRed)
    }
    if (teamBlue.length != 0) {
        var k = [-1, Infinity];
        for (var i = 0; i < teamBlue.length; i++) {
            if (teamBlue[i].position.x < k[1]) {
                k[0] = teamBlue[i];
                k[1] = teamBlue[i].position.x;
            }
        }
        let pos = -1;
        k[0] != -1 ? pos = GKTicksBlue.findIndex(t => t.name == k[0].name) : null
        pos != -1 ? GKTicksBlue[pos].ticks++ : GKTicksBlue.push({name: k[0].name, ticks: 1})
        GKBlue = maxTicks(GKTicksBlue)
    }
}

// Webhook functions

function discordLogOficial(player) {
	var request = new XMLHttpRequest();
	request.open("POST", `${discordWebhookFirmas}`)

	request.setRequestHeader('Content-type', 'application/json');
    let res;
    if (oficialMode == true) {
        res = "activó"
    }
    else {
        res = "desactivó"
    }

	var params = {
		username: 'PRX4 | Firmas',
		avatar_url: 'https://media.discordapp.net/attachments/1129199367732080670/1129199398887370782/logo_FINAL_PRx4_4.png?width=480&height=480',
        embeds: [
            {
                title: `✅ ${player.name} ${res} el modo OFICIAL.`,
                author:{
                    name: `${roomName}`,
                    icon_url: 'https://media.discordapp.net/attachments/863945026156101672/1076333759655321710/list-flat.png'
                },
                description: `:crown: **Nombre:** ${player.name}
                              :small_orange_diamond: **IP:** ${authArray[player.id][1]}
                              :small_blue_diamond: **AUTH:** ${authArray[player.id][0]}`,
                footer: {
                    text: "Provided by PRX4",
                    icon_url: 'https://media.discordapp.net/attachments/1129199367732080670/1129199398887370782/logo_FINAL_PRx4_4.png?width=480&height=480'
                },            
                color: 10420224,
                timestamp: new Date().toISOString()
            },
        ],
		allowed_mentions: {
			parse: []
		}
	}
    request.send(JSON.stringify(params))
}

function discordLogFirmas(player) {
	var request = new XMLHttpRequest();
	request.open("POST", `${discordWebhookFirmas}`)

	request.setRequestHeader('Content-type', 'application/json');


	var params = {
		username: 'PRX4 | Firmas',
		avatar_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png',
        embeds: [
            {
                title: `:pencil: ${player.name} firmó.`,
                author:{
                    name: `${roomName}`,
                    icon_url: 'https://media.discordapp.net/attachments/863945026156101672/1076333759655321710/list-flat.png'
                },
                description: `:blue_circle: **Nombre:** ${player.name}
                              :small_orange_diamond: **IP:** ${authArray[player.id][1]}
                              :small_blue_diamond: **AUTH:** ${authArray[player.id][0]}`,
                fields: [{
                    name: ":page_with_curl: **Firmas:**",
                    value: `${firmas}.`,
                    inline: true
                }],
                footer: {
                    text: "Provided by PRX4",
                    icon_url: 'https://images-ext-2.discordapp.net/external/Qja3a1ofSotyitxFQ41TJzokOUWp8NYxEx435HuGLXo/%3Fsize%3D2048/https/cdn.discordapp.com/icons/833562255752036382/cbb5dac67a365d092e80ec18820fb489.png'
                },            
                color: 10420224,
                timestamp: new Date().toISOString()
            },
        ],
		allowed_mentions: {
			parse: []
		}
	}
    request.send(JSON.stringify(params))
}

function encontrarId (a) {
	var num;
	var players = room.getPlayerList();
	
	for (i = 0; i < players.length; i++) {
	   if (a == players[i].id) {
		num = i
		i = 99
		return num;
	   }
	   else {
		num = null;
	   }
	}
	
	return num
}

// Rec Webhook

function fetchRecording(recInfo) {
    if (gameWebhook != "" && oficialMode == true) {
        let form = new FormData();
        form.append(null, new File([recInfo.rec], getRecordingName(recInfo), { "type": "text/plain" }));
        form.append("payload_json", JSON.stringify({
            "username": roomName
        }));

        fetch(gameWebhook, {
            method: 'POST',
            body: form,
        }).then((res) => res);
    }
}

function getGameStats() {
        lastTeamTouched == 1 ? possession[0]++ : possession[1]++;
        var ballPosition = room.getBallPosition();
        ballPosition.x < 0 ? actionZoneHalf[0]++ : actionZoneHalf[1]++;
}

function actionReportCountTeam(goals, team) {
    let playerActionSummaryTeam = [];
    let indexTeam = team == 1 ? 0 : 1;
    let indexOtherTeam = team == 1 ? 1 : 0;
    for (let goal of goals[indexTeam]) {
        if (goal[0] != null) {
            if (playerActionSummaryTeam.find(a => a[0].id == goal[0].id)) {
                let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[0].id);
                playerActionSummaryTeam[index][1]++;
            } else {
                playerActionSummaryTeam.push([goal[0], 1, 0, 0]);
            }
            if (goal[1] != null) {
                if (playerActionSummaryTeam.find(a => a[0].id == goal[1].id)) {
                    let index = playerActionSummaryTeam.findIndex(a => a[0].id == goal[1].id);
                    playerActionSummaryTeam[index][2]++;
                } else {
                    playerActionSummaryTeam.push([goal[1], 0, 1, 0]);
                }
            }
        }
    }

    playerActionSummaryTeam.sort((a, b) => (a[1] + a[2] + a[3]) - (b[1] + b[2] + b[3]));
    return playerActionSummaryTeam;
}

function getMinutesGame(time) {
    var t = Math.floor(time / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getSecondsGame(time) {
    var t = Math.floor(time - Math.floor(time / 60) * 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function ungetSecondsGame(time) {
    var t = Math.floor(time - Math.floor(time * 60) / 60);
    return `${Math.floor(t * 10)}${Math.floor(t * 10)}`;
}

function getBallSpeed() {
    var ballProp = room.getDiscProperties(0);
    return Math.sqrt(ballProp.xspeed ** 2 + ballProp.yspeed ** 2) * speedCoefficient;
}

function getTimeGame(time) {
    return `[${getMinutesGame(time)}:${getSecondsGame(time)}]`;
}

function getGoalAttribution(team) {
    var goalAttribution = Array(2).fill(null);
    if (lastTouches[0] != null) {
        if (lastTouches[0].player.team == team) {
            // Direct goal scored by player
            if (lastTouches[1] != null && lastTouches[1].player.team == team) {
                goalAttribution = [lastTouches[0].player, lastTouches[1].player];
            } else {
                goalAttribution = [lastTouches[0].player, null];
            }
        } else {
            // Own goal
            goalAttribution = [lastTouches[0].player, null];
        }
    }
    return goalAttribution;
}

function checkGoalKickTouch(array, index, goal) {
    if (array != null && array.length >= index + 1) {
        var obj = array[index];
        if (obj != null && obj.goal != null && obj.goal == goal) return obj;
    }
    return null;
}

function getGoalString(team) {
    var goalString;
    var scores = recInfo.scores;
    var goalAttribution = getGoalAttribution(team);
    if (goalAttribution[0] != null) {
        if (goalAttribution[0].team == team) {
            if (goalAttribution[1] != null && goalAttribution[1].team == team) {
                goalString = `[⚽] ${getTimeGame(scores.time)} GOL DE ${goalAttribution[0].name}! Asistencia de ${goalAttribution[1].name}. Velocidad del gol: ${ballSpeed.toFixed(2)}km/h.`;
                recInfo.goals.push(
                    new Goal(
                        scores.time,
                        team,
                        goalAttribution[0],
                        goalAttribution[1]
                    )
                );
            } else {
                goalString = `[⚽] ${getTimeGame(scores.time)} GOL DE ${goalAttribution[0].name}! Velocidad del gol: ${ballSpeed.toFixed(2)}km/h.`;
                recInfo.goals.push(
                    new Goal(scores.time, team, goalAttribution[0], null)
                );
            }
        } 
        else if (goalAttribution[0].team != team){
            goalString = `[😂] ${getTimeGame(scores.time)} GOL ENCONTRA DE ${goalAttribution[0].name}! Velocidad del gol: ${ballSpeed.toFixed(2)}km/h.`;
            recInfo.goals.push(
                new Goal(scores.time, team, goalAttribution[0], null)
            );
        }
    } else {
        goalString = `[⚽] ${getTimeGame(scores.time)} GOL DEL ${team == 1 ? 'red' : 'blue'}! Velocidad del gol: ${ballSpeed.toFixed(2)}km/h.`;
        recInfo.goals.push(
            new Goal(scores.time, team, null, null)
        );
    }

    return goalString;
}

function findFirstNumberCharString(str) {
    let str_number = str[str.search(/[0-9]/g)];
    return str_number === undefined ? "0" : str_number;
}

function getIdReport() {
    var d = new Date();
    return `${d.getFullYear() % 100}${d.getMonth() < 9 ? '0' : ''}${d.getMonth() + 1}${d.getDate() < 10 ? '0' : ''}${d.getDate()}${d.getHours() < 10 ? '0' : ''}${d.getHours()}${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}${d.getSeconds() < 10 ? '0' : ''}${d.getSeconds()}${findFirstNumberCharString(roomName)}`;
}

function pointDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function getGoalGame() {
    return recInfo.scores.red + recInfo.scores.blue;
}

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    let playerArray = [];
    for (let player of players) {
        if (player.position != null) {
            var distanceToBall = pointDistance(player.position, ballPosition);
            if (distanceToBall < triggerDistance) {
                playerArray.push([player, distanceToBall]);
            }
        }
    }
    if (playerArray.length != 0) {
        let playerTouch = playerArray.sort((a, b) => a[1] - b[1])[0][0];
        if (lastTeamTouched == playerTouch.team || lastTeamTouched == 0) {
            if (lastTouches[0] == null || (lastTouches[0] != null && lastTouches[0].player.id != playerTouch.id)) {
                recInfo.touchArray.push(
                    new BallTouch(
                        playerTouch,
                        recInfo.scores.time,
                        getGoalGame(),
                        ballPosition
                    )
                );
                lastTouches[0] = checkGoalKickTouch(
                    recInfo.touchArray,
                    recInfo.touchArray.length - 1,
                    getGoalGame()
                );
                lastTouches[1] = checkGoalKickTouch(
                    recInfo.touchArray,
                    recInfo.touchArray.length - 2,
                    getGoalGame()
                );
            }
        }
        lastTeamTouched = playerTouch.team;
    }
}

function handleLineupChangeTeamChange(changedPlayer) {
    if (enjuego != false) {
        var playerLineup;
        if (changedPlayer.team == 1) {
            // player gets in red team
            var redLineupAuth = recInfo.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = recInfo.playerComp[0][ind];
                if (playerLineup.timeExit.includes(recInfo.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != recInfo.scores.time);
                } else {
                    playerLineup.timeEntry.push(recInfo.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [recInfo.scores.time],
                    []
                );
                recInfo.playerComp[0].push(playerLineup);
            }
        } else if (changedPlayer.team == 2) {
            // player gets in blue team
            var blueLineupAuth = recInfo.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            if (ind != -1) {
                // Player goes back in
                playerLineup = recInfo.playerComp[1][ind];
                if (playerLineup.timeExit.includes(recInfo.scores.time)) {
                    // gets subbed off then in at the exact same time -> no sub
                    playerLineup.timeExit = playerLineup.timeExit.filter((t) => t != recInfo.scores.time);
                } else {
                    playerLineup.timeEntry.push(recInfo.scores.time);
                }
            } else {
                playerLineup = new PlayerComposition(
                    changedPlayer,
                    authArray[changedPlayer.id][0],
                    [recInfo.scores.time],
                    []
                );
                recInfo.playerComp[1].push(playerLineup);
            }
        }
        if (teamRed.some((r) => r.id == changedPlayer.id)) {
            // player leaves red team
            var redLineupAuth = recInfo.playerComp[0].map((p) => p.auth);
            var ind = redLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = recInfo.playerComp[0][ind];
            if (playerLineup.timeEntry.includes(recInfo.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (recInfo.scores.time == 0) {
                    recInfo.playerComp[0].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != recInfo.scores.time);
                }
            } else {
                playerLineup.timeExit.push(recInfo.scores.time);
            }
        } else if (teamBlue.some((r) => r.id == changedPlayer.id)) {
            // player leaves blue team
            var blueLineupAuth = recInfo.playerComp[1].map((p) => p.auth);
            var ind = blueLineupAuth.findIndex((auth) => auth == authArray[changedPlayer.id][0]);
            playerLineup = recInfo.playerComp[1][ind];
            if (playerLineup.timeEntry.includes(recInfo.scores.time)) {
                // gets subbed off then in at the exact same time -> no sub
                if (recInfo.scores.time == 0) {
                    recInfo.playerComp[1].splice(ind, 1);
                } else {
                    playerLineup.timeEntry = playerLineup.timeEntry.filter((t) => t != recInfo.scores.time);
                }
            } else {
                playerLineup.timeExit.push(recInfo.scores.time);
            }
        }
    }
}

function updateTeams() {
    players = room.getPlayerList();
    teamRed = players.filter((p) => p.team == 1);
    teamBlue = players.filter((p) => p.team == 2);
    teamSpec = players.filter((p) => p.team == 0);
}

function getStartingLineups() {
    var compositions = [[], []];
    for (let player of teamRed) {
        compositions[0].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    for (let player of teamBlue) {
        compositions[1].push(
            new PlayerComposition(player, authArray[player.id][0], [0], [])
        );
    }
    return compositions;
}

function getMinutesReport(time) {
    return Math.floor(Math.round(time) / 60);
}

function getSecondsReport(time) {
    var t = Math.round(time);
    return Math.floor(t - Math.floor(t / 60) * 60);
}

function getMinutesEmbed(time) {
    var t = Math.floor(Math.round(time) / 60);
    return `${Math.floor(t / 10)}${Math.floor(t % 10)}`;
}

function getSecondsEmbed(time) {
    var t = Math.round(time);
    var t2 = Math.floor(t - Math.floor(t / 60) * 60);
    return `${Math.floor(t2 / 10)}${Math.floor(t2 % 10)}`;
}

function getTimeEmbed(time) {
    return `[${getMinutesEmbed(time)}:${getSecondsEmbed(time)}]`;
}

function getRecordingName(recInfo) {
    let d = new Date();
    let redCap = camisetasNow[0].id;
    let blueCap = camisetasNow[1].id;
    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let month = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    let year = d.getFullYear() % 100 < 10 ? '0' + (d.getFullYear() % 100) : (d.getFullYear() % 100);
    let hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
    let minute = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
    return `${day}-${month}-${year}-${hour}h${minute}-${redCap}vs${blueCap}.hbr2`;
}

function fetchGametimeReport(recInfo) {
    var fieldGametimeRed = {
        name: '🔴        **RED TEAM STATS**',
        value: `⌛ __**Game Time:**__${n}${n}`,
        inline: true,
    };
    var fieldGametimeBlue = {
        name: '🔵       **BLUE TEAM STATS**',
        value: `⌛ __**Game Time:**__${n}${n}`,
        inline: true,
    };
    var redTeamTimes = recInfo.playerComp[0].map((p) => [p.player, 0]);
    for (let i = 0; i < recInfo.playerComp[0].length; i++) {
        var player = recInfo.playerComp[0][i];
        for (let j = 0; j < player.timeEntry.length; j++) {
            if (player.timeExit.length < j + 1) {
                redTeamTimes[i][1] += recInfo.scores.time - player.timeEntry[j];
            } else {
                redTeamTimes[i][1] += player.timeExit[j] - player.timeEntry[j];
            }
        }
    }
    var blueTeamTimes = recInfo.playerComp[1].map((p) => [p.player, 0]);
    for (let i = 0; i < recInfo.playerComp[1].length; i++) {
        var player = recInfo.playerComp[1][i];
        for (let j = 0; j < player.timeEntry.length; j++) {
            if (player.timeExit.length < j + 1) {
                blueTeamTimes[i][1] += recInfo.scores.time - player.timeEntry[j];
            } else {
                blueTeamTimes[i][1] += player.timeExit[j] - player.timeEntry[j];
            }
        }
    }

    for (let time of redTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeRed.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}${n}`;
    }
    fieldGametimeRed.value += `${n}${blueTeamTimes.length - redTeamTimes.length > 0 ? `${n}`.repeat(blueTeamTimes.length - redTeamTimes.length) : ''
        }`;
    fieldGametimeRed.value += '=====================';

    for (let time of blueTeamTimes) {
        var minutes = getMinutesReport(time[1]);
        var seconds = getSecondsReport(time[1]);
        fieldGametimeBlue.value += `> **${time[0].name}:** ${minutes > 0 ? `${minutes}m` : ''}` +
            `${seconds > 0 || minutes == 0 ? `${seconds}s` : ''}${n}`;
    }
    fieldGametimeBlue.value += `${n}${redTeamTimes.length - blueTeamTimes.length > 0 ? `${n}`.repeat(redTeamTimes.length - blueTeamTimes.length) : ''
        }`;
    fieldGametimeBlue.value += '=====================';

    return [fieldGametimeRed, fieldGametimeBlue];
}

function fetchActionsSummaryReport(recInfo) {
    var fieldReportRed = {
        name: '🔴        **RED TEAM STATS**',
        value: `📊 __**Player Stats:**__${n}${n}`,
        inline: true,
    };
    var fieldReportBlue = {
        name: '🔵       **BLUE TEAM STATS**',
        value: `📊 __**Player Stats:**__${n}${n}`,
        inline: true,
    };
    var goals = [[], []];
    for (let goal of recInfo.goals) {
        goals[goal.team - 1].push([goal.striker, goal.assist]);
    }
    var redActions = actionReportCountTeam(goals, 1);
    if (redActions.length > 0) {
        for (let act of redActions) {
            fieldReportRed.value += `> **${act[0].team != 1 ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}${n}`;
        }
    }
    var blueActions = actionReportCountTeam(goals, 22);
    if (blueActions.length > 0) {
        for (let act of blueActions) {
            fieldReportBlue.value += `> **${act[0].team != 2 ? '[OG] ' : ''}${act[0].name}:**` +
                `${act[1] > 0 ? ` ${act[1]}G` : ''}` +
                `${act[2] > 0 ? ` ${act[2]}A` : ''}` +
                `${act[3] > 0 ? ` ${act[3]}CS` : ''}${n}`;
        }
    }

    fieldReportRed.value += `${n}${blueActions.length - redActions.length > 0 ? `${n}`.repeat(blueActions.length - redActions.length) : ''
        }`;
    fieldReportRed.value += '=====================';

    fieldReportBlue.value += `${n}${redActions.length - blueActions.length > 0 ? `${n}`.repeat(redActions.length - blueActions.length) : ''
        }`;
    fieldReportBlue.value += '=====================';

    return [fieldReportRed, fieldReportBlue];
}

function fetchCardsVallasEmbed(recInfo) {
    var fieldReport = {
        name: '🔴        **RED TEAM STATS**',
        value: `📙__**TARJETAS:**__${n}${n}`,
        inline: true,
    };
    var fieldReport1 = {
        name: '🔵       **BLUE TEAM STATS**',
        value: `🧤__**VALLAS:**__${n}${n}`,
        inline: true,
    };

    var allCards = [];
    for (let card of amarillasReport) {
        if (card != undefined) {
            allCards.push(card)
        }
    }
    for (let card of rojas) {
        if (card != undefined) {
            allCards.push(card)
        }
    }

    for (let card of allCards) {
        fieldReport.value += `> ${card}${n}`
    }

    fieldReport1.value += `> 🔴 **${GKRed != null ? `${GKRed.name}` : 'GK RED'}:** ${vallaRed == false ? '`' + getTimeGame(recInfo.scores.time) + '`': '`' + vallaRed + '`'}${n}> 🔵 **${GKBlue != null ? `${GKBlue.name}` : 'GK BLUE'}:** ${vallaBlue == false ? '`' + getTimeGame(recInfo.scores.time) + '`' : '`' + vallaBlue + '`'}`

    fieldReport.value += `${allCards.length - 2 > 0 ? `${n}`.repeat(allCards.length - 2) : ''
        }`;
    fieldReport1.value += `${n}${2 - allCards.length > 0 ? `${n}`.repeat(2 - allCards.length) : ''
        }`;
    return [fieldReport, fieldReport1];
}

function obtenerMVP(partida) {
    // Combina las estadísticas de goles y asistencias
    const jugadores = [];
    partida.forEach((jugador) => {
      const jugadorExistente = jugadores.find((j) => j.name === jugador.name);
      if (jugadorExistente) {
        jugadorExistente.goals += jugador.goals;
        jugadorExistente.assist += jugador.assist;
      } else {
        jugadores.push({
          name: jugador.name,
          goals: jugador.goals,
          assist: jugador.assist,
        });
      }
    });
  
    jugadores.forEach((jugador) => {
      jugador.score = jugador.goals + jugador.assist / 2;
    });
  
    jugadores.sort((a, b) => b.score - a.score);
  
    const mejoresJugadores = jugadores.slice(0, 3);
  
    return mejoresJugadores.map((jugador) => jugador.name);
}

function fetchMVPEmbed(recInfo) {
    var fieldReport = {
        name: '🔴        **RED TEAM STATS**',
        value: `${n}`,
        inline: true,
    };
    var fieldReport1 = {
        name: '🔵       **BLUE TEAM STATS**',
        value: `${n}${n}`,
        inline: true,
    };
    
    var goals = [];
    for (let goal of recInfo.goals) {
        goals.push([goal.striker, goal.assist, goal.team]);
    }
    var rankMVP = [];
    for (let goal of goals) {
        if (rankMVP.findIndex(t => t.name == goal[0].name) == -1 && goal.team != goal[0].team) {
            rankMVP.push({name: goal[0].name, goals: 1, assist: 0})
        }
        else if (rankMVP.findIndex(t => t.name == goal[0].name ) != -1 && goal.team != goal[0].team) {
            rankMVP[rankMVP.findIndex(t => t.name == goal[0].name)].goals++;
        }
        if (goal[1] != null) {
            if (rankMVP.findIndex(t => t.name == goal[1].name ) == -1)  {
                rankMVP.push({name: goal[1].name, goals: 0, assist: 1})
            }
            else if (rankMVP.findIndex(t => t.name == goal[1].name ) != -1) {
                rankMVP[rankMVP.findIndex(t => t.name == goal[1].name)].assist++;
            }
        }
    }
    var mvp = obtenerMVP(rankMVP)

    fieldReport.value += `⭐ ${mvp[0] == undefined ? 'No Hubo' : mvp[0]}${n}🥈 ${mvp[1] == undefined ? 'No Hubo' : mvp[1]} 🥉 ${mvp[2] == undefined ? 'No Hubo' : mvp[2]}`;
    fieldReport1.value += `${n}`;
    return [fieldReport, fieldReport1];
}

function fetchSummaryEmbed(recInfo) {
    var fetchEndgame = [fetchGametimeReport, fetchActionsSummaryReport, fetchCardsVallasEmbed, fetchMVPEmbed];
    var logChannel = gameWebhook;
    var names = []
    if (oficialMode == true) {
        names[0] = camisetasNow[0].nombre
        names[1] = camisetasNow[1].nombre
    }
    else {
        names[0] = "Red Team"
        names[1] = "Blue Team"
    }
    var fields = [
        {
            name: `🔴 **${names[0]} Stats**`,
            value: `=====================${n}${n}`,
            inline: true,
        },
        {
            name: `🔵 **${names[1]} Stats**`,
            value: `=====================${n}${n}`,
            inline: true,
        },
    ];
    for (let i = 0; i < fetchEndgame.length; i++) {
        var fieldsReport = fetchEndgame[i](recInfo);
        fields[0].value += fieldsReport[0].value + `${n}${n}`;
        fields[1].value += fieldsReport[1].value + `${n}${n}`
    }
    fields[0].value = fields[0].value.substring(0, fields[0].value.length - 2);
    fields[1].value = fields[1].value.substring(0, fields[1].value.length - 2);

    var possR = possession[0] / (possession[0] + possession[1]);
    var possB = 1 - possR;
    var possRString = (possR * 100).toFixed(0).toString();
    var possBString = (possB * 100).toFixed(0).toString();
    var zoneR = actionZoneHalf[0] / (actionZoneHalf[0] + actionZoneHalf[1]);
    var zoneB = 1 - zoneR;
    var zoneRString = (zoneR * 100).toFixed(0).toString();
    var zoneBString = (zoneB * 100).toFixed(0).toString();
    var win = (recInfo.scores.red > recInfo.scores.blue) * 1 + (recInfo.scores.blue > recInfo.scores.red) * 2;
    var objectBodyWebhook = {
        embeds: [
            {
                title: `📝 MATCH REPORT #${getIdReport()}`,
                description:
                    `**${getTimeEmbed(recInfo.scores.time)}** ` +
                    (win == 1 ? `**${names[0]}** ` : `${names[0]} `) + recInfo.scores.red +
                    ' - ' +
                    recInfo.scores.blue + (win == 2 ? ` **${names[1]}**` : ` ${names[1]}`) +
                    n + '```c'+ n +'Possession: ' + possRString + '% - ' + possBString + '%' +
                    `${n}Action Zone: ` + zoneRString + '% - ' + zoneBString + '%' + n + '```' + n + n,
                color: 10420224,
                fields: fields,
                footer: {
                    text: `Estos datos no están 100% verificados.${n}Recording: ${getRecordingName(recInfo)}`,
                },
                timestamp: new Date().toISOString(),
            },
        ],
        username: roomName,
        avatar_url: 'https://media.discordapp.net/attachments/1129199367732080670/1129199398887370782/logo_FINAL_PRx4_4.png?width=480&height=480'
    };
    if (logChannel != '' && oficialMode == true) {
        fetch(logChannel, {
            method: 'POST',
            body: JSON.stringify(objectBodyWebhook),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res);
    }
}

let Request = {
	get: ()=>{
		let xhr = new XMLHttpRequest();

		xhr.onreadystatechange = () => {
			if (xhr.readyState == XMLHttpRequest.DONE) keysDU = JSON.parse(xhr.responseText)["record"];
		};

		xhr.open("GET", `https://api.jsonbin.io/v3/b/${binIdString}/latest`, true);
		xhr.setRequestHeader("X-Master-Key", `${apiKeyString}`);
		xhr.send();
	},
	put: ()=>{
		let xhr = new XMLHttpRequest();

		xhr.open("PUT", `https://api.jsonbin.io/v3/b/${binIdString}`, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("X-Master-Key", `${apiKeyString}`);
		xhr.send(JSON.stringify(keysDU));
	}
};

Request.get();
room.setCustomStadium(futsalx4)    
