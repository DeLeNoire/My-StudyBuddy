
import Image from "next/image";
import { Tabs } from "./ui/tabs";


export function TabsProjects() {
  const tabs = [
    {
      title: "Vercel Clone",
      value: "Vercel",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Deploy your projects like Vercel</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Automated SAAS",
      value: "Automated SAAS",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Automation App service </p>
          <AutoSaas/>
        </div>
      ),
    },
    {
      title: "Repl-It",
      value: "Repl-It",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Repl-It</p>
          <Replit/>
        </div>
      ),
    },
    {
      title: "PDF-Chat",
      value: "Pdf-chat",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>AI Chat Application for PDFs </p>
          <Pdfchat/>
        </div>
      ),
    },
    {
      title: "3D-MultiWindow",
      value: "3D-MultiWindow",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Local-store ThreeJS MultiWindows</p>
          <MWVideo/>
        </div>
      ),
    },
    
    {
      title: "OrderBook",
      value: "OrderBook",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>MultiType Order Book</p>
          <Orderbook/>
        </div>
      ),
    },
    
    
  ];
  

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-center justify-center my-40">
    <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/Images/vercelimg.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export function MWVideo() {
  return (
    <Image
      src="/Images/vercelimg.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  )
}

{/* <video width="1000" height="1000" controls preload="true" muted loop className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto">
      <source src="/videos/3DMultiWindowVid.mp4" type="video/mp4" />
    </video> */}

const Replit = () => {
  return (
    <Image
      src="/Images/vercelimg.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const Orderbook = () => {
  return (
    <Image
      src="/Images/vercelimg.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const Pdfchat = () => {
  return (
    <Image
      src="/Images/vercelimg.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const AutoSaas = () => {
  return (
    <Image
      src="/Images/vercelimg.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};