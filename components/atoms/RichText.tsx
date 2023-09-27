import React from 'react'
import Link from 'next/link'

import { PortableText } from '@portabletext/react'
import {LocaleRichText} from "../../schema";

function RichText({ value }: { value: LocaleRichText['en'] }) {
  return (
    <PortableText
      value={value}
      components={{
        marks: {
          link: ({ children, value }) => (
            <Link
              href={value.href}
            >
              {children}
            </Link>
          ),
        },
      }}
    />
  )
}

export default RichText
