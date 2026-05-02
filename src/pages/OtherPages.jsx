import React, { useState } from 'react';
import './OtherPages.css';

/* ════════════════════════════════════════
   MILESTONES
════════════════════════════════════════ */
const MILESTONES = [
  {
    id: 'proposal',
    label: 'Project Proposal',
    date: 'August 2025',
    marks: '6%',
    status: 'Completed',
    icon: '📋',
    desc: 'Comprehensive research proposal covering all four component objectives, methodology, literature review, and system architecture.',
    deliverables: ['4 Individual Proposal Documents '],
  },
  {
    id: 'pp1',
    label: 'Progress Presentation I',
    date: 'January 2026',
    marks: '15%',
    status: 'Completed',
    icon: '🎯',
    desc: 'Demonstration of initial implementation progress including dataset preparation, model training, and basic prototype functionality.',
    deliverables: ['Implementation Phase 01', 'Data Set Training', 'Unit Testing Results'],
  },
  {
    id: 'pp2',
    label: 'Progress Presentation II',
    date: 'January 2026',
    marks: '18%',
    status: 'Completed',
    icon: '🔬',
    desc: 'Full system integration demonstration and complete model performance evaluation.',
    deliverables: ['System Integration', 'Implementation Phase 02','80% Completed Individual Components'],
  },
  {
    id: 'final',
    label: 'Final Assessment',
    date: 'April 2026',
    marks: '19%',
    status: 'Upcoming',
    icon: '🏆',
    desc: 'Complete system demonstration, final report submission, and comprehensive usability evaluation with visually impaired participants.',
    deliverables: ['Final Report (4 individual + 1 group)', 'Website '],
  },
  {
    id: 'viva',
    label: 'Viva / Final Presentation',
    date: 'May 2026',
    marks: '20%',
    status: 'Upcoming',
    icon: '🏆',
    desc: 'Complete system demonstration,Individual viva examination and final public presentation to the examination panel.',
    deliverables: ['Final Presentation', 'Viva Examination', 'Complete System Demonstration'],
  },
];

export function Milestones() {
  const [open, setOpen] = useState(null);
  return (
    <div className="page-wrap page-enter">
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <div className="section-label">Project Timeline</div>
          <h1 className="section-title">Milestones & <span className="grad-text">Assessments</span></h1>
          <p className="section-subtitle">Track all project assessments, submission dates, mark allocations, and deliverable status.</p>
        </div>
      </div>
      <div className="container" style={{ padding: '3rem 2rem 5rem' }}>
        <div className="milestone-list">
          {MILESTONES.map((m, i) => (
            <div key={m.id} className={`milestone-item ${open === i ? 'open' : ''}`}>
              <button className="milestone-header" onClick={() => setOpen(open === i ? null : i)}>
                <div className="milestone-left">
                  <span className="milestone-icon">{m.icon}</span>
                  <div>
                    <div className="milestone-label">{m.label}</div>
                    <div className="milestone-meta">{m.date} · {m.marks} of total grade</div>
                  </div>
                </div>
                <div className="milestone-right">
                  <span className="milestone-chevron">{open === i ? '▲' : '▼'}</span>
                </div>
              </button>
              {open === i && (
                <div className="milestone-body">
                  <p className="milestone-desc">{m.desc}</p>
                  <div className="milestone-deliverables">
                    <h4>Key Deliverables:</h4>
                    {m.deliverables.map(d => <div key={d} className="milestone-del"><span>✓</span>{d}</div>)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   DOCUMENTS
   ── To update links: replace the URL strings
      inside each `link:` field below.
      Set status: 'Available' to show the button.
════════════════════════════════════════ */
const DOCS = [
  {
    category: 'Project Charter',
    icon: '📄',
    items: [
      {
        name: 'Group Project Charter',
        status: 'Available',
        type: 'PDF',
        link: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22639080_my_sliit_lk/IgCwL3y_f914Qbp5VqINJkwHAZW9nScRuqk98XBQgS2L_qM?e=RZTKD9',
      },
    ],
  },
  {
    category: 'Proposal Documents',
    icon: '📝',
    items: [
      {
        name: 'Proposal – Person Recognition (IT22583628)',
        status: 'Available',
        type: 'PDF',
        link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22639080_my_sliit_lk/IQApI80YrjzGRZ9ByRFKbYZlAUajzpjyq9jhMaTRwb2jPrg?e=1IaqCZ',
      },
      {
        name: 'Proposal – Indoor Navigation (IT22583246)',
        status: 'Available',
        type: 'PDF',
        link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22639080_my_sliit_lk/IQAGYvcbbgclRYOycsJg2hQ7ARUF1EFza_CqEidV6VZSgk4?e=Z3Xece',
      },
      {
        name: 'Proposal – Currency & Finance (IT22639080)',
        status: 'Available',
        type: 'PDF',
        link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22639080_my_sliit_lk/IQAhQVLmWJzVQrFZmY6OJXNuAcN6b8JNcf34turfzOocdhs?e=k6tZVC',
      },
      {
        name: 'Proposal – Wardrobe Advisor (IT22642196)',
        status: 'Available',
        type: 'PDF',
        link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22639080_my_sliit_lk/IQAbyTN2Yl9RRoZQEeox479EAaWEl9D4cWHQGFQHwF-cXkY?e=pfbDIP',
      },
    ],
  },
  {
    category: 'Check List Documents',
    icon: '✅',
    items: [
      {
        name: 'Checklist – I',
        status: 'Available',
        type: 'PDF',
        link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22639080_my_sliit_lk/IQDUfTQxS442TY3x-4XnGaTRAU_hIaEBB3Z41yRyfKdm6Lk?e=EwhSOp',
      },
      {
        name: 'Checklist – II',
        status: 'Available',
        type: 'PDF',
        link: 'https://mysliit-my.sharepoint.com/:x:/g/personal/it22639080_my_sliit_lk/IQBvugN9qRgBRIb84T_Jhb4NAUbYf_KMl5ZcA9-1b0Uypr0?e=DJGFvb',
      },
    ],
  },
  {
    category: 'Final Documents',
    icon: '🏆',
    items: [
      { name: 'Final Report – Group',                           status: 'Available', type: 'PDF',  link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22639080_my_sliit_lk/IQB0PImPEHAeRbQAUjGSCSilAXP51LEP6EJ5dkiMXX7iEBQ?e=CjZXpl' },
      { name: 'Final Report – Person Recognition (IT22583628)', status: 'Available', type: 'PDF',  link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22639080_my_sliit_lk/IQAXdcbVJkSYTLKE_vbRjdHgARDKXXfpdRuvDn961PtAmx0?e=qNIiMk' },
      { name: 'Final Report – Indoor Navigation (IT22583246)',  status: 'Available', type: 'PDF',  link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22639080_my_sliit_lk/IQDBGDmel1IWSZaZkyNGYGgoAXcZ8YZ22PbXuovW7TsaJ-E?e=zStewa' },
      { name: 'Final Report – Currency & Finance (IT22639080)', status: 'Available', type: 'PDF',  link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22639080_my_sliit_lk/IQCMOfPwBX3ITJP4wKmnDjh3AeTs5fiSvOYqNOks7XXWjLQ?e=ukHF3f' },
      { name: 'Final Report – Wardrobe Advisor (IT22642196)',   status: 'Available', type: 'PDF', link: 'https://mysliit-my.sharepoint.com/:b:/g/personal/it22639080_my_sliit_lk/IQBf9Ak-QGQeSp8BVGOxnysUAUtErlpLWZ6kS0wJ9m5Gy44?e=NbzbX3' },
    ],
  },
];
 
export function Documents() {
  return (
    <div className="page-wrap page-enter">
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <div className="section-label">Project Documents</div>
          <h1 className="section-title">Documents <span className="grad-text">& Reports</span></h1>
          <p className="section-subtitle">All project documents, proposals, checklists, and final reports. Click to open in OneDrive.</p>
        </div>
      </div>
      <div className="container" style={{ padding: '3rem 2rem 5rem' }}>
        {DOCS.map((cat, i) => (
          <div key={i} className="doc-section">
            <div className="doc-section__header">
              <span className="doc-section__icon">{cat.icon}</span>
              <h3>{cat.category}</h3>
            </div>
            <div className="doc-list">
              {cat.items.map((doc, j) => (
                <div key={j} className="doc-item">
                  <div className="doc-item__left">
                    <span className="doc-item__type">{doc.type}</span>
                    <div>
                      <div className="doc-item__name">{doc.name}</div>
                      <div className="doc-item__size">{doc.size}</div>
                    </div>
                  </div>
                  <div className="doc-item__right">
                    <span className={`doc-status doc-status--${doc.status.toLowerCase().replace(' ', '-')}`}>
                      {doc.status}
                    </span>
                    {doc.status === 'Available' && doc.link && (
                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="doc-btn"
                      >
                        ↗ Open in OneDrive
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
/* ════════════════════════════════════════
   SLIDES
   ── To update links: replace the URL strings
      inside each `viewLink:` and `downloadLink:`
      field below. Set status: 'Available' to
      show the buttons.
════════════════════════════════════════ */
const SLIDE_SETS = [
  {
    title: 'Project Proposal Presentation',
    date: 'September 2025',
    icon: '📊',
    status: 'Available',
    desc: 'Full project proposal covering all four components, research objectives, methodology, and system architecture.',
    viewLink:     'https://mysliit-my.sharepoint.com/:p:/g/personal/it22639080_my_sliit_lk/IQCBHsgTsTZhTYO5J1-EcnJ5AT9FYdqG9UMH23xt-2mEOPk?e=PNuIBJ',
    downloadLink: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22639080_my_sliit_lk/IQCBHsgTsTZhTYO5J1-EcnJ5AT9FYdqG9UMH23xt-2mEOPk?e=PNuIBJ',
  },
  {
    title: 'Progress Presentation I',
    date: 'October 2025',
    icon: '📈',
    status: 'Available',
    desc: 'Implementation Phase 01 results, model training outcomes, dataset statistics, and preliminary performance metrics.',
    viewLink:     'https://mysliit-my.sharepoint.com/:p:/g/personal/it22639080_my_sliit_lk/IQDBeSuocLfaRaEGOGAy0xa8Aa8JZIb93xYXKwd9XMeMBCA?e=w2Q5vH',
    downloadLink: 'https://mysliit-my.sharepoint.com/:p:/g/personal/it22639080_my_sliit_lk/IQDBeSuocLfaRaEGOGAy0xa8Aa8JZIb93xYXKwd9XMeMBCA?e=w2Q5vH',
  },
  {
    title: 'Progress Presentation II',
    date: 'January 2026',
    icon: '🔬',
    status: 'In Progress',
    desc: 'Full integration results, research paper highlights, complete model evaluation, and user testing findings.',
    viewLink:     'https://mysliit-my.sharepoint.com/:f:/g/personal/it22639080_my_sliit_lk/IgAXk9qsIiQ1QqjQ4ZemNyFuAVUAU8ylhrK78GTV85peavg?e=dcRzQY',
    downloadLink: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22639080_my_sliit_lk/IgAXk9qsIiQ1QqjQ4ZemNyFuAVUAU8ylhrK78GTV85peavg?e=dcRzQY',
  },
  {
    title: 'Final Presentation',
    date: 'May 2026',
    icon: '🏆',
    status: 'Upcoming',
    slides: '—',
    desc: 'Complete system demonstration, real-world user testing results, and research impact summary.',
    viewLink:     'https://mysliit-my.sharepoint.com/:f:/g/personal/it22639080_my_sliit_lk/IgBFlXhCRIL9Q5L3XdrINi1qAdUUr4lT420m8Nfy9-jiwnY?e=wH2H1i',
    downloadLink: 'https://mysliit-my.sharepoint.com/:f:/g/personal/it22639080_my_sliit_lk/IgBFlXhCRIL9Q5L3XdrINi1qAdUUr4lT420m8Nfy9-jiwnY?e=wH2H1i',
  },
];
 
export function Slides() {
  return (
    <div className="page-wrap page-enter">
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <div className="section-label">Presentations</div>
          <h1 className="section-title">Presentation <span className="grad-text">Slides</span></h1>
          <p className="section-subtitle">Slides from all past and upcoming project presentations. Click to view or download from OneDrive.</p>
        </div>
      </div>
      <div className="container" style={{ padding: '3rem 2rem 5rem' }}>
        <div className="slides-grid">
          {SLIDE_SETS.map((s, i) => (
            <div key={i} className="slide-card">
              <div className="slide-card__icon">{s.icon}</div>
              <div className="slide-card__meta">
                <span className={`slide-status slide-status--${s.status.toLowerCase().replace(' ', '-')}`}>{s.status}</span>
                <span className="slide-date">{s.date}</span>
              </div>
              <h3 className="slide-card__title">{s.title}</h3>
              <p className="slide-card__desc">{s.desc}</p>
              <div className="slide-card__actions">
                {s.status === 'Available' ? (
                  <>
                    <a
                      href={s.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem' }}
                    >
                      ↗ View Slides
                    </a>
                    <a
                      href={s.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem' }}
                    >
                      ↓ Download
                    </a>
                  </>
                ) : (
                  <button
                    className="btn btn-outline"
                    style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem', opacity: 0.5, cursor: 'not-allowed' }}
                    disabled
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 

/* ════════════════════════════════════════
   ABOUT US
════════════════════════════════════════ */
const TEAM = [
  {
    name: 'I.A.D.J Chathurangika',
    id: 'IT22583628',
    email: 'it22583628@my.sliit.lk',
    component: 'Voice-Guided Intelligent Vision Assistant',
    role: 'Person Recognition & Biometric AI',
    color: '#5b6af5',
    icon: '👁',
    focus: ['Face Detection & Recognition (MTCNN, InceptionResnetV1)', 'Voice Speaker Identification (ECAPA-TDNN)', 'Age & Gender Classification (EfficientNetB0)', 'Facial Attribute Detection (Xception)', 'Spatial Position & Distance Estimation'],
  },
  {
    name: 'E.G.K Madhusanka',
    id: 'IT22639080',
    email: 'it22639080@my.sliit.lk',
    component: 'Smart Voice-Assisted Currency & Bill System',
    role: 'Financial AI & OCR Engineering',
    color: '#f5c842',
    icon: '💰',
    focus: ['Sri Lankan Currency YOLO Detection', 'CORD & SROIE OCR Model Training', 'NLP Key-Field Information Extraction', 'Smart Wallet Firebase Integration', 'Voice-Interactive Financial Management'],
  },
  {
    name: 'D.D.S Dasunika',
    id: 'IT22583246',
    email: 'it22583246@my.sliit.lk',
    component: 'Context-Aware Indoor Navigation Assistant',
    role: 'Navigation AI & IoT Engineering',
    color: '#00d4b8',
    icon: '🧭',
    focus: ['YOLOv8n Custom Object Detection', 'MiDaS Monocular Depth Estimation', 'Voice-Commanded Object Search', 'Contextual Spatial Querying Module', 'ESP32 IoT Smart Cane Development'],
  },

  {
    name: 'M.G.N.M Jayasinghe',
    id: 'IT22642196',
    email: 'it22642196@my.sliit.lk',
    component: 'AI Wardrobe Advisor',
    role: 'Fashion AI & Recommendation Systems',
    color: '#f55b8a',
    icon: '👔',
    focus: ['YOLOv8 Clothing Category Detection', 'Color-Cloth CV Model Training', 'Caregiver Personal Closet Database', 'Occasion-Based Recommendation Engine', 'Target Search Spatial Verification Loop'],
  },
];

export function About() {
  return (
    <div className="page-wrap page-enter">
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <div className="section-label">The Research Team</div>
          <h1 className="section-title">About <span className="grad-text">Us</span></h1>
          <p className="section-subtitle">
            Final-year undergraduate students from the Department of Information Technology,
            Sri Lanka Institute of Information Technology, developing an AI-powered assistive system
            as our BSc (Hons) capstone research project.
          </p>
        </div>
      </div>
      <div className="container" style={{ padding: '3rem 2rem 5rem' }}>
        {/* Supervisor */}
        <div className="supervisor-card">
          <div className="supervisor-card__icon">🎓</div>
          <div className="supervisor-card__content">
            <div className="section-label" style={{ marginBottom: '0.5rem' }}>Project Supervisor</div>
            <h3>Ms. Thisara Shyamalee</h3>
            <p>Department of Information Technology · Sri Lanka Institute of Information Technology</p>
          </div>
        </div>
        <div className="supervisor-card">
          <div className="supervisor-card__icon">🎓</div>
          <div className="supervisor-card__content">
            <div className="section-label" style={{ marginBottom: '0.5rem' }}>Project Co-Supervisor</div>
            <h3>Ms. Sasini Hathurusinghe</h3>
            <p>Department of Information Technology · Sri Lanka Institute of Information Technology</p>
          </div>
        </div>

        {/* Team */}
        <h2 className="about-section-title">Team Members</h2>
        <div className="team-grid">
          {TEAM.map((m, i) => (
            <div key={i} className="team-card" style={{ '--member-color': m.color }}>
              <div className="team-card__avatar">
                <span>{m.icon}</span>
              </div>
              <div className="team-card__header">
                <h3 className="team-card__name">{m.name}</h3>
                <div className="team-card__id">{m.id}</div>
              </div>
              <div className="team-card__component">{m.component}</div>
              <div className="team-card__role">{m.role}</div>
              <div className="team-card__focus">
                {m.focus.map(f => <span key={f}>{f}</span>)}
              </div>
              <a href={`mailto:${m.email}`} className="team-card__email">
                ✉ {m.email}
              </a>
            </div>
          ))}
        </div>

        {/* Institution */}
        <div className="institution-card">
          <h3>Sri Lanka Institute of Information Technology</h3>
          <p>New Kandy Road, Malabe, Sri Lanka</p>
          <p>Project ID: 25-26J-303 · BSc (Hons) in Information Technology · August 2025</p>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   CONTACT
════════════════════════════════════════ */
export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-wrap page-enter">
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="container">
          <div className="section-label">Get in Touch</div>
          <h1 className="section-title">Contact <span className="grad-text">Us</span></h1>
          <p className="section-subtitle">Reach out to the VisionAI research team for collaboration, queries, or feedback.</p>
        </div>
      </div>
      <div className="container contact-layout" style={{ padding: '3rem 2rem 5rem' }}>
        {/* Info */}
        <div className="contact-info">
          <div className="contact-info-block">
            <h3>Research Team</h3>
            {TEAM.map(m => (
              <div key={m.id} className="contact-member">
                <span style={{ color: m.color }}>{m.icon}</span>
                <div>
                  <div className="contact-member__name">{m.name.split(' ').slice(-2).join(' ')}</div>
                  <a href={`mailto:${m.email}`} className="contact-member__email">{m.email}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-info-block">
            <h3>Institution</h3>
            <p>Department of Information Technology</p>
            <p>Sri Lanka Institute of Information Technology</p>
            <p>New Kandy Road, Malabe, Sri Lanka</p>
          </div>
          <div className="contact-info-block">
            <h3>Supervisor</h3>
            <p>Ms. Thisara Shyamalee</p>
            <p>thisara.s@sliit.lk</p>
          </div>
          <div className="contact-info-block">
            <h3>Co-Supervisor</h3>
            <p>Ms. Sasini Hathurusinghe</p>
            <p>sasini.h@sliit.lk</p>
          </div>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="contact-form__title">Send a Message</h3>
          {sent && <div className="contact-form__success">✓ Message sent successfully!</div>}
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="Research inquiry / Collaboration / Feedback" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={6} placeholder="Write your message here..." required />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Send Message ↗
          </button>
        </form>
      </div>
    </div>
  );
}
