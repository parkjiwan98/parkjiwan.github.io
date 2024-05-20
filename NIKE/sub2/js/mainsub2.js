import * as THREE from 'three';
import {GLTFLoader} from 'gltf'
import {OrbitControls} from 'orbit'

window.addEventListener('load', function () {
  init();
});
//렌더러
 async function init() {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha:true,
  });
  renderer.shadowMap.enabled = true;
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  document.body.appendChild(renderer.domElement);
//씬
  const scene = new THREE.Scene();
//카메라
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    500,
  );

  camera.position.set(-3, 1, 3);

//오브젝트
  // const gltfloader = new GLTFLoader();
  // const gltf = await gltfloader.loadAsync('./models/air_jordan_1_1985/scene1.gltf')
  // const shoes = gltf.scene;
  
  // shoes.castShadow = true;

  // shoes.traverse(object => {
  //   if(object.inMesg){
  //     object.castShadow = true;
  //   }
  // })

  // shoes.scale.set(1, 1, 1);

  // scene.add(shoes)

  var loader = new GLTFLoader();

loader.load( './models/nike_air_jordans_retopo/scene1.gltf', function( gltf ) {
  var model = gltf.scene;
    gltf.scene.traverse( function( node ) {
        if ( node.isMesh ) { node.castShadow = true; }
    } );
    model.position.set(1.5, -0.75, -0.5);
    model.scale.set(1.5, 1.5, 1.5);
    scene.add( model );
} );

  // const sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );
  // const sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
  // const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  // sphere.castShadow = true; //default is false
  // sphere.receiveShadow = false; //default
  // sphere.scale.set(1, 1, 1);
  // sphere.position.set(0, 1 ,0);
  // scene.add( sphere );
  

//조명
const AmbLight = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( AmbLight );

// const light = new THREE.DirectionalLight( 0xffffff, 1 );
// light.position.set( 0, 5, 0 ); //default; light shining from top
// light.castShadow = true; // default false
// scene.add( light );

// //Set up shadow properties for the light
// light.shadow.mapSize.width = 512; // default
// light.shadow.mapSize.height = 512; // default
// light.shadow.camera.near = 0.5; // default
// light.shadow.camera.far = 500; // default
//Create a SpotLight and turn on shadows for the light
const light = new THREE.SpotLight( 0xffffff );
light.castShadow = true; // default false
light.position.set(0, 5, 0)
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 4096; // 그림자 맵 너비 설정
light.shadow.mapSize.height = 4096; // 그림자 맵 높이 설정
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default
light.shadow.focus = 1; // default

//바닥
const geometry = new THREE.CircleGeometry(2.5, 320); // 반지름이 2.5인 원을 생성합니다.
const material = new THREE.MeshStandardMaterial({color: 0xffffff}); // 흰색 재질을 생성합니다.
const circle = new THREE.Mesh(geometry, material); // Geometry와 Material을 기반으로 Mesh를 생성합니다.

circle.rotation.x = Math.PI * -0.5; // 원이 수직으로 표시되도록 x축 회전을 적용합니다.
circle.position.set(0, -1, 0); // 위치를 조정합니다.

circle.receiveShadow = true; // 그림자를 받도록 설정합니다.

scene.add(circle); // 원을 장면에 추가합니다.

//컨트롤
 const controls = new OrbitControls(camera, renderer.domElement);
 controls.autoRotateSpeed = 3;

 controls.minDistance = 3;
 controls.maxDistance = 7;
 
//반응형
  render();

  function render() {
    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);
  }

  window.addEventListener('resize', handleResize);
}