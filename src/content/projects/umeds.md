---
title: Umeds
subtitle: Mobile · PT Umma Bright Indonesia
period: Dec 2025 – Jun 2026
order: 1
tags:
  - Flutter
  - OneSignal
  - PostHog
  - Provider
summary: A learning platform for dental students, where I improved stability and fixed a major iPad compatibility issue.
highlights:
  - 500+ weekly active users across iOS and Android
  - Crash-free rate improved from 32% to 85% on Android
  - Crash-free rate improved from 57% to 89% on iOS
  - Discovered and fixed iPad compatibility mode issue affecting 20% of users
links:
  website: https://umeds.id
  appStore: https://apps.apple.com/id/app/umeds-belajar-kedokteran-gigi/id6444504054
  playStore: https://play.google.com/store/apps/details?id=com.ummacademy.ummacademy&pcampaignid=web_share
---

Umeds is a learning platform for dental students in Indonesia, offering video courses, quizzes, and exam preparation. Umeds had a Flutter app with real users, but the codebase had been left largely unmaintained, dead code, silent bugs, and no clear picture of where things were breaking. I joined as a mobile apps developer to fix that.

Working ticket by ticket, I used Firebase Crashlytics to surface what users were actually experiencing and cleaned the codebase as I went. The biggest discovery came late: 20% of users are medical students on iPads or tablets, but the app had been running in iPhone compatibility mode the whole time. I dug into native iOS territory to make it truly iPad-compatible.

This experience taught me to pay attention to who's actually using the app, and that no feature matters if it keeps crashing.
