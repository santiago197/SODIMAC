# SODIMAC
Se construyó un sitio web de artículos para una empresa de contenido, cuyo objetivo es posicionar el sitio de artículos informativos orientado a tráfico orgánico desde Google. 

# Prerequisitos 
- Node.js 18+
- pnpm instalado

* Cómo correr el proyecto 
 - Instala las dependencias pnpm i
   Ejecuta 
```bash
pnpm dev
```
build 
 - pnpm build
Abre [http://localhost:3000](http://localhost:3000) 

* Decisiones técnicas tomadas 
     ¿Por qué App Router y no Pages Router? 
     - App Router permite Server Components y metadata declarativa por ruta, lo que facilita el HTML completo desde el servidor y metadata dinámica por página.
     - Aunque lo correcto para el ejercicio seria usar SSG, utilizamos SSR por que puede ser escalable, en el momento consultamos un mock,
     pero al momento de integrar el fetch a un api se van a necesitar renderizar los articulos del lado del  servidor.
     - Se separa en responsabilidades 
        - lib/ -> Lógica de datos 
        - componentes -> UI
        - Principio aplicado, Single Responsability Principle

* Estrategia de rendering (SSR) 
    - Cada página usa Server components con renderizado en servidor. 
    - SSR mediante Server Components de React genera el HTML en el servidor antes de llegar al navegador, lo que permite que Google indexe el contenido sin depender de la ejeción de Js. 
    - metadataBase en el layout globar puede resolver URLs relativas en OpenGrapgh, evitando inconsistencias o URLs incorrectas al compoartir contenido en redes sociales. 

* Consideraciones SEO 
    - Utiliza generateMetadata por que es dinámico por contenido, evitando inconsistencias en URls elativas
    - OpenGraph por página, lo que mejora la visualización al compartir enlaces 
    - Se usa único <h1> por página y <h2> para encabezados secundarios, facilitando la comprensión paa los motores de búsqueda. 
    - Si un slug no existe se ejecuta notFound() y muestra la página 404