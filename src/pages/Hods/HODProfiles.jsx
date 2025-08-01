import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const HODProfiles = () => {
  const { dept } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const res = await fetch(`/md/${dept}.md`);
        if (!res.ok) throw new Error("Not found");
        const text = await res.text();
        setContent(text);
      } catch (error) {
        setContent(`# Not Found\n\nWe couldn't load the profile for **${dept}**.`);
      }
    };

    loadMarkdown();
  }, [dept]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        HOD – {dept.toUpperCase()}
      </h1>
      <div className="bg-white p-6 rounded shadow text-gray-800 prose prose-lg max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default HODProfiles;
