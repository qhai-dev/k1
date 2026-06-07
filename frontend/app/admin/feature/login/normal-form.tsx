"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button, Field, FieldError, FieldGroup, FieldLabel, Input } from "@kairo/shadcn-semi";

export function NormalForm() {
	const t = useTranslations("signin");

	const formSchema = z.object({
		account: z.string().min(2, {
			message: `${t("error-account")}`,
		}),
		password: z.string().min(2, {
			message: `${t("error-password")}`,
		}),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			account: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
			<FieldGroup>
				<Controller
					name="account"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel>{t("account")}</FieldLabel>
							<Input
								{...field}
								aria-invalid={fieldState.invalid}
								placeholder={t("placeholder-account")}
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Controller
					name="password"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel>{t("password")}</FieldLabel>
							<Input
								{...field}
								aria-invalid={fieldState.invalid}
								placeholder={t("placeholder-password")}
							/>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</FieldGroup>
			<Button type="submit">{t("login")}</Button>
		</form>
	);
}
