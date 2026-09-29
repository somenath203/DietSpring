# DietSpring 🌱

[![DietSpring Demo Video](https://github.com/user-attachments/assets/ace8e72e-3017-4167-895a-1f4c011d771b)](https://www.youtube.com/watch?v=f5BVZJVF8mQ)

> **DietSpring** is an AI-powered personalized nutrition and diet application that uses Google Gemini 3.1 Flash-Lite to generate personalized meal plans, recipe suggestions, and meal-based calorie and nutritional analysis.

**Click the image above to watch the DietSpring demo video.** 🎥

---

## Table of Contents

- [Introduction](#introduction)
- [What Problem Does DietSpring Solve?](#what-problem-does-dietspring-solve)
- [Features](#features)
  - [1. Profile Setup](#1-profile-setup)
  - [2. Meal Planner](#2-meal-planner)
  - [3. Recipe Suggestion](#3-recipe-suggestion)
  - [4. Calorie Tracker](#4-calorie-tracker)
- [Input Validation](#input-validation)
- [History](#history)
- [Technologies Used](#technologies-used)
- [Run DietSpring Locally](#run-dietspring-locally)
- [Live Website](#live-website)
- [Disclaimer](#disclaimer)

---

## Introduction

DietSpring is an AI-powered personalized nutrition and diet application designed to help users make more informed food and meal decisions.

After completing their health profile, users can use DietSpring to:

- Generate personalized one-day meal plans.
- Get recipe suggestions based on their requirements.
- Analyze the approximate calories and macronutrients of a meal.
- Get meal suggestions based on their health goals and dietary preferences.

DietSpring uses **Google Gemini 3.1 Flash-Lite** to generate the AI-powered responses.

---

## What Problem Does DietSpring Solve?

Planning meals and understanding nutritional information can sometimes be difficult.

Users may have questions such as:

- What should I eat today?
- What recipe can I prepare according to my dietary preferences?
- Approximately how many calories and macronutrients does my meal contain?
- What can I improve about my current meal?
- What types of meals may support my health goal?
- How can I plan balanced meals according to my requirements?

DietSpring provides AI-generated suggestions based on the information provided by the user.

---

## Features

### 1. Profile Setup

Users must complete their health profile before using the main DietSpring features.

The profile contains:

- First Name
- Last Name
- Age
- Gender
- Height
- Weight
- Activity Level
- Allergies

The profile information is used when generating personalized meal plans, recipes, and nutritional analysis.

Authentication and user management are handled using **Clerk**.

---

### 2. Meal Planner

DietSpring can generate a **personalized one-day meal plan** based on the user's profile and selected requirements.

#### User Inputs

Users provide:

- Health Goal
- Diet Preference
- Daily Calorie Target
- Personal Food Preferences

The user's profile information, including allergies, is also considered.

#### Generated Meal Plan

The AI generates:

- Breakfast
- Morning Snack
- Lunch
- Evening Snack
- Dinner

For each meal, the generated response includes:

- Meal name
- Food items
- Estimated calories
- Estimated protein
- Estimated carbohydrates
- Estimated fat

The response also includes the estimated total nutritional values for the entire day.

#### Additional Behavior

- If the calorie target is set to **"No Idea"**, the AI is instructed to estimate an appropriate daily calorie target.
- The AI is instructed to respect the user's allergies.
- Personal food preferences are considered when generating the plan.
- The selected health goal is considered.
- The selected diet preference is followed.
- The generated meal plan is designed to be practical and balanced.
- The response is formatted using headings and bullet points rather than tables.

---

### 3. Recipe Suggestion

DietSpring can generate a personalized recipe based on the user's requirements.

#### User Inputs

Users provide:

- Meal Type
- Cooking Time
- Daily Calorie Target
- Ingredients to Include
- Ingredients to Exclude

The user's profile and allergies are also considered.

#### Generated Recipe

The AI-generated recipe contains:

- Recipe Name
- Estimated Preparation Time
- Estimated Cooking Time
- Estimated Total Calories
- Ingredients
- Step-by-step Cooking Instructions
- Estimated Protein
- Estimated Carbohydrates
- Estimated Fat
- Tips or Healthy Alternatives

#### Additional Behavior

- If the calorie target is set to **"No Idea"**, the AI is instructed to estimate an appropriate calorie target.
- The AI is instructed to respect the user's allergies.
- Requested ingredients are considered whenever possible.
- The AI is instructed not to use excluded ingredients.
- The selected meal type is considered.
- The requested cooking time is considered.
- The response is formatted using headings and bullet points rather than tables.

---

### 4. Calorie Tracker

DietSpring can analyze a meal based on the food consumed by the user.

#### User Inputs

Users provide:

- Meal Type
- Food Items Taken
- Portion Size of Each Food
- Approximate Total Calories
- Approximate Total Macronutrients

The user's profile and allergies are also considered.

#### Generated Analysis

The AI-generated response contains:

- Estimated Total Calories
- Estimated Protein
- Estimated Carbohydrates
- Estimated Fat
- Nutritional Analysis
- Positive Aspects of the Meal
- Areas for Improvement
- Healthier Alternatives or Suggestions
- Personalized Recommendations

#### Additional Behavior

- If the calorie amount is set to **"No Idea"**, the AI is instructed to estimate it.
- If the macronutrient information is set to **"No Idea"**, the AI is instructed to estimate it.
- The user's profile information is considered during the analysis.
- The AI provides practical nutritional suggestions based on the provided meal information.

---

## Input Validation

DietSpring performs **server-side input validation inside Next.js Server Actions before the data is included in the AI prompts**.

This helps prevent invalid or unnecessarily large input values from being sent to the AI model.

### Profile Validation

#### Allergies

- Maximum of **5 allergies** can be entered.
- Each allergy can contain a maximum of **25 characters**.
- Empty values created by comma-separated input are removed.
- `"No allergies"` is case-insensitive.
- If `"No allergies"` is entered, no other allergy can be entered.

---

### Meal Planner Validation

#### Daily Calorie Target

The current Meal Planner Server Action allows:

- A numeric value.
- `"No Idea"` (case-insensitive).
- Numeric values must contain digits only.
- The input can contain a maximum of **15 characters**.

> **Note:** The Meal Planner currently does **not** enforce a 500–10,000 calorie range in the Server Action.

#### Personal Food Preferences

- Maximum of **5 preferences**.
- Each preference can contain a maximum of **25 characters**.
- Empty comma-separated values are removed.
- `"No preferences"` is case-insensitive.
- If `"No preferences"` is entered, no other preference can be entered.

---

### Recipe Suggestion Validation

#### Daily Calorie Target

- A numeric value or `"No Idea"` can be entered.
- `"No Idea"` is case-insensitive.
- Numeric values must contain digits only.
- Numeric values must be between **500 and 10,000 calories**.
- The input can contain a maximum of **15 characters**.

#### Ingredients to Include

- Maximum of **5 ingredients**.
- Each ingredient can contain a maximum of **25 characters**.
- Empty comma-separated values are removed.
- `"None"` is case-insensitive.
- If `"None"` is entered, no other ingredient can be entered.

#### Ingredients to Exclude

The same validation rules are applied:

- Maximum of **5 ingredients**.
- Maximum of **25 characters per ingredient**.
- Empty comma-separated values are removed.
- `"None"` is case-insensitive.
- `"None"` cannot be combined with other ingredients.

---

### Calorie Tracker Validation

#### Food Items

- Maximum of **8 food items**.
- Each food item can contain a maximum of **25 characters**.
- Empty comma-separated values are removed.

#### Portion Sizes

- Maximum of **8 portion sizes**.
- Each portion size can contain a maximum of **25 characters**.
- Empty comma-separated values are removed.

#### Approximate Total Calories

- A numeric value or `"No Idea"` can be entered.
- `"No Idea"` is case-insensitive.
- Numeric values must contain digits only.
- Maximum input length is **15 characters**.

#### Approximate Total Macronutrients

- `"No Idea"` is accepted.
- `"No Idea"` is case-insensitive.
- The input can contain a maximum of **30 characters**.
- Other text is also accepted as long as it does not exceed the 30-character limit.

---

## History

DietSpring stores generated results so users can access their previous AI-generated content.

The following information is stored for the corresponding features:

| Feature           | Stored Information                                |
| ----------------- | ------------------------------------------------- |
| Meal Planner      | User inputs and AI-generated meal plan            |
| Recipe Suggestion | User inputs and AI-generated recipe               |
| Calorie Tracker   | User inputs and AI-generated nutritional analysis |

Creation date and time are also stored for generated records.

---

## Technologies Used

| Technology                       | Purpose                                                    |
| -------------------------------- | ---------------------------------------------------------- |
| **Next.js 16**                   | Full-stack React framework                                 |
| **React 19**                     | User interface                                             |
| **Tailwind CSS**                 | Styling                                                    |
| **shadcn/ui**                    | UI components                                              |
| **Next.js Server Actions**       | Server-side form processing and validation                 |
| **Prisma ORM**                   | Database access                                            |
| **Clerk**                        | Authentication and user management                         |
| **Neon PostgreSQL**              | Database                                                   |
| **Google Gemini 3.1 Flash-Lite** | AI-generated meal plans, recipes, and nutritional analysis |
| **Google GenAI SDK**             | Communication with Google Gemini                           |
| **Vercel**                       | Deployment                                                 |

---

## Run DietSpring Locally

### 1. Clone the Repository

```bash
git clone https://github.com/somenath203/DietSpring.git
```

Navigate into the project directory:

```bash
cd DietSpring
```

---

### 2. Install Dependencies

Using pnpm:

```bash
pnpm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the required environment variables:

```env
NEON_DATABASE_URL="your_neon_database_url"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="your_sign_in_redirect_url"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="your_sign_up_redirect_url"

GOOGLE_GEMINI_API_KEY="your_google_gemini_api_key"
```

Replace the placeholder values with your actual credentials.

---

### 4. Run the Development Server

```bash
pnpm dev
```

Then open the local application in your browser:

```text
http://localhost:3000
```

---

## Live Website

You can visit the deployed version of DietSpring here:

**[Visit DietSpring](https://dietspringsom.vercel.app/)**

---

## Disclaimer

DietSpring provides **AI-generated nutritional and dietary information for informational purposes only**.

The responses generated by the AI model may contain inaccurate, incomplete, or unsuitable information. DietSpring does not provide professional medical, nutritional, or dietary advice, and the creator cannot guarantee the accuracy, completeness, or suitability of AI-generated recommendations.

The creator also does not control the exact responses generated by the AI model.

If you have specific medical, dietary, nutritional, or health-related concerns, consult a **qualified healthcare professional or registered dietitian** before making decisions based on the information provided by DietSpring.
