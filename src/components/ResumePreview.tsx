'use client';

import { Page, Text, View, Document } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
import { RootState } from '../store/resumeSlice';
import { PDFDownloadLink } from '@react-pdf/renderer';

export default function ResumePreview() {
  const { profile, summary, skills, experience } = useSelector(
    (state: RootState) => state.resume
  );

  const MyDoc = (
    <Document>
      <Page size="A4" style={{ padding: 40, fontFamily: 'Helvetica' }}>
        {/* Header */}
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 24, fontFamily: 'Helvetica-Bold' }}>
            {profile.name}
          </Text>
          <Text style={{ fontSize: 12 }}>{profile.headline}</Text>
        </View>
        {/* Summary */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 14, marginBottom: 4 }}>Summary</Text>
          <Text style={{ fontSize: 11 }}>{summary}</Text>
        </View>
        {/* Skills */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 14, marginBottom: 4 }}>Skills</Text>
          <Text style={{ fontSize: 11 }}>{skills.join(', ')}</Text>
        </View>
        {/* Experience */}
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 14, marginBottom: 4 }}>Experience</Text>
          {experience.map((item, idx) => (
            <Text key={idx} style={{ fontSize: 11 }}>
              • {item}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
       <PDFDownloadLink document={MyDoc} fileName="resume.pdf">
         {/* @ts-ignore */}
         {({ loading }: any) =>
           loading ? (
             <button disabled>Preparing PDF...</button>
           ) : (
             <button className="bg-green-600 text-white px-3 py-1 rounded">
               Download PDF
             </button>
           )
         }
       </PDFDownloadLink>
    </div>
  );
}
