export type Note = {
  number: string;
  title: string;
  category: string;
  date: string;
};

export const notes = [
  {
    slug: "teaching-ai-to-say-i-dont-know",
    number: "003",
    title: "Teaching AI to say 'I don't know'",
    date: "June 2026",
    excerpt: "Why refusing to answer can be more valuable than answering.",
    content: `
One of the hardest parts of building a retrieval-based AI assistant was not getting it to answer.

It was getting it to stop answering when the course materials did not support a response.

At first, the assistant could generate helpful explanations from uploaded instructor materials. But during testing, I noticed a problem: when retrieval was weak or the question was only partially covered, the model would still try to be helpful.

That was risky in an educational setting.

A confident answer that sounds polished but is not grounded in the source material can be worse than no answer at all.

What worked was adding stricter retrieval guardrails. Instead of letting the model answer from general knowledge, the system had to rely on instructor-provided materials. If the relevant context was missing, weak, or incomplete, the assistant needed to clearly say that the answer was not available in the materials.

What did not work was assuming the prompt alone would fix everything.

The real improvement came from combining prompt rules with backend checks, context filtering, and fallback responses. The model needed structure around it, not just better wording.

That changed how I think about AI products.

A useful AI system is not just one that can answer questions.

It is one that knows when it should not.
`,
  },
  {
    slug: "the-hidden-work-behind-ai-products",
    number: "004",
    title: "The hidden work behind AI products",
    date: "June 2026",
    excerpt: "Most of the work happens around the model, not inside it.",
    content: `
Before building student-facing AI tools, I thought the hardest part would be getting the model to produce good answers.

It was not.

A lot of the harder engineering work happened after the response was generated.

For one feature, the model output looked fine in plain text, but broke once it reached the interface. Tables were hard to read. LaTeX equations did not render consistently. Code blocks lost formatting. Small issues made otherwise useful answers feel confusing to students.

The model was working, but the product experience was not.

What worked was treating AI output like product data, not just text. Responses needed structure. Math needed rendering support. Long answers needed formatting rules. The interface needed to handle edge cases instead of assuming every response would be clean.

What did not work was trusting raw LLM output to be user-ready.

This taught me that AI engineering is not just prompting a model. It is building the systems around the model: uploads, permissions, storage, formatting, retrieval, caching, monitoring, and UI behavior.

The model may generate the answer.

But the software around it determines whether that answer is actually usable.
`,
  },
{
  slug: "the-day-i-stopped-trusting-confidence-scores",
  number: "005",
  title: "The day I stopped trusting confidence scores",
  date: "June 2026",
  excerpt: "A system can be 100% confident and still be completely wrong.",
  content: `
While helping evaluate an educational AI assistant, our team intentionally fed it fabricated papers, fake statistics, and nonexistent academic theories.

Sometimes the system caught them.

Other times it did something much more interesting.

In one test, we invented a research paper and asked whether its findings aligned with existing work. Instead of questioning the premise, the model validated the result, coined a new technical term to support it, and explained why the finding made sense.

In another test, we introduced a fictional researcher and theory. The system expanded on the theory, generated supporting concepts, and presented them as if they were legitimate academic ideas.

The responses sounded convincing.

That was the problem.

What surprised me most was that the model would often acknowledge uncertainty before generating detailed explanations anyway. It would effectively say, "I cannot verify this," and then continue producing content that looked authoritative.

The experience changed how I think about AI evaluation.

A fluent answer is not necessarily a trustworthy answer.

One of the most important challenges in applied AI is not generating information. It is knowing when the system has enough evidence to generate anything at all.

A model can be 100% confident and still be completely wrong.
`,
},

];