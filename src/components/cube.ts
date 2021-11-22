import * as THREE from 'three';

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00BFFF });

const cube = new THREE.Mesh(geometry, material);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 5;

const render = (renderer: THREE.WebGLRenderer, scene: THREE.Scene) => {
  scene.add(cube);

  const animate = function () {
    requestAnimationFrame(animate);
  
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  
    renderer.render(scene, camera);
  };

  animate();
}

export default render;
