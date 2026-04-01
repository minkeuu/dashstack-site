export const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;

  return (
    <div className="bg-[#3B82F6] text-white p-2 rounded-md">
      {/* ❗ Показываем только то, что нужно ❗ */}
      <p>{payload[0].payload.sales}</p>
    </div>
  );
};
