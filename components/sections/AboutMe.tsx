import React from "react";

const AboutMe = () => {
    return (
        <>
            <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-neutral-900">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <h3 className="flex gap-5 lg:gap-10 items-end"><span className="text-3xl lg:text-8xl text-cyan-500 font-bold">About Me</span></h3>
                        <div className="grid lg:grid-cols-5 gap-5 mt-20">
                            <div className="lg:col-span-3 flex flex-col gap-5">
                                <div className="flex flex-wrap gap-2 bg-black bg-opacity-5 dark:bg-opacity-40 p-5">
                                    <p className="font-bold">
                                     👋 Hey, I'm Lynix! I'm a Cloud IT Administrator and Analyst, building secure and scalable solutions by day, and a furry who enjoys virtual reality!
                                    </p>
                                </div>{" "}
                                <div className="flex flex-col gap-5 relative text-sm p-5 border-white hover:border-cyan-700 transition-colors border-opacity-10 dark:border-opacity-20 border-4">
                                    <span id="about-computers" className="absolute top-0 -mt-40" />{" "}
                                    <h4 className="text-lg font-bold">💻 DevOps / Cloud Administration</h4>{" "}
                                    <p>
                                        I'm a DevOps Developer with experience in both in-house development at Furality and Waterwolf and cloud solutions, utilizing Azure Services daily. Beyond that, I manage my own infrastructure, Lynx Network, which leverages Proxmox, Serveless Computing, and Cloudflare Pages.
                                    </p>{" "}
                                </div>{" "}
                                <div className="flex flex-col gap-5 relative text-sm p-5 border-white hover:border-cyan-700 transition-colors  border-opacity-10 dark:border-opacity-20 border-4">
                                    <span id="about-furry" className="absolute top-0 -mt-40" />{" "}
                                    <h4 className="text-lg font-bold">🦊 Furry</h4>{" "}
                                    <p>
                                        Furry life since 2020! I'm all about conventions, hanging out in VRChat with my fellow furries, and soaking up the amazing art scene within the fandom. Lynix is one of my fursonas, but you might see me rocking others too! I don't bite come talk to me!
                                    </p>
                                </div>
                                <div className="flex flex-col gap-5 relative text-sm p-5 border-white hover:border-cyan-700 transition-colors  border-opacity-10 dark:border-opacity-20 border-4">
                                    <span id="about-furry" className="absolute top-0 -mt-40" />{" "}
                                    <h4 className="text-lg font-bold">🍁 Favorite City - Toronto</h4>{" "}
                                    <p>
                                        Toronto's vibrant tapestry of cultures captured my imagination on my first visit in March 2024. It further fueled my fascination with big cities, similar to Montreal. Toronto has become my favorite city, solidifying my love for big cities.
                                    </p>
                                </div>
                            </div>{" "}
                            <div className="lg:col-span-2 flex flex-col gap-5 overflow-x-hidden">
                                <div className="flex gap-1 border-white border-opacity-10 dark:border-opacity-20 flex justify-center">
                                    <img src="/imgs/brightlynix.png" className="w-[300px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;
