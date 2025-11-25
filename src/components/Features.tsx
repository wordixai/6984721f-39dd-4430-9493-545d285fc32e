import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Image, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "读写",
    description: "智能文献阅读与写作辅助",
    path: "/reading-writing",
  },
  {
    icon: Image,
    title: "绘图",
    description: "数据可视化与图表生成",
    path: "/visualization",
  },
  {
    icon: BarChart3,
    title: "数据处理",
    description: "高效的数据分析与整理",
    path: "/data-processing",
  },
];

export const Features = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => window.location.href = feature.path}
            >
              <CardContent className="pt-12 pb-8 px-6 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <Button variant="outline" className="w-full">
                  进入
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};