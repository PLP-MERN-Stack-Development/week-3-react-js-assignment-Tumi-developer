import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FeedbackForm({ onAdd }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || !rating.trim()) return;

    onAdd({ name, comment, rating });

    setName("");
    setComment("");
    setRating("");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Your name..."
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Textarea
        placeholder="My task..."
        value={comment}
        onChange={e => setComment(e.target.value)}
      />

      <Input
        placeholder="Rating (1-5)"
        type="number"
        value={rating}
        onChange={e => setRating(e.target.value)}
      />

      <Button type="submit">Submit Task</Button>
    </form>
  );
}