'use client';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import * as THREE from 'three';
import getConfig from 'next/config';
export const ModelViewer: React.FC = () => {
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    const { publicRuntimeConfig } = getConfig();
    dracoLoader.setDecoderPath('/draco/'); // Path to Draco decoder files
    gltfLoader.setDRACOLoader(dracoLoader);

    const myModel = useLoader(GLTFLoader, `https://github.com/Priyansh2116/rudraweb2/releases/download/v0.1/rover.gltf`, loader => {
        loader.setDRACOLoader(dracoLoader);
    });

    const ref = useRef<THREE.Group>(null);

    useEffect(() => {
        if (ref.current) {
            // Calculate the bounding box of the model
            const box = new THREE.Box3().setFromObject(ref.current);
            const size = new THREE.Vector3();
            box.getSize(size);

            // Scale the model to fit the desired size
            const maxDimension = Math.max(size.x, size.y, size.z);
            const desiredSize = 2; // Adjust this value as needed
            const scale = desiredSize / maxDimension;

            ref.current.scale.set(scale, scale, scale);

            // Center the model
            box.getCenter(ref.current.position).multiplyScalar(-1);
        }
    }, [myModel]);

    return (
        <Canvas style={{ height: '500px', width: '100%' }}>
            {/* OrbitControls allow for rotating the model */}
            <OrbitControls enableZoom={true} enableRotate={true} />

            {/* Ambient light to illuminate all parts of the model evenly */}
            <ambientLight intensity={0.5} />

            {/* Additional directional lights for better lighting */}
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <directionalLight position={[-5, -5, -5]} intensity={1.5} />

            {/* Point light for highlights and dynamic lighting */}
            <pointLight position={[10, 10, 10]} intensity={2} />
            <pointLight position={[-10, -10, -10]} intensity={2} />

            <group ref={ref}>
                <primitive object={myModel.scene} />
            </group>
        </Canvas>
    );
};
