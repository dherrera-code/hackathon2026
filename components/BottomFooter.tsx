import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react'
import React from 'react'

const BottomFooter = () => {
    return (
        <div>
            <Footer container className='bg-[#90E0EF]'>
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