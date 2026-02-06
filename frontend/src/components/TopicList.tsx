import { useEffect, useState } from "react";
import api from "../api/axios";
import ProblemItem from "./ProblemItem";

interface Topic {
  _id: string;
  title: string;
}

const TopicList = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  useEffect(() => {
    api.get("/topics").then((res) => setTopics(res.data));
  }, []);

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        {topics.map((topic) => (
          <li
            key={topic._id}
            onClick={() => setSelectedTopic(topic._id)}
            style={{ cursor: "pointer" }}
          >
            {topic.title}
          </li>
        ))}
      </ul>

      {selectedTopic && <ProblemItem topicId={selectedTopic} />}
    </div>
  );
};

export default TopicList;
