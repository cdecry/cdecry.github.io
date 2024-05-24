import { CSSVariablesResolver } from "@mantine/core";
export const Resolver: CSSVariablesResolver = (theme) => {
    return {
        variables: {

        },
        light: {

        },
        dark: {
            '--app-bg': '#121212',
            '--bg-gradient-bottom-left': '#573aab',
            '--bg-gradient-top-right': '#978aa6',
            // '--container-bg': '#363737',
            '--container-bg': '#0f172a',
            '--header-text': '#e2e8f0',
            '--header-bg': '#1e293b',
            '--gray-2': '#3c4042',


            '--tw-slate-900': '#0f172a'

            // '--header-gradient-1': '#3e3e3e',
            // '--header-gradient-2': '#4e4e4e',
            // '--purple-1': '#2D033B',
            // '--purple-2': '#C147E9',
            // '--purple-3': '#810CA8',
            // '--purple-4': '#2D033B',
        }
    }
}