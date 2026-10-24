---
title: "Model Context Protocol (MCP) in Practice: Connecting AI Coding Agents to Databases & Production APIs"
slug: "model-context-protocol-mcp-agentic-coding"
excerpt: "A hands-on implementation guide to building secure, custom MCP servers in TypeScript that allow Claude Code, Cursor, and Windsurf to query schemas and execute sanitized operations."
author: "marcus-vance"
date: "2026-03-21"
updatedAt: "2026-03-21"
category: "ai-coding"
tags: ["MCP", "Model Context Protocol", "AI Agents", "TypeScript", "Developer Tools"]
featuredImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=630&fit=crop"
featuredImageAlt: "High-resolution programmer mechanical keyboard and dual monitor code workspace"
seoTitle: "Model Context Protocol (MCP) TypeScript Guide: Real-World Agent Tooling"
seoDescription: "Step-by-step tutorial on building Model Context Protocol (MCP) servers in TypeScript. Connect AI coding assistants to live PostgreSQL databases and internal API services safely."
affiliateDisclosure: false
faqs:
  - question: "What is Model Context Protocol (MCP)?"
    answer: "MCP is an open standard protocol created by Anthropic that standardizes how AI applications discover, connect to, and invoke external data sources, tools, and prompts using JSON-RPC."
---

## Breaking Free from Fragile Custom API Wrappers

Before the emergence of the Model Context Protocol (MCP), every AI coding assistant required bespoke tool wrappers, custom JSON prompt schemas, and proprietary extensions to access local databases, Git remotes, or internal API documentation.

MCP standardizes client-server tool execution over standardized JSON-RPC transports (stdio and SSE), enabling any compliant IDE or CLI agent to discover tools dynamically.

```typescript
// Sample MCP Server exposing a sanitized read-only database tool
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server({ name: "postgres-inspector", version: "1.0.0" }, {
  capabilities: { tools: {} }
});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "describe_table_schema",
    description: "Returns PostgreSQL column definitions, types, and primary key constraints",
    inputSchema: {
      type: "object",
      properties: { tableName: { type: "string" } },
      required: ["tableName"]
    }
  }]
}));
```

## Security Best Practices for MCP Implementations

1. **Read-Only Guards by Default**: Never give coding agents raw write permissions to staging or production databases.
2. **Explicit User Approval Gates**: High-risk operations (e.g. dropping tables, triggering deployments) must prompt the engineer for interactive terminal confirmation.
3. **Strict Parameter Sanitization**: Use parameterized SQL bindings to completely prevent prompt-injection induced SQL attacks.
