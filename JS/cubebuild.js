
    //creating scene 
    const scene = new THREE.Scene();
    //creating camera, FOV * aspect ratio and how far & near the object is
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // rendering the scene w cam using WebGL
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, innerHeight);
    document.body.appendChild(renderer.domElement);
    
// creating the box
const geobox = new THREE.BoxGeometry(1, 1, 1);
//creating material to give color attribute of green 
const meshmat = new THREE.MeshBasicMaterial({color: 0xFFC298E2});
// takes the geo& assigns the mesh to it for scene
const box = new THREE.Mesh(geobox, meshmat);
//cam&box will be added together
scene.add(box);
camera.position.z = 5;


function frame() {

    requestAnimationFrame(frame);
    //adding cube rotation
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    //rendering scene and camera variables
    renderer.render(scene, camera)
}
frame();