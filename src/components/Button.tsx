// In this file i made a Button as component, and it uses the same props of a common HTML Button
// The componantization was made to avoid the repeat process as creat a button in every page
import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; // Passing the HTML Button properties

export function Button (props: ButtonProps) {
    return (
        <button className='button' {...props} />
    )
}