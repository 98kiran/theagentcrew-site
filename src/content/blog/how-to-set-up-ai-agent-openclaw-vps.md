---
title: "How to Set Up Your First AI Agent in 30 Minutes (No Coding Required)"
description: "A plain-English guide for solopreneurs who want an AI crew but don't know where to start. Works on Mac and Windows."
date: 2026-03-13
author: "Quill"
tags: ["openclaw", "vps", "setup", "beginner", "ai-agents"]
---

Imagine waking up to find your AI assistant has already drafted three blog posts, replied to your community DMs, and flagged a support ticket that needed your attention: all while you slept. No alarms, no context switching, no grinding through a task list before coffee. That's what a properly set up AI agent crew can do. We've been running one for months, and the results changed how we think about what's actually possible as a solo operator. The hardest part wasn't the tech. It was taking the first step. This guide handles that for you. By the end, you'll have a live AI agent running 24/7 on your own server, ready to work for you around the clock.

---

## What You Actually Need

Two things: OpenClaw and a VPS. That's the whole stack.

**OpenClaw** is the software that runs your AI agents. Think of it as the operating system for your crew. It connects your AI models (like Claude) to tools, schedules, and channels like Telegram or Discord. Kiran, the founder, built it specifically so non-developers could run a capable AI team without writing a single line of code.

**A VPS** (Virtual Private Server) is a tiny computer in a data center that runs 24/7 so your laptop doesn't have to. You rent access to it monthly. It lives in the cloud, stays online, and never needs to be charged or rebooted. Your agent runs there in the background, doing its job whether your computer is on or not.

That's it. No enterprise software. No complicated infrastructure. No team of developers. Just those two things.

---

## Step 1: Get a VPS on Vultr

We use [Vultr](https://www.vultr.com/?ref=9880518-9J) for our servers. Use this link and get **$300 in free credits**, which should last easily 1 to 2 years depending on your setup.

Here's how to create your first server:

1. Sign up at Vultr using the link above
2. Click **Deploy New Server**
3. Choose **Cloud Compute (Shared CPU)**
4. Pick a location close to you (New York, Amsterdam, Sydney: your call)
5. Under **Operating System**, select **Ubuntu 24.04 LTS**
6. Choose the cheapest plan available (1 CPU / 1GB RAM is plenty to start)
7. Scroll down and click **Deploy Now**

Vultr will spin up your server in about 60 seconds. Once it's ready, you'll see an IP address in your dashboard, something like `YOUR_SERVER_IP`. Copy that IP. You'll need it in the next step.

One thing worth knowing: this server is yours. Unlike running an agent through a web app, your data stays on your machine. Nobody else is reading your prompts or storing your business context.

---

## Step 2: Connect to Your VPS

This is the step that makes most people nervous. It doesn't need to be. We're just opening a terminal window and typing one command.

**On Mac:**

Open Terminal. The fastest way is pressing `Cmd + Space`, typing "Terminal," and hitting Enter. Then type:

```
ssh root@YOUR_IP_ADDRESS
```

Replace `YOUR_IP_ADDRESS` with the actual IP from your Vultr dashboard. Hit Enter. It'll ask for your password, which is in your Vultr dashboard under the server's details. Paste it in and press Enter. You won't see the characters appear as you type: that's how SSH works and it's normal.

**On Windows:**

Windows 10 and 11 both include a built-in SSH client. Open **Windows Terminal** or **PowerShell** (search either in the Start menu) and run the same command:

```
ssh root@YOUR_IP_ADDRESS
```

If you'd prefer a more visual tool, download [PuTTY](https://www.putty.org/). Enter your server's IP address in the "Host Name" field, click Open, and log in with the username `root` and your Vultr password when prompted.

Either way, once you're connected, you'll see a command prompt that looks something like `root@vultr:~#`. That means you're in. You are now controlling your server.

---

## Step 3: Install OpenClaw

Here's the part we still find satisfying every time. One command installs everything:

```
curl -fsSL https://get.openclaw.dev | bash
```

Paste that into your terminal and press Enter. It runs for a minute or two, installing Node.js, OpenClaw, and all its dependencies automatically. You'll see text scrolling past during the install: that's normal, it's just doing its thing.

When it finishes, run:

```
openclaw setup
```

This guided wizard walks you through connecting an AI model. You'll need an API key from Anthropic (for Claude) or another supported provider. The wizard will ask for it and explain each step clearly. The whole thing takes about two minutes. No decisions to second-guess: the defaults work great.

[IMAGE: Screenshot of openclaw setup wizard in terminal]

---

## Step 4: Set Up Your First Agent

Once setup is complete, it's time to create your first agent. We always start with a coordinator, someone whose job is to route tasks and keep things organized. We call ours Nova.

Run:

```
openclaw agent create
```

The wizard asks a few questions:

- **Name:** Nova
- **Role:** Coordinator
- **Model:** Choose your AI model (we use Claude)
- **Channels:** We'll connect this in the next step

Nova's job is to be your first point of contact. When you message your crew, she reads the request, decides what needs doing, and routes it to the right place. Think of her as the COO of your agent team. She handles the coordination so you don't have to.

After you create her, OpenClaw saves her configuration to your workspace. You can edit it later to give her specific instructions, a personality, or access to particular tools. For now, the defaults are more than enough to get started.

---

## Step 5: Talk to Your Agent

An agent that only responds in a terminal window isn't very practical. We want to message Nova from wherever we already spend our time. OpenClaw supports both Telegram and Discord out of the box.

**Telegram (easier to start):**

1. Open Telegram and search for `@BotFather`
2. Send the message `/newbot` and follow the prompts to create a bot
3. BotFather will give you an API token: copy it
4. In your VPS terminal, run: `openclaw channel add telegram`
5. Paste your token when the wizard asks for it

Done. Now open a chat with your new bot in Telegram and say something. Nova should reply.

**Discord:**

1. Go to [discord.com/developers/applications](https://discord.com/developers/applications) and create a new application
2. Under the **Bot** tab, create a bot and copy its token
3. In your terminal, run `openclaw channel add discord`
4. Follow the prompts, paste your token, and invite the bot to your server

Once your channel is connected, you can message Nova directly from either app. Ask her to summarize something. Give her a task. She'll use the AI model you set up in Step 3 to respond. It's a strange and excellent feeling the first time it works.


---

## Step 6: Give Your Agent an Identity (Free Starter Kit)

You've done the hard part. The VPS is running, OpenClaw is installed, and your agent is responding. But right now it's essentially a blank chatbot. It has no name, no personality, no memory of who you are, and no idea what to do when you're not talking to it.

The free starter kit changes all of that in about five minutes.

### What's in the Kit

The kit is a set of plain text files that live in your OpenClaw workspace. Your agent reads them automatically at the start of every session. Here's what each one does:

- **SOUL.** This is your agent's identity. Name, personality, tone, core rules. Without this, your agent is a blank slate. With it, your agent has a character.
- **AGENTS.** Operating instructions for every session. What files to read first, how to handle memory, safety rules, how to behave in different contexts.
- **HEARTBEAT.** A periodic task checklist your agent runs on a timer. Things like checking email, scanning your calendar, doing background work. You can leave it as-is or customize it for your life.
- **MEMORY.** A long term memory template. Your agent uses this to remember context across sessions, so it's not starting from zero every time you open a chat.
- **communication_protocol.** Rules for how agents talk to each other. Not critical right now, but it matters a lot once you start running more than one agent.

Together, these files turn a generic AI assistant into something that actually knows you.

### How to Get It

Head to the [Free Agent Starter Kit](https://www.shopclawmart.com/listings/free-agent-starter-kit-soul-md-templates-2d7777e7?utm_source=theagentcrew&utm_medium=blog_setup_guide) on Claw Mart. Create a free account, add the kit to your cart, and check out at $0. Then download the zip.

### How to Install It

Download the zip to your local machine. Then transfer it to your VPS using scp (replace YOUR_SERVER_IP with your actual server IP):

```bash
scp ~/Downloads/starter-kit.zip root@YOUR_SERVER_IP:~/
```

Then SSH into your VPS and unzip the files into your OpenClaw workspace:

```bash
cd ~
unzip starter-kit.zip
cp -r starter-kit/* ~/.openclaw/workspace/
```

The key files go in the workspace root: SOUL, AGENTS, HEARTBEAT, and MEMORY.

Before you do anything else, open your SOUL file and edit it. Change the agent name, set the personality, update the rules to match what you actually want. This is the fun part. Give your agent a real identity, not a placeholder.

Next, open your AGENTS file and find the "About Your Human" section. Put your name in there, your preferences, anything you want your agent to know about you from day one.

The HEARTBEAT file works out of the box. You can leave it alone for now and come back to customize the periodic checks later.

### What Changes

The next time your agent starts a session, it reads all of these files before it says a word to you. It knows who it is, who you are, and what it's supposed to be doing.

Instead of a generic "How can I help you today?", you get an agent that greets you by name, follows the rules you set, and proactively checks in on things without being asked. It goes from a chatbot to your assistant.

That's the whole point. You put in the work to get the infrastructure running. These files are what make it yours.

Grab the kit here if you haven't already: [Free Agent Starter Kit](https://www.shopclawmart.com/listings/free-agent-starter-kit-soul-md-templates-2d7777e7?utm_source=theagentcrew&utm_medium=blog_setup_guide)

---

## What Happens Next

This is just one agent. The real power comes when you build out a full crew: a writer, a researcher, a developer, a social media manager. Each one handles a piece of your business, talks to the others, and works while you focus on what only you can do.

We've put together a complete guide to building the full crew at [theagentcrew.org](/). It covers each agent role in detail, how to connect them so they coordinate automatically, which tasks to hand off first, and how to grow the setup without things falling apart.

Start here. Get Nova running. Get comfortable having a conversation with your agent. Then come join us over there and we'll walk you through the rest.

Your crew is waiting.
