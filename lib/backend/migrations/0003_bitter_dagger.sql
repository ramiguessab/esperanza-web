CREATE TABLE IF NOT EXISTS "envision" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"major" varchar NOT NULL,
	"year_of_study" varchar NOT NULL,
	"reason" varchar NOT NULL,
	"what_startup_means" varchar
);
