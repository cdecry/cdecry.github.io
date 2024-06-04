import { CSSVariablesResolver } from "@mantine/core";
export const Resolver: CSSVariablesResolver = (theme) => {
    return {
        variables: {

        },
        light: {
            '--tw-slate-900': 'rgba(255,255,255,0.9)',
        },
        dark: {
            '--tw-slate-200': '#e2e8f0',
            '--tw-slate-400': '#94a3b8',
            '--tw-slate-800': '#1e293b',
            '--tw-slate-900': '#0f172a'
        }
    }
}