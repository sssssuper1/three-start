import * as THREE from 'three';
import icosahedronRender from './components/icosahedron';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

icosahedronRender(renderer, scene);
