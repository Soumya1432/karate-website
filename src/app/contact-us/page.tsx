import ContactInformation from '@/components/card/ContactInformation'
import SectionHeader from '@/components/common/SectionHeaderProps'
import ContacUsForm from '@/components/form/ContacUsForm'
import React from 'react'

const ContactusPage = () => {
  return (
    <section>
      <SectionHeader
        title='Contact us' />
      <div className='contact-us-page-container'>
        <div className='contact-us-page-header-section'>
          <h1 className='contact-us-page-header-section-title'>Get in touch with us</h1>
          <p className='contact-us-page-header-section-description'>Have questions about affiliations , championships programs We are here to help you</p>
        </div>

        <div className='contact-us-page-details-list'>
          <ContactInformation/>
          <ContacUsForm/>
        </div>

      </div>
    </section>
  )
}

export default ContactusPage
