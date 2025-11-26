import React from 'react';
import { SectionCard } from './SectionCard';
import { RELATIONSHIP_DATA, GROUP_B_LOGIC, CLASSIFICATION_DATA } from '../constants';

export const RelationSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <SectionCard 
        title="IV. Quan hệ vị trí & Cấu tạo" 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        }
        delay={400}
      >
        <div className="space-y-3">
          {RELATIONSHIP_DATA.map((rel, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center justify-between bg-slate-800/50 p-3 rounded-lg border border-slate-700">
              <div className="text-chem-accent font-medium w-full md:w-1/3 text-center md:text-left">{rel.left}</div>
              <div className="hidden md:flex text-slate-500 mx-2">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <div className="md:hidden text-slate-500 my-1">↕️</div>
              <div className="text-white font-medium w-full md:w-1/3 text-center md:text-right">{rel.right}</div>
            </div>
          ))}
        </div>

        <div className="mt-8">
           <h4 className="font-semibold text-yellow-400 mb-3 flex items-center gap-2">
             ⚠️ Cách xác định nhóm B: <span className="text-slate-300 font-normal italic text-sm">(n-1)d<sup>a</sup> ns<sup>b</sup></span>
           </h4>
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left text-slate-300 rounded-lg overflow-hidden">
               <thead className="text-xs uppercase bg-slate-700 text-slate-300">
                 <tr>
                   <th scope="col" className="px-6 py-3">Tổng electron (a + b)</th>
                   <th scope="col" className="px-6 py-3">Nhóm</th>
                 </tr>
               </thead>
               <tbody>
                 {GROUP_B_LOGIC.map((row, idx) => (
                   <tr key={idx} className="bg-slate-800 border-b border-slate-700">
                     <td className="px-6 py-4 font-medium text-white">{row.sum}</td>
                     <td className="px-6 py-4 text-chem-accent font-bold">{row.group}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </SectionCard>

      <SectionCard title="Phân loại nguyên tố" delay={500}
        icon={
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
          </svg>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h5 className="font-bold text-white border-b border-slate-600 pb-1">Theo cấu hình e</h5>
              <div className="p-2 bg-slate-800 rounded border-l-4 border-indigo-500">
                <span className="font-bold text-indigo-400">s, p, d, f: </span>
                <span className="text-sm">Là nguyên tố mà e cuối cùng điền vào phân lớp tương ứng.</span>
              </div>
              <ul className="text-sm space-y-1 list-disc list-inside text-slate-300 pl-2">
                <li><span className="text-indigo-300">{CLASSIFICATION_DATA.config.s_p}</span></li>
                <li><span className="text-indigo-300">{CLASSIFICATION_DATA.config.d_f}</span></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold text-white border-b border-slate-600 pb-1">Theo tính chất hóa học</h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 font-bold">IA-IIIA:</span>
                  <span>Kim loại (trừ H, B)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">VA-VIIA:</span>
                  <span>Phi kim</span>
                </li>
                 <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">VIIIA:</span>
                  <span>Khí hiếm</span>
                </li>
                 <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">Nhóm B:</span>
                  <span>Kim loại chuyển tiếp</span>
                </li>
              </ul>
            </div>
        </div>
      </SectionCard>
    </div>
  );
};
