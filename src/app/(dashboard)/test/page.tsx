
import { HydrateClient, prefetch, trpc } from "@/trpc/server";

import { HealthCheck } from "./health-check";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary"; 


export default function TestPage() {
    prefetch(trpc.health.queryOptions());
    return (
        <HydrateClient>
            <div>
                <h1>
                    <ErrorBoundary fallback={<div>Something went wrong</div>}>
                        <Suspense>
                            <HealthCheck />
                        </Suspense>
                    </ErrorBoundary>
                </h1>
            </div>
        </HydrateClient>
    )
};