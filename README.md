[![Glama MCP Server](https://glama.ai/mcp/servers/willowswt/market-news-sentiment-mcp/badges/score.svg)](https://glama.ai/mcp/servers/willowswt/market-news-sentiment-mcp) [![Apify Store Actor](https://img.shields.io/badge/Apify_Store-market_news_sentiment_mcp-00C853?logo=apify&logoColor=white)](https://apify.com/church_of_loujess/market-news-sentiment-mcp) [![MCP Protocol](https://img.shields.io/badge/MCP-2025--06--18_Streamable_HTTP_%26_stdio-blue)](https://modelcontextprotocol.io) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **⚡ Instant Remote Streamable-HTTP Endpoint (Zero Local Install):** `https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp`  
> **🔑 Get Your Free API Token (`$5.00/mo` Free Credit Included):** [Apify Console -> Settings -> Integrations](https://console.apify.com/settings/integrations)  
> **🌐 Hosted Apify Store Page & Interactive Runner:** [https://apify.com/church_of_loujess/market-news-sentiment-mcp](https://apify.com/church_of_loujess/market-news-sentiment-mcp)

## What can Yahoo Finance, Trends, News & Reddit MCP Server do?

**Yahoo Finance, Trends, News & Reddit MCP Server** is a live, **zero-API-key Streamable-HTTP Model Context Protocol (`MCP`) server** running in **256 MB Standby Mode** (`https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp`). Give **Claude Desktop, Cursor, ChatGPT, Windsurf, Codex, and autonomous research/trading agents** real-time access to **5 unified market, macro, news, and social-sentiment tools**: **Yahoo Finance quotes/fundamentals/OHLCV, surging Google Trends breakouts, real-time Google News search, Reddit discussions, and Hacker News technical sentiment**:

<table>
<tr>
<th>📦 What you can extract</th>
<th>⚙️ Features & integrations</th>
</tr>
<tr>
<td valign="top">

💹 **Yahoo Finance quotes & ratios** (`get_stock_crypto_quote_and_fundamentals` — stocks, ETFs, crypto & FX + OHLCV) <br>
🔥 **Google Trends breakouts** (`get_google_trends_breakouts` — live surging searches + volumes + news catalysts) <br>
📰 **Real-time Google News** (`search_realtime_news` — `1h`, `24h`, `7d`, `30d` breaking headlines & publishers) <br>
💬 **Reddit community sentiment** (`search_reddit_discussions` — search all Reddit or specific subreddits like `wallstreetbets`) <br>
🟧 **Hacker News sentiment** (`search_hackernews_sentiment` — top stories, points, comment counts & threads) <br>
💸 **`$0.00` free MCP discovery** `initialize`, `tools/list` & `ping` are `$0.00`; just `$0.025`->`$0.012` per `tools/call`

</td>
<td valign="top">

⚡ **Native Streamable HTTP (`/mcp`)** lowest per-call price in our MCP suite (`$0.025` Free / `$0.012` Gold+) <br>
🔓 **Zero API keys & zero proxies** no Yahoo crumb headaches, no Reddit OAuth keys, no NewsAPI `$449/mo` plans <br>
🌍 **Multi-country localization** supports ISO country codes (`US`, `GB`, `DE`, `CA`, `AU`, `IN`, `JP`...) <br>
🔀 **Dual-Mode execution** live `/mcp` Standby endpoint + standard Apify Console/API Batch runner <br>
⬇️ **Clean LLM-sized JSON** unwraps verbose Yahoo `{raw, fmt}` objects into crisp numbers automatically <br>
🤖 **Plug-and-play AI clients** works with Claude, Cursor, Windsurf, ChatGPT, OpenAI SDK, LangGraph & CrewAI

</td>
</tr>
</table>

Every generalist AI agent, morning-briefing assistant, and equity/crypto research copilot needs **the exact same 5 real-time context primitives**: live asset prices & valuation multiples, what's trending globally right now, breaking news headlines, retail/consumer Reddit chatter, and engineer/founder Hacker News sentiment. This single `/mcp` URL delivers all 5.

## What data can I extract with Yahoo Finance, Trends, News & Reddit MCP Server?

Cross-verifying quantitative market action against breaking news and social sentiment takes one prompt instead of five browser tabs:

- **Live equities, ETFs, crypto & FX (`get_stock_crypto_quote_and_fundamentals`):** _crumb-authenticated Yahoo Finance v8 + v10 telemetry_. Returns `regularMarketPrice`, `previousClose`, `fiftyTwoWeekHigh/Low`, `regularMarketVolume`, `fundamentals` (`marketCap`, `enterpriseValue`, `trailingPE`, `forwardPE`, `priceToBook`, `beta`, `dividendYield`, `totalRevenue`, `revenueGrowth`, `grossMargins`, `operatingMargins`, `profitMargins`, `freeCashflow`, `recommendationKey`, `targetMeanPrice`, `numberOfAnalystOpinions`, `sector`, `industry`), and `recentDailyBars`.

- **Macro & breaking-catalyst radar (`get_google_trends_breakouts` + `search_realtime_news`):** _know *why* a ticker or topic is moving in the past 60 minutes_. Combines real-time search surges by country with `1h` / `24h` / `7d` Google News headlines.

- **Retail & technical community pulse (`search_reddit_discussions` + `search_hackernews_sentiment`):** _unfiltered human reaction_. Reads what retail traders (`r/wallstreetbets`, `r/stocks`), software buyers (`r/SaaS`), and senior engineers (`Hacker News`) actually think about a company, product launch, or earnings report.

### 🛠️ Live MCP Tools Included on This Server

| MCP Tool Name | Arguments (`params.arguments`) | What It Returns |
| :--- | :--- | :--- |
| `get_stock_crypto_quote_and_fundamentals` | `symbol` (required, e.g. `"NVDA"`, `"BTC-USD"`, `"SPY"`, `"EURUSD=X"`), `range` (`"5d"`, `"1mo"`, `"3mo"`, `"1y"`) | Fetch live Yahoo Finance quote, 52w range, market cap, trailing/forward P/E, margins, free cash flow, analyst target price & recent daily OHLCV bars. |
| `get_google_trends_breakouts` | `geo` (2-letter country e.g. `"US"`, `"GB"`), `maxResults` (`1`–`25`, default `12`) | Fetch live surging Google Trends breakout searches with search volume (`200K+`, `1M+`) and linked news catalysts. |
| `search_realtime_news` | `query` (required), `timeframe` (`"1h"`, `"24h"`, `"7d"`, `"30d"`), `country` (`"US"`), `maxResults` | Search live Google News articles filtered by recency, returning headline, publisher, UTC timestamp, snippet & link. |
| `search_reddit_discussions` | `query`, `subreddit` (optional e.g. `"wallstreetbets"`, `"SaaS"`), `maxResults` | Search Reddit threads and community sentiment with scores, comment counts, body excerpts & permalinks. |
| `search_hackernews_sentiment` | `query` (required), `sortByDate` (`false`), `maxResults` (`1`–`25`, default `10`) | Search Hacker News stories via Algolia API with upvote points, comment counts, author handles & HN discussion URLs. |

> Need more specialized workflows? Combine this Actor with these dedicated tools from our suite:
>
> - ⚖️ [SEC EDGAR, UK Companies House & LEI MCP Server](https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp): add official SEC EDGAR 10-K/10-Q/8-K filings, audited XBRL facts & UK Companies House to the same Claude config
> - 💹 [Yahoo Finance Scraper](https://apify.com/church_of_loujess/yahoo-finance-scraper): need full 3-statement financials + options chains across 200 tickers? Use our Batch Yahoo Finance Scraper
> - 📰 [Google News Scraper Fast](https://apify.com/church_of_loujess/google-news-scraper-fast): need decoded publisher URLs + full-article RAG Markdown in bulk? Use Google News Scraper Fast
> - 💬 [Reddit Scraper & B2B Buyer-Intent API](https://apify.com/church_of_loujess/reddit-scraper-fast): need bulk subreddit scraping + 0–100 B2B buyer-intent scoring? Use Reddit Scraper Fast

## How much will Yahoo Finance, Trends, News & Reddit MCP Server cost?

Yahoo Finance, Trends, News & Reddit MCP Server uses transparent **Pay-Per-Event (PPE)** pricing where one event (`mcp-tool-call`) equals one successful **MCP Tool Call**. Connecting your AI client (`initialize`), inspecting tool schemas (`tools/list`), and health/keepalive checks (`ping`) are **`$0.00` FREE** — there is **$0.00 Actor start fee** on MCP calls.

Paid Apify plans automatically unlock volume discounts up to **52% off** ($0.018 on Starter/Bronze, $0.015 on Scale/Silver, and **$0.012** on Business/Gold, Platinum & Diamond) with zero residential proxy surcharges:

| Apify Plan / Tier | Price per MCP `tools/call` execution | Price per 1,000 MCP tool calls | Batch Depth & Unmasking | Approx. Monthly Capacity |
| :--- | :--- | :--- | :--- | :--- |
| **Free (`FREE` Trial Preview)** | `$0.025` | `$25.00` | **3 records/call trial** (first 2 unmasked, 3rd preview-masked) | **~200** trial calls |
| **Starter (`BRONZE` — `$29/mo`)** | `$0.018` | `$18.00` | **Unlimited depth & 100% unmasked** | **~1,611** MCP tool calls |
| **Scale (`SILVER` — `$199/mo`)** | `$0.015` | `$15.00` | **Unlimited depth & 100% unmasked** | **~13,266** MCP tool calls |
| **Business (`GOLD` — `$999/mo`)** | `$0.012` | `$12.00` | **Unlimited depth & 100% unmasked** | **~83,250** MCP tool calls |
| **Enterprise (`PLATINUM` / `DIAMOND`)** | `$0.012` / `$0.012` | `$12.00` | **Unlimited depth & 100% unmasked** | Custom high-volume SLA |

> **Free Trial vs. Paid Plan Unlock:** On the Apify Free tier, each `mcp-tool-call` returns up to **3 trial records** (first `2` records `100%` unmasked, `3rd` record preview-masked). Upgrading to **[Apify Starter (`$29/mo`)](https://console.apify.com/billing/subscription)** or higher unlocks full multi-record batch depth, `100%` unmasked records, and up to **52% lower per-call rates**. Check the [pricing tab](https://apify.com/church_of_loujess/market-news-sentiment-mcp/pricing) for full details.

## How do I use Yahoo Finance, Trends, News & Reddit MCP Server?

Yahoo Finance, Trends, News & Reddit MCP Server is engineered for **zero-friction setup** whether you are connecting an AI coding/chat client over **Streamable HTTP (`/mcp`)** or running batch extractions in **Apify Console**:

### Option A: Connect to Claude Desktop, Cursor, Windsurf, or ChatGPT in 60 seconds
1. [Create](https://console.apify.com/sign-up) a free Apify account and copy your **Personal API Token** from [Console -> Settings -> Integrations](https://console.apify.com/settings/integrations).
2. Add the live Streamable-HTTP endpoint **`https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp`** to your AI client's `mcpServers` config:

```json
{
  "mcpServers": {
    "market-news-sentiment-mcp": {
      "url": "https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_APIFY_API_TOKEN>"
      }
    }
  }
}
```

3. Restart or reload your MCP client — it will automatically run `initialize` and `tools/list` (`$0.00` free) and expose all live tools to your AI assistant.
4. Ask your question in plain English; your AI agent will select the right tool, pass structured arguments, and cite live primary sources.

### Option B: Run directly in Apify Console (No-Code Batch Mode)
1. Open **[Yahoo Finance, Trends, News & Reddit MCP Server](https://console.apify.com/actors/pnvE8tUx6pGi3oYlX)** in Apify Console.
2. Choose which tool to execute under **MCP Tool to Execute (Batch Mode)** (`tool`).
3. Fill in the matching input parameters (`symbol`, `query`, `geo`) in the Console input form.
4. Click **Save & Start** and wait a few seconds for live extraction to finish.
5. Preview your results in the **Storage -> Dataset** tab and export in **JSON, CSV, Excel, or XML**, or fetch via the Apify REST API.

## ⬇️ Input

Connect any MCP client to **`https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp`**, or run any of the 5 tools directly in **Apify Console Batch Mode**.

### Mode 1: Live Streamable-HTTP MCP Daily Copilot (`/mcp`)

Our fastest, lowest-cost all-in-one MCP server (`$0.025` Free -> `$0.012` Gold–Diamond per tool call; `$0.00` handshake).

| Input / Configuration | What it returns |
| :--- | :--- |
| `get_stock_crypto_quote_and_fundamentals` (`{"symbol": "NVDA"}`) | Live quote + P/E + margins + FCF + analyst target + 10 daily OHLCV bars |
| `search_realtime_news` (`{"query": "Federal Reserve", "timeframe": "24h"}`) | Past-24h breaking news coverage |
| `search_reddit_discussions` (`{"query": "NVDA", "subreddit": "wallstreetbets"}`) | Live retail sentiment & top threads |

**Input JSON example:**

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
        "name": "get_stock_crypto_quote_and_fundamentals",
        "arguments": {
            "symbol": "NVDA",
            "range": "1mo"
        }
    }
}
```

### Mode 2: Apify Console & REST API Batch Execution

Select `tool`, fill `symbol` / `query` / `geo`, and save structured items directly to your Apify Dataset.

| Input / Configuration | What it returns |
| :--- | :--- |
| `tool: "get_stock_crypto_quote_and_fundamentals"` + `symbol: "NVDA"` | Writes structured `market_quote` record to Dataset Storage |
| `tool: "get_google_trends_breakouts"` + `geo: "US"` | Writes live US breakout search trends to Dataset Storage |

**Input JSON example:**

```json
{
    "tool": "get_stock_crypto_quote_and_fundamentals",
    "symbol": "NVDA",
    "geo": "US",
    "maxResults": 10
}
```

### Complete Input Parameter Reference

| Parameter | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `tool` | `string` (`get_stock_crypto_quote_and_fundamentals`, `get_google_trends_breakouts`, `search_realtime_news`, `search_reddit_discussions`, `search_hackernews_sentiment`) | `"get_stock_crypto_quote_and_fundamentals"` | No | Select which market/trends/news/social tool to execute in Batch Mode. |
| `symbol` | `string` | `"NVDA"` | No | Yahoo Finance ticker symbol (e.g. 'NVDA', 'AAPL', 'BTC-USD', 'SOL-USD'). |
| `query` | `string` | `—` | No | Keyword or company query for realtime news, Reddit, or Hacker News. |
| `geo` | `string` | `"US"` | No | 2-letter country code (e.g. 'US', 'GB', 'CA', 'DE', 'AU'). |
| `maxResults` | `integer` | `10` | No | Maximum records to return (1-25). |

## ⬆️ Output and setup

All extracted records stream incrementally into your run's **Dataset** under the **Storage** tab in Apify Console. Preview results as a clean interactive table, download in **JSON, JSONL, CSV, Excel (`.xlsx`), XML, or RSS**, or consume items directly via the Apify REST API, Python/Node.js SDKs, or MCP.

### 📦 Verified dataset output sample

```json
{
    "tool": "get_stock_crypto_quote_and_fundamentals",
    "recordType": "market_quote",
    "identifier": "NVDA",
    "title": "NVIDIA Corporation (NVDA)",
    "organization": "NasdaqGS",
    "statusOrPhase": "204.64 USD",
    "date": "2026-10-30",
    "url": "https://finance.yahoo.com/quote/NVDA",
    "details": {
        "symbol": "NVDA",
        "shortName": "NVIDIA Corporation",
        "currency": "USD",
        "exchangeName": "NasdaqGS",
        "instrumentType": "EQUITY",
        "regularMarketPrice": 204.64,
        "previousClose": 227.21,
        "fiftyTwoWeekHigh": 243.37,
        "fiftyTwoWeekLow": 164.27,
        "regularMarketVolume": 168386423,
        "fundamentals": {
            "marketCap": 4941441662976,
            "enterpriseValue": 4908214910976,
            "trailingPE": 25.87105,
            "forwardPE": 12.858633,
            "priceToBook": 21.57967,
            "beta": 2.247,
            "dividendYield": 0.0049,
            "totalRevenue": 302970011648
        },
        "recentDailyBars": [
            {
                "date": "2026-10-19",
                "open": 218.1,
                "high": 219.62,
                "low": 214.7,
                "close": 217.09,
                "volume": 98684700
            },
            {
                "date": "2026-10-20",
                "open": 215.98,
                "high": 218.46,
                "low": 212.77,
                "close": 216.47,
                "volume": 79609100
            }
        ],
        "url": "https://finance.yahoo.com/quote/NVDA"
    }
}
```

### Output Field Dictionary

| Output Field | Type | Description |
| :--- | :--- | :--- |
| `tool / recordType` | `string` | Executed MCP tool and record type (`market_quote`, `trend_breakout`, `news_article`, `reddit_post`, `hn_story`). |
| `identifier / title / organization` | `string` | Ticker/ID, headline/company title, and exchange/publisher/subreddit. |
| `statusOrPhase / date / url` | `string` | Live price/volume/score badge, ISO date, and canonical verification link. |
| `details` | `object` | Complete fundamentals + OHLCV bars, trend catalysts, news metadata, or Reddit/HN discussion details. |

## Notes, tips, and exceptions

- **`$0.00` free connection & schema discovery:** `initialize`, `tools/list`, and `ping` are `$0.00` free; you only pay `$0.025` (Free) down to `$0.012` (Gold–Diamond) per actual `tools/call`.
- **Multi-asset symbol syntax:** Stocks (`AAPL`, `NVDA`, `SHEL.L`), ETFs (`SPY`, `QQQ`), Indices (`^GSPC`, `^VIX`), Crypto (`BTC-USD`, `ETH-USD`, `SOL-USD`), Commodities (`GC=F`, `CL=F`), and Forex (`EURUSD=X`, `USDJPY=X`) all work out-of-the-box.
- **Reddit resilient fallback:** If Reddit throttles a cloud IP on direct JSON search, `search_reddit_discussions` automatically fails over so your agent still gets clean results.

## What can you do with data from Yahoo Finance, Trends, News & Reddit MCP Server?

Yahoo Finance, Trends, News & Reddit MCP Server powers high-ROI automation, lead generation, and AI agent pipelines. Here are four proven step-by-step recipes:

### ☀️ 60-second executive morning market & tech briefing in Claude

Start every morning with a grounded, live cross-asset and tech-news synthesis.

**Recipe:**

1. **Connect `market-news-sentiment-mcp` in Claude Desktop or Cursor.** Paste the `/mcp` URL + Bearer token.

2. **Ask one morning prompt.** *'Check SPY, QQQ, NVDA, and BTC-USD quotes, pull today's US Google Trends breakouts, grab 24h AI news, and summarize top Hacker News stories.'*

4–5 tool calls = `~$0.05`–`$0.10` total for a live Bloomberg-style AI morning brief.

### 📊 360° ticker catalyst & retail-sentiment check

When a stock moves +/-8% pre-market, find out why immediately and gauge retail vs. developer reaction.

**Recipe:**

1. **Call `get_stock_crypto_quote_and_fundamentals`.** Check current price vs. 52-week range and analyst `targetMeanPrice`.

2. **Call `search_realtime_news` (`timeframe: "24h"`).** Identify the exact earnings, analyst downgrade, or macro headline.

3. **Call `search_reddit_discussions` + `search_hackernews_sentiment`.** Read community reaction across `r/stocks`, `r/wallstreetbets`, and HN.

Pair with **[SEC EDGAR MCP](https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp)** to inspect the actual `8-K` or `10-Q`.

### 🔎 Developer & SaaS brand perception audit

Before buying or partnering with a developer tool, check real-world engineering and customer sentiment.

**Recipe:**

1. **Run `search_hackernews_sentiment` + `search_reddit_discussions` + `search_realtime_news`.** Compare press releases against candid developer comments on HN and `r/devops` / `r/SaaS`.

Instant vendor diligence right inside Cursor or Windsurf.

### 🤖 Drop-in real-time web/market toolset for LangGraph & OpenAI Agents

Give custom Python/TypeScript AI agents live finance, trends, news, and social search through a single MCP server.

**Recipe:**

1. **Register `https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp`.** Zero API-key sprawl across 5 upstream data providers.

Maintained, rate-hardened, and monitored 24/7 on Apify Standby.

## Want to get other B2B, Social, Financial, or MCP Agent data?

Chain this tool with our other **128 MB / 256 MB zero-proxy Apify Scrapers and Live Streamable-HTTP MCP Servers**:

<table>
<tr>
<td>⚖️ <a href="https://apify.com/church_of_loujess/sec-edgar-companies-house-mcp">SEC EDGAR, UK Companies House & LEI MCP Server</a></td>
<td>🧬 <a href="https://apify.com/church_of_loujess/pharma-fda-clinical-trials-mcp">Pharma, FDA & Clinical Trials MCP Server</a></td>
</tr>
<tr>
<td>🔌 <a href="https://apify.com/church_of_loujess/b2b-lead-churn-substack-mcp">Substack, B2B Churn & Startup Lead MCP Server</a></td>
<td>🎵 <a href="https://apify.com/church_of_loujess/tiktok-intelligence-mcp">TikTok Intelligence MCP Server (6 Live Tools)</a></td>
</tr>
<tr>
<td>💹 <a href="https://apify.com/church_of_loujess/yahoo-finance-scraper">Yahoo Finance Scraper (Full Financials & Options)</a></td>
<td>📈 <a href="https://apify.com/church_of_loujess/google-trends-fast-scraper">Google Trends Scraper (125+ Countries & Regional)</a></td>
</tr>
<tr>
<td>📰 <a href="https://apify.com/church_of_loujess/google-news-scraper-fast">Google News Scraper Fast (Decoded URLs + RAG)</a></td>
<td>💬 <a href="https://apify.com/church_of_loujess/reddit-scraper-fast">Reddit Scraper & B2B Buyer-Intent API</a></td>
</tr>
</table>

## 🔌 Using Yahoo Finance, Trends, News & Reddit MCP Server with the Apify API, SDKs & MCP

Automate **Yahoo Finance, Trends, News & Reddit MCP Server** programmatically from Python, Node.js/TypeScript, cURL, workflow builders (**n8n, Make, Zapier, Clay, Pipedream**), or **Model Context Protocol (`MCP`)** AI clients.

### Python (`apify-client`)

```python
from apify_client import ApifyClient

client = ApifyClient("<YOUR_APIFY_API_TOKEN>")
run = client.actor("church_of_loujess/market-news-sentiment-mcp").call(
    run_input={
    "tool": "get_stock_crypto_quote_and_fundamentals",
    "symbol": "NVDA",
    "geo": "US",
    "maxResults": 10
}
)

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

### Node.js / TypeScript (`apify-client`)

```javascript
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: '<YOUR_APIFY_API_TOKEN>' });
const run = await client.actor('church_of_loujess/market-news-sentiment-mcp').call({
    "tool": "get_stock_crypto_quote_and_fundamentals",
    "symbol": "NVDA",
    "geo": "US",
    "maxResults": 10
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(`Extracted ${items.length} items:`, items);
```

### One-Line Synchronous REST API (`cURL` — ideal for n8n, Make & Clay HTTP Columns)

```bash
curl -X POST "https://api.apify.com/v2/acts/church_of_loujess~market-news-sentiment-mcp/run-sync-get-dataset-items?token=<YOUR_APIFY_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"tool": "get_stock_crypto_quote_and_fundamentals", "symbol": "NVDA", "geo": "US", "maxResults": 10}'
```

### Claude Desktop, Cursor, Windsurf & OpenAI MCP Configuration

```json
{
  "mcpServers": {
    "market-news-sentiment-mcp": {
      "url": "https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp",
      "headers": {
        "Authorization": "Bearer <YOUR_APIFY_API_TOKEN>"
      }
    }
  }
}
```

#### Claude Code CLI one-liner:
```bash
claude mcp add --transport http market-news-sentiment-mcp "https://church-of-loujess--market-news-sentiment-mcp.apify.actor/mcp" --header "Authorization: Bearer <YOUR_APIFY_API_TOKEN>"
```

## ❓ Frequently Asked Questions

### How much does each MCP tool call cost on this server?

Just **`$0.025` on the Apify Free plan** (`40` calls per `$1.00`), dropping to **`$0.018` on Bronze**, **`$0.015` on Silver**, and **`$0.012` on Gold, Platinum & Diamond** (`83` calls per `$1.00`) — and `initialize`, `tools/list`, and `ping` are always **`$0.00` FREE**!

### Do I need Yahoo Finance, NewsAPI, Reddit, or Google API keys?

No! All 5 tools work out-of-the-box with **zero third-party API keys** — only your standard `APIFY_API_TOKEN` is used to call the `/mcp` endpoint.

### Does `get_stock_crypto_quote_and_fundamentals` support crypto, ETFs, and non-US stocks?

Yes — pass any Yahoo Finance symbol such as `BTC-USD`, `SOL-USD`, `SPY`, `QQQ`, `^GSPC`, `EURUSD=X`, `ASML`, `SAP.DE`, or `7203.T`.

### How fresh are `search_realtime_news` and `get_google_trends_breakouts`?

100% live at the moment of the tool call — `search_realtime_news` supports `timeframe: "1h"` for stories published within the past 60 minutes!

### Can I run this Actor from Apify Console without setting up MCP?

Yes — pick any tool in the `tool` input dropdown, fill `symbol` or `query`, and click **Save & Start** to export results to JSON/CSV/Excel.

### Can I combine all 5 `church_of_loujess` MCP servers in Claude Desktop at the same time?

Yes! Adding all 5 Standby `/mcp` URLs gives Claude **26 specialized zero-key tools** spanning Finance/News, SEC/UK/LEI Filings, Pharma/FDA/PubMed, B2B Leads/Churn/Substack, and TikTok Intelligence — with `$0.00` idle or discovery cost.

### Is it legal to extract public data with Yahoo Finance, Trends, News & Reddit MCP Server?

Yahoo Finance, Trends, News & Reddit MCP Server only accesses **publicly available web pages, feeds, and registries** that require no private account login or authentication bypass. Keep in mind that extracted contact fields (such as public business emails, names, or usernames) can still qualify as personal data under frameworks like the [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) or CCPA depending on jurisdiction. Always ensure you have a lawful basis (such as legitimate B2B interest) and consult Apify's guide on [the legality of web scraping](https://blog.apify.com/is-web-scraping-legal/).

### Can I integrate Yahoo Finance, Trends, News & Reddit MCP Server with Clay, n8n, Make, Zapier, or Google Sheets?

Yes. Every run outputs clean, flat-friendly fields alongside nested detail objects and integrates natively with **Clay, n8n, Make, Zapier, Slack, HubSpot, Airtable, Google Sheets, Airbyte, LangChain, and CrewAI** via [Apify Integrations](https://apify.com/integrations). You can also attach [webhooks](https://docs.apify.com/integrations/webhooks) to trigger downstream workflows automatically the instant a run succeeds.

### Can I call Yahoo Finance, Trends, News & Reddit MCP Server programmatically via the Apify API?

Yes. Use the official `apify-client` [Python package](https://apify.com/church_of_loujess/market-news-sentiment-mcp/api/python) or [Node.js NPM package](https://apify.com/church_of_loujess/market-news-sentiment-mcp/api/javascript), or call the synchronous `/run-sync-get-dataset-items` REST endpoint directly. Full specifications are in the [Apify API v2 reference](https://docs.apify.com/api/v2).

### Yahoo Finance, Trends, News & Reddit MCP Server not working or need a custom feature?

We actively maintain and monitor all 26 Actors and MCP Servers in our portfolio. If you encounter an edge case, unexpected output, or want to request a new field, please open a ticket on the Actor's [Issues tab](https://apify.com/church_of_loujess/market-news-sentiment-mcp/issues/open) with your Run ID so we can resolve it rapidly.
