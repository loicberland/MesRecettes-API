BEGIN;

CREATE TABLE "roles" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT UNIQUE NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "update_at" TIMESTAMPTZ
);

CREATE TABLE "users" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT UNIQUE NOT NULL CHECK( "email" ~ '^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$'),
    "password" TEXT NOT NULL,
    "roles_id" INT NOT NULL REFERENCES "roles"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "update_at" TIMESTAMPTZ    
);

CREATE TABLE "recipes" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tips" TEXT,
    "nbr_persons" INT,
    "cook_time" NUMERIC(5,2),
    "preparation_time" NUMERIC(5,2),
    "cook_unit" TEXT CHECK( "cook_unit" ~ '^[h|s|m|j|H|S|M|J]$'),
    "preparation_unit" TEXT CHECK( "preparation_unit" ~ '^[h|s|m|j|H|S|M|J]$'),
    "picture_link" TEXT,    
    "users_id" INT NOT NULL REFERENCES "users"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "update_at" TIMESTAMPTZ    
);

CREATE TABLE "ingredients" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT UNIQUE NOT NULL,
    "picture_link" TEXT,
    "is_temporary" BOOLEAN NOT NULL DEFAULT(TRUE),
    "is_not_accepted" BOOLEAN NOT NULL DEFAULT(FALSE),
    "remplace_with" INT REFERENCES "ingredients"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "update_at" TIMESTAMPTZ
);

CREATE TABLE "units" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT UNIQUE NOT NULL,
    "is_temporary" BOOLEAN NOT NULL DEFAULT(TRUE),
    "is_not_accepted" BOOLEAN NOT NULL DEFAULT(FALSE),
    "remplace_with" INT REFERENCES "units"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "update_at" TIMESTAMPTZ
);

CREATE TABLE "quantities" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "value" NUMERIC (4,1),
    "ingredients_id" INT NOT NULL REFERENCES "ingredients"("id"),
    "recipes_id" INT NOT NULL REFERENCES "recipes"("id"),
    "units_id" INT REFERENCES "units"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "update_at" TIMESTAMPTZ,
    UNIQUE("ingredients_id","recipes_id")
);

CREATE TABLE "steps" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "order" INT NOT NULL CHECK("order">0),
    "description" TEXT NOT NULL,
    "recipes_id" INT NOT NULL REFERENCES "recipes"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "update_at" TIMESTAMPTZ,
    UNIQUE("recipes_id","order")    
);
COMMIT;

