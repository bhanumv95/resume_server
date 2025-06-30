"use client";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, setName, setHeadline, setSkills } from '../store/resumeSlice';

export default function ResumeForm() {
  const dispatch = useDispatch();
  const { profile, skills } = useSelector((state: RootState) => state.resume);

  return (
    <form className="space-y-4">
      <div>
        <label className="block font-medium">Full Name</label>
        <input type="text" value={profile.name} onChange={e => dispatch(setName(e.target.value))} className="input-text w-full"/>
      </div>
      <div>
        <label className="block font-medium">Headline</label>
        <textarea value={profile.headline} onChange={e => dispatch(setHeadline(e.target.value))} className="textarea w-full"/>
      </div>
      <div>
        <label className="block font-medium">Skills (comma-separated)</label>
        <input type="text" value={skills.join(', ')} onChange={e => dispatch(setSkills(e.target.value.split(',').map(s => s.trim())))} className="input-text w-full"/>
      </div>
      <button type="button" onClick={() => window.dispatchEvent(new Event('generateResume'))} className="bg-blue-600 text-white px-4 py-2 rounded">
        Generate Resume
      </button>
    </form>
