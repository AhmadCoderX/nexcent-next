"use client";

interface CaseStudyCardProps {
  problem: string;
  solution: string;
  outcome: string;
  index: number;
  isVisible: boolean;
}

const CaseStudyCard = ({ problem, solution, outcome, index, isVisible }: CaseStudyCardProps) => {
  return (
    <div
      className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20 scroll-animate stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="mb-6">
        <h3 className="font-display text-lg font-bold text-foreground mb-2">Problem</h3>
        <p className="text-sm text-muted-foreground">{problem}</p>
      </div>
      <div className="mb-6">
        <h3 className="font-display text-lg font-bold text-foreground mb-2">Solution</h3>
        <p className="text-sm text-muted-foreground">{solution}</p>
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-foreground mb-2">Outcome</h3>
        <p className="text-sm text-muted-foreground">{outcome}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;

