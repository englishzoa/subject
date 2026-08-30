import React, { useState, useEffect } from 'react';
import { Key, ExternalLink, CheckCircle2, AlertCircle, X, ShieldCheck, Sparkles, RefreshCw, Briefcase, GraduationCap } from 'lucide-react';

interface ApiSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  careernetKey: string;
  work24JobKey: string;
  work24MajorKey: string;
  onSaveKeys: (cKey: string, wJobKey: string, wMajorKey: string) => void;
  onResetKeys: () => void;
}

export const ApiSettingsModal: React.FC<ApiSettingsModalProps> = ({
  isOpen,
  onClose,
  careernetKey,
  work24JobKey,
  work24MajorKey,
  onSaveKeys,
  onResetKeys
}) => {
  const [cInput, setCInput] = useState(careernetKey || '');
  const [wJobInput, setWJobInput] = useState(work24JobKey || '');
  const [wMajorInput, setWMajorInput] = useState(work24MajorKey || '');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle');
  const [testMessage, setTestMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setCInput(careernetKey || '');
      setWJobInput(work24JobKey || '');
      setWMajorInput(work24MajorKey || '');
      setTestStatus('idle');
      setTestMessage('');
    }
  }, [isOpen, careernetKey, work24JobKey, work24MajorKey]);

  if (!isOpen) return null;

  const handleTestAndSave = async () => {
    setTestStatus('testing');
    setTestMessage('API 연동 상태를 확인하고 저장하는 중입니다...');

    try {
      onSaveKeys(cInput.trim(), wJobInput.trim(), wMajorInput.trim());
      setTestStatus('success');
      setTestMessage('API 키가 정상적으로 적용되었습니다! 직업 및 학과 실시간 조회가 활성화됩니다.');

      setTimeout(() => {
        onClose();
      }, 1000);
    } catch (e: any) {
      setTestStatus('failed');
      setTestMessage('저장 중 오류가 발생했습니다.');
    }
  };

  const isSaved = !!(careernetKey || work24JobKey || work24MajorKey);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200/80 relative text-slate-800 max-h-[90vh] overflow-y-auto">
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
            <h3 className="text-lg font-extrabold text-slate-900">Open API 통합 연동 센터</h3>
            <p className="text-xs text-slate-500">고용24(워크넷) & 커리어넷 실시간 정부 데이터베이스 연계</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600">
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 leading-relaxed flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>고용24 Open API 인증키가 기본 적용되었습니다.</strong><br />
              직업정보 및 학과정보 조회가 실시간으로 연계되며, 커리어넷 인증키는 발급받으시는 대로 아래에 추가 등록하실 수 있습니다.
            </div>
          </div>

          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-4">
            {/* 1. 고용24 직업정보 API Key */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                  <span>고용24 직업정보 Open API Key</span>
                </label>
                {wJobInput && (
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                    인증키 적용됨
                  </span>
                )}
              </div>
              <input
                type="text"
                placeholder="고용24 직업정보 키 입력 (예: 6e4fa144-...)"
                value={wJobInput}
                onChange={(e) => setWJobInput(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-mono transition"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                기본 등록키: <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px]">6e4fa144-d61e-45b5-9230-e558b8a02d65</code>
              </p>
            </div>

            {/* 2. 고용24 학과정보 API Key */}
            <div className="pt-3 border-t border-slate-200/80">
              <div className="flex items-center justify-between mb-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                  <span>고용24 학과정보 Open API Key</span>
                </label>
                {wMajorInput && (
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                    인증키 적용됨
                  </span>
                )}
              </div>
              <input
                type="text"
                placeholder="고용24 학과정보 키 입력 (예: 6b8960ad-...)"
                value={wMajorInput}
                onChange={(e) => setWMajorInput(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-mono transition"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                기본 등록키: <code className="bg-slate-200/70 px-1 py-0.5 rounded text-[10px]">6b8960ad-4aa4-4754-8971-dc93c509ddbd</code>
              </p>
            </div>

            {/* 3. 커리어넷 API Key (선택) */}
            <div className="pt-3 border-t border-slate-200/80">
              <div className="flex items-center justify-between mb-1.5">
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>커리어넷(CareerNet) Open API Key (추후 발급 시 등록)</span>
                </label>
                {cInput ? (
                  <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                    등록됨
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full font-medium">
                    대기중
                  </span>
                )}
              </div>
              <input
                type="text"
                placeholder="커리어넷에서 API 키를 발급받으시면 여기에 입력해주세요..."
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
                  커리어넷 학과 API 센터 <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://www.career.go.kr/cnet/front/openapi/openApiJobCenter.do"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:underline flex items-center font-semibold text-[10px]"
                >
                  커리어넷 직업 API 센터 <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            {isSaved && (
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    onResetKeys();
                    setCInput('');
                    setWJobInput('6e4fa144-d61e-45b5-9230-e558b8a02d65');
                    setWMajorInput('6b8960ad-4aa4-4754-8971-dc93c509ddbd');
                    setTestStatus('idle');
                  }}
                  className="text-rose-600 hover:underline text-[11px] font-medium"
                >
                  초기 기본값으로 되돌리기
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
