<div align="center">


# MyBalance

**Your Finance, Your Data**

A modern personal finance tracker that stores all your data in your own Google Sheet.
Privacy-first, open source, and beautifully simple.

[View Landing Page](https://fabioaltea.github.io/my-balance-landing) · [Report Bug](https://github.com/fabioaltea/my-balance-landing/issues)

</div>

---

## Why MyBalance?

MyBalance is for those who truly want to understand where their money goes.

If you track your expenses in a spreadsheet today, MyBalance was built exactly for you. It's the power of a spreadsheet combined with the simplicity of a mobile app: no black magic, no hidden data, just real control over your finances.

### Who is it for?

- **Data lovers** - You want to see every number, without filters or limitations
- **Spreadsheet users** - You use (or love) spreadsheets but want a more convenient interface
- **Privacy conscious** - You value privacy and ownership of your data
- **Control freaks** - You want total control, not "pretty" but useless charts

### Where MyBalance comes from

It all started from a frustration. We were tired of finance apps that:

- Lock your data in proprietary formats
- Show only superficial insights
- Charge subscriptions for basic features

So we made a radical choice: **your data stays yours**.

With MyBalance everything lives in your Google Sheet: always accessible, exportable, editable. No lock-in, no surprises.

---

## Features

### Multi-Account Tracking
Manage your savings, checking, and investment accounts in one unified interface without clutter.

### Privacy First
Your data never touches our servers. It connects directly from your device to your personal Google Sheet.

### Smart Automation
Use iOS Shortcuts to automate entries. Tap once to log your morning coffee or monthly subscriptions.

### Track Everything at a Glance
See your total balance, monthly savings, income vs expenses - all in one beautiful dashboard. Filter by account, switch between periods, and stay on top of your finances effortlessly.

- Real-time balance updates
- Income vs Expense breakdown
- Recurring transaction tracking

### Visualize Your Spending
Beautiful, interactive charts show where your money goes. Track monthly trends, compare income vs expenses, and see category breakdowns over time.

- Monthly spending trends
- Category-based insights
- Predictive balance forecasting

### Split Transactions Made Easy
Pay for dinner with friends? Split a single transaction across multiple accounts or categories effortlessly. Track complex expenses without the headache.

- Multi-account movements
- Flexible categorization
- Optional location tagging

---

## How It Works

1. **Sign in with Google** - Authenticate with your Google account. MyBalance automatically creates a dedicated Google Sheet in your Drive to store all your financial data. You own it completely.

2. **Set Up Your Accounts** - Add your bank accounts, cash, credit cards, and investment accounts. Customize each with a name and color. Track balances across all your accounts in one place.

3. **Track Your Transactions** - Add income and expenses with a single tap. Categorize transactions, split them across accounts, and optionally add location. Everything syncs instantly to your Google Sheet.

4. **Set Up Recurring Transactions** - Define recurring expenses like rent, subscriptions, or salary. MyBalance tracks expected vs actual occurrences and notifies you of missing entries with status badges.

5. **Visualize Your Finances** - View income vs expense charts, category breakdowns, and monthly trends. See your financial summary at a glance with the dashboard's interactive cards.

6. **Forecast Your Balance** - MyBalance analyzes your spending patterns and recurring transactions to predict your end-of-month balance. Stay ahead of your finances with intelligent forecasting.

---

## Tech Stack

### Mobile App
- **React Native + Expo** - Native iOS and Android from a single codebase
- **TypeScript** - Type-safe code for reliability
- **Reanimated** - Smooth 60fps animations and gestures
- **Context + Hooks** - Lightweight state management

### Backend API
- **Node.js + Express** - Fast, lightweight REST API
- **TypeScript** - End-to-end type safety
- **Vercel** - Serverless deployment, zero downtime
- **PostgreSQL** - Metadata and auth storage only

### Data Storage
- **Google Sheets API** - Your financial data stays in your Drive
- **OAuth 2.0** - Secure, token-based authentication
- **No Cloud Storage** - We never see or store your transactions
- **Export Anytime** - Your spreadsheet is always accessible

### Security & Auth
- **WebAuthn** - Passwordless biometric login
- **Passkey Support** - Face ID, Touch ID, or device PIN
- **Token Refresh** - Seamless reauthentication
- **Encrypted Tokens** - OAuth tokens encrypted at rest

### Automation
- **iOS Shortcuts** - One-tap transaction logging
- **API Webhooks** - Integrate with other services
- **Recurring Transactions** - Automatic entry reminders
- **Push Notifications** - Never miss a payment

---

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Mobile App    │────▶│   Backend API   │────▶│   Your Data     │
│  React Native   │     │ Express + Vercel│     │  Google Sheets  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

The app communicates with our backend, which securely accesses your Google Sheet using encrypted tokens. Your financial data never touches our servers - it goes directly to your personal Google Drive.

### What We Store (PostgreSQL)
- Your email and profile info
- Reference to your spreadsheet ID
- Encrypted Google access tokens
- Session data for multi-device
- Push notification tokens

### What You Own (Google Sheets)
- All your transactions
- All your accounts
- All your categories
- Complete financial history
- Full export anytime

---

## Run Locally

**Prerequisites:** Node.js

1. Clone the repository:
   ```bash
   git clone https://github.com/fabioaltea/my-balance-landing.git
   cd my-balance-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

---

## Coming Soon

The mobile app source code (Expo/React Native) and the backend API will be available soon. Stay tuned!

---

## License

MIT License - Free to use, modify, and contribute.

---

## Contact

**Fabio Altea** - [fabio.f2001@gmail.com](mailto:fabio.f2001@gmail.com)

---

<div align="center">

Made with ❤️ by Fabio Altea

---

<sub>
<b>Disclaimer:</b> This landing page was originally scaffolded with Google AI Studio.
</sub>

</div>
