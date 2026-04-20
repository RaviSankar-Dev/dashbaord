import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CinematicJourney = () => {
    const containerRef = useRef();

    useEffect(() => {
        if (!containerRef.current) return;

        // 1. Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        const colors = {
            primary: 0x8B004A, // Alabaster Maroon
            background: 0xF2EFE7, // Murray Cream
            space: 0x030712, // Deep Dark
        };

        // Start with deep dark space for visibility
        scene.background = new THREE.Color(colors.space);

        // Interactive Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enabled = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minDistance = 50;
        controls.maxDistance = 600;

        // Texture Loader
        const textureLoader = new THREE.TextureLoader();
        const earthTexture = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
        const cloudsTexture = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-clouds.png');

        // 2. Scene Elements

        // Scene 1: High-Visibility Stars - REDUCED COUNT
        const starGeo = new THREE.BufferGeometry();
        const starPos = new Float32Array(2000 * 3);
        for (let i = 0; i < 2000 * 3; i++) starPos[i] = (Math.random() - 0.5) * 1500;
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
        const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ 
            color: 0xffffff, 
            size: 0.8, 
            transparent: true, 
            opacity: 0.6 
        }));
        scene.add(stars);

        // Scene 1: Nebula - REDUCED COUNT
        const nebulaGeo = new THREE.BufferGeometry();
        const nebulaPos = new Float32Array(800 * 3);
        const nebulaCol = new Float32Array(800 * 3);
        for (let i = 0; i < 800; i++) {
            nebulaPos[i * 3] = (Math.random() - 0.5) * 800;
            nebulaPos[i * 3 + 1] = (Math.random() - 0.5) * 800;
            nebulaPos[i * 3 + 2] = (Math.random() - 1.0) * 800;
            nebulaCol[i * 3] = 0.54; nebulaCol[i * 3 + 1] = 0; nebulaCol[i * 3 + 2] = 0.29;
        }
        nebulaGeo.setAttribute('position', new THREE.BufferAttribute(nebulaPos, 3));
        nebulaGeo.setAttribute('color', new THREE.BufferAttribute(nebulaCol, 3));
        const nebula = new THREE.Points(nebulaGeo, new THREE.PointsMaterial({ 
            size: 4, 
            vertexColors: true, 
            transparent: true, 
            opacity: 0.3, 
            blending: THREE.AdditiveBlending 
        }));
        scene.add(nebula);

        // Scene 2: Real Earth (SIMPLIFIED GEOMETRY)
        const earthGroup = new THREE.Group();
        const sphereGeo = new THREE.SphereGeometry(20, 64, 64);
        const earth = new THREE.Mesh(sphereGeo, new THREE.MeshStandardMaterial({ 
            map: earthTexture,
            roughness: 0.5,
            metalness: 0.1
        }));
        earthGroup.add(earth);
        const clouds = new THREE.Mesh(new THREE.SphereGeometry(20.3, 64, 64), new THREE.MeshStandardMaterial({ 
            map: cloudsTexture, 
            transparent: true, 
            opacity: 0.3, 
            blending: THREE.AdditiveBlending 
        }));
        earthGroup.add(clouds);
        const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(22, 64, 64), new THREE.MeshBasicMaterial({ 
            color: 0x88ccff, 
            transparent: true, 
            opacity: 0.08, 
            side: THREE.BackSide 
        }));
        earthGroup.add(atmosphere);

        earthGroup.position.z = -500;
        earthGroup.scale.set(0,0,0);
        earthGroup.rotation.y = Math.PI;
        scene.add(earthGroup);

        // Tech Sections (Maroon theme)
        const coreGroup = new THREE.Group();
        const crystalMat = new THREE.MeshPhongMaterial({ 
            color: colors.primary, 
            wireframe: true, 
            transparent: true, 
            opacity: 0, 
            emissive: colors.primary, 
            emissiveIntensity: 0,
            shininess: 100
        });
        const crystal = new THREE.Mesh(new THREE.IcosahedronGeometry(12, 0), crystalMat);
        coreGroup.add(crystal);

        const ringMat = new THREE.MeshBasicMaterial({ color: colors.primary, transparent: true, opacity: 0, side: THREE.DoubleSide });
        for (let i = 0; i < 5; i++) {
            const ring = new THREE.Mesh(new THREE.TorusGeometry(15 + i * 5, 0.08, 16, 80), ringMat.clone());
            ring.rotation.x = Math.PI / 2;
            ring.rotation.y = Math.random() * Math.PI;
            coreGroup.add(ring);
        }

        // INSTANCED MESH FOR SHARDS (High Performance)
        const shardCount = 200;
        const shardGeo = new THREE.BoxGeometry(0.6, 0.6, 0.6);
        const shardMat = new THREE.MeshStandardMaterial({ 
            color: colors.primary, 
            transparent: true, 
            opacity: 0,
            metalness: 0.9,
            roughness: 0.1
        });
        const instancedShards = new THREE.InstancedMesh(shardGeo, shardMat, shardCount);
        
        const dummy = new THREE.Object3D();
        for (let i = 0; i < shardCount; i++) {
            const phi = Math.acos(-1 + (2 * i) / shardCount);
            const theta = Math.sqrt(shardCount * Math.PI) * phi;
            dummy.position.set(
                60 * Math.cos(theta) * Math.sin(phi),
                60 * Math.sin(theta) * Math.sin(phi),
                60 * Math.cos(phi)
            );
            dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            dummy.updateMatrix();
            instancedShards.setMatrixAt(i, dummy.matrix);
        }
        coreGroup.add(instancedShards);

        coreGroup.position.set(0, 0, -100);
        scene.add(coreGroup);

        // Neural Horizon - OPTIMIZED SEGMENTS
        const grid = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000, 40, 40), new THREE.MeshBasicMaterial({ color: colors.primary, wireframe: true, transparent: true, opacity: 0 }));
        grid.rotation.x = -Math.PI / 2; grid.position.y = -60; grid.position.z = -300;
        scene.add(grid);

        const grid2 = grid.clone();
        grid2.position.y = -65;
        grid2.rotation.z = Math.PI / 4;
        scene.add(grid2);

        // Lighting
        const sunLight = new THREE.DirectionalLight(0xffffff, 2);
        sunLight.position.set(100, 50, 100);
        scene.add(sunLight);
        scene.add(new THREE.AmbientLight(0x222222));

        camera.position.z = 200;

        // 3. Cinematic Timeline (GSAP)
        const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

        tl.to(camera.position, { z: 50, duration: 4 });
        tl.to(earthGroup.scale, { x: 1, y: 1, z: 1, duration: 2 }, 2);
        tl.to(earthGroup.position, { z: -100, duration: 3 }, 3);
        tl.to(earthGroup.position, { y: 200, z: 150, duration: 2 }, 5);
        
        // THE TRANSITION: Fade to Murray Cream
        tl.to(scene.background, { r: 242/255, g:239/255, b:231/255, duration: 2 }, 6);
        tl.to([grid.material, grid2.material], { opacity: 0.15, duration: 2 }, 6);
        tl.to(stars.material, { opacity: 0, duration: 1 }, 6);
        tl.to(nebula.material, { opacity: 0, duration: 1 }, 6);

        // Reveal Nexus Core & High-Performance Shards
        tl.to(crystalMat, { opacity: 0.8, duration: 1.5 }, 6.5);
        tl.to(coreGroup.children.filter(c => c.material).map(c => c.material), { opacity: 0.3, stagger: 0.1, duration: 1 }, 6.8);
        tl.to(shardMat, { opacity: 0.6, duration: 2 }, 7); // Unified material reveal
        
        // Handoff to OrbitControls
        tl.to(camera.position, { x: 80, y: 50, z: 250, duration: 3, onComplete: () => {
            controls.enabled = true;
            controls.target.set(0, 0, -100);
        } }, 6.5);

        // 4. Interaction & Loop
        const shardDummy = new THREE.Object3D();
        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.y += 0.0003;
            earth.rotation.y += 0.001;
            clouds.rotation.y += 0.002;
            
            // Core Animation
            crystal.rotation.x += 0.012;
            crystal.rotation.y += 0.012;
            crystalMat.emissiveIntensity = 0.8 + Math.sin(Date.now() * 0.003) * 0.4;
            
            // Rings Animation
            coreGroup.children.forEach((c, i) => {
                if (c.type === 'Mesh' && c !== crystal && c !== instancedShards) {
                    c.rotation.z += 0.012 * (i % 2 === 0 ? 1 : -1);
                    c.rotation.x += 0.006;
                }
            });

            // HIGH-PERFORMANCE INSTANCED SHARD ANIMATION
            instancedShards.rotation.y -= 0.002;
            const time = Date.now() * 0.001;
            for (let i = 0; i < shardCount; i++) {
                instancedShards.getMatrixAt(i, shardDummy.matrix);
                shardDummy.matrix.decompose(shardDummy.position, shardDummy.quaternion, shardDummy.scale);
                
                shardDummy.rotation.x += 0.01 * (i % 2 === 0 ? 1 : -1);
                shardDummy.position.y += Math.sin(time + i) * 0.02; // Reduced frequency
                
                shardDummy.updateMatrix();
                instancedShards.setMatrixAt(i, shardDummy.matrix);
            }
            instancedShards.instanceMatrix.needsUpdate = true;

            // Grid Animation
            grid.rotation.z += 0.0004;
            grid2.rotation.z -= 0.0002;

            if (controls.enabled) {
                camera.position.x += Math.sin(time * 0.5) * 0.05;
                camera.position.y += Math.cos(time * 0.5) * 0.05;
                controls.update();
            } else {
                camera.lookAt(new THREE.Vector3(0, 0, 0));
            }

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) containerRef.current.removeChild(renderer.domElement);
            renderer.dispose();
            controls.dispose();
        };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 z-0 bg-[#030712] cursor-grab active:cursor-grabbing" />;
};

export default CinematicJourney;
