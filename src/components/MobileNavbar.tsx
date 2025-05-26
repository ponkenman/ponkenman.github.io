import { useEffect, useState } from "react";

export function MobileNavbar({ color }: { color: string }) {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  // Automatically set visiblity to false if window resized
  useEffect(() => {
    const handler = () => {
      // 768px = md in tailwindcss
      if (window.innerWidth >= 768) {
        setMobileNavVisible(false);
      }
    };

    window.addEventListener(`resize`, handler);
    return () => {
      window.removeEventListener(`resize`, handler);
    };
  }, []);

  // Prevent scrolling if visible
  useEffect(() => {
    if (mobileNavVisible) {
      document.body.style.top = `-${String(window.scrollY)}px`;
      document.body.style.position = `fixed`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `auto`;
      const top = document.body.style.top;
      const topString = top.substring(top.startsWith(`0`) ? 0 : 1, top.length - 2);
      document.body.style.top = ``;
      document.body.style.position = ``;
      const amount = parseInt(topString || `0`);
      window.scroll({ top: amount });
    }
  }, [mobileNavVisible]);

  return (
    <>
      { mobileNavVisible
        ? (
            <>
              <nav className="flex h-screen z-1 absolute">
                <div style={{ animation: `0.5s ease-out fadeIn` }} className={`${color} fadeIn fixed md:hidden m-auto z-1 inset-0 overscroll-none flex flex-col items-center justify-center gap-5`}>
                  <a style={{ animation: `0.5s ease-out fadeInUpNav` }} className="cursor-pointer font-bold hover:underline text-xl">HOME</a>
                  <a style={{ animation: `0.5s ease-out fadeInUpNav` }} className="cursor-pointer font-bold hover:underline text-xl">FUCK</a>
                  <a style={{ animation: `0.5s ease-out fadeInUpNav` }} className="cursor-pointer font-bold hover:underline text-xl">THESE</a>
                  <a style={{ animation: `0.5s ease-out fadeInUpNav` }} className="cursor-pointer font-bold hover:underline text-xl">BUTTONS</a>
                </div>
              </nav>
              <button onClick={() => { setMobileNavVisible(false); }} className="bg-white shadow-lg cursor-pointer top-5 right-5 size-10 rounded-full p-2 fixed md:hidden z-20">
                <img className="object-contain" src="/x.svg" />
              </button>
            </>
          )
        : (
            <button onClick={() => { setMobileNavVisible(true); }} className="bg-white shadow-lg cursor-pointer top-5 right-5 size-10 rounded-full p-2 fixed md:hidden z-20">
              <img className="object-contain" src="/menu.svg" />
            </button>
          ) }
    </>
  );
}
