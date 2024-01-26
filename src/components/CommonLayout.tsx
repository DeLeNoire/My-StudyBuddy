import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";

const CommonLayout = ({ 
    children,
    className 
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <>
        <div className="flex flex-row">
        <div>
            <Sidebar/>
        </div>
        <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20 pl-10', className)}>
            {children}
        </div>
        </div>
        
        </>
 
        
      
       
    )

}

export default CommonLayout;