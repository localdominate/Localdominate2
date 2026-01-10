import React from 'react';
import AutoLexikonText from './AutoLexikonText';

interface AutoLexikonParagraphProps {
  children: React.ReactNode;
  maxLinks?: number;
  excludeTerms?: string[];
  className?: string;
}

/**
 * A paragraph component that automatically links SEO lexikon terms.
 * Wraps AutoLexikonText in a <p> tag for convenience.
 * Supports both string children and mixed React nodes (including existing LexikonLinks).
 */
const AutoLexikonParagraph = ({ 
  children, 
  maxLinks = 5, 
  excludeTerms = [],
  className = "text-muted-foreground leading-relaxed mb-4"
}: AutoLexikonParagraphProps) => {
  return (
    <p className={className}>
      <AutoLexikonText maxLinks={maxLinks} excludeTerms={excludeTerms}>
        {children}
      </AutoLexikonText>
    </p>
  );
};

export default AutoLexikonParagraph;
