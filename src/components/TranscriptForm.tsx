"use client";

import { useState } from "react";

interface Props {
  onSubmit: (text: string) => void;
}

export default function TranscriptForm({ onSubmit }: Props) {
  const [transcript, setTranscript] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(transcript);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full border p-3 rounded"
        rows={6}
        placeholder="Paste meeting transcript..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Tasks
      </button>
    </form>
  );
}