
const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: "25+",
      label: "Years Experience",
    },
    {
      id: 2,
      value: "500+",
      label: "Projects Completed",
    },
    {
      id: 3,
      value: "200+",
      label: "Satisfied Clients",
    },
    {
      id: 4,
      value: "100+",
      label: "Professional Team",
    },
  ];

  return (
    <section className="bg-cbm-navy py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:gap-0 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center border-b border-white/10 p-6 text-center md:border-b-0 md:border-r last:border-r-0"
            >
              <span className="mb-2 text-4xl font-bold text-cbm-lightblue">
                {stat.value}
              </span>
              <span className="text-lg text-white/90">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
