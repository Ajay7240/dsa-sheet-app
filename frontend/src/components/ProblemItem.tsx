import { useEffect, useState } from "react";
import api from "../api/axios";

interface Problem {
  _id: string;
  title: string;
  difficulty: string;
  youtubeLink: string;
  codingLink: string;
  articleLink: string;
}

interface Progress {
  problemId: string;
  completed: boolean;
}

const ProblemItem = ({ topicId }: { topicId: string }) => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchData = async () => {
      const [problemsRes, progressRes] = await Promise.all([
        api.get(`/problems/${topicId}`),
        api.get("/progress")
      ]);

      setProblems(problemsRes.data);

      const progressMap: Record<string, boolean> = {};
      progressRes.data.forEach((p: Progress) => {
        progressMap[p.problemId] = p.completed;
      });

      setProgress(progressMap);
    };

    fetchData();
  }, [topicId]);

  const toggleProgress = async (problemId: string, completed: boolean) => {
    await api.post("/progress", { problemId, completed });
    setProgress((prev) => ({ ...prev, [problemId]: completed }));
  };

  return (
    <div>
      <h3>Problems</h3>

      {problems.map((problem) => (
        <div key={problem._id} className="problem">
          <input
            type="checkbox"
            checked={progress[problem._id] || false}
            onChange={(e) =>
              toggleProgress(problem._id, e.target.checked)
            }
          />

          <strong>{problem.title}</strong> ({problem.difficulty})

          <div className="links">
            <a href={problem.youtubeLink} target="_blank">YouTube</a>
            <a href={problem.codingLink} target="_blank">Code</a>
            <a href={problem.articleLink} target="_blank">Article</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProblemItem;
