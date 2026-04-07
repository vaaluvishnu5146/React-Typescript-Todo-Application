export default function TextInputV1({
  value,
  handleInputChange,
  handleSubmit,
}: {
  value: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="input-card">
      <input
        type="text"
        placeholder="Add a task..."
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit} className="add-btn">
        Add
      </button>
    </div>
  );
}
