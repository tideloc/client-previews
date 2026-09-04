/** Every string here is verbatim from ckphysio.com.au (see content-inventory.md), with spelling
 *  corrected only inside otherwise verbatim quotes. Nothing is invented. */

export const BOOKING_URL =
  'https://www.halaxy.com/book/appointment/mrs-coryn-katz/physiotherapist/1324311/1037161/select-time';

export const claim = {
  short: 'Broader treatment options. Better individualised care.',
  long: "Unique in Sydney's Eastern Suburbs, we offer both land-based and one-on-one aquatic physiotherapy",
  experience: 'Over 20 years experience specialising in',
  specialties: ['Musculoskeletal Conditions', 'Acute and Complex Pain Management', 'Aquatic Physiotherapy'],
};

export const services = {
  aquatic: {
    title: 'Aquatic physiotherapy',
    text: "Aquatic physiotherapy utilises the natural buoyancy and warmth of a 33-34°C pool to eliminate gravity stress on painful joints, allowing patients to safely rebuild strength and mobility much sooner than on land. The water's gentle resistance also accelerates post-surgical healing and reduces swelling, making it an ideal, low-impact environment for pain relief and physical rehabilitation.",
    extra: 'WATSU sessions are also offered at our practice.',
  },
  land: {
    title: 'Land-based physiotherapy',
    text: 'At CK Physiotherapy, our land-based treatment combines a patient-centred approach, hands-on manual therapy approach and evidence-based practice to help you achieve your recovery goals. We tailor every treatment plan to your unique lifestyle and needs, using proven, research-backed techniques to ensure your care is both safe and effective.',
    extra: 'By integrating skilled, hands-on joint and soft tissue mobilisation with the latest scientific clinical data, we focus on reducing your pain, restoring your mobility, and supporting your long-term physical well-being.',
  },
  programs: {
    title: 'Personalised rehabilitation programs',
    text: 'Our comprehensive assessments allow for customised care for neuro-musculoskeletal conditions, balance difficulties and complex pain conditions. We create personalised tailored programs based on assessment findings and combine water and land therapy for your specific needs.',
  },
};

export const noSwim = 'You do not need to know how to swim to have aquatic physiotherapy';

export const conditionsIntro =
  'We are spoilt for choice with treatment options at CK Physiotherapy & Aquatherapy. We use evidence-based practice to treat and manage numerous conditions effectively, using land-based and/or water exercises and stretches.';

export interface ConditionGroup { id: string; name: string; items: string[]; text: string }
export const conditions: ConditionGroup[] = [
  {
    id: 'arthritis',
    name: 'Arthritis and pre and post-op joint replacements',
    items: ['osteoarthritis', 'rheumatoid arthritis', 'spondylosis (arthritis of the spine)', 'hip, knee and shoulder replacements', 'ankle and foot surgeries', 'lumbar surgeries (spinal fusions)'],
    text: 'Scientific evidence supports the effectiveness of aquatic physiotherapy in managing arthritic and joint pain. Buoyancy, one of the magical properties of water, reduces pressure on joints and allows for easier movement with less pain. This has been shown to improve exercise compliance and consistency. The water is excellent for post-op joint replacement therapy to improve range of motion and muscle strength.',
  },
  {
    id: 'balance',
    name: 'Balance and falls prevention',
    items: ['dementia and cognitive disorders', 'poor balance in the elderly population', 'post-op compromised balance'],
    text: 'Evidence shows that the most effective way to retrain balance in a safe environment without worrying about falling, is to do so in the water. We have some fun equipment including balance beams and wobble boards in the water to really challenge balance.',
  },
  {
    id: 'neurological',
    name: 'Neurological conditions',
    items: ['Multiple Sclerosis', "Parkinson's Disease", 'stroke', 'peripheral neuropathy', 'Cerebral Palsy'],
    text: 'Because the physiotherapist is in the water at all times with the clients, those who suffer from debilitating neurological conditions will be safe at all times. The water is an excellent way to assist in improving range of motion, reducing pain and muscle spasms and improving balance.',
  },
  {
    id: 'chronic-pain',
    name: 'Chronic pain management',
    items: ['chronic lower back pain', 'fibromyalgia', 'ankylosing spondylitis', 'complex pain conditions'],
    text: 'Coryn obtained a Post-Graduate Diploma in Pain Management in order to manage and treat complex pain conditions more effectively. She has years of experience treating and managing complex pain conditions, and is also experienced in pain neuroeducation, which has been shown to reduce the threat value of pain and thereby help reduce pain.',
  },
  {
    id: 'back-neck',
    name: 'Back and neck pain',
    items: ['neck and back disc bulges (radiculopathy)', 'facet joint pain', 'headaches and cervicogenic dysfunction', 'thoracic outlet syndrome'],
    text: 'We offer evidence-based treatment focused on reducing pain and symptoms associated with acute and chronic neck and back pain. We have expertise and years of experience managing the above conditions.',
  },
  {
    id: 'pre-post-natal',
    name: 'Pre and post-natal',
    items: ['WATSU during pregnancy'],
    text: 'The weightlessness feeling of being in the water is a huge relief when pregnant! At CK Physiotherapy & Aquatherapy, we offer WATSU, which is ideal to reduce stress and pain, especially during pregnancy.',
  },
  {
    id: 'sport',
    name: 'Sport and musculoskeletal injuries',
    items: ['muscle strains and tears (such as hamstrings)', 'tendinopathies and repetitive strain injuries (deep gluteal pain, tennis elbow, golfers elbow, tibialis posterior tendinopathy and more)', 'ligament sprains (ankle sprains, knee ligament damage and more)', 'connective tissue disorders such as plantar fasciitis, Ehlers-Danlos Syndrome (EDS)', 'nerve pain: sharp, shooting pain, pins and needles and nerve-related symptoms (referred from backs, neck, hips and shoulders)'],
    text: 'We treat all joints including neck, thoracic, lumbar, sacral spinal joints, shoulders, hips, knees and ankles. The water is a safe and comfortable medium in which to exercise without worrying about stressing your joints.',
  },
  {
    id: 'deconditioning',
    name: 'Obesity and deconditioning',
    items: ['a private, non-judgemental and tranquil environment'],
    text: 'CK Physiotherapy & Aquatherapy offers a private, non-judgemental and tranquil environment for clients who are looking for a safe space to improve their health.',
  },
];

export const approach = [
  { title: 'One-on-one care', text: 'I get into the water with each and every client for hands-on aquatic therapy. Each session is tailored to your individual goals (which are determined from your assessment). I work closely with you both on land and in the water to guide, support and encourage you so we can effectively obtain the best rehabilitation outcomes.' },
  { title: 'Listening to you', text: 'I take the time to listen to your story and understand your pain. You will be asked your expectations, concerns and beliefs, as this information is critical for client satisfaction and to meet client expectations.' },
  { title: 'Gentle and safe progress', text: 'We work at your pace in a graded manner. Whether in the water or clinic, we focus on safe, steady movements that build your confidence and ease your pain. This will set you up for success.' },
  { title: 'Evidence-based care', text: 'Your treatment is backed by the latest clinical research. I use proven techniques to ensure you receive the highest standard of physiotherapy care.' },
];

export const pool = {
  specs: [
    { value: '34°C', label: 'Water 33 to 34°C year round' },
    { value: '1.1-1.3 m', label: 'Therapeutic depth' },
    { value: 'Salt water', label: 'Indoor therapy pool' },
    { value: 'Dual rails', label: 'Railing to enter and around the perimeter' },
  ],
  paragraphs: [
    'Our indoor salt water therapy pool is therapeutic depth (1.1-1.3m deep). There is a change room inside the pool area, and toilet facilities in the clinic within metres. The pool has dual railing to enter, and there is railing throughout the perimeter of the pool as well as the physiotherapy practice to ensure client safety.',
    'The temperature of the water is 33-34 degrees Celsius year round, the ideal temperature to promote muscle relaxation, help ease pain, improve mobility and support comfortable movement on your rehabilitation journey. During winter we have a heater at the pool for your comfort.',
    'Parking is highly convenient and always available directly outside the clinic.',
    'We have unique aquatic equipment from America, South Africa, UK, Israel and Australia to assist in improving balance and proprioception, muscle strength and endurance.',
  ],
  buoyancy: {
    title: 'The science of buoyancy',
    text: 'By eliminating gravity, we enable movement that is otherwise impossible on land. Aquatic therapy utilises hydrostatic pressure to reduce swelling and improve circulation, providing a weightless environment where healing begins with every gentle pulse of the water.',
  },
  payments: ['We process Medicare rebates', 'We process private health claims via an EFTPOS machine'],
};

export const about = {
  heading: "Coryn's journey and professional expertise",
  paragraphs: [
    "Coryn immigrated to Sydney from Cape Town, where she started CK Physiotherapy & Aquatherapy in 2014. After identifying the need for specialised one-on-one aquatic therapy in Sydney's Eastern Suburbs, she established CK Physiotherapy & Aquatherapy in Sydney.",
    'Coryn decided to become a physiotherapist at just 11 years old after experiencing firsthand benefits of physiotherapy through tennis injuries.',
    'She graduated from Tulane University (USA) in 1998 with a Bachelor of Science degree in Pre-Med, double majoring in Cell and Molecular Biology and Psychology while on a tennis scholarship. Coryn was named to the "Who\'s Who among Students in Universities and Colleges in America" after topping the Dean\'s List and graduating Magna Cum Laude.',
    "She returned to South Africa to attend The University of Cape Town and completed her Bachelor of Science Physiotherapy Degree in 2002. She went on to complete her community service year at Red Cross Children's Hospital in 2003.",
    'Coryn has completed advanced dry needling courses, as well as a kinesiology taping course. She has a special interest in helping people who suffer from both chronic and acute pain. This led her to complete a Post-graduate Diploma in Pain Management through The University of Cape Town in 2021, in which she graduated with distinction under the guidance of Professor Romy Parker.',
    'Completing the advanced neuromuscular skeletal (ANMS) post-graduate diploma course in 2022 through Wits University further equipped her with the most recent evidence-based practice, and provided her with the clinical reasoning to effectively assess and treat both complex acute and chronic neuro-musculoskeletal conditions.',
    "Aquatic physiotherapy, which is her passion, led her to complete aquatic foundation, neurology and orthopaedic courses in 2013. She is one of a handful of qualified Watsu practitioners in South Africa, having had the privilege of being taught by America's aquatic therapy guru, Peggy Schoedinger. She is also accomplished in techniques taught by Britain's Dr Heather Epps. She completed post-graduate aquatic studies in Switzerland in 2014 under the guidance of the pioneers of aquatic physiotherapy techniques, and world leaders in the field, Johan Lambeck and Urs Gamper.",
    'She previously worked as an aquatic physiotherapist at Vincent Pallotti Hospital in Pinelands, Cape Town.',
    "Coryn designed and built a unique aquatic physiotherapy centre with each and every client in mind in both Cape Town and Sydney's Eastern Suburbs. Her aim is to facilitate able-bodied and disabled clients to function optimally, and to improve their quality of life.",
    'Coryn has a passion for rehabilitation and for returning clients to an optimal level of functioning. This passion has been fuelled by her love for sports including tennis, marathon running, Ironman triathlons, paddling and cycling. She also loves sewing and cooking. She is a committed wife and a devoted mother to four beautiful children.',
  ],
  watsuClaim: 'Coryn is the only WATSU certified physiotherapist in Sydney, NSW',
  timeline: [
    { year: '1998', text: 'BSc Pre-Med (Cellular and Molecular Biology and Psychology), Magna Cum Laude, Tulane University, USA' },
    { year: '2002', text: 'BSc Physiotherapy (Honours), University of Cape Town, South Africa' },
    { year: '2003', text: "Community service year, Red Cross Children's Hospital" },
    { year: '2013', text: 'Aquatic foundation, neurology and orthopaedic courses' },
    { year: '2014', text: 'Post-graduate aquatic studies in Switzerland with Johan Lambeck and Urs Gamper. Started CK Physiotherapy & Aquatherapy in Cape Town' },
    { year: '2021', text: 'Post-Graduate Diploma in Interdisciplinary Pain Management (Distinction), University of Cape Town' },
    { year: '2022', text: 'Post-Graduate Diploma course in Advanced Musculo-skeletal Conditions (Distinction), University of the Witwatersrand, Johannesburg' },
  ],
  specialties: [
    { title: 'Aquatic physiotherapy', text: 'Having completed aquatic orthopaedic and neurological courses, and many more, Coryn is able to treat most conditions effectively in the water. Aquatic therapy is performed in a salt water pool which is heated to 34 degrees (therapeutic temperature). We have loads of fun equipment to create resistance to help challenge you to improve your muscle strength and cardiovascular fitness and endurance.' },
    { title: 'Complex pain management', text: 'Complex pain management requires a whole person approach and an understanding of the long journey the client has endured. It requires multidisciplinary team management, and an understanding of the biological factors (such as hormones), social factors (workplace stress) and psychological factors (fear of movement and anxiety) contributing to pain.' },
  ],
};

export const watsu = {
  intro: [
    'WATSU (WATer ShiatsU) is a gentle form of aquatic bodywork performed in 34 degree Celsius water. A certified practitioner guides you through slow, flowing movements, stretches, and rotations while you are uniquely supported by the buoyancy of the water, creating deep relaxation and relief from joint loading.',
    'The movements through the water provide a gentle stretching into all ranges for the spine and extremities. Gentle soft tissue massage and joint mobilisation techniques can also be incorporated into a WATSU session.',
    'Furthermore, WATSU helps decrease spasticity. The rhythmical, gentle rocking motions in warm water coupled with the repeated trunk rotations and trunk elongation are effective in decreasing abnormal tone.',
    'Clients also report decreased pain, as WATSU decreases their muscle spasm and muscle guarding, increases their range of motion and promotes profound relaxation.',
  ],
  immediate: ['increased range of motion', 'increased muscle relaxation', 'decreased muscle spasm', 'decreased spasticity', 'decreased pain'],
  longTerm: ['improved sleep patterns', 'improved digestion', 'improved healing and immune system response', 'decreased anxiety', 'greater decreases in pain'],
  science: "Promoting deep relaxation and pain relief, WATSU has been scientifically shown to enhance the parasympathetic nervous system, the body's core for rest and recovery. It thereby helps improve sleep quality, boosts gut function, improves lymph drainage, reduces stress, and increases overall well-being and injury recovery.",
  who: [
    'Orthopaedic conditions: post back surgery, back pain, multiple injuries following trauma, repetitive stress injuries, muscle spasm, guarding, decreased range of motion or pain',
    'Arthritis: osteoarthritis, rheumatoid arthritis, ankylosing spondylitis',
    'Post mastectomy',
    'Fibromyalgia',
    "Neurological conditions: stroke, brain injury, spinal cord injury, cerebral palsy, Parkinson's Disease, multiple sclerosis",
    'Fatigue and burnout',
    'Complex regional pain syndrome',
    'Chronic Fatigue Syndrome',
    'Post-traumatic Stress Disorder',
  ],
  credit: 'The above information is sourced from "Clinical Watsu Techniques" written by my incredible instructor, physiotherapist, Peggy Schoedinger.',
};

export interface Testimonial { name: string; condition: string; text: string; source?: string }
export const testimonials: Testimonial[] = [
  { name: 'Saranne C', condition: 'Posterior tibialis tendinopathy', text: "I had the most outstanding experience with Coryn. She's a highly experienced physiotherapist and super confident in dealing with her patients. Coryn is a brilliant listener, and a fantastic diagnostician. Her diagnosis was spot on and endorsed with an ultrasound. In addition she is a beautiful human. Coryn also has her own Hydro pool which compliments her brilliant practice. She had me in her pool exercising and following her routine. She also sent me home with exercises and a programme to move forward with. I am now on the right track to a healthy and happy recovery. I have no hesitation in recommending Coryn. An asset in the Eastern suburbs." },
  { name: 'Marissa J', condition: 'Deep gluteal pain syndrome', text: 'Coryn is the most thorough and well informed physiotherapist that I have ever attended upon. With a thorough and well packaged exercise routine she helped me to heal without having to spend thousands of dollars on repeated therapy. Coryn is also clinically brilliant she does dry needling and outstanding tissue massage. I would recommend Coryn to anybody requiring a physiotherapist. Her set up at home is practical and easy and she has all the best equipment not to mention a hydrotherapy pool.' },
  { name: 'Lara W', condition: 'Oncology and musculoskeletal', text: 'Coryn is the most knowledgeable, professional, kind and amazing physio that I have ever been to. Her expertise is second to none. Could not recommend her highly enough!' },
  { name: 'Jamie Eagan', condition: 'Shoulder rotator cuff injury and disc bulge', text: 'Coryn is the best physiotherapist I have ever seen. Her care and follow up is rare among physiotherapists.' },
  { name: 'Ettore G', condition: 'Double below the knee amputee', text: 'We have great respect for her professionalism, innate understanding of the human body and mind which are worked together with total empathy and understanding. Most importantly, Coryn has been an anchor of support, treatments and encouragement to my husband who became a bilateral amputee in just over a period of a year. She has treated him at our apartment twice a week for some months building his physical strength and confidence. We are so grateful to have found Coryn and recommend her most highly!' },
  { name: 'Michelle G', condition: 'Shoulder rotator cuff tendinopathy', text: 'Coryn is an exceptional Physio. She is thorough, compassionate and has outstanding diagnostic skills. She always makes time to see you and has a warm and sincere manner. She treats what is necessary and only suggests repeat visits when truly required. Her integrity and solid training is evident in all that she does. Her kindness and proficiency extends to patients young, old and everyone in between. I highly recommend her.' },
  { name: 'Irene A', condition: 'Post spinal fusion', text: 'This has been the best experience I have ever had. Not just physio wise but hands on exercise in and out of the pool. The facility is amazing and Coryn is a beautiful human being. I just visited with my Neurosurgeon today for a three month check in from major spinal surgery who remarked on the outstanding progress I have made and the help I have had from Coryn is definitely a major factor.' },
  { name: 'Zac Gold', condition: 'Bulging disc', source: 'Google review', text: "From the initial session, it was clear Coryn takes a thorough and thoughtful approach. She spent time understanding my medical history, assessing my movement, and digging into the specifics of what I was experiencing. It didn't feel rushed or generic. It felt considered and tailored to me. Her approach is calm, precise, and highly personalised." },
  { name: 'Yael Barkhan', condition: '', source: 'Google review', text: 'Coryn is incredibly knowledgeable in her physiotherapy practice. I saw her for an injury, and after treatment, I was feeling 100% back to normal within just a couple of days and able to return to the gym.' },
  { name: 'Eitan Or', condition: '', source: 'Google review', text: 'Coryn is by far the best and most knowledgeable physio I have ever been to.' },
];

export const google = { rating: '5.0', count: 17 };
