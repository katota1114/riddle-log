import { ClearStatus, RiddleRecord } from "@/types/riddle";
import { useState } from "react";

interface RiddleFormProps {
  onAdd: (record: RiddleRecord) => void;
}

const RiddleForm: React.FC<RiddleFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<ClearStatus>("PARTICIPATED");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord: RiddleRecord = {
      id: Date.now().toString(),
      title,
      location,
      organizer: "Unknown",
      status,
      participants: [],
      comment: "",
      playDate: new Date().toISOString().split("T")[0],
    };
    onAdd(newRecord);
    setTitle("");
    setLocation("");
    setStatus("PARTICIPATED");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 p-6 border rounded-xl bg-gray-50 shadow-inner"
    >
      <div className="grid gap-4">
        <h3 className="font-bold text-gray-700">新しい記録を追加</h3>
        <input
          type="text"
          placeholder="公演名"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="text"
          placeholder="場所"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as ClearStatus)}
          className="p-2 border rounded focus:ring-2 focus:ring-blue-400 outline-none"
        >
          <option value="PARTICIPATED">参加</option>
          <option value="SUCCESS">脱出成功</option>
          <option value="FAILURE">脱出失敗</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-700 transition-all active:scale-95"
        >
          追加
        </button>
      </div>
    </form>
  );
};

export default RiddleForm;
