DO $$ BEGIN
 CREATE TYPE "web_conferences" AS ENUM('web2', 'web3');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "compitition" (
	"team_name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"member1" varchar NOT NULL,
	"member2" varchar NOT NULL,
	"member3" varchar NOT NULL,
	"member4" varchar NOT NULL,
	"team_level" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "web" (
	"full_name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"academic_year" varchar NOT NULL,
	"field_of_study" varchar NOT NULL,
	"interests" varchar NOT NULL,
	"conference" "web_conferences" NOT NULL
);
