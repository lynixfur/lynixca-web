const WeAreVRContainer = () => {
    return (
        <main className="relative h-[500px] w-full">
            <video
                loop
                autoPlay
                muted
                className="bg-video h-full w-full object-cover object-top"
                poster="/static/video/shy.jpg"
            >
                <source src="/vids/shy.webm" type="video/webm" />
                {/*<source src="/vids/shy.mp4" type="video/mp4" />*/}
            </video>
            <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white h-full flex items-center justify-center">
                <div className="w-2/3">
                    <h1 className="text-4xl font-bold">Explore Virtual Reality</h1>
                    <p className="mt-2">
                        VRChat is a virtual reality social platform where users can create, share, and explore virtual worlds with others. WaterWolf is a vibrant community in VRChat where creativity and friendship flourish. We design and build worlds, avatars, and stage lighting to craft unforgettable experiences. Join us and be part of our big, open family as we create amazing adventures together.
                    </p>
                    <img src="/imgs/logos/waterwolf_community.png" className="mt-3"/>
                    <br/><br/>
                    <a href="#" className="bg-cyan-600 hover:bg-cyan-700 transition-colors px-7 py-3 mt-10 text-md font-semibold">Explore Now!</a>
                </div>
            </div>
        </main>
    );
};

export default WeAreVRContainer;
