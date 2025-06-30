import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function TemplateCard({ template }) {
  const router = useRouter();
  const useTemplate = () => {
    localStorage.setItem('selectedTemplate', template.id);
    router.push('/builder');
  };
  return (
    <div className="border rounded p-4 text-center">
      <Image src={template.image} alt={template.name} width={200} height={260} className="mx-auto mb-2"/>
      <h3 className="font-semibold">{template.name}</h3>
      <p className="text-sm mb-2">{template.description}</p>
      <button onClick={useTemplate} className="bg-gray-800 text-white px-3 py-1 rounded">Use</button>
    </div>
  );
}
