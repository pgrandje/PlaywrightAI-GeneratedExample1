# Should I customize Playwright MCP agents?

- Date: 2026-10-02
- Session ID: 57a4a02a-81ec-4243-a414-155e825440f1
- Messages exported: 22

Export contains user and assistant message text. Tool calls are listed by name; tool outputs and attachments are not included in this Markdown copy.

## Copilot (2026-10-02 23:35:39 UTC)

I’ll trace the exact `planner_save_plan` tool name against this workspace and the available Playwright MCP surface, so I can distinguish project files from the tool provider’s implementation.

Tool calls: `grep_search`, `file_search`, `list_dir`

## Copilot (2026-10-02 23:35:43 UTC)

The project references the tool from a local agent profile, but I haven’t found an implementation in the repo yet. I’m checking that profile’s configuration and the workspace MCP settings to identify whether it points to a local server or an editor-provided integration.

Tool calls: `read_file`, `list_dir`, `grep_search`

## Copilot (2026-10-02 23:35:45 UTC)

_(No text in this message.)_

Tool calls: `read_file`

## Copilot (2026-10-02 23:35:50 UTC)

_(No text in this message.)_

Tool calls: `read_file`, `read_file`, `file_search`

## Copilot (2026-10-02 23:35:59 UTC)

Found the key distinction: the agent file names the permitted tool, while its `mcp-servers` block launches `playwright run-test-mcp-server`; the workspace also declares that server in `.vscode/mcp.json`. I’m checking the local npm install location so I can point to the concrete package path too.

Tool calls: `list_dir`, `file_search`

## Copilot (2026-10-02 23:36:01 UTC)

_(No text in this message.)_

Tool calls: `list_dir`

## Copilot (2026-10-02 23:36:02 UTC)

_(No text in this message.)_

Tool calls: `list_dir`

## Copilot (2026-10-02 23:36:04 UTC)

_(No text in this message.)_

Tool calls: `list_dir`

## Copilot (2026-10-02 23:36:07 UTC)

_(No text in this message.)_

Tool calls: `read_file`

## Copilot (2026-10-02 23:36:11 UTC)

`playwright-test/planner_save_plan` is an MCP tool, not a standalone file in the project. The agent profile lists it as an allowed tool and starts the server with `npx playwright run-test-mcp-server` in [.github/agents/playwright-test-planner.agent.md](.github/agents/playwright-test-planner.agent.md). The workspace server is also declared in [.vscode/mcp.json](.vscode/mcp.json).

In this checkout, the implementation is in the installed Playwright package at [node_modules/playwright/lib/mcp/test/plannerTools.js](node_modules/playwright/lib/mcp/test/plannerTools.js), where it is registered as `planner_save_plan`. The tool writes the generated plan to the relative `fileName` path supplied to it. `node_modules` is installed package code, so it can be recreated by installing dependencies.

## User (2026-10-02 23:45:28 UTC)

Ok, but where is plannerTools.js stored?  Is it on some server used by the LLM or is it in node_modules, or somewhere else?

## Copilot (2026-10-02 23:45:34 UTC)

In this workspace, it’s stored locally at `node_modules/playwright/lib/mcp/test/plannerTools.js`.

The planner agent launches `npx playwright run-test-mcp-server`, so the MCP server runs as a local process in your environment. The LLM receives the tool’s name and schema and can invoke it through MCP; the tool implementation itself is not stored on the LLM’s server. In this checkout, the implementation is in the local `node_modules` package.

## User (2026-10-02 23:48:29 UTC)

Right, that's what I was asking.  It's under node_modules.   And what did you mean by "it's registered"?  Where is this?  In some sort of index file somewhere?

## Copilot (2026-10-02 23:48:33 UTC)

I used “registered” loosely there. I’ll trace where `saveTestPlan` is imported and added to the server’s tool list, so I can point you to the actual wiring file rather than imply `plannerTools.js` is an index.

Tool calls: `grep_search`, `read_file`

## Copilot (2026-10-02 23:48:35 UTC)

That search only surfaced the definition because package files are ignored by the workspace search index. I’m doing a targeted search that includes ignored files; the distinction we’re resolving is “tool definition/export” versus “server’s advertised tool registry.”

Tool calls: `grep_search`

## Copilot (2026-10-02 23:48:37 UTC)

_(No text in this message.)_

Tool calls: `read_file`

## Copilot (2026-10-02 23:48:41 UTC)

Yes, there’s a registry in the package’s MCP backend: [testBackend.js](node_modules/playwright/lib/mcp/test/testBackend.js). It imports `plannerTools.js` and includes `plannerTools.saveTestPlan` in the `testServerBackendTools` array. The server uses that array both to advertise available tools and to find a handler when a tool is called.

The tool itself is defined and exported from [plannerTools.js](node_modules/playwright/lib/mcp/test/plannerTools.js). So by “registered,” I meant “added to the backend’s tool list,” not a global index file.

## User (2026-10-02 23:49:25 UTC)

ok, got it.

## Copilot (2026-10-02 23:49:27 UTC)

👍

## User (2026-10-04 00:54:30 UTC)

what is the 'code' command?  Is that part of vscode?

## Copilot (2026-10-04 00:54:33 UTC)

Yes. `code` is VS Code’s command-line launcher. It lets you open files and folders in VS Code or run commands from a terminal, for example `code .` opens the current folder.

On macOS, it’s usually added to your shell’s `PATH` by VS Code’s **Shell Command: Install 'code' command in PATH** action. `code -v` prints the VS Code version and commit information.

## User (2026-10-04 01:05:10 UTC)

when I use the playwright-mcp agents should I customize the agent .md files?  I saw a youtube video where he made these much more specific.  Is that necessary or do most people use the default at first?
