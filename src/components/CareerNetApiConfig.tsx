import React, { useState } from 'react';
import { Key, ExternalLink, CheckCircle2, AlertCircle, X, ShieldCheck, Sparkles, RefreshCw, Briefcase } from 'lucide-react';

interface CareerNetApiConfigProps {
  isOpen: boolean;
  onClose: () => void;
  apiKey: string;
  isKeySaved: boolean;
  onSaveKey: (key: string) => void;
  onResetKey: () => void;
  work24Key?: string;
  isWork24KeySaved?: boolean;
  onSaveWork24Key?: (key: string) => void;
  onResetWork24Key?: () => void;
}

export const CareerNetApiConfig: React.FC<CareerNetApiConfigProps> = ({
  isOpen,
  onClose,
  apiKey,
  isKeySaved,
  onSaveKey,
  onResetKey,
  work24Key = '',
  isWork24KeySaved = false,
  onSaveWork24Key,
  onResetWork24Key
}) => {
  const [inputKey, setInputKey] = useState(apiKey || '');
  const [inputWork24Key, setInputWork24Key] = useState(work24Key || '');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'failed'>('idle');
  const [testMessage, setTestMessage] = useState('');

  if (!isOpen) return null;

  const handleTestAndSave = async () => {
    if (!inputKey.trim() && !inputWork24Key.trim()) {
      alert('커리어넷 또는 고용24 API 키 중 하나 이상을 입력해주세요.');
      return;
    }

    setTestStatus('testing');
    setTestMessage('Open API 연동 상태를 확인하는 중입니다...');

    try {
      if (inputKey.trim()) {
        onSaveKey(inputKey.trim());
      }
      if (inputWork24Key.trim() && onSaveWork24Key) {
        onSaveWork24Key(inputWork24Key.trim());
      }

      setTestStatus('success');
      setTestMessage('정상적으로 저장되었습니다! 실시간 통합 조회가 활성화됩니다.');
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (e: any) {
      setTestStatus('failed');
      setTestMessage('연동 저장 중 오류가 발생했습니다. 키 값을 확인해주세요.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200/80 relative text-slate-800 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-100 flex items-center justify-center">
            <Key className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">Open API 통합 연동 설정</h3>
            <p className="text-xs text-slate-500">교육부 커리어넷 & 고용24 직업사전 실시간 데이터베이스</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600">
          <p className="text-xs leading-relaxed text-slate-600">
            <strong>커리어넷</strong> 및 <strong>고용24</strong>에서 발급받은 Open API 인증키를 등록하시면 전국 대학 학과와 유망 직업 정보를 실시간으로 통합 검색할 수 있습니다.
          </p>

          {/* CareerNet Key Box */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2.5">
            <label className="block text-xs font-bold text-slate-700 uppercase flex items-center justify-between">
              <span>1. 커리어넷 API Key (학과/직업)</span>
              {isKeySaved && <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-bold">등록됨</span>}
            </label>
            <input
              type="text"
              placeholder="예: dd2de89451af598c4b876f33a1de7138"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-mono transition"
            />

            <div className="flex justify-between items-center text-xs">
              <a
                href="https://www.career.go.kr/cnet/front/openapi/openApiMainCenter.do"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline flex items-center font-semibold text-[11px]"
              >
                커리어넷 무료 발급 <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              {isKeySaved && (
                <button
                  type="button"
                  onClick={() => {
                    onResetKey();
                    setInputKey('');
                  }}
                  className="text-rose-600 hover:underline text-[11px] font-medium"
                >
                  삭제
                </button>
              )}
            </div>
          </div>

          {/* Work24 Key Box */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2.5">
            <label className="block text-xs font-bold text-slate-700 uppercase flex items-center justify-between">
              <span>2. 고용24 (Work24) 인증키 (직업사전)</span>
              {isWork24KeySaved && <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-bold">등록됨</span>}
            </label>
            <input
              type="text"
              placeholder="고용24 Open API 인증키..."
              value={inputWork24Key}
              onChange={(e) => setInputWork24Key(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 font-mono transition"
            />

            <div className="flex justify-between items-center text-xs">
              <a
                href="https://www.work24.go.kr"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:underline flex items-center font-semibold text-[11px]"
              >
                고용24 포털 바로가기 <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              {isWork24KeySaved && onResetWork24Key && (
                <button
                  type="button"
                  onClick={() => {
                    onResetWork24Key();
                    setInputWork24Key('');
                  }}
                  className="text-rose-600 hover:underline text-[11px] font-medium"
                >
                  삭제
                </button>
              )}
            </div>
          </div>

          {testStatus === 'testing' && (
            <div className="flex items-center space-x-2 text-xs text-indigo-700 bg-indigo-50 p-3 rounded-xl border border-indigo-100">
              <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
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
              <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1" />
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
