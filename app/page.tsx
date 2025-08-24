import Clock from "@/components/clock";

const Home = () => {
  return (
    <main>
      <div className="absolute inset-0 bg-black/70 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="z-0 object-cover w-screen h-screen will-change-transform pointer-events-none"
      >
        <source src="/ocean.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute z-20 inset-0 flex flex-col items-center justify-center gap-5 text-center text-white px-4">
        <h1 className="capitalize text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Launching Soon
        </h1>

        <p className="font-light max-w-100 lg:max-w-150 mb-8 text-lg md:text-xl lg:text-2xl">
          Leave your email and we&apos;ll let you know once the site goes live.
        </p>

        <Clock />

        <button
          type="button"
          className="h-16 px-12 capitalize rounded-md text-xl font-normal bg-white text-black cursor-pointer hover:bg-gray-200 transition-colors duration-300"
        >
          Notify me
        </button>
      </div>
    </main>
  );
};

export default Home;
