import { RiddleRecord } from "@/types/riddle";
import RiddleCard from "@/components/RiddleCard";

export default function Home() {
  const records: RiddleRecord[] = [
    {
      id: "1",
      title: "Riddle 1",
      location: "Location 1",
      organizer: "Organizer 1",
      status: "SUCCESS",
      particiapnts: ["Participant 1", "Participant 2"],
      comment: "This is a comment for Riddle 1.",
      playDate: "2024-06-01",
    },
    {
      id: "2",
      title: "Riddle 2",
      location: "Location 2",
      organizer: "Organizer 2",
      status: "FAILURE",
      particiapnts: ["Participant 3"],
      comment: "This is a comment for Riddle 2.",
      playDate: "2024-06-02",
    },
    {
      id: "3",
      title: "Riddle 3",
      location: "Location 3",
      organizer: "Organizer 3",
      status: "PARTICIPATED",
      particiapnts: ["Participant 4", "Participant 5", "Participant 6"],
      comment: "This is a comment for Riddle 3.",
      playDate: "2024-06-03",
    },
  ];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">謎解き参加記録</h1>
      <div className="grid gap-4">
        {records.map((record) => (
          <RiddleCard key={record.id} record={record} />
        ))}
      </div>
    </main>
  );
}
