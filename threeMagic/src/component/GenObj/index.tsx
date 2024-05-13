import { useAtom } from 'jotai';
// import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { selectedComponentAtom, setPositionAtom } from "../store";
import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';

export const GenObj = () => {
    const [selectedComponent] = useAtom(selectedComponentAtom);
    const [setPosition] = useAtom(setPositionAtom);
    const gltf = useLoader(GLTFLoader, selectedComponent);

    useEffect(() => {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                // 这里可以根据需要对mesh进行操作，比如添加阴影
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }, [gltf]);

    return <primitive object={gltf.scene} position={[setPosition.x, setPosition.y, setPosition.z]} />;
}
