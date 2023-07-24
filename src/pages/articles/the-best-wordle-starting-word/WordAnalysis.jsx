const WordAnalysis = ({ word = "", frequencies }) => {
  return (
    <div className="flex justify-evenly">
      {word.toUpperCase().split("").map((c, index) => (
        <div className="flex flex-col" key={index}>
          <div className="border-2 border-gray-300 px-4 text-7xl font-mono font-bold">
            {c}
          </div>
          <div className="text-md text-gray-600 text-center dark:text-gray-400">
            {Math.round(frequencies[index] * 1000) / 10}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default WordAnalysis;
