import React, { useState } from 'react';
import './Domain.css';

const TABS = ['Literature Survey', 'Research Gap', 'Research Problem', 'Objectives', 'Methodology', 'Technologies'];

const LITERATURE = [
  {
    area: 'Person Recognition',
    icon: '👁',
    color: '#5b6af5',
    papers: [
      {
        ref: '[1]',
        authors: 'R. Goyal et al., Springer Nature, 2018',
        title: 'Intelligent Face Recognition System for Visually Impaired',
        finding: 'A real-time system for social interaction assistance storing known person profiles in a database. Preprocessing includes grayscale transformation, face alignment, histogram equalization, and resizing to 100×100 pixels. Achieved 87–92% recognition accuracy across lighting conditions. Limitations: relies solely on visual face recognition; performance degrades to ~45% under facial occlusion (masks); limited to frontal/near-frontal poses; requires a wearable camera device; no voice identification or spatial awareness.',
      },
      {
        ref: '[2]',
        authors: 'T. Hossain et al., Applied Sciences (MDPI), 2025',
        title: 'Deep Learning-Based Cognitive Assistance Embedded System for People with Visual Impairment',
        finding: 'Portable system on NVIDIA Jetson Nano combining MTCNN face detection (96.5% recognition rate), FaceNet 128-dim embeddings (91.2% accuracy), CNN age classifier (±5 years, 78.3%), CNN gender classifier (89.7%), and ResNet-50 emotion recognition (84.5%). Preprocessing: face alignment, normalization [0,1], resizing to 160×160 (FaceNet) and 224×224 (age/gender). Real-world tests with 18 visually impaired participants showed 81% face recognition and 76% age/gender accuracy. Limitations: lacks voice-based identification and audio-first design for blind users.',
      },
      {
        ref: '[3]',
        authors: 'M. Asif et al., Applied Sciences, 2023',
        title: 'Deep Learning-Based Portable System for Visually Impaired to Recognize Faces, Expressions, Age, and Gender',
        finding: 'Raspberry Pi-deployed system using cascade classifiers for face detection and deep neural networks for recognition. Preprocessing pipeline combines histogram equalization and noise reduction. Data augmentation: rotation, scaling, brightness adjustment. Achieved ~92% face recognition accuracy and 87% for age and gender classification. Limitations: lacks voice-based identification and does not track when individuals were last encountered.',
      },
      {
        ref: '[4]',
        authors: 'A. Farhadipour et al., arXiv, 2024',
        title: 'Comparative Analysis of Audio-Visual Fusion Techniques for Person Identification and Authentication',
        finding: 'Comparative study of audio-visual fusion using x-vector speaker embeddings and VGGFace2-based CNN for face identity. Voice recognition achieved 93% accuracy; face recognition achieved 94%. Although not specifically designed for visually impaired users, findings highlight the strong potential of audio-visual fusion for reliable person identification through voice-guided feedback — directly informing the multimodal approach of the proposed system.',
      },

    ]
  },
  {
    area: 'Indoor Navigation',
    icon: '🧭',
    color: '#00d4b8',
    papers: [
      { ref: '[5]', authors: 'Islam et al., 2023', title: 'AIDEN: AI-Based Navigation System for the Visually Impaired', finding: 'YOLOv8-based system with voice feedback. Lacks depth estimation, contextual memory, and goal-oriented search.' },
      { ref: '[6]', authors: 'Lopez-Nava et al., 2022', title: 'Vision-Based Smart Navigation Using Deep Learning', finding: 'Reactive obstacle detection with audio alerts. No voice-commanded search or spatial context awareness.' },
      { ref: '[7]', authors: 'Chen et al., 2021', title: 'Monocular Depth-Aware Indoor Navigation Assistance', finding: 'MiDaS-based collision avoidance without depth sensors. No object classification or voice interaction.' },
      { ref: '[8]', authors: 'Kumar et al., 2024', title: 'IoT-Based Smart Cane with Computer Vision Assistance', finding: 'ESP32 + ultrasonic + camera cane. No deep learning for semantics, no mobile app integration.' },
    ]
  },
  {
    area: 'Currency & Finance',
    icon: '💰',
    color: '#f5c842',
    papers: [
      { ref: '[9]', authors: 'Kumar & Kaur, 2020', title: 'Deep Learning Based Currency Recognition System', finding: 'CNN architectures (VGG, ResNet, MobileNet) outperform traditional methods. Global datasets fail for Sri Lankan currency.' },
      { ref: '[10]', authors: 'Jayasundara & Hewagamage, 2019', title: 'Challenges of Localized Currency Recognition in Sri Lanka', finding: 'Documented absence of AI tools calibrated for Sri Lankan banknote designs — key gap addressed by this research.' },
      { ref: '[11]', authors: 'Devlin et al., 2019', title: 'BERT: Pre-training of Deep Bidirectional Transformers', finding: 'NLP foundation for key information extraction from receipts and financial documents.' },
      { ref: '[12]', authors: 'Kodituwakku et al., 2020', title: 'Voice-Based Financial Assistance for Visually Impaired', finding: 'Confirmed importance of natural language interaction. No integrated expense tracking.' },
    ]
  },
  {
    area: 'Wardrobe Management',
    icon: '👔',
    color: '#f55b8a',
    papers: [
      { ref: '[13]', authors: 'Rocha et al., 2025', title: 'iSight: Smart Clothing Management System', finding: 'YOLOv8 segmentation mAP 96.5% but requires dedicated physical smart closet — impractical for mobile use.' },
      { ref: '[14]', authors: 'Yang et al., 2024', title: 'Camera-Based Prototype for Verbal Clothing Description', finding: 'Real-time verbal descriptions lacking target verification loop to confirm when a requested item is found.' },
      { ref: '[15]', authors: 'Choudhary et al., 2025', title: 'Classifying Outfits for Occasion-Based Recommendations', finding: 'CNN-based occasion classification on generic datasets. No personalized inventory or spatial guidance.' },
      { ref: '[16]', authors: 'Aneesh et al., 2025', title: 'Survey on AI-Driven Personalized Fashion Recommendation', finding: 'ResNet-50 for feature extraction. Gap: no system addresses personal wardrobe inventory management.' },
    ]
  },
];

const GAPS = [
  {
    icon: '👁', color: '#5b6af5', component: 'Person Recognition',
    title: 'No Unified Multimodal Person Recognition System',
    desc: 'No prior system (R. Goyal et al. [1], T. Hossain et al [2], M. Asif et al. [4], A. Farhadipour et al. [4] simultaneously provides real-time voice recognition, unknown person profiling (age, gender, attributes), last-seen tracking, known vs unknown detection, spatial awareness, audio feedback, and a mobile application — all in one platform for blind users.',
    cols: ['Research Aspect', 'Goyal [1] 2018', 'Hossain [2] 2025', 'Asif [3] 2023', 'Farhadipour [4] 2024', 'My Research'],
    rows: [
      { aspect: 'Real-time Voice Recognition',                         vals: [false, false, false, false,  true] },
      { aspect: 'Real-time Face Recognition',                          vals: [true,  true,   true,  false,   true] },
      { aspect: 'Known Person Recognition (Face)',                     vals: [true,  true,   true,  true,   true] },
      { aspect: 'Last Seen Tracking',                                  vals: [false, false,  false, false,  true] },
      { aspect: 'Known vs Unknown Person Detection',                   vals: [false, false,  false, false,  true] },
      { aspect: 'Unknown Person Profiling (Age, Gender, Attributes)',  vals: [false, false,  false, false,  true] },
      { aspect: 'Spatial Awareness (Direction / Distance)',            vals: [false, false,  false, false, true] },
      { aspect: 'Audio Feedback / Voice Output',                       vals: [false, false,  false, false,  true] },
      { aspect: 'Mobile Application',                                  vals: [false, false,  false, false,  true] },
    ],
  },
  {
    icon: '🧭', color: '#00d4b8', component: 'Indoor Navigation',
    title: 'No Goal-Oriented Contextual Navigation with IoT Integration',
    desc: 'Existing navigation systems Islam et al., 2023 [5],Lopez-Nava et al., 2022 [6],Chen et al., 2021 [7], Kumar et al., 2024 [8] only provide reactive obstacle detection. None combine voice-commanded object search, contextual memory for follow-up spatial queries (above/below/left/right), monocular depth estimation, and IoT smart cane integration in a single unified platform.',
    cols: ['Research Aspect', 'Islam [5] 2023 ', 'Lopez-Nava [6] 2022', 'Chen [7] 2021', 'Kumar [8] 2024', 'Proposed System'],
    rows: [
      { aspect: 'Real-time Object Detection',    vals: [true,  true,  false, false, true] },
      { aspect: 'Voice Command Interaction',     vals: [true,  false, false, false, true] },
      { aspect: 'Object Search and Navigation',  vals: [false, false, false, false, true] },
      { aspect: 'Monocular Depth Estimation',    vals: [false, false, true,  false, true] },
      { aspect: 'Contextual Object Memory',      vals: [false, false, false, false, true] },
      { aspect: 'Relative Position Queries',     vals: [false, false, false, false, true] },
      { aspect: 'Mobile Application',            vals: [true,  true,  true,  false, true] },
      { aspect: 'IoT Smart Cane Integration',    vals: [false, false, false, true,  true] },
    ],
  },
  {
    icon: '💰', color: '#f5c842', component: 'Currency & Finance',
    title: 'No Localized Sri Lankan Financial Management System',
    desc: 'No prior system Kumar & Kaur, 2020 [9], Jayasundara & Hewagamage, 2019 [10],Devlin et al., 2019 [11],Kodituwakku et al., 2020 [12]  addresses Sri Lankan currency recognition. None integrate localized denomination detection, AI-driven expense analytics, smart wallet management, hands-free operation, and key information extraction (total, date, merchant) into a single unified financial platform.',
    cols: ['Research Aspect', 'Kumar [9]', 'Jayasundara [10]', 'Devlin [11]', 'Kodituwakku [12]', 'Research [13]', 'My Research'],
    rows: [
      { aspect: 'Localized Sri Lankan Currency Detection',             vals: [false, false, false, false, true] },
      { aspect: 'AI-Driven Expense Analytics',                        vals: [false, false, false, false,  true] },
      { aspect: 'Smart Wallet Management',                            vals: [false, false, false, false,  true] },
      { aspect: 'Expense Categorization',                             vals: [false, false, false, false,   true] },
      { aspect: 'Hands-Free Operation',                               vals: [false, false, false, true,   true] },
      { aspect: 'Key Information Extraction (Total, Date, Merchant)', vals: [false, false, false, true,    true] },
    ],
  },
  {
    icon: '👔', color: '#f55b8a', component: 'Wardrobe Advisor',
    title: 'No Inventory-Based Personalized Wardrobe Management',
    desc: 'Prior systems Rocha et al., 2025 [13], Yang et al., 2024 [14],Choudhary et al., 2025 [15], Aneesh et al., 2025 [16]  only provide basic clothing/pattern identification. None use a personal wardrobe or caregiver-registered database, provide real-time spatial guidance, implement a targeted search verification loop, or offer weather and event-based recommendations from the user\'s own inventory.',
    cols: ['Research Aspect', 'Rocha [13]', 'Yang [14]', 'Choudhary [15]', 'Aneesh [16]', 'Proposed System'],
    rows: [
      { aspect: 'Basic Clothing & Pattern Identification',     vals: [true,  true,  true,  true,    true]  },
      { aspect: 'Use of Personal Wardrobe / Caregiver Data',  vals: [false, false, false, false,  true]  },
      { aspect: 'Real-time Spatial Guidance & Direction',     vals: [false, false, false, false,  true]  },
      { aspect: 'Targeted Search (Match Verification)',       vals: [false, false, false, false,  true]  },
      { aspect: 'Mobile-based, Low-cost Implementation',      vals: [true,  false, true,  false,   true]  },
      { aspect: 'Weather & Event-based Recommendation',       vals: [false, false, false, true,    true]  },
    ],
  },
];

const OBJECTIVES = [
  {
    num: 'OBJ 01',
    color: '#5b6af5',
    icon: '👁',
    component: 'Voice-Guided Intelligent Vision Assistant',
    title: 'Person Recognition & Social Awareness',
    main: 'To enable visually impaired individuals to recognize the people around them through real-time facial and voice identification, reduce the difficulties they face when interacting with society, improve their mental well-being, and take steps to enhance personal safety. The system accurately identifies registered individuals using deep learning-based face and voice recognition. When an unknown person is detected, it analyses age, gender, and facial features (eyewear, headwear, accessories, etc.) to provide visually impaired users with symbolic awareness of unfamiliar people — minimizing social isolation and enabling independent social interaction.',
    items: [
      { label: 'Voice Command-Based Interaction & Audio Output', desc: 'Enable hands-free interaction via predefined voice commands using ASR. Allow users to start/stop recognition and request information. Deliver all recognition outputs — identity, profile, position, distance, last-seen — exclusively through real-time TTS audio feedback without any tactile input.' },
      { label: 'Real-Time Face Detection & Recognition', desc: 'Implement MTCNN for robust real-time face detection and facial landmark localization. Use InceptionResnetV1 to generate 512-dimensional embeddings and classify detected faces as known or unknown using cosine similarity against Firebase-stored registered profiles.' },
      { label: 'Voice-Based Speaker Identification', desc: 'Integrate SpeechBrain ECAPA-TDNN pre-trained model for real-time speaker verification. Capture and preprocess audio (noise reduction, amplitude normalization), then compare speaker embeddings against registered voice profiles in Firebase to identify known vs unknown speakers.' },
      { label: 'Unknown Person Profiling (Age, Gender, Facial Attributes)', desc: 'Train EfficientNetB0 for age group and gender classification on the UTKFace dataset using multi-task loss. Train Xception for multi-label facial attribute detection (eyewear, headwear, facewear, accessories, noware) on the Face-Attributes-Grouped dataset using binary cross-entropy loss.' },
      { label: 'Spatial Position & Distance Estimation', desc: 'Estimate spatial position (left/right/front) by comparing bounding box centre with camera frame midpoint. Calculate approximate distance using the inverse relationship between detected face pixel size and physical distance, calibrated with known facial dimensions and camera focal length.' },
      { label: 'Temporal Last-Seen Tracking', desc: 'Maintain and update last-seen date and time records for all known persons in Firebase Firestore. Announce the last-seen timestamp to the user upon each successful recognition event.' },
      { label: 'User-Friendly Mobile Application Development', desc: 'Design and develop a Flutter-based cross-platform mobile application that integrates all recognition modules with camera and microphone access. Support easy registration of known individuals using facial images and voice samples. Ensure simplicity and accessibility for visually impaired users.' },
    ],
  },
  {
    num: 'OBJ 02',
    color: '#00d4b8',
    icon: '🧭',
    component: 'Context-Aware Indoor Navigation Assistant',
    title: 'Indoor Navigation, Depth Estimation & IoT Smart Cane',
    main: 'To design, develop, and evaluate an intelligent indoor navigation assistance system focused on improving independent navigation in indoor environments for visually impaired people. The system integrates deep learning-based real-time object recognition, monocular depth estimation, and voice-controlled interaction. It enables visually impaired users to actively search for specific objects using natural voice commands without being limited to reactive obstacle avoidance, reduces cost and need for specialized hardware through single-camera distance estimation, and maintains contextual spatial awareness for follow-up queries.',
    items: [
      { label: 'Voice-Controlled Object Search & Detection', desc: 'Implement a voice command interface that allows users to verbally request specific objects. Process commands using ASR, search for the requested object using YOLO-based detection on the camera feed, and provide audio feedback on whether the object is visible and its location.' },
      { label: 'Distance & Direction Estimation', desc: 'Implement accurate distance and direction estimation using the MiDaS monocular depth estimation model combined with object bounding box analysis to calculate approximate distances. Derive directional information from object position within the camera frame relative to the centre.' },
      { label: 'Contextual Object Memory & Relative Position Queries', desc: 'Maintain context of detected target objects to support follow-up queries. When a user searches for an object, the system remembers the target and allows subsequent queries about objects positioned above, below, left, or right of the target, enabling comprehensive spatial understanding.' },
      { label: 'Real-Time Obstacle Detection & Navigation Assistance', desc: 'Continuously monitor the user\'s path during navigation. Detect all objects in the camera\'s field of view, identify potential collision risks based on distance and trajectory, and provide timely audio warnings with directional guidance to avoid obstacles.' },
      { label: 'IoT-Based Smart Cane Development', desc: 'Design and develop an IoT-based smart cane integrated with an ESP32 microcontroller, ESP32-CAM module, ultrasonic sensors, and infrared sensors to provide real-time obstacle detection, environmental sensing, and seamless bidirectional communication with the mobile navigation application.' },
      { label: 'Mobile Application Development & Integration', desc: 'Develop a user-friendly Flutter frontend and Flask backend mobile application integrating all system components. Provide seamless voice interaction, real-time camera processing, and clear audio feedback designed specifically for visually impaired users.' },
      { label: 'System Evaluation & Performance Assessment', desc: 'Conduct comprehensive evaluation of system performance including object detection accuracy (mAP), distance estimation precision, voice recognition reliability, and overall usability through user testing with visually impaired participants.' },
    ],
  },
  {
    num: 'OBJ 03',
    color: '#f5c842',
    icon: '💰',
    component: 'Smart Voice-Assisted Currency & Bill System',
    title: 'Localized Financial Management & Smart Wallet',
    main: 'To design and develop a smart, localized, and voice-assisted financial management system that enables visually impaired users to independently identify Sri Lankan currency, read bills and receipts, manage expenses, and obtain meaningful financial insights. The system supports hands-free interaction using voice commands while improving financial accessibility, privacy, and independence.',
    items: [
      { label: 'Currency Detection & Recognition',desc: 'Enable users to identify Sri Lankan currency denominations in real time using a mobile camera and receive immediate audio feedback through voice output.' },
      { label: 'Bill & Receipt Reading', desc: 'Allow users to capture bills and receipts and extract important details such as total amount, date, and merchant name, which are then delivered through clear voice feedback.' },
      { label: 'Voice-Based Interaction', desc: 'Provide a fully hands-free experience by allowing users to control the system using voice commands and receive spoken responses for all operations and queries.' },
      { label: 'Smart Wallet Management', desc: 'Automatically store detected transactions and maintain a digital record of income and expenses that users can access anytime using voice commands.' },
      { label: 'Expense Categorization', desc: 'Classify user expenses into meaningful categories such as food, transport, and utilities to help users better understand their spending behavior.' },
      { label: 'Financial Insights & Summaries', desc: 'Provide voice-based summaries of daily, weekly, and monthly expenses along with insights into spending patterns and financial habits.' },
      { label: 'Real-Time Processing', desc: 'Ensure fast and accurate real-time detection and response for currency recognition and document reading to support practical daily usage.' },
      { label: 'Accessibility & Usability',desc: 'Design an intuitive and accessible interface specifically for visually impaired users, minimizing visual interaction and maximizing ease of use through audio guidance.' },
      { label: 'Localization for Sri Lanka', desc: 'Support Sri Lankan currency denominations and local bill formats to ensure accuracy and usability in real-world Sri Lankan contexts.' },
      { label: 'Secure Data Management',desc: 'Store user data and transaction history securely while ensuring privacy and reliable access across devices.' }
    ]
  },
  {
    num: 'OBJ 04',
    color: '#f55b8a',
    icon: '👔',
    component: 'AI Wardrobe Advisor',
    title: 'Clothing Identification, Color Detection & Personalized Recommendation',
    main: 'To develop an AI-powered, voice-assisted clothing identification and personalized recommendation system that enables visually impaired users to independently manage their wardrobe. The system allows users to identify clothing type and color, locate garments in real time, receive personalized outfit recommendations based on occasions and weather, and interact entirely through voice, improving independence, confidence, and daily decision-making.', 
    items: [
      { label: 'Clothing Identification & Color Detection',desc: 'Enable users to identify garment type and color in real time using a mobile camera and receive clear audio descriptions.' },
      { label: 'Real-Time Garment Detection & Localization', desc: 'Detect clothing items in the environment and provide spatial guidance such as position and approximate distance to help users physically locate garments.' },
      { label: 'Target Search Function', desc: 'Allow users to search for a specific clothing item and receive voice alerts when the requested item is detected, guiding them with directional audio cues.'  },
      { label: 'Voice-Based Interaction', desc: 'Provide a fully hands-free experience where users can control the system, request outfit suggestions, and identify garments using natural voice commands.'   },
      { label: 'Personal Closet Management', desc: 'Maintain a digital wardrobe of user clothing items, allowing storage and retrieval of garment details for personalized recommendations.'   },
      { label: 'Personalized Outfit Recommendation', desc: 'Suggest suitable outfit combinations based on user preferences, social occasions, and environmental factors such as weather.'   },
      { label: 'Context-Aware Recommendations', desc: 'Adapt recommendations dynamically based on real-world context, including event type and weather conditions, to provide practical and relevant style advice.'   },
      { label: 'Audio Feedback & Guidance', desc: 'Deliver all outputs through voice, including clothing descriptions, navigation guidance, and outfit recommendations, ensuring accessibility for visually impaired users.'    },
      { label: 'Accessibility & Usability',desc: 'Design an intuitive and accessible system that minimizes visual interaction and supports independent use through simple and effective voice guidance.'    }
    ]
  },

];

const METHODOLOGY = [
  { step: '01', title: 'Data Collection & Curation', desc: 'UTKFace (20K+ images), Face-Attributes-Grouped, Open Images V7 (600+ classes), Roboflow Doors & Stairs, custom Sri Lankan Currency YOLO dataset (6 denominations), CORD, SROIE, Fashion Style Image Dataset, Color-Cloth CV Dataset.' },
  { step: '02', title: 'Data Preprocessing', desc: 'Image resizing & normalization to fixed model input dimensions. CLAHE contrast enhancement. Grayscale-to-RGB conversion. Data augmentation: rotation ±15°, horizontal/vertical flip, perspective transform, brightness/contrast adjustment. 80-10-10 stratified train-val-test split.' },
  { step: '03', title: 'Model Training & Selection', desc: 'Comparative evaluation of EfficientNetB0 vs MobileNet (age/gender), Xception vs EfficientNetV2 (facial attributes). Custom YOLOv8n for navigation. YOLOv8 for currency, receipts, wardrobe. ECAPA-TDNN for voice. Models trained using Adam/SGD optimizers with early stopping.' },
  { step: '04', title: 'System Integration', desc: 'Four AI components deployed as Flask REST microservices. Flutter frontend communicates via HTTPS RESTful APIs. Firebase Firestore + Storage + Auth for cloud persistence. ESP32 IoT cane integrated via bidirectional data channel. All interactions mediated through TTS/ASR voice interface.' },
  { step: '05', title: 'Performance Evaluation', desc: 'Standard ML metrics: accuracy, precision, recall, F1-score, mAP@50, mAP@50-95. Real-time inference latency testing on consumer mobile hardware. User testing with visually impaired participants for usability and independence assessment.' },
];

const TECHNOLOGIES = [
  { category: 'Mobile Frontend', color: '#5b6af5', items: ['Flutter', 'Dart', 'Flutter TTS', 'Speech Recognition', 'Camera Plugin', 'HTTP Package'] },
  { category: 'AI Backend', color: '#00d4b8', items: ['Python', 'Flask', 'PyTorch', 'TensorFlow', 'OpenCV', 'Ultralytics YOLOv8'] },
  { category: 'Computer Vision', color: '#f5c842', items: ['MTCNN', 'InceptionResnetV1', 'EfficientNetB0', 'Xception', 'MiDaS v3.1', 'YOLOv8n/m'] },
  { category: 'Voice & NLP', color: '#f55b8a', items: ['SpeechBrain', 'ECAPA-TDNN', 'gTTS / pyttsx3', 'BERT', 'spaCy', 'Google STT API'] },
  { category: 'Cloud & Data', color: '#a78bfa', items: ['Firebase Firestore', 'Firebase Storage', 'Firebase Auth', 'Google Cloud', 'Git / GitHub'] },
  { category: 'IoT Hardware', color: '#34d399', items: ['ESP32 Microcontroller', 'ESP32-CAM Module', 'Ultrasonic Sensors', 'IR Sensors', 'Arduino IDE'] },
];

export default function Domain() {
  const [activeTab, setActiveTab] = useState(0);
  const [openArea, setOpenArea]   = useState(null);

  return (
    <div className="domain page-enter">
      <div className="domain__hero">
        <div className="domain__hero-glow" />
        <div className="container">
          <div className="section-label">Domain Details</div>
          <h1 className="section-title">Research Domain<br/><span className="grad-text">& Literature Review</span></h1>
          <p className="section-subtitle">
            Comprehensive analysis of the research landscape, gaps, objectives, methodology
            and technologies underlying the AI-powered assistive system.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="domain__tabs-wrap">
        <div className="container">
          <div className="domain__tabs">
            {TABS.map((t, i) => (
              <button
                key={i}
                className={`domain__tab ${activeTab === i ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
              >{t}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="container domain__body">
        {/* ── LITERATURE SURVEY ── */}
        {activeTab === 0 && (
          <div className="domain__panel page-enter">
            <div className="domain__intro">
              <h2>Background & Literature Survey</h2>
              <p>A comprehensive review of prior work across all four functional domains of the proposed system. Prior systems are analyzed for their capabilities, methodologies, datasets, and identified limitations.</p>
            </div>
            {LITERATURE.map((area, i) => (
              <div key={i} className="lit-area" style={{ '--area-color': area.color }}>
                <button
                  className={`lit-area__header ${openArea === i ? 'open' : ''}`}
                  onClick={() => setOpenArea(openArea === i ? null : i)}
                >
                  <span className="lit-area__icon">{area.icon}</span>
                  <span className="lit-area__title">{area.area} Systems</span>
                  <span className="lit-area__count">{area.papers.length} studies reviewed</span>
                  <span className="lit-area__chevron">{openArea === i ? '▲' : '▼'}</span>
                </button>
                {openArea === i && (
                  <div className="lit-area__body">
                    {area.papers.map((p, j) => (
                      <div key={j} className="lit-paper">
                        <div className="lit-paper__ref">{p.ref}</div>
                        <div className="lit-paper__content">
                          <div className="lit-paper__meta">{p.authors}</div>
                          <div className="lit-paper__title">{p.title}</div>
                          <div className="lit-paper__finding">
                            <span className="lit-paper__finding-label">Key Finding & Limitation:</span> {p.finding}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── RESEARCH GAP ── */}
        {activeTab === 1 && (
          <div className="domain__panel page-enter">
            <div className="domain__intro">
              <h2>Research Gap</h2>
              <p>A systematic analysis of unaddressed capabilities across existing assistive technology systems for each functional domain, collectively motivating the unified approach of the proposed platform.</p>
            </div>

            {GAPS.map((g, gi) => (
              <div key={gi} className="gap-component-block" style={{ '--gap-color': g.color }}>
                {/* header */}
                <div className="gap-component-header">
                  <span className="gap-component-icon">{g.icon}</span>
                  <div>
                    <div className="gap-component-label">{g.component}</div>
                    <h3 className="gap-component-title">{g.title}</h3>
                  </div>
                </div>
                <p className="gap-component-desc">{g.desc}</p>

                {/* comparison table */}
                <div className="gap-comp-table-wrap">
                  <table className="gap-comp-table">
                    <thead>
                      <tr>
                        {g.cols.map((col, ci) => (
                          <th key={ci} className={ci === g.cols.length - 1 ? 'gap-th-proposed' : ''}>{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {g.rows.map((row, ri) => (
                        <tr key={ri}>
                          <td className="gap-td-aspect">{row.aspect}</td>
                          {row.vals.map((v, vi) => (
                            <td key={vi} className={`gap-td-val ${vi === row.vals.length - 1 ? 'gap-td-proposed' : ''}`}>
                              {v
                                ? <span className="gap-yes">Yes</span>
                                : <span className="gap-no">No</span>
                              }
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── RESEARCH PROBLEM ── */}
        {activeTab === 2 && (
          <div className="domain__panel page-enter">
            <div className="domain__intro">
              <h2>Research Problem</h2>
            </div>
            <div className="problem-card">
              <div className="problem-card__header">
                <span>Core Research Problem</span>
              </div>
              <p className="problem-card__statement">
                How can a unified, AI-powered, voice-first mobile assistive system be designed, developed, and validated
                to provide visually impaired individuals with comprehensive, context-aware, and integrated support across
                <strong> person recognition, indoor navigation, financial management, and wardrobe advisory</strong> —
                delivered entirely through hands-free voice interaction on a consumer-grade smartphone,
                without specialized hardware, and tailored to the specific national context of Sri Lanka —
                thereby meaningfully reducing dependence on sighted assistance and enhancing independence, safety, and quality of life?
              </p>
            </div>
            <div className="problem-dims">
              {[
                { icon: '👥', color: '#5b6af5', title: 'Social Recognition Deficit', body: 'Visually impaired individuals cannot independently identify people, assess unknown persons\' demographics, recall social interactions, or understand spatial proximity — creating ongoing social anxiety, missed opportunities, and genuine safety risks.' },
                { icon: '🏠', color: '#00d4b8', title: 'Indoor Navigation Barrier', body: 'Current systems only react to immediate obstacles. They cannot fulfill goal-directed navigation commands, retain environmental context for follow-up questions, estimate distances without expensive sensors, or integrate with physical mobility aids.' },
                { icon: '💳', color: '#f5c842', title: 'Financial Independence Gap', body: 'Sri Lankan visually impaired users have zero AI-assisted financial tools calibrated for local currency. No system integrates denomination recognition, document reading, key-field extraction, expense tracking, and voice querying in one platform.' },
                { icon: '🎽', color: '#f55b8a', title: 'Personal Autonomy in Wardrobe', body: 'No system allows a visually impaired user to receive personalized outfit advice from their own clothing collection, confirm when a requested garment is found, or be guided physically toward it through directional audio cues.' },
              ].map((d, i) => (
                <div key={i} className="problem-dim" style={{ '--dim-color': d.color }}>
                  <span className="problem-dim__icon">{d.icon}</span>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── OBJECTIVES ── */}
        {activeTab === 3 && (
          <div className="domain__panel page-enter">
            <div className="domain__intro">
              <h2>Research Objectives</h2>
              <p className="problem-card__statement" style={{marginTop:'1rem',padding:'1.25rem 1.5rem',background:'rgba(91,106,245,0.07)',borderRadius:'12px',border:'1px solid rgba(91,106,245,0.2)',fontSize:'1rem',lineHeight:'1.7'}}>
                <strong>Main Objective:</strong> To design, develop, and evaluate a unified AI-powered Smart Assistive Mobile Application that integrates four intelligent, context-aware components within a single cross-platform, voice-first, hands-free mobile application, providing visually impaired individuals with comprehensive daily-life support deployable on consumer-grade smartphones without specialized hardware.
              </p>
            </div>
            <div className="obj-list">
              {OBJECTIVES.map((o, i) => (
                <div key={i} className="obj-card" style={{ '--obj-color': o.color }}>
                  {/* card header */}
                  <div className="obj-card__header">
                    <span className="obj-card__num">{o.num}</span>
                    <div>
                      <div className="obj-card__component">{o.icon} {o.component}</div>
                      <h3 className="obj-card__title">{o.title}</h3>
                    </div>
                  </div>
                  {/* main objective */}
                  <div className="obj-card__main">
                    <span className="obj-card__main-label">Main Objective</span>
                    <p>{o.main}</p>
                  </div>
                  {/* sub objectives */}
                  <div className="obj-card__sub-label">Sub Objectives</div>
                  <ul className="obj-card__items">
                    {o.items.map((item, j) => (
                      <li key={j}>
                        <span className="obj-bullet">◆</span>
                        <div>
                          <span className="obj-item-label">{item.label}</span>
                          <span className="obj-item-desc">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── METHODOLOGY ── */}
        {activeTab === 4 && (
          <div className="domain__panel page-enter">
            <div className="domain__intro">
              <h2>Methodology</h2>
              <p>The proposed system follows a systematic five-phase research and development methodology, from data curation through model training, system integration, and performance evaluation.</p>
            </div>
            <div className="method-timeline">
              {METHODOLOGY.map((m, i) => (
                <div key={i} className={`method-step anim-fade-up delay-${i+1}`}>
                  <div className="method-step__marker">
                    <div className="method-step__num">{m.step}</div>
                    {i < METHODOLOGY.length - 1 && <div className="method-step__line" />}
                  </div>
                  <div className="method-step__content">
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* system architecture diagram */}
            <div className="method-arch">
              <h3>Three-Tier Platform Architecture</h3>
              <div className="method-arch__tiers">
                {[
                  { label: 'Presentation Tier', icon: '📱', color: '#5b6af5', items: ['Flutter Mobile App', 'Camera / Microphone', 'TTS Audio Output', 'Voice Command Input'] },
                  { label: 'Logic / AI Tier', icon: '⚙️', color: '#00d4b8', items: ['Flask REST API', 'YOLO Detectors', 'SpeechBrain / FaceNet', 'OCR-NLP Pipeline'] },
                  { label: 'Data Tier', icon: '☁️', color: '#f5c842', items: ['Firebase Firestore', 'Firebase Storage', 'Firebase Auth', 'ESP32 IoT Cane'] },
                ].map((t, i) => (
                  <div key={i} className="method-arch__tier" style={{ '--tier-color': t.color }}>
                    <div className="method-arch__tier-icon">{t.icon}</div>
                    <h4>{t.label}</h4>
                    {t.items.map(item => <span key={item}>{item}</span>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── TECHNOLOGIES ── */}
        {activeTab === 5 && (
          <div className="domain__panel page-enter">
            <div className="domain__intro">
              <h2>Technologies Used</h2>
              <p>The proposed system leverages a comprehensive, modern technology stack spanning mobile development, AI/ML frameworks, computer vision models, cloud services, and IoT hardware.</p>
            </div>
            <div className="tech-grid">
              {TECHNOLOGIES.map((cat, i) => (
                <div key={i} className="tech-cat-card" style={{ '--cat-color': cat.color }}>
                  <h3 className="tech-cat-title">{cat.category}</h3>
                  <div className="tech-cat-items">
                    {cat.items.map(item => (
                      <span key={item} className="tech-cat-item">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}