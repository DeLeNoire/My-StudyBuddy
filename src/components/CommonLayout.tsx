import { cn } from "@/lib/utils";

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
        <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20 pl-10', className)}>
            {children}
        </div>
        </div>
        
        </>
 
        
      
       
    )

}

export default CommonLayout;