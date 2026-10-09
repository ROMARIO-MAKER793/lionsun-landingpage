# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Contacto comercial LIONSUN

La configuración está centralizada en `src/config/contact.ts`. El número es temporal,
con vigencia prevista hasta diciembre de 2026; confirmar su continuidad antes de enero de 2027.
Para cambiarlo, editar solo `contact.whatsappNumber` con el número internacional
(solo dígitos, sin `+` ni espacios) y actualizar `whatsappValidity`.
No repetir el número en los componentes.

`getWhatsAppLink()` genera una consulta general. También acepta:

- `{ kind: "wholesale" }` para cotización mayorista.
- `{ kind: "category", category: "Varón" }` para una categoría.
- `{ kind: "product", name: "Media deportiva", code: "CODIGO-REAL" }` para un producto;
  el código es opcional y debe corresponder al catálogo real.

Los mensajes se codifican con `encodeURIComponent`. Los enlaces `https://wa.me/`
son válidos para móvil y escritorio; la apertura depende de WhatsApp/app/web del usuario.
En este primer bloque la función queda preparada: su conexión a los CTA y tarjetas
se realizará en la siguiente etapa aprobada.
