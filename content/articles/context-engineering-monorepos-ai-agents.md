---
title: "Context Engineering for 100k-Line Monorepos: AST Slicing, Tree-sitter & Semantic Chunking"
slug: "context-engineering-monorepos-ai-agents"
excerpt: "Why dumping 1 million tokens into frontier models degrades reasoning accuracy, and how to build sub-graph AST indexers that feed surgical context to AI agents."
author: "priya-sharma"
date: "2026-03-23"
updatedAt: "2026-03-23"
category: "ai-coding"
tags: ["Context Engineering", "AST", "Monorepos", "AI Coding", "Tree-sitter", "Performance"]
featuredImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=630&fit=crop"
featuredImageAlt: "Developer monitor displaying code algorithms and syntax trees in dark mode"
seoTitle: "Context Engineering for Large Monorepos: AST & Tree-sitter Guide"
seoDescription: "Master context engineering for AI coding agents in large enterprise codebases. Learn AST slicing, Tree-sitter call graph indexing, and prompt minimization."
affiliateDisclosure: false
faqs:
  - question: "Why does model accuracy degrade when the context window is packed with irrelevant files?"
    answer: "Even with 1M+ token context windows, frontier models experience attention diffusion and needle-in-a-haystack distraction when inundated with hundreds of extraneous files, leading to incorrect assumptions about local variable scopes."
---

## The Illusion of the Infinite Context Window

The availability of 1-million and 2-million token context windows led many teams to believe repository indexing was solved: simply dump the entire codebase into the prompt.

In real-world enterprise refactoring, however, benchmark pass rates plummet when extraneous files are loaded. Attention heads suffer from dilution, and latency spikes from 1.5 seconds to over 40 seconds per turn.

```bash
# Parsing TypeScript AST with tree-sitter CLI to extract symbol definitions only
tree-sitter query "(function_declaration name: (identifier) @fn)" src/services/
```

## The Three-Tier Context Assembly Strategy

1. **Tier 1: Global Skeleton Map (500 tokens)**: High-level directory topology and exported package boundaries.
2. **Tier 2: Dependency Call-Graph Slice (2,500 tokens)**: Upstream consumers and downstream providers of the specific function being modified, identified via AST resolution.
3. **Tier 3: Active Target Files (5,000 tokens)**: The exact files undergoing modification, complete with their unit test counterparts.

By constraining prompt payloads to under 10,000 hyper-relevant tokens, agents maintain 90%+ reasoning precision and complete complex refactors in seconds.
