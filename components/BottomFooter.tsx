import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react'
import React from 'react'

const BottomFooter = () => {
    return (
        <div>
            <Footer className='rounded-none bg-[#90E0EF]' container>
                <FooterCopyright href="#" by="Sea#" year={2026} />
                <FooterLinkGroup>
                    <FooterLink href="#">Daniel Herrera</FooterLink>
                    <FooterLink href="#">Darcy Rose</FooterLink>
                    <FooterLink href="#">Isaias Gonzales</FooterLink>
                </FooterLinkGroup>
            </Footer>

        </div>
    )
}

export default BottomFooter