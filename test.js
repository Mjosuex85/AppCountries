const info = useMemo(() => {
  return {
    labels,
    datasets: result.map((item, index) => {
      return {
        label: item.path,
        data: item.counts,
        transition: 0.1,
        tension: 0.1,
        borderColor: "FF5733",
        borderRadius: "30px",
        pointBackgroundColor: "FF5733",
        borderWidth: 0.9,
      };
    }),
  };
}, [labels]);

