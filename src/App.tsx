import { useState, useEffect, useRef } from 'react';
import {
  Target, Users, BarChart3, Zap, ChevronRight, AlertTriangle,
  CheckCircle, ArrowRight, Building2, TrendingUp, Clock,
  Shield, Database, Star, ChevronDown, Circle
} from 'lucide-react';

const SLIDES = ['cover','agenda','market','persona-pain','product','effects','after','closing'];
const SLIDE_LABELS = ['표지','목차','시장분석','고객분석','솔루션제안','기대효과','정리','마무리'];

function useInView(ref: React.RefObject<Element>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return inView;
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>);
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(22px)',
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

// ─── COVER ────────────────────────────────────────────────────────────────────
function CoverSlide() {
  return (
    <section id="cover" className="slide cover-bg flex flex-col justify-center px-8 md:px-20 py-20">
      <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }} />

      <div className="relative max-w-5xl mx-auto w-full">
        <FadeUp>
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="tag tag-teal">H.성과 전략기획</span>
            <span className="tag tag-blue">핵심 고객사 분석</span>
            <span className="tag tag-slate" style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>내부 검토용</span>
          </div>
        </FadeUp>

        <FadeUp delay={120}>
          <p style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '12px' }}>
            성과관리 & 인사평가 솔루션 — 시장 포지셔닝 기획안
          </p>
          <h1 style={{ fontSize: 'clamp(36px, 5.5vw, 68px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', marginBottom: '20px' }}>
            H. 성과 <span style={{ color: '#2DD4BF' }}>X</span> 컬리
          </h1>
        </FadeUp>

        <FadeUp delay={220}>
          <p style={{ fontSize: 'clamp(14px, 1.6vw, 18px)', color: 'rgba(255,255,255,0.5)', maxWidth: '580px', lineHeight: 1.75, marginBottom: '44px' }}>
            복합 조직형 성장 플랫폼 기업을 핵심 타겟으로 설정하고,<br />
            H.성과가 해결할 수 있는 문제와 영업·마케팅 전략을 정리합니다.
          </p>
        </FadeUp>

        <FadeUp delay={320}>
          <div className="flex flex-wrap gap-6">
            {[
              { n: '120,000+', l: '누적 사용자' },
              { n: '700+', l: '고객사' },
              { n: '10년+', l: 'HR 솔루션 전문성' },
            ].map((s) => (
              <div key={s.l} style={{ paddingRight: '24px', borderRight: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="value-number" style={{ fontSize: '30px' }}>{s.n}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', marginTop: '3px' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={420}>
          <div style={{ marginTop: '56px', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0d9488' }} className="glow-dot" />
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.05em' }}>
              케이스 기업 : 이커머스·물류 복합 조직 (컬리 유형) — 2026 내부 검토
            </span>
          </div>
        </FadeUp>
      </div>

      <a href="#agenda" style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.2)' }}>
        <ChevronDown size={22} />
      </a>
    </section>
  );
}

// ─── AGENDA ───────────────────────────────────────────────────────────────────
function AgendaSlide() {
  const items = [
    { num: '01', title: '시장 분석', sub: 'HR시장 × 컬리 현황', color: '#28c4a0' },
    { num: '02', title: '고객 분석', sub: '3 Pain, H.성과로 해결', color: '#48acdc' },
    { num: '03', title: '솔루션 제안', sub: 'H.성과 핵심 기능', color: '#e8a030' },
    { num: '04', title: '기대효과', sub: '컬리는 이렇게 변합니다', color: '#28c4a0' },
    { num: '05', title: '영업/마케팅 전략', sub: '정식 도입 전, 맛보기 3개월', color: '#14B8A6' },
  ];
  return (
    <section id="agenda" className="slide flex flex-col justify-center px-8 md:px-20 py-20" style={{ background: '#f2faf7' }}>
      <div className="max-w-5xl mx-auto w-full">
        <FadeUp>
          <div className="section-divider" />
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>목차</h2>
          <p style={{ color: '#94a3b8', marginBottom: '40px', fontSize: '14px' }}>Contents</p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <FadeUp key={item.num} delay={i * 70}>
              <div className="card flex items-center gap-4">
                <div style={{ fontSize: '32px', fontWeight: 900, color: item.color, opacity: 0.2, minWidth: '48px', lineHeight: 1 }}>{item.num}</div>
                <div className="flex-1">
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>{item.sub}</div>
                </div>
                <ChevronRight size={14} style={{ color: '#cbd5e1' }} />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MARKET ───────────────────────────────────────────────────────────────────
function MarketSlide() {
  const bizAreas = [
    { label: '마켓컬리', sub: '신선식품 이커머스', color: '#28c4a0' },
    { label: '뷰티컬리', sub: '뷰티·라이프스타일', color: '#48acdc' },
    { label: '컬리N마트', sub: '근거리 배송 신사업', color: '#e8a030' },
    { label: '3PL/B2B', sub: '물류 외주·기업 거래', color: '#28c4a0' },
  ];
  const issues = [
    {
      icon: <Target size={17} />,
      title: 'OKR-KPI 단절',
      body: '전사 OKR은 존재하지만 물류·MD·마케팅 등 직무별 실행 지표와 연결되지 않아 현장 성과가 전사 목표에 어떻게 기여하는지 보이지 않습니다.',
      color: '#e8a030',
    },
    {
      icon: <Users size={17} />,
      title: '협업 기여도 불명확성',
      body: '뷰티컬리, 컬리N마트 등 신사업 프로젝트에서 개인의 기획·조율·실행 기여가 기록되지 않아 평가 근거가 부족합니다.',
      color: '#48acdc',
    },
    {
      icon: <Database size={17} />,
      title: 'HR 운영 과부하',
      body: '평가 공정성을 높이려 할수록 평가자 매칭·다면평가 취합·결과 리포트 작성 부담이 커져 HR의 전략적 역할이 제한됩니다.',
      color: '#28c4a0',
    },
  ];
  return (
    <section id="market" className="slide flex flex-col justify-center px-8 md:px-20 py-16" style={{ background: '#fff' }}>
      <div className="max-w-5xl mx-auto w-full">
        <FadeUp>
          <div className="section-divider" />
          <span className="tag tag-teal mb-3" style={{ display: 'inline-flex' }}>01 시장 분석</span>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>HR시장 × 컬리 현황</h2>
          <p style={{ fontSize: '13px', color: '#5a8a78', marginBottom: '28px' }}>케이스 기업 주식회사 컬리 (Kurly)의 조직 구조와 성과관리 현안</p>
        </FadeUp>

        {/* Company overview */}
        <FadeUp delay={60}>
          <div style={{ background: 'linear-gradient(135deg, #e8faf4, #e4f2ff)', border: '1px solid #98e8cc', borderRadius: '16px', padding: '22px 24px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#28c4a0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Building2 size={18} style={{ color: '#fff' }} />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>주식회사 컬리 (Kurly)</div>
                <div style={{ fontSize: '11px', color: '#28c4a0', fontWeight: 600 }}>신선식품 이커머스 → 복합 플랫폼으로 빠르게 확장 중</div>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#2a5248', lineHeight: 1.75, margin: '0 0 16px' }}>
              본사(HR·MD·마케팅)와 현장(물류·배송)이 함께 운영되는 <strong>복합 조직 구조</strong>.
              신사업 확장과 함께 조직 이동·프로젝트 협업 빈도가 빠르게 높아지고 있어
              직군별 성과 기준 분산, 협업 기여 미기록, 평가 운영 과부하가 HR의 핵심 현안으로 부상했습니다.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {bizAreas.map((a) => (
                <div key={a.label} style={{ background: '#fff', border: `1px solid ${a.color}40`, borderRadius: '10px', padding: '8px 14px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>{a.label}</div>
                  <div style={{ fontSize: '10px', color: a.color, marginTop: '1px' }}>{a.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* 3 issues */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {issues.map((p, i) => (
            <FadeUp key={p.title} delay={i * 90 + 120}>
              <div style={{ background: '#fff', border: `1px solid ${p.color}30`, borderRadius: '14px', padding: '20px', height: '100%', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: p.color }} />
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${p.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.color, marginBottom: '12px' }}>
                  {p.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: '#0f172a', marginBottom: '8px' }}>{p.title}</div>
                <p style={{ fontSize: '12.5px', color: '#4a7060', lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PERSONA + PAIN (한 페이지) ────────────────────────────────────────────────
const whyPerformance = {
  reasons: [
    '평가 시즌이 아닌 일상에서 성과를 관리하는 니즈가 훨씬 크다',
    '목표 수립·상시 기록·피드백이 인사평가의 품질을 결정한다',
    '성과관리 자동화가 HR 운영 효율을 결정한다',
  ],
};

const interviews = [
  {
    team: '물류운영팀',
    role: '현장 실행 조직',
    color: '#0D9488',
    bg: 'rgba(13,148,136,0.07)',
    border: 'rgba(45,212,191,0.3)',
    quote: '"샛별배송은 달리는데, 현장 성과는 왜 안 보여요?"',
    pain: '배송 정확도·리드타임·폐기율 개선이 전사 OKR과 연결되지 않아 기여도가 흐려짐',
    need: '전사 OKR ↔ 현장 KPI 연결 구조',
    tag: '성과경영 · 목표관리',
  },
  {
    team: 'MD팀',
    role: '크로스펑셔널 협업 조직',
    color: '#14B8A6',
    bg: 'rgba(20,184,166,0.07)',
    border: 'rgba(45,212,191,0.3)',
    quote: '"협업은 나타났는데, 제 기여는 왜 사라지죠?"',
    pain: '뷰티컬리·컬리N마트 등 복합 프로젝트에서 개인 역할·실행 과정이 평가 데이터로 남지 않음',
    need: '프로젝트 기여도 상시 기록 구조',
    tag: '상시 성과 기록 · 다면평가',
  },
  {
    team: 'HR팀',
    role: '성과관리 운영 조직',
    color: '#2DD4BF',
    bg: 'rgba(45,212,191,0.07)',
    border: 'rgba(45,212,191,0.3)',
    quote: '"공정성? 중요하죠. 근데 너무 비효율적이잖아요."',
    pain: '평가자 매칭·결과 취합·리포트 작성 등 반복 행정 업무가 HR 혁신을 막고 있음',
    need: '평가 운영 자동화 + 납득성 확보',
    tag: '평가자 매칭 · 평가결과리포트 · ERP 연동',
  },
];

function PersonaPainSlide() {
  return (
    <section id="persona-pain" className="slide flex flex-col justify-center px-8 md:px-20 py-14" style={{ background: '#f8fafc' }}>
      <div className="max-w-5xl mx-auto w-full">

        <FadeUp>
          <div className="section-divider" />
          <span className="tag tag-blue mb-3" style={{ display: 'inline-flex' }}>02 고객 분석</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 38px)', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>3 Pain, H.성과로 해결</h2>
          <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>현장의 목소리를 통해 Pain Point를 구체화합니다. 그리고 왜 '성과관리'가 핵심인지 먼저 짚습니다.</p>
        </FadeUp>

        {/* H.성과 4분야 버튼 */}
        <FadeUp delay={40}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
            {/* 성과/평가 그룹 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-start' }}>
              <span style={{ padding: '2px 10px', borderRadius: '100px', fontSize: '10px', fontWeight: 700, color: '#0D9488', background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.25)' }}>성과/평가</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ padding: '5px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 800, color: '#fff', background: '#0D9488', border: '1px solid #0D9488', boxShadow: '0 2px 8px rgba(13,148,136,0.35)' }}>성과경영</span>
                <span style={{ padding: '5px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, color: '#94a3b8', background: 'rgba(20,184,166,0.04)', border: '1px solid rgba(20,184,166,0.18)', opacity: 0.55 }}>인사평가</span>
              </div>
            </div>
            {/* 구분선 */}
            <div style={{ width: '1px', height: '40px', background: 'rgba(0,0,0,0.08)' }} />
            {/* 진단/육성 그룹 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-start' }}>
              <span style={{ padding: '2px 10px', borderRadius: '100px', fontSize: '10px', fontWeight: 700, color: '#0891b2', background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.25)' }}>진단/육성</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ padding: '5px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, color: '#94a3b8', background: 'rgba(8,145,178,0.04)', border: '1px solid rgba(8,145,178,0.18)', opacity: 0.55 }}>역량진단</span>
                <span style={{ padding: '5px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, color: '#94a3b8', background: 'rgba(14,116,144,0.04)', border: '1px solid rgba(14,116,144,0.18)', opacity: 0.55 }}>리더십진단</span>
              </div>
            </div>
            <span style={{ fontSize: '11px', color: '#9ca3af', marginLeft: '4px' }}>H.성과 4대 분야</span>
          </div>
        </FadeUp>

        {/* Why 성과관리 9:1 */}
        <FadeUp delay={60}>
          <div style={{ border: '1px solid rgba(45,212,191,0.25)', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px' }}>
            <div style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(90deg, #0D9488, #14B8A6)' }}>
              <span style={{ color: '#fff', fontWeight: 900, fontSize: '12px', background: 'rgba(255,255,255,0.15)', padding: '2px 8px', borderRadius: '6px' }}>WHY</span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '14px' }}>H.성과 4영역 중 '성과관리'에 집중하는 이유</span>
            </div>
            <div style={{ padding: '18px 20px', background: '#fff' }}>
              {/* Bar */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ marginBottom: '7px' }}>
                  <span style={{ padding: '2px 10px', borderRadius: '100px', fontSize: '10px', fontWeight: 700, color: '#0D9488', background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.25)' }}>성과/평가</span>
                </div>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '5px' }}>
                  <div style={{ height: '30px', width: '80%', background: '#0D9488', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '13px' }}>
                    성과관리 90%
                  </div>
                  <div style={{ height: '30px', width: '20%', background: '#5EEAD4', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '11px' }}>
                    인사평가 10%
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '6px', fontSize: '11px', color: '#94a3b8' }}>
                  <span style={{ width: '80%' }}>목표 설정 / 상시 기록 / 피드백 / 중간리뷰</span>
                  <span style={{ width: '20%' }}>평가 실행</span>
                </div>
              </div>
              {/* Reasons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {whyPerformance.reasons.map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#374151' }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '11px', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Interview cards */}
        <FadeUp delay={120}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '12px' }}>
            <div style={{ width: '4px', height: '14px', background: '#2DD4BF', borderRadius: '2px' }} />
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.07em' }}>팀별 현장 인터뷰</span>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {interviews.map((iv, i) => (
            <FadeUp key={iv.team} delay={i * 80 + 160}>
              <div style={{ background: '#fff', border: `1px solid ${iv.border}`, borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Card header */}
                <div style={{ padding: '14px 18px', background: iv.bg, borderBottom: `1px solid ${iv.border}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: iv.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Users size={16} style={{ color: '#fff' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: '#111827' }}>{iv.team}</div>
                    <div style={{ fontSize: '11px', color: iv.color, fontWeight: 600, marginTop: '1px' }}>{iv.role}</div>
                  </div>
                </div>
                {/* Card body */}
                <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ borderLeft: `4px solid ${iv.color}`, paddingLeft: '12px' }}>
                    <p style={{ fontSize: '12.5px', color: '#374151', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.65, margin: 0 }}>{iv.quote}</p>
                  </div>
                  <p style={{ fontSize: '12px', color: '#6B7280', lineHeight: 1.6, margin: 0, flex: 1 }}>{iv.pain}</p>
                  <div style={{ borderTop: '1px solid rgba(45,212,191,0.15)', paddingTop: '12px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF', marginBottom: '4px' }}>필요한 것</div>
                    <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>{iv.need}</div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, color: iv.color, background: iv.bg, border: `1px solid ${iv.border}` }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: iv.color, flexShrink: 0 }} />
                      H.성과: {iv.tag}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── PRODUCT ──────────────────────────────────────────────────────────────────
const coreValues = [
  {
    title: '객관성',
    sub: '전사 정렬',
    tags: ['OKR', 'KPI', '목표보드', '전사 정렬'],
    color: '#28c4a0',
    bg: '#e8faf4',
    border: '#98e8cc',
    icon: <Target size={20} />,
  },
  {
    title: '공정성',
    sub: '기여도 가시성',
    tags: ['상시 성과 기록', '활동 피드', '다면평가', '기여도 리포트'],
    color: '#48acdc',
    bg: '#e4f2ff',
    border: '#98d4f8',
    icon: <BarChart3 size={20} />,
  },
  {
    title: '편의성',
    sub: 'HR 효율화',
    tags: ['평가자 매칭', '결과 취합', '평가결과리포트', 'ERP 연동'],
    color: '#e8a030',
    bg: '#fef8e8',
    border: '#f8dea0',
    icon: <Zap size={20} />,
  },
];

const prodMappings = [
  {
    no: '01',
    pain: 'OKR과 직무별 실행 지표가 분리될 수 있음',
    functions: ['성과경영', '목표관리', 'OKR 관리', '목표보드'],
    value: '전사 목표와 조직·개인 목표를 연결해, 물류·MD·마케팅·개발·CS 등 서로 다른 직무의 실행 지표가 컬리의 수익성 개선과 고객 경험 목표에 어떻게 기여하는지 확인할 수 있습니다.',
    summary: '"전사 목표와 현장 실행을 하나의 성과 흐름으로 연결합니다."',
    color: '#28c4a0',
    bg: 'rgba(40,196,160,0.07)',
    border: 'rgba(40,196,160,0.22)',
  },
  {
    no: '02',
    pain: '협업 프로젝트의 개인 기여도가 기록되지 않을 수 있음',
    functions: ['상시 성과 기록', '다면평가', '활동 피드', '기여도 리포트'],
    value: '뷰티컬리, 컬리N마트, 3PL/B2B처럼 여러 부서가 함께 움직이는 프로젝트에서 개인의 역할, 실행 과정, 협업 피드백을 누적해 평가 근거로 활용할 수 있습니다.',
    summary: '"협업 과정에서 사라지기 쉬운 개인 기여도를 데이터로 남깁니다."',
    color: '#48acdc',
    bg: 'rgba(72,172,220,0.07)',
    border: 'rgba(72,172,220,0.22)',
  },
  {
    no: '03',
    pain: '평가·보상 연계와 운영 리소스 부담이 커질 수 있음',
    functions: ['평가자 매칭', '결과 취합', '평가결과리포트', 'ERP 연동'],
    value: '평가자 선정, 다면평가 운영, 결과 취합, 리포트 작성 등 반복적인 HR 운영 업무를 줄이고, 평가 결과의 근거를 구조화해 구성원의 납득성을 높일 수 있습니다.',
    summary: '"평가 운영 부담은 줄이고, 평가 결과의 신뢰도는 높입니다."',
    color: '#e8a030',
    bg: 'rgba(232,160,48,0.07)',
    border: 'rgba(232,160,48,0.22)',
  },
];

const tableRows = [
  { pain: 'OKR-KPI 연결 약화', func: '성과경영, 목표관리, OKR, 목표보드', value: '전사 목표와 직무별 실행 지표 연결' },
  { pain: '협업 기여도 누락', func: '상시 성과 기록, 다면평가, 활동 피드, 기여도 리포트', value: '프로젝트별 개인 역할과 실행 과정 축적' },
  { pain: '평가 운영 부담 증가', func: '평가자 매칭, 결과 취합, 평가결과리포트, ERP 연동', value: 'HR 운영 자동화와 평가 납득성 강화' },
];

function ProductSlide() {
  return (
    <section id="product" className="slide flex flex-col justify-center px-8 md:px-20 py-14" style={{ background: 'linear-gradient(160deg, #f0fdf8 0%, #e8faf4 40%, #f0fdf9 100%)' }}>
      <div className="max-w-5xl mx-auto w-full">

        {/* Header */}
        <FadeUp>
          <div className="section-divider" />
          <span className="tag tag-teal mb-3" style={{ display: 'inline-flex' }}>03 솔루션 제안</span>
          <h2 style={{ fontSize: 'clamp(22px, 3.2vw, 40px)', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>H.성과 핵심 기능</h2>
          <p style={{ fontSize: '13px', color: '#4a8a72', marginBottom: '16px', maxWidth: '640px', lineHeight: 1.75 }}>
            컬리의 3가지 Pain Point를 H.성과의 <strong style={{ color: '#28c4a0' }}>성과관리</strong> 기능으로 해결합니다.
          </p>
        </FadeUp>

        {/* Core value cards */}
        <FadeUp delay={60}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '4px', height: '16px', background: '#28c4a0', borderRadius: '2px' }} />
            <span style={{ fontWeight: 700, fontSize: '13px', color: '#1a3a30' }}>H.성과 핵심 가치</span>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {coreValues.map((v, i) => (
            <FadeUp key={v.title} delay={i * 80 + 80}>
              <div style={{ background: '#fff', border: `1px solid ${v.border}`, borderRadius: '16px', padding: '18px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: v.bg, border: `1px solid ${v.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: v.color, marginBottom: '10px' }}>
                  {v.icon}
                </div>
                <div style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a', marginBottom: '4px' }}>{v.title}</div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: v.color, marginBottom: '12px' }}>{v.sub}</div>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {v.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: '10px', fontWeight: 600, color: v.color, background: v.bg, border: `1px solid ${v.border}`, padding: '3px 8px', borderRadius: '100px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Mapping cards — compact */}
        <FadeUp delay={320}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '4px', height: '16px', background: '#28c4a0', borderRadius: '2px' }} />
            <span style={{ fontWeight: 700, fontSize: '13px', color: '#1a3a30' }}>Pain Point별 기능 매핑</span>
          </div>
        </FadeUp>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          {prodMappings.map((m, i) => (
            <FadeUp key={m.no} delay={i * 60 + 360}>
              <div style={{ background: '#fff', border: `1px solid ${m.border}`, borderRadius: '12px', overflow: 'hidden', display: 'grid' }} className="grid md:grid-cols-3">
                {/* Pain */}
                <div style={{ background: m.bg, padding: '12px 16px', borderRight: `1px solid ${m.border}`, display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '9px', flexShrink: 0, marginTop: '1px' }}>{m.no}</span>
                  <div>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: m.color, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '3px' }}>Pain</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#0f172a', lineHeight: 1.5 }}>{m.pain}</div>
                  </div>
                </div>
                {/* Functions */}
                <div style={{ padding: '12px 16px', borderRight: `1px solid ${m.border}` }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#8ab8a8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '6px' }}>H.성과 기능</div>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    {m.functions.map((fn) => (
                      <span key={fn} style={{ fontSize: '10.5px', fontWeight: 600, color: m.color, background: m.bg, border: `1px solid ${m.border}`, padding: '2px 8px', borderRadius: '6px' }}>{fn}</span>
                    ))}
                  </div>
                </div>
                {/* Value */}
                <div style={{ padding: '12px 16px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#8ab8a8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '4px' }}>해결 가치</div>
                  <p style={{ fontSize: '11.5px', color: '#3a5a50', lineHeight: 1.6, margin: 0, fontStyle: 'italic', fontWeight: 600 }}>{m.summary}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Competitor comparison table */}
        <FadeUp delay={520}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', marginTop: '4px' }}>
            <div style={{ width: '4px', height: '16px', background: '#28c4a0', borderRadius: '2px' }} />
            <span style={{ fontWeight: 700, fontSize: '13px', color: '#1a3a30' }}>H.성과 vs 일반 경쟁사</span>
          </div>
          <div style={{ background: '#fff', border: '1px solid rgba(45,212,191,0.22)', borderRadius: '14px', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px', background: 'rgba(45,212,191,0.08)', borderBottom: '1px solid rgba(45,212,191,0.2)', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              <div style={{ padding: '9px 16px', color: '#6b7280' }}>기능 / 항목</div>
              <div style={{ padding: '9px 0', textAlign: 'center', borderLeft: '1px solid rgba(45,212,191,0.2)', color: '#0D9488' }}>H.성과</div>
              <div style={{ padding: '9px 0', textAlign: 'center', borderLeft: '1px solid rgba(45,212,191,0.2)', color: '#9ca3af' }}>일반 경쟁사</div>
            </div>
            {[
              { label: '컬리 맞춤 템플릿', hdot: true, others: false },
              { label: 'OKR-KPI 연결 구조', hdot: true, others: false },
              { label: '협업 기여도 정량화', hdot: true, others: '일부' },
              { label: 'ERP 자동 연동', hdot: true, others: false },
              { label: '다면평가 + 활동 피드', hdot: true, others: false },
              { label: '파일럿 3개월 무료', hdot: true, others: '일부' },
              { label: '전담 온보딩 CS', hdot: true, others: '유료' },
              { label: '평가결과리포트 전원 발행', hdot: true, others: '일부' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px', borderBottom: i < 7 ? '1px solid rgba(45,212,191,0.1)' : 'none', background: i % 2 === 0 ? '#fff' : 'rgba(45,212,191,0.02)' }}>
                <div style={{ padding: '9px 16px', fontSize: '12px', fontWeight: 500, color: '#374151' }}>{c.label}</div>
                <div style={{ padding: '9px 0', textAlign: 'center', borderLeft: '1px solid rgba(45,212,191,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0D9488', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 900 }}>✓</span>
                </div>
                <div style={{ padding: '9px 0', textAlign: 'center', borderLeft: '1px solid rgba(45,212,191,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {c.others === false ? (
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#f3f4f6', color: '#d1d5db', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 900 }}>✕</span>
                  ) : (
                    <span style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 600 }}>{c.others}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── SOLUTION (04 솔루션 제안 — 통합) ────────────────────────────────────────
function SolutionSlide() {
  const pains = [
    {
      num: '01',
      team: '물류운영팀',
      strategy: 'OKR-KPI 연결 전략',
      stratSub: '전사 목표와 직무별 실행 지표를 연결하는 제안',
      quote: '"물류의 배송 정확도, MD의 상품 성과, 마케팅의 전환율이 각각 따로 움직이는 것이 아니라, 컬리의 수익성 개선과 고객 경험이라는 전사 목표로 연결됩니다."',
      pain: 'OKR과 직무별 실행 지표가 분리되어 현장 성과가 전사 목표와 단절됨',
      methods: ['전사 OKR과 직무별 KPI 연결도 진단', '물류운영·MD·마케팅 등 핵심 직무별 목표 템플릿 제공', '목표보드 기반 조직별 실행 지표 시각화'],
      features: ['성과경영', '목표관리', 'OKR', '목표보드'],
      color: '#e8a030',
      icon: <Building2 size={16} />,
    },
    {
      num: '02',
      team: 'MD팀',
      strategy: '협업 기여도 기록 전략',
      stratSub: '프로젝트 성과 속 개인의 역할을 남기는 제안',
      quote: '"프로젝트 성과만 남기는 것이 아니라, 그 성과를 만든 개인의 기획·조율·문제 해결 과정까지 평가 근거로 남길 수 있습니다."',
      pain: '협업 프로젝트에서 개인 기여도가 평가 데이터로 충분히 기록되지 않음',
      methods: ['프로젝트별 성과 기록 카드 운영', '참여자별 역할·목표·실행 과정 입력', '동료·상향·하향 다면 피드백 연동', '프로젝트 종료 후 개인별 기여도 리포트'],
      features: ['상시 성과 기록', '다면평가', '활동피드', '기여도 리포트'],
      color: '#48acdc',
      icon: <Star size={16} />,
    },
    {
      num: '03',
      team: 'HR팀',
      strategy: '평가 운영 자동화 전략',
      stratSub: '공정성과 HR 효율을 동시에 높이는 제안',
      quote: '"평가의 근거는 더 촘촘하게 쌓고, HR의 반복 운영 업무는 줄일 수 있습니다."',
      pain: '평가 공정성을 높이려 할수록 HR 운영 리소스 부담이 감당 불가 수준으로 증가',
      methods: ['평가자 자동 매칭', '다면평가 결과 자동 취합', '평가결과리포트 자동 생성', 'ERP 연동 인사 데이터 관리', 'HR용 평가 운영 대시보드'],
      features: ['평가자 매칭', '결과 취합', '평가결과리포트', 'ERP 연동'],
      color: '#28c4a0',
      icon: <Shield size={16} />,
    },
  ];

  return (
    <section id="solution" className="slide flex flex-col justify-center px-8 md:px-20 py-14" style={{ background: '#f2faf7' }}>
      <div className="max-w-5xl mx-auto w-full">
        <FadeUp>
          <div className="section-divider" />
          <span className="tag tag-teal mb-3" style={{ display: 'inline-flex' }}>04 솔루션 제안</span>
          <h2 style={{ fontSize: 'clamp(22px, 3.2vw, 40px)', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>3 Pain, H.성과로 해결</h2>
          <p style={{ fontSize: '13px', color: '#5a8a78', marginBottom: '10px' }}>3가지 Pain Point별 맞춤 제안 전략</p>
        </FadeUp>

        {/* Positioning banner */}
        <FadeUp delay={60}>
          <div className="contrast-box mb-5">
            <div className="grid md:grid-cols-2">
              <div className="contrast-old">
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#a0b8b0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '5px' }}>기존 포지셔닝</div>
                <p style={{ fontSize: '13px', color: '#a0b8b0', textDecoration: 'line-through', margin: 0 }}>"인사평가를 편하게 운영하는 시스템"</p>
              </div>
              <div className="contrast-new">
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#28c4a0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '5px' }}>H.성과 포지셔닝</div>
                <p style={{ fontSize: '13px', color: '#1a4a3c', fontWeight: 700, margin: 0 }}>
                  단순 평가 시스템이 아닌 <span style={{ color: '#28c4a0' }}>성장 전략 실행 도구</span>
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Core message */}
        <FadeUp delay={100}>
          <div style={{ background: '#fff', border: '1px solid #cdeee4', borderRadius: '12px', padding: '14px 18px', marginBottom: '20px' }}>
            <p style={{ fontSize: '13px', color: '#2a5248', lineHeight: 1.75, margin: 0 }}>
              <strong style={{ color: '#0f172a' }}>전략 핵심 메시지</strong> — H.성과는 컬리의 성과관리 문제를 한 번에 전사 도입으로 해결하는 것이 아니라,
              목표 연결·협업 기록·평가 운영이라는 <strong>3가지 Pain Point별로 단계적으로 제안</strong>해야 합니다.
            </p>
          </div>
        </FadeUp>

        {/* 3 Pain strategies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {pains.map((p, i) => (
            <FadeUp key={p.num} delay={i * 80 + 140}>
              <div style={{ background: '#fff', border: `1px solid ${p.color}30`, borderRadius: '16px', overflow: 'hidden' }}>
                {/* Header row */}
                <div style={{ background: `${p.color}0e`, borderBottom: `1px solid ${p.color}25`, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: `${p.color}20`, border: `1px solid ${p.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.color, flexShrink: 0 }}>
                    {p.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, color: p.color, letterSpacing: '0.08em' }}>PAIN {p.num} · {p.team}</span>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>{p.strategy}</div>
                  </div>
                  <div style={{ fontSize: '11px', color: '#8ab8a8', fontStyle: 'italic', display: 'none' }}>{p.stratSub}</div>
                </div>

                <div className="grid md:grid-cols-3" style={{ gap: 0 }}>
                  {/* Pain */}
                  <div style={{ padding: '14px 18px', borderRight: '1px solid #e8f5f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '7px' }}>
                      <AlertTriangle size={11} style={{ color: p.color }} />
                      <span style={{ fontSize: '10px', fontWeight: 700, color: p.color, letterSpacing: '0.07em' }}>PAIN POINT</span>
                    </div>
                    <p style={{ fontSize: '12.5px', color: '#3a5248', lineHeight: 1.65, margin: '0 0 10px' }}>{p.pain}</p>
                    {/* Quote */}
                    <div style={{ borderLeft: `3px solid ${p.color}`, paddingLeft: '10px', fontStyle: 'italic', fontSize: '11.5px', color: '#5a8070', lineHeight: 1.65 }}>
                      {p.quote}
                    </div>
                  </div>

                  {/* Proposal */}
                  <div style={{ padding: '14px 18px', borderRight: '1px solid #e8f5f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '7px' }}>
                      <ArrowRight size={11} style={{ color: '#28c4a0' }} />
                      <span style={{ fontSize: '10px', fontWeight: 700, color: '#0e7a60', letterSpacing: '0.07em' }}>제안 방식</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {p.methods.map((m, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '12.5px', color: '#2a4a40', lineHeight: 1.6, marginBottom: '5px' }}>
                          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: p.color, marginTop: '6px', flexShrink: 0 }} />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div style={{ padding: '14px 18px', background: '#f8fdfb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '7px' }}>
                      <CheckCircle size={11} style={{ color: '#28c4a0' }} />
                      <span style={{ fontSize: '10px', fontWeight: 700, color: '#0e7a60', letterSpacing: '0.07em' }}>H.성과 핵심 기능</span>
                    </div>
                    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                      {p.features.map((f) => (
                        <span key={f} style={{ fontSize: '10.5px', fontWeight: 600, color: '#0e7a60', background: '#b8f0e4', padding: '4px 10px', borderRadius: '100px', border: '1px solid #80e4c8', display: 'inline-block', marginBottom: '4px' }}>{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EFFECTS ─────────────────────────────────────────────────────────────────
const effectCards = [
  {
    num: '01',
    title: '샛별배송 성과가 전사 목표와 연결',
    team: '물류운영팀',
    icon: <TrendingUp size={18} />,
    color: '#28c4a0',
    bg: '#e8faf4',
    border: '#98e8cc',
    points: [
      '배송 정확도·리드타임·폐기율 데이터를 전사 목표와 연결',
      '물류팀 성과가 실제 수익성과 어떻게 이어지는지 확인 가능',
      '본사와 현장이 같은 목표를 보며 일할 수 있는 구조 구축',
    ],
    comparisons: [
      { label: '현장 KPI ↔ 전사 OKR 연결률', before: '45%', after: '75%', up: true },
      { label: '물류 KPI 성과 추적률', before: '50%', after: '80%', up: true },
    ],
  },
  {
    num: '02',
    title: '컬리 TF 협업, 기여가 데이터로 남는 구조',
    team: 'MD · 마케팅 · 개발팀',
    icon: <Users size={18} />,
    color: '#48acdc',
    bg: '#e4f2ff',
    border: '#98d4f8',
    points: [
      'MD·마케팅·개발 협업 과정 상시 기록',
      '뷰티컬리·컬리N마트 등 TF별 개인 기여도·피드백 데이터 축적',
      '결과만 남는 평가 방식에서 과정 기반 평가로 전환',
    ],
    comparisons: [
      { label: '프로젝트별 개인 기여 기록률', before: '35%', after: '70%', up: true },
      { label: '구성원 평가 납득도', before: '50%', after: '72%', up: true },
    ],
  },
  {
    num: '03',
    title: '컬리 평가, 수작업에서 시스템으로',
    team: 'HR팀',
    icon: <Zap size={18} />,
    color: '#e8a030',
    bg: '#fef8e8',
    border: '#f8dea0',
    points: [
      '평가자 매칭·다면평가·결과 취합 자동화',
      '평가 누락·휴먼에러 감소 — 오류 한 줄이 승진·연봉을 바꾸는 구조 해소',
      'HR 운영 부담 감소 및 평가 신뢰도 향상',
    ],
    comparisons: [
      { label: '평가 결과 취합 리드타임', before: '6주', after: '2주', up: false },
      { label: '평가 운영 휴먼에러 발생률', before: '12%', after: '4%', up: false },
    ],
  },
];

function EffectsSlide() {
  return (
    <section id="effects" className="slide flex flex-col justify-center px-8 md:px-20 py-14" style={{ background: '#f2faf7' }}>
      <div className="max-w-5xl mx-auto w-full">

        <FadeUp>
          <div className="section-divider" />
          <span className="tag tag-teal mb-3" style={{ display: 'inline-flex' }}>04 기대효과</span>
          <h2 style={{ fontSize: 'clamp(22px, 3.2vw, 40px)', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>컬리는 이렇게 변합니다</h2>
          <p style={{ fontSize: '13px', color: '#5a8a78', marginBottom: '22px' }}>H.성과 도입 시 팀별로 달라지는 구체적인 변화</p>
        </FadeUp>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {effectCards.map((e, i) => (
            <FadeUp key={e.num} delay={i * 90}>
              <div style={{ background: '#fff', border: `1px solid ${e.border}`, borderRadius: '16px', overflow: 'hidden' }}>
                {/* Header */}
                <div style={{ background: e.bg, borderBottom: `1px solid ${e.border}`, padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: e.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                    {e.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: e.color, letterSpacing: '0.07em', marginBottom: '1px' }}>{e.num} · {e.team}</div>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>{e.title}</div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 0 }}>
                  {/* Points */}
                  <div style={{ padding: '14px 18px', borderRight: `1px solid ${e.border}` }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      {e.points.map((pt, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: '#3a5a50', lineHeight: 1.6 }}>
                          <CheckCircle size={13} style={{ color: e.color, marginTop: '2px', flexShrink: 0 }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Before → After */}
                  <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px', minWidth: '210px', background: `${e.color}06`, borderLeft: `1px solid ${e.border}` }}>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>성과 변화</div>
                    {e.comparisons.map((c) => (
                      <div key={c.label} style={{ background: '#fff', border: `1px solid ${e.border}`, borderRadius: '10px', padding: '8px 12px' }}>
                        <div style={{ fontSize: '10px', color: '#6b7280', fontWeight: 600, marginBottom: '6px' }}>{c.label}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <div style={{ textAlign: 'center', flex: 1 }}>
                            <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 500, marginBottom: '1px' }}>Before</div>
                            <div style={{ fontSize: '17px', fontWeight: 800, color: '#94a3b8', lineHeight: 1 }}>{c.before}</div>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px' }}>
                            <div style={{ fontSize: '14px', color: e.color, fontWeight: 900, lineHeight: 1 }}>→</div>
                            <div style={{ fontSize: '9px', color: e.color, fontWeight: 700 }}>{c.up ? '▲' : '▼'}</div>
                          </div>
                          <div style={{ textAlign: 'center', flex: 1 }}>
                            <div style={{ fontSize: '11px', color: e.color, fontWeight: 600, marginBottom: '1px' }}>After</div>
                            <div style={{ fontSize: '17px', fontWeight: 900, color: e.color, lineHeight: 1 }}>{c.after}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Summary strip */}
        <FadeUp delay={320}>
          <div style={{ marginTop: '14px', background: 'linear-gradient(135deg, rgba(40,196,160,0.1), rgba(232,160,48,0.06))', border: '1px solid rgba(40,196,160,0.28)', borderRadius: '12px', padding: '13px 18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle size={16} style={{ color: '#28c4a0', flexShrink: 0 }} />
            <p style={{ fontSize: '12.5px', color: '#1a3a30', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
              현장 KPI부터 평가 운영까지 — 컬리의 3가지 Pain이 H.성과 하나로 연결됩니다.
              <span style={{ color: '#28c4a0' }}> 공정한 평가는 구성원 신뢰와 조직 성과로 이어집니다.</span>
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── AFTER ────────────────────────────────────────────────────────────────────
const afterTableRows = [
  {
    pain: 'OKR-KPI 분리',
    keywords: ['샛별배송', '물류 KPI'],
    functions: '성과경영, 목표관리, OKR, 목표보드',
    effect: '현장 지표와 전사 목표 연결',
  },
  {
    pain: '협업 기여도 누락',
    keywords: ['뷰티컬리', '컬리N마트', '3P/FBK'],
    functions: '상시 성과 기록, 활동 피드, 다면평가, 기여도 리포트',
    effect: '프로젝트별 개인 기여도 축적',
  },
  {
    pain: 'HR 운영 부담 증가',
    keywords: ['인사혁신본부', 'HR Bundle'],
    functions: '평가자 매칭, 결과 취합, 평가결과리포트, ERP 연동',
    effect: '평가 운영 자동화와 납득성 강화',
  },
];

const afterHighlights = [
  { label: '현장 KPI ↔ 전사 OKR 연결률', before: '45%', after: '75%', color: '#0D9488' },
  { label: '구성원 평가 납득도', before: '50%', after: '72%', color: '#14B8A6' },
  { label: '평가 결과 취합 리드타임', before: '6주', after: '2주', color: '#0D9488' },
];

const trustStats = [
  { num: '700+', label: '도입 고객사' },
  { num: '120,000+', label: '실사용자' },
  { num: '91%', label: '연간 갱신율' },
  { num: '4.7/5', label: '고객 만족도' },
];

function AfterSlide() {
  return (
    <section id="after" className="slide flex flex-col justify-center px-8 md:px-20 py-14" style={{ background: 'linear-gradient(160deg, #f0fdfa 0%, #e6faf6 60%, #f0fdf9 100%)' }}>
      <div className="max-w-5xl mx-auto w-full">

        <FadeUp>
          <div className="section-divider" />
          <span className="tag tag-teal mb-3" style={{ display: 'inline-flex' }}>05 영업/마케팅 전략</span>
          <h2 style={{ fontSize: 'clamp(22px, 3.2vw, 40px)', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>정식 도입 전, 맛보기 3개월</h2>
          <p style={{ fontSize: '13px', color: '#5a8a78', marginBottom: '20px' }}>변화를 원하는 당신, H.성과와 함께하세요.</p>
        </FadeUp>

        {/* Pilot 3-phase cards */}
        <FadeUp delay={60}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '4px', height: '16px', background: '#0D9488', borderRadius: '2px' }} />
            <span style={{ fontWeight: 700, fontSize: '13px', color: '#1a3a30' }}>파일럿 제안 — 3개월 무상 지원 후 정식 계약</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
            {[
              {
                phase: '1개월', title: '파일럿 무료 운영', color: '#0D9488', bg: 'rgba(13,148,136,0.07)', border: 'rgba(45,212,191,0.28)',
                items: ['물류운영팀·MD팀·HR팀 3개 팀 무료 제공', '컬리 맞춤 성과 템플릿 셋업', 'OKR-KPI 연결 구조 설계 지원'],
                rationale: '리스크 없이 직접 경험 → 도입 결정을 쉽게',
              },
              {
                phase: '2개월', title: '락인(Lock-in) 효과 & 내부 확산', color: '#14B8A6', bg: 'rgba(20,184,166,0.07)', border: 'rgba(45,212,191,0.28)',
                items: ['파일럿 3팀 결과 리포트 → 경영진 공유', '실제 업무 기반 사용 경험 축적', '파일럿 조직 중심 자연스러운 내부 확산 유도'],
                rationale: '한 번 도입되면 내부 표준 → 교체 비용 급증',
              },
              {
                phase: '3개월', title: '전사 정착 & 보상 연계', color: '#2DD4BF', bg: 'rgba(45,212,191,0.07)', border: 'rgba(45,212,191,0.28)',
                items: ['전 조직 성과-보상 연계 완성', 'ERP 연동으로 HR 데이터 일원화', '연간 갱신 계약 + 사용자 수 기반 과금'],
                rationale: '성과관리 → 보상 연계 완성 시 H.성과 없이는 운영 불가',
              },
            ].map((p, i) => (
              <div key={i} style={{ background: '#fff', border: `1px solid ${p.border}`, borderRadius: '14px', overflow: 'hidden' }}>
                <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '10px', background: p.bg, borderBottom: `1px solid ${p.border}` }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: p.color, color: '#fff', fontWeight: 900, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: p.color }}>{p.phase}</div>
                    <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#0f172a' }}>{p.title}</div>
                  </div>
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
                    {p.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', fontSize: '11.5px', color: '#4b5563' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: p.color, flexShrink: 0, marginTop: '4px' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: '11px', fontWeight: 600, fontStyle: 'italic', color: p.color, margin: 0 }}>{p.rationale}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* H.성과가 신뢰받는 이유 */}
        <FadeUp delay={160}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '4px', height: '14px', borderRadius: '100px', background: '#2DD4BF', display: 'inline-block' }} />
              H.성과가 신뢰받는 이유
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
              {trustStats.map((s, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: '16px', border: '1px solid rgba(45,212,191,0.2)', padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 900, color: '#0D9488', marginBottom: '4px', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* InsightBox */}
        <FadeUp delay={220}>
          <div style={{ borderRadius: '16px', border: '1px solid rgba(45,212,191,0.3)', padding: '16px 22px', fontSize: '13px', fontWeight: 600, backgroundColor: 'rgba(13,148,136,0.08)', color: '#0D9488' }}>
            파일럿 3개월 무료 → 성공 데이터로 낙인 효과 → 전사 표준화. 한 번 쓴 조직이 H.성과를 떠나기 어렵게 만드는 구조입니다.
          </div>
        </FadeUp>

      </div>
    </section>
  );
}

// ─── CLOSING ──────────────────────────────────────────────────────────────────
function ClosingSlide() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="closing"
      onClick={() => setExpanded(v => !v)}
      className="slide relative flex flex-col items-center justify-center overflow-hidden select-none cursor-pointer"
      style={{ background: 'linear-gradient(135deg, #091e18 0%, #0c3828 55%, #092030 100%)' }}
    >
      {/* glow blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: '#1aff8c', opacity: 0.05, filter: 'blur(120px)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: '#00c46a', opacity: 0.05, filter: 'blur(100px)' }} />

      {/* 배경 워터마크 KPI → Kurly Performance Insight */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <span
          className="font-black text-center block"
          style={{
            color: '#ffffff',
            opacity: expanded ? 0.55 : 0.18,
            letterSpacing: expanded ? '0.14em' : '-0.04em',
            fontSize: expanded ? 'clamp(2rem, 5.5vw, 5.5rem)' : 'clamp(5rem, 20vw, 18rem)',
            lineHeight: 1,
            transition: 'font-size 1s cubic-bezier(0.16,1,0.3,1), letter-spacing 1s cubic-bezier(0.16,1,0.3,1), opacity 0.7s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {expanded ? (
            <>
              <span style={{ color: '#00c46a', transition: 'color 0.6s ease' }}>K</span>urly{' '}
              <span style={{ color: '#00c46a', transition: 'color 0.6s ease' }}>P</span>erformance{' '}
              <span style={{ color: '#00c46a', transition: 'color 0.6s ease' }}>I</span>nsight
            </>
          ) : 'KPI'}
        </span>
      </div>

      {/* 메인 카피 */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        {/* 로고 */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-10"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)' }}
        >
          <span className="font-black text-xl tracking-tighter" style={{ color: '#ffffff' }}>H.</span>
        </div>

        {/* 사람이 답이다. — 위로 퍼짐 */}
        <h1
          className="font-black leading-tight"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            letterSpacing: '-0.03em',
            color: expanded ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.95)',
            transform: expanded ? 'translateY(-140px)' : 'translateY(0)',
            transition: 'transform 1s cubic-bezier(0.16,1,0.3,1), color 0.8s ease',
          }}
        >
          사람이 답이다.
        </h1>

        {/* H닷. — 아래로 퍼짐 */}
        <h1
          className="font-black leading-tight"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            letterSpacing: '-0.03em',
            color: expanded ? 'rgba(180,255,220,0.25)' : 'rgba(180,255,220,0.95)',
            transform: expanded ? 'translateY(140px)' : 'translateY(0)',
            transition: 'transform 1s cubic-bezier(0.16,1,0.3,1), color 0.8s ease',
          }}
        >
          H닷.
        </h1>

        {/* 클릭 힌트 */}
        <p
          className="absolute bottom-[-4.5rem] font-medium text-xs tracking-widest uppercase"
          style={{ color: 'rgba(255,255,255,0.35)', opacity: expanded ? 0 : 1, transition: 'opacity 0.4s ease' }}
        >
          click
        </p>
      </div>
    </section>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function SideNav({ active }: { active: number }) {
  return (
    <nav className="slide-nav hidden md:flex">
      {SLIDE_LABELS.map((label, i) => (
        <a key={label} href={`#${SLIDES[i]}`} title={label} className={`nav-dot ${active === i ? 'active' : ''}`} />
      ))}
    </nav>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handle = () => {
      const idx = Math.round(window.scrollY / window.innerHeight);
      setActiveSlide(Math.min(idx, SLIDES.length - 1));
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <>
      <SideNav active={activeSlide} />
      <main>
        <CoverSlide />
        <AgendaSlide />
        <MarketSlide />
        <PersonaPainSlide />
        <ProductSlide />
        <EffectsSlide />
        <AfterSlide />
        <ClosingSlide />
      </main>
    </>
  );
}
