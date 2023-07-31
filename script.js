const scene = new THREE.Scene();

const renderer= new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.getElementById('containerPath').appendChild(renderer.domElement)

// 2. Agrega una cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 0;

// 3. Crea un plano
const geometry = new THREE.PlaneGeometry(2, 2, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 4. Aplica un material al plano
const texture = new THREE.TextureLoader().load('path/to/your/texture.jpg');

// 5. Anima la cámara
function animate() {
  requestAnimationFrame(animate);
  camera.position.z += 0.1;
  renderer.render(scene, camera);
}
animate();
