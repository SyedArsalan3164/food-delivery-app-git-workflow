# Food Delivery Application

Case Study 3 — *Managing Team Collaboration Using Git*
Open Source Technologies (01CE0526), Marwadi University

## What this is

A five-module Food Delivery Application (customer app, restaurant partner panel,
delivery-agent app, admin dashboard, shared backend API) used to demonstrate a
Git-based collaborative workflow for a five-developer team.

## Modules

| Folder | Owner | Purpose |
|---|---|---|
| `backend/` | Dev 5 | Shared REST API (Node.js/Express), order/menu/user data |
| `apps/customer-app/` | Dev 1 | Customer ordering app |
| `apps/restaurant-panel/` | Dev 2 | Restaurant partner panel |
| `apps/delivery-agent-app/` | Dev 3 | Delivery-agent app |
| `apps/admin-dashboard/` | Dev 4 | Admin dashboard |

## Branching strategy

See [`docs/branching-strategy.md`](docs/branching-strategy.md) for the full
branch model, naming convention, and the pull-request / conflict-resolution
workflow used on this repository.

## Continuous Integration

Every pull request runs the checks defined in
[`.github/workflows/ci.yml`](.github/workflows/ci.yml) before it can be merged.

## Case study report

The full IEEE-format case study report is included as
`Case_Study_Git_Collaboration.docx` at the root of this repository.
