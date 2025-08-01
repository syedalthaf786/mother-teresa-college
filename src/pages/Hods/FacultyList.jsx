import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Enables GitHub-style tables

const FacultyList = () => {
  const { dept } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const res = await fetch(`/md/${dept}-faculty.md`);
        if (!res.ok) throw new Error("Not found");
        const text = await res.text();
        setContent(text);
      } catch (error) {
        setContent(`# Not Found\n\nWe couldn't load the faculty list for **${dept}**.`);
      }
    };

    loadMarkdown();
  }, [dept]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        Faculty – {dept.toUpperCase()}
      </h1>
      <div className="prose prose-blue dark:prose-invert max-w-none overflow-x-auto">
  <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
</div>
    </div>
  );
};

export default FacultyList;
