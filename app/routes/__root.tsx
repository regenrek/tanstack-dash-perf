import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { seo } from "@/utils/seo";
import {
	HeadContent,
	Link,
	Outlet,
	Scripts,
	createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type * as React from "react";
import { Providers } from "../providers";
import appCss from "../styles/app.css?url"

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			...seo({
				title:
					"TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
				description: 'TanStack Start is a type-safe, client-first, full-stack React framework. ',
			}),
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{ rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
			{ rel: "icon", href: "/favicon.ico" },
		],
	}),
	errorComponent: (props) => {
		return (
			<RootDocument>
				<DefaultCatchBoundary {...props} />
			</RootDocument>
		);
	},
	notFoundComponent: () => <NotFound />,
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="initial-scale=1, viewport-fit=cover, width=device-width"
                />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: light)"
                    content="oklch(1 0 0)"
                />
                <meta
                    name="theme-color"
                    media="(prefers-color-scheme: dark)"
                    content="oklch(0.145 0 0)"
                />

                <HeadContent />
            </head>
			<body>
				<div className="p-2 flex gap-2 text-lg">
				<Link
						to="/dashboard"
						activeProps={{
							className: "font-bold bg-red-200 text-red-500",
						}}
					>
						Dashboard
					</Link>{" "}
					<Link
						to="/"
						activeProps={{
							className: "font-bold",
						}}
						activeOptions={{ exact: true }}
					>
						Home
					</Link>{" "}
					<Link
						to="/posts"
						activeProps={{
							className: "font-bold",
						}}
					>
						Posts
					</Link>{" "}
					<Link
						to="/users"
						activeProps={{
							className: "font-bold",
						}}
					>
						Users
					</Link>{" "}
					<Link
						to="/route-a"
						activeProps={{
							className: "font-bold",
						}}
					>
						Pathless Layout
					</Link>{" "}
					<Link
						to="/deferred"
						activeProps={{
							className: "font-bold",
						}}
					>
						Deferred
					</Link>{" "}
					<Link
						// @ts-expect-error
						to="/this-route-does-not-exist"
						activeProps={{
							className: "font-bold",
						}}
					>
						This Route Does Not Exist
					</Link>
				</div>
				<hr />
				<Providers>
					{children}
				</Providers>
				<Scripts />
			</body>
		</html>
	);
}
