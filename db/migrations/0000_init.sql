CREATE TABLE "users" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"username" varchar(24) NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"displayName" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
