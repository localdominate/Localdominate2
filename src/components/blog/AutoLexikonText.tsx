import React, { useMemo, Children, isValidElement, cloneElement } from 'react';
import LexikonLink from './LexikonLink';
import { findLexikonMatches, TextMatch } from '@/lib/lexikonKeywordMatcher';

interface AutoLexikonTextProps {
  children: React.ReactNode;
  maxLinks?: number;
  excludeTerms?: string[];
  className?: string;
}

/**
 * Automatically replaces SEO lexikon terms in text with LexikonLink components.
 * Only the first occurrence of each term is linked.
 * Supports both string children and mixed React nodes.
 */
const AutoLexikonText = ({ 
  children, 
  maxLinks = 5, 
  excludeTerms = [],
  className 
}: AutoLexikonTextProps) => {
  const content = useMemo(() => {
    // Extract already linked terms from existing LexikonLink components
    const existingLinkedTerms = new Set<string>(excludeTerms);
    
    const extractLinkedTerms = (nodes: React.ReactNode): void => {
      Children.forEach(nodes, (child) => {
        if (isValidElement(child)) {
          // Check if it's a LexikonLink component
          if (child.type === LexikonLink || 
              (typeof child.type === 'function' && child.type.name === 'LexikonLink')) {
            const term = child.props.term;
            if (term) {
              existingLinkedTerms.add(term.toLowerCase());
            }
          }
          // Recursively check children
          if (child.props.children) {
            extractLinkedTerms(child.props.children);
          }
        }
      });
    };
    
    extractLinkedTerms(children);
    
    // Track which terms we've already linked in this render
    const linkedTermsThisRender = new Set<string>();
    let totalLinksAdded = 0;
    
    // Process text nodes and add links
    const processTextNode = (text: string): React.ReactNode => {
      if (typeof text !== 'string' || totalLinksAdded >= maxLinks) {
        return text;
      }
      
      // Find matches, excluding already linked terms
      const allExcluded = [...existingLinkedTerms, ...linkedTermsThisRender];
      const matches = findLexikonMatches(text, maxLinks - totalLinksAdded, allExcluded);
      
      if (matches.length === 0) {
        return text;
      }
      
      // Build content with links
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      
      matches.forEach((match, index) => {
        // Check if we've already linked this term
        if (linkedTermsThisRender.has(match.term.toLowerCase())) {
          return;
        }
        
        // Add text before match
        if (match.start > lastIndex) {
          parts.push(text.slice(lastIndex, match.start));
        }
        
        // Add link
        parts.push(
          <LexikonLink key={`lexikon-${index}-${match.term}`} term={match.term}>
            {match.matchedText}
          </LexikonLink>
        );
        
        linkedTermsThisRender.add(match.term.toLowerCase());
        totalLinksAdded++;
        lastIndex = match.end;
      });
      
      // Add remaining text
      if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
      }
      
      return parts.length > 0 ? parts : text;
    };
    
    // Recursively process all children
    const processChildren = (nodes: React.ReactNode): React.ReactNode => {
      return Children.map(nodes, (child) => {
        // Process string nodes
        if (typeof child === 'string') {
          return processTextNode(child);
        }
        
        // Skip null/undefined
        if (child == null) {
          return child;
        }
        
        // Process React elements
        if (isValidElement(child)) {
          // Don't process inside LexikonLink components
          if (child.type === LexikonLink || 
              (typeof child.type === 'function' && child.type.name === 'LexikonLink')) {
            return child;
          }
          
          // Skip certain elements where we shouldn't add links
          const skipElements = ['a', 'button', 'input', 'code', 'pre', 'script', 'style'];
          if (typeof child.type === 'string' && skipElements.includes(child.type)) {
            return child;
          }
          
          // Recursively process children
          if (child.props.children) {
            return cloneElement(child, {
              ...child.props,
              children: processChildren(child.props.children)
            });
          }
        }
        
        return child;
      });
    };
    
    return processChildren(children);
  }, [children, maxLinks, excludeTerms]);
  
  if (className) {
    return <span className={className}>{content}</span>;
  }
  
  return <>{content}</>;
};

export default AutoLexikonText;
