import Image from "next/image";

import { FaBars } from "react-icons/fa";

import a from "../public/image1.png";

import b from "../public/Mask Group.png";

import f from "../public/fb.png";

import t from "../public/twitter.png";

import z from "../public/Rectangle 8.png";

import eye from "../public/eye - Copy.png";

import pk from "../public/keyboard.png";

import Para from "./(compoments)/para/para";

import List from "./(compoments)/list/list";
import Card from "./(compoments)/card/card";

export default function Home() {
  return (
    <>
      <div className="max-w-[1600px]">
        <nav>
          <div class="logo">Norder rose</div>
          <input type="checkbox" id="click" />
          <label for="click">
            <FaBars />
          </label>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contect</a>
            </li>
          </ul>
        </nav>

        <hr className="border-1 border-black" />
      </div>

      {/* section 1 start */}

      <div className="max-w-[880px] mx-auto mt-10">
        <p className="lg:text-6xl md:text-4xl text-2xl sm:text-center pl-2 md:pl-0 font-bold lg:leading-[70px] ">
          A few words about this blog platform, Ghost, and how this
        </p>
      </div>

      <div className="max-w-[500px] mx-auto text-center mt-10  ">
        <p className="text-2xl leading-[40px]">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
      </div>

      <div className="mt-28">
        <Image width={2000} src={a} alt="b" />
      </div>

      <div className="max-w-[900px] mx-auto mt-16">
        <hr className=" border-1 border-black pt-3 mb-8" />
      </div>

      {/* section 1 Close */}

      {/* section2 star */}
      <div className="max-w-[900px] mx-auto mt-10 ">
        <div className=" sm:flex justify-between">
          <div color="max-w-[300px]">
            <div className="flex gap-7 justify-center md:justify-start items-center">
              <Image src={b} alt="n" />
              <div className="max-w-[189px]">
                <p>
                  <b>MIKA MATIKAINEN</b>
                </p>
                <p className="-mt-1">MIKA MATIKAINEN</p>
              </div>
            </div>
          </div>

          <div className="max-w-[400px] md:mt-0  mt-3">
            <div className="flex gap-1 justify-center md:justify-start">
              <div className="border-2 border-black py-1 px-12 bg-slate-400 ">
                <button>
                  <Image src={t} alt="z" />
                </button>
              </div>
              <div className="border-2 border-black py-1 px-12 bg-slate-400 ">
                <button>
                  <Image src={f} alt="y" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 Close */}

      {/* section 3 start */}

      <Para />

      <Para />

      <div className="max-w-[900px] text-center mx-auto mt-10 mb-7">
        <p className=" text-4xl font-bold">Next on the pipeline</p>
      </div>

      <Para />

      <div className="max-w-[950px] mx-auto mt-16">
        <p>
          Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
          posuere maximus dui et fringilla.
        </p>
      </div>

      <div className="mt-10 max-w-[900px] mx-auto mb-11 ">
        <Image src={z} alt="l" />
      </div>

      <div className="max-w-[950px] mx-auto mt-16">
        <p>
          Image caption centered this way and I'll make this a bit longer to
          indicate the amount of line-height..
        </p>
      </div>

      <Para />

      <Para />

      <div className="max-w-[900px] text-center mx-auto mt-10 mb-7">
        <p className=" text-4xl font-bold">First item in the list</p>
      </div>

      <div className="max-w-[800px] md:pl-28 mt-[100px]  ">
        <p className="md:pl-20 pl-3">First item in the list</p>
      </div>

      {/* section 3 Close */}

      {/* section 4 start */}

      <List />

      <div className="max-w-[900px] text-center mx-auto mt-16 mb-7">
        <p className=" text-4xl font-bold">Thanks for reading Mika</p>
      </div>

      <div className="max-w-[800px] md:pl-24 pl-5 mt-[100px]  ">
        <div className="flex mb-10 ">
          <p className="md:pl-20">First item in the list: </p>

          <div className="space-x-1">
            <a className="underline" href="">
              Twittwe
            </a>
            <a className="underline" href="">
              Linhdink
            </a>
            <a className="underline" href="">
              Hospote
            </a>
          </div>
        </div>
      </div>

      {/* section 4 Close */}

      {/* eye start  */}

      <div className="mt-12">
        <div className="flex items-center">
          <hr className=" border-2 border-black w-[100%] " />

          <Image src={eye} alt="bl" />

          <hr className=" border-2 border-black w-[100%] " />
        </div>
      </div>

      <div></div>

      <div className="max-w-[1250px] grid lg:grid-cols-3 md:grid-cols-2 mx-auto justify-center  mt-10">
        <Card per={require("../public/Rectangle 4.png")} />
        <Card per={require("../public/Rectangle 10.png")} />
        <Card per={require("../public/Rectangle 37.png")} />
        <Card per={require("../public/keyboard.png")} />
        <Card per={require("../public/Rectangle 11.png")} />
        <Card per={require("../public/Rectangle 38.png")} />
      </div>

      {/* second list */}

      <div className="max-w-[1000px] border-t-[10px] mx-1  border-black border-2 md:mx-auto mt-20 bg-slate-50 h-96 ">
        <div className="max-w-[400px] mx-auto text-center pt-16">
          <p className="text-3xl font-bold">Sign up for the newsletter</p>

          <p className="pt-16">
            If you want relevant updates occasionally, sign up for the private
            newsletter. Your email is never shared.
          </p>

          <div className="pt-16">
            <input
              className="border-2 border-gray-500"
              type="text"
              placeholder=""
            />
            <button className="px-3 py-2n border-2 border-black ">
              Sigen up
            </button>
          </div>
        </div>
      </div>

      {/* second list close */}

      {/* footer */}

      <div className=" w-[100%] bg-black text-white mt-20">
        <div className="max-w-[1600px]">
          <p className=" lg:text-3xl md:2xl: text-xl">
            DIGITAL PRODUCT DESIGN REMOTE WORK UX DESIGN DISTRIBUTED TEAMS
            CREATIVITY STRATEGY SUSPENSE GROQTH
          </p>
        </div>

        <div className="max-w-[500px] mx-auto text-center">
          <p className="pt-5 text-3xl font-bold">NORDIC ROSE</p>

          <p className="pt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing eli Duis eu velit
            tempus erat egestas efficitur. In ha habitasse platea dictumst.
            Fusce a nunc eget ligul suscipit finibus.
          </p>

          <p className="pt-10">
            © 2012-2020 Nordic Rose Co. All rights reserved.
          </p>
        </div>
      </div>

      {/* footer Close */}
    </>
  );
}
