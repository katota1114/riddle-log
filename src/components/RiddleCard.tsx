import { RiddleRecord } from "@/types/riddle";
interface RiddleCardProps {
  record: RiddleRecord;
}

const RiddleCard: React.FC<RiddleCardProps> = ({ record }) => {
  return (
    <div key={record.id} className="border p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold">{record.title}</h2>
      <p className="text-sm text-gray-600"> @ {record.location}</p>
      <div className="mt-2">
        <span
          className={`px-2 py-1 rounded text-xs ${record.status === "SUCCESS" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {record.status}
        </span>
      </div>
      <p className="mt-2 text-gray-700">{record.comment}</p>
      <p className="mt-1 text-xs text-gray-400">
        {record.participants.join(", ")}
      </p>
    </div>
  );
};

export default RiddleCard;
