"use client";

import { useState } from "react";
import TranscriptForm from "@/components/TranscriptForm";
import TaskList from "@/components/TaskList";
import TaskGraph from "@/components/TaskGraph";
import { generateTasks } from "@/services/api";
import { Task } from "@/types/task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleTranscriptSubmit = async (text: string) => {
    setIsLoading(true);
    try {
      const data = await generateTasks(text);
      setTasks(data.tasks);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        AutoTasker AI
      </h1>

      <TranscriptForm onSubmit={handleTranscriptSubmit} isLoading={isLoading} />

      <TaskList tasks={tasks} />
      {tasks.length > 0 && (
        <TaskGraph tasks={tasks} />
      )}
    </main>
  );
}
