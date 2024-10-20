import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CubesAnimation() {
    const firstLeftCubeRef = useRef<HTMLImageElement | null>(null);
    const secondLeftCubeRef = useRef<HTMLImageElement | null>(null);
    const thirdLeftCubeRef = useRef<HTMLImageElement | null>(null);

    const firstRightCubeRef = useRef<HTMLImageElement | null>(null);
    const secondRightCubeRef = useRef<HTMLImageElement | null>(null);
    const thirdRightCubeRef = useRef<HTMLImageElement | null>(null);
    const cubesContainerRef = useRef<HTMLDivElement | null>(null);

    let firstLRect = { x: 0, y: -100, rotation: -45 };
    let secondLRect = { x: -40, y: -170 };
    let thirdLRect = { x: 40, y: 200 };

    const updateRectangles = () => {
        const windowWidth = window.innerWidth;

        if (windowWidth < 621) {
            firstLRect = { x: 0, y: -25, rotation: -45 };
            secondLRect = { x: -20, y: -90 };
            thirdLRect = { x: 20, y: 70 };
            updateCubesContainerClasses();
        } else if (windowWidth < 768) {
            firstLRect = { x: 0, y: -25, rotation: -45 };
            secondLRect = { x: -20, y: -90 };
            thirdLRect = { x: 20, y: 130 };

            updateCubesContainerClasses();

        } else {
            firstLRect = { x: 0, y: -100, rotation: -45 };
            secondLRect = { x: -40, y: -170 };
            thirdLRect = { x: 40, y: 200 };
        }
    };

    const updateCubesContainerClasses = () => {
        if (cubesContainerRef?.current) {
            cubesContainerRef.current.classList.remove("max-md:translate-x-[10%]");
            cubesContainerRef.current.classList.remove("max-lg:translate-x-[18%]");
            cubesContainerRef.current.classList.add("translate-x-0");
        }
    };
    useEffect(() => {

        if (secondRightCubeRef) {
            gsap.to(secondRightCubeRef.current,
                {
                    rotation: 2,
                    x: 50,
                    y: 70,
                    duration: 2,
                    ease: "power1.inOut",
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 2,
                    onYoyo: () => {
                        const t1 = setTimeout(() => {
                            startAnimationLeft();
                        }, 1000);
                        const t2 = setTimeout(() => {
                            startAnimationRight()
                        }, 2000)

                    }
                }
            )
        }

        // ===== Animation des cubes du côté droit
        const startAnimationRight = () => {
            if (firstRightCubeRef && thirdRightCubeRef) {
                gsap.to(firstRightCubeRef.current,
                    {
                        x: -20,
                        y: 60,
                        duration: 2,
                        ease: "power1.inOut",
                        repeat: -1,
                        yoyo: true,
                        repeatDelay: 2
                    }
                );
                gsap.to(thirdRightCubeRef.current,
                    {
                        rotate: 2,
                        x: 30,
                        y: -50,
                        duration: 2,
                        ease: "power1.inOut",
                        repeat: -1,
                        yoyo: true,
                        repeatDelay: 2
                    }
                );
            }
        }

        // ===== Animation des cubes du côté gauche
        const startAnimationLeft = () => {
            if (firstLeftCubeRef && secondLeftCubeRef && thirdLeftCubeRef) {
                gsap.to(firstLeftCubeRef.current, {
                    rotation: firstLRect.rotation,
                    y: firstLRect.y,
                    duration: 2,
                    ease: "power1.inOut",
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 2
                });

                gsap.to(secondLeftCubeRef.current,
                    {
                        x: secondLRect.x,
                        y: secondLRect.y,
                        duration: 2,
                        ease: "power1.inOut",
                        repeat: -1,
                        yoyo: true,
                        repeatDelay: 2
                    });

                gsap.to(thirdLeftCubeRef.current,
                    {
                        x: thirdLRect.x,
                        y: thirdLRect.y,
                        duration: 2,
                        ease: "power1.inOut",
                        repeat: -1,
                        yoyo: true,
                        repeatDelay: 2
                    }
                );
            }
        }

        const handleResize = () => {
            updateRectangles();
        }

        updateRectangles();


        // ===== Ecoute sur le redimensionnement de la fenêtre
        window.addEventListener("resize", handleResize);


        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, []);


    return (
        <div
            ref={cubesContainerRef}
            className="absolute 
        top-1/3 
        translate-x-0 
        md:transform 
        max-md:translate-x-[10%] 
        max-lg:translate-x-[18%] 
        lg:-translate-y-[15%] w-full"
        >
            <div className="relative top-0 w-full flex flex-col md:flex-row justify-center ">
                <div className="block">
                    <Image
                        ref={firstLeftCubeRef}
                        src={"/images/cube-in-left-large.png"}
                        className='absolute 
                        left-10 w-44 sm:w-64 md:w-[462px]
                        '
                        width={200}
                        height={200}
                        alt='Cube in left'
                    />

                    <Image
                        ref={secondLeftCubeRef}
                        src={"/images/cube-in-left-medium.png"}
                        className="absolute top-8 left-32 md:left-56 lg:left-64 w-44 sm:w-64 md:w-[462px]"
                        width={200}
                        height={200}
                        alt='Cube in left'
                    />


                    <Image
                        ref={thirdLeftCubeRef}
                        src={"/images/cube-in-left-small.png"}
                        className="absolute -top-12 lg:-top-44 left-28 md:left-56 lg:left-64 w-44 sm:w-64 md:w-[462px]"
                        width={200}
                        height={200}
                        alt='Cube in left'
                    />
                </div>

                <div className="lg:block hidden">
                    <Image
                        ref={firstRightCubeRef}
                        src={"/images/cube-in-right-large.png"}
                        className='absolute right-10'
                        sizes="(max-width: 462px) 100vw, 50vw"
                        width={462} height={259} alt='Cube in right' />

                    <Image
                        ref={secondRightCubeRef}
                        src={"/images/cube-in-right-medium.png"}
                        className="absolute top-20 right-28 rotate-[10deg]"
                        width={230} height={200}
                        alt='Cube in right'
                        loading="lazy"
                    />

                    <Image
                        ref={thirdRightCubeRef}
                        src={"/images/cube-in-right-small.png"}
                        className="absolute top-36 right-72 -rotate-[32deg]"
                        loading="lazy"
                        width={170} height={170} alt='Cube in right' />
                </div>
            </div >
        </div>
    )
}