import React from "react";
import "./home.css";

const About = () => {
  let data = {
    profile: {
      name: "Fauzi Saputra",
      tempattgllahir: "Ngawi, 09 April 2007",
      jeniskelamin: "Laki-Laki",
      agama: "Islam",
      alamat:
        "Jl. Argobudoyo No 03 RT 03 RW 03 , Pendem, Kel. Ledok, Kec. Argomulyo, Salatiga",
      notlp: "085700702605",
      email: "gaissuai@gmail.com",
      kewarganegaraan: "Indonesia",
    },
    pendidikan: {
      tk: "TK Aisyah Kedungharjo",
      sd: "SD Negeri 1 Kedungharjo",
      smp: "SMP Negeri 1 Mantingan",
      smk: "SMK Telekomunikasi Tunas Harapan",
    },
  };

  return (
    <section style={{ marginTop: "80px" }}>
      <div className="container">
        <h4 className="about-title text-center">
          Temukan Lebih Banyak Tentang Saya di Sini!
        </h4>
        <div className="row align-items-center">
          <div className="col-md-4">
            <div
              className="profile-box border border-5 rounded"
              style={{ marginBottom: "30px" }}
            >
              <h3
                className="title"
                style={{ marginLeft: "10px", marginBottom: "10px" }}
              >
                Profile
              </h3>
              <ul
                className="profile-details"
                style={{ color: "white", listStyleType: "none" }}
              >
                <li className="profile-item">
                  <strong>Nama :</strong> <span>{data.profile.name}</span>
                </li>
                <li className="profile-item">
                  <strong>Tempat/Tgl Lahir :</strong>{" "}
                  <span>{data.profile.tempattgllahir}</span>
                </li>
                <li className="profile-item">
                  <strong>Jenis Kelamin :</strong>{" "}
                  <span>{data.profile.jeniskelamin}</span>
                </li>
                <li className="profile-item">
                  <strong>Agama :</strong> <span>{data.profile.agama}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="profile-box border border-5 rounded"
              style={{ marginBottom: "30px" }}
            >
              <h3
                className="title"
                style={{ marginLeft: "10px", marginBottom: "10px" }}
              >
                Kontak
              </h3>
              <ul
                className="profile-details"
                style={{ color: "white", listStyleType: "none" }}
              >
                <li className="profile-item">
                  <strong>Alamat :</strong> <span>{data.profile.alamat}</span>
                </li>
                <li className="profile-item">
                  <strong>Telepon :</strong> <span>{data.profile.notlp}</span>
                </li>
                <li className="profile-item">
                  <strong>Email :</strong> <span>{data.profile.email}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="profile-box border border-5 rounded"
              style={{ marginBottom: "30px" }}
            >
              <h3
                className="title"
                style={{ marginLeft: "10px", marginBottom: "10px" }}
              >
                Pendididkan
              </h3>
              <ul
                className="profile-details"
                style={{ color: "white", listStyleType: "none" }}
              >
                <li className="profile-item">
                  <strong>2010-2013 :</strong> <span>{data.pendidikan.tk}</span>
                </li>
                <li className="profile-item">
                  <strong>2013-2019 :</strong> <span>{data.pendidikan.sd}</span>
                </li>
                <li className="profile-item">
                  <strong>2019-2022 :</strong>{" "}
                  <span>{data.pendidikan.smp}</span>
                </li>
                <li className="profile-item">
                  <strong>2022-2025 :</strong>{" "}
                  <span>{data.pendidikan.smk}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
