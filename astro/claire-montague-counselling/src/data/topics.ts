export type Topic = {
  slug: string;
  name: string;
  shortBlurb: string;
  longBlurb: string;
  commonSigns: string[];
  approach: string;
  image: string;
};

const U = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const topics: Topic[] = [
  {
    slug: 'anxiety',
    name: 'Anxiety',
    shortBlurb: 'The quiet hum that never quite switches off.',
    longBlurb:
      "Anxiety is rarely only in the head. It shows up in a tight chest, a rehearsed conversation you keep replaying, a hand that hovers over the send button. For many of the people I work with, it has been there so long it feels indistinguishable from personality — the background noise of a life that has learned to keep itself safe. We work slowly. First to understand what the anxiety is trying to do for you, what it is protecting, and what it costs. Then to build a different relationship with it. Not to vanquish it, but to loosen its grip — so it can become one voice among many rather than the one always at the microphone. This often involves some gentle somatic work, some curiosity about the younger parts underneath, and a lot of permission to slow down.",
    commonSigns: [
      'Racing thoughts that get louder at night',
      'Constant low-grade dread with no obvious source',
      'Over-preparing, over-explaining, over-apologising',
      'A body that feels braced even at rest',
      'Avoidance that looks like productivity',
    ],
    approach:
      'We will not try to "fix" your anxiety in the first month. We will get curious about it. Gentle pacing. Somatic awareness. A lot of unhurried conversation.',
    image: U('1499728603263-13726abce5fd'),
  },
  {
    slug: 'burnout',
    name: 'Burnout',
    shortBlurb: 'When caring stops being sustainable.',
    longBlurb:
      "Burnout is more than being tired. It is the particular exhaustion that comes from caring too much, for too long, in systems that did not care back. It often arrives wearing the clothes of cynicism, numbness, irritability, a loss of meaning in work that used to matter. Many of the people I see in burnout are high-functioning on the outside — still meeting deadlines, still showing up for others, still smiling at the pharmacy. Inside, something has quietly collapsed. The work here is not a list of self-care tips. It is recovering your capacity to feel, rebuilding the boundaries that got dismantled under pressure, and grieving the version of yourself that thought you could keep going forever. We go at a pace your nervous system can tolerate.",
    commonSigns: [
      'Exhaustion that sleep does not touch',
      'Dread on Sunday evenings that has nothing to left to give',
      'Resentment toward people or causes you used to love',
      'Cognitive fog, forgetting simple words, losing track',
      'Guilt at resting, but no real capacity to work',
    ],
    approach:
      'Rest first, insight later. We stabilise the nervous system, then look at the conditions that produced the burnout. Recovery is not linear.',
    image: U('1481437156560-3205f6a55735'),
  },
  {
    slug: 'grief',
    name: 'Grief and loss',
    shortBlurb: 'For the losses that do not fit on a sympathy card.',
    longBlurb:
      "Grief is not only for death, though death is what most readily gets named. It is also for the ending of a marriage, a friendship, a career, a pregnancy, a version of your body, a country you cannot return to, a parent who is still alive but no longer able to know you. It is for the children you did not have and the ones you did. It is for the self you were before the diagnosis. Our culture has a short tolerance for grief. It expects neatness, stages, a visible end. In this room, we do not rush it. We make space for the mess, for the days it feels very far away and the days it floods back in without warning. We practise a grief literacy — the language, the rituals, the permission — that many of us were never taught.",
    commonSigns: [
      'Feeling out of sync with people around you',
      'Unexpected waves months or years after the loss',
      'Difficulty concentrating, sleeping, or eating well',
      'A sense of being permanently changed',
      'Anger that surprises you with its size',
    ],
    approach:
      'Grief is not a problem to be solved. We witness it together and let it do its slow work. Sometimes tears. Sometimes laughter. Both welcome.',
    image: U('1520453803296-c39eabe2dab4'),
  },
  {
    slug: 'relationships',
    name: 'Relationship transitions',
    shortBlurb: 'Starting, ending, repairing, redefining.',
    longBlurb:
      "Relationships ask things of us we are rarely taught to provide — honest speech, tolerable conflict, the ability to stay present when someone we love is upset with us. Most of us learned our relational patterns in childhood and have been running them ever since, often without noticing. People come to me in many kinds of transition: considering leaving a long partnership, working out how to stay, rebuilding after infidelity, navigating the early years of co-parenting, redefining family after a death, or simply trying to understand why the same argument keeps finding them. The work is not about assigning blame. It is about becoming a clearer observer of your own patterns, learning to hold yourself steadier in the hard moments, and deciding — on purpose — what you want the next chapter to look like.",
    commonSigns: [
      'The same argument on loop',
      'Feeling unseen or unable to speak honestly',
      'Contemplating an ending and unsure what is right',
      'Difficulty trusting after a rupture',
      'Wanting to be a different kind of partner or parent',
    ],
    approach:
      'I work with individuals on their side of a relational system. Not couples work (for now), but deep work on how you show up, what you tolerate, and what you want to change.',
    image: U('1471623320832-752e8bbf8413'),
  },
  {
    slug: 'identity',
    name: 'Identity and meaning',
    shortBlurb: 'Who am I, now that the old story no longer fits?',
    longBlurb:
      "Some seasons of life come with an identity crisis embedded in them. Leaving a long career. The end of a defining relationship. Becoming a parent. Losing a parent. Coming out, or finding a new language for something you have always known. Watching your children grow beyond you. These thresholds ask a quiet, disruptive question: who are you, if not the person you were yesterday? This work is rarely about arriving at a neat new label. It is about tolerating the in-between, the not-yet-knowing, long enough for a more honest self to emerge. We take seriously the longing beneath the stuckness, the question of what you actually want your life to mean, and the parts of you that have been waiting a long time to be heard.",
    commonSigns: [
      'Feeling like you are performing a life rather than living one',
      'Old roles no longer fitting but nothing new arrived yet',
      'A quiet question of "what is all this for"',
      'Longing for something you cannot quite name',
      'Grief for the self you were supposed to become',
    ],
    approach:
      'We slow down enough to let the real question surface. Often the question is a better companion than the answer. Parts-work, narrative, quiet listening.',
    image: U('1454944338482-a69bb95894af'),
  },
  {
    slug: 'neurodivergence',
    name: 'Late-diagnosis neurodivergence',
    shortBlurb: 'For the adult who just learned their brain has always been this way.',
    longBlurb:
      "A growing number of the people I see are adults who have recently realised — through an assessment, a friend's offhand comment, a TikTok, a therapist's eyebrow — that they are autistic, ADHD, or both. The reaction is often complex: relief, grief, rage, recognition, exhaustion at how much harder everything has secretly been. This is not a neurotypical lens being borrowed to talk about neurodivergence. I work from a neurodiversity-affirming frame, which means we are not trying to make you more normal. We are trying to understand how you actually work, grieve the accommodations you never got, let go of the shame that was never yours, and build a life — socially, professionally, sensorily — that fits your actual nervous system. You do not need to perform neurotypical here.",
    commonSigns: [
      'A lifetime of "trying harder" that never quite worked',
      'Intense burnout or masking-fatigue',
      'Recent diagnosis and nowhere to put the feelings',
      'Sensory overload you did not know had a name',
      'Wanting a therapist who will not try to fix your brain',
    ],
    approach:
      'Neurodiversity-affirming, not pathologising. Expect slower pacing, written follow-ups if helpful, and no surprises about how sessions run.',
    image: U('1507003211169-0a1dd7228f2d'),
  },
];
