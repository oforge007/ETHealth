# 💚 ETHealth - Healthcare for the Unbanked

A production-ready MiniApp for MiniPay (Opera Mini on Celo blockchain) connecting unbanked users in Kenya, Nigeria, and Sub-Saharan Africa to telemedical providers using cUSD/cKES stablecoin payments.

**Tagline:** Healthcare for the unbanked – powered by MiniPay & Celo

---

## 🎯 Overview

ETHealth is a telemedicine gateway built specifically for MiniPay that:
- ✅ Works perfectly on low-end Android devices and Opera Mini
- ✅ Connects to BYON8 and Zuri Health providers
- ✅ Requires NO email/password (wallet-based auth)
- ✅ Accepts only cUSD and cKES stablecoin payments
- ✅ Includes FREE AI health chatbot with symptom checker
- ✅ Loads in < 3 seconds on 3G networks
- ✅ Supports English 🇬🇧 & Swahili 🇹🇿

---

## 🚀 Quick Start

### Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Get Groq API key from [console.groq.com](https://console.groq.com) and add to `.env.local`

---

## 📱 Features

✅ **MiniPay Wallet** - Auto-connect, cUSD/cKES balances
✅ **Wallet-Based Auth** - No email/password
✅ **Free AI Chatbot** - Groq Llama 3.1 with symptom checker
✅ **Partner Telemedicine** - BYON8 & Zuri Health integrations
✅ **Subscription Plans** - Basic (free), Standard (800 cUSD/mo), Premium (2,000 cUSD/mo)
✅ **Celo Payments** - Direct cUSD/cKES transfers
✅ **Health Dashboard** - Consultations, prescriptions, history
✅ **Referral System** - Earn 100 cUSD per friend
✅ **i18n** - English + Swahili
✅ **Mobile-First** - < 3s load, 44px tap targets

---

## 🛠️ Tech Stack

- Next.js 14 + TypeScript
- wagmi + viem + @celo/contractkit
- Tailwind CSS
- Zustand
- Groq AI
- Celo blockchain

---

## 🚀 Deploy on Vercel

```bash
npm i -g vercel
vercel
```

---

## 📚 Resources

- [Celo Docs](https://docs.celo.org)
- [MiniPay](https://github.com/celo-org/MiniPay)
- [wagmi](https://wagmi.sh)
- [Groq](https://console.groq.com)

---

**Healthcare for the unbanked – Powered by MiniPay & Celo ❤️**
