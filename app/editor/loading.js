import Image from "next/image";

const Loading = ({ loadingText = "Preparing your editor..." }) => {
  return (
    <main className="w-screen h-screen flex flex-col gap-2 justify-center items-center text-gray-300">
      <div className="max-w-[75px]">
        <Image
          src="/deev_loader_002.gif"
          width={1000}
          height={1000}
          alt="Deev Editor Loader"
          priority
          quality={100}
        />
      </div>
      <p>{loadingText}</p>
    </main>
  );
};

export default Loading;
