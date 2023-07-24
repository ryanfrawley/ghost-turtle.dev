const WordScores = ({ data = [] }) => (
  <table className="table-auto max-w-xs text-sm">
    <thead>
      <tr>
        <th>Word</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ word, score }) => (
        <tr key={word}>
          <td>{word}</td>
          <td>{score}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default WordScores;
