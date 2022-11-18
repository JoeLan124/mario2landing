export const mylinks = [
  {
    name: "Start",
    submenu: false,
    sublinks: [],
  },
  {
    name: "Wissen",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublink: [
          { name: "Notfallinfos", link: "/" },
          { name: "Blog", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Angebot",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublink: [
          { name: "Übersicht", link: "/" },
          { name: "Klopfen gegen Angst", link: "/" },
          { name: "Unterstützer-Rettungsring", link: "/" },
          {
            name: "Naturcoaching Selbstführung",
            link: "/",
          },
          { name: "Coaching", link: "/" },
          {
            name: "piKTV Kognitive Verhaltenstherapie",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    name: "Honorar",
    submenu: false,
    sublinks: [
      {
        Head: "",
        sublink: [
          { name: "Notfallinfos", link: "/" },
          { name: "Blog", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Über...",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublink: [
          { name: "...Sie", link: "/" },
          { name: "...mich", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Kontakt",
    submenu: true,
    sublinks: [
      {
        Head: "",
        sublink: [
          { name: "Datenschutz persönlich ", link: "/" },
          { name: "Datenschutz juristisch ", link: "/" },
          { name: "Impressum", link: "/" },
        ],
      },
    ],
  },
];
