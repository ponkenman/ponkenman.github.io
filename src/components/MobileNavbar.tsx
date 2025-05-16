import { useEffect, useState } from "react";

export function MobileNavbar({ color }: { color: string}) {
    const [mobileNavVisible, setMobileNavVisible] = useState(false);

    // Automatically set visiblity to false if window resized
    useEffect(() => {
        const handler = () => {
            // 768px = md in tailwindcss
            if (window.innerWidth >= 768) {
                setMobileNavVisible(false);
            }
        }

        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    // Prevent scrolling if visible
    useEffect(() => {
        if (mobileNavVisible) {
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.position = "fixed";
        } else {
            const top = document.body.style.top;
            const topString = top.substring(top[0] === '0' ? 0 : 1, top.length - 2);
            const scrollY = parseInt(topString) - window.innerHeight;
            if (!isNaN(scrollY)) {
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo(0, parseInt(`${scrollY}` || '0'));
            }
        }
    }, [mobileNavVisible]);

    return (<>
    { mobileNavVisible
    ? <>
        <nav className="flex h-screen z-1">
            <div className={`${color} fixed md:hidden m-auto z-1 inset-0 overscroll-none flex flex-col items-center justify-center gap-5`}>
                <a style={{animation: "0.5s ease-out fadeInUpNav"}} className="cursor-pointer font-bold hover:underline text-xl">HOME</a>
                <a style={{animation: "0.5s ease-out fadeInUpNav"}} className="cursor-pointer font-bold hover:underline text-xl">FUCK</a>
                <a style={{animation: "0.5s ease-out fadeInUpNav"}} className="cursor-pointer font-bold hover:underline text-xl">THESE</a>
                <a style={{animation: "0.5s ease-out fadeInUpNav"}} className="cursor-pointer font-bold hover:underline text-xl">BUTTONS</a>
            </div>
        </nav>
        <button onClick={() => setMobileNavVisible(false)} className="bg-white shadow-lg cursor-pointer top-5 right-5 size-10 rounded-full p-2 fixed md:hidden z-20">
            <img className="object-contain" src="/x.svg" />
        </button>
      </>
    : <button onClick={() => setMobileNavVisible(true)} className={`bg-white shadow-lg cursor-pointer top-5 right-5 size-10 rounded-full p-2 fixed md:hidden z-20`}>
        <img className="object-contain" src="/menu.svg" />
    </button> }</>);
} 