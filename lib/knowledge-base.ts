export interface KnowledgeChunk {
  id: string
  factors: string[]
  title: string
  content: string
}

export const knowledgeBase: KnowledgeChunk[] = [
  // ── Hours_Studied ────────────────────────────────────────────────────────
  {
    id: "hs-01",
    factors: ["Hours_Studied"],
    title: "Spaced Repetition Outperforms Massed Practice",
    content:
      "Research consistently shows that distributing study sessions over time — known as spaced repetition — produces far stronger long-term retention than cramming the same total hours into a single session. Ebbinghaus's forgetting curve demonstrates that memory decays rapidly after initial learning but is reinforced each time material is reviewed at increasing intervals. Students who spread 20 hours of study across two weeks retain significantly more than those who compress 20 hours into two days before an exam. Practical implementation involves reviewing material one day after initial study, then three days later, then weekly — a pattern that can be managed with tools like Anki or even a simple paper schedule.",
  },
  {
    id: "hs-02",
    factors: ["Hours_Studied"],
    title: "Active Recall Doubles Retention Versus Re-reading",
    content:
      "Cognitive psychology research, particularly Roediger and Karpicke's 2006 studies, established that testing yourself on material — active recall — is roughly twice as effective as re-reading the same content. The 'testing effect' occurs because retrieval practice strengthens memory traces more than passive review. Students who close their notes and write everything they remember, solve practice problems without looking at solutions, or use flashcard self-quizzing outperform passive reviewers even when total study time is identical. For every hour of study, spending 30–40 minutes on active recall rather than re-reading produces measurably better exam outcomes.",
  },
  {
    id: "hs-03",
    factors: ["Hours_Studied"],
    title: "Optimal Study Session Length and Cognitive Fatigue",
    content:
      "Neuroscience research on sustained attention suggests that cognitive performance begins declining after 25–50 minutes of focused work without a break. The Pomodoro Technique, which alternates 25-minute focused sessions with 5-minute breaks, aligns with these findings and has empirical support in productivity research. Longer unbroken sessions accumulate cognitive fatigue, reducing information encoding efficiency — meaning two hours of distracted, fatigued study may yield less learning than 90 focused minutes with structured breaks. Students who track actual focused study time (not time with books open) typically find their effective study hours are 30–40% lower than perceived, highlighting the importance of quality over quantity.",
  },
  {
    id: "hs-04",
    factors: ["Hours_Studied"],
    title: "Interleaving Topics Improves Problem-Solving Transfer",
    content:
      "A counterintuitive finding in learning science is that interleaving — alternating between different subjects or problem types within a study session — produces better long-term performance than blocking (finishing one topic completely before moving to the next). Rohrer and Taylor's research showed students who interleaved practice problems scored 43% higher on delayed tests than those who blocked practice, despite blocked practice feeling more productive during the session. The difficulty of interleaving forces the brain to discriminate between problem types and retrieve the correct strategy, building flexible knowledge that transfers to novel exam questions.",
  },

  // ── Attendance ───────────────────────────────────────────────────────────
  {
    id: "att-01",
    factors: ["Attendance"],
    title: "Classroom Attendance and Exam Score Correlation",
    content:
      "Meta-analyses across university and secondary school populations consistently find attendance to be one of the strongest predictors of academic performance, with correlations between 0.4 and 0.6 with final grades. Credé, Roch, and Kieszczynka's 2010 meta-analysis of 69 studies found class attendance was a better predictor of GPA than study habits, motivation, or prior grades. The mechanisms are multiple: in-class explanations clarify misconceptions in real time, instructor emphasis signals exam-relevant material, and classroom discussion deepens conceptual understanding in ways that textbook reading cannot replicate. Missing even 15–20% of classes significantly disrupts the coherent knowledge structure needed for exam performance.",
  },
  {
    id: "att-02",
    factors: ["Attendance"],
    title: "Note-Taking During Class Encodes Information Twice",
    content:
      "The act of taking handwritten notes during a lecture produces what cognitive scientists call 'generative processing' — the student must actively summarize, paraphrase, and structure incoming information rather than passively receiving it. Mueller and Oppenheimer's research showed handwritten notes produced better conceptual understanding than laptop typing because the physical constraint of writing forces deeper encoding. Students who attend class and take structured notes benefit from two encoding events: the live lecture and the note-review session. Students who miss class and read peers' notes receive only one encoding event, missing the contextual explanations and real-time clarifications that make content comprehensible.",
  },
  {
    id: "att-03",
    factors: ["Attendance"],
    title: "Building Consistent Attendance Habits",
    content:
      "Behavioral research on habit formation suggests attendance consistency is more predictive of outcomes than total attendance count — a student who attends every class at 85% reliability outperforms one who attends 100% for three weeks then disappears. Implementation intentions (planning exactly when and how you will get to class) are significantly more effective than motivation-based approaches. Specific strategies with research support include: preparing materials the night before to reduce morning friction, using alarm sequences rather than a single alarm, identifying attendance accountability partners, and addressing root causes of absence (commute, sleep schedule, anxiety) rather than treating each missed class as an isolated decision.",
  },

  // ── Tutoring_Sessions ────────────────────────────────────────────────────
  {
    id: "tut-01",
    factors: ["Tutoring_Sessions"],
    title: "One-on-One Tutoring Is the Most Effective Educational Intervention",
    content:
      "Bloom's 1984 '2-sigma problem' remains one of the most cited findings in educational research: students receiving one-on-one tutoring performed two standard deviations above classroom instruction averages — equivalent to moving from the 50th to the 98th percentile. The advantage comes from immediate error correction, adaptive pacing, personalized explanations, and the psychological safety to ask questions without social evaluation. While two-sigma gains require intensive tutoring, even one session per week targeting identified weak areas produces measurable improvements. Tutoring is most effective when sessions focus on specific diagnosed gaps rather than general content review.",
  },
  {
    id: "tut-02",
    factors: ["Tutoring_Sessions"],
    title: "Maximizing Tutoring Effectiveness Through Preparation",
    content:
      "Research on tutoring outcomes shows significant variance based on student preparation: students who arrive at sessions with specific questions, worked examples of where they got stuck, and attempted problems produce 60–80% better outcomes than students who expect the tutor to direct the session. The prepared student's errors provide diagnostic information that lets the tutor identify the precise conceptual misunderstanding. Effective tutoring preparation includes: attempting all assigned problems before the session (even if the attempt fails), writing down the specific step where confusion begins, and formulating questions as 'I understood X but not why Y follows' rather than 'I don't understand this chapter.'",
  },
  {
    id: "tut-03",
    factors: ["Tutoring_Sessions"],
    title: "Peer Tutoring Benefits Both Tutor and Learner",
    content:
      "Studies on peer tutoring programs consistently find academic benefits for both parties. The Protégé Effect — the finding that people learn material more deeply when they expect to teach it — means peer tutors often gain as much as those they teach. Cross-age peer tutoring (older students tutoring younger) and same-age reciprocal tutoring both show significant effects. For students with limited access to professional tutors, forming structured peer study pairs where each person takes turns explaining concepts produces outcomes comparable to half the hours with a professional tutor. The key variable is whether the explaining student is reconstructing understanding rather than reading notes aloud.",
  },

  // ── Sleep_Hours ──────────────────────────────────────────────────────────
  {
    id: "slp-01",
    factors: ["Sleep_Hours"],
    title: "Sleep Consolidates Memory Formed During Study Sessions",
    content:
      "Neuroscience research has established that memory consolidation — the process of converting short-term memories into durable long-term storage — occurs predominantly during slow-wave and REM sleep stages. Walker's research at UC Berkeley showed that students who slept 8 hours after studying retained 20–40% more material than sleep-deprived students after 24 hours, even when total waking hours for review were equalized. The hippocampus replays recently learned information during slow-wave sleep, transferring it to neocortical storage. This means the night of sleep after studying a topic is functionally part of the learning process itself — skipping it undoes a significant portion of the day's work.",
  },
  {
    id: "slp-02",
    factors: ["Sleep_Hours"],
    title: "Sleep Deprivation Impairs Prefrontal Function Critical for Exams",
    content:
      "The prefrontal cortex — responsible for working memory, complex reasoning, decision-making, and error monitoring — is disproportionately impaired by sleep deprivation compared to other brain regions. Van Dongen et al.'s studies showed that 6 hours of sleep per night for two weeks produced cognitive deficits equivalent to 48 hours of total sleep deprivation, while subjects reported feeling 'slightly tired' — meaning students consistently underestimate their impairment. Exam performance requires precisely the prefrontal functions most degraded by poor sleep: holding multiple concepts in working memory simultaneously, recognizing question structure, and catching calculation errors. Gaining one additional hour of sleep the week before exams has been shown to improve scores more than an equivalent hour of additional study.",
  },
  {
    id: "slp-03",
    factors: ["Sleep_Hours"],
    title: "Consistent Sleep Schedule Optimizes Cognitive Performance",
    content:
      "Research on circadian rhythm regulation shows that consistency of sleep timing is nearly as important as duration. Students who sleep 7 hours on a consistent schedule outperform those who sleep 8 hours with variable timing across weekdays and weekends — a pattern called 'social jet lag' that Wittmann et al. found correlated with 0.2 GPA points lower performance per hour of social jet lag. Practical implications: maintaining a consistent wake time (even on weekends) is the single highest-leverage sleep intervention; morning light exposure within 30 minutes of waking entrains the circadian clock; and avoiding screens in the hour before sleep reduces sleep onset latency by an average of 10–15 minutes.",
  },

  // ── Previous_Scores ──────────────────────────────────────────────────────
  {
    id: "ps-01",
    factors: ["Previous_Scores"],
    title: "Prior Knowledge Is the Strongest Predictor of New Learning",
    content:
      "Ausubel's assimilation theory, consistently supported by subsequent research, holds that new information is understood and retained by anchoring it to existing knowledge structures. Students with stronger prior domain knowledge learn new material in that domain approximately three times faster than novices because they have more 'hooks' for new information to attach to. This creates a compounding dynamic: stronger prior scores predict faster acquisition of new material, which predicts stronger future scores. The implication for students with lower previous scores is that targeted remediation of foundational concepts — rather than trying to cover new material at the same pace as peers — produces disproportionate returns by unlocking faster acquisition of everything built on those foundations.",
  },
  {
    id: "ps-02",
    factors: ["Previous_Scores"],
    title: "Growth Mindset Interventions Improve Academic Outcomes",
    content:
      "Dweck's research on implicit theories of intelligence established that students who believe intelligence is malleable (growth mindset) persist longer on difficult problems, recover more effectively from failure, and achieve higher grades than students who believe ability is fixed (fixed mindset). Critically, growth mindset interventions are one of the most replicated and cost-effective educational interventions: a single 45-minute session explaining the neuroscience of learning produced measurable GPA improvements in Yeager et al.'s large-scale trials. For students with lower previous scores, reframing past performance as information about what to study rather than evidence of fixed ability is a prerequisite for the sustained effort that actually produces improvement.",
  },

  // ── Motivation_Level ─────────────────────────────────────────────────────
  {
    id: "mot-01",
    factors: ["Motivation_Level"],
    title: "Intrinsic Motivation Produces Deeper Learning Than External Pressure",
    content:
      "Self-Determination Theory, developed by Deci and Ryan, identifies three psychological needs underlying intrinsic motivation: autonomy (feeling self-directed), competence (experiencing mastery and progress), and relatedness (connecting learning to meaningful goals). Research across educational contexts consistently shows that intrinsically motivated students engage in deeper cognitive processing, seek out challenges rather than avoiding them, and retain material significantly longer than extrinsically motivated counterparts. Building intrinsic motivation involves identifying genuine connections between course material and personal goals, setting competence-building micro-goals (small achievable challenges rather than performance goals), and cultivating autonomy through choice of study methods even when content is fixed.",
  },
  {
    id: "mot-02",
    factors: ["Motivation_Level"],
    title: "Implementation Intentions Bridge the Gap Between Goals and Action",
    content:
      "Gollwitzer's research on implementation intentions — specific 'when-then' plans for goal-directed behavior — shows they increase goal follow-through by 200–300% compared to simple goal setting. While students often set goals ('I will study more'), they fail to specify the situational cues that trigger the behavior. Implementation intentions address this: 'When I finish dinner at 7pm, I will go to my desk and open my chemistry notes for 45 minutes' is dramatically more effective than 'I will study chemistry tonight.' The mechanism is pre-loading the decision — when the cue occurs, the response executes automatically rather than requiring motivational effort. Students with low motivation benefit more from environmental design and pre-commitment than from attempts to increase motivation directly.",
  },
  {
    id: "mot-03",
    factors: ["Motivation_Level"],
    title: "Progress Visibility Sustains Motivation Through Difficult Periods",
    content:
      "Research on goal pursuit shows that motivation follows a U-shaped curve across goal completion — high at the start (novelty) and high near completion (proximity to goal), but lowest in the middle. Teresa Amabile's Progress Principle research found that small, visible daily progress is the strongest predictor of positive inner work life and sustained motivation. For students, tracking concrete progress indicators — problems solved, pages covered, practice test scores over time — activates the brain's reward circuitry and sustains effort through the motivation trough. Externalizing progress through visible charts, journals, or apps that mark streaks leverages the same psychological mechanisms as gamification, maintaining behavioral momentum when intrinsic motivation temporarily flags.",
  },

  // ── Physical_Activity ────────────────────────────────────────────────────
  {
    id: "pa-01",
    factors: ["Physical_Activity"],
    title: "Aerobic Exercise Elevates BDNF and Enhances Hippocampal Neuroplasticity",
    content:
      "Exercise neuroscience research, particularly Ratey and Hagerman's work, established that aerobic exercise elevates Brain-Derived Neurotrophic Factor (BDNF) — a protein critical for the growth of new neurons and the strengthening of synaptic connections in the hippocampus, the brain region central to memory formation. Hillman et al.'s research showed that students who exercised aerobically for 20 minutes before studying demonstrated significantly better memory encoding and attention span than sedentary controls. Regular physical activity (3–5 sessions per week of moderate aerobic exercise) produces structural hippocampal growth visible on MRI and correlates with improved vocabulary acquisition, mathematical reasoning, and reading comprehension in school-age students.",
  },
  {
    id: "pa-02",
    factors: ["Physical_Activity"],
    title: "Exercise Timing Relative to Study Optimizes Memory Consolidation",
    content:
      "A 2019 study by van Dongen et al. found that exercising four hours after a learning session, rather than immediately after or the next day, produced the strongest memory consolidation — with participants retaining 10–15% more material two days later. The proposed mechanism involves catecholamine release during delayed exercise interacting with memory consolidation processes initiated by study. Separately, morning exercise has been shown to improve sustained attention for 2–4 hours post-exercise through elevated norepinephrine and dopamine, making the post-exercise window particularly productive for difficult cognitive tasks like problem-solving and concept learning. Even brief 10-minute walks during study breaks demonstrably improve attention and working memory compared to seated rest.",
  },

  // ── Parental_Involvement ─────────────────────────────────────────────────
  {
    id: "pi-01",
    factors: ["Parental_Involvement"],
    title: "Parental Academic Support Structures the Home Learning Environment",
    content:
      "Research by Jeynes' meta-analysis (2005, 2007) covering over 200,000 students found that parental involvement in education produced effect sizes of 0.5–0.7 on academic achievement — among the largest of any educational intervention. The most impactful forms of involvement are: maintaining consistent routines and study spaces, communicating high but achievable expectations, engaging in conversations about school content, and monitoring (without dictating) homework completion. Critically, parental expectations had larger effects than direct homework help, and positive communication about academic value predicted outcomes more strongly than supervision. For students with lower parental involvement, explicitly creating a structured home study environment and identifying other adult mentors can partially compensate for these missing supports.",
  },

  // ── Access_to_Resources ──────────────────────────────────────────────────
  {
    id: "ar-01",
    factors: ["Access_to_Resources"],
    title: "Free High-Quality Study Resources Can Substitute for Paid Materials",
    content:
      "The proliferation of free, peer-reviewed educational resources has dramatically reduced the resource gap between high- and low-income students. Khan Academy provides comprehensive K-12 and university-level instruction with adaptive practice, validated in randomized trials to improve test scores. MIT OpenCourseWare, Coursera audit tracks, and YouTube channels by academic educators (3Blue1Brown for mathematics, CrashCourse for conceptual overviews) offer university-quality instruction at no cost. Public library systems provide free access to physical textbooks, digital databases (JSTOR, PubMed), and study rooms. Students who systematically map their weak areas to specific free resources and use them with the same discipline as paid materials can close resource gaps substantially.",
  },
  {
    id: "ar-02",
    factors: ["Access_to_Resources", "Internet_Access"],
    title: "Structured Resource Use Outperforms Passive Content Consumption",
    content:
      "Having access to educational resources does not automatically produce learning gains — the cognitive engagement with those resources determines outcomes. Research on online learning found that students who used video resources for active learning (pausing to answer questions, taking notes, attempting practice problems before watching solutions) retained 2–3× more than students who watched the same videos passively. The most effective resource utilization follows a retrieve-then-check pattern: attempt a problem or question from memory first, then use the resource to check and correct the answer, rather than reading the resource first and attempting problems after. This activates the testing effect even within a single study session.",
  },

  // ── Internet_Access ──────────────────────────────────────────────────────
  {
    id: "ia-01",
    factors: ["Internet_Access"],
    title: "Offline Study Strategies Compensate for Limited Connectivity",
    content:
      "Research on distributed learning environments confirms that students with limited internet access can achieve comparable outcomes to connected peers through systematic offline preparation. Key strategies include: downloading course materials, lecture notes, and practice materials during available connectivity windows for offline access; using library computer labs for scheduled intensive online study sessions; creating comprehensive physical study guides during connectivity that enable offline review; and focusing online time on interactive practice tools (rather than passive reading available offline). Students in low-connectivity environments who front-load their online research and resource gathering into structured sessions typically outperform connected students who spread internet access across unfocused browsing.",
  },

  // ── Peer_Influence ───────────────────────────────────────────────────────
  {
    id: "peer-01",
    factors: ["Peer_Influence"],
    title: "Peer Study Groups Enhance Learning Through Collaborative Elaboration",
    content:
      "Structured peer learning groups, when organized around active problem-solving rather than passive review, produce outcomes superior to solo study for conceptual understanding and application. Johnson and Johnson's meta-analysis found cooperative learning produced effect sizes of 0.6–0.7 versus individual study. The mechanism is 'collaborative elaboration': explaining material to peers forces reorganization of knowledge, reveals gaps invisible during solo study, and generates multiple perspectives on problem-solving. Effective study groups have 3–5 members, rotate the teaching role, work problems before consulting notes, and set specific output goals (cover these three topics, solve these ten problems). Social accountability also increases actual time-on-task compared to solo study.",
  },
  {
    id: "peer-02",
    factors: ["Peer_Influence"],
    title: "Academic Peer Norms Influence Individual Study Behavior",
    content:
      "Sociological research on peer effects in education consistently finds that the academic culture of a student's closest peer group is a stronger predictor of study behavior than individual attitudes. Sacerdote's research on college roommate effects showed that being randomly assigned to a high-GPA roommate increased a student's own GPA significantly, independent of baseline ability. The mechanism is normative: when studying is the default behavior among peers, the activation energy required to study decreases while the social cost of not studying increases. Students in low-academic-motivation peer environments can counteract this by deliberately expanding their academic social network — joining subject-specific study groups, office hours communities, or online academic forums where high effort is the norm.",
  },

  // ── Teacher_Quality ──────────────────────────────────────────────────────
  {
    id: "tq-01",
    factors: ["Teacher_Quality"],
    title: "Self-Directed Learning Strategies Compensate for Instructional Gaps",
    content:
      "Research on self-regulated learning, particularly Zimmerman's framework, identifies the strategies that distinguish high-achieving students regardless of instruction quality: goal-setting before each study session, self-monitoring during study, self-evaluation after study, and adjustment of strategies based on outcomes. Students in low-quality instructional environments who adopt self-regulated learning strategies perform comparably to well-instructed students — the compensating mechanism is that explicit self-direction replaces the scaffolding a skilled teacher provides. Practically, this means finding alternative explanations for poorly taught content (YouTube educators, textbook alternatives, peer explanation), not accepting confusion as permanent, and using practice exams as diagnostic tools to identify remaining gaps rather than as performance tests.",
  },

  // ── Learning_Disabilities ────────────────────────────────────────────────
  {
    id: "ld-01",
    factors: ["Learning_Disabilities"],
    title: "Evidence-Based Accommodations Significantly Narrow the Achievement Gap",
    content:
      "Research on learning disabilities in academic settings consistently shows that appropriate accommodations — extended time, alternative formats, assistive technology, reduced-distraction testing environments — substantially narrow the gap between students with learning disabilities and their peers. Hock's research found that students with dyslexia who received text-to-speech accommodation performed comparably to non-disabled peers on comprehension measures, while those without accommodation showed significant deficits. Extended time accommodations for students with processing speed deficits are particularly validated by research showing that the time constraint, not the content knowledge, drives score differences. Students with diagnosed learning disabilities are entitled to formal accommodation requests through academic disability services, which have no academic penalty and are legally protected.",
  },
  {
    id: "ld-02",
    factors: ["Learning_Disabilities"],
    title: "Multisensory Learning Techniques Benefit Students With Processing Differences",
    content:
      "The science of learning differences shows that students with dyslexia, ADHD, dyscalculia, and related profiles often have intact or superior abilities in specific domains while experiencing specific processing bottlenecks. Multisensory instructional approaches — combining visual, auditory, and kinesthetic learning modalities — consistently outperform single-modality instruction for students with learning differences. Specific techniques with strong evidence include: color-coded note organization for students with working memory challenges, verbal narration while problem-solving for students with visual processing differences, physical manipulation of objects for mathematical concepts, and chunking information into shorter segments with interleaved retrieval for attention-related challenges. Identifying the specific bottleneck rather than generalizing 'I have a learning disability' enables targeted strategy selection.",
  },

  // ── Parental_Education_Level ─────────────────────────────────────────────
  {
    id: "pel-01",
    factors: ["Parental_Education_Level"],
    title: "First-Generation Students Benefit Disproportionately From Academic Mentorship",
    content:
      "Research on first-generation college students (those whose parents did not complete higher education) consistently identifies information asymmetry — not academic ability — as the primary driver of performance gaps. First-generation students often lack knowledge of academic norms, resource utilization patterns, faculty relationship-building, and long-term academic planning that students from educated families absorb through family socialization. Stephens et al.'s research showed that a single intervention explaining the 'hidden curriculum' of academic institutions significantly improved first-generation students' performance. Identifying faculty mentors, upperclassmen advisors, or first-generation student support programs provides the contextual knowledge that compensates for this information gap.",
  },

  // ── Distance_from_Home ───────────────────────────────────────────────────
  {
    id: "dfh-01",
    factors: ["Distance_from_Home"],
    title: "Commute Time Affects Cognitive Resources and Study Availability",
    content:
      "Research on commuting and academic performance shows that students with long commutes face two distinct challenges: reduced time available for study and reduced cognitive resources due to commute-related stress and fatigue. Stutzer and Frey's research found commuting to be one of the most negatively valenced daily activities, producing stress and rumination that impairs subsequent concentration. Mitigation strategies with evidence include: using commute time for audio-based learning (lecture recordings, educational podcasts) to convert lost time into study time; scheduling the most cognitively demanding study tasks on commute-free days; and identifying campus library or study spaces that allow staying on-site between classes rather than traveling multiple times daily.",
  },

  // ── School_Type ──────────────────────────────────────────────────────────
  {
    id: "st-01",
    factors: ["School_Type"],
    title: "Leveraging Institutional Resources Regardless of School Type",
    content:
      "Research comparing public and private school outcomes shows that much of the achievement gap between school types is attributable to peer composition and family background rather than instructional quality per se. Coleman's foundational research and subsequent replications consistently find that students from similar socioeconomic backgrounds perform similarly regardless of school type when peer context is controlled. This means the actionable variable for individual students is not which school they attend but how systematically they utilize available resources: office hours, tutoring centers, library resources, extracurricular academic programs, and teacher relationship-building. Students in under-resourced public schools who aggressively seek available support systems consistently outperform passive students in well-resourced private schools.",
  },

  // ── Family_Income ────────────────────────────────────────────────────────
  {
    id: "fi-01",
    factors: ["Family_Income"],
    title: "Financial Stress Impairs Cognitive Bandwidth Available for Study",
    content:
      "Mullainathan and Shafir's 'scarcity' framework, supported by experimental research, demonstrates that financial stress consumes working memory and executive function resources equivalent to a 13-point IQ reduction. The cognitive bandwidth consumed by financial concerns is genuinely unavailable for academic tasks, meaning income effects on academic performance operate partly through a psychological mechanism, not only through resource access. Interventions that address financial stress — emergency funds, food security programs, clear financial planning — have been shown to improve academic performance independently of direct educational inputs. Students experiencing financial stress benefit from connecting with financial aid offices, emergency grant programs, campus food pantries, and peer support networks that reduce the cognitive tax of scarcity.",
  },

  // ── Extracurricular_Activities ───────────────────────────────────────────
  {
    id: "ec-01",
    factors: ["Extracurricular_Activities"],
    title: "Structured Extracurriculars Improve Academic Performance Through Multiple Mechanisms",
    content:
      "Longitudinal research on extracurricular participation consistently finds positive associations with academic performance, with effect sizes of 0.15–0.4 depending on the activity type and measurement period. The mechanisms are multiple: structured activities build executive function and time management skills by forcing students to budget limited time; leadership roles in clubs develop metacognitive skills that transfer to academic contexts; physical activities improve cognitive function through BDNF pathways; and social belonging through extracurriculars reduces dropout risk. Critically, research distinguishes between structured extracurriculars (sports teams, academic clubs, performing arts) which show positive effects and unstructured leisure activities which show neutral or negative effects — the organizational and goal-oriented structure drives the academic benefit.",
  },
]
