 const info = useMemo(
    function () {
      return {
        labels,
        datasets: [
          {
      
            label: lines[0]?.path,
            data: lines[0]?.counts,
            transition: 0.1,
            tension: 0.1,
            borderColor: "FF5733",
            borderRadius: "30px",
            pointBackgroundColor: "FF5733",
            borderWidth: 0.9,
          }
        ],
      };
    },
    [labels]
  );
