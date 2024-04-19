import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const FAQSection = () => {
    const FAQs: { question: string; answer: string }[] = [
      {
        question: "What is the AI notes taking assistant?",
        answer: "The AI notes taking assistant is an innovative project designed to streamline the process of note-taking using advanced artificial intelligence technology.",
      },
      {
        question: "How can the AI notes taking assistant benefit me?",
        answer: "The AI notes taking assistant is designed to enhance productivity and organization by simplifying the process of capturing, organizing, and retrieving information. Whether you're a student, professional, or anyone in need of effective note-taking solutions, the assistant offers intuitive features and AI-powered capabilities to streamline your workflow and boost efficiency.",
      },
      {
        question: "How does AI thumbnail generation work?",
        answer: "Whenever you type the name of project, AI will generate the image based for thumbnail based on the name.",
      },
      {
        question: "Is this free?",
        answer: "Yes it is completely free for now.",
      },
      {
        question: "What features does this application offer?",
        answer: "The features include AI thumbnail generation, AI autocomplete notes, heading buttons allow users to apply different heading levels, list and ordered list buttons create bullet and numbered lists, code block and blockquote buttons insert code blocks and blockquotes into the editor, bold, italic, and strike-through buttons toggle the respective formatting styles on and off, undo and redo buttons revert or redo the most recent changes made in the editor.",
      },
    ];
    return (
      <section className="w-full pb-12 md:pb-24 lg:pb-24 mx-auto lg:md:sm:px-0 px-3">
        <h1 className="text-3xl font-bold text-center text-gray-900 md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className="w-full">
            {FAQs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))} 
          </Accordion>
        </div>
      </section>
    );
  };
  
  export default FAQSection;