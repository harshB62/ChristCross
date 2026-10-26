# ChristCross

A Christian community engagement platform built with Next.js 15, Payload CMS 3 and PostgreSQL. Its own visual identity and feature set are inspired by public patterns in interactive learning tools: event join codes, live quizzes, polls, word clouds, open responses and response summaries.

## Included in this MVP

- Christian navy / white / gold responsive landing page.
- Event builder with multiple-choice, poll, word-cloud and open-response prompts, optional Scripture references and timers.
- Unique join codes and a participant join flow that works on mobile without creating an account.
- Host view with event status controls, question navigation and automatically refreshed response summaries.
- PostgreSQL-backed Payload collections for events, users and responses.
- Payload admin at `/admin` and Payload REST API at `/api/*`.
- API validation for required event/response fields, answer length, event status and question existence.

## Requirements

- Node.js 20.9+ (Node 20 LTS recommended; avoid using experimental/current Node 25 for production)
- PostgreSQL 14+
- npm

## Local setup

1. Copy `.env.example` to `.env` and set `DATABASE_URL`, `PAYLOAD_SECRET` and `NEXT_PUBLIC_SERVER_URL`. For a local database, start one with `docker compose up -d postgres` and set `DATABASE_URL=postgres://christcross:change-this-local-password@localhost:5432/christcross` (change the local password in both `.env` and `docker-compose.yml` if desired).
2. Install packages: `npm install`.
3. Start the app: `npm run dev`. In development, Payload schema push is enabled to create/update the local schema.
4. Open `http://localhost:3000`. Use the Payload admin at `/admin` to create the first administrator.

For production, schema push is disabled. Generate and commit Payload migrations for your schema before deployment (use the Payload CLI migration create command for your installed version, review the generated SQL, and run migrations before switching application traffic).

For production, use a strong secret, TLS, managed backups and restricted database credentials. Configure your domain in `NEXT_PUBLIC_SERVER_URL` and use a production PostgreSQL connection string.

## Important security and production-hardening notes

This is a functional MVP scaffold, not a production-audited service. To make it suitable for a public launch, add organizer authentication/authorization to event create/update/delete and result endpoints, rate limiting and abuse protection to join/response endpoints, participant session tokens, CSRF/origin protection as appropriate, response deduplication, database indexes/retention policies, moderation for open responses, and a proper real-time transport (WebSockets/SSE) instead of the current five-second polling. Public Payload collection access is intentionally permissive for the MVP's no-account participant flow; do not expose this deployment to untrusted users before adding access controls.

## Payload admin

Visit `/admin` after the server starts. Collections are `users`, `events`, and `responses`. Payload's authentication is configured on the `users` collection.

## Notes

- Question timer values are saved as guidance and displayed in the host/participant UI; server-enforced countdowns are not implemented yet.
- Word clouds and polls collect answers and show recent responses; aggregated visual analytics can be added as a next step.
- Use original branding and assets; this project does not use Wooclap source code, proprietary assets or branding.
