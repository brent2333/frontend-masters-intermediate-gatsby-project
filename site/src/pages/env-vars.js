import * as React from 'react';

export default function EnvVarsPage() {
    return (
        <>
            <h1>Env vars</h1>
            <ul>
            <li>GATSBY_PUBLIC_VALUE: {process.env.GATSBY_PUBLIC_VALUE}</li>
            <li>SECRET_VALUE: {process.env.SECRET_VALUE}</li>            </ul>
        </>
    )
}