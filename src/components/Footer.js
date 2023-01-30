import React from 'react'
import Logo from '../assets/images/koinbulteni_logo_1.png'
const Footer = () => {
  return (
    <div className='grid grid-cols-3 bg-h text-white py-8 mt-12 px-2 sm:px-2 md:px-3 lg:px-9 xl:px-20'>
      <div className='space-y-4'>
        <div>
          <span className='font-extrabold'>Koin Bülteni Basın Yayın Bilişim Organizasyon Anonim Şirketi</span>
        </div>
        <div>
        <span>
          <span className='font-extrabold'>Yönetim Ofisi:</span> Kültür, Nispetiye Cd No:56, Akmerkez B3 Kule 2.kat, 34340 Beşiktaş/İstanbul
        </span>
        </div>
      </div>
      <div>
        Bağlantılar
      </div>
      <div>
        <img  src={Logo} className="h-20" alt="" />
      </div>
    </div>
  )
}

export default Footer