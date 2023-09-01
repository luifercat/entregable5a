const BarProgreceStat = ({ stat }) => {
  const getPorcentBarProgrece = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const porcent = (100 * statValue) / MAX_STAT_VALUE;
    return `${porcent}%`;
  };

  return (
    <article>
      <section className={"flex justify-between px-2  "}>
        <h5>{stat.name}</h5>
        <span>{stat.value}/255</span>
      </section>
      <div className="h-6 bg-ice rounded-md mx-1 shadow-2xl">
        <div
          style={{ width: getPorcentBarProgrece(stat.value) }}
          className="h-full bg-gradient-to-r from-electric/50 to-fighting/50 rounded-md"
        ></div>
      </div>
    </article>
  );
};
export default BarProgreceStat;
