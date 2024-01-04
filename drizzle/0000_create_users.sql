CREATE TABLE `users` (
	`id` text,
	`name` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_name_unique` ON `users` (`name`);