import * as THREE from 'three';

const geometry = new THREE.IcosahedronGeometry(20, 0);
const meterial = new THREE.MeshNormalMaterial();

const icosahedron = new THREE.Mesh(geometry, meterial);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 100);

const light = new THREE.PointLight(0xffff00);
light.position.set(10, 0, 25);

export default (renderer: THREE.WebGLRenderer, scene: THREE.Scene) => {
  scene.add(light);
  scene.add(icosahedron);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    icosahedron.rotation.x += 0.02;
  }

  animate()
}
