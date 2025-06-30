"use client";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const login = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    localStorage.setItem('userEmail', email);
    router.push('/');
  };
  return (
    <form onSubmit={login} className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>
      <input name="email" type="email" required placeholder="Email" className="input-text w-full mb-4"/>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
}
