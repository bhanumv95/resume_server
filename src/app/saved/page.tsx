"use client";
import { useEffect, useState } from 'react';

export default function SavedPage() {
  const [resumes, setResumes] = useState<any[]>([]);
  const email = typeof window !== 'undefined' ? localStorage.getItem('userEmail') : null;
  useEffect(() => {
    if (email) {
      const data = localStorage.getItem('resumes_' + email);
      setResumes(data ? JSON.parse(data) : []);
    }
  }, [email]);
  if (!email) return <p>Please login to view saved resumes.</p>;
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Saved Resumes</h1>
      {resumes.length === 0 ? <p>No resumes saved.</p> : (
        <ul className="list-disc pl-5">
          {resumes.map((r, i) => <li key={i}>Resume #{i+1}</li>)}
        </ul>
      )}
    </div>
  );
}
