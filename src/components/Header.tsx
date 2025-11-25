import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">社</span>
          </div>
          <span className="font-bold text-xl">社研通</span>
        </div>
        
        <Button variant="outline" size="sm">
          <User className="w-4 h-4" />
          用户中心
        </Button>
      </div>
    </header>
  );
};