import { Department } from '../types';

export const ADDITIONAL_DEPARTMENTS_DATA: Department[] = [
  // ==========================================
  // [공학 계열 추가 학과]
  // ==========================================
  {
    id: 'dept_eng_software',
    name: '소프트웨어학과 (SW응용학부)',
    category: '공학 계열',
    summary: '실무 소프트웨어 개발, 대규모 시스템 엔지니어링, 클라우드 아키텍처, 알고리즘 최적화를 집중 훈련합니다.',
    desc: '컴퓨팅 사고력을 바탕으로 실무 프로젝트 중심의 풀스택 개발, 모바일 앱, 대규모 분산 시스템 설계 및 소프트웨어 품질 관리(QA)를 깊이 있게 학습합니다.',
    mainCurriculum: ['소프트웨어공학', '자료구조및알고리즘', '웹/앱응용프로그래밍', '오픈소스SW개발', '소프트웨어테스팅', '데이터베이스시스템'],
    coreRecommendedSubjects: ['미적분Ⅰ', '정보', '대수'],
    recommendedSubjects: ['인공지능 수학', '데이터 과학', '미적분Ⅱ', '기하', '정보과제연구'],
    highSchoolSubjects: {
      general: ['대수', '미적분Ⅰ', '정보', '영어 독해와 작문', '물리학'],
      career: ['인공지능 수학', '미적분Ⅱ', '기하', '데이터 과학', '정보과학'],
      convergence: ['창의 공학 설계', '융합과학 탐구', '미디어 의사소통']
    },
    similarDepartments: ['컴퓨터공학과', '인공지능공학과', '사이버보안학과', '모바일소프트웨어학과'],
    certifications: ['정보처리기사', 'AWS Certified Developer', 'SQLD/SQLP', '리눅스마스터'],
    relatedJobs: ['풀스택 개발자', '모바일 앱 개발자', 'DevOps 엔지니어', '소프트웨어 QA 엔지니어'],
    relatedSubjectIds: ['s_math_alg', 's_math_calc1', 's_info_info', 's_info_ai_base', 's_math_calc2', 's_math_geom'],
    topUniversities: ['성균관대', '중앙대', '한양대', '경북대', '부산대', '세종대'],
    careerProspects: '국내외 빅테크 기업(네이버, 카카오, 라인, 쿠팡, 구글, 토스) 및 스타트업 유니콘 기업 진출 활발'
  },
  {
    id: 'dept_eng_smart_city',
    name: '스마트시티공학과 (도시공학·교통시스템)',
    category: '공학 계열',
    summary: 'IoT, 빅데이터, 자율주행 교통망, 디지털 트윈 기술을 결합하여 지속가능한 지능형 미래 도시를 설계합니다.',
    desc: '도시계획, 공간분석 GIS, 지능형 교통체계(ITS), 스마트 인프라 관리 기술을 융합하여 기후위기와 도시 과밀화를 해결하는 차세대 도시 엔지니어를 양성합니다.',
    mainCurriculum: ['스마트도시계획론', '지리정보시스템(GIS)', '도시빅데이터분석', '교통공학및ITS', '도시재생과디자인', '스마트인프라설계'],
    coreRecommendedSubjects: ['미적분Ⅰ', '확률과 통계', '한국지리'],
    recommendedSubjects: ['세계시민과 지리', '도시의 이해', '데이터 과학', '기하', '기후변화와 지속가능한 세계'],
    highSchoolSubjects: {
      general: ['대수', '미적분Ⅰ', '확률과 통계', '한국지리', '물리학'],
      career: ['기하', '데이터 과학', '도시의 이해', '기후변화와 지속가능한 세계'],
      convergence: ['여행지리', '창의 공학 설계', '사회문제 탐구']
    },
    similarDepartments: ['도시공학과', '건설환경공학과', '교통공학과', '공간정보공학과'],
    certifications: ['도시계획기사', '교통기사', '측량및지형공간정보기사', '빅데이터분석기사'],
    relatedJobs: ['스마트시티 기획자', '도시계획가', '지능형교통망(ITS) 설계자', 'GIS 공간정보 연구원'],
    relatedSubjectIds: ['s_math_calc1', 's_math_prob_stat', 's_soc_korea_geog', 's_soc_world_geog', 's_math_geom'],
    topUniversities: ['서울대', '연세대', '한양대', '서울시립대', '중앙대', '인하대'],
    careerProspects: 'LH한국토지주택공사, 국토연구원, 한국도로공사, 스마트시티 국가시범도시 사업단, 지자체 도시계획직'
  },
  {
    id: 'dept_eng_semiconductor_sys',
    name: '시스템반도체공학과 (반도체트랙)',
    category: '공학 계열',
    summary: '초미세 Fabless 설계, SoC(System on Chip), NPU(신경망처리장치), 차세대 반도체 소자를 연구합니다.',
    desc: '물리학과 전자공학의 접점에서 Verilog/VHDL 회로 설계, 반도체 집적회로(IC) 아키텍처, 첨단 패키징 공정을 체계적으로 습득합니다.',
    mainCurriculum: ['반도체소자공학', '집적회로설계(VLSI)', '디지털시스템설계', '신호및시스템', '반도체공정실습', '컴퓨터구조'],
    coreRecommendedSubjects: ['물리학', '미적분Ⅰ', '미적분Ⅱ', '기하'],
    recommendedSubjects: ['고급 물리학', '물리학 실험', '전자와 에너지', '화학', '인공지능 기초'],
    highSchoolSubjects: {
      general: ['물리학', '화학', '대수', '미적분Ⅰ', '정보'],
      career: ['미적분Ⅱ', '기하', '물리학 실험', '고급 물리학'],
      convergence: ['창의 공학 설계', '융합과학 탐구', '전기 전자 기초']
    },
    similarDepartments: ['반도체시스템공학과', '전자공학과', '지능형반도체공학과', '나노공학과'],
    certifications: ['반도체설계기사', '전자기사', '무선설비기사'],
    relatedJobs: ['반도체 설계 엔지니어(Fabless)', '반도체 공정/수율 엔지니어', 'NPU/GPU 아키텍트', '임베디드 하드웨어 개발자'],
    relatedSubjectIds: ['s_sci_phys', 's_math_calc1', 's_math_calc2', 's_math_geom', 's_sci_chem'],
    topUniversities: ['성균관대', '고려대', '연세대', '서강대', '한양대', 'KAIST', 'UNIST'],
    careerProspects: '삼성전자 DS부문, SK하이닉스, ARM, 엔비디아코리아, 팹리스 스타트업 채용연계 계약학과 다수'
  },
  {
    id: 'dept_eng_robot_mobility',
    name: '지능형로봇공학과 (자율주행·메카트로닉스)',
    category: '공학 계열',
    summary: '자율주행 모빌리티, 휴머노이드 로봇, 센서 퓨전, ROS 기반 로봇 제어 시스템을 집중 연구합니다.',
    desc: '기계 메커니즘 설계, 임베디드 회로, SLAM(동시적 위치추정 및 지도작성), 딥러닝 로봇 비전을 융합하여 스스로 판단하고 움직이는 차세대 로봇 시스템을 만듭니다.',
    mainCurriculum: ['로봇공학개론', '자동제어', '센서및계측공학', '로봇운영체제(ROS)', '모빌리티자율주행공학', '마이크로프로세서'],
    coreRecommendedSubjects: ['물리학', '미적분Ⅰ', '기하', '정보'],
    recommendedSubjects: ['미적분Ⅱ', '고급 물리학', '역학과 에너지', '인공지능 기초', '창의 공학 설계'],
    highSchoolSubjects: {
      general: ['물리학', '대수', '미적분Ⅰ', '정보', '기술·가정'],
      career: ['미적분Ⅱ', '기하', '역학과 에너지', '로봇과 공학'],
      convergence: ['창의 공학 설계', '융합과학 탐구', '정보과제연구']
    },
    similarDepartments: ['기계공학과', '메카트로닉스공학과', '미래모빌리티공학과', '제어계측공학과'],
    certifications: ['메카트로닉스기사', '일반기계기사', '임베디드기사', '로봇기구개발기사'],
    relatedJobs: ['자율주행 알고리즘 개발자', '로봇 제어 엔지니어', '휴머노이드 기구설계자', '드론 제어 시스템 연구원'],
    relatedSubjectIds: ['s_sci_phys', 's_math_calc1', 's_math_geom', 's_info_info', 's_math_calc2'],
    topUniversities: ['한양대', '광운대', 'KAIST', 'POSTECH', '경북대', '인하대'],
    careerProspects: '현대자동차(자율주행), 보스턴다이내믹스, 로보티즈, 레인보우로보틱스, 두산로보틱스 등 로봇/완성차 기업'
  },
  {
    id: 'dept_eng_cyber_security',
    name: '사이버보안학과 (정보보호학부)',
    category: '공학 계열',
    summary: '국가 기반망과 기업 클라우드를 사이버 위협으로부터 지키는 화이트해커와 보안 아키텍트를 양성합니다.',
    desc: '암호학, 네트워크 침투 테스트, 리버스 엔지니어링, 블록체인 보안, 디지털 포렌식을 교육하여 고도화된 사이버 공격을 선제적으로 방어합니다.',
    mainCurriculum: ['현대암호학', '네트워크보안', '시스템해킹및보안', '악성코드분석', '디지털포렌식', '클라우드보안정책'],
    coreRecommendedSubjects: ['정보', '대수', '확률과 통계'],
    recommendedSubjects: ['이산수학', '인공지능 수학', '미적분Ⅰ', '현대사회와 윤리', '정보과제연구'],
    highSchoolSubjects: {
      general: ['정보', '대수', '확률과 통계', '독서와 작문', '현대사회와 윤리'],
      career: ['인공지능 수학', '정보과학', '데이터 과학', '인문학과 윤리'],
      convergence: ['창의 공학 설계', '사회문제 탐구', '독서 토론과 글쓰기']
    },
    similarDepartments: ['정보보안학과', '컴퓨터공학과', '국방디지털융합학과', '융합보안학과'],
    certifications: ['정보보안기사', 'CISSP', 'CEH(공인 윤리적 해커)', 'CCNA/CCNP'],
    relatedJobs: ['화이트해커', '정보보안 컨설턴트', '디지털 포렌식 수사관', '보안관제 총괄 아키텍트'],
    relatedSubjectIds: ['s_info_info', 's_math_alg', 's_math_prob_stat', 's_soc_ethics'],
    topUniversities: ['고려대(사이버국방학과)', '세종대', '순천향대', '아주대', '단국대', '국민대'],
    careerProspects: '국가정보원, 금융보안원, 안랩, SK쉴더스, 카카오페이/토스 보안팀, 국방부 사이버작전사령부'
  },
  {
    id: 'dept_eng_bio_medical',
    name: '바이오메디컬공학과 (의공학과)',
    category: '공학 계열',
    summary: '첨단 의료기기(MRI, 초음파, 인공장기), 생체 신호 처리 및 디지털 헬스케어 플랫폼을 개발합니다.',
    desc: '의학적 기초 지식과 전기전자·기계공학을 융합하여 난치병 진단 바이오센서, 스마트 워치 헬스케어 알고리즘, 수술용 로봇을 연구합니다.',
    mainCurriculum: ['생체계측공학', '의료영상처리(MRI/CT)', '생체역학', '인공장기및생체재료', '디지털헬스케어시스템', '의료기기인허가론'],
    coreRecommendedSubjects: ['물리학', '생명과학', '미적분Ⅰ'],
    recommendedSubjects: ['화학', '미적분Ⅱ', '생체와 신호', '보건', '기하'],
    highSchoolSubjects: {
      general: ['물리학', '생명과학', '화학', '미적분Ⅰ', '대수'],
      career: ['미적분Ⅱ', '기하', '물리학 실험', '생명과학 실험', '보건'],
      convergence: ['창의 공학 설계', '융합과학 탐구']
    },
    similarDepartments: ['의공학과', '바이오뇌공학과', '헬스케어공학과', '생체의공학과'],
    certifications: ['의공기사', '방사선비파괴검사기사', '전자기사', '빅데이터분석기사'],
    relatedJobs: ['의료기기 R&D 연구원', '디지털 헬스케어 플랫폼 기획자', '임상시험 CRA', '병원 의공사'],
    relatedSubjectIds: ['s_sci_phys', 's_sci_bio', 's_math_calc1', 's_sci_chem', 's_math_calc2'],
    topUniversities: ['서울대', '연세대(의공학부)', '한양대', 'KAIST(바이오및뇌공학과)', '고려대(바이오의공학부)', '경희대'],
    careerProspects: '삼성바이오에피스, 지멘스헬시니어스, 메드트로닉, 존슨앤드존슨 메디컬, 식약처 의료기기안전국'
  },

  // ==========================================
  // [자연과학 계열 추가 학과]
  // ==========================================
  {
    id: 'dept_sci_biochem',
    name: '생화학과 (시스템생명화학)',
    category: '자연과학 계열',
    summary: '단백질 구조 분석, 세포 신호전달, 효소 반응 메커니즘을 화학적 분자 수준에서 규명하여 난치병 치료의 열쇠를 찾습니다.',
    desc: '생명현상의 근본인 단백질, 핵산, 지질의 생화학적 반응을 밝히고, 유전자 재조합 및 대사공학을 통해 신약 후보물질을 발굴합니다.',
    mainCurriculum: ['생화학Ⅰ·Ⅱ', '분자세포생물학', '효소학', '대사생화학', '단백질구조학', '분자의생명과학실험'],
    coreRecommendedSubjects: ['화학', '생명과학', '미적분Ⅰ'],
    recommendedSubjects: ['세포와 물질대사', '화학 반응의 세계', '물질과 에너지', '생물의 유전', '확률과 통계'],
    highSchoolSubjects: {
      general: ['화학', '생명과학', '대수', '미적분Ⅰ', '독서와 작문'],
      career: ['세포와 물질대사', '화학 반응의 세계', '생물의 유전', '화학 실험'],
      convergence: ['생명과학 실험', '융합과학 탐구', '과학과 문명']
    },
    similarDepartments: ['분자생물학과', '생명화학과', '응용생화학과', '의생명과학과'],
    certifications: ['바이오화학제품제조기사', '화학분석기사', '변리사(생명화학)'],
    relatedJobs: ['바이오 신약 연구원', '단백질 구조 분석관', '유전자 치료제 개발자', '국립보건연구원 연구관'],
    relatedSubjectIds: ['s_sci_chem', 's_sci_bio', 's_math_calc1', 's_sci_cell_metabolism', 's_sci_chem_react'],
    topUniversities: ['서울대', '연세대', '고려대', '서강대', '한양대', '경북대', '부산대'],
    careerProspects: '삼성바이오로직스, 셀트리온, 유한양행, 한미약품, 한국생명공학연구원(KRIBB), 질병관리청'
  },
  {
    id: 'dept_sci_astronomy',
    name: '천문우주학과 (우주탐사학부)',
    category: '자연과학 계열',
    summary: '외계행성 탐사, 암흑물질, 우주망원경 데이터 분석, 인공위성 궤도역학을 연구하는 첨단 우주과학입니다.',
    desc: '전파천문학, 우주환경학, 천체물리학 이론과 인공지능 영상처리를 결합하여 우주의 기원을 추적하고 달·화성 탐사 시대를 선도합니다.',
    mainCurriculum: ['천문학개론', '천체물리학', '관측천문학및실습', '우주비행역학', '우주환경학', '전파천문학'],
    coreRecommendedSubjects: ['물리학', '지구과학', '미적분Ⅰ', '기하'],
    recommendedSubjects: ['미적분Ⅱ', '고급 물리학', '행성우주과학', '데이터 과학', '인공지능 수학'],
    highSchoolSubjects: {
      general: ['물리학', '지구과학', '대수', '미적분Ⅰ', '정보'],
      career: ['미적분Ⅱ', '기하', '물리학 실험', '지구과학 실험', '행성우주과학'],
      convergence: ['융합과학 탐구', '우주와 생명', '창의 공학 설계']
    },
    similarDepartments: ['우주과학과', '항공우주공학과', '지구시스템과학과', '천체물리학과'],
    certifications: ['무선설비기사', '빅데이터분석기사', '기상기사'],
    relatedJobs: ['한국항공우주연구원(KARI) 연구원', '천문연구원(KASI) 연구원', '인공위성 궤도제어원', '우주기상 예보관'],
    relatedSubjectIds: ['s_sci_phys', 's_sci_earth', 's_math_calc1', 's_math_geom', 's_math_calc2'],
    topUniversities: ['서울대', '연세대', '경희대', '충남대', '세종대', 'KAIST'],
    careerProspects: '우주항공청(KASA), 한국천문연구원, KAI(한국항공우주산업), 한화에어로스페이스, NASA 공동연구'
  },
  {
    id: 'dept_sci_earth_env',
    name: '지구환경과학과 (대기·해양·지질)',
    category: '자연과학 계열',
    summary: '지구온난화 기후변화 예측, 해양 탄소순환, 지진·화산 재해 방재 및 지하수 자원을 탐사합니다.',
    desc: '대기, 해양, 지권의 유기적 상호작용을 위성 관측 데이터와 수치 모델링을 통해 분석하여 인류의 생존과 지속가능한 지구환경을 지킵니다.',
    mainCurriculum: ['대기역학', '물리해양학', '지구물리학', '기후변화와탄소중립', '환경지구화학', '원격탐사및위성분석'],
    coreRecommendedSubjects: ['지구과학', '물리학', '미적분Ⅰ', '화학'],
    recommendedSubjects: ['기후변화와 지속가능한 세계', '해양과학', '환경과 녹색성장', '확률과 통계', '데이터 과학'],
    highSchoolSubjects: {
      general: ['지구과학', '물리학', '화학', '미적분Ⅰ', '대수'],
      career: ['기후변화와 환경', '해양과학', '지구과학 실험', '데이터 과학'],
      convergence: ['기후변화와 지속가능한 세계', '융합과학 탐구', '생태와 환경']
    },
    similarDepartments: ['대기과학과', '해양학과', '지질환경과학과', '기후환경에너지학과'],
    certifications: ['기상기사', '해양환경기사', '토양환경기사', '수질환경기사'],
    relatedJobs: ['기상청 예보관', '극지연구소 연구원', '해양과학기술원 연구원', 'ESG 환경컨설턴트'],
    relatedSubjectIds: ['s_sci_earth', 's_sci_phys', 's_math_calc1', 's_sci_chem', 's_gen_eco_env'],
    topUniversities: ['서울대', '연세대', '고려대', '이화여대', '부산대', '경북대'],
    careerProspects: '기상청, 국립기상과학원, 극지연구소, 해양환경공단, 글로벌 탄소배출권 평가기관'
  },

  // ==========================================
  // [의료·보건 계열 추가 학과]
  // ==========================================
  {
    id: 'dept_med_pt',
    name: '물리치료학과 (재활헬스사이언스)',
    category: '의료보건 계열',
    summary: '신경계 손상, 근골격계 질환, 스포츠 부상 환자의 운동기능 회복과 통증 치료를 위한 전문 물리치료사를 양성합니다.',
    desc: '인체 해부생리학과 운동역학을 바탕으로 도수치료, 신경계 재활치료, 로봇보조 재활장비 운용 능력을 체계적으로 익힙니다.',
    mainCurriculum: ['임상운동학', '신경계물리치료학', '근골격계물리치료학', '정형도수치료', '보조공학및의지보조기', '소아재활치료'],
    coreRecommendedSubjects: ['생명과학', '물리학', '보건'],
    recommendedSubjects: ['운동과 건강', '인간과 심리', '인체 구조와 기능', '스포츠 과학', '독서와 작문'],
    highSchoolSubjects: {
      general: ['생명과학', '물리학', '체육', '독서와 작문', '보건'],
      career: ['운동과 건강', '인간과 심리', '스포츠 생활', '생명과학 실험'],
      convergence: ['사회문제 탐구', '독서 토론과 글쓰기']
    },
    similarDepartments: ['작업치료학과', '재활공학과', '스포츠의학과', '재활치료학과'],
    certifications: ['물리치료사 면허증(국가고시)', '국제 슈로스(Schroth) 척추측만증 치료사', '스포츠 물리치료 자격'],
    relatedJobs: ['대학병원 물리치료사', '프로스포츠 구단 전담 피지컬 트레이너', '재활전문병원 팀장', '국립재활원 연구원'],
    relatedSubjectIds: ['s_sci_bio', 's_sci_phys', 's_gen_health', 's_pe_exercise_health', 's_gen_psychology'],
    topUniversities: ['연세대(미래)', '가천대', '을지대', '단국대', '대구대', '삼육대'],
    careerProspects: '상급종합병원 재활의학과, 관절·척추 전문병원, 프로야구/축구 구단 의무트레이너, 보건소'
  },
  {
    id: 'dept_med_clinical_path',
    name: '임상병리학과 (의생명진단과학)',
    category: '의료보건 계열',
    summary: '혈액, 유전자(PCR), 체액, 조직 세포를 정밀 분석하여 암과 전염병을 신속·정확하게 확진하는 진단검사 전문가를 양성합니다.',
    desc: '분자진단학, 임상미생물학, 면역혈액학 실습을 통해 차세대 유전체 염기서열분석(NGS)과 체외진단의료기기 개발 역량을 함양합니다.',
    mainCurriculum: ['임상화학', '진단혈액학', '임상미생물학', '조직병리학및세포학', '분자유전진단학', '수혈의학'],
    coreRecommendedSubjects: ['생명과학', '화학'],
    recommendedSubjects: ['세포와 물질대사', '생물의 유전', '보건', '화학 실험', '생명과학 실험'],
    highSchoolSubjects: {
      general: ['생명과학', '화학', '대수', '독서와 작문', '보건'],
      career: ['세포와 물질대사', '생물의 유전', '생명과학 실험', '화학 실험'],
      convergence: ['융합과학 탐구', '사회문제 탐구']
    },
    similarDepartments: ['의과학과', '진단검사의학과', '생명의과학과', '보건과학과'],
    certifications: ['임상병리사 면허증(국가고시)', '국제임상병리사(ASCPi)', '분자병리사 자격증'],
    relatedJobs: ['대학병원 진단검사의학과 임상병리사', 'GC녹십자의료재단 연구원', '진단키트(SD바이오센서 등) 개발자', '국립과학수사연구원 법의학관'],
    relatedSubjectIds: ['s_sci_bio', 's_sci_chem', 's_sci_cell_metabolism', 's_sci_genetics', 's_gen_health'],
    topUniversities: ['고려대(바이오시스템의과학부)', '연세대(미래)', '을지대', '가천대', '건국대(글로컬)', '대구보건대'],
    careerProspects: '대형병원 진단검사의학과, 분자유전진단센터, 씨젠/SD바이오센서 진단기업, 질병관리청 역학조사관'
  },
  {
    id: 'dept_med_radiology',
    name: '방사선학과 (의료영상시스템학)',
    category: '의료보건 계열',
    summary: 'X-ray, CT, MRI, 초음파, PET-CT 의료영상 획득 및 암 환자 방사선 종양 치료를 수행하는 영상의학 전문가를 양성합니다.',
    desc: '인체 해부학과 방사선 물리학, 3D 디지털 영상 후처리 기술을 습득하여 환자의 질병 부위를 안전하고 선명하게 영상화합니다.',
    mainCurriculum: ['방사선물리학', 'CT영상학', 'MRI영상학', '방사선치료학', '핵의학영상학', '초음파영상학'],
    coreRecommendedSubjects: ['물리학', '생명과학'],
    recommendedSubjects: ['물리학 실험', '인체 구조와 기능', '보건', '전기와 자기', '미적분Ⅰ'],
    highSchoolSubjects: {
      general: ['물리학', '생명과학', '미적분Ⅰ', '독서와 작문', '보건'],
      career: ['물리학 실험', '전기와 자기', '생명과학 실험', '보건'],
      convergence: ['융합과학 탐구', '창의 공학 설계']
    },
    similarDepartments: ['방사선과', '의료영상학과', '핵의학과', '보건물리학과'],
    certifications: ['방사선사 면허증(국가고시)', '방사선동위원소취급자일반면허(RI)', '국제초음파검사사(RDMS)'],
    relatedJobs: ['대학병원 영상의학과 방사선사', '암센터 방사선종양치료사', '한국원자력의학원 연구원', '지멘스/GE헬스케어 영상 애플리케이션 스페셜리스트'],
    relatedSubjectIds: ['s_sci_phys', 's_sci_bio', 's_math_calc1', 's_gen_health'],
    topUniversities: ['연세대(미래)', '가천대', '을지대', '건양대', '동의대', '신한대'],
    careerProspects: '대학병원 영상의학과, 방사선종양학과, 한국원자력안전기술원, 글로벌 의료영상기기 기업'
  },

  // ==========================================
  // [사회·경상 계열 추가 학과]
  // ==========================================
  {
    id: 'dept_soc_media_comm',
    name: '미디어커뮤니케이션학과 (신문방송학)',
    category: '사회 계열',
    summary: '디지털 저널리즘, 뉴미디어 영상 제작, OTT 플랫폼 전략, PR 및 광고 커뮤니케이션을 종합 탐구합니다.',
    desc: '사회적 여론 형성과 대중문화 트렌드를 분석하고, 창의적인 스토리텔링과 데이터 저널리즘 역량을 길러 시대를 관통하는 미디어 전문가를 양성합니다.',
    mainCurriculum: ['커뮤니케이션이론', '영상기획및제작', '디지털저널리즘실습', '광고PR캠페인', '소셜미디어데이터분석', '미디어법과윤리'],
    coreRecommendedSubjects: ['독서와 작문', '사회와 문화', '매체 의사소통'],
    recommendedSubjects: ['문학과 영상', '정치와 법', '현대사회와 윤리', '영어 독해와 작문', '주제 탐구 독서'],
    highSchoolSubjects: {
      general: ['독서와 작문', '화법과 언어', '사회와 문화', '정치와 법', '세계사'],
      career: ['문학과 영상', '현대사회와 윤리', '주제 탐구 독서', '영어 발표와 토론'],
      convergence: ['매체 의사소통', '독서 토론과 글쓰기', '사회문제 탐구']
    },
    similarDepartments: ['신문방송학과', '언론정보학과', '디지털미디어학과', '광고홍보학과'],
    certifications: ['멀티미디어콘텐츠제작전문가', '사회조사분석사 2급', '한국어능력시험(KBS)'],
    relatedJobs: ['방송기자·PD', 'OTT 콘텐츠 기획자', '기업 PR/홍보 총괄', '유튜브 크리에이티브 디렉터', '빅데이터 여론분석가'],
    relatedSubjectIds: ['s_kor_read', 's_soc_culture', 's_kor_media_comm', 's_kor_media_lit', 's_soc_politics_law'],
    topUniversities: ['서울대(언론정보)', '연세대', '고려대', '서강대(신문방송)', '성균관대', '중앙대', '한양대'],
    careerProspects: '지상파/종편 방송사(KBS, MBC, SBS, tvN), CJ ENM, 넷플릭스 코리아, 제일기획, 대기업 커뮤니케이션실'
  },
  {
    id: 'dept_biz_e_commerce',
    name: 'e-비즈니스학과 (디지털경영·핀테크)',
    category: '경상 계열',
    summary: '빅데이터 기반 이커머스 전략, 핀테크 결제 시스템, 디지털 플랫폼 비즈니스 모델을 기획하고 운영합니다.',
    desc: '전통적인 경영학과 컴퓨터 프로그래밍, 데이터 분석을 결합하여 플랫폼 유통망 구축과 사용자 경험(UX) 데이터 기반 마케팅을 선도합니다.',
    mainCurriculum: ['e-비즈니스개론', '디지털마케팅과데이터분석', '플랫폼비즈니스모델', '핀테크와블록체인', '공급망관리(SCM)', '웹서비스기획'],
    coreRecommendedSubjects: ['경제', '확률과 통계', '정보'],
    recommendedSubjects: ['대수', '데이터 과학', '사회와 문화', '실용 통계', '경제 수학'],
    highSchoolSubjects: {
      general: ['경제', '확률과 통계', '대수', '정보', '사회와 문화'],
      career: ['경제 수학', '데이터 과학', '실용 통계', '인공지능 기초'],
      convergence: ['사회문제 탐구', '창의 공학 설계', '독서 토론과 글쓰기']
    },
    similarDepartments: ['경영정보학과(MIS)', '글로벌e-비즈니스학과', '스마트경영공학과', '빅데이터경영학과'],
    certifications: ['SQLD', 'GA(구글 애널리틱스 공인전문가)', '빅데이터분석기사', '유통관리사 2급'],
    relatedJobs: ['이커머스 프로덕트 매니저(PM)', '그로스해커(성장마케터)', '핀테크 서비스 기획자', '데이터 기반 비즈니스 분석가'],
    relatedSubjectIds: ['s_soc_econ', 's_math_prob_stat', 's_info_info', 's_math_alg', 's_math_econ'],
    topUniversities: ['아주대(e-비즈니스)', '국민대(경영정보)', '서강대', '한양대', '중앙대', '가천대'],
    careerProspects: '쿠팡, 네이버쇼핑, 배달의민족(우아한형제들), 토스, 카카오페이, 글로벌 플랫폼사'
  },
  {
    id: 'dept_biz_hotel_tourism',
    name: '호텔외식관광경영학과',
    category: '경상 계열',
    summary: '글로벌 호스피탈리티, 항공사 서비스, MICE 컨벤션 기획, 복합리조트 및 외식 프랜차이즈 경영을 체계화합니다.',
    desc: '글로벌 어학 역량과 고객 경험 디자인, 식음료(F&B) 수익 관리, 대규모 국제 컨벤션 유치 전략을 실무 중심으로 배웁니다.',
    mainCurriculum: ['호텔경영론', '외식산업경영론', 'MICE컨벤션기획', '관광마케팅', '환대산업서비스운영', '글로벌호텔수익관리(Revenue Mgmt)'],
    coreRecommendedSubjects: ['영어Ⅰ', '영어Ⅱ', '세계시민과 지리', '경제'],
    recommendedSubjects: ['영어 회화', '세계 문화와 영어', '여행지리', '사회와 문화', '제2외국어(일본어/중국어/스페인어)'],
    highSchoolSubjects: {
      general: ['영어Ⅰ', '영어Ⅱ', '경제', '사회와 문화', '세계시민과 지리'],
      career: ['세계 문화와 영어', '영어 발표와 토론', '여행지리', '제2외국어'],
      convergence: ['실생활 영어 회화', '매체 의사소통', '독서 토론과 글쓰기']
    },
    similarDepartments: ['호텔경영학과', '관광경영학과', '외식조리경영학부', '항공서비스학과', '컨벤션산업학과'],
    certifications: ['호텔경영사', '컨벤션기획사 2급', '관광통역안내사', '조리기능사', '소믈리에/바리스타'],
    relatedJobs: ['글로벌 특급호텔 총지배인', 'MICE 국제회의 기획자', '항공사 객실사무장', '외식 프랜차이즈 브랜드 매니저', '한국관광공사 연구원'],
    relatedSubjectIds: ['s_eng_eng1', 's_eng_eng2', 's_soc_world_geog', 's_soc_econ', 's_soc_culture'],
    topUniversities: ['세종대(호텔관광경영)', '경희대(호텔경영학부)', '한양대', '경기대', '동국대', '부산대'],
    careerProspects: '메리어트/힐튼/하얏트 등 글로벌 체인호텔, 파라다이스시티/인스파이어 복합리조트, 대한항공/아시아나항공, 코엑스/벡스코'
  },

  // ==========================================
  // [인문·예체능·사범 계열 추가 학과]
  // ==========================================
  {
    id: 'dept_hum_creative_writing',
    name: '문예창작학과 (웹소설·스토리텔링)',
    category: '인문학 계열',
    summary: '웹소설, 웹툰 스토리, 시·소설 순수문학, 영화 시나리오, 게임 세계관 기획을 위한 전문 작가를 양성합니다.',
    desc: '인간 본성에 대한 깊은 통찰과 극적 서사 구성력을 훈련하며, K-콘텐츠 시장을 선도하는 지식재산권(IP) 창작 역량을 기릅니다.',
    mainCurriculum: ['소설창작실습', '웹소설스토리텔링', '시나리오작법', '드라마극본창작', '서사구조론', '디지털콘텐츠IP기획'],
    coreRecommendedSubjects: ['문학', '독서와 작문', '문학과 영상'],
    recommendedSubjects: ['주제 탐구 독서', '언어생활 탐구', '인문학과 윤리', '세계사', '독서 토론과 글쓰기'],
    highSchoolSubjects: {
      general: ['문학', '독서와 작문', '화법과 언어', '세계사', '한문'],
      career: ['문학과 영상', '주제 탐구 독서', '인문학과 윤리', '한문 고전 읽기'],
      convergence: ['독서 토론과 글쓰기', '매체 의사소통', '언어생활 탐구']
    },
    similarDepartments: ['국어국문학과', '미디어문예창작과', '극작과', '문화콘텐츠학과'],
    certifications: ['한국어교원', '사서자격증', '국어능력인증시험'],
    relatedJobs: ['웹소설 작가', '드라마/영화 시나리오 작가', '게임 시나리오 디렉터', '웹툰 스토리 기획자', '출판 에디터'],
    relatedSubjectIds: ['s_kor_lit', 's_kor_read', 's_kor_media_lit', 's_kor_theme', 's_soc_world_hist'],
    topUniversities: ['동국대(국문문창)', '중앙대(문예창작)', '서울예대', '한국예술종합학교(서사창작)', '명지대', '단국대'],
    careerProspects: '카카오페이지/네이버웹소설 전속 작가, 스튜디오드래곤 등 드라마 제작사, 넥슨/엔씨소프트 게임 기획팀'
  },
  {
    id: 'dept_art_game_animation',
    name: '게임·애니메이션학과 (디지털영상콘텐츠)',
    category: '예체능 계열',
    summary: '3D 그래픽 모델링, 언리얼/유니티 엔진 인터랙션, 콘셉트 아트, 2D/3D 애니메이션 연출을 창작합니다.',
    desc: '예술적 감성과 컴퓨터 그래픽스 기술을 결합하여 글로벌 게임 엔진 환경에서 캐릭터 애니메이션과 가상현실(VR) 메타버스 콘텐츠를 구현합니다.',
    mainCurriculum: ['3D컴퓨터그래픽스(Maya/Blender)', '게임엔진실습(Unreal/Unity)', '콘셉트아트및캐릭터디자인', '디지털애니메이션기법', 'VFX특수효과', '게임레벨디자인'],
    coreRecommendedSubjects: ['미술', '정보', '문학과 영상'],
    recommendedSubjects: ['미술 감상과 비평', '미술 창작', '입체 조형', '인공지능 기초', '물리학'],
    highSchoolSubjects: {
      general: ['미술', '정보', '독서와 작문', '물리학', '세계사'],
      career: ['미술 감상과 비평', '미술 창작', '입체 조형', '정보과학'],
      convergence: ['매체 의사소통', '창의 공학 설계', '융합과학 탐구']
    },
    similarDepartments: ['게임공학과', '영상애니메이션학과', '만화애니메이션텍', '디지털콘텐츠학과'],
    certifications: ['게임그래픽전문가', '게임기획전문가', '멀티미디어콘텐츠제작전문가', 'ACE(Adobe Certified Expert)'],
    relatedJobs: ['3D 캐릭터/배경 모델러', '게임 콘셉트 아티스트', '애니메이션 감독/원화가', 'VFX 영상합성 아티스트'],
    relatedSubjectIds: ['s_art_art', 's_info_info', 's_kor_media_lit', 's_art_art_crit', 's_art_art_create'],
    topUniversities: ['한국예술종합학교', '세종대(만화애니메이션)', '홍익대(영상·애니메이션)', '청강문화산업대', '건국대', '상명대'],
    careerProspects: '넷마블, 크래프톤, 펄어비스, 픽사/디즈니 외주 프로덕션, 덱스터스튜디오(VFX), 웹툰 에이전시'
  },
  {
    id: 'dept_edu_special',
    name: '특수교육과 (초등/중등 특수교육)',
    category: '사범 계열',
    summary: '시각·청각·발달장애 및 학습장애를 가진 특수교육 대상 학생의 개별화 맞춤 교육과 자립 역량을 지원합니다.',
    desc: '특수아동 진단평가, 보조공학기기 활용, 행동수정 이론, 통합교육 지원 전략을 익혀 따뜻한 사명감을 갖춘 특수교사를 양성합니다.',
    mainCurriculum: ['특수교육학개론', '발달장애아교육', '학습장애아교육', '특수교육보조공학', '개별화교육프로그램(IEP)', '특수학교임상실습'],
    coreRecommendedSubjects: ['독서와 작문', '교육학', '인간과 심리', '보건'],
    recommendedSubjects: ['사회와 문화', '인문학과 윤리', '특수아동의 이해', '화법과 언어', '수어'],
    highSchoolSubjects: {
      general: ['독서와 작문', '사회와 문화', '화법과 언어', '보건', '현대사회와 윤리'],
      career: ['인간과 심리', '교육학', '인문학과 윤리', '특수아동의 이해'],
      convergence: ['사회문제 탐구', '독서 토론과 글쓰기']
    },
    similarDepartments: ['유아특수교육과', '초등특수교육과', '중등특수교육과', '재활심리학과'],
    certifications: ['특수학교 2급 정교사 자격증(초등/중등)', '점역교정사', '한국수어교원'],
    relatedJobs: ['국공립/사립 특수학교 교사', '일반 초·중·고 특수학급 교사', '특수교육지원센터 장학인력', '장애아동 발달재활치료사'],
    relatedSubjectIds: ['s_kor_read', 's_gen_pedagogy', 's_gen_psychology', 's_gen_health', 's_soc_culture'],
    topUniversities: ['이화여대', '단국대', '공주대', '대구대(특수교육)', '우석대', '가톨릭대'],
    careerProspects: '전국 시도교육청 특수교사 임용고시 합격률 최우수, 한국장애인고용공단, 국립특수교육원 연구원'
  }
];
