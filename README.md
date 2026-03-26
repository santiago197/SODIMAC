

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

* Consideraciones SEO 
    - Utiliza generateMetadata por que es dinámico por contenido, evitando inconsistencias en URls elativas
    - OpenGraph por página, lo que mejora la visualización al compartir enlaces 
    - Se usa único <h1> por página y <h2> para encabezados secundarios, facilitando la comprensión paa los motores de búsqueda. 