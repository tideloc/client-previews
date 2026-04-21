export type JournalEntry = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
  readTime: string;
  image: string;
};

const U = (id: string, w = 1400, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

export const journal: JournalEntry[] = [
  {
    slug: 'the-long-season-of-burnout',
    title: 'The long season of burnout',
    date: '2026-03-18',
    excerpt:
      "Recovery is not a weekend away. It is a slower, stranger thing — a season that changes you on the way through.",
    body: `Burnout is often described as a sudden failure, a wall you hit on a particular Tuesday. The people I work with describe it differently. It is a season. It crept up over months or years, built quietly out of a hundred small over-extensions, and by the time it is named, the landscape has already changed.

What makes burnout so disorienting is that it rarely lets you stop. The mortgage still wants paying. The children still want feeding. The emails still arrive with their little green dots. And so you continue, more thinly each week, until some part of you that used to feel things begins to feel nothing at all. That numbness is not weakness. It is a nervous system trying to protect itself from a life that has become unbearable at its current pace.

The first task in recovery is almost never insight. It is rest — the real kind, the kind that does not come with a book and a goal attached to it. Blank rest. Lying-on-the-couch rest. The kind of rest that feels like laziness because you were trained to think of it as laziness. This can take weeks. For some people, months. The body is slow to trust that the emergency is over.

Only later, once the nervous system has started to settle, does the more interesting work begin. Why did I not stop sooner? What was I afraid would happen if I did? Whose voice am I still hearing when I push through exhaustion? What did I learn, very young, about the price of being a person who needs anything?

Burnout, in the end, is usually not a time-management problem. It is a self-worth problem dressed up as a productivity problem. Recovery asks us to untangle those wires, gently, over a long season.`,
    readTime: '5 min read',
    image: U('1481437156560-3205f6a55735'),
  },
  {
    slug: 'grief-literacy',
    title: 'On grief literacy',
    date: '2026-02-22',
    excerpt:
      "Most of us were not taught how to grieve. Here is what a more literate relationship to loss might look like.",
    body: `We live in a culture with an impoverished vocabulary for grief. Outside of a funeral, there is almost no ritual. No armband. No casserole. After a fortnight, most people stop asking. You are expected to be "doing okay" before you possibly could be.

The result is that many of us are grief-illiterate. We know how to perform sadness in acceptable doses, but we do not know what grief actually does — how it moves through a body, how it loops back years later at an unrelated wedding, how it can coexist with relief, or laughter, or a strange hollow joy.

A more literate relationship to grief starts with expanding the category. Yes, grief includes the death of a person we loved. It also includes: the ending of a long friendship, the diagnosis that reorganises a future, the move away from a home, the version of your body that you no longer have, the children you did not have, the parent who is alive but no longer knows you, the country you cannot return to. All of this is grief. It deserves the word.

A literate griever learns to expect waves. They do not schedule themselves. They come on the drive home from a perfectly good day. The task is not to stop them. It is to let them pass through without arguing with them, without rushing them, without apologising for them.

A literate griever also learns to tolerate other people's grief without needing to fix it. This is a rarer skill than we admit. Most of us, when faced with a grieving friend, reach for something useful to say. The more useful offering is almost always quieter: your hand on their back, a meal left at the door, a message that says "I am thinking of you, you do not need to reply."

Grief is not a problem to be solved. It is a long, slow re-learning of a world that has become, in some small or enormous way, different.`,
    readTime: '5 min read',
    image: U('1520453803296-c39eabe2dab4'),
  },
  {
    slug: 'what-a-nervous-system-needs',
    title: 'What a nervous system actually needs',
    date: '2026-01-30',
    excerpt:
      "Self-regulation is not a wellness trend. It is the basic work of being a mammal in a modern city.",
    body: `The word "regulation" has started to circulate widely. Often it is used in a slightly aspirational way, as though regulation were a finished state we might one day arrive at. That is not quite how it works.

Regulation is not a trait. It is a moment-to-moment conversation between your body and its environment. A well-regulated nervous system is not one that is always calm. It is one that can move fluidly between states — alert when something matters, relaxed when the threat has passed, socially engaged when it is safe, and protective when it is not. The problem is rarely that we feel activated. The problem is that we get stuck.

There are three very ordinary things that a nervous system needs, that almost no one in a modern city gets enough of.

The first is pacing. We were built to alternate effort and recovery. Most of us live inside a demand structure that does not tolerate recovery, that treats rest as a lapse in productivity. The nervous system notices this. It does not care about your calendar.

The second is co-regulation. We are mammals. We calibrate, at a cellular level, against the nervous systems of other mammals near us. This is why a single kind conversation can lower your heart rate more reliably than an app. It is also why loneliness is not only sad — it is dysregulating. The presence of another warm, regulated human is, physiologically, a form of medicine.

The third is rhythm. The body loves predictable rhythms — of sleep, of meals, of light, of movement, of rest. When life becomes chaotic, small rhythms can hold a lot of weight. The same walk at the same hour. The same cup, the same window, the same dog, the same kettle. These are not trivial. These are the scaffolding the nervous system uses to decide whether the world is safe today.

If you want to begin somewhere, begin with one small rhythm you can keep. That is often more useful than a breathwork course.`,
    readTime: '6 min read',
    image: U('1494774157365-9e04c6720e47'),
  },
  {
    slug: 'the-quiet-grief-of-late-diagnosis',
    title: 'The quiet grief of late diagnosis',
    date: '2026-01-12',
    excerpt:
      "Finding out at 38 that you are autistic, or ADHD, or both, is not only relief. There is grief in it, and it deserves space.",
    body: `Late-diagnosis neurodivergence is having a cultural moment. More adults — especially women, especially people assigned female at birth, especially late millennials — are discovering, often via a TikTok or a friend or a long quiet suspicion, that their brain has always worked differently.

The first reaction is often relief. A lifetime of "why is everything harder for me" suddenly has an explanation. The reasons you were the one crying in the toilets at the office party, the one who could not understand small talk, the one whose inbox became a horror — these were not moral failings. They were the predictable outputs of a neurotype running in a world that was not built for it.

But the second reaction, for many people, is grief. A specific, quiet grief that our culture has no name for yet.

Grief for the accommodations you never got. The tutor you could have had, the quiet room at school, the manager who might have adjusted your workload. Grief for the version of yourself you have been apologising for all these years. Grief for the energy you spent masking — passing as neurotypical, at enormous personal cost, in order to be tolerable to a world that did not know it was asking that of you. Grief for the friendships and relationships that might have gone differently, if someone had just named it earlier.

This grief is often invisible. It is not the kind that earns a casserole. Many late-diagnosed people feel they are supposed to only be happy about the discovery — as though gratitude cancels loss. It does not. Both are allowed.

In this room, we make space for both. The relief, and the ache. The clarity, and the question of what to do with it now. The grief has its own timeline. The unmasking does too. We are not in a hurry.`,
    readTime: '5 min read',
    image: U('1507003211169-0a1dd7228f2d'),
  },
  {
    slug: 'permission-to-be-boring',
    title: 'Permission to be boring',
    date: '2025-12-19',
    excerpt:
      "Many of the most healing months of a person's life look, from the outside, like nothing is happening.",
    body: `There is a particular kind of client who arrives in my room impatient with themselves. They want the work to move faster. They want insight to arrive in usable packets. They want to leave each session with a concrete action. They are, often, the kind of person who has made a successful life out of being efficient, and they would like therapy to also be efficient, thank you very much.

I understand this impulse. I also, gently, disagree with it.

The most quietly transformative stretches of therapy I have witnessed — in my own clients, in my own life — have almost always looked, from the outside, like nothing was happening. The person was not pivoting their career. They were not writing a memoir. They were not having breakthroughs on a weekly cadence. They were, in fact, being quite boring. They were sleeping a little more. They were saying no to things they used to say yes to. They were walking the same walk each morning. They were letting themselves be less interesting than they had been. And underneath the surface, quite slowly, something real was re-forming.

Our culture does not value this kind of movement. It values visible progress, quantifiable before-and-afters, redemption arcs. But a nervous system does not heal on a redemption arc. It heals in the boring middle, in the undramatic repetition of safe enough days, in the accumulated small permissions to not be interesting today.

If you are in a season of life that looks, from the outside, like stagnation — you are not falling behind. You may be doing exactly what your system needs. Give yourself permission to be boring for as long as it takes. The interesting version of you will come back. It always does. It will be a little different. That is the point.`,
    readTime: '4 min read',
    image: U('1454944338482-a69bb95894af'),
  },
  {
    slug: 'the-worth-of-the-intro-call',
    title: 'The worth of the intro call',
    date: '2025-11-27',
    excerpt:
      "Before booking a full session with any counsellor, it is worth a short, free, low-stakes phone call. Here is why.",
    body: `Choosing a counsellor is strange. You are looking for someone to trust with things you may not have said out loud before, and you are being asked to decide on the basis of a photograph and a short paragraph on a website. It is a lot to ask.

This is why I offer a free twenty-minute phone call before any first session. It is not a screening. It is not a sales pitch. It is a quiet chance for you to hear my voice, get a sense of what working together might feel like, and ask anything you need to ask. There are a few reasons I think it matters.

First, fit is the single most reliably studied predictor of whether counselling helps a person. More than any modality. More than the therapist's training. The quality of the relationship between you and the person in the other chair is what does most of the work. That relationship is easier to assess on the phone than on a website.

Second, most people have a quiet list of things they want to ask a therapist before committing. Do you work with people like me. Have you sat with this kind of grief before. Will you make me do something that frightens me. Will you tell me what to do, or the opposite. A phone call is a much friendlier place for these questions than paragraph four of a contact form.

Third, it gives you permission to say no. If we speak and you sense this is not the right match, you are welcome to keep looking. I would rather you find a counsellor you trust than book a session with me out of politeness. I will often recommend colleagues I know who might fit better.

If you are thinking about starting, but finding the first step harder than it should be — please consider the intro call. It is the lowest-stakes door I know how to offer.`,
    readTime: '4 min read',
    image: U('1471623320832-752e8bbf8413'),
  },
];
