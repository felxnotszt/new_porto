import { useEffect, useState } from "react";
import beliin from "./assets/images/beliin.png";
import trip from "./assets/images/trip.png";
import diabeaware from "./assets/images/diabeaware.png";
import penerjemah from "./assets/images/penerjemah.png";
import profile from "./assets/images/Novalden Petra.jpg"
import "./App.css";

/* =====================================================
   DATA WEBSITE
===================================================== */

const DATA = {
  nama: "Novalden Petra perdana",

  peran: "Fullstack Developer, Data Engineer, Data Analyst",

  singkat:
    "Saya membangun website yang cepat, rapi, dan nyaman dipakai di semua ukuran layar.",

  tentang: [
    "Halo! Saya mahasiswa yang tertarik pada pengembangan web baik frontend maupun backend. Saya suka mengubah ide menjadi produk yang bisa langsung dipakai.",
  ],

  fakta: [
    ["Lokasi", "Semarang, Indonesia"],
    ["Fokus", "React, NextJS, Laravel, Data Engineer, Data Analyst"],
    ["Status", "Terbuka untuk proyek & magang"],
  ],

  skills: [
    "React",
    "JavaScript",
    "HTML & CSS",
    "Next.js",
    "Python",
    "Data Engineer",
    "Data Analyst"
  ],

  pendidikan: [
    {
      tahun: "2023",
      nama: "Soegijapranata Catholic University",
      jurusan: "Teknik Informatika",
      ket: "Membangun beberapa proyek baik frontend, backend, AI, magang pada perusahaan, dan freelance.",
    },

    {
      tahun: "2020 – 2023",
      nama: "SMA Negeri 7 Semarang",
      jurusan: "IPS",
      ket: "Aktif di volunteer, Berpengalaman memimpin.",
    },

  ],

  projects: [
    {
      judul: "Project UAS Toko Online - Backend",
      desk: "Web e-commerce dengan sistem CRUD sederhana.",
      tech: ["React", "Node.js", "API"],
      link: "https://beliin-pi.vercel.app/login",
      warna: "#0f5c54",
      gambar : beliin
    },

    {
      judul: "Project UAS Cloud Computing Web Trip - Fullstack",
      desk: "Web trip dengan sistem rating, filter dengan menggunakan teknologi cloud.",
      tech: ["React", "Firebase", "Cloud Computing"],
    link: "https://dolanlah.firebaseapp.com/",
      warna: "#b4691f",
      gambar : trip
    },

    {
      judul: "Freelance Landing Page",
      desk: "Freelance landing page dengan tema kesehatan.",
      tech: ["React"],
      link: "https://diabeaware-web.vercel.app/",
      warna: "#3f5f8a",
      gambar : diabeaware
    },

    {
      judul: "Project UAS AI - Penerjemah bahasa isyarat tangan",
      desk: "Sistem penerjemah bahasa isyarat tangan menggunakan neural network",
      tech: ["Python"],
      link: "https://youtu.be/I58FZDKqyYc?si=DUMhNyobJvL4ojql",
      warna: "#3f5f8a",
      gambar : penerjemah
    },
  ],

  kontak: {
    email: "aldenpetra33@gmail.com",
    wa: "62895386173900",
    github: "github.com/felxnotszt",
    linkedin: "linkedin.com/in/novalden-petra-2aa561293/",
  },
};

const NAV = [
  ["tentang", "Tentang"],
  ["pendidikan", "Pendidikan"],
  ["project", "Project"],
  ["kontak", "Kontak"],
];

/* =====================================================
   HEADER
===================================================== */

function Header({ theme, toggle }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    NAV.forEach(([id]) => {
      const element = document.getElementById(id);

      if (element) {
        io.observe(element);
      }
    });

    return () => io.disconnect();
  }, []);

  return (
    <header className="top">
      <div className="wrap bar">

        <a className="logo" href="#top">
          <i></i>
          {DATA.nama.split(" ")[0]}
        </a>

        <nav
          className={open ? "open" : ""}
          aria-label="Navigasi utama"
        >
          <ul>
            {NAV.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? "on" : ""}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label="Ganti tema"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          <button
            className="icon-btn burger"
            onClick={() => setOpen(!open)}
            aria-label="Buka menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

      </div>
    </header>
  );
}

/* =====================================================
   HERO
===================================================== */

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">

        <div>
          <h1>
            Halo, saya <span>{DATA.nama}</span>
          </h1>

          <p className="role">
            {DATA.peran}
          </p>

          <p className="bio">
            {DATA.singkat}
          </p>

          <div className="btns">
            <a
              className="btn fill"
              href="#project"
            >
              Lihat project
            </a>

            <a
              className="btn ghost"
              href="#kontak"
            >
              Hubungi saya
            </a>
          </div>

          <div className="skills">
            {DATA.skills.map((skill) => (
              <span
                className="chip"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="portrait">
          <img
            src={profile}
            alt={`Foto profil ${DATA.nama}`}
          />
        </div>

      </div>
    </section>
  );
}

/* =====================================================
   ABOUT
===================================================== */

function About() {
  return (
    <section id="tentang">
      <div className="wrap">

        <h2 className="sec-title">
          Tentang saya
        </h2>

        <div className="about-grid">

          <div>
            {DATA.tentang.map((text, index) => (
              <p key={index}>
                {text}
              </p>
            ))}
          </div>

          <div className="facts">
            {DATA.fakta.map(([key, value]) => (
              <div
                className="fact"
                key={key}
              >
                <b>{key}</b>
                <span>{value}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

/* =====================================================
   EDUCATION
===================================================== */

function Education() {
  return (
    <section id="pendidikan">
      <div className="wrap">

        <h2 className="sec-title">
          Pendidikan
        </h2>

        <p className="sec-sub">
          Perjalanan belajar saya, dari yang terbaru.
        </p>

        <ol className="tl">
          {DATA.pendidikan.map((education) => (
            <li key={education.nama}>

              <time>
                {education.tahun}
              </time>

              <h3>
                {education.nama}
              </h3>

              <strong>
                {education.jurusan}
              </strong>

              <p>
                {education.ket}
              </p>

            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}

/* =====================================================
   PROJECTS
===================================================== */

function Projects() {
  return (
    <section id="project">
      <div className="wrap">

        <h2 className="sec-title">
          Project
        </h2>

        <p className="sec-sub">
          Beberapa proyek yang pernah saya kerjakan.
        </p>

        <div className="grid">

          {DATA.projects.map((project) => (
            <article
              className="card"
              key={project.judul}
            >

              <div
                className="thumb"
                style={{
                  backgroundImage: `url(${project.gambar})`,
                }}
                aria-hidden="true"
              />

              <div className="card-body">

                <h3>
                  {project.judul}
                </h3>

                <p>
                  {project.desk}
                </p>

                <div className="tags">
                  {project.tech.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <a href={project.link}>
                  Lihat project
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

/* =====================================================
   CONTACT
===================================================== */

function Contact() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (key) => (event) => {
    setForm({
      ...form,
      [key]: event.target.value,
    });
  };

  const submit = async (event) => { 
    event.preventDefault(); 
    
    if (!form.nama || !form.email || !form.pesan) { 
      alert("Semua kolom harus diisi."); 
      return; 
    }

    setLoading(true); 
    
    try { 
      const response = await fetch( 
        "https://formsubmit.co/ajax/aldenpetra33@gmail.com", 
        { 
          method: "POST", 
          headers: { 
            "Content-Type": "application/json", 
            Accept: "application/json", 
          }, 
          body: JSON.stringify({ 
            name: form.nama, 
            email: form.email, 
            message: form.pesan, 
            
            _subject: `Pesan baru dari ${form.nama}`, 
            _template: "table", 
            _captcha: "false", 
          }), 
        } 
      ); 
      
      const data = await response.json(); 
      
      console.log("Response FormSubmit:", data); 
      
      if (data.success) { 
        setSent(true); 
        
        setForm({ 
          nama: "", 
          email: "", 
          pesan: "", });
        } else { 
          alert( 
            "Pesan gagal dikirim. Silakan coba beberapa saat lagi." 
          ); 
        } 
      } catch (error) { 
        console.error("Error:", error); 
        
        alert( 
          "Terjadi kesalahan saat mengirim pesan." 
        ); 
      } finally { 
        setLoading(false); 
      } 
    };

  const contact = DATA.kontak;

  return (
    <section id="kontak">
      <div className="wrap">

        <h2 className="sec-title">
          Kontak
        </h2>

        <p className="sec-sub">
          Ada proyek atau pertanyaan? Kirim pesan,
          saya biasanya membalas dalam 1–2 hari.
        </p>

        <div className="contact-grid">

          <ul className="links">

            <li>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>Email</small>
                {contact.email}
              </a>
            </li>

            <li>
              <a
                href={`https://wa.me/${contact.wa}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>WhatsApp</small>
                {contact.wa}
              </a>
            </li>

            <li>
              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>GitHub</small>
                {contact.github}
              </a>
            </li>

            <li>
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>LinkedIn</small>
                {contact.linkedin}
              </a>
            </li>

          </ul>

          <div
            role="group"
            aria-label="Form kontak"
            className="form-box"
          >
            <form onSubmit={submit}>

              <label>
                Nama

                <input
                  type="text"
                  value={form.nama}
                  onChange={handleChange("nama")}
                  placeholder="Nama lengkap"
                  required
                />
              </label>

              <label>
                Email

                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="nama@email.com"
                  required
                />
              </label>

              <label>
                Pesan

                <textarea
                  value={form.pesan}
                  onChange={handleChange("pesan")}
                  placeholder="Tulis pesan kamu"
                  rows="5"
                  required
                />
              </label>

              <button
                type="submit"
                className="btn fill"
                disabled={loading}
              >
                {loading
                  ? "Mengirim..."
                  : "Kirim pesan"
                }
              </button>

              <p className="note">
                {sent
                  ? "Pesan berhasil dikirim! Terima kasih sudah menghubungi"
                  : "Semua kolom wajib diisi."
                }
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

/* =====================================================
   FOOTER
===================================================== */

function Footer() {
  return (
    <footer>
      <div className="wrap foot">

        <p>
          © {new Date().getFullYear()} {DATA.nama}.
          Dibuat dengan React.
        </p>

        <a href="#top">
          Kembali ke atas ↑
        </a>

      </div>
    </footer>
  );
}

/* =====================================================
   APP
===================================================== */

function App() {
  const [theme, setTheme] = useState(() => {
    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark"
        ? "light"
        : "dark"
    );
  };

  return (
    <>
      <Header
        theme={theme}
        toggle={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;