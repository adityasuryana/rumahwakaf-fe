import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: 'Tentang Kami - Rumah Wakaf',
}

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-25 mb-20">
        <Image
          src="/roadmap.jpeg"
          width={1000}
          height={400}
          alt="tentang kami"
          className="place-self-center mb-10"
        />

        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-10 mx-20">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-green-w mb-2">Sejarah</h2>
            <p className="text-gray-700 text-justify">
              Rumah Wakaf berdiri sejak 24 April 2009 dan disahkan sebagai
              Lembaga Wakaf Nasional pada tahun 2010. Selanjutnya, pada tahun
              2014, Rumah Wakaf telah terdaftar sebagi Lembaga Pengelolaan Wakaf
              Tunai yang izinnya diterbitkan oleh Badan Wakaf Indonesia (BWI)
              sebagai regulator pengelolaan wakaf di Indonesia. Selama empat
              belas tahun berdiri, transformasi dilakukan untuk menciptakan
              beragam peluang dan menghadirkan kolaborasi dengan berbagai pihak.
              Di tahun 2017, transformasi pertama dihadirkan dengan semangat
              baru dalam mengalirkan kebaikan sepanjang masa. Perubahan logo
              awal dari warna emas ke orange dengan logo hati. Gambar hati
              menggambarkan kasih sayang, rasa cinta serta kebahagiaan. Hal ini
              memberi kesan bahwa Rumah Wakaf akan selalu berusaha untuk menebar
              kebahagiaan kepada masyarakat dan penerima manfaat. Warna orange
              memberi kesan hangat, bersemangat, dan simbol dari petualangan,
              optimisme, percaya diri dan kemampuan dalam bersosialisasi.
            <br />
            <br />
              Transformasi ini menggambarkan semangat Rumah Wakaf sebagai
              lembaga yang profesional, akuntabel, transparan, dan produktif
              dalam mengelola wakaf. Rumah Wakaf terus mengembangkan dan
              melakukan inovasi dalam pengelolaan wakaf di Indonesia. Beberapa
              program wakaf yang digulirkan di antaranya Wakaf Kebun Produktif,
              Wakaf Produktif Sekolah, Wakaf Produktif Klinik, Wakaf Sumber Air,
              Wakaf Masjid, Wakaf Madrasah, Wakaf Al Quran Braille, Wakaf
              Infrastruktur, dan masih banyak lagi.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-green-w mb-2">Visi</h2>
            <p className="text-gray-700 text-center mb-5">
              “Menjadi lembaga wakaf profesional dan terpercaya dalam
              pengelolaan wakaf di Indonesia”
            </p>

            <h2 className="text-3xl font-bold text-green-w mb-2">Misi</h2>
            <p className="text-gray-700 text-justify mb-5">
              <ul className="list-disc [&>li]:mt-2 ml-5">
                <li>
                  Mengembangkan kolaborasi strategis dalam pengelolaan wakaf
                </li>
                <li>
                  Memberikan kebermanfaatan melalui pemberdayaan partisipatif
                  sesuai potensi lokal
                </li>
              </ul>
            </p>

            <h2 className="text-3xl font-bold text-green-w mb-2">Legalitas</h2>
            <p className="text-gray-700 text-justify">
              Rumah Wakaf adalah lembaga pengelola wakaf yang telah memiliki
              legalitas dari berbagai aspek legal formal sebagai berikut :
              <ul className="list-disc [&>li]:mt-2 ml-5">
                <li>
                  Akta Pendirian Yayasan : Irma Rachmawati, SH No.53 tgl 24
                  April 2009
                </li>
                <li>
                  Akta Perubahan Yayasan : Titin Nuraeni, SH., M,Kn No.54 tgl 2
                  Maret 2015
                </li>
                <li>
                  Surat Keputusan Menteri Hukum dan Hak Asasi Manusia Republik
                  Indonesia : AHU-0018500.AH.01.12.Tgl 09 Juni 2022
                </li>
                <li>
                  Surat Keputusan Lembaga Nazhir: No.W5a/26/BH/14/Tahun 2010
                </li>
                <li>
                  Penetapan Terdaftar Sebagai Lembaga Kesejahteraan Sosial (LKS)
                  Dinas Sosial Kota Bandung Nomor : TU.01.02/3393 –
                  Dinsos/IX/2021
                </li>
                <li>
                  Surat Tanda Bukti Pendaftaran Nazhir dengan Nomor Pendaftaran
                  3.3.00049
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
