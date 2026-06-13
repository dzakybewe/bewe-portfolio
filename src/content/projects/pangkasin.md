---
title: Pangkasin
subtitle: SaaS · Personal Project
period: 2025 – ongoing
order: 1
tags:
  - Next.js
  - Supabase
  - Tailwind
  - Vercel
summary: A multi-tenant SaaS platform for independent barbershops across Indonesia.
highlights:
  - Multi-tenant architecture with barbershop_id on all tables
  - Subdomain per shop (shop-name.pangkasin.com)
  - 3-step guest booking flow — no account required
  - Admin dashboard for managing team, services, and schedule
  - Barber availability management
  - 'Pricing: Rp 149k/month or Rp 1.49jt/year, no setup fee'
links:
  live: https://pangkasin.com
  # TODO: Add Pangkasin GitHub repo URL when repo is public
---

Pangkasin is a booking and management SaaS platform built for independent barbershops across Indonesia. Each barbershop gets its own subdomain. Built as a personal project to explore SaaS architecture — multi-tenant schema from day one, deliberate v1 scope, no setup fee for early adopters.

The goal was to build something real and ship it, not just prototype it. Every decision was made with production in mind: multi-tenant database schema upfront, clean booking flow for guests without requiring accounts, and a simple admin dashboard that doesn't get in the way.
