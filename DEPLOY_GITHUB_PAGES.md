# Despliegue de INCOMEX-TECH en GitHub Pages

El proyecto ya está configurado con rutas relativas (`base: './'` en `vite.config.ts`) y un flujo automático de **GitHub Actions** para publicar directamente en GitHub Pages sin afectar una futura migración a tu dominio personalizado.

## 1. Subir el código a GitHub

Crea un repositorio nuevo en GitHub (por ejemplo `incomex-tech-web`) y sube los archivos en la rama `main`:

```bash
git init
git add .
git commit -m "Sitio web INCOMEX-TECH listo para GitHub Pages"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

## 2. Activar GitHub Pages

1. Entra a tu repositorio en GitHub.
2. Ve a **Settings** → **Pages**.
3. En **Build and deployment** → **Source**, selecciona **GitHub Actions**.
4. Cada `git push` a `main` ejecutará automáticamente el flujo `.github/workflows/deploy.yml` (también puedes lanzarlo manualmente desde la pestaña **Actions** con **Run workflow**).
5. Al terminar, tu sitio quedará visible en:
   `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

## 3. Publicar más adelante en tu dominio actual (`incomex-tech.com`)

Cuando quieras apuntar tu dominio definitivo a este sitio sin perder los cambios:

1. En GitHub, ve a **Settings** → **Pages** → **Custom domain**, escribe `incomex-tech.com` (o `www.incomex-tech.com`) y guarda.
   - Si prefieres dejarlo fijo en el código, crea un archivo `public/CNAME` con una sola línea:
     ```text
     incomex-tech.com
     ```
2. En el panel DNS de tu proveedor de dominio, configura:
   - **Para dominio raíz (`incomex-tech.com`)**: 4 registros `A` apuntando a las IPs oficiales de GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **Para subdominio `www`**: un registro `CNAME` apuntando a `TU_USUARIO.github.io`.
3. Activa la casilla **Enforce HTTPS** en **Settings** → **Pages** una vez propagado el DNS.
