```powershell


   Oo    o.OOOo.    o      ooOoOOo o.     O       .oOOOo.
  o  O    O    `o  O          O    Oo     o       o     o        o
 O    o   o      O o          o    O O    O       O.
oOooOoOo  O      o o          O    O  o   o        `OOoo.
o      O  o      O O          o    O   o  O             `O .oOo  O  .oOo. 'OoOo. .oOo  .oOo.
O      o  O      o O          O    o    O O              o O     o  OooO'  o   O O     OooO'
o      O  o    .O' o     .    O    o     Oo       O.    .O o     O  O      O   o o     O
O.     O  OooOO'   OOoOooO ooOOoOo O     `o        `oooO'  `OoO' o' `OoO'  o   O `OoO' `OoO'


```

**Room Manager** — PoC

Made for showing of skills to  🧬  **ADLIN Science** team 👀

# Quick start with ⚙️ Make + 🐳 Docker Compose

## ✅  Pre-requisites

- **macOS** with Docker Desktop installed
- **Linux** with Docker engine installed
- **Windows**: **`make`** should work with WSL / MinGW / … (**untested**)

> **Warning**
> 🚨  The newest `docker compose` (**without hyphen**) command is used in Make files,  
> NOT `docker-compose`.

## 🏁  Start command

```shell
# 1. Working directory: repository root
# -------------------------------------
make configure
make start


# 2. Private back office
# Credentials: `admin` / `password`
# -------------------------------------
open http://localhost:9870


# 3. Public front end
# -------------------------------------
open http://localhost:3045


# That's all folks, …enjoy!
```

## ❓  Project insights

[Paper CMS](https://github.com/JulianCataldo/paper-cms) is used for Back office + API server.

Nuxt 2 is used for the front-end.

---

> **Note**
> This is a simple PoC, so no tests, no CI / CD, no deployments targets etc.
