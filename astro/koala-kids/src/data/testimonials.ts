export type Testimonial = {
  quote: string;
  parentName: string;
  childAgeContext: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "The care is quietly excellent. Our son came home with leaves in his pockets and ideas in his head. The educators know him — not just his routine, his actual personality.",
    parentName: 'Rebecca J.',
    childAgeContext: 'Parent · Wallaby Room (3–4)',
  },
  {
    quote: "We moved from a larger chain centre and the difference is night and day. Small team, consistent faces, meals that look like food I\'d cook at home. Worth every cent.",
    parentName: 'Dr. Anish P.',
    childAgeContext: 'Parent · Kookaburra Preschool',
  },
  {
    quote: "Sarah in the nursery gave me back the confidence I\'d lost during parental leave. She treats my baby like a whole person, not a task on a checklist. I cannot speak highly enough.",
    parentName: 'Marni L.',
    childAgeContext: 'Parent · Joey Room (0–1)',
  },
  {
    quote: "What I love most is that the pedagogy is real. It\'s not a buzzword on the wall. You can see it in how the educators speak to the children, and in what the children do when they think no one is watching.",
    parentName: 'Tom &amp; Siobhan K.',
    childAgeContext: 'Parents · Possum Room (2–3)',
  },
];
