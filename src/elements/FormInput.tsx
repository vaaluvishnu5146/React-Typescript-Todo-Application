export default function FormInput({
  label,
  type,
  name,
  value,
  error,
  touched,
  handleChange,
  handleBlur,
}: any) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className={`${
          touched && error ? `bg-red-200` : `bg-gray-50`
        } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        placeholder="**************"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched && error && (
        <p className="text-sm italic text-red-500">{error}</p>
      )}
    </div>
  );
}
