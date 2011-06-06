//Wrapper.js
/*

reusing many parts from three.js examples

*/

var Wrapper = function(obj){

	

var camera, scene, renderer;

var SCREEN_WIDTH = window.innerWidth,
	SCREEN_HEIGHT = window.innerHeight,
	
	mouseX = 0, mouseY = 0,
	
	windowHalfX = window.innerWidth / 2,
	windowHalfY = window.innerHeight / 2;

init(obj);
setInterval( loop, 1000 / 60 );

function init(obj) {

	camera = new THREE.Camera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.y = 2000;
	camera.position.z = 2000;

	scene = new THREE.Scene();

	for (var i = 0; i < obj.particles.length; i++) {
		var particle = obj.particles[i];
		scene.addObject( particle );
	}

	renderer = new THREE.CanvasRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	document.body.appendChild( renderer.domElement );

	document.addEventListener('mousemove', onDocumentMouseMove, false);
}

function onDocumentMouseMove(event) {

	mouseX = event.clientX - windowHalfX;
	mouseY = event.clientY - windowHalfY;
}


function loop() {
	camera.position.x += ((10 * mouseX) - camera.position.x) * .45;
	camera.position.y += (-(10 * mouseY) - camera.position.y) * .45;
	camera.updateMatrix();
	
	obj.sceneTick && obj.sceneTick(); 
	renderer.render(scene, camera);
}


}