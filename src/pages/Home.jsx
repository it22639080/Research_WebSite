import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const COMPONENTS = [
  {
    icon: '👁',
    color: '#5b6af5',
    glow: 'rgba(91,106,245,0.3)',
    title: 'Person Recognition',
    subtitle: 'Voice-Guided Vision Assistant',
    desc: 'Real-time person identification via face + voice.Indetify Known vs Unknown. Profiles unknown individuals with age, gender & facial attributes.',
    metrics: [{ label: 'Voice Accuracy', val: '98%' }, { label: 'Age Accuracy', val: '87%' }, { label: 'Gender Accuracy', val: '92.6%' },{ label: 'Eyeware Detection', val: '96.05%' },{ label: 'Faceware Detection', val: '93%' },{ label: 'Headare Detection', val: '93.5%' }],
    tech: ['MTCNN', 'InceptionResnetV1', 'ECAPA-TDNN','SpeechBrain', 'EfficientNetV2', 'Xception'],
  },
  {
    icon: '💰',
    color: '#f5c842',
    glow: 'rgba(245,200,66,0.3)',
    title: 'Currency & Finance',
    subtitle: 'Smart Voice-Assisted Finance',
    desc: 'First localized Sri Lankan currency recognition system with OCR bill reading, NLP extraction & automated smart wallet.',
    metrics: [{ label: 'Sri Lanakn Currency mAP', val: '0.99' }, { label: 'OCR Precision mAP', val: '0.97' }, { label: 'Coin Recognition mAP', val: '0.98' }],
    tech: ['YOLOv8', 'CORD Dataset', 'SROIE', 'NLP Pipeline', 'Firebase'],
  },
  {
    icon: '🧭',
    color: '#00d4b8',
    glow: 'rgba(0,212,184,0.3)',
    title: 'Indoor Navigation',
    subtitle: 'Context-Aware Navigation Assistant',
    desc: 'Goal-oriented voice object search, monocular depth estimation & IoT smart cane integration for safe indoor mobility.',
    metrics: [{ label: 'mAP@50', val: '0.989' }, { label: 'Precision', val: '0.968' }, { label: 'Recall', val: '0.963' }],
    tech: ['YOLOv8n', 'MiDaS v3.1', 'MobileNet OIv7', 'ESP32 IoT', 'Flask API'],
  },

  {
    icon: '👔',
    color: '#f55b8a',
    glow: 'rgba(245,91,138,0.3)',
    title: 'Wardrobe Advisor',
    subtitle: 'AI Clothing Identification',
    desc: 'Real-time garment detection, color classification, and occasion-based personalized outfit recommendations from registered inventory.',
    metrics: [{ label: 'Fashion mAP', val: '0.96' }, { label: 'Color Acc.', val: '0.99' }, { label: 'Stain Detection mAP', val: '0.93' }],
    tech: ['YOLOv8', 'ResNet-50', 'Color-Cloth CV', 'Firebase Firestore', 'Flutter'],
  },
];



const TECH_STACK = [
  'Flutter', 'Flask', 'Firebase', 'Python', 'YOLOv8', 'TensorFlow',
  'PyTorch', 'MTCNN', 'SpeechBrain', 'MiDaS', 'ESP32', 'OpenCV',
];

export default function Home() {
  const orbRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="home page-enter">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__orb" ref={orbRef} />
        <div className="hero__grid" />
        <div className="container hero__content">
          <div className="hero__badge anim-fade-up">
            <span className="hero__badge-dot" />
            Research Project · SLIIT · 25-26J-303
          </div>
          <h1 className="hero__title anim-fade-up delay-1">
            AI-Powered Assistive<br/>
            System for the<br/>
            <span className="grad-text">Visually Impaired</span>
          </h1>
          <p className="hero__sub anim-fade-up delay-2">
            A unified, voice-first mobile platform integrating four intelligent AI components
            — person recognition, indoor navigation, financial management & wardrobe advisory —
            to transform daily independence for 2.2 billion people with vision loss.
          </p>
          <div className="hero__actions anim-fade-up delay-3">
            <Link to="/domain" className="btn btn-primary">Explore Research ↗</Link>
            <Link to="/about" className="btn btn-outline">Meet the Team</Link>
          </div>

        </div>


      </section>



      {/* ── COMPONENTS ── */}
      <section className="section comp-section">
        <div className="container">
          <div className="section-label">System Components</div>
          <h2 className="section-title">Four AI Modules.<br/><span className="grad-text">One Unified Platform.</span></h2>
          <p className="section-subtitle">
            Each component independently addresses a critical daily life challenge, working together
            as a cohesive voice-first assistive ecosystem.
          </p>
          <div className="comp-grid">
            {COMPONENTS.map((c, i) => (
              <div
                key={i}
                className={`comp-card anim-fade-up delay-${i + 1}`}
                style={{ '--card-color': c.color, '--card-glow': c.glow }}
              >
                <div className="comp-card__header">
                  <span className="comp-card__icon">{c.icon}</span>
                  <div>
                    <div className="comp-card__sub">{c.subtitle}</div>
                    <h3 className="comp-card__title">{c.title}</h3>
                  </div>
                </div>
                <p className="comp-card__desc">{c.desc}</p>
                <div className="comp-card__metrics">
                  {c.metrics.map((m, j) => (
                    <div key={j} className="comp-metric">
                      <div className="comp-metric__val">{m.val}</div>
                      <div className="comp-metric__lbl">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="comp-card__tech">
                  {c.tech.map(t => (
                    <span key={t} className="comp-tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE OVERVIEW ── */}
      <section className="section arch-section">
        <div className="container">
          <div className="section-label">System Architecture</div>
          <h2 className="section-title">Three-Tier<br/><span className="grad-text">Intelligent Platform</span></h2>
          <div className="arch-grid">
            <div className="arch-tier anim-fade-up delay-1">
              <div className="arch-tier__num">01</div>
              <div className="arch-tier__icon">📱</div>
              <h3>Flutter Mobile Frontend</h3>
              <p>Cross-platform iOS & Android application with 100% voice-driven interaction. Camera and microphone capture for real-time processing.</p>
              <div className="arch-tier__tags">
                <span>Flutter</span><span>Dart</span><span>TTS / ASR</span>
              </div>
            </div>
            <div className="arch-connector anim-fade-up delay-2">
              <div className="arch-connector__line" />
              <span>REST API</span>
              <div className="arch-connector__line" />
            </div>
            <div className="arch-tier anim-fade-up delay-3">
              <div className="arch-tier__num">02</div>
              <div className="arch-tier__icon">⚙️</div>
              <h3>Flask AI Backend</h3>
              <p>Four independent deep learning microservices. Orchestrates YOLO detectors, FaceNet embeddings, SpeechBrain models, and OCR-NLP pipelines.</p>
              <div className="arch-tier__tags">
                <span>Python</span><span>Flask</span><span>PyTorch</span><span>TensorFlow</span>
              </div>
            </div>
            <div className="arch-connector anim-fade-up delay-4">
              <div className="arch-connector__line" />
              <span>Firebase SDK</span>
              <div className="arch-connector__line" />
            </div>
            <div className="arch-tier anim-fade-up delay-5">
              <div className="arch-tier__num">03</div>
              <div className="arch-tier__icon">☁️</div>
              <h3>Firebase Cloud Layer</h3>
              <p>Secure persistent storage for biometric embeddings, financial records, wardrobe profiles, and user authentication via Firebase Auth.</p>
              <div className="arch-tier__tags">
                <span>Firestore</span><span>Firebase Storage</span><span>Firebase Auth</span>
              </div>
            </div>
          </div>
          <div className="arch-iot anim-fade-up delay-6">
            <span className="arch-iot__icon">🦯</span>
            <div>
              <strong>IoT Smart Cane</strong> — ESP32 microcontroller + ESP32-CAM + Ultrasonic + IR sensors
              providing supplementary ground-level hazard sensing with bidirectional mobile app communication
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section tech-section">
        <div className="container">
          <div className="section-label">Technologies</div>
          <h2 className="section-title">Built with<br/><span className="grad-text">State-of-the-Art AI</span></h2>
          <div className="tech-marquee-wrap">
            <div className="tech-marquee">
              {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-glow" />
        <div className="container cta-inner">
          <div className="section-label" style={{justifyContent:'center'}}>Research Impact</div>
          <h2 className="section-title" style={{textAlign:'center'}}>
            Transforming Independence for<br/>
            <span className="grad-text">300,000+ Sri Lankans</span>
          </h2>
          <p className="section-subtitle" style={{margin:'0 auto 2.5rem',textAlign:'center'}}>
            A first-of-its-kind unified platform combining person recognition, navigation,
            financial management and wardrobe advisory into one voice-first mobile application.
          </p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/domain" className="btn btn-primary">View Full Research →</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
