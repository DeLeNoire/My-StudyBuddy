import CommonLayout from "@/components/CommonLayout";
import Sidebar from "@/components/Sidebar";
import RenderModel from "./RenderModel/page";

export default function Home() {
  return (
    <div>
      <Sidebar/>
      <h1>
        <RenderModel/>
      </h1>
    </div>
      
  );
}
