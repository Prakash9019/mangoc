import * as React from "react";

const avatarData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc676c847dd08aad64975291055158e16d07e3992805938a6361cf1f3d4c3a9a?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0", alt: "User avatar 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6d194da656cd5f6c7ccf91a2131d3cb1274d00a4b442e6a3b070f3db820e9a7?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0", alt: "User avatar 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/656cbb4eb79a8d4b37426816fcf99c063bdfb859a0a44befbddabc54037fe163?placeholderIfAbsent=true&apiKey=42bb954c825745999302100cb42c8fd0", alt: "User avatar 3" }
];

const Avatar = () => {
  return (
    <section className="flex overflow-hidden gap-2.5 pr-3 pl-px max-w-full h-[30px] w-[422px]">
      <div className="flex">
        {avatarData.map((avatar, index) => (
          <img
            key={index}
            loading="lazy"
            src={avatar.src}
            alt={avatar.alt}
            className="object-contain shrink-0 aspect-square rounded-[1000000px] w-[30px]"
          />
        ))}
      </div>
      <p className="flex flex-col grow shrink-0 my-auto text-base font-extralight leading-5 text-black basis-0 w-fit">
        Join 200+ founders who signed up for beta.
      </p>
    </section>
  );
};

export default Avatar;