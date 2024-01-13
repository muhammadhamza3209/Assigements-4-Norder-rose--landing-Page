import React from "react";

import Image from "next/image";

export default function Card(props) {
  return (
    <>
      <div>
        <div className="max-w-[350px] px-9 py-10 text-center ">
          <Image width={300} src={props.per} alt="" />
          <p className="pt-5">
            Connecting artificial intelligence with digital product design
          </p>
        </div>
      </div>
    </>
  );
}
