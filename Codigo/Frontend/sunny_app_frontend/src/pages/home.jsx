import { NavBar } from "../components/navbar";
import { Logo } from "../assets/image";
import { Logo2 } from "../assets/second_image";

// Sunny App Robotics Web
const sunnyURL = "https://robotics.sunnyapp.com/"; 

// Define the Home functional component
export function Home() {
  return (
    <>
      <header>
        <NavBar
          to1={"/register"}
          title1={"Register"}
          to2={sunnyURL}
          title2={"SunnyApp"}
          to3={"/login"}
          title3={"Login"}
        />
      </header>

      <main className=" flex flex-col mx-auto font-source-code-pro text-center mt-1">
        <section className="mt-4">
          <h1 className="font-bold text-7xl text-yellow-500">
            SunnyApp<span className="text-orange-600"> Data</span>
          </h1>
          <p className="text-2xl text-white mt-7 mx-16">
            Welcome to <span className="text-yellow-500">SunnyApp</span>{" "}
            <span className="text-orange-600"> Data</span>, We take simplicity
            to a new level by transforming complex table data into a visually
            appealing and easily understandable figure on this website. This
            streamlined approach allows users to access crucial information at a
            glance, eliminating the need to decipher intricate tables. The site
            presents a clear, graphical representation of data, ensuring a
            user-friendly experience.
          </p>
        </section>
        <section className="flex justify-between">
          <figure className="ml-32">
            <Logo></Logo>
          </figure>
          <figure className="mr-40">
            <Logo2></Logo2>
          </figure>
        </section>
      </main>
    </>
  );
}
