import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this another AI post generator?",
    answer:
      "No. It's a controlled system for writing in your voice. It doesn't vomit generic content; it refines your ideas.",
  },
  {
    question: "Which models does it support?",
    answer:
      "User-selectable. It is designed for premium models like Gemini 3 Pro, Claude 4.5 Opus, GPT 5.2 to ensure nuance.",
  },
  {
    question: "Can I edit prompts?",
    answer:
      "Yes, fully. The system is transparent. You see the prompt, you edit the prompt.",
  },
  {
    question: "Is it really open source?",
    answer: "Yes. MIT License. Do what you want with it.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-ink-white border-y border-foreground/10">
      <div className="container mx-auto max-w-2xl">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-10 text-center opacity-50">
          Frequently Asked Questions
        </h3>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-2 border-transparent hover:border-foreground transition-all data-[state=open]:border-foreground"
            >
              <AccordionTrigger className="font-bold text-xl p-4 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-foreground/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
