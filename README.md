# DietSpring 🌱

[![DietSpring Demo Video](https://github.com/user-attachments/assets/ace8e72e-3017-4167-895a-1f4c011d771b)](https://www.youtube.com/watch?v=f5BVZJVF8mQ)

_🥗 **DietSpring — Your AI-powered personalized nutrition companion for smarter meal planning, recipe suggestions, and nutritional insights.** Click the thumbnail above to watch the complete demo video of this project on YouTube._

## 📚 Contents

- [✨ Introduction](#-introduction)
- [❓ What Problem Does DietSpring Solve?](#-what-problem-does-dietspring-solve)
- [🌟 Features](#-features)
- [✅ Input Validation](#-input-validation)
- [📂 History](#-history)
- [🛠️ Technologies Used](#️-technologies-used)
- [💻 Running the Project Locally](#-running-the-project-locally)
- [🌐 Live Website](#-live-website)
- [⚠️ Disclaimer](#️-disclaimer)

---

# ✨ Introduction

DietSpring is an **AI-powered personalized nutrition and diet web application** that helps users make healthier food choices based on their **personal profile, dietary preferences, and health goals**.

Powered by **Google Gemini 3.1 Flash Lite**, DietSpring generates **personalized meal plans**, **recipe suggestions**, and **calorie analysis** by using the user's health profile and nutritional requirements.

> 💡 **DietSpring is designed to make healthy eating simple, personalized, and easy to follow.**

---

# ❓ What Problem Does DietSpring Solve?

Many people want to eat healthier but often struggle with questions like:

- 🥗 What should I eat today?
- 🍳 Which recipe matches my diet?
- 🔥 How many calories am I eating?
- ⚖️ Is my meal nutritionally balanced?
- 🎯 Which foods can support my health goal?

**DietSpring addresses these problems by using Artificial Intelligence to generate personalized nutrition recommendations based on each user's health profile, dietary preferences, and food choices.**

---

# 🌟 Features

## 👤 Profile Setup

> **Complete your health profile to unlock all AI-powered features.**

- Secure authentication using **Clerk**.
- Users must complete their health profile before accessing the application's AI-powered features.
- Stores important health information, including:
  - First Name
  - Last Name
  - Age
  - Gender
  - Height
  - Weight
  - Activity Level
  - Allergies
  - Food Preferences

---

## 🍽️ AI Meal Planner

> **Generate a personalized one-day meal plan tailored to your health profile.**

Generate a personalized one-day meal plan using:

### 👤 User Profile

- Name
- Age
- Gender
- Height
- Weight
- Activity Level
- Allergies

### 🎯 User Requirements

- Health Goal
- Diet Preference
- Daily Calorie Target
- Food Preferences

The generated meal plan includes:

- 🍳 Breakfast
- 🍎 Morning Snack
- 🍛 Lunch
- 🥜 Evening Snack
- 🍽️ Dinner
- 🔥 Estimated Calories
- 💪 Estimated Protein
- 🌾 Estimated Carbohydrates
- 🥑 Estimated Fat
- 📊 Total Daily Nutrition Summary

**Additional features**

- Automatically estimates a daily calorie target if the user enters **"No Idea"**.
- Respects the user's allergies and food preferences.
- Generates practical and balanced meals.
- Considers the user's health goal and diet preference.
- Presents the meal plan using headings and bullet points for better readability.

---

## 🍳 AI Recipe Suggestion

> **Receive personalized recipes that match your dietary needs and cooking preferences.**

Generate a personalized recipe using:

### 👤 User Profile

- Name
- Age
- Gender
- Height
- Weight
- Activity Level
- Allergies

### 🎯 User Requirements

- Meal Type
- Time Available for Cooking
- Daily Calorie Target
- Ingredients to Include
- Ingredients to Exclude

Each generated recipe includes:

- 🍽️ Recipe Name
- ⏱️ Estimated Preparation Time
- 👨‍🍳 Estimated Cooking Time
- 🔥 Estimated Total Calories
- 🥦 Ingredients
- 📖 Step-by-step Cooking Instructions
- 💪 Estimated Protein
- 🌾 Estimated Carbohydrates
- 🥑 Estimated Fat
- 💡 Healthy Tips or Alternatives

**Additional features**

- Automatically estimates a calorie target if the user enters **"No Idea"**.
- Respects the user's allergies.
- Takes requested ingredients into consideration.
- Avoids ingredients specified by the user.
- Generates recipes based on the selected meal type and available cooking time.
- Presents recipes using headings and bullet points without tables.

---

## 🔥 AI Calorie Tracker

> **Analyze your meals and receive personalized nutritional feedback.**

Analyze a meal using:

### 👤 User Profile

- Name
- Age
- Gender
- Height
- Weight
- Activity Level
- Allergies

### 🍽️ User Meal Information

- Meal Type
- Foods Eaten
- Portion Size of Each Food
- Approximate Total Calories
- Approximate Total Macronutrients

The AI provides:

- 🔥 Estimated Total Calories
- 💪 Estimated Protein
- 🌾 Estimated Carbohydrates
- 🥑 Estimated Fat
- 📊 Nutritional Analysis
- ✅ Healthy Recommendations
- 📈 Areas for Improvement
- 🎯 Personalized Suggestions

**Additional features**

- Estimates calories if the user enters **"No Idea"**.
- Estimates macronutrients if the user enters **"No Idea"**.
- Uses the user's health profile to personalize the nutritional analysis.
- Provides practical suggestions for improving future meals.

---

# ✅ Input Validation

> **DietSpring validates user inputs on the server before sending them to the AI model.**

Input validation helps prevent unnecessarily large or invalid values from being included in AI prompts and ensures that specific fields follow the expected format.

## 👤 Profile Validation

### Allergies

- Allows a maximum of **5 allergies**.
- Each allergy can contain a maximum of **25 characters**.
- Empty values are removed after splitting comma-separated input.
- **"No allergies"** is treated as an exclusive option.
  - If **"No allergies"** is entered, no other allergy can be entered.

- The **"No allergies"** check is case-insensitive.

### Food Preferences

- Allows a maximum of **5 food preferences**.
- Each food preference can contain a maximum of **25 characters**.
- Empty values are removed after splitting comma-separated input.
- **"No preferences"** is treated as an exclusive option.
  - If **"No preferences"** is entered, no other food preference can be entered.

- The **"No preferences"** check is case-insensitive.

---

## 🍽️ Meal Planner Validation

### Daily Calorie Target

- Accepts a numeric calorie target.
- Accepts **"No Idea"** when the user does not know their calorie target.
- Numeric validation allows digits only.
- The **"No Idea"** check is case-insensitive.
- Calorie targets must be between **500 and 10,000 calories**.
- The calorie target cannot be longer than **15 characters**.

### Food Preferences

- Allows a maximum of **5 food preferences**.
- Each food preference can contain a maximum of **25 characters**.
- **"No preferences"** cannot be combined with other food preferences.
- The **"No preferences"** check is case-insensitive.

---

## 🍳 Recipe Suggestion Validation

### Daily Calorie Target

- Accepts a numeric calorie target.
- Accepts **"No Idea"** when the user does not know their calorie target.
- Numeric validation allows digits only.
- The **"No Idea"** check is case-insensitive.
- Calorie targets must be between **500 and 10,000 calories**.

### Ingredients to Include

- Allows a maximum of **5 ingredients**.
- Each ingredient can contain a maximum of **25 characters**.
- Empty values are removed from comma-separated input.
- **"No ingredients"** is treated as an exclusive option.
  - If **"No ingredients"** is entered, no other ingredient can be entered.

- The **"No ingredients"** check is case-insensitive.

### Ingredients to Exclude

- Allows a maximum of **5 ingredients**.
- Each ingredient can contain a maximum of **25 characters**.
- Empty values are removed from comma-separated input.
- **"No ingredients"** is treated as an exclusive option.
  - If **"No ingredients"** is entered, no other ingredient can be entered.

- The **"No ingredients"** check is case-insensitive.

---

## 🔥 Calorie Tracker Validation

### Foods Eaten

- Allows a maximum of **8 foods**.
- Each food name can contain a maximum of **25 characters**.
- Empty values are removed from comma-separated input.

### Portion Sizes

- Allows portion sizes for a maximum of **8 foods**.
- Each portion size can contain a maximum of **25 characters**.
- Empty values are removed from comma-separated input.

### Approximate Total Calories

- Accepts a numeric calorie value.
- Accepts **"No Idea"** when the user does not know the total calories.
- Numeric validation allows digits only.
- The **"No Idea"** check is case-insensitive.
- The value cannot be longer than **15 characters**.

### Approximate Total Macronutrients

- Accepts **"No Idea"** when the user does not know their approximate macronutrients.
- The value cannot be longer than **30 characters**.
- Text-based macronutrient information is supported, such as protein, carbohydrates, and fat values.

---

## 🛡️ Server-Side Validation

DietSpring performs these validations inside **Next.js Server Actions** before the submitted data is used to construct the AI prompt.

This ensures that the application validates important input constraints on the server instead of relying only on frontend form restrictions.

---

# 📂 History

> **Never lose track of your previous AI-generated nutrition records.**

Users can view their previous:

- 🍽️ Meal Plans
- 🍳 Recipe Suggestions
- 🔥 Calorie Tracking Records

Each history entry stores information such as:

| 📁 Feature           | 📌 Saved Information                                     |
| :------------------- | :------------------------------------------------------- |
| 🍽️ Meal Planner      | User Inputs, AI-generated Response                       |
| 🍳 Recipe Suggestion | User Inputs, AI-generated Response                       |
| 🔥 Calorie Tracker   | User Inputs, AI-generated Response, Creation Date & Time |

This allows users to revisit previously generated nutrition recommendations and analyses.

---

# 🛠️ Technologies Used

| Category                       | Technologies                                   |
| :----------------------------- | :--------------------------------------------- |
| 🎨 **Frontend**                | Next.js 16, React 19, Tailwind CSS, ShadCN UI  |
| ⚙️ **Backend**                 | Next.js Server Actions, Prisma ORM             |
| 🔐 **Authentication**          | Clerk Authentication                           |
| 🗄️ **Database**                | Neon PostgreSQL                                |
| 🤖 **Artificial Intelligence** | Google Gemini 3.1 Flash Lite, Google GenAI SDK |
| ☁️ **Deployment**              | Vercel                                         |

---

# 💻 Running the Project Locally

> **Follow these steps to run DietSpring on your local machine.**

## 1. Clone the Repository

Clone the DietSpring repository to your local machine:

```bash
git clone https://github.com/somenath203/DietSpring.git
```

Then navigate into the project directory:

```bash
cd DietSpring
```

---

## 2. Configure Environment Variables

Create a `.env` file in the root directory of the project and configure all the required environment variables according to the provided `.env.example` file.

The following environment variables are required:

```env
NEON_DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=

NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=

GOOGLE_GEMINI_API_KEY=
```

### Environment Variables

| Variable                                          | Purpose                                              |
| :------------------------------------------------ | :--------------------------------------------------- |
| `NEON_DATABASE_URL`                               | Connection URL for the Neon PostgreSQL database      |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`               | Clerk publishable key used by the application        |
| `CLERK_SECRET_KEY`                                | Clerk secret key used for server-side authentication |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | Fallback URL after a successful sign-in              |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | Fallback URL after a successful sign-up              |
| `GOOGLE_GEMINI_API_KEY`                           | API key used to access Google Gemini                 |

> ⚠️ **Do not commit your `.env` file or expose your secret API keys publicly.**

---

## 3. Install Dependencies

Install all project dependencies using pnpm:

```bash
pnpm install
```

---

## 4. Start the Development Server

Start the Next.js development server:

```bash
pnpm dev
```

Once the development server starts, open the local URL shown in your terminal to access DietSpring in your browser.

---

# 🌐 Live Website

🚀 **Try DietSpring here:**

🔗 **https://diet-spring-prod.vercel.app/**

---

# ⚠️ Disclaimer

> **Important**

DietSpring uses **Google Gemini 3.1 Flash Lite** to generate AI-powered meal plans, recipe suggestions, and calorie analysis.

The generated responses are intended for **informational purposes only** and may not always be completely accurate. They should **not** be considered professional medical, nutritional, or dietary advice.

While DietSpring provides the prompts and user inputs to the AI model, the generated content is produced by **Google Gemini**. The creator of this project has **no control** over the responses generated by the AI model and cannot guarantee the accuracy, completeness, or suitability of every response.

**Always consult a qualified healthcare professional or registered dietitian before making important health or nutrition decisions.**
