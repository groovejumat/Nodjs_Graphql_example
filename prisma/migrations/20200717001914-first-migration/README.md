# Migration `20200717001914-first-migration`

This migration has been generated at 7/17/2020, 12:19:15 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "Link" (
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
"description" TEXT NOT NULL,
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"url" TEXT NOT NULL)

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200717001914-first-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+// 1
+datasource db {
+  provider = "sqlite" 
+  url = "***"
+}
+
+// 2
+generator client {
+  provider = "prisma-client-js"
+}
+
+// 3
+model Link {
+  id          Int      @id @default(autoincrement())
+  createdAt   DateTime @default(now())
+  description String
+  url         String
+}
```


