ALTER TABLE "envision" ALTER COLUMN "what_startup_means" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "envision" ADD COLUMN "accepted" boolean DEFAULT false NOT NULL;