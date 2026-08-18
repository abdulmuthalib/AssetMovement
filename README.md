# Medical Asset Register MVP

This project is a focused MVP for the Medical Equipment Asset Movement Register described in the PRD. It is structured for a Next.js + Supabase implementation and covers the core flow of assets, requests, approvals, returns, and dashboard reporting.

## MVP scope

- Role-based access: member, staff, admin
- Asset master management with photos and status
- Request creation, assignment, and return handling
- Approval queue and audit trail
- Dashboard KPI cards with export-ready list views
- Supabase-ready schema and configuration placeholders

## Target stack

- Frontend: Next.js + Tailwind CSS
- Backend: Supabase Postgres + Auth + Storage
- Export: CSV and PDF utilities

## Project structure

- `app/` — routes and screens
- `components/` — shared UI blocks
- `lib/` — mock data and Supabase client
- `public/` — static assets

## Local setup

1. Copy `.env.example` to `.env.local` and replace values.
2. Run `npm install`.
3. Run `npm run dev`.

## Deployment

This project is prepared for Vercel deployment, with Supabase environment variables configured in the project settings.

## Implementation notes

The MVP intentionally prioritizes the core PRD workflow before the broader reporting suite as requested by the stakeholder.
