export const FeatureDetails = () => {
  const details = [
    {
      title: "读写功能",
      description: "AI 驱动的文献阅读理解，智能摘要生成，论文写作建议，引用管理自动化",
    },
    {
      title: "绘图功能",
      description: "一键生成学术图表，支持多种可视化类型，自动配色方案，高质量导出",
    },
    {
      title: "数据处理",
      description: "快速数据清洗，统计分析工具，自动化数据转换，可视化数据报告",
    },
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
        <div className="space-y-8">
          {details.map((detail, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-3">{detail.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};