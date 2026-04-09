import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function CatalogueLink({ className }: { className?: string }) {
    return (
        <a
            href="/files/airstream-catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge("py-brand-spacing-sm text-white text-center bg-primary px-brand-spacing-lg rounded-brand-radius hover:scale-105 active:scale-95 transition ease-in duration-200 font-semibold", className)}
        >
            Catalogue
        </a>
    )
}
