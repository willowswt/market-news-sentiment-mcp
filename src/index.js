#!/usr/bin/env node
/**
 * Real-Time Market Quotes, Options, News & Social Sentiment MCP Server (market-news-sentiment-mcp)
 * Dual-Transport Model Context Protocol (MCP) Server:
 *   1. Local stdio transport (default: `npx -y github:willowswt/market-news-sentiment-mcp`)
 *   2. Streamable HTTP transport (`--http` or remote hosted endpoint `https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp`)
 *
 * Schema discovery (`initialize`, `tools/list`, `ping`, `resources/list`, `prompts/list`)
 * runs locally with zero latency and requires no API key.
 * Live tool execution (`tools/call`) routes through the cloud Standby cluster at:
 *   https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp
 * Get your free Apify API token ($5.00/mo free credit included) at:
 *   https://console.apify.com/settings/integrations
 * Apify Store listing & documentation:
 *   https://apify.com/church_of_loujess/market-news-sentiment-mcp
 */

import http from 'node:http';
import readline from 'node:readline';
import crypto from 'node:crypto';

const SERVER_NAME = "market-news-sentiment-mcp";
const SERVER_VERSION = '1.0.0';
const REMOTE_MCP_ENDPOINT = "https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp";
const STORE_URL = "https://apify.com/church_of_loujess/market-news-sentiment-mcp";
const SUPPORTED_PROTOCOLS = new Set(['2025-06-18', '2025-03-26', '2024-11-05']);

const SERVER_INSTRUCTIONS = "Streamable-HTTP & stdio MCP server for real-time Yahoo Finance stock/crypto quotes & options chains, Google Trends breakouts, Google News feeds, and Reddit/HackerNews social sentiment. Remote Streamable-HTTP endpoint: https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp | Store: https://apify.com/church_of_loujess/market-news-sentiment-mcp";

const TOOLS = [
  {
    "name": "get_stock_crypto_quote_and_fundamentals",
    "description": "Fetch live Yahoo Finance quote, valuation ratios (market cap, trailing/forward P/E, EV/EBITDA, beta), margins, analyst price targets, and recent daily OHLCV bars for any stock, ETF, crypto, or forex symbol (e.g. 'NVDA', 'AAPL', 'SPY', 'BTC-USD', 'SOL-USD', 'EURUSD=X').",
    "inputSchema": {
      "type": "object",
      "properties": {
        "symbol": {
          "type": "string",
          "description": "Yahoo Finance symbol (e.g. 'NVDA', 'AAPL', 'BTC-USD')."
        },
        "range": {
          "type": "string",
          "description": "Recent price chart range ('5d', '1mo', '3mo', '1y', default '1mo').",
          "default": "1mo"
        }
      },
      "required": [
        "symbol"
      ]
    },
    "annotations": {
      "title": "Get Stock Crypto Quote And Fundamentals",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "get_google_trends_breakouts",
    "description": "Fetch live surging Google Trends breakout searches for a country (`geo` like 'US', 'GB', 'CA', 'DE', 'AU', 'IN') with approximate search volume ('200K+', '1M+') and linked breaking news catalysts.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "geo": {
          "type": "string",
          "description": "2-letter country code (default 'US').",
          "default": "US"
        },
        "maxResults": {
          "type": "integer",
          "description": "Maximum trending topics to return (1-25, default 12).",
          "default": 12
        }
      }
    },
    "annotations": {
      "title": "Get Google Trends Breakouts",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "search_realtime_news",
    "description": "Search live breaking news articles via Google News (`query`) with optional `timeframe` ('1h', '24h', '7d', '30d') and `country` ('US', 'GB', 'CA', etc.), returning headline, publisher, timestamp, snippet, and link.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "News search query (e.g. 'NVIDIA earnings', 'Federal Reserve', 'OpenAI')."
        },
        "timeframe": {
          "type": "string",
          "description": "Optional recency filter: '1h', '24h', '7d', '30d' (default '7d').",
          "default": "7d"
        },
        "country": {
          "type": "string",
          "description": "2-letter country code (default 'US').",
          "default": "US"
        },
        "maxResults": {
          "type": "integer",
          "description": "Max articles to return (1-25, default 10).",
          "default": 10
        }
      },
      "required": [
        "query"
      ]
    },
    "annotations": {
      "title": "Search Realtime News",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "search_reddit_discussions",
    "description": "Search Reddit posts and community sentiment by `query` and/or `subreddit`, returning post title, subreddit, author, score, comment count, body excerpt, and permalink.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "Search topic or company/product name (e.g. 'Cursor IDE', 'NVDA')."
        },
        "subreddit": {
          "type": "string",
          "description": "Optional subreddit filter without r/ (e.g. 'wallstreetbets', 'SaaS')."
        },
        "maxResults": {
          "type": "integer",
          "description": "Maximum posts to return (1-25, default 10).",
          "default": 10
        }
      }
    },
    "annotations": {
      "title": "Search Reddit Discussions",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  },
  {
    "name": "search_hackernews_sentiment",
    "description": "Search Hacker News stories and discussions (`query`) via HN Algolia API, returning top stories, upvote points, comment counts, author handles, and discussion URLs.",
    "inputSchema": {
      "type": "object",
      "properties": {
        "query": {
          "type": "string",
          "description": "Search topic, company, or technology (e.g. 'MCP server', 'Anthropic', 'Postgres')."
        },
        "sortByDate": {
          "type": "boolean",
          "description": "Sort by newest instead of relevance/points (default false).",
          "default": false
        },
        "maxResults": {
          "type": "integer",
          "description": "Maximum HN stories to return (1-25, default 10).",
          "default": 10
        }
      },
      "required": [
        "query"
      ]
    },
    "annotations": {
      "title": "Search Hackernews Sentiment",
      "readOnlyHint": true,
      "destructiveHint": false,
      "idempotentHint": true,
      "openWorldHint": true
    }
  }
];

async function forwardToolCallToRemote(name, args) {
    const token = (
        process.env.APIFY_API_TOKEN ||
        process.env.APIFY_TOKEN ||
        process.env.MCP_API_TOKEN ||
        ''
    ).trim();

    if (!token) {
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify(
                        {
                            status: 'configuration_required',
                            server: SERVER_NAME,
                            tool: name,
                            message:
                                'APIFY_API_TOKEN is required to execute live data extraction tools. ' +
                                'Create a free Apify account ($5.00 monthly credit included) and copy your token from ' +
                                'https://console.apify.com/settings/integrations, or connect directly to the remote ' +
                                `Streamable-HTTP endpoint: ${REMOTE_MCP_ENDPOINT}`,
                            remoteStreamableHttpEndpoint: REMOTE_MCP_ENDPOINT,
                            apifyStoreUrl: STORE_URL,
                        },
                        null,
                        2
                    ),
                },
            ],
            isError: true,
        };
    }

    const rpcPayload = {
        jsonrpc: '2.0',
        id: crypto.randomUUID(),
        method: 'tools/call',
        params: { name, arguments: args || {} },
    };

    const resp = await fetch(REMOTE_MCP_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(rpcPayload),
    });

    if (!resp.ok) {
        const errBody = await resp.text();
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify({
                        error: `Remote Standby HTTP ${resp.status}: ${errBody.slice(0, 400)}`,
                        endpoint: REMOTE_MCP_ENDPOINT,
                        storeUrl: STORE_URL,
                    }),
                },
            ],
            isError: true,
        };
    }

    const data = await resp.json();
    if (data && data.result) {
        return data.result;
    }
    if (data && data.error) {
        return {
            content: [{ type: 'text', text: JSON.stringify(data.error) }],
            isError: true,
        };
    }
    return {
        content: [{ type: 'text', text: JSON.stringify(data) }],
        isError: false,
    };
}

async function handleRpcMessage(msg) {
    if (!msg || typeof msg !== 'object' || msg.jsonrpc !== '2.0') {
        return { jsonrpc: '2.0', id: msg?.id ?? null, error: { code: -32600, message: 'Invalid JSON-RPC 2.0 request' } };
    }
    const method = String(msg.method || '');
    const hasId = msg.id !== undefined && msg.id !== null;
    if (!hasId || method.startsWith('notifications/')) {
        return null;
    }
    const id = msg.id;
    const params = msg.params && typeof msg.params === 'object' ? msg.params : {};

    if (method === 'initialize') {
        const clientPv = String(params.protocolVersion || '2025-06-18');
        const protocolVersion = SUPPORTED_PROTOCOLS.has(clientPv) ? clientPv : '2025-06-18';
        return {
            jsonrpc: '2.0',
            id,
            result: {
                protocolVersion,
                capabilities: {
                    tools: { listChanged: false },
                    resources: { subscribe: false, listChanged: false },
                    prompts: { listChanged: false },
                },
                serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
                instructions: SERVER_INSTRUCTIONS,
            },
        };
    }

    if (method === 'ping') {
        return { jsonrpc: '2.0', id, result: {} };
    }

    if (method === 'tools/list') {
        return { jsonrpc: '2.0', id, result: { tools: TOOLS } };
    }

    if (method === 'resources/list') {
        return { jsonrpc: '2.0', id, result: { resources: [] } };
    }

    if (method === 'resources/templates/list') {
        return { jsonrpc: '2.0', id, result: { resourceTemplates: [] } };
    }

    if (method === 'prompts/list') {
        return { jsonrpc: '2.0', id, result: { prompts: [] } };
    }

    if (method === 'tools/call') {
        const toolName = String(params.name || '').trim();
        const toolArgs = params.arguments && typeof params.arguments === 'object' ? params.arguments : {};
        const toolDef = TOOLS.find((t) => t.name === toolName);
        if (!toolDef) {
            return {
                jsonrpc: '2.0',
                id,
                error: { code: -32602, message: `Unknown tool: ${toolName}` },
            };
        }
        for (const reqField of toolDef.inputSchema?.required || []) {
            if (toolArgs[reqField] === undefined || toolArgs[reqField] === null || String(toolArgs[reqField]).trim() === '') {
                return {
                    jsonrpc: '2.0',
                    id,
                    error: { code: -32602, message: `Missing required parameter: ${reqField}` },
                };
            }
        }
        try {
            const toolResult = await forwardToolCallToRemote(toolName, toolArgs);
            return { jsonrpc: '2.0', id, result: toolResult };
        } catch (err) {
            return {
                jsonrpc: '2.0',
                id,
                result: {
                    content: [{ type: 'text', text: JSON.stringify({ error: String(err?.message || err) }) }],
                    isError: true,
                },
            };
        }
    }

    return {
        jsonrpc: '2.0',
        id,
        error: { code: -32601, message: `Method not found: ${method}` },
    };
}

const isHttpMode = process.argv.includes('--http') || process.argv.includes('--standby') || process.env.MCP_TRANSPORT === 'http';

if (isHttpMode) {
    const port = Number(process.env.PORT || process.env.ACTOR_WEB_SERVER_PORT || 4321);
    const server = http.createServer(async (req, res) => {
        const urlPath = (req.url || '/').split('?')[0];
        if (req.method === 'GET' && (urlPath === '/' || urlPath === '/health')) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(
                JSON.stringify({
                    status: 'ok',
                    server: SERVER_NAME,
                    version: SERVER_VERSION,
                    remoteEndpoint: REMOTE_MCP_ENDPOINT,
                    storeUrl: STORE_URL,
                    tools: TOOLS.map((t) => t.name),
                })
            );
            return;
        }
        if (urlPath === '/mcp' && req.method === 'POST') {
            const chunks = [];
            for await (const ch of req) chunks.push(ch);
            let body;
            try {
                body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
            } catch {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }));
                return;
            }
            const out = await handleRpcMessage(body);
            if (!out) {
                res.writeHead(202);
                res.end();
                return;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(out));
            return;
        }
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    });
    server.listen(port, '0.0.0.0', () => {
        console.error(`[${SERVER_NAME}] HTTP MCP server listening on 0.0.0.0:${port}/mcp`);
    });
} else {
    const rl = readline.createInterface({
        input: process.stdin,
        terminal: false,
    });
    rl.on('line', async (line) => {
        const trimmed = line.trim();
        if (!trimmed) return;
        let parsed;
        try {
            parsed = JSON.parse(trimmed);
        } catch {
            process.stdout.write(
                JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }) + '\n'
            );
            return;
        }
        if (Array.isArray(parsed)) {
            const responses = [];
            for (const item of parsed) {
                const r = await handleRpcMessage(item);
                if (r) responses.push(r);
            }
            if (responses.length > 0) {
                process.stdout.write(JSON.stringify(responses) + '\n');
            }
            return;
        }
        const resp = await handleRpcMessage(parsed);
        if (resp) {
            process.stdout.write(JSON.stringify(resp) + '\n');
        }
    });
}
