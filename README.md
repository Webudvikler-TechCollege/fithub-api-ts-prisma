# Prisma API Template

Denne template kører med **Node.js**, **TypeScript**, **Express**, og **Prisma**. Den er tænkt som udgangspunkt for et REST API med moderne værktøjer og datamodellering.

---

## 🛠 Teknologier

- [TypeScript](https://www.typescriptlang.org/)
- [Express 5](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [TSX](https://github.com/esbuild-kit/tsx)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

---

## Kom i gang

### 1. Klon repo og installér afhængigheder

```bash
git clone https://github.com/dit-brugernavn/api-template.git

cd api-template

npm install
```

### 2. Opret .env-fil
```bash
cp .env.example .env
```

### 3.1 Initialiser database (migration + seed)
Nedenstående kommando kører med database shadowing og kræver at du har rettigheder til at oprette databaser på serveren.
```bash
npm run init
```
Denne kommando:
- Kører `prisma migrate dev`
- Seeder databasen via `prisma/seed.ts`

### 3.2 Push database (begrænsede rettigheder)
Kør push kommandoen hvis du kun har rettigheder til at administrere tabeller i databasen:
```bash
npm run push
```
Begge kommandoer:
- kører `prisma migrate dev`
- seeder databasen via `prisma/seed.ts`

### 4. Start serveren
```bash
npm run dev
```