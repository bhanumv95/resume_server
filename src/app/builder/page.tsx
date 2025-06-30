"use client";
import ResumeForm from '../../../components/ResumeForm';
import ResumePreview from '../../../components/ResumePreview';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function BuilderPage() {
  const router = useRouter();
  useEffect(() => {
    const paid = localStorage.getItem('resume_paid');
    if (!paid) router.push('/payment');
  }, []);
  return (
    <div className="flex p-6 space-x-6">
      <div className="w-1/2"><ResumeForm /></div>
      <div className="w-1/2 border p-4"><ResumePreview /></div>
    </div>
  );
}
