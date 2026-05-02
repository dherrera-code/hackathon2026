import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react'
import React from 'react'

const BottomFooter = () => {
    return (
        <div>
            <Footer className='rounded-none' container>
                <FooterCopyright href="#" by="Sea#" year={2026} />
                <FooterLinkGroup>
                    <FooterLink href="#">Daniel Herrera</FooterLink>
                    <FooterLink href="#">Darcy Rose</FooterLink>
                    <FooterLink href="https://github.com/IJGGGR">Isaias Gonzalez</FooterLink>
                </FooterLinkGroup>
            </Footer>

        </div>
    )
}

export default BottomFooter