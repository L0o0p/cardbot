import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { selectedComponentAtom } from "../store";
import { useAtom } from "jotai";
import { GenObj } from "../GenObj";

export const ThreeD = () => {
    const [selectedComponent] = useAtom(selectedComponentAtom);

    return (
        <Canvas shadows>
            <color attach="background" args={['#f6d186']} />
            <ambientLight intensity={10} />
            <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={1} />
            <OrbitControls />
            <PerspectiveCamera
                makeDefault
                position={[4.713, 2.615, 5.215]}
                rotation={[-26.63, 38.94, 17.49]}
                fov={50}
                near={0.1}
                far={100000}
            />

            {/* <mesh
                position={[1.5, 0.5, 1.5]}
            >
                <boxGeometry />
                <meshStandardMaterial color={'red'} />
            </mesh> */}
            <gridHelper
                args={[20, 20, 0xff0000]}
            />

            {(selectedComponent) && (<GenObj />)}

        </Canvas>
    )
}