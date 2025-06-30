"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PaymentPage() {
  const router = useRouter();
  const confirm = () => {
    localStorage.setItem('resume_paid', 'yes');
    router.push('/builder');
  };
  return (
    <div className="p-6 text-center">
      <h1 className="text-xl mb-4">Pay ₹30 to Continue</h1>
      <Image src="/upi_qr.png" alt="UPI QR" width={200} height={200} className="mx-auto"/>
      <button onClick={confirm} className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">I Have Paid</button>
    </div>
  );
}
