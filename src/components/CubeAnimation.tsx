import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function CubeAnimation() {
    const firstLeftCubeRef = useRef(null);
    const secondLeftCubeRef = useRef(null);
    const thirdLeftCubeRef = useRef(null);

    const firstRightCubeRef = useRef(null);
    const secondRightCubeRef = useRef(null);
    const thirdRightCubeRef = useRef(null);

    useEffect(() => {
        // Animation du premier cube

        gsap.to(firstLeftCubeRef.current, {
            rotation: -45, // Rotation de -45 degrés
            y: "-50",     // Déplacement vers le haut sur l'axe Y
            duration: 4,   // Durée de l'animation
            ease: "power1.inOut", // Easing pour l'animation
            repeat: -1,    // Répète l'animation à l'infini
            yoyo: true,    // Joue l'animation en sens inverse
            repeatDelay: 4
        });

        // Animation du second cube

        gsap.to(secondLeftCubeRef.current,
            {
                y: -400,
                x: 250,
                duration: 4,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
                repeatDelay: 4
            });
        gsap.to(thirdLeftCubeRef.current,
            {
                y: -200,
                duration: 4,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
                repeatDelay: 4
            }
        )
    }, []);

    return (
        <div className='flex '>
            {/* Left cubes */}
            <div>
                {/* 1er cube */}
                {/* <Image
                    ref={firstLeftCubeRef} // Référence au premier cube
                    src={"/images/cube-in-left-large.png"}
                    className='absolute top-1/2 left-20 transform -translate-y-1/2 z-10 opacity-100'
                    width={462}
                    height={259}
                    alt='Cube in left'
                />

                <Image
                    ref={secondLeftCubeRef}
                    src={"/images/cube-in-left-medium.png"}
                    className='absolute z-0 top-1/2 opacity-100'
                    style={{ transform: 'translate(300px, -200px)' }}
                    width={462}
                    height={259}
                    alt='Cube in left'
                />


                <Image
                    ref={thirdLeftCubeRef}
                    src={"/images/cube-in-left-small.png"}
                    className='absolute top-1/2 
                    z-0 opacity-100'
                    style={{ transform: 'translate(300px, -400px)' }}
                    width={462}
                    height={259}
                    alt='Cube in left'
                /> */}
            </div>

            {/* Right cubes */}
            <div >
                <Image src={"/images/cube-in-right-large.png"} className='absolute top-1/2 right-0 transform -translate-y-1/2  z-00 opacity-70' width={600} height={259} alt='Cube in right' />
                <Image src={"/images/cube-in-right-medium.png"} className='absolute top-1/2 right-0 transform -translate-y-3/4 -translate-x-1/2  -z-0 opacity-100' width={462} height={259} alt='Cube in right' />
                <Image src={"/images/cube-in-right-small.png"} className='absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-3/4  z-0 opacity-60' width={462} height={259} alt='Cube in right' />
            </div>
        </div>
    );
}
