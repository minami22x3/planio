CREATE TABLE "examples" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"foo" varchar(24) NOT NULL,
	"bar" text NOT NULL,
	"baz" integer,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "examples_foo_unique" UNIQUE("foo"),
	CONSTRAINT "examples_bar_unique" UNIQUE("bar")
);
