import { useState, useEffect } from "react";
import React, { useRef } from "react";
import Sign_in from "./pages/Sign_in";
function App() {
    const [theme, setTheme] = useState(
        localStorage.theme || "system" // default to system
    );

    // Apply theme on mount + whenever theme changes
    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else if (theme === "light") {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            // "system" → respect OS setting
            localStorage.removeItem("theme");
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
            }
        }
    }, [theme]);
    // Handler hook for when Outside click dropdown close
    let useClickOutside = (handler) => {
        let domNode = useRef();

        useEffect(() => {
            let maybeHandler = (event) => {
                if (!domNode.current.contains(event.target)) {
                    handler();
                }
            };

            document.addEventListener("mousedown", maybeHandler);

            return () => {
                document.removeEventListener("mousedown", maybeHandler);
            };
        });

        return domNode;
    };



    // Handler hook for when Outside click dropdown close End Code ====>>


    const Dropdown = () => {
        const [dropdownOpen, setDropdownOpen] = useState(false);

        let domNode = useClickOutside(() => {
            setDropdownOpen(false);
        });


        return (
            <>
                {/* <!-- ====== Dropdowns Section Start --> */}
                <section className="bg-[#ffffff] dark:bg-[var(--color-bg-dark)] border-b-1 border-[#c8c8c8] dark:border-[#2d2f38]  py-3 dark:bg-dark">
                    <div className="container">
                        <div className="flex justify-center">
                            {/* one */}
                            <div ref={domNode} className="w-full sm:w-1/2 lg:w-1/2">
                                <div className="text-center ">
                                    <div className="relative inline-block text-left">
                                        <button
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            className={`bg-[#efefef]  dark:bg-[var(--color-bg-light-dark)] hover:dark:bg-[#293749] flex md:w-50 items-center rounded-[5px] px-5 py-2 md:py-[13px] border border-[#c9c7c7] dark:border-[#2d2f38] text-base font-medium text-[#787878] dark:text-white`}
                                        >
                                            Change theme
                                            <span className="pl-4">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="fill-current"
                                                >
                                                    <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                                                </svg>
                                            </span>
                                        </button>
                                        <div
                                            className={`shadow-1 dark:shadow-box-dark absolute left-0 z-40 mt-2 w-full rounded-md bg-[#efefef] dark:bg-[#364153] py-2 transition-all ${dropdownOpen
                                                ? "top-full opacity-100 visible"
                                                : "top-[110%] invisible opacity-0"
                                                }`}
                                        >
                                            <DropdownItem label="Light mode" themeText="Light" />
                                            <DropdownItem label="Dark mode" themeText="Dark" />
                                            <DropdownItem label="System" themeText="System" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End */}
                        </div>
                    </div>
                </section>
                {/* <!-- ====== Dropdowns Section End --> */}
            </>
        );
    };
    const DropdownItem = ({ label, themeText, type }) => {
        return (
            <button
                onClick={() => setTheme(themeText.toLowerCase())}
                className=" md:w-full text-[#787878]  dark:text-white hover:bg-[#c0c0c0] dark:text-dark-6 hover:dark:bg-[#26345e] block px-5 py-2  text-base"
            >
                {
                    label
                }
            </button>
        );
    };
    
    return (
        <>

            <div className="h-screen  bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
                <Dropdown />
                <Sign_in />
            </div>
            <div className="text-center p-4 bg-gray-200 dark:bg-[#02021e] text-gray-800 dark:text-gray-200">
                Footer
            </div>
        </>
    );
}

export default App;


