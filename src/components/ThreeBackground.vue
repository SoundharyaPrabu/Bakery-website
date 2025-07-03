<template>
  <canvas ref="bg" class="bg-canvas"></canvas>
</template>

<script>
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

export default {
  name: 'ThreeBackground',
  mounted() {
    const canvas = this.$refs.bg;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); 

    camera.position.z = 8;
    camera.position.y = 2;


    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(ambientLight, directionalLight);


    const sprinkleCount = 700;
    const sprinkleGeometry = new THREE.BufferGeometry();
    const sprinklePositions = [];

    for (let i = 0; i < sprinkleCount; i++) {
      sprinklePositions.push((Math.random() - 0.5) * 100); // x
      sprinklePositions.push(Math.random() * 100);         // y
      sprinklePositions.push((Math.random() - 0.5) * 100); // z
    }

    sprinkleGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(sprinklePositions, 3)
    );

    const sprinkleMaterial = new THREE.PointsMaterial({
      color: 0xff69b4,
      size: 0.7,
      transparent: true,
      opacity: 0.8,
    });

    const sprinkles = new THREE.Points(sprinkleGeometry, sprinkleMaterial);
    scene.add(sprinkles);

    const sweets = [];
    const sweetColors = [0xff9999, 0xffcc99, 0xccff99, 0xffff99, 0xff6666, 0xcc99ff];

    for (let i = 0; i < 15; i++) {
      const geo = new THREE.SphereGeometry(0.2 + Math.random() * 0.2, 16, 16);
      const mat = new THREE.MeshPhongMaterial({
        color: sweetColors[i % sweetColors.length],
        shininess: 100,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        Math.random() * 5,
        (Math.random() - 0.5) * 10
      );
      mesh.userData = {
        speed: 0.01 + Math.random() * 0.02,
        direction: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize(),
        rotationSpeed: Math.random() * 0.01,
        timeOffset: Math.random() * 100,
      };
      sweets.push(mesh);
      scene.add(mesh);
    }

  
    const mouse = new THREE.Vector2();
    window.addEventListener('mousemove', (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

  
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

   
    function animate() {
      requestAnimationFrame(animate);

      const pos = sprinkleGeometry.attributes.position.array;
      for (let i = 1; i < sprinkleCount * 3; i += 3) {
        pos[i] -= 0.2;
        if (pos[i] < 0) pos[i] = 100;
      }
      sprinkleGeometry.attributes.position.needsUpdate = true;

    
      sweets.forEach((s) => {
        s.position.add(s.userData.direction.clone().multiplyScalar(s.userData.speed));
        s.rotation.x += s.userData.rotationSpeed;
        s.rotation.y += s.userData.rotationSpeed;

        ['x', 'y', 'z'].forEach((axis) => {
          if (Math.abs(s.position[axis]) > 7) s.userData.direction[axis] *= -1;
        });
      });

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 2, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 2 + mouse.y * 1, 0.05);
      camera.lookAt(0, 0, 0);

      TWEEN.update();
      renderer.render(scene, camera);
    }

    animate();
  },
};
</script>

<style scoped>
.bg-canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; 
  width: 100%;
  height: 100%;
  pointer-events: none; 
  display: block;
}
</style>

