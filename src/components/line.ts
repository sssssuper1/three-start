import * as THREE from 'three';

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0)

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [
  new THREE.Vector3(-10, 0, 0),
  new THREE.Vector3(0, 10, 0),
  new THREE.Vector3(0, -10, 0),
];

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

const render = (renderer: THREE.WebGLRenderer, scene: THREE.Scene) => {
  scene.add(line);
  renderer.render(scene, camera);
}

export default render;
