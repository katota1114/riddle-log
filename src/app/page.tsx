"use client";

import { useState } from "react";
import { RiddleRecord } from "@/types/riddle";
import RiddleCard from "@/components/RiddleCard";

export default function Home() {
  const [records, setRecords] = useState<RiddleRecord[]>([
    {
      id: "1",
      title: "Riddle 1",
      location: "Location 1",
      organizer: "Organizer 1",
      status: "SUCCESS",
      participants: ["Participant 1", "Participant 2"],
      comment: "This is a comment for Riddle 1.",
      playDate: "2024-06-01",
    },
    {
      id: "2",
      title: "Riddle 2",
      location: "Location 2",
      organizer: "Organizer 2",
      status: "FAILURE",
      participants: ["Participant 3"],
      comment: "This is a comment for Riddle 2.",
      playDate: "2024-06-02",
    },
    {
      id: "3",
      title: "Riddle 3",
      location: "Location 3",
      organizer: "Organizer 3",
      status: "PARTICIPATED",
      participants: ["Participant 4", "Participant 5", "Participant 6"],
      comment: "This is a comment for Riddle 3.",
      playDate: "2024-06-03",
    },
  ]);

  const addRecord = () => {
    const newRecord: RiddleRecord = {
      id: Date.now().toString(),
      title: `Riddle ${records.length + 1}`,
      location: `Location ${records.length + 1}`,
      organizer: `Organizer ${records.length + 1}`,
      status: "PARTICIPATED",
      participants: [`Participant ${records.length + 4}`],
      comment: `This is a comment for Riddle ${records.length + 1}.`,
      playDate: new Date().toISOString().split("T")[0],
    };
    setRecords([...records, newRecord]);
  };

  const removeRecord = (id: string) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">謎解き参加記録</h1>
      <button
        onClick={addRecord}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        新しい記録を追加
      </button>

      <div className="grid gap-4">
        {records.map((record) => (
          <RiddleCard key={record.id} record={record} onRemove={removeRecord} />
        ))}
      </div>
    </main>
  );
}
