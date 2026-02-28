# BWA

Base Web App built with Next.js (App Router).

## What this includes

- Next.js app in `src/app`
- No database
- Production Docker setup

## Requirements

- Node.js 22+
- npm
- (Optional) Docker Desktop

## Run locally

1. Install dependencies:

	```bash
	npm install
	```

2. Start development server:

	```bash
	npm run dev
	```

3. Open:

	```text
	http://localhost:3000
	```

## Build and run production locally

```bash
npm run build
npm run start
```

## Docker

Build image:

```bash
docker build -t bwa:latest .
```

Run container:

```bash
docker run --rm -p 3000:3000 bwa:latest
```

Open `http://localhost:3000`.

## Where to edit first

- Home page: `src/app/page.tsx`
- Global styles: `src/app/globals.css`
- App metadata/layout: `src/app/layout.tsx`
