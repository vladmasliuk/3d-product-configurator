import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";

import Product from '../components/Product';

const ProductPage = () =>{
    return(
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
            {/* light */}
            <ambientLight intensity={0.7} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
            <Suspense fallback={null}>
                <Product/>
                {/* texture */}
                <Environment preset="city" />
                {/* bottom shadow */}
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
            </Suspense>
            <OrbitControls/>
        </Canvas>
    )
}

export default ProductPage;
