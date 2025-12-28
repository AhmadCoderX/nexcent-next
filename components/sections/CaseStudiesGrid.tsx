"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import CaseStudyCard from "./CaseStudyCard";

const caseStudies = [
  {
    problem: "Founder needed to validate an AI-powered content generation idea quickly without spending months in development.",
    solution: "We scoped and built a focused MVP in 7 weeks with core AI features, user authentication, and a simple admin panel.",
    outcome: "Launched to 50 beta users, validated core assumptions, and secured seed funding based on real user feedback.",
  },
  {
    problem: "SaaS company needed to automate customer support to handle growing ticket volume without hiring more staff.",
    solution: "Deployed an AI support agent across web, email, and Slack channels with knowledge base integration.",
    outcome: "Reduced support tickets by 60%, improved response time to under 30 seconds, and freed up team for strategic work.",
  },
  {
    problem: "Startup had a working prototype but needed to scale to handle thousands of users and enterprise requirements.",
    solution: "Rebuilt with scalable architecture, multi-tenancy, payment processing, and enterprise security features.",
    outcome: "Successfully scaled to 5,000+ users, added enterprise customers, and increased revenue by 300% in 6 months.",
  },
];

const CaseStudiesGrid = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              problem={study.problem}
              solution={study.solution}
              outcome={study.outcome}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;

