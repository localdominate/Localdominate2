import React, { useMemo } from 'react';
import LexikonLink from './LexikonLink';
import { findLexikonMatches, TextMatch } from '@/lib/lexikonKeywordMatcher';

interface AutoLexikonTextProps {
  children: string;
  maxLinks?: number;
  excludeTerms?: string[];
  className?: string;
}

/**
 * Automatically replaces SEO lexikon terms in text with LexikonLink components.
 * Only the first occurrence of each term is linked.
 */
const AutoLexikonText = ({ 
  children, 
  maxLinks = 5, 
  excludeTerms = [],
  className 
}: AutoLexikonTextProps) => {
  const content = useMemo(() => {
    if (!children || typeof children !== 'string') {
      return children;
    }
    
    const matches = findLexikonMatches(children, maxLinks, excludeTerms);
    
    if (matches.length === 0) {
      return children;
    }
    
    // Build content with links
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    
    matches.forEach((match, index) => {
      // Add text before match
      if (match.start > lastIndex) {
        parts.push(children.slice(lastIndex, match.start));
      }
      
      // Add link
      parts.push(
        <LexikonLink key={`lexikon-${index}`} term={match.term}>
          {match.matchedText}
        </LexikonLink>
      );
      
      lastIndex = match.end;
    });
    
    // Add remaining text
    if (lastIndex < children.length) {
      parts.push(children.slice(lastIndex));
    }
    
    return parts;
  }, [children, maxLinks, excludeTerms]);
  
  if (className) {
    return <span className={className}>{content}</span>;
  }
  
  return <>{content}</>;
};

export default AutoLexikonText;
