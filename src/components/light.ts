import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const geometry = new THREE.OctahedronGeometry(30);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);

const light = new THREE.PointLight(0x00ffff);
light.position.set(10, 0, 25);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 100);

const render = (renderer: THREE.WebGLRenderer, scene: THREE.Scene) => {
  scene.add(light);
  scene.add(cube);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate()
}

export default render;
