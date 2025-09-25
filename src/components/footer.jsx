import React from 'react'

const Footer = () => {
  return (
    <div className='w-full mt-10 bg-green-w p-10 px-20'>
        <div className="mx-auto w-full">
      <div className="grid gap-6 pt-6 lg:py-6 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-2xl font-semibold text-white">Rumah Wakaf</h2>
            <p className='text-white text-sm mb-4'>Rumah Wakaf adalah lembaga pengelola aset wakaf yang berkomitmen pada pencapaian dampak luas melalui program produktif yang mengutamakan kebermanfaatan dan keberlanjutan.</p>
            <p className='text-white text-sm mb-4'>Rumah Wakaf terdaftar sebagai nazhir di Badan Wakaf Indonesia (BWI) dengan nomor No. 3.3.00049.</p>
        </div>
        <div>
            <h2 className="mb-6 text-xl font-semibold text-white">Cari Tahu</h2>
            <ul className="text-white font-sm">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Fakta Wakaf</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Laporan Keuangan</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Literasi Wakaf</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-xl font-semibold text-white">Layanan</h2>
            <ul className="text-white font-sm">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Wakaf Centre</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Wakaf Social</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Wakaf Produktif</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-xl font-semibold text-white">Terhubung</h2>
            <ul className="text-white font-sm">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Kontak Kami</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Duta Wakaf</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Rekening Wakaf</a>
                </li>
            </ul>
        </div>
    </div>
    
    </div>

    </div>
  )
}

export default Footer