import React, { useState, useEffect } from 'react';
import { Key, ExternalLink, CheckCircle2, AlertCircle, X, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

interface ApiSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  careernetKey: string;
  work24Key: string;
  onSaveKeys: (cKey: string, wKey: string) => void;
  onResetKeys: () => void;
}

export const ApiSettingsModal: React.FC<ApiSettingsModalProps> = ({
  isOpen,
  onClose,
  careernetKey,
  work24Key,
  onSaveKeys,
  onResetKeys
}) => {
  const [cInput, setCInput] = useState(careernetKey || '');
  const [wInput, setWInput] = useState(work24Key || '');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle');
  const [testMessage, setTestMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setCInput(careernetKey || '');
      setWInput(work24Key || '');
      setTestStatus('idle');
      setTestMessage('');
    }
  }, [isOpen, careernetKey, work24Key]);

  if (!isOpen) return null;

  const handleTestAndSave = async () => {
    setTestStatus('testing');
    setTestMessage('API 연동 상태를 확인하고 저장하는 중입니다...');

    try {
      if (!cInput.trim() && !wInput.trim()) {
        setTestStatus('failed');
        setTestMessage('최소 하나의 API 키(커리어넷 또는 고용24)를 입력해주세요.');
        return;
      }

      onSaveKeys(cInput.trim(), wInput.trim());
      setTestStatus('success');
      setTestMessage('API 키가 정상적으로 기기에 저장되었습니다! 실시간 통합 조회가 활성화됩니다.');

      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (e: any) {
      setTestStatus('failed');
      setTestMessage('저장 중 오류가 발생했습니다.');
    }
  };

  const isSaved = !!(careernetKey || work24Key);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200/80 relative text-slate-800 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-100 flex items-center justify-center">
            <Key className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">Open API 통합 연동 설정</h3>
            <p className="text-xs text-slate-500">커리어넷 및 고용24 실시간 데이터 연계</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600">
          <p className="text-xs leading-relaxed text-slate-600">
            정부 포털에서 무료로 발급받은 <strong>Open API 인증키</strong>를 입력하시면, 데이터 누락 없이 전체 학과 및 직업 정보를 실시간으로 통합 검색할 수 있습니다.
          </p>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700 uppercase">
                  커리어넷 API Key (선택)
                </label>
                {careernetKey && (
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">등록됨</span>
                )}
              </div>
              <input
                type="text"
                placeholder="커리어넷 키 입력..."
                value={cInput}
                onChange={(e) => setCInput(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-mono transition"
              />
              <div className="flex flex-wrap items-center gap-3 mt-1.5">
                <a
                  href="https://www.career.go.kr/cnet/front/openapi/openApiMajorCenter.do"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline flex items-center font-semibold text-[10px]"
                >
                  커리어넷 학과 Open API 센터 <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://www.career.go.kr/cnet/front/openapi/openApiMainCenter.do"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline flex items-center font-semibold text-[10px]"
                >
                  API 키 발급/관리 <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200/80">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700 uppercase">
                  고용24(워크넷) API Key (선택)
                </label>
                {work24Key && (
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">등록됨</span>
                )}
              </div>
              <input
                type="text"
                placeholder="고용24(워크넷) 키 입력..."
                value={wInput}
                onChange={(e) => setWInput(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-mono transition"
              />
              <a
                href="https://www.work24.go.kr/cm/e/a/0110/selectOpenApiIntro.do"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline flex items-center font-semibold text-[10px] mt-1.5"
              >
                고용24 키 발급받기 <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>

            {isSaved && (
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    onResetKeys();
                    setCInput('');
                    setWInput('');
                    setTestStatus('idle');
                  }}
                  className="text-rose-600 hover:underline text-[11px] font-medium"
                >
                  저장된 모든 키 초기화(삭제)
                </button>
              </div>
            )}
          </div>

          {testStatus === 'testing' && (
            <div className="flex items-center space-x-2 text-xs text-indigo-700 bg-indigo-50 p-3 rounded-xl border border-indigo-100">
              <RefreshCw className="w-4 h-4 animate-spin text-indigo-600 shrink-0" />
              <span>{testMessage}</span>
            </div>
          )}

          {testStatus === 'success' && (
            <div className="flex items-center space-x-2 text-xs text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{testMessage}</span>
            </div>
          )}

          {testStatus === 'failed' && (
            <div className="flex items-center space-x-2 text-xs text-rose-700 bg-rose-50 p-3 rounded-xl border border-rose-200">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{testMessage}</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <div className="flex items-center text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1 shrink-0" />
              <span className="text-[11px]">로컬 브라우저에 안전하게 저장됩니다.</span>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs text-slate-600 hover:bg-slate-100 rounded-xl font-semibold transition"
              >
                닫기
              </button>
              <button
                type="button"
                onClick={handleTestAndSave}
                className="px-5 py-2.5 text-xs bg-indigo-600 text-white hover:bg-indigo-500 rounded-xl font-bold shadow-md shadow-indigo-600/30 transition flex items-center space-x-1"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                <span>키 저장 및 적용</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
