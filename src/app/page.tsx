"use client";

import { useState } from "react";
import TranscriptForm from "@/components/TranscriptForm";
import TaskList from "@/components/TaskList";
import { generateTasks } from "@/services/api";
import { Task } from "@/types/task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTranscriptSubmit = async (text: string) => {
    const data = await generateTasks(text);
    setTasks(data.tasks);
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        InsightBoard Dependency Engine
      </h1>

      <TranscriptForm onSubmit={handleTranscriptSubmit} />

      <TaskList tasks={tasks} />
    </main>
  );
}